// HomePage.js
import React from "react";
import "../styles/home.css";
import { Carousel } from "react-bootstrap";
import Imagen1 from "../images/migracion1.jpg";
import Imagen2 from "../images/venezolanos.jpg";

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Bienvenido a MigrApp</h1>
      </header>
      <section>
        <div className="p-3 border border-3 border-blueviolet">
          <p className="lead">
            MigrApp es una aplicación de gestión y guía para inmigrantes recién llegados. Con MigrApp, puedes recibir orientación sobre cómo regularizarte en el país y encontrar centros de atención para obtener la ayuda que necesitas.
          </p>
        </div>
      </section>
      <section>
        <h2>Últimas Noticias</h2>
        <Carousel interval={5000} className="d-block w-100">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Imagen1}
              alt="First slide"
            />
            <Carousel.Caption className="d-md-block">
              <h4>EE.UU. comenzó los procesos de permisos humanitarios para reunificación familiar</h4>
              <p className="lead" >Según destacó el Departamento de Seguridad Nacional, el objetivo es reducir la migración irregular peligrosa al ofrecer vías legales.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Imagen2}
              alt="Second slide"
            />
            <Carousel.Caption className="d-md-block">
              <h4>Amplían plazo para que migrantes venezolanos validen su información en Migración Colombia</h4>
              <p className="lead" >Esta medida solo aplica para aquellos migrantes venezolanos que ya cuentan con el Registro Único de Migrantes Venezolanos.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </div>
  );
};

export default HomePage;
