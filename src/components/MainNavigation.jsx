import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigation from "./Navigation";
import ContactUs from "./ContactUs";
import LandingPage from "./LandingPage";
import Catalog from "./Catalog";
import AdminDashboard from "./AdminDashboard";


export default function MainNav() {

    return (
        <Container fluid style={{
            margin: 0,
            padding: 0
        }}>
                <Navigation></Navigation>
                <Container>
                    <Routes>
                        <Route exact path="/"  element={<LandingPage />} />
                        <Route path="/Catalog" element={<Catalog />} />
                        <Route path="/ContactUs" element={<ContactUs />} />
                        <Route path="/Admin" element={<AdminDashboard />} />
                    </Routes>
                </Container>
        </Container>
    );

}