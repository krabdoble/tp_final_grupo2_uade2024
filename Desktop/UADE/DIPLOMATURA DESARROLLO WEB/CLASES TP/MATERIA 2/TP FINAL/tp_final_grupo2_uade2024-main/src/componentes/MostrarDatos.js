import React from "react";
import "../estilos-pagina/mostrar.css";
//import ListaProducto from "./ListaProducto";

function MostrarDatos({
  id,
  nombre,
  seleccion,
  nombreComercial,
  precioVenta,
  proveedor,
  precioCompra,
  fotoProducto,
  eliminarProducto,
}) {
  /* const [data, setElArray]= useState([])

    const recibirArray= (nuevoArray)=>{
        setElArray(nuevoArray);
    };
*/
  return (
    <div className="mt-4">
      <div>
        <p>El id del producto es {id}</p>
        <p>El nombre del producto es {nombre}</p>
        <p>La talla del producto es {seleccion}</p>
        <p>El nombre commercial del producto es {nombreComercial}</p>
        <p>El precio de venta del producto es ${precioVenta}</p>
        <p>El proveedor del producto es ${proveedor}</p>
        <p>El precio de compra del producto es ${precioCompra}</p>
        <p>Este es la imagen del producto es {fotoProducto}</p>
      </div>
      <div>
        <button
          type="submit"
          className="btn btn-danger"
          onClick={() => eliminarProducto(id)}
        >
          delete id {id}
        </button>
      </div>

     
    </div>
  );
}

export default MostrarDatos;

/* <div>
        <table>
          <tr>
            <th>Id</th>
            <th>nombre</th>
            <th>seleccion</th>
            <th>nombreComercial</th>
            <th>precioVenta</th>
            <th>proveedor</th>
            <th>precioCompra</th>
            <th>fotoProducto</th>
          </tr>

          <tr>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>{seleccion}</td>
            <td>{nombreComercial}</td>
            <td>${precioVenta}</td>
            <td>${proveedor}</td>
            <td>${precioCompra}</td>
            <td>{fotoProducto}</td>
          </tr>
        </table>
      </div>*/
