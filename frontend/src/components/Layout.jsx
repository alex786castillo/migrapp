import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";

// El Layout se dibuja UNA sola vez. <Outlet /> es el hueco donde
// React Router pone la página que corresponde a la URL actual.
export default function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Menu />
      <main className="flex-grow-1 container py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
