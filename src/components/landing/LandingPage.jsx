import React, { useRef, useEffect } from "react";
import "fullpage.js/dist/fullpage.css";
import fullpage from "fullpage.js";

export default function LandPage() {
  const fullpageRef = useRef(null);

  useEffect(() => {
    new fullpage(fullpageRef.current, {
      // Configuración de FullPage.js
      // Puedes personalizarlo según tus necesidades
    });
  }, []);

  return (
    <div ref={fullpageRef} className="fullpage-wrapper">
      <div className="section">
        <h1>Carrusel de servicios</h1>
      </div>
      <div className="section">
        <h1>Contactanos</h1>
      </div>
      <div className="section">
        <h1>Footer</h1>
      </div>
    </div>
  );
}
