import { useEffect, useRef, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../services/api";
import Pagina from "../components/Pagina";

const BIENVENIDA = {
  rol: "asistente",
  texto:
    "Hola. Soy el asistente de MigrApp. Puedo orientarte sobre regularización, documentos, empleo y a dónde acudir. No hago trámites ni guardo documentos. ¿Qué necesitas saber?",
};

const SUGERENCIAS = [
  "¿Puedo trabajar con el sello de turista (PIP)?",
  "¿Qué es la Visa V y hasta cuándo se puede pedir?",
  "Soy papá de un niño con PPT, ¿qué puedo hacer?",
];

export default function Asistente() {
  const [mensajes, setMensajes] = useState([BIENVENIDA]);
  const [texto, setTexto] = useState("");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");
  const fin = useRef(null);

  useEffect(() => {
    fin.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [mensajes, cargando]);

  async function enviar(pregunta) {
    const limpio = (pregunta ?? texto).trim();
    if (!limpio || cargando) return;

    // El saludo inicial no se envía como historial: solo los turnos reales.
    const historial = mensajes.slice(1).map((m) => ({
      rol: m.rol,
      texto: m.texto,
    }));

    const conUsuario = [...mensajes, { rol: "usuario", texto: limpio }];
    setMensajes(conUsuario);
    setTexto("");
    setError("");
    setCargando(true);

    try {
      const { data } = await api.post("/ia/chat", {
        mensaje: limpio,
        historial,
      });

      if (!data.respuesta) {
        throw new Error("sin respuesta");
      }

      setMensajes([
        ...conUsuario,
        { rol: "asistente", texto: data.respuesta },
      ]);
    } catch (e) {
      const msg = e.response?.data?.mensaje;
      setError(
        msg ||
          (e.response
            ? "El asistente no pudo responder. Intenta de nuevo."
            : "No hay conexión con el servidor. Revisa tu internet.")
      );
    } finally {
      setCargando(false);
    }
  }

  function alEnviar(e) {
    e.preventDefault();
    enviar();
  }

  return (
    <Pagina
      titulo="Asistente"
      descripcion="Pregunta por trámites, documentos, empleo o ayuda urgente. El asistente orienta con la información de MigrApp; no tramita ni guarda documentos."
    >
      <div className="asistente">
        <div
          className="asistente__mensajes"
          role="log"
          aria-live="polite"
          aria-busy={cargando}
          aria-label="Conversación con el asistente"
        >
          {mensajes.map((m, i) => (
            <div
              key={`${m.rol}-${i}`}
              className={`asistente__mensaje asistente__mensaje--${m.rol}`}
            >
              <span className="asistente__autor">
                {m.rol === "usuario" ? "Tú" : "Asistente"}
              </span>
              <p className="asistente__texto">{m.texto}</p>
            </div>
          ))}

          {cargando && (
            <div className="asistente__mensaje asistente__mensaje--asistente">
              <span className="asistente__autor">Asistente</span>
              <p className="asistente__texto asistente__escribiendo">
                <Spinner animation="border" size="sm" aria-hidden="true" />
                Escribiendo…
              </p>
            </div>
          )}

          <div ref={fin} />
        </div>

        {error && (
          <p className="asistente__error" role="alert">
            {error}
          </p>
        )}

        {mensajes.length === 1 && !cargando && (
          <div className="asistente__sugerencias">
            {SUGERENCIAS.map((s) => (
              <button
                key={s}
                type="button"
                className="asistente__sugerencia"
                onClick={() => enviar(s)}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        <form className="asistente__formulario" onSubmit={alEnviar}>
          <label className="solo-lectores" htmlFor="pregunta">
            Tu pregunta
          </label>
          <input
            id="pregunta"
            className="asistente__entrada"
            type="text"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Escribe tu pregunta…"
            maxLength={1000}
            autoComplete="off"
            disabled={cargando}
          />
          <Button type="submit" disabled={cargando || !texto.trim()}>
            Enviar
          </Button>
        </form>

        <p className="apoyo asistente__aviso">
          El asistente puede equivocarse: verifica siempre en las fuentes
          oficiales. Tus preguntas se envían a Google para generar la
          respuesta; no escribas datos personales. Si estás en una emergencia,
          llama al <a href="tel:123">123</a> o visita{" "}
          <Link to="/ayuda">Ayuda urgente</Link>.
        </p>
      </div>
    </Pagina>
  );
}
