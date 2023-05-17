import React from 'react';
import {  Route, Routes } from "react-router-dom";

import Navigation from "./Navigation";
import ContactUs from "./ContactUs";
import LandingPage from "./landing/LandingPage";
import Catalog from "./Catalog";
import AdminDashboard from "./AdminDashboard";


export default function MainNav() {

    return (
        <>
                <Navigation></Navigation>
                <br></br>
                <br></br>
                    <Routes>
                        <Route exact path="/"  element={<LandingPage />} />
                        <Route path="/Catalog" element={<Catalog />} />
                        <Route path="/ContactUs" element={<ContactUs />} />
                        <Route path="/Admin" element={<AdminDashboard />} />
                    </Routes>
                    </>
    );

}