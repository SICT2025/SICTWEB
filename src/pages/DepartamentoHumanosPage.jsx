import React from 'react';
import '../assets/styles/pages/RecursosFinancierosPage.css';
import { useNavigate } from 'react-router-dom';

function DepartamentoHumanosPage() {
  const navigate = useNavigate(); 

  return (
    <div className="recursos-financieros-container">
      <h1 className="abajo">Departamento de Recursos Humanos</h1>
      <hr />
      <h2>Funciones del departamento:</h2>
      <ul>
        <li>
          Llevar a cabo el reclutamiento, selección y contratación del personal que
          requiera el centro SICT, de conformidad con las normas establecidas y
          disponibilidades presupuestales.
        </li>
        <li>
          Elaborar constancias de nombramiento por ingreso y promoción para el
          personal de base, así como contratos para personal eventual.
        </li>
        <li>
          Expedir y tramitar las certificaciones por servicio activo que requieran
          los trabajadores del centro SICT, así como hojas de servicio.
        </li>
        <li>
          Tramitar las actas e irregularidades administrativas que resulten de
          accidentes de trabajo y por violaciones a disposiciones legales vigentes,
          aplicando las sanciones que se ordenen.
        </li>
        <li>
          Tramitar, registrar y controlar los nombramientos, incidencias,
          asistencias, licencias, reanudación de labores, permisos económicos,
          vacaciones, transferencias, cambios de radicación de sueldos, bajas y
          demás movimientos del personal del centro SICT, así como integrar los
          reportes y estadísticas correspondientes.
        </li>
        <li>
          Registrar la documentación del personal para la integración, manejo de
          kardex y archivo, manteniendo su constante actualización e incorporación a
          los expedientes personales.
        </li>
        <li>
          Elaborar y controlar el programa anual de vacaciones del personal del
          centro SICT y de los centros de trabajo foráneos en la entidad.
        </li>
        <li>
          Formular el programa anual de capacitación y coordinar su aplicación en
          todas las áreas del centro SICT.
        </li>
        <li>
          Aplicar los descuentos a los trabajadores correspondientes al Fondo
          Nacional de Ahorro Capitalizable.
        </li>
        <li>
          Vigilar la aplicación de exámenes de capacidad, médicos y psicotécnicos al
          personal de nuevo ingreso.
        </li>
        <li>
          Tramitar los pagos por defunción, liquidación e indemnización por riesgos
          profesionales, así como auxiliar al personal del centro SICT o sus
          familiares en los trámites ante las dependencias asistenciales.
        </li>
        <li>
          Mantener actualizado el catálogo de puestos del centro SICT y llevar el
          control de plazas vacantes temporales y definitivas y cuadros de
          calificación escalafonaria para efectos de movimientos y promociones del
          personal, aplicando los dictámenes de la Comisión Mixta de Escalafón y
          Ajuste y disposiciones que al respecto se emitan.
        </li>
        <li>
          Aplicar los dictámenes que emita la Comisión Mixta de Seguridad e Higiene,
          sobre medidas de prevención de accidentes en el trabajo y difundirlas
          entre el personal.
        </li>
        <li>
          Registrar las evaluaciones periódicas del desempeño del personal en sus
          labores y gestionar el otorgamiento de permisos, estímulos y recompensas a
          los trabajadores.
        </li>
        <li>
          Vigilar el pago por servicios personales a los trabajadores del centro
          SICT.
        </li>
      </ul>
      <footer>
         <h2>
          <button className="btnI" onClick={() => navigate('/subadministracion')}>Regresar</button>
        </h2>
      </footer>
    </div>
  );
}

export default DepartamentoHumanosPage;