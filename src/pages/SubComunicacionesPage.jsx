import React from 'react';

import '../assets/styles/pages/SubComunicacionesPage.css';


function SubComunicacionesPage() {
  return (
    <div className="subcom-container">
      <h1 className="subcom-title">Subdirección de Comunicaciones</h1>
      <hr className="subcom-divider" />

      <h2 className="subcom-subtitle">Dentro de las actividades en esta área se encuentran las siguientes:</h2>
      <ul className="subcom-list">
        <li>Programas e informes de procedimiento de verificación de telefonía rural.</li>
        <li>Unidad de enlace:
          <ul>
            <li>Recibir de oficinas centrales (sujetos obligados) y dar trámite a las solicitudes de acceso a la información.</li>
            <li>Llevar un registro de las solicitudes de acceso a la información, respuestas, resultados, costos de reproducción y envío.</li>
          </ul>
        </li>
        <li>Coordinación al recabar información de acciones que han llevado a cabo las diferentes áreas de este centro, enviando dicha información a oficinas centrales.</li>
      </ul>

            <div className="contact-card">
  <h3>Contacto</h3>
  <p>
    <strong>Nombre:</strong> Juan Francisco Ibañez Solis <br />
    <strong>Correo:</strong> <a href="jibanezs@sct.gob.mx"></a>jibanezs@sict.gob.mx<br />
    <strong>Teléfono:</strong> <a href="Tel:4734541100/01">4734541100/01</a><br />
    <strong>Extensión:</strong> 48957
  </p>
</div>
    </div>
  );
}

export default SubComunicacionesPage;
