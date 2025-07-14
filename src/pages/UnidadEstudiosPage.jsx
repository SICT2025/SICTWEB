import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/pages/UnidadEstudios.css';

function UnidadEstudiosPage() {
  const navigate = useNavigate();

  return (
    <div className="unidad-estudios-page">
      <h1 className="abajo">Unidad de estudios</h1>
      <hr />
      <h2>Realiza las siguientes actividades:</h2>
      <ul>
        <li>
          Realizar los estudios geotécnicos, de pavimentos, de cimentación,
          hidráulicos, de drenaje y de estructuras que requieran las obras.
        </li>
        <li>
          Realizar estudios de evaluación de la red federal de carreteras y
          autopistas en la entidad para determinar su nivel de servicio.
        </li>
        <li>
          Realizar o supervisar diversos estudios de ingeniería de tránsito y
          transporte sobre la red federal de carreteras en el estado.
        </li>
        <li>
          Recopilar y estudiar los datos de accidentes de tránsito ocurridos en la
          red federal de carreteras y dar solución a estos para mejorar la
          seguridad.
        </li>
      </ul>
      <footer>
        <h2>
          <button className="btnI" onClick={() => navigate('/serv-tecnicos')}>Regresar</button>
        </h2>
      </footer>
    </div>
  );
}

export default UnidadEstudiosPage;