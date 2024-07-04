import React, { useState } from "react";
import Formulario from "./Formulario";
import MostrarDatos from "./MostrarDatos";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";


import logoProducto from "./IMG COMPONENTES/producto-01.png";

function ListaProducto() {
  const [productList, setProductList] = useState([]);

  const handleFormSubmit = (formData) => {

    setProductList([...productList, formData]);
    console.log(formData);
  };

  const eliminarProducto = (id) => {

    const productosActualizados = productList.filter((producto) => producto.id !== id);
    setProductList(productosActualizados);
  };

  return (
    <div className="container">
      <div className="logo-container">
        <img src={logoProducto} alt="Logo Producto" className="producto-logo" />
      </div>

        <div className="d-flex justify-content-center align-item-center">
        <Formulario onSubmit={handleFormSubmit} />
      </div>

      <hr />

      <div className="card">
        <DataTable
          value={productList}
          tableStyle={{ minWidth: "50rem" }}
          selectionMode="single"
          onRowClick={(event) => {
            console.log(event.data);
            window.location.href = `/listaproducto/${event.data.id}`;
          }}
        >
          <Column field="id" header="ID"></Column>
          <Column field="nombre" header="Nombre"></Column>
          <Column field="seleccion" header="Selección"></Column>
          <Column field="nombreComercial" header="Nombre comercial"></Column>
          <Column field="precioVenta" header="Precio de venta"></Column>
          <Column field="proveedor" header="Proveedor"></Column>
          <Column field="precioCompra" header="Precio de compra"></Column>
          <Column field="fotoProducto" header="Foto del producto"></Column>
        </DataTable>
      </div>

    
      <div className="row">
        {productList.map((producto, index) => (
          <div key={index} className="card mt-2">
            <MostrarDatos
              id={producto.id}
              nombre={producto.nombre}
              nombreComercial={producto.nombreComercial}
              seleccion={producto.seleccion}
              precioVenta={producto.precioVenta}
              proveedor={producto.proveedor}
              precioCompra={producto.precioCompra}
              fotoProducto={producto.fotoProducto}
              eliminarProducto={eliminarProducto}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaProducto;
