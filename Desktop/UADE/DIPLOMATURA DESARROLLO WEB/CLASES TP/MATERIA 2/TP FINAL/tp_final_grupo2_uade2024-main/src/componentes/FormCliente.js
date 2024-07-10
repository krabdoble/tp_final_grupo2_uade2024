import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { clientes } from "../datos/Datos";

import logoProducto from "./IMG COMPONENTES/cliente-01.png";


function FormCliente() {
  const [clienteList, setClienteList] = useState([]);

  useEffect(() => {
    setClienteList(clientes)
  }, [])

  const [inputCliente, setInputCliente] = useState({
    id: "",
    nombre: "",
    cuit: "",
  });

  const handleChangeCliente = (event) => {
    const { name, value } = event.target;
    setInputCliente({
      ...inputCliente,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setClienteList([...clienteList, inputCliente]);
  };

  return (
<div className="container">
        <div className="logo-container">
         <img src={logoProducto} alt="Logo Producto" className="producto-logo" />
        </div>

        <div className="d-flex justify-content-center align-item-center">
        <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-12">
            <input
              className="form-control"
              type="id"
              name="id"
              placeholder="ID del cliente"
              value={inputCliente.id}
              onChange={handleChangeCliente}
            />
          </div>
          <div className="col-md-12">
            <input
              className="form-control"
              type="text"
              name="nombre"
              placeholder="Nombre del cliente"
              value={inputCliente.nombre}
              onChange={handleChangeCliente}
            />
          </div>
          <div className="col-md-12">
            <input
              className="form-control"
              type="text"
              name="cuit"
              placeholder="CUIT del cliente"
              value={inputCliente.cuit}
              onChange={handleChangeCliente}
            />
          </div>
          </div>
          <button className="boton-send" type="submit">Enviar</button>
        </form>
      </div>
      <hr />

      <div className="card">
        <DataTable value={clienteList} tableStyle={{ minWidth: "50rem" }} selectionMode="single"
          onRowClick={(event) => {
            console.log(event.data);
            window.location.href = `/formcliente/${event.data.id}`;
          }}>
          <Column field="id" header="ID"></Column>
          <Column field="nombre" header="Nombre del cliente"></Column>
          <Column field="cuit" header="CUIT"></Column>
        </DataTable>
      </div>
    </div>
  );
}

export default FormCliente;
