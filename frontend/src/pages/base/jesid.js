import React, {useState} from 'react';
import '../styles/styles.css';
import Logo from './logov'
import  Inicio  from '../pages/inicio'
import {Link} from "react-router-dom"
import axios from 'axios';


function Login(){
  
  const [miLogin, setMiLogin] = useState("false");
  const [ema, setEma] = useState("");
  const [tel, setTel] = useState("");
  const [pas, setPas] = useState("");

  async function peticionPost(txtema,txttel,txtpas) {
    console.log("ema y tel -->", txtema, txtpas);
    await axios.post('http://localhost:4001/api/usuarios/autenticacion', [txtema, txttel, txtpas])
        .then(response => { 
            if(response){
              setMiLogin("true");
              console.log(response);
              document.getElementById("Login").style.display = "none";
            }
            else{
              setMiLogin("false");
              alert("Hay un error en alguno de los campos");
              document.getElementById("txtema").value= "";
              document.getElementById("txttel").value= "";
              document.getElementById("txtpas").value= "";
              document.getElementById("txtema").focus();
      
            }
        }).catch(error => {
            console.log(error.message);
        })

  }

  function iniciarsesion(e){
    e.preventDefault();
    var txtema = document.getElementById("txtema").value; 
    var txttel = document.getElementById("txttel").value;
    var txtpas = document.getElementById("txtpas").value;
    console.log(txtema, txtpas, txttel);

    if(txtema.length===0 || txttel.length===0 || txtpas.length===0){
        alert("No puede haber campos vacios");
    }
    else{
      // if(ema === "admin"  && tel ==="323" && pas==="123"){
      //     setMiLogin("true");
      //     document.getElementById("Login").style.display = "none";
      var res = peticionPost(txtema, txttel, txtpas)
      console.log("res -->", res)
        
    }
  }


    return(
        <div class="bg-dark-dark body noscrollx" >
          <section class="row" id="Login">
            <div class="col-lg-7 d-none d-lg-block h-100">
              <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"   aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item img-1 min-vh-100 active">
                    <div class="carousel-caption d-none d-md-block">
                      <h5 class="font-weidht-bold">First slide label</h5>
                      <a class="tex-muted text-decoration-none">Some representative placeholder content for the first slide.</a>
                    </div>
                  </div>
                  <div class="carousel-item img-2 min-vh-100 ">
                      <div class="carousel-caption d-none d-md-block">
                        <h5 class="font-weidht-bold">Second slide label</h5>
                        <a class="tex-muted text-decoration-none">Some representative placeholder content for the second slide.</a>
                      </div>
                  </div>
                  <div class="carousel-item img-3 min-vh-100">
                      <div class="carousel-caption d-none d-md-block">
                        <h5 class="font-weidht-bold">Third slide label</h5>
                        <a class="tex-muted text-decoration-none">Some representative placeholder content for the third slide.</a>
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
            <div class="col-lg-5 d-flex flex-column minh align-items-end max-vh-100 mb-auto">       
              <div class="px-lg-5 py-lg-4 p-4 pt-0  w-100 noscrollx ">
                <div class="p-2 w-100 mb-5 div text-center ">
                  <Logo/>
                </div>
                <form class="mb-5 " style={{maxWidth:"100vh "}}>
                  <div class="d-flex justify-content-arounds">
                  </div>
                  <div class="mb-2">
                    <label for="exampleInputEmail1" class="form-label label font-weight-bold ">Email</label>
                    <input type="email" class="form-control bg-dark-x text-light ml-0" placeholder='Ingresa tu email' id="txtema" aria-describedby="emailHelp" onChange={ (e)=>setEma(e.target.value)} required/>
                  </div>
                  <div class="mb-2">
                    <label for="exampleInputEmail1" class="form-label label font-weight-bold ">Numero de telefono </label>
                    <input type="nomber" class="form-control text-light label bg-dark-x" placeholder='Ingresa tu telefono' id="txttel" aria-describedby="phonelHelp" onChange={ (e)=>setTel(e.target.value)} required/>
                  </div>
                    <div class="mb-5">
                      <label for="exampleInputPassword1" class="form-label label font-weight-bold ">Contraseña</label>
                      <input type="password" class="form-control text-light bg-dark-x  mb-2" placeholder='Ingresa tu contraseña' id="txtpas" onChange={ (e)=>setPas(e.target.value)}  required/>
                    </div>
                  
                    <button type="submit" class="btn btn-primary w-100 form-control altura mb-0" onClick={ iniciarsesion}>Iniciar sesión</button>
                </form>
                <div class="text-center w-100 mt-0">
                  <p class="d-inline-blockh mb-0 ">¿Todavia no tienes una cuenta?</p> <Link to="/registro" class="text-light font-weight-bold">Registrate ahora</Link>
                </div>
              </div>
            </div>
          </section>

        { miLogin === "true" && <Inicio/> }
      </div>
    );
}

export default Login;    