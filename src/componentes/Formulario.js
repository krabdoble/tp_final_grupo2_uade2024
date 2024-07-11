import React, {useState} from "react";

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
        <div>
        
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type='id'
              name='id'
              placeholder='Id de product'
              value={inputProduct.id}
              onChange={handleChangeProduct}
            />
          </div>
          <div>
            <input
              type='text'
              name='nombre'
              placeholder='nombre de product'
              value={inputProduct.nombre}
              onChange={handleChangeProduct}
            />
          </div>
          <div>
            <input
              type='text'
              name='nombreComercial'
              placeholder='nombre comercial de product'
              value={inputProduct.nombreComercial}
              onChange={handleChangeProduct}
            />
          </div>
          <label><select name='seleccion' value={inputProduct.seleccion} onChange={handleChangeProduct}>
          <option value=''>...</option>
            <option value='XS'>XS</option>
            <option value='S'>S</option>
            <option value='M'>M</option>
            <option value='L'>L</option>
            <option value='XL'>XL</option>
            
          </select>Talle</label>
          <div>
            <input
              type='text'
              name='precioVenta'
              placeholder='precio de venta'
              value={inputProduct.precioVenta}
              onChange={handleChangeProduct}
            />
          </div>
          <div>
            <input
              type='text'
              name='proveedor'
              placeholder='proveedor de product'
              value={inputProduct.proveedor}
              onChange={handleChangeProduct}
            />
          </div>
          <div>
            <input
              type='text'
              name='precioCompra'
              placeholder='precio de compra'
              value={inputProduct.precioCompra}
              onChange={handleChangeProduct}
            />
          </div>
          <div>
            <input
              type='file'
              name='fotoProducto'
              placeholder='imagen del product'
              onChange={handleChangeProduct}
            />
          </div>
          <button type="submit">Send</button>
        </form>

        
    </div>
    )
}

export default Formulario