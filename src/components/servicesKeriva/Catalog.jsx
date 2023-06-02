
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Image, Row, Col, Card } from 'react-bootstrap';
import { getServices } from '../../api';

export default function Services() {
    const navigate = useNavigate();
    const [services, setServices] = useState([]);

    useEffect(() => {
        getServices().then((servicesData) => {
            setServices(servicesData);
        });
    }, []);

    return (
        <div className="justify-content-center" style={{ textAlign: "center", alignItems: 'center' }}>
            <br></br>
            <br></br>
            <h1>Conoce nuestros servicios</h1>
            <br></br>
            <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4 justify-content-center" style={{ padding: "20px", alignItems: 'center' }}>
                {
                    services.map((service, index) => (
                        <Col key={`cata-${index}`}>
                            <Card
                                bg="dark"
                                text="white"
                                style={{
                                    height: "370px",
                                    maxWidth: "300px",
                                    backgroundImage: 'url("/keriva/Images/backgrounds/purple-waves.gif")',
                                    backgroundSize: 'cover',
                                    backdropFilter: 'blur(8px)',
                                    borderRadius: '10px',
                                }}
                            >
                                <Card.Body style={{ backdropFilter: 'blur(8px)' }}>
                                    <div className="d-flex flex-column">
                                        <div className="mb-3">
                                            <img src={service.imageUrl} alt="Imagen" style={{ width: '100%', maxWidth: "100%", height: "250px", maxHeight: "300px" }} />
                                        </div>
                                        <div>
                                            <h4>Título de la Card</h4>
                                            <p>Texto de la Card</p>
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
