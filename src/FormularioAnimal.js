import React from 'react';
import { Button, FormGroup, Input, Row, Col} from 'reactstrap';

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
      <Row>
        <Col md={8}>
          <Row>
            <Col md={3}>
              <FormGroup>
                <Input
                  type="text"
                  name="nombre"
                  value={animal.nombre}
                  onChange={manejarCambio}
                  placeholder="Nombre"
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input
                  type="text"
                  name="raza"
                  value={animal.raza}
                  onChange={manejarCambio}
                  placeholder="Raza"
                />
              </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Input
                    type="text"
                    name="edad"
                    value={animal.edad}
                    onChange={manejarCambio}
                    placeholder="Edad"
                  />
                </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Input
                type="text"
                name="foto"
                value={animal.foto}
                onChange={manejarCambio}
                placeholder="Link para la imagen"
              />
            </Col>
          </Row>
        </Col>
        <Col md={1}>
          {editandoIndex !== null ? (
            <Button color="success" onClick={() => manejarGuardarEdicion(animal)}>Guardar Edición</Button>
          ) : (
            <Button color="success" onClick={() => manejarAgregarAnimal(animal)}>Agregar Animal</Button>
          )}
        </Col>
      </Row>
      
    </div>
  );
}

export default FormularioAnimal;