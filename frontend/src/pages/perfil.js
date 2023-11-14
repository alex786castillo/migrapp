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
        <h2>Mi Perfil</h2>
        <ProfilePage />
        </div>
    <Footer/>
    </div>
 );
};

export default App;
