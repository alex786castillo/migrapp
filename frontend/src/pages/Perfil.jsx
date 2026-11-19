import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Pagina from "../components/Pagina";
import { cerrarSesion, leerUsuario } from "../services/sesion";

// La cuenta es opcional: sin sesión, esta página invita a entrar. Con sesión,
// muestra los datos públicos que guardó el login.
export default function Perfil() {
  const navegar = useNavigate();
  const usuario = leerUsuario();

  function salir() {
    cerrarSesion();
    navegar("/");
  }

  if (!usuario) {
    return (
      <Pagina
        titulo="Mi cuenta"
        descripcion="La cuenta es opcional: MigrApp funciona completa sin registrarte."
      >
        <div className="perfil">
          <p className="perfil__texto">
            Inicia sesión o crea una cuenta para ver tus datos aquí.
          </p>
          <div className="perfil__acciones">
            <Button as={Link} to="/login" variant="primary" size="sm">
              Iniciar sesión
            </Button>
            <Button as={Link} to="/registro" variant="outline-primary" size="sm">
              Registrarme
            </Button>
          </div>
        </div>
      </Pagina>
    );
  }

  return (
    <Pagina
      titulo={`Hola, ${usuario.nombre}`}
      descripcion="Esta es la información de tu cuenta."
    >
      <div className="perfil">
        <dl className="perfil__datos">
          <div className="perfil__fila">
            <dt>Nombre</dt>
            <dd>
              {usuario.nombre} {usuario.apellido}
            </dd>
          </div>
          <div className="perfil__fila">
            <dt>Correo</dt>
            <dd>{usuario.correo}</dd>
          </div>
        </dl>
        <div className="perfil__acciones">
          <Button as={Link} to="/regularizate" variant="primary" size="sm">
            Ir a Regularízate
          </Button>
          <Button variant="outline-primary" size="sm" onClick={salir}>
            Cerrar sesión
          </Button>
        </div>
      </div>
    </Pagina>
  );
}
