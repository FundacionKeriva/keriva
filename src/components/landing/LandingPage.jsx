import React, { useRef, useEffect } from "react";
import "fullpage.js/dist/fullpage.css";
import fullpage from "fullpage.js";
import "./landing.css"; 

import Carousel from "./Carousel";

export default function LandPage() {
  const fullpageRef = useRef(null);
  let fullpageInstance = null;

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
        <Carousel/>
      </div>
      <div className="section section-contacto">
        <h1>Contactanos</h1>
      </div>
      <div className="section section-footer">
        <h1>Footer</h1>
      </div>
    </div>
  );
}
