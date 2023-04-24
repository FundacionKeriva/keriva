import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { getServices } from '../api';
import "../components-css/adminDashboard.css";

import AdminAddService from "./AdminAddService";

export default function Dashboard() {
    const [services, setServices] = useState([]);
    const [currentService, setCurrentService] = useState({});

    useEffect(() => {
        // Obtiene los servicios de la base de datos al cargar el componente
        getServices().then((servicesData) => {
            setServices(servicesData);
        });
    }, []);

    const EditService = (service) => {
        setCurrentService(service);
    }

    const loadServices = () => {
        getServices().then((servicesData) => {
            setServices(servicesData);
        });
    }

    function FormEditService() {
        return (
            <AdminAddService currentService={currentService} setCurrentService={setCurrentService} loadServices={loadServices} ></AdminAddService>
        );
    }

    return (
        <Container>
            <br />
            <Row>
                <Col><Row className="d-flex justify-content-between align-items-center">
                    <h1 className="col-md-6 m-0">Servicios</h1>
                </Row>
                    <br />
                    <div className="col-md-12">
                        {
                            Object.keys(currentService).length === 0 ? null : <Button variant="success buttonCustom" onClick={() => { setCurrentService({}) }}>Nuevo Servicio</Button>
                        }
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
                                                <Button variant="warning" className="buttonCustom" onClick={() => { EditService(service) }}>Editar</Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </Col>
                <Col>
                    <FormEditService></FormEditService>
                </Col>
            </Row>
        </Container>
    );
}