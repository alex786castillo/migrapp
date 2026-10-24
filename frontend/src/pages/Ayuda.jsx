import Pagina from "../components/Pagina";

const lineas = [
  {
    nombre: "Emergencias (policía, ambulancia, bomberos)",
    dato: "123",
    href: "tel:123",
  },
  {
    nombre: "Línea de atención a migrantes – Migración Colombia",
    dato: "(601) 605 5454",
    href: "tel:+576016055454",
  },
  {
    nombre: "Defensoría del Pueblo",
    dato: "(601) 314 7300",
    href: "tel:+576013147300",
  },
  {
    nombre: "Línea 155 – violencia contra la mujer",
    dato: "155",
    href: "tel:155",
  },
  {
    nombre: "ACNUR Colombia – ayuda e información",
    dato: "help.unhcr.org/colombia",
    href: "https://help.unhcr.org/colombia/",
  },
];

export default function Ayuda() {
  return (
    <Pagina
      titulo="Ayuda urgente"
      descripcion="Toca un número para llamar desde el celular."
    >
      {/* role="list" explicito: el contenedor es un <div> con aria-label, y
          sin esto algunos lectores de pantalla no anuncian la lista. */}
      <div role="list">
        {lineas.map((l) => (
          <a
            key={l.nombre}
            href={l.href}
            className="linea-ayuda"
            role="listitem"
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel={l.href.startsWith("http") ? "noreferrer" : undefined}
          >
            <span className="linea-ayuda__nombre">{l.nombre}</span>
            <span className="linea-ayuda__dato">{l.dato}</span>
          </a>
        ))}
      </div>
    </Pagina>
  );
}
