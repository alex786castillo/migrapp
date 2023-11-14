import React from "react";
import "../styles/chequeos.css"
import { Link } from "react-router-dom";

function menu (){
    return(
        <div className = 'menu ' >
                        <nav className="navbar navbar-1 navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">MigrApp</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="http://localhost:3000/inicio">Inicio</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="http://localhost:3000/chequeos">Chequeos</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="http://localhost:3000/direcciones">Direcciones</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="http://localhost:3000/perfil">Mi Perfil</a>
                    </li>

                    <li className="nav-item">
                        <Link to='/'>
                            Cerrar sesión
                        </Link>
                    <a className="nav-link active" aria-current="page" href="https://migrapp.vercel.app/"></a>
                    </li>
                
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
                </div>
            </div>
            </nav>

        </div>
    );
}

export default menu;