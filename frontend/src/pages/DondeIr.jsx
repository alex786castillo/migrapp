import { useState } from "react";
import { Form, Card, Row, Col } from "react-bootstrap";

// Directorio. Añadir una entrada aquí la muestra automáticamente.
const lugares = [
  { nombre: "Migración Colombia – Medellín", categoria: "Migración", ciudad: "Medellín", direccion: "Calle 19 #80A-40, Belén", maps: "https://maps.google.com/?q=Migración+Colombia+Medellín" },
  { nombre: "Cruz Roja – Medellín", categoria: "Salud", ciudad: "Medellín", direccion: "Sede CICR Medellín", maps: "https://maps.google.com/?q=Comité+Internacional+de+la+Cruz+Roja+Medellín" },
  { nombre: "Integrate Medellín", categoria: "Atención a migrantes", ciudad: "Medellín", direccion: "Ver mapa", maps: "https://maps.google.com/?q=Integrate+Medellín" },
  { nombre: "Famicove", categoria: "Salud", ciudad: "Medellín", direccion: "Ver mapa", maps: "https://maps.google.com/?q=Famicove+Medellín" },
  { nombre: "Americares – Valledupar", categoria: "Salud", ciudad: "Valledupar", direccion: "Ver mapa", maps: "https://maps.google.com/?q=Americares+Foundation+Valledupar" },
];

const categorias = ["Todas", ...new Set(lugares.map((l) => l.categoria))];
const ciudades = ["Todas", ...new Set(lugares.map((l) => l.ciudad))];

export default function DondeIr() {
  const [categoria, setCategoria] = useState("Todas");
  const [ciudad, setCiudad] = useState("Todas");

  const filtrados = lugares.filter(
    (l) => (categoria === "Todas" || l.categoria === categoria) && (ciudad === "Todas" || l.ciudad === ciudad)
  );

  return (
    <>
      <h1 className="h3">Dónde ir</h1>
      <Row className="g-2 mb-3">
        <Col xs={6}>
          <Form.Select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            {categorias.map((c) => <option key={c}>{c}</option>)}
          </Form.Select>
        </Col>
        <Col xs={6}>
          <Form.Select value={ciudad} onChange={(e) => setCiudad(e.target.value)}>
            {ciudades.map((c) => <option key={c}>{c}</option>)}
          </Form.Select>
        </Col>
      </Row>

      {filtrados.map((l) => (
        <Card key={l.nombre} className="mb-2">
          <Card.Body className="d-flex justify-content-between align-items-center gap-2">
            <div>
              <div className="fw-semibold">{l.nombre}</div>
              <div className="small text-muted">{l.categoria} · {l.ciudad} · {l.direccion}</div>
            </div>
            <a href={l.maps} target="_blank" rel="noreferrer" className="btn btn-outline-primary btn-sm">Mapa</a>
          </Card.Body>
        </Card>
      ))}
      {filtrados.length === 0 && <p className="text-muted">No hay lugares con ese filtro todavía.</p>}
    </>
  );
}
