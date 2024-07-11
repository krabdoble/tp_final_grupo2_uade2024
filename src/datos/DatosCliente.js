// import React from "react";
import { useParams } from "react-router-dom";
import { clientes} from "./Datos"
import "../estilos-pagina/mostrar.css";

function DatosClientes() {

  const { id } = useParams("id")
  
  const cliente = clientes.find(prov => prov.id === id)

  return (
    <div className="mt-4">
      <div>
        <p>El id del cliente es {cliente.id}</p>
        <p>El nombre del cliente es {cliente.nombre}</p>
        <p>El cuit del cliente es {cliente.cuit}</p>
      </div>
      <div>
        {/* <button
          type="submit"
          className="btn btn-danger"
          onClick={() => eliminarProducto(producto.id)}
        >
          delete id {producto.id}
        </button> */}
      </div>

     
    </div>
  );
}

export default DatosClientes;