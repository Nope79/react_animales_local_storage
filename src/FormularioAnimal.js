import React from 'react';

function FormularioAnimal({
  animal,
  setAnimal,
  editandoIndex,
  manejarAgregarAnimal,
  manejarGuardarEdicion
}) {
  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setAnimal((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <input
        type="text"
        name="nombre"
        value={animal.nombre}
        onChange={manejarCambio}
        placeholder="Nombre"
      />
      <input
        type="number"
        name="edad"
        value={animal.edad}
        onChange={manejarCambio}
        placeholder="Edad"
      />
      <input
        type="text"
        name="raza"
        value={animal.raza}
        onChange={manejarCambio}
        placeholder="Raza"
      />
      <input
        type="text"
        name="foto"
        value={animal.foto}
        onChange={manejarCambio}
        placeholder="link Foto"
      />

      {editandoIndex !== null ? (
        <button onClick={() => manejarGuardarEdicion(animal)}>Guardar Edición</button>
      ) : (
        <button onClick={() => manejarAgregarAnimal(animal)}>Agregar Animal</button>
      )}
    </div>
  );
}

export default FormularioAnimal;