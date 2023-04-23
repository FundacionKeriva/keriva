import { useState, useEffect } from 'react';
import { getServices } from '../api';
import { addService } from '../api';

export default function CRUD(){
    return (
        <>
        <ServiceList></ServiceList>
        <AddServiceForm></AddServiceForm>
        </>
    );
}

function ServiceList() {
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



function AddServiceForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addService(name, price, description).then(() => {
      setName('');
      setPrice('');
      setDescription('');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Precio:
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <label>
        Descripción:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <button type="submit">Agregar servicio</button>
    </form>
  );
}
