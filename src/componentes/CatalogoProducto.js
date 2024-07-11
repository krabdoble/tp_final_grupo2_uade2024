import React, { useState, useEffect } from "react";
import { pokemon } from "../datos/Datos";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

function CatalogoProducto() {
  const handleSubmit = (item) => {
    setCatalogoList([...catalogoList, item]); 
  };

  const [catalogoList, setCatalogoList] = useState([]);

  useEffect(() => {
    setCatalogoList(pokemon);
  }, []);

  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    const getPokemones = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=6&offset=0"
      );
      const listaPokemones = await response.json();
      const { results } = listaPokemones;

      const newpokemones = results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const poke = await response.json();

        return {
          id: poke.id,
          name: poke.name,
          img: poke.sprites.other.dream_world.front_default,
          precio: poke.base_experience,
        };
      });
      setPokemones(await Promise.all(newpokemones));
    };
    getPokemones();
  }, []);

  const eliminarProducto = (name) => {
    const tareasActualizadas = catalogoList.filter(
      (item) => item.name !== name
    );
    setCatalogoList(tareasActualizadas);
  };

  return (
    <div>
      <h2 className="text-center">Catalogo de los Productos</h2>

      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          {pokemones?.map((item, index) => {
            return (
              <div key={index} className="col-4">
                <Card
                  name="nombreComercial"
                  title={item?.name}
                  subTitle={<span>US${item.precio}</span>}
                  footer={
                    <>
                      <Button
                        label="Agregar"
                        icon="pi pi-check"
                        onClick={() => handleSubmit(item)}
                      />
                      <Button
                        onClick={() => eliminarProducto(item.name)}
                        label="Cancel"
                        severity="secondary"
                        icon="pi pi-times"
                        style={{ marginLeft: "0.5em" }}
                      />
                    </>
                  }
                  header={
                    <div
                      style={{
                        width: "100%",
                        height: "400px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        src={item.img}
                        alt={item.name}
                      />
                    </div>
                  }
                  className="w-100 mt-4"
                >
                  <p className="mt-0">
                    <span>{}</span>
                  </p>
                </Card>
              </div>
            );
          })}
        </div>
        <hr />

        <div className="card">
          <DataTable
            value={catalogoList}
            tableStyle={{ minWidth: "50rem" }}
            selectionMode="single"
            onRowClick={(event) => {
              console.log(event.data);
              window.location.href = `/catalogoproducto/${event.data.name}`;
            }}
          >
            <Column field={`name`} header="NombreComercial"></Column>
            <Column field={`precio`} header="PrecioVenta"></Column>
            <Column field={`img`} header="FotoProducto"></Column>
          </DataTable>
        </div>
      </div>

      <br></br>
    </div>
  );
}

export default CatalogoProducto;
