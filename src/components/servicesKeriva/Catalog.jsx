
import React, { useState, useEffect } from "react";
import { Row, Col, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { getAvailableServices } from '../../firebase/api';
import "./catalog.css";

export default function Services() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        getAvailableServices().then((servicesData) => {
            setServices(servicesData);
        });
    }, []);

    return (
        <div style={{ textAlign: "center", justifyContent: "center" }}>
            <br></br>
            <br></br>
            <h1 >Conoce nuestros servicios</h1>
            <br></br>
            {
                services.length === 0 ?
                    (<h2>Lo sentimos, no hay servicios disponibles por el momento</h2>) :
                    (
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
                    )
            }
        </div>
    );
}
