import React from 'react';


function TableProveedor({id, nombre, cuit}) {

    return (
        <div className=''>
            <p>el id del proveedor es {id}</p>
           <p>el nombre del proveedor es {nombre}</p>
           <p>el cuit del proveedor es {cuit}</p>
        </div>
    );
}

export default  TableProveedor
        