import React, { useEffect, useState } from 'react';

const ListaProveedor = () => {
    const [proveedorList, setProveedorList] = useState([]);
  //const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/api/proveedor/el-proveedor');
      const data = await response.json();
      setProveedorList(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-center">Lista de Proveedores</h2>
      <ul>
        {proveedorList.map((proveedor) => (
          <li key={proveedor.id}>{proveedor.id} - {proveedor.nombre} - {proveedor.cuit} </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaProveedor;
