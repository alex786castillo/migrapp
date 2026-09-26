import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-light border-top py-4 mt-auto">
      <div className="container small text-muted">
        <p className="mb-1">
          <strong>MigrApp</strong> orienta, no tramita. No recibimos ni guardamos documentos.
          Confirma siempre la información en las fuentes oficiales:{" "}
          <a href="https://www.migracioncolombia.gov.co" target="_blank" rel="noreferrer">
            Migración Colombia
          </a>{" "}
          y{" "}
          <a href="https://www.cancilleria.gov.co" target="_blank" rel="noreferrer">
            Cancillería
          </a>.
        </p>
        <p className="mb-0">
          <Link to="/ayuda">Ayuda urgente</Link> · <Link to="/preguntas">Preguntas frecuentes</Link>
        </p>
      </div>
    </footer>
  );
}
