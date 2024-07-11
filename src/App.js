// import logo from "./logo.svg";
import "./App.css";
// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./componentes/Navbar";
//import Formulario from './componentes/Formulario';
import ListaProducto from "./componentes/ListaProducto";
import DatosProducto from "./datos/DatosProducto";
import FormProveedor from "./componentes/FormProveedor";
import DatosProveedor from "./datos/DatosProveedor";
import FormCliente from "./componentes/FormCliente";
import DatosClientes from "./datos/DatosCliente";
import CatalogoProducto from "./componentes/CatalogoProducto";
import DatosCatalogo from "./datos/DatosCatalogo";
import Pedido from "./componentes/Pedido";
import DatosPedido from "./datos/DatosPedido";
import Reportes from "./componentes/Reportes";

function App() { 

  return (
    <div className='container'>
      <h2 className="d-flex justify-content-center align-item-center">Welcome to my page</h2>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/listaproducto"
            element={<ListaProducto></ListaProducto>}
          ></Route>
          <Route
            path="/listaproducto/:id"
            element={<DatosProducto></DatosProducto>}
          ></Route>
          <Route
            path="/formproveedor"
            element={<FormProveedor></FormProveedor>}
          ></Route>
          <Route
            path="formproveedor/:id"
            element={<DatosProveedor></DatosProveedor>}
          ></Route>
          <Route
            path="/formcliente"
            element={<FormCliente></FormCliente>}
          ></Route>
          <Route
            path="formcliente/:id"
            element={<DatosClientes></DatosClientes>}
          ></Route>
          <Route
            path="/catalogoproducto"
            element={<CatalogoProducto></CatalogoProducto>}
          ></Route>
          <Route
            path="/catalogoproducto/:nombre"
            element={<DatosCatalogo></DatosCatalogo>}
          ></Route>
          <Route
            path="/pedido"
            element={<Pedido></Pedido>}
          ></Route>
          <Route
            path="/pedido/:id"
            element={<DatosPedido></DatosPedido>}
          ></Route>
          <Route
            path="/reportes"
            element={<Reportes></Reportes>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
