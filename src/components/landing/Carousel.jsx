import React, { useState, useEffect } from "react";
import { Carousel, Stack, Image, Row, Col } from 'react-bootstrap';
import { getServices } from '../../api';

export default function CarouselServices() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // Obtiene los servicios de la base de datos al cargar el componente
        getServices().then((servicesData) => {
            setServices(servicesData);
        });
    }, []);


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
                            padding: '50px',
                            textAlign: "center",
                            justifyContent: 'center',
                            backdropFilter: 'blur(10px)',
                            background: 'rgba(255, 255, 255, 0.1)'
                        }}>
                            <Col>
                                <Image src={service.imageUrl} rounded style={{ width: "400px", height: "400px" }} />
                            </Col>
                            <Col>
                                <h2>{service.name}</h2>
                                <h4>{service.description}</h4>
                            </Col>
                        </Row>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    );
}
