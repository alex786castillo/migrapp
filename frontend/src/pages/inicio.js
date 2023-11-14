import React from "react";
import Footer from "../Componentes/footer";
import Menu from "../Componentes/menu";
import Home from "../Componentes/HomePage";

function Inicio (){
    return(
        <div>
            <Menu/>
            <Home/>

            <Footer/>
        </div>

    );
    
}

export default Inicio;