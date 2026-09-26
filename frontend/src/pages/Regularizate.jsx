import { useState } from "react";
import { Form } from "react-bootstrap";
import { tramites, preguntas, VERIFICADO } from "../data/tramites";
import Pagina from "../components/Pagina";
import TarjetaTramite from "../components/TarjetaTramite";

// El orden de `preguntas` (en data/tramites.js) ES la prioridad: la primera
// respondida con "si" es la que se recomienda. Cambiar el orden del array
// cambia la logica del asistente.
function Asistente() {
  const [respuestas, setRespuestas] = useState({});

  const respondidasTodas =
    preguntas.every((p) => respuestas[p.id] !== undefined);
  const recomendado = preguntas.find((p) => respuestas[p.id] === true)?.si;

  const marcar = (id, valor) =>
    setRespuestas((actual) => ({ ...actual, [id]: valor }));

  return (
    <section className="asistente animar-directo" aria-labelledby="asistente-titulo">
      <h2 className="asistente__titulo" id="asistente-titulo">
        ¿Cuál me sirve? Responde y te lo decimos
      </h2>

      {preguntas.map((p, i) => (
        <div className="asistente__pregunta" key={p.id}>
          <Form.Label className="asistente__etiqueta" htmlFor={`p-${p.id}-si`}>
            {i + 1}. {p.texto}
          </Form.Label>
          <div className="asistente__opciones" role="group" aria-label={p.texto}>
            <Form.Check
              inline
              type="radio"
              id={`p-${p.id}-si`}
              name={p.id}
              label="Sí"
              checked={respuestas[p.id] === true}
              onChange={() => marcar(p.id, true)}
            />
            <Form.Check
              inline
              type="radio"
              id={`p-${p.id}-no`}
              name={p.id}
              label="No"
              checked={respuestas[p.id] === false}
              onChange={() => marcar(p.id, false)}
            />
          </div>
        </div>
      ))}

      {recomendado ? (
        <div className="asistente__resultado" role="status">
          <a className="btn btn-primary" href={`#${recomendado}`}>
            Ver el trámite que te corresponde
          </a>
        </div>
      ) : (
        respondidasTodas && (
          <p className="asistente__nota">
            Si entraste hace poco, mira «Entrar hoy: PIP y prórroga». Para trabajar
            necesitarás una visa.
          </p>
        )
      )}
    </section>
  );
}

export default function Regularizate() {
  return (
    <Pagina
      titulo="Regularízate"
      descripcion={`Información verificada el ${VERIFICADO}. La normativa cambia: confirma siempre en la página oficial.`}
    >
      <Asistente />

      {tramites.map((t) => (
        <TarjetaTramite key={t.id} tramite={t} />
      ))}
    </Pagina>
  );
}
