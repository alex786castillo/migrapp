import React from "react";
import Menu from "../Componentes/menu";
import Footer from "../Componentes/footer";
import "../styles/direcciones.css";

function direcciones (){
    return(
        
       <div>
            <Menu/>
            <div className="body2 p-4">
            <br/>
            <div class="d-block col-md-7 ms-3"  >
            En un mundo en constante evolución, el acceso a servicios de atención médica y suministros de salud es de vital importancia. Nuestra página web se centra en proporcionar información precisa y actualizada sobre las direcciones de centros de salud y los recursos disponibles para el cuidado de la salud. En este espacio, los visitantes encontrarán una guía completa para localizar fácilmente clínicas, hospitales, farmacias y otros centros de atención médica en su área. Además, ofrecemos información detallada sobre los insumos médicos disponibles, incluyendo dónde obtenerlos y cómo utilizarlos adecuadamente. Nuestro objetivo es empoderar a las personas para que tomen decisiones informadas sobre su salud y bienestar, facilitando el acceso a los servicios y suministros esenciales que necesitan. Juntos, podemos garantizar un acceso equitativo y eficiente a la atención médica y los recursos de salud necesarios.
            </div>
            <br/>
            <div class="centrales">
                <p class="d-block ms-2">
                <a class="btn btn-primary"  data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Insumos
                </a>
                <div class="collapse" id="collapseExample">
                <div class="card card-body">
                        <div class="list-group" >
                        <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                            Direcciones de insumos
                        </a>
                        <a href="https://www.google.com/maps/search/Plaza+Minorista+Calle+55+A+%2357-80+Plaza,+Medellin+050010+Colombia/@6.2558549,-75.5700234,17z/data=!3m1!4b1?entry=ttu" class="Direccion 1 list-group-item-action">Minorista (Calle 55 A #57-80 Plaza, Medellin 050010 Colombia)</a>
                        <a href="#" class="Direccion 2 list-group-item-action">Centro de insumo 2</a>
                        <a href="#" class="Direccion 3 list-group-item-action">Centro de insumos 3</a>
                        
                    </div>
                </div>
                </div>
                <br/>
                <br/>
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                Centros de Salud
                </button>
                </p>
               

                <div class="collapse" id="collapse2">
                <div class="card card-body">
                        <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                            Direcciones de Centros de Salud
                        </a>
                        <a href="#" class="list-group-item list-group-item-action">Americares ()</a>
                        <a href="#" class="list-group-item list-group-item-action">A third link item</a>
                        <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
                       
                    </div>
                </div>
                </div>
            </div>       

             <br/>
             </div>

            <Footer/>
       </div>
    );

}

export default direcciones;