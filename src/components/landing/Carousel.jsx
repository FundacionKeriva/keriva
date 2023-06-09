import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Carousel, Image, Row, Col, Button } from 'react-bootstrap';
import { getAvailableServices } from '../../firebase/api';
import "./carousel.css";

export default function CarouselServices() {
    const navigate = useNavigate();
    const [services, setServices] = useState([]);
    const [buttonHover, setButtonHover] = useState(false);

    useEffect(() => {
        // Obtiene los servicios de la base de datos al cargar el componente
        getAvailableServices().then((servicesData) => {
            const firstThreeServices = servicesData.slice(0, 3);
            setServices(firstThreeServices);
        });
    }, []);

    const navigateToCatalog = () => {
        navigate('/Catalog');
    };

    return (
        <Carousel style={{
            maxWidth: '100%',
            maxHeight: "100%",
            justifyContent: "center",
            alignItems: "center"
        }}>
            {
                services.map((service, index) => (
                    <Carousel.Item key={`ca-${index}`}>
                        <Row gap={5} style={{
                            alignItems: 'center',
                            textAlign: "center",
                            justifyContent: 'center',
                            padding: '50px'
                        }}>
                            <Col>
                                <div className="custom-card">
                                    <Image src={service.imageUrl} alt={service.name} title={service.name} rounded style={{ width: "370px", height: "370px",maxWidth:"370px" }} />
                                </div>
                            </Col>
                            <Col>
                                <h2>{service.name}</h2>
                                <h4>{service.description}</h4>
                            </Col>
                        </Row>
                    </Carousel.Item>
                ))
            }
            <Carousel.Item >
                <Row gap={5} style={{
                    alignItems: 'center',
                    textAlign: "center",
                    justifyContent: 'center',
                    padding: '50px',
                }}>
                    <Col>
                        <div className="custom-card">
                            <Image src="/keriva/Images/icon-keriva.jpg" alt="Keriva AC" title="Keriva" rounded style={{ width: "370px", height: "370px" }} />
                        </div>
                    </Col>
                    <Col>
                        <Button style={{
                            background: buttonHover ? "#ee66aa" : "#ee00aa",
                            borderColor: "transparent",
                            boxShadow: "0 3px 4px rgba(1, 1, 1, 1)"
                        }}
                            onClick={navigateToCatalog}
                            onMouseEnter={() => setButtonHover(true)}
                            onMouseLeave={() => setButtonHover(false)}
                        >
                            Ver más...
                        </Button>
                    </Col>
                </Row>
            </Carousel.Item>
        </Carousel>
    );
}
