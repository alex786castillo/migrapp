import { Link } from "react-router-dom";
import Pagina from "../components/Pagina";

// Placeholder de la cuenta. Se deja como esta a proposito: la app es publica y
// la cuenta es opcional, asi que esto no debe verse como un error.
export default function Perfil() {
  return (
    <Pagina
      titulo="Mi cuenta"
      descripcion="Todavía no hay nada que guardar aquí. MigrApp funciona completa sin cuenta."
    >
      <div className="directorio__vacio">
        <p className="mb-3">
          Pronto podrás guardar tu progreso en los trámites y tus lugares
          favoritos.
        </p>
        <Link to="/regularizate" className="btn btn-primary btn-sm">
          Ir a Regularízate
        </Link>
      </div>
    </Pagina>
  );
}
