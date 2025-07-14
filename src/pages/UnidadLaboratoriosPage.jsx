import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/pages/UnidadLaboratorios.css';

function UnidadLaboratoriosPage() {
  const navigate = useNavigate();

  return (
    <div className="unidad-laboratorios-page">
   
      <h1 className="abajo">Unidad de laboratorios</h1>
      <hr />
      <h2>Realiza las siguientes actividades:</h2>
      <ul>
        <li>Evaluar y aprobar la ejecución de las obras que están a cargo.</li>
        <li>Supervisar la operación de los laboratorios de control y calidad durante la ejecución de las obras.</li>
        <li>Realizar la evaluación de calidad de materiales de las obras.</li>
        <li>Formular y actualizar el inventario de bancos de materiales en la entidad.</li>
      </ul>
      <footer>
         <h2>
          <button className="btnI" onClick={() => navigate('/serv-tecnicos')}>Regresar</button>
        </h2>
      </footer>
    </div>
  );
}

export default UnidadLaboratoriosPage;