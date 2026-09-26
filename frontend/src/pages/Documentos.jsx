import Pagina from "../components/Pagina";

// Guia de que documento venezolano vale en Colombia y para que sirve.
// Cada fila es [documento, si vale, para que]. La cabecera se repite en el
// CSS (.tabla-docs) como etiqueta cuando la tabla se apila en movil.
const docs = [
  [
    "Pasaporte venezolano vencido",
    { clase: "si", texto: "Sí, hasta 10 años después de su vencimiento" },
    "Ingreso, salida y trámites migratorios.",
  ],
  [
    "Cédula de identidad venezolana",
    { clase: "si", texto: "Sí, vigente o vencida" },
    "Identificación, PEP-Tutor, pasos terrestres.",
  ],
  [
    "Partida de nacimiento / registro civil",
    { clase: "si", texto: "Sí, si está apostillada en Venezuela" },
    "Probar parentesco (PEP-Tutor), visas de familia.",
  ],
  [
    "Título de bachiller o universitario",
    { clase: "si", texto: "Sí, apostillado" },
    "Estudiar, ejercer una profesión. Los universitarios requieren convalidación en el Ministerio de Educación.",
  ],
  [
    "Licencia de conducir venezolana",
    { clase: "no", texto: "Solo temporalmente como turista" },
    "Conducir. Con visa se debe homologar.",
  ],
];

const columnas = ["Documento", "¿Sirve en Colombia?", "¿Para qué?"];

export default function Documentos() {
  return (
    <Pagina
      titulo="Tus documentos venezolanos en Colombia"
      descripcion="MigrApp no recibe ni guarda documentos. Aquí te decimos qué vale y para qué sirve cada uno."
    >
      <table className="tabla-docs">
        <thead>
          <tr>
            {columnas.map((c) => (
              <th key={c} scope="col">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {docs.map(([documento, sirve, paraQue]) => (
            <tr key={documento}>
              <td className="tabla-docs__documento">{documento}</td>
              <td data-column={columnas[1]}>
                <span className={`tabla-docs__${sirve.clase}`}>
                  {sirve.texto}
                </span>
              </td>
              <td data-column={columnas[2]}>{paraQue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Pagina>
  );
}
