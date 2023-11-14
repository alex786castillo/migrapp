import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../pages/login';
import Inicio from '../pages/inicio';
import Registro from "../pages/registro";
import Chequeos from "../pages/chequeos";
import Direcciones from "../pages/direcciones";
import Documentos from "../pages/documentos"
import Perfil from "../pages/perfil"

function App() {
  return (
   <Router>
    <Routes>
      <Route exact path = '/inicio' element ={<Inicio/>}/>
      <Route exact path = '/' element ={<Login/>}/>
      <Route exact path = '/registro' element ={<Registro/>}/>
      <Route exact path = '/chequeos' element ={<Chequeos/>}/>
      <Route exact path = '/direcciones' element ={<Direcciones/>}/>
      <Route exact path = '/documentos' element ={<Documentos/>}/>
      <Route exact path = '/perfil' element ={<Perfil/>}/>







      
    </Routes>
   </Router>
  );
}

export default App;
