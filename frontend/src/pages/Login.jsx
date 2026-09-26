import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";
import api from "../services/api";
import AccesoForm from "../components/AccesoForm";
import Campo from "../components/Campo";

// POST /api/usuarios/autenticacion
//   cuerpo  { correo, contraseña }
//   exito   200 { mensaje }
//   fallo   401 { mensaje }   <- axios lanza excepcion, hay que capturarla
export default function Login() {
  const navegar = useNavigate();
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
  const [enviando, setEnviando] = useState(false);

  async function enviar(e) {
    e.preventDefault();
    setError("");

    if (!correo.trim() || !contrasena) {
      setError("Completa el correo y la contraseña.");
      return;
    }

    setEnviando(true);
    try {
      const { data } = await api.post("/usuarios/autenticacion", {
        correo,
        contraseña: contrasena,
      });
      // El backend responde 200 solo cuando las credenciales son correctas.
      if (data.mensaje === "Usuario autenticado correctamente") {
        navegar("/");
      } else {
        setError(data.mensaje || "No pudimos iniciar sesión.");
      }
    } catch (e) {
      // Antes este catch solo hacia console.log: una contraseña incorrecta
      // (401) no mostraba absolutely nada al usuario.
      const msg = e.response?.data?.mensaje;
      setError(
        msg ||
          (e.response
            ? "No pudimos iniciar sesión. Intenta de nuevo."
            : "No hay conexión con el servidor. Revisa tu internet.")
      );
    } finally {
      setEnviando(false);
    }
  }

  return (
    <AccesoForm
      titulo="Iniciar sesión"
      error={error}
      pie={
        <>
          ¿No tienes cuenta? <Link to="/registro">Registrarse</Link>
        </>
      }
    >
      <form onSubmit={enviar} noValidate>
        <Campo
          id="correo"
          etiqueta="Correo"
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          placeholder="tucorreo@ejemplo.com"
          autoComplete="email"
          autoFocus
        />
        <Campo
          id="contrasena"
          etiqueta="Contraseña"
          type="password"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          placeholder="Tu contraseña"
          autoComplete="current-password"
        />
        <div className="acceso-form__pie-boton d-grid">
          <Button type="submit" disabled={enviando}>
            {enviando ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  className="me-2"
                  aria-hidden="true"
                />
                Entrando…
              </>
            ) : (
              "Iniciar sesión"
            )}
          </Button>
        </div>
      </form>
    </AccesoForm>
  );
}
