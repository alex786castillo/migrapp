import React from "react";
import Menu from "../Componentes/menu";
import Footer from "../Componentes/footer"
import Camion from "../images/camión.jpg"
import Migracion from "../images/migracion1.jpg"
import Oscura from "../images/oscura.jpg"
import "../styles/inicio.css"


function Inicio (){
    return(
        <div className="inicio">
             
            <Menu/>
            <br/>
            <div class="aguacatero">
            <h2 class="aguacate" >INICIO</h2>
            </div>
            <br/>
            <div id="carouselExampleInterval" class="carousel-slide" data-bs-ride="carousel">


                <div class="carousel-inner">
                
                    <div class="carousel-item active" data-bs-interval="5000">
                    <img src={Camion} class="d-block w-100" alt="gatito"/>
                    </div>
                    <div class="carousel-item" data-bs-interval="5000">
                    <img src= {Migracion} class="d-block w-100" alt="hamburguesa"/>
                    </div>
                    <div class="carousel-item">x    
                    <img src={Oscura} class="d-block w-100" alt="salchipapas"/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <br/>
            <div className="caja"> 
                <h2 class="chisme">Noticias Relevantes</h2>
              
            
             </div>
            <br/>
            <Footer/>

        </div>
        
        
    );
}


export default Inicio;