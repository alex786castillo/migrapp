import { Link } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";

// El inicio es un "hub": una pregunta y tarjetas grandes hacia cada sección.
const accesos = [
  { to: "/regularizate", titulo: "Quiero regularizarme", texto: "Descubre qué permiso o visa te sirve y cómo pedirlo." },
  { to: "/documentos", titulo: "Mis documentos venezolanos", texto: "Qué vale en Colombia: pasaporte vencido, cédula, títulos." },
  { to: "/empleo", titulo: "Quiero trabajar", texto: "Qué permisos te dejan trabajar formal y dónde buscar." },
  { to: "/donde-ir", titulo: "Dónde ir", texto: "Migración Colombia, salud, atención a migrantes en tu ciudad." },
  { to: "/ayuda", titulo: "Necesito ayuda ahora", texto: "Líneas y organizaciones que atienden migrantes." },
];

export default function Inicio() {
  return (
    <>
      <section className="text-center py-4">
        <h1 className="fw-bold">Bienvenido a Colombia</h1>
        <p className="lead text-muted">
          Guía práctica para venezolanos: trámites, documentos, empleo y a dónde acudir. Gratis y sin registro.
        </p>
      </section>

      <h2 className="h5 mb-3">¿Qué necesitas hoy?</h2>
      <Row xs={1} md={2} lg={3} className="g-3">
        {accesos.map((a) => (
          <Col key={a.to}>
            <Card as={Link} to={a.to} className="h-100 text-decoration-none shadow-sm">
              <Card.Body>
                <Card.Title>{a.titulo}</Card.Title>
                <Card.Text className="text-muted">{a.texto}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
