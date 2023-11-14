import React, { useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import "../styles/login.css";
import Inicio from "../pages/inicio";
import axios from "axios";

function Login() {
  const [miLogin, setMiLogin] = useState(false);
  const [usu, setUsu] = useState("");
  const [pas, setPas] = useState("");

  async function peticionPost(txtusu, txtpas) {
    console.log("usu y tel ->", txtusu, txtpas);
    try {
      const response = await axios.post('http://localhost:4001/api/usuarios/autenticacion', [txtusu, txtpas]);
      if (response.data) {
        setMiLogin(true);
        console.log(response);
      } else {
        alert("Hay un error en alguno de los campos");
        setUsu("");
        setPas("");
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  function iniciarsesion(e) {
    e.preventDefault();
    var txtusu = usu;
    var txtpas = pas;
    console.log(txtusu, txtpas);

    if (txtusu.length === 0 || txtpas.length === 0) {
      alert("Complete los campos vacíos!!");
    } else {
      if (txtusu === "hola@gmail.com" && txtpas === "123") {
        setMiLogin(true);
        var res = peticionPost(txtusu, txtpas);
        console.log("res -->", res);
      }
    }
  }

  return (
    <div>
      <div id="login" className="login template d-flex justify-content-center align-items-center vh-100">
        <div className="form-container p-5 rounded bg-white">
          <form>
            <h3 className="text-center">Iniciar sesión</h3>
            <div className="mb-2">
              <label htmlFor="email">Correo</label>
              <input
                type="email"
                placeholder="Ingresar correo"
                id="txtusu"
                className="form-control"
                value={usu}
                onChange={(e) => setUsu(e.target.value)}
                required
              ></input>
            </div>

            <div className="mb-2">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="txtpas"
                placeholder="Ingresar contraseña"
                className="form-control"
                value={pas}
                onChange={(e) => setPas(e.target.value)}
                required
              ></input>
            </div>
            <div className="mb-2">
              <input type="checkbox" className="custom-botton custom-checkbox" id="check"></input>
              <label htmlFor="check" className="custom-input-label ms-2">
                Recordar usuario y contraseña
              </label>
            </div>
            <div className='d-grid'>
              <button className="btn btn-primary" onClick={iniciarsesion}>Iniciar sesión</button>
            </div>
          </form>
          <p className="text-end mt-2">
            Olvidaste tu <a href="">Contraseña?</a> <Link to="/registro" className="ms-2">
              Registrarse
            </Link>
          </p>
        </div>
      </div>
      {miLogin && <Redirect to="/inicio" />}
    </div>
  );
}

export default Login;
