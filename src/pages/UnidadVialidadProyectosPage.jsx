import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/pages/UnidadVialidadProyectos.css';


function UnidadVialidadProyectosPage() {
  const navigate = useNavigate();

  return (
    <div className="unidad-vialidad-proyectos-page">
      <h1 className="abajo">Unidad de vialidad y proyectos</h1>
      <hr />
      <h2>Realiza las siguientes actividades:</h2>
      <ul>
        <li>
          Supervisar la ejecución de los estudios de volúmenes de tránsito y de
          origen - destino en el campo.
        </li>
        <li>
          Calificar el estado físico de los caminos con apoyo en la base de datos e
          imágenes obtenidas.
        </li>
        <li>
          Revisar que el señalamiento instalado en las carreteras federales cumpla
          con las normas específicas.
        </li>
        <li>
          Detectar los puntos de conflicto de la Red Carretera Federal, con base en
          la metodología y los criterios de identificación iRAP de puntos de riesgo
          al usuario ante la ocurrencia de accidentes.
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

export default UnidadVialidadProyectosPage;