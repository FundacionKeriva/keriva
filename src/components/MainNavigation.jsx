import React from 'react';
import { Route, Routes } from "react-router-dom";

import Navigation from "./Navigation";
import ContactUs from "./contact/ContactUs";
import LandingPage from "./landing/LandingPage";
import Catalog from "./servicesKeriva/Catalog";
import AdminDashboard from "./administration/Dashboard";

export default function MainNav() {

    return (
        <>
            <Navigation></Navigation>
            <br></br>
            <br></br>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/Catalog" element={<Catalog />} />
                <Route path="/ContactUs" element={<ContactUs />} />
                <Route path="/Administration" element={<AdminDashboard />} />
            </Routes>
        </>
    );

}