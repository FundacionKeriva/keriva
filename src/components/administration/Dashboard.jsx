import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { getServices } from '../../api';
import "./adminDashboard.css";

export default function Dashboard() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        loadServices();
    }, []);

    const loadServices = () => {
        getServices().then((servicesData) => {
            setServices(servicesData);
        });
    }

    return (
        <Container>
            <Row>
                <Col><Row className="d-flex justify-content-between align-items-center">
                    <h1 className="col-md-6 m-0">Servicios</h1>
                </Row>
                    <br />
                    <div className="col-md-12">
                        <Button variant="success buttonCustom" onClick={() => { setCurrentService({}) }}>Nuevo Servicio</Button>
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>
                                        ID
                                    </th>
                                    <th>
                                        Nombre
                                    </th>
                                    <th>
                                        Precio
                                    </th>
                                    <th>
                                        Descripcion
                                    </th>
                                    <th>
                                        Imagen
                                    </th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {services.map((service, index) => (
                                    <tr key={`tabLS-${service.id}`}>
                                        <td>{index + 1}</td>
                                        <td>{service.name}</td>
                                        <td>{service.price}</td>
                                        <td>{service.description}</td>
                                        <td>
                                            <div className="mb-2">
                                                <Button variant="success" className="buttonCustom" onClick={() => { }}>Ver imagen</Button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="mb-2">
                                                <Button variant="warning" className="buttonCustom" onClick={() => { }}>Editar</Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </Col>
            </Row>
        </Container>
    );
}