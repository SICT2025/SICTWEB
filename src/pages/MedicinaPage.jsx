import React from 'react';

import '../assets/styles/pages/MedicinaPage.css';


function MedicinaPage() {
  return (
    <div className="medicina-container">
      <h1 className="medicina-title">Unidad de Protección y Medicina Preventiva</h1>
      <hr />

      <h2 className="medicina-subtitle">
        La Dirección General de Protección y Medicina Preventiva en el Transporte te ayuda
        a dar certeza en tus resultados médicos para obtener tu Licencia Federal.
      </h2>

      <h2 className="medicina-subtitle">
        Requisitos para realizar examen psicofísico integral (cita previamente hecha
        en nuestro sitio web, si no la tienes da{' '}
        <a
          href="http://www.sct.gob.mx/transporte-y-medicina-preventiva/"
          target="_blank"
          rel="noopener noreferrer"
        >
          click aquí
        </a>
        ), el cual se puede realizar en las unidades médicas de la SICT o con los médicos terceros autorizados:
      </h2>

      <ul className="medicina-list">
        <li>Acta de nacimiento (original y copia). Se queda en resguardo en el expediente.</li>
        <li>Identificación oficial (INE, pasaporte, etc.), original y copia.</li>
        <li>Copia de la CURP.</li>
        <li>Comprobante de domicilio (máximo 3 meses).</li>
        <li>Pago del examen médico: $1,920.00.</li>
        <li>Asistir en ayunas desde las 8:00 A.M. con muestra de orina.</li>
      </ul>

      <h3 className="medicina-note">
        Nota: se requieren dos identificaciones oficiales vigentes.
      </h3>

      <h2 className="medicina-subtitle">Para obtener el certificado de capacitación</h2>

      <h3 className="medicina-subtext">
        Acude a un centro autorizado por la SICT. Consulta:{' '}
        <a
          href="https://www.sct.gob.mx/transporte-y-medicina-preventiva/medicina-preventiva/unidades-medicas-2022/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Directorio de los centros de capacitación
        </a>
      </h3>

     
    </div>
  );
}

export default MedicinaPage;