import React, {useState} from 'react';
import {Link, Navigate} from 'react-router-dom'

import api from '../services/api';


function Registro(){

    const [miRegistro, setMiregistro] = useState("false");
    const[nom, setNom] = useState ("");
    const[apell, setApell] = useState ("");
    const[corr, setCorr] = useState ("");
    const[con, setCon] = useState ("");


    async function peticionPost(txtnom,txtapll,txtcorr,txtcon) {
        console.log("nom apell corr con -->", txtnom, txtapll, txtcorr, txtcon);
        await api.post('/usuarios/registro', [txtnom, txtapll, txtcorr, txtcon])
            .then(response => { 
                if(response){
                  setMiregistro("true");
                  console.log(response);
                  alert("Bienvenido")
                  document.getElementById("formularioR").style.display = "none";
                }
                else{
                  setMiregistro("false");
                  alert("Hay un error en alguno de los campos");
                  document.getElementById("txtnom").value= "";
                  document.getElementById("txtapll").value= "";
                  document.getElementById("txtcorr").value= "";
                  document.getElementById("txtcrr").value= "";
                  document.getElementById("txtnom").focus();
                }
            }).catch(error => {
                console.log(error.message);
            })
      }

      function iniciarsesion(e) {

        e.preventDefault();
        console.log("Iniciando sesión...");

        var txtnom = document.getElementById("txtnom").value;
        var txtapll = document.getElementById("txtapll").value;
        var txtcorr = document.getElementById("txtcorr").value;
        var txtcon = document.getElementById("txtcon").value;
        
        if (txtnom.length === 0 || txtapll.length === 0 || txtcorr.length === 0 || txtcon.length === 0) {
            alert("Complete los campos vacíos!!");
        } else {
            var res = peticionPost(txtnom, txtapll, txtcorr, txtcon);
            console.log("res -->", res);
            e.preventDefault();
        }
    }
    
    
    
    return(
        <div className="d-flex justify-content-center"><div style={{ maxWidth: 420, width: "100%" }}>
         <div className="p-4 border rounded bg-white w-100" id="formularioR">

            <form>
                <h3 className="text-center">Registrarse</h3>
                
                <div className="mb-2">
                    <label htmlFor="fname">Nombre</label>
                    <input type="text" placeholder='Ingrese su nombre' id="txtnom" className='form-control' onChange={(e)=>setNom(e.target.value)} required></input>
                </div>
            
                <div className="mb-2">
                    <label htmlFor="lname">Apellido</label>
                    <input type="text" placeholder='Ingrese su apellido' id="txtapll" className='form-control' onChange={(e)=>setApell(e.target.value)} required></input>
                </div>
                
                <div className="mb-2">
                    <label htmlFor="email">Correo</label>
                    <input type="email" placeholder='Ingresar correo' id="txtcorr" className='form-control' onChange={(e)=>setCorr(e.target.value)} required></input>
                </div>

                <div className="mb-2">
                    <label htmlFor="contraseña">Contraseña</label>
                    <input type="password" placeholder='Ingresar contraseña' id="txtcon" className='form-control' onChange={(e)=>setCon(e.target.value)} required></input>
                </div>  
                
                <div className='d-grid'>
                    <button className="btn btn-primary" onClick={ iniciarsesion}>Registrarse</button>
                </div>
            </form>
            <p className="text-end mt-2">
                ¿Ya te registraste? <Link to="/login" className="ms-2">Iniciar sesión</Link>
            </p>
        </div></div>

        {miRegistro === "true" && <Navigate to="/" />}
    </div> 
    );
}


export default Registro