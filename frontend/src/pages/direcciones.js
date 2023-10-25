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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                        <a href="#" class="Direccion 1 list-group-item-action">Minorisa cra114 #12313 int1</a>
                        <a href="#" class="Direccion 2 list-group-item-action">Negrolandia calle 192 #666 int7w7</a>
                        <a href="#" class="Direccion 3 list-group-item-action">Porque hago esto?</a>
                        <a class="list-group-item list-group-item-action disabled" aria-disabled="true">A disabled link item</a>
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
                        <a href="#" class="list-group-item list-group-item-action">A second link item</a>
                        <a href="#" class="list-group-item list-group-item-action">A third link item</a>
                        <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
                        <a class="list-group-item list-group-item-action disabled" aria-disabled="true">A disabled link item</a>
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