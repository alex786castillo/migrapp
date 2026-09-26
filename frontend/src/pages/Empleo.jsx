import { Card, ListGroup } from "react-bootstrap";

export default function Empleo() {
  return (
    <>
      <h1 className="h3">Trabajar en Colombia</h1>
      <p className="text-muted">MigrApp no publica ofertas propias: te decimos qué necesitas y dónde buscar.</p>

      <Card className="mb-3">
        <Card.Header>¿Con qué documento puedo trabajar formalmente?</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>PPT vigente: sí.</ListGroup.Item>
          <ListGroup.Item>PEP-Tutor: sí, formal o independiente.</ListGroup.Item>
          <ListGroup.Item>Visa V Visitante Especial, visa M o R: sí.</ListGroup.Item>
          <ListGroup.Item className="text-danger">PIP / PTP (sello de turista): no.</ListGroup.Item>
        </ListGroup>
      </Card>

      <Card className="mb-3">
        <Card.Header>Dónde buscar empleo</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item action href="https://www.serviciodeempleo.gov.co" target="_blank">
            Servicio Público de Empleo (oficial y gratuito)
          </ListGroup.Item>
          <ListGroup.Item action href="https://www.computrabajo.com.co" target="_blank">
            Computrabajo
          </ListGroup.Item>
        </ListGroup>
      </Card>

      <Card>
        <Card.Header>Antes de tu primera entrevista</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Hoja de vida corta (1 página), sin foto obligatoria, con teléfono colombiano.</ListGroup.Item>
          <ListGroup.Item>Ten claro tu número de permiso o visa: te lo van a pedir.</ListGroup.Item>
          <ListGroup.Item>Con contrato formal te afilian a salud (EPS) y pensión: es tu derecho, no un favor.</ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
}
