import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function CatalogoProducto({ onSubmit }) {
  const [catalogoList, setCatalogoList] = useState([]);
  const [inputCatalogoProducto, setInputCatalogoProducto] = useState({
    nombreComercial: "",
    precioVenta: "",
    fotoProducto: [null],
  });

  const handleChangeCatalogoProducto = (e) => {
    const { name, value, files } = e.target;
    if (name === "fotoProducto") {
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

  /*const handleChangeProduct=(event) =>{
      const {name, value}= event.target;
      setInputProduct({
        ...inputProduct,
        [name] : value
      });
    };

    const handleFileChange=(event) =>{
      setInputProduct({
        ...inputProduct,
        fotoProducto: event.target.files[0]
      });
    };*/

  const handleSubmit = (event) => {
    event.preventDefault();
    setCatalogoList([...catalogoList, inputCatalogoProducto]); //
  };

  return (
    <div>
      <h2 className="text-center">Catalogo de los Productos</h2>
      <div className="d-flex justify-content-center align-item-center">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="nombreComercial"
              placeholder="nombre comercial de product"
              value={inputCatalogoProducto.nombreComercial}
              onChange={handleChangeCatalogoProducto}
            />
          </div>
          <div>
            <input
              type="text"
              name="precioVenta"
              placeholder="precio de venta"
              value={inputCatalogoProducto.precioVenta}
              onChange={handleChangeCatalogoProducto}
            />
          </div>
          <div>
            <input
              type="file"
              name="fotoProducto"
              placeholder="imagen del product"
              onChange={handleChangeCatalogoProducto}
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
      <hr />

      <div className="card">
        <DataTable value={catalogoList} tableStyle={{ minWidth: "50rem" }}>
          <Column field="nombreComercial" header="NombreComercial"></Column>
          <Column field="precioVenta" header="PrecioVenta"></Column>
          <Column field="fotoProducto" header="FotoProducto"></Column>
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
  );
}

export default CatalogoProducto;
