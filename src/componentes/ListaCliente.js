import React, { useEffect, useState } from 'react';

const ListaCliente = () => {
    const [clienteList, setClienteList] = useState([]);
  //const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/api/cliente/usuarios');
      const data = await response.json();
      setClienteList(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-center">Lista de Clientes</h2>
      <ul>
        {clienteList.map((cliente) => (
          <li key={cliente.id}>{cliente.id} - {cliente.nombre} - {cliente.cuit} </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaCliente;
