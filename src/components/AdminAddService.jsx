import { useState } from 'react';
import { addService, deleteService, updateService } from '../api';
import { Button, Col, Row, Modal, Form } from 'react-bootstrap';


export default function AddServiceForm(props) {


  const [name, setName] = useState(Object.keys(props.currentService).length === 0 ? '' : props.currentService.name);
  const [price, setPrice] = useState(Object.keys(props.currentService).length === 0 ? '' : props.currentService.price);
  const [description, setDescription] = useState(Object.keys(props.currentService).length === 0 ? '' : props.currentService.description);
  const [id, setId] = useState(Object.keys(props.currentService).length === 0 ? "" : props.currentService.id);
  const [flag, setFlag] = useState(Object.keys(props.currentService).length === 0);

  const handleNameChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    event.preventDefault();
    setPrice(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    event.preventDefault();
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addService(name, price, description).then(() => {
      props.loadServices();
      setId("");
      setName("");
      setDescription("");
      setPrice("");
      setFlag(true);
    });
  };

  const updateServiceClick = (event) => {
    event.preventDefault();
    updateService(id, name, price, description).then(() => {
      props.loadServices();
      setId("");
      setName("");
      setDescription("");
      setPrice("");
      setFlag(true);
      props.setCurrentService("");
    });
  }

  const deleteServiceClick = () => {
    deleteService(id).then(() => {
      props.loadServices();
      setId("");
      setName("");
      setDescription("");
      setPrice("");
      setFlag(true);
      props.setCurrentService("");
    });
  };

  return (
    <Col>
      <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog>
          <Modal.Body>
            <Row>
              <Col>
                <Form onSubmit={flag ? handleSubmit : updateServiceClick}>
                  <br />
                  <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      placeholder="Ejemplo: Taller de guitarra"
                      required
                      type="text"
                      autoFocus
                      name="name"
                      value={name}
                      onChange={handleNameChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      placeholder="Ejemplo: Lunes a viernes"
                      required
                      type="text"
                      autoFocus
                      name="description"
                      value={description}
                      onChange={handleDescriptionChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Cuota de recuperación</Form.Label>
                    <Form.Control
                      placeholder="Ejemplo: 80"
                      required
                      type="number"
                      autoFocus
                      name="price"
                      value={price}
                      onChange={handlePriceChange}
                      min="1"
                    />
                  </Form.Group>

                  {
                    flag ?
                      (<Button variant="success" type="submit" disabled={!flag} >Generar servicio</Button>)
                      :
                      (
                        <>
                          <Button variant="primary" type="submit">Guardar cambios</Button>
                          <Button variant="danger" disabled={flag} onClick={() => { deleteServiceClick() }}>Eliminar servicio</Button>
                        </>
                      )
                  }
                </Form>
              </Col>
            </Row>
          </Modal.Body>

        </Modal.Dialog>
      </div>
    </Col>
  );
}
