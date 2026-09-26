// Envoltura commun de Login y Registro: tarjeta centrada con su mensaje de
// error y el enlace al otro formulario.
//
// Antes cada pagina repetia la estructura completa Y el mensaje de error se
// mostraba con alert() del navegador, que se lleva el foco, no se estila y en
// movil tapa la pantalla. Aqui el error es un elemento normal, con
// role="alert" para que un lector de pantalla lo anuncie.
export default function AccesoForm({
  titulo,
  error,
  exito,
  children,
  pie,
}) {
  return (
    <div className="acceso-form">
      <h1 className="acceso-form__titulo">{titulo}</h1>

      {error && (
        <p className="acceso-form__error" role="alert">
          {error}
        </p>
      )}

      {exito && (
        <p className="acceso-form__error acceso-form__exito" role="status">
          {exito}
        </p>
      )}

      {children}

      {pie && <p className="acceso-form__pie">{pie}</p>}
    </div>
  );
}
