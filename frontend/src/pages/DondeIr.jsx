import { useState } from "react";
import { Form, Col } from "react-bootstrap";
import Pagina from "../components/Pagina";

// Directorio. Añadir una entrada aquí la muestra automáticamente: los filtros
// se derivan de los datos, asi que no hay que tocar nada mas.
const lugares = [
  {
    nombre: "Migración Colombia – Medellín",
    categoria: "Migración",
    ciudad: "Medellín",
    direccion: "Calle 19 #80A-40, Belén",
    maps: "https://maps.google.com/?q=Migración+Colombia+Medellín",
  },
  {
    nombre: "Cruz Roja – Medellín",
    categoria: "Salud",
    ciudad: "Medellín",
    direccion: "Sede CICR Medellín",
    maps: "https://maps.google.com/?q=Comité+Internacional+de+la+Cruz+Roja+Medellín",
  },
  {
    nombre: "Integrate Medellín",
    categoria: "Atención a migrantes",
    ciudad: "Medellín",
    direccion: "Ver mapa",
    maps: "https://maps.google.com/?q=Integrate+Medellín",
  },
  {
    nombre: "Famicove",
    categoria: "Salud",
    ciudad: "Medellín",
    direccion: "Ver mapa",
    maps: "https://maps.google.com/?q=Famicove+Medellín",
  },
  {
    nombre: "Americares – Valledupar",
    categoria: "Salud",
    ciudad: "Valledupar",
    direccion: "Ver mapa",
    maps: "https://maps.google.com/?q=Americares+Foundation+Valledupar",
  },
];

const unicos = (campo) => ["Todas", ...new Set(lugares.map((l) => l[campo]))];

export default function DondeIr() {
  const [categoria, setCategoria] = useState("Todas");
  const [ciudad, setCiudad] = useState("Todas");

  const filtrados = lugares.filter(
    (l) =>
      (categoria === "Todas" || l.categoria === categoria) &&
      (ciudad === "Todas" || l.ciudad === ciudad)
  );

  return (
    <Pagina
      titulo="Dónde ir"
      descripcion="Oficinas y organizaciones que atienden a migrantes. Filtra por tipo y ciudad."
    >
      <div className="filtros">
        <Col xs={12} sm={6} className="filtros__campo">
          <Form.Label htmlFor="filtro-categoria">Tipo de lugar</Form.Label>
          <Form.Select
            id="filtro-categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            {unicos("categoria").map((c) => (
              <option key={c}>{c}</option>
            ))}
          </Form.Select>
        </Col>
        <Col xs={12} sm={6} className="filtros__campo">
          <Form.Label htmlFor="filtro-ciudad">Ciudad</Form.Label>
          <Form.Select
            id="filtro-ciudad"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
          >
            {unicos("ciudad").map((c) => (
              <option key={c}>{c}</option>
            ))}
          </Form.Select>
        </Col>
        {/* role="status" para que el lector de pantalla anuncie el nuevo
            numero de resultados al cambiar un filtro. */}
        <p className="filtros__conteo" role="status">
          {filtrados.length}{" "}
          {filtrados.length === 1 ? "lugar" : "lugares"}
          {categoria !== "Todas" && ` de tipo «${categoria}»`}
          {ciudad !== "Todas" && ` en ${ciudad}`}
        </p>
      </div>

      {filtrados.map((l) => (
        <div key={l.nombre} className="lugar">
          <div>
            <div className="lugar__nombre">{l.nombre}</div>
            <p className="lugar__detalle">
              <span className="lugar__etiqueta">{l.categoria}</span>
              {l.ciudad} · {l.direccion}
            </p>
          </div>
          <a
            href={l.maps}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-primary btn-sm flex-shrink-0"
          >
            Ver mapa
          </a>
        </div>
      ))}

      {filtrados.length === 0 && (
        <p className="directorio__vacio">
          No hay lugares con ese filtro todavía. Prueba con otra ciudad o tipo.
        </p>
      )}
    </Pagina>
  );
}
