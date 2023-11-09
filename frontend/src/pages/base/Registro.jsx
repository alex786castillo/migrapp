import React, {useState} from 'react';
import axios from "axios";
import { Link} from 'react-router-dom';
import Logo from './logov';
import  Inicio  from '../pages/inicio'
import '../styles/styles.css';



function Formulario(){
  const [miRegistro, setMiRegistro] = useState("false");
  const [nom, setNom] = useState("");
  const [ape, setApe] = useState("");
  const [ema, setEma] = useState("");
  const [tel, setTel] = useState("");
  const [pas, setPas] = useState("");
  const [cpas, setCpas] = useState("");

  async function peticionPost(txtnom, txtape, txtema, txttel, txtpas, txtcpas){
    console.log("nom ape ema tel pas cpas -->",txtnom, txtape, txtema, txttel, txtpas, txtcpas );
    await axios.post('http://localhost:4001/api/usuarios/registro', [txtnom, txtape, txtema, txttel, txtpas])
        .then(response => { 
            if(response){
              setMiRegistro("true");
              console.log(response);
              alert("bienvenido")
              document.getElementById("registroform").style.display = "none";
            }
            else{
              setMiRegistro("false");
              alert("Hay un error en alguno de los campos");
              document.getElementById("txtnom").value= "";
              document.getElementById("txtape").value= "";
              document.getElementById("txtema").value= "";
              document.getElementById("txttel").value= "";
              document.getElementById("txtpas").value= "";
              document.getElementById("txtcpas").value= "";
              document.getElementById("txtema").focus();
      
            }
        }).catch(error => {
            console.log(error.message);
        })
  }


  function iniciarsesion(e){
    e.preventDefault();
    var txtnom = document.getElementById("txtnom").value;
    var txtape = document.getElementById("txtape").value;
    var txtema = document.getElementById("txtema").value; 
    var txttel = document.getElementById("txttel").value;
    var txtpas = document.getElementById("txtpas").value;
    var txtcpas = document.getElementById("txtcpas").value;  
    console.log(txtnom, txtape, txtema, txttel, txtpas, txtcpas);

    if(txtnom.length===0 || txtape.length===0 || txtema.length===0 || txttel.length===0 || txtpas.length===0 || txtcpas.length===0){
        alert("No puede haber campos vacios");
    }

    if (txtpas !== txtcpas) {
      alert(`Las contraseñas no coinciden'`);
    }

    else{
      var res = peticionPost(txtnom, txtape, txtema, txttel, txtpas, txtcpas)
      console.log("res -->", res)
      
    }

  }
  return(
    <div className='Registro'>
      <div class=" " id='registroform' >
            <section class="row bg-dark-dark body">
              <div class="col-lg-7 d-none d-lg-block h-100">
                <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item img-1 min-vh-100 active">
                      <div class="carousel-caption d-none d-md-block">
                        <h5 class="font-weidht-bold"></h5>
                        <Link to="/tyc" class="tex-muted text-light">Al registrarte aceptas nuestros terminos y condiciones</Link>
                      </div>
                    </div>
                    <div class="carousel-item img-2 min-vh-100 ">
                        <div class="carousel-caption d-none d-md-block">
                          <h5 class="font-weidht-bold"></h5>
                          <Link to="/tyc" class="tex-muted text-light">Al registrarte aceptas nuestros terminos y condiciones</Link>
                        </div>
                    </div>
                    <div class="carousel-item img-3 min-vh-100">
                        <div class="carousel-caption d-none d-md-block">
                          <h5 class="font-weidht-bold"></h5>
                          <Link to="/tyc" class="tex-muted text-light">Al registrarte aceptas nuestros terminos y condiciones</Link>
                        </div>
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>

              <div class="col-lg-5 d-flex flex-column align-items-end max-vh-100 mb-auto">       
                <div class="px-lg-5 py-lg-4 minh p-4 pt-0 w-100 ">
                  <div class="p-2 w-100 mb-1 div text-center ">
                    <Logo/>
                  </div>

                  <form class="mb-5 ml-0 align-items-button ">
                    <div class="d-flex justify-content-arounds">
                      <div class="mb-1 w-100">
                        <label for="exampleInputEmail1" class="form-label label font-weight-bold ">Nombre </label>
                        <input type="text" class="form-control bg-dark-x text-light" placeholder='Ingresa tu nombre' id="txtnom" aria-describedby="emailHelp" onChange={ (e)=>setNom(e.target.value)} required/>

                      </div>

                      <div class="mb-1 w-100">
                        <label for="exampleInputName" class="form-label label font-weight-bold ">Apellido </label>
                        <input type="text" class="form-control bg-dark-x text-light " placeholder='Ingresa tu apellido' id="txtape" aria-describedby="nameHelp" onChange={ (e)=>setApe(e.target.value)} required />
                      </div>

                    </div>

                    <div class="mb-1">
                      <label for="exampleInputEmail1" class="form-label label font-weight-bold ">Email</label>
                      <input type="email" class="form-control bg-dark-x text-light " placeholder='Ingresa tu email' id="txtema" aria-describedby="emailHelp" onChange={ (e)=>setEma(e.target.value)} required />
                    </div>

                    <div class="mb-1">
                      <label for="exampleInputEmail1" class="form-label label font-weight-bold ">Numero de telefono </label>
                      <input type="number" class="form-control text-light bg-dark-x" placeholder='Ingresa tu nomero de telefono' id="txttel" onChange={ (e)=>setTel(e.target.value)} required  aria-describedby="emailHelp" />
                    </div>

                    <div class="d-flex justify-content-arounds">

                      <div class="mb-1 w-100">
                        <label for="exampleInputPassword1" class="form-label label font-weight-bold ">Contraseña</label>
                        <input type="password" class="form-control bg-dark-x text-light mb-2" placeholder='Ingresa tu contraseña' id="txtpas" onChange={ (e)=>setPas(e.target.value)}  required/>
                      </div>

                      <div class="mb-4 w-100 ">
                        <label for="exampleInputPassword1" class="form-label label font-weight-bold ">Confirmar contraseña</label>
                        <input type="password" class="form-control text-light bg-dark-x  mb-2" placeholder='Ingresa tu contraseña de nuevo' id="txtcpas"  onChange={ (e)=>setCpas(e.target.value)} required />
                      </div>

                    </div>

                      <button type="submit" class="btn btn-primary w-100 form-control altura mb-0" onClick={ iniciarsesion} >Registrarme</button>

                  </form>

                  <div class="text-center w-100 mt-0">

                    <p class="d-inline-blockh mb-0 ">¿Ya tienes una cuenta?</p>
                     <Link to="/" class="text-light
                    font-weight-bold">Inicia sesión ahora</Link>
                  </div>

                </div>

              </div>

            </section>
            
          </div>
          { miRegistro === "true" && <Inicio/> }
    </div>
          
    );
}

export default Formulario;