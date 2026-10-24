import Pagina from "../components/Pagina";

// Con que documento se puede trabajar formalmente. `ok: false` es lo que
// cambia el color y la marca del punto: no se apoya solo en el color.
const permisos = [
  { texto: "PPT vigente", ok: true },
  { texto: "PEP-Tutor", ok: true, nota: "formal o independiente" },
  { texto: "Visa V Visitante Especial, visa M o R", ok: true },
  { texto: "PIP / PTP (sello de turista)", ok: false },
];

const buscar = [
  {
    texto: "Servicio Público de Empleo (oficial y gratuito)",
    href: "https://www.serviciodeempleo.gov.co",
  },
  { texto: "Computrabajo", href: "https://www.computrabajo.com.co" },
];

const antesDeEntrevista = [
  "Hoja de vida corta (1 página), sin foto obligatoria, con teléfono colombiano.",
  "Ten claro tu número de permiso o visa: te lo van a pedir.",
  "Con contrato formal te afilian a salud (EPS) y pensión: es tu derecho, no un favor.",
];

// Check / aspa. aria-hidden: el estado ya lo dice el texto y el color.
function Marca({ ok }) {
  return (
    <span
      className={`bloque__marca${ok ? "" : " bloque__marca--no"}`}
      aria-hidden="true"
    >
      {ok ? "✓" : "✕"}
    </span>
  );
}

export default function Empleo() {
  return (
    <Pagina
      titulo="Trabajar en Colombia"
      descripcion="MigrApp no publica ofertas propias: te decimos qué necesitas y dónde buscar."
    >
      <section className="bloque animar-directo">
        <h2 className="bloque__cabecera">
          ¿Con qué documento puedo trabajar formalmente?
        </h2>
        <ul className="list-unstyled mb-0">
          {permisos.map((p) => (
            <li
              key={p.texto}
              className={`bloque__fila${p.ok ? "" : " bloque__fila--no"}`}
            >
              <Marca ok={p.ok} />
              <span>
                {p.texto}
                {p.nota && (
                  <span className="apoyo"> — {p.nota}</span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bloque animar-directo">
        <h2 className="bloque__cabecera">Dónde buscar empleo</h2>
        {buscar.map((b) => (
          <a
            key={b.href}
            className="bloque__fila"
            href={b.href}
            target="_blank"
            rel="noreferrer"
          >
            {b.texto}
            <span className="acceso__flecha ms-auto" aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
      </section>

      <section className="bloque animar-directo">
        <h2 className="bloque__cabecera">Antes de tu primera entrevista</h2>
        <ul className="list-unstyled mb-0">
          {antesDeEntrevista.map((t) => (
            <li key={t} className="bloque__fila">
              <Marca ok />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </section>
    </Pagina>
  );
}
