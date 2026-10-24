import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";

// El Layout se dibuja UNA sola vez. <Outlet /> es el hueco donde React Router
// pone la pagina que corresponde a la URL actual.
export default function Layout() {
  const { pathname } = useLocation();

  // Sin esto, al pasar de una seccion larga a otra se hereda la posicion de
  // scroll y se aterriza a media pagina.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app">
      {/* Invisible hasta recibir foco: unica forma de saltar el menu con teclado. */}
      <a className="saltar" href="#contenido">
        Saltar al contenido
      </a>
      <Menu />
      <main id="contenido" className="app__principal" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
