import React, { useRef, useEffect } from "react";
import "fullpage.js/dist/fullpage.css";
import fullpage from "fullpage.js";
import "./landing.css";

import Carousel from "./Carousel";
import SocialNetwork from "./SocialNetwork";
import Footer from "./Footer";

export default function LandPage() {
  const fullpageRef = useRef(null);
  let fullpageInstance = null;
  const gmailUrl = "https://mail.google.com/mail/?view=cm&to=luisgutierrez5-1@dgb.email&su=Hola%20Luis%20me,%20intersan%20tus%20servicios...";
   

  useEffect(() => {
    fullpageInstance = new fullpage(fullpageRef.current, {
      // Configuración de FullPage.js
      // Puedes personalizarlo según tus necesidades
    });

    return () => {
      // Destruir la instancia de FullPage.js al desmontar el componente
      fullpageInstance.destroy('all');
    };
  }, []);

  return (
    <div ref={fullpageRef} className="fullpage-wrapper">
      <div className="section section-carrusel">
        <Carousel />
      </div>
      <div className="section section-contacto">
        <SocialNetwork />
      </div>
      <div className="section section-footer">
        <Footer />
      </div>
      <div className="section section-devs">
        <p style={{ fontWeight: "500" }}>Correo de los desarrolladores: <a
          href={gmailUrl}
          target="_blank"
          rel="noopener noreferrer" style={{ color: "#ee00aa" }}>luisgutierrez5-1@dgb.email</a></p>
      </div>
    </div>
  );
}
