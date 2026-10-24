// Estructura comun de todas las paginas: el <h1> y su descripcion.
//
// Existia como copia literal en 7 archivos (siempre <h1 className="titulo-pagina">
// seguido de un <p className="text-muted">). Editar el estilo de esa cabecera
// obligaba a abrir los 7. Ahora el estilo vive en .pagina__* dentro de index.css
// y este componente es el unico que lo consume.
//
//   <Pagina titulo="Ayuda urgente" descripcion="Toca un numero para llamar." />
//     ...contenido de la pagina...
//   </Pagina>
export default function Pagina({ titulo, descripcion, children }) {
  return (
    <>
      <header className="pagina__cabecera">
        <h1 className="pagina__titulo">{titulo}</h1>
        {descripcion && <p className="pagina__descripcion">{descripcion}</p>}
      </header>
      {children}
    </>
  );
}
