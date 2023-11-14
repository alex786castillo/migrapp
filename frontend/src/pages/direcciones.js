import React from "react";
import Menu from "../Componentes/menu";
import Footer from "../Componentes/footer";
import "../styles/direcciones.css";

function Direcciones() {
  return (
    <div>
      <Menu />
      <div className="body2 p-4">
        <div className="d-block col-md-7 ms-3 my-4 p-3 border border-3 border-blueviolet">
          <p className="lead">
            Nuestra página proporciona información sobre centros de salud y recursos para el cuidado de la salud. Encuentra fácilmente clínicas, hospitales, farmacias y más. Ofrecemos detalles sobre insumos médicos, dónde obtenerlos y cómo usarlos. Empoderamos a las personas para tomar decisiones informadas sobre su salud, facilitando el acceso a servicios esenciales. Juntos, garantizamos un acceso equitativo y eficiente a la atención médica y recursos de salud.
          </p>
        </div>

        <div className="centrales">
          <p className="d-block ms-2">
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseInsumos" aria-expanded="false" aria-controls="collapseInsumos">
              Insumos
            </button>
            <div className="collapse" id="collapseInsumos">
              <div className="card card-body">
                <div className="list-group">
                  <a className="list-group-item list-group-item-action active" aria-current="true">
                    Direcciones de insumos
                  </a>
                  <p className="list-group-item list-group-item-action">Cruz Roja</p>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126921.09299529465!2d-75.67131197693818!3d6.226215771305466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429a6cb9256a9%3A0xfb78072f957b35bc!2sComit%C3%A9%20Internacional%20de%20la%20Cruz%20Roja%20-%20sede%20Medell%C3%ADn!5e0!3m2!1ses-419!2sco!4v1699927731506!5m2!1ses-419!2sco" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  <br/>
                  <p className="list-group-item list-group-item-action">Integrate</p>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.071030146206!2d-75.56512112910579!3d6.254372512409262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429a5cea7b1f1%3A0x7f908df886e56f09!2sIntegrate%20Medellin!5e0!3m2!1ses-419!2sco!4v1699927181534!5m2!1ses-419!2sco" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  
                </div>
              </div>
            </div>
            <br />
            <br />
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSalud" aria-expanded="false" aria-controls="collapseSalud">
              Centros de Salud
            </button>
          </p>

          <div className="collapse" id="collapseSalud">
            <div className="card card-body">
              <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                  Direcciones de Centros de Salud
                </a>
                <p className="list-group-item list-group-item-action">Americares</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.619061533759!2d-73.27616632578139!3d10.451772665099806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e601b5ecb343c51%3A0x468e3ebdbb6ec54d!2sAmericares%20Foundation%20INC%20Sede%20Valledupar!5e0!3m2!1ses-419!2sco!4v1699928116502!5m2!1ses-419!2sco"  style={{border:0}}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <br/>
                <p className="list-group-item list-group-item-action">Famicove</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.047197964098!2d-75.56683522910566!3d6.257513212367292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44292a2c1b6f21%3A0x9ccde73e4ec66b4!2sFamicove!5e0!3m2!1ses-419!2sco!4v1699928002155!5m2!1ses-419!2sco" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>

        <br />
      </div>

      <Footer />
    </div>
  );
}

export default Direcciones;
