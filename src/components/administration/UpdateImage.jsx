import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { updateService } from '../../api';

const ImageModal = ({ show, onHide, loadServices, service }) => {
    const [buttonHover, setButtonHover] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    const [name, setName] = useState("");

    const [newImageUrl, setNewImageUrl] = useState(null);

    useEffect(() => {
        if (service) {
            setName(service.name || "");
            setImageUrl(service.imageUrl || "");
        }
    }, [service]);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
        if (file && allowedTypes.includes(file.type)) {
            setNewImageUrl(file);
        } else {
            setNewImageUrl(null);
            event.target.value = null;
            alert("El archivo seleccionado no es una imagen válida. Por favor, seleccione un archivo de imagen (JPEG, PNG o GIF).");
        }
    };

    const handleSubmit = async (event) => {
        console.log("actualizar imagen");
        /*
        event.preventDefault();
        try {
            await updateServiceImage(service.id, imageUrl).then(() => {
                //close modal and load services
                onHide();
                loadServices();
            });
        } catch (error) {
            alert("Una disculpa, ocurrio un error. Reintenta de nuevo por favor");
        }
        */
    };

    const styleButton = {
        background: buttonHover ? "#ee66aa" : "#ee00aa",
        borderColor: "transparent",
        boxShadow: "0 3px 4px rgba(1, 1, 1, 1)",
        width: "200px"
    }
    return (
        <Modal show={show} onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title>Cambiar imagen del servicio {name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className="flex-wrap">
                    <Col sm={12} md={12} lg={4}>
                        <h4>Imagen actual</h4>
                        <img src={imageUrl} alt="." style={{ maxHeight: "150px" }} />
                    </Col>
                    <Col sm={12} md={12} lg={8}>
                        <h4>Nueva imagen (JPG, PNG, GIF)</h4>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group md={4} >
                                <Row>
                                    <Col>

                                        <Form.Control type="file" onChange={handleImageChange} required />
                                        <Form.Text className="text-secondary">Verifica que la imagen se vea a la derecha.</Form.Text>
                                    </Col>
                                    <Col >
                                        <img src={newImageUrl != null ? URL.createObjectURL(newImageUrl) : ""} alt="." style={{ maxHeight: "150px" }} />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <br></br>
                            <Button style={styleButton}
                                onMouseEnter={() => setButtonHover(true)}
                                onMouseLeave={() => setButtonHover(false)}
                                type="submit">Guardar cambios</Button>
                        </Form>
                    </Col>
                </Row>
            </Modal.Body >
        </Modal >
    );
};

export default ImageModal;