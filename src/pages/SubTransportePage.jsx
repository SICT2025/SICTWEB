import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/pages/SubTransportePage.css';


function SubTransporte() {
  return (
    <div className="transporte-container">
      <h1 className="transporte-title">Subdirección de Transporte</h1>
      <hr className="transporte-divider" />

      <section className="transporte-section">
        <h3>
          La subdirección de transporte está a cargo del Lic. Juan Francisco Salazar Reyes, la cual
          tiene 4 departamentos:
        </h3>
        <ul>
          <li>
            <Link to="/transporte-ferroviario">
              Departamento de Transporte Ferroviario
            </Link>
          </li>
          <li>
            <Link to="/autotransporte-celaya">
              Departamento de Autotransporte Federal "Celaya"
            </Link>
          </li>
          <li>
            <Link to="/autotransporte-leon">
              Departamento de Autotransporte Federal "León"
            </Link>
          </li>
          <li>
            <Link to="/medicina">
              Unidad de Protección y Medicina Preventiva
            </Link>
          </li>
        </ul>

        <h3>
          El licenciado a cargo es responsable de que los permisos o trámites sean aceptados,
          principalmente los relacionados con licencias federales para conductores.
        </h3>

        <h2>¿Qué es la licencia federal del conductor?</h2>
        <h3>
          Es el documento que sustenta el permiso que otorga la SICT para conducir vehículos
          destinados al transporte de carga, pasaje, turismo y/o servicios auxiliares en caminos y
          puentes de jurisdicción federal.
        </h3>

        <table className="transporte-table">
          <thead>
            <tr>
              <th>Categoría</th>
              <th>Autoriza a conducir</th>
              <th>Vigencia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cat">A</td>
              <td>
                Pasajeros en transporte federal (excepto puertos/aeropuertos) y turismo (excepto
                chofer-guía).
              </td>
              <td className="cat">4 años</td>
            </tr>
            <tr>
              <td className="cat">B</td>
              <td>
                Carga federal y privada (excepto doblemente articulados o materiales peligrosos).
              </td>
              <td className="cat">4 años</td>
            </tr>
            <tr>
              <td className="cat">C</td>
              <td>
                Vehículos de 2 o 3 ejes (rabón o torton) en autotransporte federal y privado (excepto
                materiales peligrosos).
              </td>
              <td className="cat">4 años</td>
            </tr>
            <tr>
              <td className="cat">D</td>
              <td>Turismo en modalidad de chofer-guía.</td>
              <td className="cat">4 años</td>
            </tr>
            <tr>
              <td className="cat">E</td>
              <td>
                a) Tractocamiones doblemente articulados <br />
                b) Vehículos para transporte de materiales peligrosos.
              </td>
              <td className="cat">2 años</td>
            </tr>
            <tr>
              <td className="cat">F</td>
              <td>Pasajeros de o hacia puertos marítimos y aeropuertos federales.</td>
              <td className="cat">4 años</td>
            </tr>
          </tbody>
        </table>

        <h2>¿Qué opciones existen para realizar el trámite?</h2>
        <ul>
          <li>Presencialmente en oficinas de atención ciudadana de autotransporte federal.</li>
          <li>
            En línea vía <a href="https://www.gob.mx/" target="_blank" rel="noopener noreferrer">Gob.mx</a>:
            <ol>
              <li>E.Firma (firma electrónica)</li>
              <li>Pre-registro (RFC y CURP)</li>
              <li>Completar actividades indicadas</li>
              <li>Acudir a la oficina seleccionada para recoger la licencia</li>
            </ol>
          </li>
        </ul>

        <h3>
          <a
            href="https://www.sct.gob.mx/transporte-y-medicina-preventiva/autotransporte-federal/videos-de-capacitacion-sobre-autotransporte-federal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver videos paso a paso para realizar el trámite en línea
          </a>
        </h3>

        <h2>Trámite de manera presencial</h2>
        <h3>
          Acude a cualquier oficina de Autotransporte Federal de la SICT con los requisitos completos.
          <br />
          <a
            href="https://www.sct.gob.mx/transporte-y-medicina-preventiva/autotransporte-federal/centros-de-capacitacion/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Directorio de oficinas
          </a>
        </h3>

        <h2>Criterios de aceptación de documentos</h2>
        <ul className="document-list">
          <li>Identificación oficial: INE, pasaporte, cartilla militar o cédula profesional.</li>
          <li>Comprobante de domicilio no mayor a 3 meses.</li>
          <li>Acta de nacimiento o documento oficial que acredite edad.</li>
          <li>Constancia de aptitud psicofísica (vigencia 90 días).</li>
          <li>Certificado de capacitación ("Copia 1", vigencia 2 años).</li>
          <li>Acta por pérdida de licencia ante autoridad competente.</li>
          <li>Credencial vigente de guía de turistas (Secretaría de Turismo).</li>
          <li>Constancia de conocimiento del idioma inglés.</li>
        </ul>
      </section>
    </div>
  );
}

export default SubTransporte;