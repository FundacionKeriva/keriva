import React, { useState, useEffect } from "react";
import { Row, Container, Button } from "react-bootstrap";
import { getServices } from '../../api';
import "./adminDashboard.css";

export default function Dashboard() {
    const [services, setServices] = useState([]);
    const [newServiceHover, setNewServiceHover] = useState(false);

    useEffect(() => {
        loadServices();
    }, []);

    const loadServices = () => {
        getServices().then((servicesData) => {
            setServices(servicesData);
        });
    }

    const styleNewService = {
        background: newServiceHover ? "#ee66aa" : "#ee00aa",
        borderColor: "transparent",
        boxShadow: "0 3px 4px rgba(1, 1, 1, 1)",
        width: "200px"
    }

    return (
        <Container>
            <Row >
                <div style={{ textAlign: "center" }}>
                    <br />
                    <h1>Servicios</h1>
                </div>
                <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Button className="new-service"
                        style={styleNewService}
                        onMouseEnter={() => setNewServiceHover(true)}
                        onMouseLeave={() => setNewServiceHover(false)}
                        onClick={() => { }}>Nuevo Servicio</Button>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className="col-md-12">
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
            </Row>
        </Container>
    );
}