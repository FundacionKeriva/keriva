import { useState } from 'react';
import { addService, deleteService, updateService } from '../api';
import { Button, Col, Row, Modal, Form } from 'react-bootstrap';


export default function AddServiceForm(props) {


  const [name, setName] = useState(Object.keys(props.currentService).length === 0 ? '' : props.currentService.name);
  const [price, setPrice] = useState(Object.keys(props.currentService).length === 0 ? '' : props.currentService.price);
  const [description, setDescription] = useState(Object.keys(props.currentService).length === 0 ? '' : props.currentService.description);
  const [imageFile, setImageFile] = useState(null);
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

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (file && allowedTypes.includes(file.type)) {
      setImageFile(file);
    } else {
      setImageFile(null);
      event.target.value = null; // limpia el valor de carga del archivo
      alert("El archivo seleccionado no es una imagen válida. Por favor, seleccione un archivo de imagen (JPEG, PNG o GIF).");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addService(name, price, description, imageFile).then(() => {
        props.loadServices();
        setId("");
        setName("");
        setDescription("");
        setPrice("");
        setFlag(true);
        setImageFile(null);
      });
    } catch (error) {
      console.error(error);
      alert("fail creating service");
    }

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
                    <Form.Label>Horario</Form.Label>
                    <Form.Control
                      placeholder="Ejemplo: Lunes a viernes 8 pm a 10 pm"
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
                  <Form.Group className="mb-3" >
                    <Row>
                      <Col>
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control type="file" onChange={handleImageChange} disabled={!flag} required={flag} />
                        <Form.Text className="text-danger">
                          {flag ? "" : "Este campo no es es editable."}
                        </Form.Text>
                      </Col>
                      <Col >
                        <img src={imageFile != null ? URL.createObjectURL(imageFile) : ""} alt="." style={{ maxHeight: "100px" }} />
                      </Col>
                    </Row>
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
