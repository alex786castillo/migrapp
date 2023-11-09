import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'; // Importa Link y useNavigate desde React Router
import "../styles/login.css";

function Login() {
  const [txtusu, setUsu] = useState("");
  const [txtpas, setPas] = useState("");

  const navigate = useNavigate(); // Utiliza useNavigate para la redirección

  function inico() {
    if (txtusu.length > 0 && txtpas.length > 0) {
      // Si ambos campos tienen contenido, redirecciona
      navigate("/chequeos");
    } else {
      alert("Complete los campos vacíos!!");
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
              <button className="btn btn-primary" onClick={inico}>Iniciar sesión</button>
            </div>
          </form>
          <p className="text-end mt-2">
            Olvidaste tu <a href="">Contraseña?</a> <Link to="/registro" className="ms-2">
              Registrarse
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
