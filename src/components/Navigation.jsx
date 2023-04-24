import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Navbar, Container, Col, Row, Nav, Offcanvas, CloseButton, Stack } from 'react-bootstrap';


export default function UserNavigation() {

    const [offcanvasShow, setOffcanvasShow] = useState(true);
    return (
        <Navbar bg="light" expand="md" collapseOnSelect>
            <Container fluid>
                <Navbar.Brand as={Link} to="/">Fundación Keriva</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" onClick={() => { setOffcanvasShow(true) }} />
                <Navbar.Offcanvas id="basic-navbar-nav" aria-labelledby="offcanvasNavbarLabel-expand-md" placement="end" show={offcanvasShow}>
                    <Offcanvas.Header >
                        <Offcanvas.Title style={{"width":"100%"}}>
                            <Row>
                                <Col className="col-10">
                                    Fundación Keriva
                                </Col >
                                <Col className="col-2" >
                                    <CloseButton onClick={() => { setOffcanvasShow(false) }} />

                                </Col>
                            </Row>

                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="me-auto" >
                            <Nav.Link as={Link} to="/" onClick={() => { setOffcanvasShow(false) }}>Inicio</Nav.Link>
                            <Nav.Link as={Link} to="/Catalog" onClick={() => { setOffcanvasShow(false) }}>Servicios</Nav.Link>
                            <Nav.Link as={Link} to="/ContactUs">Contactanos</Nav.Link>
                            <Nav.Link as={Link} to="/Admin">Administracion</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}