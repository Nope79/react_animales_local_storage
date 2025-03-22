import React from 'react';
import AnimalItem from './AnimalItem';

function ListaAnimales({ animales, manejarEditarAnimal, manejarEliminarAnimal }) {
  return (
    <ul>
      {animales.length > 0 ? (
        animales.map((animal, index) => (
          <AnimalItem
            key={animal.id}
            animal={animal}
            index={index}
            manejarEditarAnimal={manejarEditarAnimal}
            manejarEliminarAnimal={manejarEliminarAnimal}
          />
        ))
      ) : (
        <p>No hay animales guardados</p>
      )}
    </ul>
  );
}

export default ListaAnimales;