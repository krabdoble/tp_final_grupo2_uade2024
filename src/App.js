import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./componentes/Navbar";
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
       <div className="container-fluid pie-index">
     <footer className="footer">
     <h5>Trabajo Práctico Final: <b>Grupo 2</b>.-</h5>
     <p><i>Integrantes:</i> Artilles, Lautaro;  Cabral, Rodrigo;  Lamarre, Patrice;  Ronchi, Agustín;  Sánchez Rizzotti, Amanda;  Volante, Franco.</p>
     </footer>
    </div>
    </div>
  );
}

export default App;
