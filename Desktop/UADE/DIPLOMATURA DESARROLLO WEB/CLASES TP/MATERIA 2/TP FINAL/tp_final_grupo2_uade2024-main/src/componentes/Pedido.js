import React, { useState, useEffect } from "react";
import { pedidos } from "../datos/Datos";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import logoProducto from "./IMG COMPONENTES/pedido-01.png";

function Pedido() {
  const [pedidoList, setPedidoList] = useState([]);

  useEffect(() => {
    setPedidoList(pedidos);
  }, [])

  const [inputPedido, setInputPedido] = useState({
    id: "",
    productoSelect: "",
    cliente: "",
    fechaDeCarga: "",
    fechaDeEntrega: "",
    saldoTotal: "",
  });

  const handleChangePedido = (event) => {
    const { name, value } = event.target;
    setInputPedido({
      ...inputPedido,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPedidoList([...pedidoList, inputPedido]);
  };


  return (
<div className="container">
      <div className="logo-container">
        <img src={logoProducto} alt="Logo Producto" className="producto-logo" />
      </div>

      <div className="d-flex justify-content-center align-item-center mb-3">
      <form onSubmit={handleSubmit}>
        <div className="row">
         <div className="col-md-12">
          <input
            className="form-control"
            type="number"
            name="id"
            placeholder="ID del producto"
            value={inputPedido.id}
            onChange={handleChangePedido}
          />
        </div>
        <div>
          <input
            className="form-control"
            type="text"
            name="productoSelect"
            placeholder="Nombre del producto seleccionado"
            value={inputPedido.productoSelect}
            onChange={handleChangePedido}
          />
        </div>
        <div>
          <input
            className="form-control"
            type="text"
            name="cliente"
            placeholder="Nombre del cliente"
            value={inputPedido.cliente}
            onChange={handleChangePedido}
          />
        </div>
        <div>
        </div>
        <div className="row">
  <div className="col-md-6">
    <label htmlFor="fechaDeCarga">Fecha de carga</label>
    <input
      className="form-control"
      type="date"
      id="fechaDeCarga"
      name="fechaDeCarga"
      value={inputPedido.fechaDeCarga}
      onChange={handleChangePedido}
    />
  </div>
  <div className="col-md-6">
    <label htmlFor="fechaDeEntrega">Fecha de entrega</label>
    <input
      className="form-control"
      type="date"
      id="fechaDeEntrega"
      name="fechaDeEntrega"
      value={inputPedido.fechaDeEntrega}
      onChange={handleChangePedido}
    />
  </div>
</div>

        <div>
          <input
            className="form-control"
            type="number"
            name="saldoTotal"
            placeholder="Saldo del pedido"
            value={inputPedido.saldoTotal}
            onChange={handleChangePedido}
          />
        </div>
        </div>
        <button className="boton-send" type="submit">Enviar</button>
      </form>
      </div>
      <hr />

      <div className="card">
        <DataTable value={pedidoList} tableStyle={{ minWidth: "50rem" }} selectionMode="single"
          onRowClick={(event) => {
            console.log(event.data);
            window.location.href = `/pedido/${event.data.id}`;
          }}>
          <Column field="id" header="ID"></Column>
          <Column field="productoSelect" header="Producto seleccionado"></Column>
          <Column field="cliente" header="Nombre del cliente"></Column>
          <Column field="fechaDeCarga" header="Fecha de carga"></Column>
          <Column field="fechaDeEntrega" header="Fecha de entrega"></Column>
          <Column field="saldoTotal" header="Saldo total"></Column>
        </DataTable>
      </div>
    </div>
  );
}

export default Pedido;
