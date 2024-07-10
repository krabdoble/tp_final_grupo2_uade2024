// import React from "react";
import { useParams } from "react-router-dom";
import { pokemon } from "./Datos"
import "../estilos-pagina/mostrar.css";

function DatosCatalogo() {

  const { nombre } = useParams("nombre")
  
  const poke = pokemon.find(prov => prov.nombre === nombre)

  return (
    <div className="mt-4">
      <div>
        <p>El nombre del pokemon es {poke.nombre}</p>
        <p>El precio del pokemon es {poke.precio}</p>
        <p>La imagen del pokemon es {poke.img}</p>
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

export default DatosCatalogo;