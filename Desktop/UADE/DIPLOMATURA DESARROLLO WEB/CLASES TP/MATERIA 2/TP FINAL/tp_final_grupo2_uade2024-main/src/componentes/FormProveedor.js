import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
//import TableProveedor from "./TableProveedor";

import logoProducto from "./IMG COMPONENTES/proveedor-01.png";


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
    <div className="container">
      <div className="logo-container">
        <img src={logoProducto} alt="Logo Producto" className="producto-logo" />
      </div>
    <div>
      
      <div className="d-flex justify-content-center align-item-center">
        <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-12">
            <input
              className="form-control"
              type="id"
              name="id"
              placeholder="ID del proveedor"
              value={inputProveedor.id}
              onChange={handleChangeProveedor}
            />
          </div>
          <div className="col-md-12">
            <input
              className="form-control"
              type="text"
              name="nombre"
              placeholder="Nombre del proveedor"
              value={inputProveedor.nombre}
              onChange={handleChangeProveedor}
            />
          </div>
          <div className="col-md-12">
            <input
              className="form-control"
              type="text"
              name="cuit"
              placeholder="CUIT del proveedor"
              value={inputProveedor.cuit}
              onChange={handleChangeProveedor}
            />
          </div>
          </div>
          <button className="boton-send" type="submit">Enviar</button>
        </form>
      </div>
      <hr />

      <div className="card">
        <DataTable value={proveedorList} tableStyle={{ minWidth: "50rem" }}>
          <Column field="id" header="ID del proveedor"></Column>
          <Column field="nombre" header="Nombre del proveedor"></Column>
          <Column field="cuit" header="CUIT del proveedor"></Column>
        </DataTable>
      </div>

      <div>
        {proveedorList.map((value, index) => (
          <div key={index} className="card mt-2">
            <p>El ID del proveedor es {value.id}</p>
            <p>El nombre del proveedor es {value.nombre}</p>
            <p>El CUIT del proveedor es {value.cuit}</p>
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
    </div>
  );
}

export default FormProveedor;
