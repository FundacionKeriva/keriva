import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { updateService } from '../../api';

const EditModal = ({ show, onHide, loadServices, service }) => {
    const [buttonHover, setButtonHover] = useState(false);

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (service) {
            setName(service.name || "");
            setPrice(service.price || "");
            setDescription(service.description || "");
          }
    }, [service]);

    const styleButton = {
        background: buttonHover ? "#ee66aa" : "#ee00aa",
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await updateService(service.id, name, price, description).then(() => {
                //close modal and load services
                onHide();
                loadServices();
            });
        } catch (error) {
            alert("Una disculpa, ocurrio un error. Reintenta de nuevo por favor");
        }
    };
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Editar servicio</Modal.Title>
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

                            <Button style={styleButton}
                                onMouseEnter={() => setButtonHover(true)}
                                onMouseLeave={() => setButtonHover(false)}
                                type="submit">Guardar cambios</Button>
                        </Form>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
};

export default EditModal;