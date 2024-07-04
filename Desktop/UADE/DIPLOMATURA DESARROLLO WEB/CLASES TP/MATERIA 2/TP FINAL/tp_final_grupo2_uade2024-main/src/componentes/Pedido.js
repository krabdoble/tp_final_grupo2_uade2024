import React, { useState } from "react";
import { PickList } from 'primereact/picklist';

import logoProducto from "./IMG COMPONENTES/pedido-01.png";


function Pedido() {
  const [pedidoList, setPedidoList] = useState([]);
  const [target, setTarget] = useState([]);
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
  const onChange = (event) => {
    setPedidoList(event.pedidoList);
    setTarget(event.target);
};


const itemTemplate = (item) => {
  return (
      <div className="flex flex-wrap p-2 align-items-center gap-3">
          <div className="flex-1 flex flex-column gap-2">
              <div><span className="font-bold">{item.id}</span></div>
              <div><span className="font-bold">{item.productoSelect}</span></div>
              <div><span className="font-bold">{item.cliente}</span></div>
              <div><span className="font-bold">{item.fechaDeCarga}</span></div>
              <div><span className="font-bold">{item.fechaDeEntrega}</span></div>
              
          </div>
          <span className="font-bold text-900">${item.saldoTotal}</span>
      </div>
  );
};

  return (
<div className="container">
      <div className="logo-container">
        <img src={logoProducto} alt="Logo Producto" className="producto-logo" />
      </div>

    <div>
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

      <div className="card">
            <PickList dataKey="id" source={pedidoList} target={target} onChange={onChange} itemTemplate={itemTemplate}  breakpoint="1280px"
                sourceHeader="Available" targetHeader="Selected" sourceStyle={{ height: '24rem' }} targetStyle={{ height: '24rem' }}
                 />
        </div>
        <div>
          {pedidoList.map((value,index)=>(
            <div key={index} className='card mt-3'>
              <p>El ID del pedido {value.id}</p>
              <p>El producto seleccionado {value.productoSelect}</p>
              <p>El nombre del cliente {value.cliente}</p>
              <p>Fecha de carga del pedido {value.fechaDeCarga}</p>
              <p>Fecha de entrega del pedido {value.fechaDeEntrega}</p>
              <p>Saldo total del pedido $ {value.saldoTotal}</p>
            </div>
          ))}
        </div>
    </div>
    </div>
  );
}

export default Pedido;