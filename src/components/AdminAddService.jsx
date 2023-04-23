import { useState, useEffect } from 'react';
import { addService } from '../api';
import { Button, Col, Row } from 'react-bootstrap';


export default function AddServiceForm(props) {


  const [name, setName] = useState(Object.keys(props.currentService).length === 0 ? '' : props.currentService.name);
  const [price, setPrice] = useState(Object.keys(props.currentService).length === 0 ? '' : props.currentService.price);
  const [description, setDescription] = useState(Object.keys(props.currentService).length === 0 ? '' : props.currentService.description);
  const [flag, setFlag] = useState(Object.keys(props.currentService).length === 0);

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
          {
            flag ?
              (<Button type="submit" variant="success" disabled={!flag}>Agregar Servicio</Button>)
              :
              (<>
                <Button variant="primary" >Editar Servicio</Button>
                <Button variant="danger" disabled={flag} >Eliminar</Button>
              </>
              )
          }
        </Row>
      </Col>
    </form>
  );
}
