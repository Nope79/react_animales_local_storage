import React from 'react';

function AnimalItem({ animal, index, manejarEditarAnimal, manejarEliminarAnimal }) {
  return (
    <li>
      <p>{`Nombre: ${animal.nombre}, Edad: ${animal.edad}, Raza: ${animal.raza}`}</p>
      {animal.foto && <img src={animal.foto} alt={animal.nombre} width="100" />}
      <button onClick={() => manejarEditarAnimal(index)}>Editar</button>
      <button onClick={() => manejarEliminarAnimal(index)}>Eliminar</button>
    </li>
  );
}

export default AnimalItem;