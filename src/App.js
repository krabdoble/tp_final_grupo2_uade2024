import logo from "./logo.svg";
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

function App() {
  /*const [data, setData] = useState([]);

  const handleFormSubmit = (formData) => {
    setData([...data, formData]);
    //console.log(data);
  };*/

  //ListaProducto handleFormSubmit={handleFormSubmit} 
  // data={data} 

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
  );
}

export default App;
