

import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/pages/ServTecnPage.css';


function ServTecnPage() {
  return (
    <div className="servtecn-container">
      <h1 className="servtecn-title">Unidad General de Servicios Técnicos</h1>
      <hr className="servtecn-divider" />

      <h2 className="servtecn-subtitle">Realiza las siguientes actividades:</h2>
      <ul className="servtecn-list">
        <li>Realizar mediante contrato, la verificación de calidad de las obras.</li>
        <li>
          Realizar mediante contrato, los estudios y proyectos para la construcción y
          conservación periódica de las carreteras.
        </li>
        <li>
          Llevar a cabo o supervisar los estudios, proyectos y pruebas de laboratorio necesarios.
        </li>
        <li>
          Llevar a cabo o supervisar los estudios de campo para la obtención de datos
          estadísticos de origen e incidencias de accidentes en la red carretera.
        </li>
        <li>
          Realizar los estudios de evaluación de la red federal de carreteras y calificar el
          estado físico de estas.
        </li>
        <li>
          Supervisar la instalación y operación de dispositivos para el control de tránsito en
          el sistema vial en la jurisdicción.
        </li>
        <li>
          Efectuar la localización y estudio de bancos de materiales llevando su registro.
        </li>
        <li>
          Evaluar, aprobar, asesorar y supervisar las actividades que realizan los laboratorios
          de control y verificación de calidad.
        </li>
        <li>
          Emitir opinión técnica y factibilidad a solicitudes para el aprovechamiento al derecho
          de vía.
        </li>
        <li>
          Elaborar un dictamen de factibilidad sobre la procedencia de solicitudes para el uso y
          aprovechamiento del derecho de vía.
        </li>
      </ul>

      <h2 className="servtecn-subtitle">
        Esta área tiene tres áreas que dependen de ella, las cuales son:
      </h2>
      <ul className="servtecn-subareas">
        <li>
          <Link to="/unidad-laboratorios">Unidad de Laboratorios</Link>
        </li>
        <li>
          <Link to="/unidad-estudios">Unidad de Estudios</Link>
        </li>
        <li>
          <Link to="/unidad-vialidad-proyectos">Unidad de Vialidad y Proyectos</Link>
        </li>
      </ul>

             <div className="contact-card">
  <h3>Contacto</h3>
  <p>
    <strong>Nombre:</strong> Andres Reyes Hernandez<br />
    <strong>Correo:</strong> <a href="ereyeshe@sct.gob.mx">ereyeshe@sict.gob.mx</a><br />
    <strong>Teléfono:</strong> <a href="Tel:4734541100/01">4734541100/01</a><br />
    <strong>Extensión:</strong> 48493
  </p>
</div>
    </div>
  );
}

export default ServTecnPage;
