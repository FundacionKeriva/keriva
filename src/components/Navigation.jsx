import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Col, Row, Nav, Offcanvas, CloseButton } from 'react-bootstrap';
import { AppContext } from '../Context/AppContext';
import "../components-css/navigation.css";

export default function UserNavigation() {

    const [offcanvasShow, setOffcanvasShow] = useState(false);
    const { isLogged } = useContext(AppContext);

    return (
        <Navbar className='navbar' expand="md" collapseOnSelect fixed="top" variant="dark">
            <Container fluid >
                <Navbar.Brand as={Link} to="/" title='Inicio' style={{ color: "white", fontSize: 24 + "px" }}>Fundación Keriva</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" onClick={() => { setOffcanvasShow(true) }} />
                <Navbar.Offcanvas id="basic-navbar-nav" aria-labelledby="offcanvasNavbarLabel-expand-md" placement="end" show={offcanvasShow}>
                    <Offcanvas.Header className='nav-header' >
                        <Offcanvas.Title style={{ "width": "100%" }}>
                            <Row>
                                <Col className="col-10">
                                    Fundación Keriva
                                </Col >
                                <Col className="col-2" >
                                    <CloseButton onClick={() => { setOffcanvasShow(false) }} variant='white' />
                                </Col>
                            </Row>

                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body >
                        <Nav className="ms-auto" >
                            <Nav.Link as={Link} to="/" title='Inicio' onClick={() => { setOffcanvasShow(false) }} style={{ color: offcanvasShow ? "black" : "white", fontSize: 20 + "px" }}>Inicio</Nav.Link>
                            <Nav.Link as={Link} to="/Catalog" title='Servicios' onClick={() => { setOffcanvasShow(false) }} style={{ color: offcanvasShow ? "black" : "white", fontSize: 20 + "px" }}>Servicios</Nav.Link>
                            <Nav.Link as={Link} to="/ContactUs" title='Contactanos' onClick={() => { setOffcanvasShow(false) }} style={{ color: offcanvasShow ? "black" : "white", fontSize: 20 + "px" }}>Contactanos</Nav.Link>
                            {
                                isLogged ? <Nav.Link as={Link} to="/Administration" title='Administración' onClick={() => { setOffcanvasShow(false) }} style={{ color: offcanvasShow ? "black" : "white", fontSize: 20 + "px" }}>Administración</Nav.Link> : null
                            }
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}