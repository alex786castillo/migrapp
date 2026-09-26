import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Inicio from "../pages/Inicio";
import Regularizate from "../pages/Regularizate";
import Documentos from "../pages/Documentos";
import Empleo from "../pages/Empleo";
import DondeIr from "../pages/DondeIr";
import Ayuda from "../pages/Ayuda";
import Preguntas from "../pages/Preguntas";
import Perfil from "../pages/Perfil";
import Login from "../pages/Login";
import Registro from "../pages/Registro";

// Todas las páginas cuelgan de <Layout />, que pone menú y footer una sola vez.
// La ruta "/" es el inicio: la app es pública y la cuenta es opcional.
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/regularizate" element={<Regularizate />} />
          <Route path="/documentos" element={<Documentos />} />
          <Route path="/empleo" element={<Empleo />} />
          <Route path="/donde-ir" element={<DondeIr />} />
          <Route path="/ayuda" element={<Ayuda />} />
          <Route path="/preguntas" element={<Preguntas />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="*" element={<Inicio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
