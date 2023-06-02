
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Row, Col, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { getServices } from '../../api';
import "./catalog.css";

export default function Services() {
    const navigate = useNavigate();
    const [services, setServices] = useState([]);

    useEffect(() => {
        getServices().then((servicesData) => {
            setServices(servicesData);
        });
    }, []);

    return (
        <div style={{ textAlign: "center", alignItems: 'center' }}>
            <br></br>
            <br></br>
            <h1>Conoce nuestros servicios</h1>
            <br></br>
            <Row xs={1} md={1} lg={2} xl={3} className="g-4 justify-content-center cardC-container" >
                {
                    services.map((service, index) => (
                        <Col key={`cata-${index}`}>
                            <Card
                                bg="dark"
                                text="white"
                                className="custom-cardC"
                            >
                                <Card.Body style={{ backdropFilter: 'blur(20px)', maxHeight: "450px" }}>
                                    <div className="d-flex flex-column">
                                        <div className="mb-3">
                                            <img src={service.imageUrl} alt="Imagen" style={{ width: '100%', maxWidth: "100%", height: "250px", maxHeight: "300px" }} />
                                        </div>
                                        <div>
                                        <OverlayTrigger
                                                placement="top"
                                                overlay={<Tooltip>{service.name}</Tooltip>}
                                            >
                                                <h4 className="single-line">{service.name}</h4>
                                            </OverlayTrigger>
                                            <h6>{service.description}</h6>
                                            <p >Cuota de recuperación: ${service.price} </p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
}
