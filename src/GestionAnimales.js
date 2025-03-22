import React, { useState, useEffect } from 'react';
import FormularioAnimal from './FormularioAnimal';
import ListaAnimales from './ListaAnimales';

function GestionAnimales() {
  const [animales, setAnimales] = useState([]);
  const [nuevoAnimal, setNuevoAnimal] = useState({
    id: '',
    nombre: '',
    edad: '',
    raza: '',
    foto: ''
  });
  const [editandoIndex, setEditandoIndex] = useState(null);

  useEffect(() => {
    try {
      const animalesGuardados = JSON.parse(localStorage.getItem('animales'));
      setAnimales(Array.isArray(animalesGuardados) ? animalesGuardados : []);
    } catch (error) {
      console.error('Error al cargar datos de localStorage:', error);
      setAnimales([]);
    }
  }, []);

  const guardarEnLocalStorage = (animalesActualizados) => {
    localStorage.setItem('animales', JSON.stringify(animalesActualizados));
    setAnimales(animalesActualizados);
  };

  const manejarAgregarAnimal = (animal) => {
    if (!animal.nombre || !animal.edad || !animal.raza) return;

    const nuevoAnimalConId = { ...animal, id: Date.now().toString() };
    const animalesActualizados = [...animales, nuevoAnimalConId];
    guardarEnLocalStorage(animalesActualizados);
  };

  const manejarEditarAnimal = (index) => {
    setNuevoAnimal(animales[index]);
    setEditandoIndex(index);
  };

  const manejarGuardarEdicion = (animal) => {
    if (!animal.nombre || !animal.edad || !animal.raza) return;
    const animalesActualizados = animales.map((a, index) =>
      index === editandoIndex ? animal : a
    );
    guardarEnLocalStorage(animalesActualizados);
    setEditandoIndex(null);
  };
  const manejarEliminarAnimal = (index) => {
    const animalesActualizados = animales.filter((_, i) => i !== index);
    guardarEnLocalStorage(animalesActualizados);
  };

  return (
    <div>
      <h2>¡¡¡Añade un nuevo animal a la enciclopedia!!!</h2>
      <p></p>
      <p></p>
      <FormularioAnimal
        animal={nuevoAnimal}
        setAnimal={setNuevoAnimal}
        editandoIndex={editandoIndex}
        manejarAgregarAnimal={manejarAgregarAnimal}
        manejarGuardarEdicion={manejarGuardarEdicion}
      />
      <p></p>
      <p></p>
      <p></p>
      <ListaAnimales
        animales={animales}
        manejarEditarAnimal={manejarEditarAnimal}
        manejarEliminarAnimal={manejarEliminarAnimal}
      />
    </div>
  );
}

export default GestionAnimales;