import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
//import TableProveedor from "./TableProveedor";

function FormProveedor({}) {
  const [proveedorList, setProveedorList] = useState([]);
  const [inputProveedor, setInputProveedor] = useState({
    id: "",
    nombre: "",
    cuit: "",
  });

  const handleChangeProveedor = (event) => {
    const { name, value } = event.target;
    setInputProveedor({
      ...inputProveedor,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setProveedorList([...proveedorList, inputProveedor]);
  };

  const eliminarProducto = (id) => {
    const tareasActualizadas = proveedorList.filter(
      (inputProveedor) => inputProveedor.id !== id
    );
    setProveedorList(tareasActualizadas);
  };

  return (
    <div>
      <h2 className="text-center">Datos de los proveedores</h2>
      <div className="d-flex justify-content-center align-item-center">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="id"
              name="id"
              placeholder="Id del proveedor"
              value={inputProveedor.id}
              onChange={handleChangeProveedor}
            />
          </div>
          <div>
            <input
              type="text"
              name="nombre"
              placeholder="nombre del proveedor"
              value={inputProveedor.nombre}
              onChange={handleChangeProveedor}
            />
          </div>
          <div>
            <input
              type="text"
              name="cuit"
              placeholder="cuit del proveedor"
              value={inputProveedor.cuit}
              onChange={handleChangeProveedor}
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
      <hr />

      <div className="card">
        <DataTable value={proveedorList} tableStyle={{ minWidth: "50rem" }}>
          <Column field="id" header="Id"></Column>
          <Column field="nombre" header="Nombre"></Column>
          <Column field="cuit" header="Cuit"></Column>
        </DataTable>
      </div>

      <div>
        {proveedorList.map((value, index) => (
          <div key={index} className="card mt-2">
            <p>el id del proveedor es {value.id}</p>
            <p>el nombre del proveedor es {value.nombre}</p>
            <p>el cuit del proveedor es {value.cuit}</p>
            <div>
              <button
                type="submit"
                className="btn btn-danger"
                onClick={() => eliminarProducto(value.id)}
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

export default FormProveedor;
