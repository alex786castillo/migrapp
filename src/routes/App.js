import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Inicio from '../pages/inicio';
import Login from '../pages/login';



function App() {
  return (
   <Router>
    <Routes>
      <Route exact path = '/' element ={<Inicio/>}/>
      <Route exact path = '/login' element ={<Login/>}/>
    </Routes>
   </Router>
  );
}

export default App;
