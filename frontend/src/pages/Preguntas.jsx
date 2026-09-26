import { Accordion } from "react-bootstrap";

const faqs = [
  ["¿Puedo trabajar con el sello de turista (PIP)?", "No. Para trabajar formalmente necesitas PPT, PEP-Tutor o una visa."],
  ["Soy adulto y no tengo PPT, ¿qué puedo hacer?", "Si entraste antes del 4 de diciembre de 2024, la Visa V Visitante Especial es tu opción principal (hasta el 14 de marzo de 2027). Si eres cuidador de un menor con PPT, el PEP-Tutor."],
  ["¿Mi pasaporte vencido sirve?", "Sí. Colombia acepta el pasaporte venezolano hasta 10 años después de vencido."],
  ["¿Mis hijos pueden estudiar sin papeles?", "Sí. El colegio no puede negar la matrícula por falta de documentos, y estar matriculado permite pedir el PPT del menor."],
  ["¿MigrApp hace trámites por mí?", "No. Orientamos y te llevamos a la página oficial. Nunca pedimos ni guardamos tus documentos."],
];

export default function Preguntas() {
  return (
    <>
      <h1 className="h3">Preguntas frecuentes</h1>
      <Accordion>
        {faqs.map(([p, r], i) => (
          <Accordion.Item eventKey={String(i)} key={i}>
            <Accordion.Header>{p}</Accordion.Header>
            <Accordion.Body>{r}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
}
