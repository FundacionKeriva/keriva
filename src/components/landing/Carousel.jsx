import React, { useState, useEffect } from "react";
import { Carousel, Image, Row, Col, Button } from 'react-bootstrap';
import { getServices } from '../../api';
import "./carousel.css";

export default function CarouselServices() {
    const [services, setServices] = useState([]);
    const [buttonHover,setButtonHover]=useState(false);

    useEffect(() => {
        // Obtiene los servicios de la base de datos al cargar el componente
        getServices().then((servicesData) => {

            const firstThreeServices = servicesData.slice(0, 3);
            setServices(firstThreeServices);
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
                            textAlign: "center",
                            justifyContent: 'center',
                            padding: '50px',
                            backdropFilter: 'blur(10px)',
                            background: 'rgba(255, 255, 255, 0.1)',
                            perspective: "1000px"
                        }}>
                            <Col>
                                <div className="custom-card">
                                    <Image src={service.imageUrl} rounded style={{ width: "370px", height: "370px" }} />
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
                    backdropFilter: 'blur(10px)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    perspective: "1000px"
                }}>
                    <Col>
                        <div className="custom-card">
                            <Image src="/keriva/Images/icon-keriva.jpg" rounded style={{ width: "370px", height: "370px" }} />
                        </div>
                    </Col>
                    <Col>
                        <Button style={{
                            background: buttonHover?  "#974784":"#941276",
                            borderColor:"transparent"
                        }} onMouseEnter={()=>setButtonHover(true)}
                        onMouseLeave={()=>setButtonHover(false)}
                        >
                            Ver más...
                        </Button>
                    </Col>
                </Row>
            </Carousel.Item>
        </Carousel>
    );
}
