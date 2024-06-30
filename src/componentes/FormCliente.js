import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function FormCliente() {
  const [clienteList, setClienteList] = useState([]);
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

  const eliminarCliente = (id) => {
    const borrarCliente = clienteList.filter(
      (inputCliente) => inputCliente.id !== id
    );
    setClienteList(borrarCliente);
  };
  return (
    <div>
      <h2 className="text-center">Datos de los clientes</h2>
      <div className="d-flex justify-content-center align-item-center">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="id"
              name="id"
              placeholder="Id del cliente"
              value={inputCliente.id}
              onChange={handleChangeCliente}
            />
          </div>
          <div>
            <input
              type="text"
              name="nombre"
              placeholder="nombre del cliente"
              value={inputCliente.nombre}
              onChange={handleChangeCliente}
            />
          </div>
          <div>
            <input
              type="text"
              name="cuit"
              placeholder="cuit del cliente"
              value={inputCliente.cuit}
              onChange={handleChangeCliente}
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
      <hr />

      <div className="card">
        <DataTable value={clienteList} tableStyle={{ minWidth: "50rem" }}>
          <Column field="id" header="Id"></Column>
          <Column field="nombre" header="Nombre"></Column>
          <Column field="cuit" header="Cuit"></Column>
        </DataTable>
      </div>

      <div>
        {clienteList.map((value, index) => (
          <div key={index}>
            <p>el id del cliente es {value.id}</p>
            <p>el nombre del cliente es {value.nombre}</p>
            <p>el cuit del cliente es {value.cuit}</p>
            <div>
              <button
                type="submit"
                className="btn btn-danger"
                onClick={() => eliminarCliente(value.id)}
              >
                delete id {value.id}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FormCliente;
