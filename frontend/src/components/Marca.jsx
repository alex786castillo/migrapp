// La marca escribe "Migr" + avion + "App": el avion hace de "a" de Migra.
// Se separa del menu para poder reutilizarlo sin duplicar el dibujo.
export default function Marca() {
  return (
    <>
      <span aria-hidden="true">Migr</span>
      <svg
        className="marca__ala"
        viewBox="0 0 64 64"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M32 2 L62 62 L32 49 L2 62 Z"
          fill="#d0b840"
          stroke="#0b2758"
          strokeWidth="3.2"
          strokeLinejoin="round"
        />
        <path d="M32 2 L32 49 L62 62 Z" fill="#b89f2e" opacity=".55" />
        <path
          d="M32 2 L32 49"
          stroke="#0b2758"
          strokeWidth="2.2"
          opacity=".65"
        />
      </svg>
      <span aria-hidden="true">App</span>
    </>
  );
}
