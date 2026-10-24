import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

// Las 5 secciones de la app. Cambiar aqui cambia el menu en toda la app.
const secciones = [
  { to: "/", texto: "Inicio" },
  { to: "/regularizate", texto: "Regularízate" },
  { to: "/documentos", texto: "Documentos" },
  { to: "/empleo", texto: "Empleo" },
  { to: "/donde-ir", texto: "Dónde ir" },
];

// Icono de aviso reutilizado por el boton de emergencia.
function IconoAviso() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M8 1.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-.558.834A.75.75 0 0 0 4.28 11h7.44a.75.75 0 0 0 .632-1.249l-.558-.834a1.75 1.75 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.014.098.042.14l.558.834A1.5 1.5 0 0 1 12.28 11H10a2 2 0 1 1-4 0H3.72a1.5 1.5 0 0 1-1.32-2.079l.558-.834a.25.25 0 0 0 .042-.14V5Z" />
    </svg>
  );
}

export default function Menu() {
  return (
    <Navbar expand="lg" sticky="top" className="menu">
      <Container>
        <Navbar.Brand as={Link} to="/" className="menu__marca">
          MigrApp
        </Navbar.Brand>

        {/* En movil el colapsable esconde los enlaces, pero "Ayuda urgente" no
            puede quedar detras del hamburguesa: es la salida de quien esta en
            crisis. Se renderiza aqui fuera y se oculta en lg, donde la misma
            accion vive dentro del colapsable. */}
        <Button
          as={Link}
          to="/ayuda"
          variant="warning"
          size="sm"
          className="menu__urgente d-lg-none"
        >
          <IconoAviso />
          <span className="ms-1">Ayuda urgente</span>
        </Button>

        <Navbar.Toggle aria-controls="menu-principal" className="ms-auto" />

        <Navbar.Collapse id="menu-principal">
          <Nav className="me-auto">
            {secciones.map((s) => (
              // NavLink marca la pagina actual; la clase "activo" la pone el
              // propio router y es la que underlines en .menu__enlace::after.
              <Nav.Link
                as={NavLink}
                to={s.to}
                key={s.to}
                end={s.to === "/"}
                className={({ isActive }) =>
                  `menu__enlace${isActive ? " activo" : ""}`
                }
              >
                {s.texto}
              </Nav.Link>
            ))}
          </Nav>
          <Nav className="menu__acciones">
            <Button
              as={Link}
              to="/ayuda"
              variant="warning"
              size="sm"
              className="menu__urgente d-none d-lg-inline-flex"
            >
              <IconoAviso />
              <span className="ms-1">Ayuda urgente</span>
            </Button>
            <Button
              as={Link}
              to="/login"
              variant="outline-light"
              size="sm"
              className="menu__cuenta"
            >
              Entrar
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
