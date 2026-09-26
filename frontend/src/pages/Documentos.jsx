import { Table } from "react-bootstrap";

const docs = [
  ["Pasaporte venezolano vencido", "Sí. Colombia lo acepta hasta 10 años después de su vencimiento (si tiene prórroga, se cuenta desde la prórroga).", "Ingreso, salida y trámites migratorios."],
  ["Cédula de identidad venezolana", "Sí, para identificarte y en pasos terrestres. Vigente o vencida.", "Identificación, PEP-Tutor."],
  ["Partida de nacimiento / registro civil", "Sí, si está apostillada en Venezuela.", "Probar parentesco (PEP-Tutor), visas de familia."],
  ["Título de bachiller o universitario", "Sí, apostillado. Los universitarios requieren convalidación en el Ministerio de Educación.", "Estudiar, ejercer una profesión."],
  ["Licencia de conducir venezolana", "Solo temporalmente como turista. Con visa se debe homologar.", "Conducir."],
];

export default function Documentos() {
  return (
    <>
      <h1 className="h3">Tus documentos venezolanos en Colombia</h1>
      <p className="text-muted">
        MigrApp no recibe ni guarda documentos. Aquí te decimos qué vale y para qué sirve cada uno.
      </p>
      <Table responsive bordered hover>
        <thead className="table-light">
          <tr><th>Documento</th><th>¿Sirve en Colombia?</th><th>¿Para qué?</th></tr>
        </thead>
        <tbody>
          {docs.map((d) => (
            <tr key={d[0]}>{d.map((c, i) => <td key={i}>{c}</td>)}</tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
