import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Inicio from '../pages/inicio';
import Login from '../pages/login';
import Direcciones from '../pages/direcciones';
import Chequeos from '../pages/chequeos';
import Documentos from '../pages/documentos';



function App() {
  return (
   <Router>
    <Routes>
      <Route exact path = '/' element ={<Inicio/>}/>
      <Route exact path = '/login' element ={<Login/>}/>
      <Route exact path = '/direcciones' element ={<Direcciones/>}/>
      <Route exact path = '/chequeos' element ={<Chequeos/>}/>
      <Route exact path = '/documentos' element ={<Documentos/>}/>
    </Routes>
   </Router>
  );
}

export default App;
