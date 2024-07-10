// import React from "react";
import { useParams } from "react-router-dom";
import { proveedores} from "./Datos"
import "../estilos-pagina/mostrar.css";

function DatosProveedor() {

  const { id } = useParams("id")
  
  const proveedor = proveedores.find(prov => prov.id === id)

  return (
    <div className="mt-4">
      <div>
        <p>El id del proveedor es {proveedor.id}</p>
        <p>El nombre del proveedor es {proveedor.nombre}</p>
        <p>El cuit del proveedro es {proveedor.cuit}</p>
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

export default DatosProveedor;