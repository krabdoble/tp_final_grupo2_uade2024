/*import React, {useState} from "react";

function Formulario({onSubmit}){
    const [inputProduct, setInputProduct]= useState({
        id: '',
        nombre: '',
        nombreComercial: '',
        seleccion:'',
        precioVenta: '',
        proveedor: '',
        precioCompra: '',
        fotoProducto: [null]
    })

    const handleChangeProduct = (e) => {
      const { name, value, files } = e.target;
      if (name === 'photo') {
          setInputProduct({
              ...inputProduct,
              fotoProducto: files[0]
          });
      } else {
          setInputProduct({
              ...inputProduct,
              [name]: value
          });
      }
  }

    const handleSubmit=(event) =>{
      event.preventDefault();
      onSubmit(inputProduct)
    }

    return(
      <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="id"
                placeholder="ID del producto"
                value={inputProduct.id}
                onChange={handleChangeProduct}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control border-color: blueviolet ;"
                name="nombre"
                placeholder="Nombre del producto"
                value={inputProduct.nombre}
                onChange={handleChangeProduct}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="nombreComercial"
                placeholder="Nombre comercial del producto"
                value={inputProduct.nombreComercial}
                onChange={handleChangeProduct}
              />
            </div>
            <div className="form-group">
              <label>Evolución:</label>
              <select
                className="form-control"
                name="seleccion"
                value={inputProduct.seleccion}
                onChange={handleChangeProduct}
              >
                <option value="">...</option>
                <option value="Evolucion-1">1</option>
                <option value="Evolucion-2">2</option>
                <option value="Evolucion-3">3</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="precioVenta"
                placeholder="Precio de venta"
                value={inputProduct.precioVenta}
                onChange={handleChangeProduct}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="proveedor"
                placeholder="Proveedor del producto"
                value={inputProduct.proveedor}
                onChange={handleChangeProduct}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="precioCompra"
                placeholder="Precio de compra"
                value={inputProduct.precioCompra}
                onChange={handleChangeProduct}
              />
            </div>
            <div className="form-group">
              <input
                type="file"
                className="elegir-archivo"
                name="fotoProducto"
                onChange={handleChangeProduct}
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="boton-send">
            Enviar
          </button>
        </div>
      </form>
    </div>
    )
}

export default Formulario*/

import React, {useState} from "react";

function FormProductoInfo(){
    const [inputProduct, setInputProduct]= useState({
       // id: '',
        nombre: '',
        nombreComercial: '',
        seleccion:'',
        precioVenta: '',
        proveedor: '',
        precioCompra: '',
        fotoProducto: [null]
    })

    const handleChangeProduct = (e) => {
      const { name, value, files } = e.target;
      if (name === 'photo') {
          setInputProduct({
              ...inputProduct,
              fotoProducto: files[0]
          });
      } else {
          setInputProduct({
              ...inputProduct,
              [name]: value
          });
      }
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/producto/guardar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputProduct),
      });
      if (response.ok) {
        alert('Datos guardados exitosamente!');
      } else {
        alert('Error al guardar los datos');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

   /* const handleSubmit=(event) =>{
      event.preventDefault();
      onSubmit(inputProduct)
    }*/

    return(
      <div className="container">
      <h2 className="text-center">Carga de Productos</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control border-color: blueviolet ;"
                name="nombre"
                placeholder="Nombre del producto"
                value={inputProduct.nombre}
                onChange={handleChangeProduct}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="nombreComercial"
                placeholder="Nombre comercial del producto"
                value={inputProduct.nombreComercial}
                onChange={handleChangeProduct}
              />
            </div>
            <div className="form-group">
              <label>Evolución:</label>
              <select
                className="form-control"
                name="seleccion"
                value={inputProduct.seleccion}
                onChange={handleChangeProduct}
              >
                <option value="">...</option>
                <option value="Evolucion-1">1</option>
                <option value="Evolucion-2">2</option>
                <option value="Evolucion-3">3</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="precioVenta"
                placeholder="Precio de venta"
                value={inputProduct.precioVenta}
                onChange={handleChangeProduct}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="proveedor"
                placeholder="Proveedor del producto"
                value={inputProduct.proveedor}
                onChange={handleChangeProduct}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="precioCompra"
                placeholder="Precio de compra"
                value={inputProduct.precioCompra}
                onChange={handleChangeProduct}
              />
            </div>
            <div className="form-group">
              <input
                type="file"
                className="elegir-archivo"
                name="fotoProducto"
                onChange={handleChangeProduct}
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="boton-send">
            Enviar
          </button>
        </div>
      </form>
    </div>
    )
}

export default FormProductoInfo


/*
<div className="form-group">
              <input
                type="text"
                className="form-control"
                name="id"
                placeholder="ID del producto"
                value={inputProduct.id}
                onChange={handleChangeProduct}
              />
            </div>
*/
