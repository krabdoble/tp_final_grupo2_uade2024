/*import React, { useState, useEffect } from "react";
import FormProductoInfo from "./FormProductoInfo";
import { productos } from "../datos/Datos";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import MostrarDatos from "./MostrarDatos";

import logoProducto from "./IMG COMPONENTES/producto-01.png";

function ListaProducto() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(productos)
  }, []);

  const handleFormSubmit = (formData) => {
    setProductList([...productList, formData]);
    console.log(formData);
  };

   const eliminarProducto = (id) => {
     const tareasActualizadas = productList.filter(
       (formData) => formData.id !== id
     );
     setProductList(tareasActualizadas);
   };

  return (
    <>
      <div className="container">
      <div className="logo-container">
        <img src={logoProducto} alt="Logo Producto" className="producto-logo" />
      </div>

      <div className="d-flex justify-content-center align-item-center">
        <FormProductoInfo onSubmit={handleFormSubmit} />
      </div>

      <hr />
      <div className="card mb-3 shadow-8 surface-card text-center border-round-sm h-100rem w-70rem font-semibold">
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
      </div>
      { <div>
        <div className="row">
          {productList.map((value, index) => (
            <div className="card mb-3 mx-3 ml-4 shadow-8 surface-card border-round-sm h-70rem w-21rem font-semibold">
            <div key={index} className="mg-2">
              <MostrarDatos
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
            </div></div>
          ))}
        </div>
      </div> }
    </>
  );
}

export default ListaProducto;*/

import React, { useEffect, useState } from 'react';


const ListaProductoInfo = () => {
    const [productoInfoList, setProductoInfoList] = useState([]);
  //const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/api/producto/el-producto');
      const data = await response.json();
      setProductoInfoList(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-center">Lista de Productos</h2>
      <div className="row">
      <ul>
        {productoInfoList.map((producto) => (
          <div className="card mb-3 mx-3 ml-4 shadow-8 surface-card border-round-sm h-70rem w-21rem font-semibold">
          <li key={producto.id} className="mg-2">{producto.id} - {producto.nombre} - {producto.nombreComercial} - 
          {producto.seleccion} - {producto.precioVenta} - {producto.proveedor} . 
          {producto.precioCompra} - {producto.fotoProducto} </li>
          </div>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default ListaProductoInfo;




