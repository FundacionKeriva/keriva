import { useState, useEffect } from 'react';
import { getServices } from '../api';


export default function ServiceList() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Obtiene los servicios de la base de datos al cargar el componente
    getServices().then((servicesData) => {
      setServices(servicesData);
    });
  }, []);

  return (
    <div>
      <h1>Lista de Servicios</h1>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <h2>{service.name}</h2>
            <p>Precio: {service.price}</p>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}