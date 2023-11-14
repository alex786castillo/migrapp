// App.js
import React from "react";
import Menu from "../Componentes/menu";
import Footer from "../Componentes/footer";
import ProfilePage from "../Componentes/ProfilePage";

const App = () => {
  return (
    <div>
    <Menu/>
        <div>
        <h1>Mi Aplicación</h1>
        <ProfilePage />
        </div>
    <Footer/>
    </div>
 );
};

export default App;
