import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../pages/login';
import Inicio from '../pages/inicio';
import Registro from "../pages/registro";


function App() {
  return (
   <Router>
    <Routes>
      <Route exact path = '/' element ={<Inicio/>}/>
      <Route exact path = '/login' element ={<Login/>}/>
      <Route exact path = '/registro' element ={<Registro/>}/>


      
    </Routes>
   </Router>
  );
}

export default App;
