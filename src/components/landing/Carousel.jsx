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
            maxHeight:"100%"
        }}>
            {
                services.map((service) => (
                    <Carousel.Item>
                        <Row gap={5} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            padding: '10px',
                            justifyContent: 'center'
                        }}>
                            <Col>
                            <Image src={service.imageUrl} rounded style={{ width: "400px", height: "400px" }} />
                            </Col>
                            <Col>
                            <div className="bg-warning border">First item</div>
                            <div className="bg-warning border">Second item</div>
                            <div className="bg-warning border">Third item</div>
                            </Col>
                        </Row>
                        <Stack direction="horizontal"   >
                            
                            
                        </Stack>
                    </Carousel.Item>
                ))
            }

        </Carousel>
    );
}
