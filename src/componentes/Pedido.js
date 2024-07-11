import React, { useState, useEffect } from "react";
import { pedidos } from "../datos/Datos";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

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

   const eliminarPedido = (id) => {
     const borrarPedido = pedidoList.filter(
       (inputPedido) => inputPedido.id !== id
     );
     setPedidoList(borrarPedido);
   };
  return (
    <div>
      <h2 className="text-center">Datos de los clientes</h2>
      <div className="d-flex justify-content-center align-item-center">
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
              />{" "}
              Carga
            </label>
          </div>
          <div>
            <label>
              <input
                type="date"
                name="fechaDeEntrega"
                placeholder="fecha de entrega"
                value={inputPedido.fechaDeEntrega}
                onChange={handleChangePedido}
              />{" "}
              Entrega
            </label>
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
          <button type="submit">Send</button>
        </form>
      </div>
      <hr />

      <div className="card">
        <DataTable value={pedidoList} tableStyle={{ minWidth: "50rem" }} selectionMode="single"
          onRowClick={(event) => {
            console.log(event.data);
            window.location.href = `/pedido/${event.data.id}`;
          }}>
          <Column field="id" header="Id"></Column>
          <Column field="productoSelect" header="Producto select"></Column>
          <Column field="cliente" header="Cliente"></Column>
          <Column field="fechaDeCarga" header="Fecha de Carga"></Column>
          <Column field="fechaDeEntrega" header="Fecha de entrega"></Column>
          <Column field="saldoTotal" header="Saldo total"></Column>
        </DataTable>
      </div>

      { <div>
        {pedidoList.map((value, index) => (
          <div key={index} className="card mt-3">
            <p>El id del pedido {value.id}</p>
            <p>El producto seleccionado {value.productoSelect}</p>
            <p>El nombre del cliente {value.cliente}</p>
            <p>La fecha de carga del pedido {value.fechaDeCarga}</p>
            <p>La fecha de entrega del pedido {value.fechaDeEntrega}</p>
            <p>El saldo total del pedido $ {value.saldoTotal}</p>
            <div>
              <button
                type="submit"
                className="btn btn-danger"
                onClick={() => eliminarPedido(value.id)}
              >
                delete
              </button>
            </div>
          </div>
        ))}
      </div> }
    </div>
  );

  
}

export default Pedido;
