import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="pie">
      <div className="app__principal">
        <p className="pie__aviso">
          <strong>MigrApp</strong> orienta, no tramita. No recibimos ni guardamos
          documentos. Confirma siempre la información en las fuentes oficiales:{" "}
          <a href="https://www.migracioncolombia.gov.co" target="_blank" rel="noreferrer">
            Migración Colombia
          </a>{" "}
          y{" "}
          <a href="https://www.cancilleria.gov.co" target="_blank" rel="noreferrer">
            Cancillería
          </a>
          .
        </p>
        <nav className="pie__enlaces" aria-label="Enlaces del pie">
          <Link className="pie__enlace" to="/ayuda">
            Ayuda urgente
          </Link>
          <Link className="pie__enlace" to="/preguntas">
            Preguntas frecuentes
          </Link>
          <Link className="pie__enlace" to="/perfil">
            Mi cuenta
          </Link>
        </nav>
      </div>
    </footer>
  );
}
