
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
        <div style={{ textAlign: "center", alignItems: 'center' }}>
            <br></br>
            <br></br>
            <h1>Conoce nuestros servicios</h1>
            <br></br>
            <Row xs={1} md={2} lg={3} xl={4} className="g-4 justify-content-center" style={{ padding: "20px", alignItems: 'center' }}>
                {
                    services.map((service, index) => (
                        <Col key={`cata-${index}`}>
                            <Card
                                bg="dark"
                                text="white"
                                style={{
                                    height: "370px",
                                    width:"320px",
                                    backgroundImage: 'url("https://papers.co/wallpaper/papers.co-sb85-purple-sunshine-blur-35-3840x2160-4k-wallpaper.jpg")',
                                    backgroundSize: 'cover',
                                    borderRadius: '5px',
                                }}
                            >
                                <Card.Body style={{ backdropFilter: 'blur(20px)', maxHeight: "100%" }}>
                                    <div className="d-flex flex-column">
                                        <div className="mb-3">
                                            <img src={service.imageUrl} alt="Imagen" style={{ width: '100%', maxWidth: "100%", height: "250px", maxHeight: "300px" }} />
                                        </div>
                                        <div>
                                            <h4>{service.name}</h4>
                                            <p>{service.description}</p>
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
