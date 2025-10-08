import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/pages/ServTecnPage.css';

const subareas = [
  {
    key: 'unidad-laboratorios',
    titulo: 'Unidad de Laboratorios',
    ficha: (
      <>
        <ul>
          <li>Evaluar y aprobar la ejecución de las obras que están a cargo.</li>
          <li>Supervisar la operación de los laboratorios de control y calidad durante la ejecución de las obras.</li>
          <li>Realizar la evaluación de calidad de materiales de las obras.</li>
          <li>Formular y actualizar el inventario de bancos de materiales en la entidad.</li>
        </ul>
        
      </>
    ),
  },
  {
    key: 'unidad-estudios',
    titulo: 'Unidad de Estudios',
    ficha: (
      <>
        <ul>
          <li>Realizar los estudios geotécnicos, de pavimentos, de cimentación, hidráulicos, de drenaje y de estructuras que requieran las obras.</li>
          <li>Realizar estudios de evaluación de la red federal de carreteras y autopistas en la entidad para determinar su nivel de servicio.</li>
          <li>Realizar o supervisar diversos estudios de ingeniería de tránsito y transporte sobre la red federal de carreteras en el estado.</li>
          <li>Recopilar y estudiar los datos de accidentes de tránsito ocurridos en la red federal de carreteras y dar solución a estos para mejorar la seguridad.</li>
        </ul>
       
      </>
    ),
  },
  {
    key: 'unidad-vialidad-proyectos',
    titulo: 'Unidad de Vialidad y Proyectos',
    ficha: (
      <>
        <ul>
          <li>Supervisar la ejecución de los estudios de volúmenes de tránsito y de origen - destino en el campo.</li>
          <li>Calificar el estado físico de los caminos con apoyo en la base de datos e imágenes obtenidas.</li>
          <li>Revisar que el señalamiento instalado en las carreteras federales cumpla con las normas específicas.</li>
          <li>Detectar los puntos de conflicto de la Red Carretera Federal, con base en la metodología y los criterios de identificación iRAP de puntos de riesgo al usuario ante la ocurrencia de accidentes.</li>
        </ul>
       
      </>
    ),
  },
];

function ServTecnPage() {
  const [fichaAbierta, setFichaAbierta] = useState(null);

  const handleFicha = (key) => {
    setFichaAbierta(fichaAbierta === key ? null : key);
  };

  return (
    <div className="servtecn-container">
      <h1 className="servtecn-title">Unidad General de Servicios Técnicos</h1>
      <hr className="servtecn-divider" />

      <h2 className="servtecn-subtitle">Realiza las siguientes actividades:</h2>
      <ul className="servtecn-list">
        <li>Realizar mediante contrato, la verificación de calidad de las obras.</li>
        <li>Realizar mediante contrato, los estudios y proyectos para la construcción y conservación periódica de las carreteras.</li>
        <li>Llevar a cabo o supervisar los estudios, proyectos y pruebas de laboratorio necesarios.</li>
        <li>Llevar a cabo o supervisar los estudios de campo para la obtención de datos estadísticos de origen e incidencias de accidentes en la red carretera.</li>
        <li>Realizar los estudios de evaluación de la red federal de carreteras y calificar el estado físico de estas.</li>
        <li>Supervisar la instalación y operación de dispositivos para el control de tránsito en el sistema vial en la jurisdicción.</li>
        <li>Efectuar la localización y estudio de bancos de materiales llevando su registro.</li>
        <li>Evaluar, aprobar, asesorar y supervisar las actividades que realizan los laboratorios de control y verificación de calidad.</li>
        <li>Emitir opinión técnica y factibilidad a solicitudes para el aprovechamiento al derecho de vía.</li>
        <li>Elaborar un dictamen de factibilidad sobre la procedencia de solicitudes para el uso y aprovechamiento del derecho de vía.</li>
      </ul>

      <h2 className="servtecn-subtitle">
        Esta área tiene tres áreas que dependen de ella, las cuales son:
      </h2>
      <div className="servtecn-acordeon">
        {subareas.map((area) => (
          <div key={area.key} className="servtecn-acordeon-item">
            <button
              className={`servtecn-acordeon-btn${fichaAbierta === area.key ? ' active' : ''}`}
              onClick={() => handleFicha(area.key)}
            >
              {area.titulo}
              <span className="servtecn-acordeon-icon">{fichaAbierta === area.key ? '👍' : '👇'}</span>
            </button>
            {fichaAbierta === area.key && (
              <div className="servtecn-acordeon-panel">
                {area.ficha}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServTecnPage;