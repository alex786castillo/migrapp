import { Card, Badge, ListGroup, Alert } from "react-bootstrap";

const etiqueta = {
  abierto: { texto: "Abierto", color: "success" },
  menores: { texto: "Solo menores", color: "info" },
  cerrado: { texto: "Cerrado", color: "secondary" },
};

// Recibe UN trámite (objeto de data/tramites.js) y lo pinta siempre igual.
export default function TarjetaTramite({ tramite }) {
  const e = etiqueta[tramite.estado] || etiqueta.cerrado;
  return (
    <Card className="mb-4 shadow-sm" id={tramite.id}>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start gap-2">
          <Card.Title className="mb-1">{tramite.nombre}</Card.Title>
          <Badge bg={e.color}>{e.texto}</Badge>
        </div>
        <Card.Text className="text-muted">{tramite.resumen}</Card.Text>

        {tramite.alerta && <Alert variant="warning" className="py-2">{tramite.alerta}</Alert>}

        <h6 className="mt-3">¿Para quién es?</h6>
        <ul>{tramite.paraQuien.map((p, i) => <li key={i}>{p}</li>)}</ul>

        <h6>¿Qué necesitas?</h6>
        <ul>{tramite.requisitos.map((r, i) => <li key={i}>{r}</li>)}</ul>

        <ListGroup variant="flush" className="small">
          <ListGroup.Item><strong>Dónde:</strong> {tramite.donde}</ListGroup.Item>
          <ListGroup.Item><strong>Costo:</strong> {tramite.costo}</ListGroup.Item>
          <ListGroup.Item><strong>Vigencia:</strong> {tramite.vigencia}</ListGroup.Item>
          <ListGroup.Item><strong>Plazo:</strong> {tramite.plazo}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Footer className="bg-white">
        <a href={tramite.enlace} target="_blank" rel="noreferrer" className="btn btn-outline-primary btn-sm">
          Ir a la página oficial
        </a>
      </Card.Footer>
    </Card>
  );
}
