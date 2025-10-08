import React from 'react';
import '../assets/styles/pages/DireccionGeneral.css';

function DireccionGeneral() {
  return (
    <div className="direccion-general-container">
      <h1 className="direccion-general-title">Dirección General</h1>
      <hr className="direccion-general-divider" />

      <div className="direccion-general-section">
        <h2 className="direccion-general-subtitle">Departamento de Comunicación Social</h2>
        <p className="direccion-general-desc">
          Se encarga de la difusión de información oficial, coordinación de mensajes institucionales y relación con medios de comunicación. 
          Su objetivo es garantizar la transparencia, mantener informada a la ciudadanía y proyectar la imagen institucional de la SICT.
        </p>
      </div>

      <div className="direccion-general-section">
        <h2 className="direccion-general-subtitle">Subdirección de Comunicaciones</h2>
        <p className="direccion-general-desc">
          Es la instancia encargada de coordinar, supervisar y desarrollar las acciones relacionadas con la infraestructura y los servicios de telecomunicaciones en el ámbito federal. 
          Atiende proyectos de instalación, modernización y mantenimiento de sistemas de comunicación (telecomunicaciones, radiocomunicación y tecnologías asociadas), asegurando que cumplan con los lineamientos técnicos y normativos. 
          Además, da seguimiento a programas de conectividad para garantizar el acceso equitativo y eficiente de la población a los servicios de comunicación.
        </p>
      </div>
    </div>
  );
}

export default DireccionGeneral;