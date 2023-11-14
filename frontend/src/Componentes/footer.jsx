import React from 'react';
import "../styles/chequeos.css"

function Footer (){
    return(
        <div className='Footer navbar-1 '>
            <div className="card text-center">
                <div className="card-header">
                    Somos MigrApp
                </div>
                <div className="card-body">
                <h5 className="card-title">Una aplicación para ti y para mi como personas </h5>
                <p className="card-text">Para más información de contacto dar click en: </p>
                <a href="#" className="btn btn-primary">Aquí</a>
                </div>
            </div>

        </div>
    );
}
export default Footer;