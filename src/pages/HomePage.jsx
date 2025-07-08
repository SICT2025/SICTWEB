import React from 'react';
import '../assets/styles/pages/HomePage.css';

import centro from '../assets/imagenes/centro.PNG';

function HomePage() {
  return (
    <div className="home-bg">
      <div className="home-main-card">
        <div className="home-header-row">
          <div className="home-header-title">
          </div>
        </div>
        <h1 className="home-title">
          Módulo de Información de la Secretaría<br />
          de Infraestructura, Comunicaciones y Transportes
        </h1>
        <hr className="home-divider" />
        <p className="home-description">
          La SICT es la encargada de diseñar, planear, ejecutar y coordinar las políticas públicas en materia de medios de comunicación.
          Esto incluye la elaboración de programas para el desarrollo de bienes, servicios y pasajeros. No obstante, en el caso de las vías marítimas, ríos y lagos, deberá coordinarse con la Secretaría de Marina; conducir las estrategias gubernamentales en las áreas de telecomunicación y radiodifusión; operar Telecomm-Telégrafos, Correos de México, Aeropuertos y Servicios Auxiliares, caminos y puentes federales; otorgar, vigilar, renovar o retirar concesiones para la operación de medios de comunicación y transportes (aeropuertos, carreteras, vías férreas, etc.); dirigir la construcción de infraestructura pública para comunicaciones y transportes, y regular las características profesionales del personal que opere las vías generales de comunicación y transporte.
        </p>
        <img className="home-image" src={centro} alt="Centro SICT" />

        <div className="contact-card-home">
  <h3>Contacto</h3>
  <p>
    <strong>Dirección General:</strong> Mtra. Irma Leticia Gonzáles Sánchez<br />
    <strong>Correo:</strong> <a href="irma.gonzalez@sict.gob.mx">irma.gonzalez@sict.gob.mx</a><br />
    <strong>Teléfono:</strong> <a href="tel:4734541100">4734541100/01</a><br />
    <strong>Extensión:</strong> 48000
  </p>
</div>
      </div>
    </div>
  );
}

export default HomePage;