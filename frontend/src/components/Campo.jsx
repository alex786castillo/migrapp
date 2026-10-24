import { Form } from "react-bootstrap";

// Un campo de formulario con su etiqueta.
//
// El problema que resuelve: en Login y Registro los <label> apuntaban con
// htmlFor a ids que no existian ("email", "fname", "lname"...), porque el
// input real se llamaba "txtusu", "txtnom", "txtapll". Seis campos quedaban
// sin etiqueta para el lector de pantalla. Aqui la etiqueta y el input se
// escriben juntos, asi que no pueden desincronizarse.
//
//   <Campo id="correo" etiqueta="Correo" type="email" value={...} />
export default function Campo({
  id,
  etiqueta,
  type = "text",
  value,
  onChange,
  autoComplete,
  placeholder,
  autoFocus,
}) {
  return (
    <Form.Group className="acceso-form__campo" controlId={id}>
      <Form.Label className="acceso-form__etiqueta">{etiqueta}</Form.Label>
      <Form.Control
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        required
      />
    </Form.Group>
  );
}
