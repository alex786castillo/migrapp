import { ListGroup } from "react-bootstrap";

const lineas = [
  { nombre: "Emergencias (policía, ambulancia, bomberos)", dato: "123", href: "tel:123" },
  { nombre: "Línea de atención a migrantes – Migración Colombia", dato: "(601) 605 5454", href: "tel:+576016055454" },
  { nombre: "ACNUR Colombia – ayuda e información", dato: "help.unhcr.org/colombia", href: "https://help.unhcr.org/colombia/" },
  { nombre: "Defensoría del Pueblo", dato: "(601) 314 7300", href: "tel:+576013147300" },
  { nombre: "Línea 155 – violencia contra la mujer", dato: "155", href: "tel:155" },
];

export default function Ayuda() {
  return (
    <>
      <h1 className="h3">Ayuda urgente</h1>
      <p className="text-muted">Toca un número para llamar desde el celular.</p>
      <ListGroup>
        {lineas.map((l) => (
          <ListGroup.Item key={l.nombre} action href={l.href} className="d-flex justify-content-between">
            <span>{l.nombre}</span>
            <strong>{l.dato}</strong>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}
