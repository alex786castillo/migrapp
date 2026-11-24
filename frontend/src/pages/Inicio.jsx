import { Link } from "react-router-dom";
import portadaImagen from "../images/venezolanos.jpg";
import iconoRegularizate from "../images/iconos/regularizate.png";
import iconoDocumentos from "../images/iconos/documentos.png";
import iconoEmpleo from "../images/iconos/empleo.png";
import iconoDondeIr from "../images/iconos/donde-ir.png";
import iconoAyuda from "../images/iconos/ayuda.png";

// El inicio es un "hub": una pregunta y tarjetas grandes hacia cada seccion.
// Cada acceso lleva su icono, pero el texto sigue siendo la etiqueta principal.
// "tono" solo cambia el fondo del tile; no aporta informacion.
const accesos = [
  {
    to: "/regularizate",
    titulo: "Quiero regularizarme",
    texto: "Descubre qué permiso o visa te sirve y cómo pedirlo.",
    icono: iconoRegularizate,
    tono: "azul",
  },
  {
    to: "/documentos",
    titulo: "Mis documentos venezolanos",
    texto: "Qué vale en Colombia: pasaporte vencido, cédula, títulos.",
    icono: iconoDocumentos,
    tono: "oro",
  },
  {
    to: "/empleo",
    titulo: "Quiero trabajar",
    texto: "Qué permisos te dejan trabajar formal y dónde buscar.",
    icono: iconoEmpleo,
    tono: "rosa",
  },
  {
    to: "/donde-ir",
    titulo: "Dónde ir",
    texto: "Migración Colombia, salud, atención a migrantes en tu ciudad.",
    icono: iconoDondeIr,
    tono: "verde",
  },
  {
    to: "/ayuda",
    titulo: "Necesito ayuda ahora",
    texto:
      "Líneas y organizaciones que atienden migrantes. Si es urgente, no tienes que resolverlo solo.",
    icono: iconoAyuda,
    tono: "durazno",
    destacado: true,
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
        <div className="portada__contenido">
          <p className="portada__eyebrow">
            Hecho para venezolanos en Colombia
          </p>
          <h1 className="portada__titulo">
            Bienvenido a{" "}
            <span className="portada__subrayado">
              Colombia
              <svg
                className="portada__trazo"
                viewBox="0 0 220 14"
                preserveAspectRatio="none"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M5 9.5C52 3.5 154 2.5 215 6.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p className="portada__entrada">
            Llegar a un país nuevo trae muchas preguntas. Aquí encuentras
            respuestas claras sobre tus trámites, tus documentos y tu trabajo,
            explicadas paso a paso y sin pedirte nada.
          </p>
          <div className="portada__acciones">
            <a className="boton boton--acento" href="#hoy">
              ¿Qué necesito hoy?
            </a>
            <Link className="boton boton--claro" to="/asistente">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M2.5 2h11A1.5 1.5 0 0 1 15 3.5v7a1.5 1.5 0 0 1-1.5 1.5H8.7l-3.1 2.4a.6.6 0 0 1-.97-.48V12H2.5A1.5 1.5 0 0 1 1 10.5v-7A1.5 1.5 0 0 1 2.5 2Zm0 1.2a.3.3 0 0 0-.3.3v7a.3.3 0 0 0 .3.3h2.7v2.2l2.7-2.1.2-.1h5.4a.3.3 0 0 0 .3-.3v-7a.3.3 0 0 0-.3-.3h-11Z" />
              </svg>
              Pregúntale al asistente
            </Link>
          </div>
          <p className="portada__confianza">
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M6.17 12.31a1 1 0 0 1-.75-.35L2.2 8.2a.9.9 0 1 1 1.35-1.2l2.5 2.8 6.2-6.9a.9.9 0 1 1 1.35 1.2l-6.9 7.7a1 1 0 0 1-.66.31Z" />
            </svg>
            <span>Gratis</span>
            <span className="portada__separador" aria-hidden="true">
              ·
            </span>
            <span>Sin registro</span>
            <span
              className="portada__separador portada__separador--fin"
              aria-hidden="true"
            >
              ·
            </span>
            <span>No guardamos tus documentos</span>
          </p>
        </div>

        <figure className="portada__foto">
          <img src={portadaImagen} alt="" width="1200" height="800" />
          <figcaption className="portada__cita">
            <svg
              width="15"
              height="15"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M8 14.2 6.9 13.2C3 9.7 1 7.9 1 5.2 1 3.2 2.5 1.7 4.5 1.7c1.1 0 2.2.5 3.5 1.9 1.3-1.4 2.4-1.9 3.5-1.9 2 0 3.5 1.5 3.5 3.5 0 2.7-2 4.5-5.9 8l-1.1 1Z" />
            </svg>
            Un lugar para empezar con calma
          </figcaption>
        </figure>
      </section>

      <section
        className="inicio__seccion"
        id="hoy"
        aria-labelledby="inicio-titulo"
      >
        <div className="inicio__cabecera">
          <p className="inicio__eyebrow">Empieza por aquí</p>
          <h2 className="inicio__titulo" id="inicio-titulo">
            ¿En qué te podemos ayudar hoy?
          </h2>
          <p className="inicio__baja">
            Elige un camino. Te explicamos cada paso, sin letra pequeña.
          </p>
        </div>

        <div className="inicio__grid">
          {accesos.map((a) => (
            <Link
              key={a.to}
              to={a.to}
              className={`acceso acceso--${a.tono}${
                a.destacado ? " acceso--ayuda" : ""
              } animar-entrada`}
            >
              <span className="acceso__tile" aria-hidden="true">
                <img
                  className="acceso__icono"
                  src={a.icono}
                  alt=""
                  width="64"
                  height="64"
                />
              </span>
              <span className="acceso__cuerpo">
                <span className="acceso__titulo">
                  {a.titulo}
                  <Flecha />
                </span>
                <span className="acceso__texto">{a.texto}</span>
              </span>
            </Link>
          ))}
        </div>

        <Link className="asistente-banda" to="/asistente">
          <span className="asistente-banda__icono" aria-hidden="true">
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
              focusable="false"
            >
              <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-3.7-.8L3 21l1.9-5.1a8.4 8.4 0 0 1-.9-3.8 8.4 8.4 0 0 1 8.4-8.4h.1A8.4 8.4 0 0 1 21 11.5Z" />
              <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" />
            </svg>
          </span>
          <span className="asistente-banda__texto">
            <strong>¿Todavía tienes dudas?</strong>
            <span>
              El asistente de MigrApp te responde sobre trámites, documentos y
              empleo. Sin registro.
            </span>
          </span>
          <span className="asistente-banda__cta">
            Preguntar ahora
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M1 8a.5.5 0 0 1 .5-.5h11.293L8.146 2.854a.5.5 0 1 1 .708-.708l5.5 5.5a.5.5 0 0 1 0 .708l-5.5 5.5a.5.5 0 0 1-.708-.708L12.793 8.5H1.5A.5.5 0 0 1 1 8Z" />
            </svg>
          </span>
        </Link>
      </section>
    </>
  );
}
