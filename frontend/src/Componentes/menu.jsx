import React from "react";
import "../styles/chequeos.css"

function menu (){
    return(
        <div classname = 'menu ' >
                        <nav class="navbar navbar-1 navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">MigrApp</a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="http://localhost:3000/inicio">Inicio</a>
                    </li>

                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="http://localhost:3000/chequeos">Chequeos</a>
                    </li>

                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="http://localhost:3000/direcciones">Direcciones</a>
                    </li>

                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="http://localhost:3000/perfil">Mi Perfil</a>
                    </li>

                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="http://localhost:3000/">Cerrar sesión</a>
                    </li>
                
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Buscar</button>
                </form>
                </div>
            </div>
            </nav>

        </div>
    );
}

export default menu;