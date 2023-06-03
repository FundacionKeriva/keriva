import React, { useState, useEffect } from "react";
import { Row, Container, Button, OverlayTrigger, Tooltip, Modal } from "react-bootstrap";
import { MdEditSquare, MdDelete } from 'react-icons/md';
import { getServices, deleteService } from '../../api';
import "./adminDashboard.css";
import ModalAddService from "./AddService";

export default function Dashboard() {
    const [services, setServices] = useState([]);
    const [currentService, setCurrentService] = useState({});
    const [newServiceHover, setNewServiceHover] = useState(false);

    //modal Add service
    const [showModal, setShowModal] = useState(false);

    //modal delete service
    const [deleteModalShow, setDeleteModalShow] = useState(false);


    useEffect(() => {
        loadServices();
    }, []);

    const loadServices = () => {
        getServices().then((servicesData) => {
            setServices(servicesData);
        });
    }

    const deleteServiceConfirm = () => {
        deleteService(currentService.id).then(() => {
            setDeleteModalShow(false)
            loadServices();
        });
    };

    const handleNewServiceClick = (service) => {
        setShowModal(true);
    };

    const handleDeleteIconClick = (service) => {
        setCurrentService(service);
        setDeleteModalShow(true);
    };

    const styleNewService = {
        background: newServiceHover ? "#ee66aa" : "#ee00aa",
        borderColor: "transparent",
        boxShadow: "0 3px 4px rgba(1, 1, 1, 1)",
        width: "200px"
    }
    const styleWatchImage = {
        background: "#6c2760",
        borderColor: "transparent",
        boxShadow: "0 3px 4px rgba(1, 1, 1, 1)",
        width: "110px"
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
                        onClick={handleNewServiceClick}>Nuevo Servicio</Button>
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
                                    <td style={{ display: "flex", justifyContent: "center" }}>
                                        <div >
                                            <OverlayTrigger
                                                placement="top"
                                                overlay={<Tooltip className="tooltip-custom"><img src={service.imageUrl} alt="Imagen" style={{ width: '100%', height: '100%' }} /></Tooltip>}
                                            >
                                                <Button style={styleWatchImage}
                                                >Ver imagen</Button>
                                            </OverlayTrigger>
                                        </div>
                                    </td>
                                    <td>
                                        <div style={{ display: "flex", justifyContent: "center" }}>
                                            <span style={{ marginRight: "10px" }} >
                                                <MdEditSquare size={40} color="#6c2760"
                                                    style={{ boxShadow: "0 3px 4px rgba(1, 1, 1, .1)", cursor: "pointer" }}
                                                />
                                            </span>
                                            <span >
                                                <MdDelete size={40} color="#6c2760"
                                                    style={{ boxShadow: "0 3px 4px rgba(1, 1, 1, .1)", cursor: "pointer" }}
                                                    onClick={() => handleDeleteIconClick(service)} />
                                            </span>

                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Row>
            <ModalAddService
                show={showModal}
                onHide={() => setShowModal(false)}
                loadServices={loadServices}
            />
            {/* Modal de confirmación */}
            {
                currentService && (
                    <Modal show={deleteModalShow} onHide={() => setDeleteModalShow(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Confirmar eliminación</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            ¿Estás seguro de que deseas eliminar el servicio <strong>{currentService.name}?</strong> 
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setDeleteModalShow(false)}>Cancelar</Button>
                            <Button variant="danger" onClick={()=>deleteServiceConfirm()}>Eliminar</Button>
                        </Modal.Footer>
                    </Modal>
                )
            }
        </Container>
    );
}