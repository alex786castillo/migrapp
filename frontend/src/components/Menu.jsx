import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

// Las 5 secciones de la app. Cambiar aquí cambia el menú en toda la app.
const secciones = [
  { to: "/", texto: "Inicio" },
  { to: "/regularizate", texto: "Regularízate" },
  { to: "/documentos", texto: "Documentos" },
  { to: "/empleo", texto: "Empleo" },
  { to: "/donde-ir", texto: "Dónde ir" },
];

export default function Menu() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">MigrApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-principal" />
        <Navbar.Collapse id="menu-principal">
          <Nav className="me-auto">
            {secciones.map((s) => (
              // NavLink marca como "active" el enlace de la página actual
              <Nav.Link as={NavLink} to={s.to} key={s.to} end={s.to === "/"}>
                {s.texto}
              </Nav.Link>
            ))}
          </Nav>
          <Nav className="gap-2">
            <Button as={Link} to="/ayuda" variant="warning" size="sm">
              Ayuda urgente
            </Button>
            <Button as={Link} to="/login" variant="outline-light" size="sm">
              Entrar
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
