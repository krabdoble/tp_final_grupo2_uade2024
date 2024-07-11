import React from "react";
import "../estilos-pagina/mostrar.css";


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
          delete
        </button>
      </div>

     
    </div>
  );
}

export default MostrarDatos;