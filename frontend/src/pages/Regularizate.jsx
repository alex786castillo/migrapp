import { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import { tramites, preguntas, VERIFICADO } from "../data/tramites";
import TarjetaTramite from "../components/TarjetaTramite";

export default function Regularizate() {
  // Guardamos la respuesta a cada pregunta: { menorConPPT: true, ... }
  const [respuestas, setRespuestas] = useState({});

  // La primera pregunta respondida con "sí" decide el trámite recomendado.
  const recomendado = preguntas.find((p) => respuestas[p.id] === true)?.si;

  const marcar = (id, valor) => setRespuestas({ ...respuestas, [id]: valor });

  return (
    <>
      <h1 className="h3">Regularízate</h1>
      <p className="text-muted">
        Información verificada el {VERIFICADO}. La normativa cambia: confirma siempre en la página oficial.
      </p>

      <Card className="mb-4 border-primary">
        <Card.Body>
          <Card.Title className="h5">¿Cuál me sirve? Responde y te lo decimos</Card.Title>
          {preguntas.map((p) => (
            <Form.Group key={p.id} className="mb-2">
              <Form.Label className="mb-1">{p.texto}</Form.Label>
              <div>
                <Form.Check inline type="radio" label="Sí" name={p.id}
                  checked={respuestas[p.id] === true} onChange={() => marcar(p.id, true)} />
                <Form.Check inline type="radio" label="No" name={p.id}
                  checked={respuestas[p.id] === false} onChange={() => marcar(p.id, false)} />
              </div>
            </Form.Group>
          ))}
          {recomendado ? (
            <Button href={`#${recomendado}`} variant="primary">
              Ver el trámite que te corresponde
            </Button>
          ) : (
            Object.keys(respuestas).length === preguntas.length && (
              <p className="mb-0 text-muted">
                Si entraste hace poco, mira "Entrar hoy: PIP y prórroga". Para trabajar necesitarás una visa.
              </p>
            )
          )}
        </Card.Body>
      </Card>

      {tramites.map((t) => <TarjetaTramite key={t.id} tramite={t} />)}
    </>
  );
}
