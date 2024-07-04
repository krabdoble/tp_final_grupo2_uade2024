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
        <div>
          <input
            type="number"
            name="id"
            placeholder="Id de product"
            value={inputPedido.id}
            onChange={handleChangePedido}
          />
        </div>
        <div>
          <input
            type="text"
            name="productoSelect"
            placeholder="nombre producto seleccionado"
            value={inputPedido.productoSelect}
            onChange={handleChangePedido}
          />
        </div>
        <div>
          <input
            type="text"
            name="cliente"
            placeholder="nombre del cliente"
            value={inputPedido.cliente}
            onChange={handleChangePedido}
          />
        </div>
        <div>
          <label>
          <input
            type="date"
            name="fechaDeCarga"
            placeholder="fecha de carga"
            value={inputPedido.fechaDeCarga}
            onChange={handleChangePedido}
          /> Carga</label>
        </div>
        <div>
          <label>
          <input
            type="date"
            name="fechaDeEntrega"
            placeholder="fecha de entrega"
            value={inputPedido.fechaDeEntrega}
            onChange={handleChangePedido}
          /> Entrega</label>
        </div>
        <div>
          <input
            type="number"
            name="saldoTotal"
            placeholder="el saldo del pedido"
            value={inputPedido.saldoTotal}
            onChange={handleChangePedido}
          />
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
              <p>El id del pedido {value.id}</p>
              <p>El producto seleccionado {value.productoSelect}</p>
              <p>El nombre del cliente {value.cliente}</p>
              <p>La fecha de carga del pedido {value.fechaDeCarga}</p>
              <p>La fecha de entrega del pedido {value.fechaDeEntrega}</p>
              <p>El saldo total del pedido $ {value.saldoTotal}</p>
            </div>
          ))}
        </div>
    </div>
    </div>
  );
}

export default Pedido;