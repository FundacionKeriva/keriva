import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { addService } from '../../firebase/api';

const AddModal = ({ show, onHide, loadServices }) => {
    const [newServiceHover, setNewServiceHover] = useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [imageFile, setImageFile] = useState(null);

    const styleNewService = {
        background: newServiceHover ? "#ee66aa" : "#ee00aa",
        borderColor: "transparent",
        boxShadow: "0 3px 4px rgba(1, 1, 1, 1)",
        width: "200px"
    }

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
            event.target.value = null;
            alert("El archivo seleccionado no es una imagen válida. Por favor, seleccione un archivo de imagen (JPEG, PNG o GIF).");
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await addService(name, price, description, imageFile, true).then(() => {
                //close modal and load services
                onHide();
                loadServices();
                setName("");
                setDescription("");
                setPrice("");
                setImageFile(null);
            });
        } catch (error) {
            alert("Una disculpa, ocurrio un error. Reintenta de nuevo por favor");
        }
    };
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Nuevo servicio</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <Form onSubmit={handleSubmit}>
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
                                    placeholder="Ejemplo: Lunes a Viernes. 8 pm a 10 pm"
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
                                        <Form.Label>Imagen (JPG, PNG, GIF)</Form.Label>
                                        <Form.Control type="file" onChange={handleImageChange} required />
                                        <Form.Text className="text-secondary">Verifica que la imagen se ve a la derecha.</Form.Text>
                                    </Col>
                                    <Col >
                                        <img src={imageFile != null ? URL.createObjectURL(imageFile) : ""} alt="." style={{ maxHeight: "100px" }} />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Button style={styleNewService}
                                onMouseEnter={() => setNewServiceHover(true)}
                                onMouseLeave={() => setNewServiceHover(false)}
                                type="submit">Generar servicio</Button>
                        </Form>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
};

export default AddModal;
