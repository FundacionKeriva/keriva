import { useState, useEffect } from 'react';
import { addService } from '../api';
import { Col, Row } from 'react-bootstrap';


export default function AddServiceForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addService(name, price, description).then(() => {
      setName('');
      setPrice('');
      setDescription('');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Col>
      <Row>
        <label>
        Nombre:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      </Row>
      <Row>
        <label>
        Precio:
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      </Row>
      <Row>
        <label>
        Descripción:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      </Row>
      <Row>
        <button type="submit">Agregar servicio</button>
      </Row>
      </Col>
    </form>
  );
}
