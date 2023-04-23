import React from "react";
import AdminAddServices from "./AdminAddService";
import AdminListServices from "./AdminListServices";
import AdminUpdateService from "./AdminUpdateService";
import { Row, Col } from "react-bootstrap";

export default function Dashboard() {

    return (
        <Row>
            <Col>
                <AdminListServices></AdminListServices>
            </Col>
            <Col>
                <AdminAddServices></AdminAddServices>
            </Col>
            <Col>
                <AdminUpdateService></AdminUpdateService>
            </Col>
        </Row>
    );
}