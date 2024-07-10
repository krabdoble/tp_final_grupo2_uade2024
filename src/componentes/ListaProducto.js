import React, { useState, useEffect } from "react";
import Formulario from "./Formulario";
import { productos } from "../datos/Datos";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function ListaProducto() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(productos)
  }, []);

  const handleFormSubmit = (formData) => {
    setProductList([...productList, formData]);
    console.log(formData);
  };

  // const eliminarProducto = (id) => {
  //   const tareasActualizadas = productList.filter(
  //     (formData) => formData.id !== id
  //   );
  //   setProductList(tareasActualizadas);
  // };

  return (
    <>
      <h2 className="text-center">Formulario de Producto</h2>
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
          <Column field="id" header="Id"></Column>
          <Column field="nombre" header="Nombre"></Column>
          <Column field="seleccion" header="Seleccion"></Column>
          <Column field="nombreComercial" header="NombreComercial"></Column>
          <Column field="precioVenta" header="PrecioVenta"></Column>
          <Column field="proveedor" header="Proveedor"></Column>
          <Column field="precioCompra" header="PrecioCompra"></Column>
          <Column field="fotoProducto" header="FotoProducto"></Column>
        </DataTable>
      </div>
      {/* <div>
        <div className="row">
          {productList.map((value, index) => (
            <div key={index} className="card mt-2">
              <DatosProducto
                id={value.id}
                nombre={value.nombre}
                nombreComercial={value.nombreComercial}
                seleccion={value.seleccion}
                precioVenta={value.precioVenta}
                proveedor={value.proveedor}
                precioCompra={value.precioCompra}
                fotoProducto={value.fotoProducto}
                eliminarProducto={eliminarProducto}
              />
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
}

export default ListaProducto;

