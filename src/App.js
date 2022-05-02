import logo from './logo.svg';
import './App.css';
import Nav from './Nav/Nav.jsx'
import Clientes from './Clientes/Clientes.jsx'
import {useLocalStorage} from './Clientes/useLocalStorage';
import React, { useState } from 'react';

function App() {
  const [clickRegistro,setclickRegistro]=useLocalStorage('clickRegistro',false);
  return (
    <div className="App">
    <div className="Container_Nav">
      <div className="Container_Nav_Fixed">
        <Nav clickRegistro={clickRegistro} setclickRegistro={setclickRegistro} />
      </div>
      
    </div>
    <div className="Container_Card">
      <Clientes clickRegistro={clickRegistro} setclickRegistro={setclickRegistro}/>
    </div>  
    </div>
  );
}

export default App;
