import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import logoProducto from "./IMG COMPONENTES/catalogo-01.png";



function CatalogoProducto({ onSubmit }) {
  const [catalogoList, setCatalogoList] = useState([]);
  const [inputCatalogoProducto, setInputCatalogoProducto] = useState({
    nombreComercial: "",
    precioVenta: "",
    fotoProducto: [null],
  });

  const handleChangeCatalogoProducto = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setInputCatalogoProducto({
        ...inputCatalogoProducto,
        fotoProducto: files[0],
      });
    } else {
      setInputCatalogoProducto({
        ...inputCatalogoProducto,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCatalogoList([...catalogoList, inputCatalogoProducto]); //
  };

  return (
  <div className="container">
      {}
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
              type="text"
              name="nombreComercial"
              placeholder="Nombre comercial de producto"
              value={inputCatalogoProducto.nombreComercial}
              onChange={handleChangeCatalogoProducto}
            />
          </div>
          <div className="col-md-12">
            <input
              className="form-control"
              type="text"
              name="precioVenta"
              placeholder="Precio de venta"
              value={inputCatalogoProducto.precioVenta}
              onChange={handleChangeCatalogoProducto}
            />
          </div>
          </div>
          <div className="col-md-12">
            <input
              className="elegir-archivo"
              type="file"
              name="fotoProducto"
              placeholder="Imagen del producto"
              onChange={handleChangeCatalogoProducto}
            />
          </div>
          <button className="boton-send" type="submit">Enviar</button>
        </form>
      </div>
      <hr />

      <div className="card">
        <DataTable value={catalogoList} tableStyle={{ minWidth: "50rem" }}>
          <Column field="nombreComercial" header="Nombre comercial"></Column>
          <Column field="precioVenta" header="Precio de venta"></Column>
          <Column field="fotoProducto" header="Foto del producto"></Column>
        </DataTable>
      </div>
      <div className="row">
        {catalogoList.map((value, index) => (
          <div key={index} className="card col-lg-4 col-sm-12 ">
            <img
              src={value.fotoProducto}
              alt={"fotoProducto " + value.nombreComercial}
            />
            <div className="row">
              <div className="col-4">
                <span>{value.nombreComercial}</span>
              </div>
              <div className="col-4">
                <span>${value.precioVenta}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default CatalogoProducto;
