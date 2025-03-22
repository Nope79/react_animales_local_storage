import React from 'react';
import { Button, Row, Col} from 'reactstrap';

function AnimalItem({ animal, index, manejarEditarAnimal, manejarEliminarAnimal }) {
  return (
    <li>
      <div className='caja'>
        <h1>{`Nombre: ${animal.nombre}`}</h1>
      </div>
      <br></br>
      <br></br>
      <Row>
        <Col md={7}>
          {animal.foto && <img className='im' src={animal.foto} alt={animal.nombre} width="40%" />}
        </Col>
        <Col md = {3} className='caja2'>
          <Row>
            <Button color="primary" outline ="true" onClick={() => manejarEditarAnimal(index)}>Editar</Button>
          </Row>
          <Row>
            <p></p>
          </Row>
          <Row>
          <Button color="danger" outline ="true" onClick={() => manejarEliminarAnimal(index)}>Eliminar</Button>
          </Row>
          <Row>
            <p></p>
            <p></p>
            <p></p>
          </Row>
          <Row>
            <h4>
              {`Edad: ${animal.edad}`}
            </h4>
          </Row>
          <Row>
            <p></p>
          </Row>
          <Row>
            <h4>
              {`Raza: ${animal.raza}`}
            </h4>
          </Row>
        </Col>
      </Row>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </li>
  );
}

export default AnimalItem;