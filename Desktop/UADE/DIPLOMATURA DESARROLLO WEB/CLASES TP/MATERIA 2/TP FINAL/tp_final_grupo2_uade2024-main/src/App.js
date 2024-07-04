
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Formulario from './componentes/Formulario';
import ListaProducto from "./componentes/ListaProducto";
import MostrarDatos from "./componentes/MostrarDatos";
import Navbar from "./componentes/Navbar";
import FormProveedor from "./componentes/FormProveedor";
import FormCliente from "./componentes/FormCliente";
import CatalogoProducto from "./componentes/CatalogoProducto";
import Pedido from "./componentes/Pedido";


//pokelogo
import logoPoke from "./IMG/poke logo.png"; 



function App() { 

  return (
    <div className='background-app'>
    <div className='container'>
      <div className="logo-container">
        <img src={logoPoke} alt="Logo" className="app-logo" />
      </div>

      <BrowserRouter>
        <Navbar className="Nabvar"/>
        <Routes>
          <Route
            path="/listaproducto"
            element={<ListaProducto></ListaProducto>}
          ></Route>
          <Route
            path="/MostrarDatos"
            element={<MostrarDatos></MostrarDatos>}
          ></Route>
          <Route
            path="/formproveedor"
            element={<FormProveedor></FormProveedor>}
          ></Route>
          <Route
            path="/formcliente"
            element={<FormCliente></FormCliente>}
          ></Route>
          <Route
            path="/catalogoproducto"
            element={<CatalogoProducto></CatalogoProducto>}
          ></Route>
          <Route
            path="/pedido"
            element={<Pedido></Pedido>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
