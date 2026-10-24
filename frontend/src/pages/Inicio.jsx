import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import portadaImagen from "../images/venezolanos.jpg";

// El inicio es un "hub": una pregunta y tarjetas grandes hacia cada seccion.
const accesos = [
  {
    to: "/regularizate",
    titulo: "Quiero regularizarme",
    texto: "Descubre qué permiso o visa te sirve y cómo pedirlo.",
  },
  {
    to: "/documentos",
    titulo: "Mis documentos venezolanos",
    texto: "Qué vale en Colombia: pasaporte vencido, cédula, títulos.",
  },
  {
    to: "/empleo",
    titulo: "Quiero trabajar",
    texto: "Qué permisos te dejan trabajar formal y dónde buscar.",
  },
  {
    to: "/donde-ir",
    titulo: "Dónde ir",
    texto: "Migración Colombia, salud, atención a migrantes en tu ciudad.",
  },
  {
    to: "/ayuda",
    titulo: "Necesito ayuda ahora",
    texto: "Líneas y organizaciones que atienden migrantes.",
  },
];

// Flecha del enlace. aria-hidden: el sentido ya lo da el texto del enlace.
function Flecha() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className="acceso__flecha"
    >
      <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14H2V4h6.136a.5.5 0 0 0 .5-.5Z" />
      <path d="M16 .5A.5.5 0 0 0 15.5 0h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5Z" />
    </svg>
  );
}

export default function Inicio() {
  return (
    <>
      <section className="portada animar-directo">
        <img
          className="portada__media"
          src={portadaImagen}
          alt=""
          aria-hidden="true"
        />
        <div className="portada__contenido">
          <div className="portada__insignias">
            <span className="portada__insignia">Gratis</span>
            <span className="portada__insignia">Sin registro</span>
            <span className="portada__insignia">Información oficial</span>
          </div>
          <h1 className="portada__titulo">Bienvenido a Colombia</h1>
          <p className="portada__texto">
            Guía práctica para venezolanos: trámites, documentos, empleo y a
            dónde acudir. Todo en un solo sitio y sin pedirte ningún documento.
          </p>
        </div>
      </section>

      <h2 className="pagina__titulo mb-3">¿Qué necesitas hoy?</h2>
      <Row xs={1} md={2} lg={3} className="g-3">
        {accesos.map((a) => (
          <Col key={a.to} className="d-flex">
            <Link to={a.to} className="acceso animar-entrada">
              <div className="acceso__cuerpo">
                <div className="acceso__titulo">
                  {a.titulo}
                  <Flecha />
                </div>
                <p className="acceso__texto">{a.texto}</p>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}
