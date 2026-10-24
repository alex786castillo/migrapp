import { Badge, Alert } from "react-bootstrap";

// Los tres estados y su color. Cada estado trae su propia clase y el color
// sale de los tokens de index.css.
//
// NO se quita el bg={null} de <Badge>. El Badge de react-bootstrap trae
// bg="primary" POR DEFECTO (esta escrito en su propio codigo), asi que sin ese
// argumento se renderiza class="... badge bg-primary". Y las utilidades .bg-*
// de Bootstrap 5.3 llevan !important, que no gana ninguna regla normal: por
// mucho que .estado--menores ponga background-color, la pildora salia azul.
// Peor: .bg-primary no toca el color del texto, asi que se veía una pildora
// azul con el texto negro encima, que es justo lo que pasaba.
//
// Hay 12 utilidades .bg-* con !important en el CSS, asi que no es una
// excepcion. Por eso el color de la pildora lo pone la clase del estado, y
// solo la clase del estado.
const etiqueta = {
  abierto: { texto: "Abierto", clase: "estado--abierto" },
  menores: { texto: "Solo menores", clase: "estado--menores" },
  cerrado: { texto: "Cerrado", clase: "estado--cerrado" },
};

// Recibe UN tramite (objeto de data/tramites.js) y lo pinta siempre igual.
export default function TarjetaTramite({ tramite }) {
  const e = etiqueta[tramite.estado] || etiqueta.cerrado;

  // Los cuatro datos de gestion se dibujan en el mismo orden en todas las
  // fichas. Si anades un campo aqui, se pinta en todas automaticamente.
  const gestion = [
    ["Dónde", tramite.donde],
    ["Costo", tramite.costo],
    ["Vigencia", tramite.vigencia],
    ["Plazo", tramite.plazo],
  ];

  return (
    <article className="tarjeta-tramite" id={tramite.id}>
      <div className="tarjeta-tramite__cuerpo">
        <div className="tarjeta-tramite__cabecera">
          <h3 className="tarjeta-tramite__titulo">{tramite.nombre}</h3>
          {/* bg={null} es obligatorio, no decorativo: sin el, react-bootstrap
              añade bg-primary y su !important gana. Ver el comentario de
              arriba. */}
          <Badge bg={null} className={`estado ${e.clase}`}>
            {e.texto}
          </Badge>
        </div>

        <p className="tarjeta-tramite__resumen">{tramite.resumen}</p>

        {tramite.alerta && (
          <Alert variant="warning" className="tarjeta-tramite__alerta">
            {tramite.alerta}
          </Alert>
        )}

        <div className="tarjeta-tramite__bloque">
          <h4 className="tarjeta-tramite__subtitulo">¿Para quién es?</h4>
          <ul className="tarjeta-tramite__lista">
            {tramite.paraQuien.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>

        <div className="tarjeta-tramite__bloque">
          <h4 className="tarjeta-tramite__subtitulo">¿Qué necesitas?</h4>
          <ul className="tarjeta-tramite__lista">
            {tramite.requisitos.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>

        {/* dl en vez de una lista de labels: "costo" es un termino y "150.000
            COP" su definicion. Un lector de pantalla anuncia la relacion. */}
        <dl className="tarjeta-tramite__meta">
          {gestion.map(([termino, valor]) => (
            <div key={termino}>
              <dt>{termino}:</dt>
              <dd>{valor}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="tarjeta-tramite__pie">
        <a
          href={tramite.enlace}
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline-primary btn-sm"
        >
          Ir a la página oficial
          <svg
            width="13"
            height="13"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
            className="ms-1"
          >
            <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14H2V4h6.136a.5.5 0 0 0 .5-.5Z" />
            <path d="M16 .5A.5.5 0 0 0 15.5 0h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5Z" />
          </svg>
        </a>
      </div>
    </article>
  );
}
