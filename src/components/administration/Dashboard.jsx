import React, { useState, useEffect } from "react";
import { Row, Container, Button, OverlayTrigger, Tooltip, Modal, Form } from "react-bootstrap";
import { MdEditSquare, MdDelete } from 'react-icons/md';
import { RiImageEditFill } from 'react-icons/ri';
import { getServices, setServiceAvailability, deleteService } from '../../api';
import "./adminDashboard.css";
import ModalAddService from "./AddService";
import ModalUpdateService from "./UpdateService";

export default function Dashboard() {
    const [services, setServices] = useState([]);
    const [currentService, setCurrentService] = useState({});
    const [newServiceHover, setNewServiceHover] = useState(false);

    //modal Add service
    const [showModalAdd, setShowModalAdd] = useState(false);

    //modal Update service
    const [showModalUpdate, setShowModalUpdate] = useState(false);

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

    const handleNewServiceClick = (service) => {
        setShowModalAdd(true);
    };

    const handleServiceAvailabilityChange = (id, checked) => {
        const updatedAvailability = checked ? true : false;
        setServiceAvailability(id, updatedAvailability);
        loadServices();
    };

    const handleUpdateIconClick = (service) => {
        setCurrentService(service);
        setShowModalUpdate(true);
    };

    const deleteServiceConfirm = () => {
        deleteService(currentService.id).then(() => {
            setDeleteModalShow(false)
            loadServices();
        });
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
                                    Disponible
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
                                    <td>
                                        <div>
                                            <Form.Check
                                                type="switch"
                                                id={`service-switch-${service.id}`}
                                                label={service.available ? 'Disponible' : 'No disponible'}
                                                checked={service.available}
                                                onChange={(e) => handleServiceAvailabilityChange(service.id, e.target.checked)}
                                            />
                                        </div>
                                    </td>
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
                                            <OverlayTrigger
                                                placement="top"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={<Tooltip id="button-tooltip" >Editar</Tooltip>}
                                            >
                                                <span style={{ marginRight: "10px" }} >
                                                    <MdEditSquare size={40} color="#6c2760"
                                                        style={{ boxShadow: "0 3px 4px rgba(1, 1, 1, .1)", cursor: "pointer" }}
                                                        onClick={() => handleUpdateIconClick(service)}
                                                    />
                                                </span>
                                            </OverlayTrigger>

                                            <OverlayTrigger
                                                placement="top"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={<Tooltip id="button-tooltip-delete">Eliminar</Tooltip>}
                                            >
                                                <span style={{ marginRight: "10px" }}>
                                                    <MdDelete size={40} color="#6c2760"
                                                        style={{ boxShadow: "0 3px 4px rgba(1, 1, 1, .1)", cursor: "pointer" }}
                                                        onClick={() => handleDeleteIconClick(service)} />
                                                </span>
                                            </OverlayTrigger>

                                            <OverlayTrigger
                                                placement="top"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={<Tooltip id="button-tooltip-image" >Cambiar imagen</Tooltip>}
                                            >
                                                <span >
                                                    <RiImageEditFill size={40} color="#6c2760"
                                                        style={{ boxShadow: "0 3px 4px rgba(1, 1, 1, .1)", cursor: "pointer" }}
                                                    />
                                                </span>
                                            </OverlayTrigger>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Row>

            <ModalAddService
                show={showModalAdd}
                onHide={() => setShowModalAdd(false)}
                loadServices={loadServices}

            />
            {
                currentService && (
                    <ModalUpdateService
                        show={showModalUpdate}
                        onHide={() => setShowModalUpdate(false)}
                        loadServices={loadServices}
                        service={currentService}
                    />
                )
            }

            {/* confirm delete*/}
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
                            <Button variant="danger" onClick={() => deleteServiceConfirm()}>Eliminar</Button>
                        </Modal.Footer>
                    </Modal>
                )
            }
        </Container>
    );
}