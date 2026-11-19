import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";
import api from "../services/api";
import AccesoForm from "../components/AccesoForm";
import Campo from "../components/Campo";

// POST /api/usuarios/registro
//   cuerpo  { nombre, apellido, correo, contrasena }
//   exito   201 { mensaje }
//   fallo   400/409/500 { mensaje }
export default function Registro() {
  const navegar = useNavigate();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
  const [enviando, setEnviando] = useState(false);

  async function enviar(e) {
    e.preventDefault();
    setError("");

    if (!nombre.trim() || !apellido.trim() || !correo.trim() || !contrasena) {
      setError("Completa todos los campos.");
      return;
    }

    if (contrasena.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    setEnviando(true);
    try {
      const { data } = await api.post("/usuarios/registro", {
        nombre,
        apellido,
        correo,
        contrasena,
      });

      if (data.mensaje) {
        navegar("/login", { state: { creado: true } });
      } else {
        setError("No pudimos crear la cuenta. Intenta de nuevo.");
      }
    } catch (e) {
      const msg = e.response?.data?.mensaje;
      setError(
        msg ||
          (e.response
            ? "No pudimos crear la cuenta. El correo puede estar repetido."
            : "No hay conexión con el servidor. Revisa tu internet.")
      );
    } finally {
      setEnviando(false);
    }
  }

  return (
    <AccesoForm
      titulo="Registrarse"
      error={error}
      pie={
        <>
          ¿Ya te registraste? <Link to="/login">Iniciar sesión</Link>
        </>
      }
    >
      <form onSubmit={enviar} noValidate>
        <Campo
          id="nombre"
          etiqueta="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ingresa tu nombre"
          autoComplete="given-name"
          autoFocus
        />
        <Campo
          id="apellido"
          etiqueta="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          placeholder="Ingresa tu apellido"
          autoComplete="family-name"
        />
        <Campo
          id="correo"
          etiqueta="Correo"
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          placeholder="tucorreo@ejemplo.com"
          autoComplete="email"
        />
        <Campo
          id="contrasena"
          etiqueta="Contraseña"
          type="password"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          placeholder="Mínimo 8 caracteres"
          autoComplete="new-password"
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
                Creando cuenta…
              </>
            ) : (
              "Registrarse"
            )}
          </Button>
        </div>
      </form>
    </AccesoForm>
  );
}
