import { useState, useEffect } from 'react';
import { addService, deleteService,updateService } from '../api';
import { Button, Col, Row } from 'react-bootstrap';


export default function AddServiceForm(props) {


  const [name, setName] = useState(Object.keys(props.currentService).length === 0 ? '' : props.currentService.name);
  const [price, setPrice] = useState(Object.keys(props.currentService).length === 0 ? '' : props.currentService.price);
  const [description, setDescription] = useState(Object.keys(props.currentService).length === 0 ? '' : props.currentService.description);
  const [id, setId] = useState(Object.keys(props.currentService).length === 0 ? "" : props.currentService.id);
  const [flag, setFlag] = useState(Object.keys(props.currentService).length === 0);

  const handleSubmit = (event) => {
    event.preventDefault();
    addService(name, price, description).then(() => {
      setName('');
      setPrice('');
      setDescription('');
    });
  };

  const updateServiceClick = () => {
    console.log("editar");
    updateService(id, name,price, description).then(() => {
      setName('');
      setPrice('');
      setDescription('');
      setId('');
    });
  }

  const deleteServiceClick = () => {
    console.log("eliminar");
    deleteService(id).then(() => {
        setName('');
        setPrice('');
        setDescription('');
        setId('');
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
                <Button variant="primary" onClick={()=>{updateServiceClick()}} >Editar Servicio</Button>
                <Button variant="danger" disabled={flag} onClick={()=>{deleteServiceClick()}}>Eliminar</Button>
              </>
              )
          }
        </Row>
      </Col>
    </form>
  );
}
