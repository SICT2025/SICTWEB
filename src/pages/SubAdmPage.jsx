import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/pages/SubAdmPage.css';


function SubAdmPage() {
  return (
    <div className="subadm-container">
      <h1 className="subadm-title">Subdirección de Administración</h1>
      <hr className="subadm-divider" />

      <h2 className="subadm-subtitle">
        Esta subdirección tiene tres departamentos los cuales son:
      </h2>
      <ul className="subadm-list">
         <li>
                   <Link to="/recursos-financieros">
                     Departamento de recursos financieros e ingresos
                   </Link>
                 </li>
        <li>
          <Link to="/departamento-humanos">Departamento de recursos humanos</Link>
        </li>
        <li>
          <Link to="/departamento-materiales">Departamento de recursos materiales</Link>
        </li>
      </ul>

      <h2 className="subadm-subtitle">Funciones de la subdirección:</h2>
      <ul className="subadm-list">
        <li>Coordinar y controlar las actividades de la administración de los recursos humanos, financieros, materiales, así como el área de ingresos.</li>
        <li>Proporcionar el apoyo administrativo que requieran las diversas áreas del centro SICT y coordinar la tramitación oportuna de su documentación, de conformidad con las disposiciones establecidas.</li>
        <li>Coordinar la integración de la información que se debe proporcionar a las unidades administrativas centrales de la Secretaría y al Director General del centro SICT.</li>
        <li>Ejercer, con la conformidad del Director General del centro SICT, el presupuesto autorizado, verificando que su registro contable y presupuestal se realice de acuerdo con las normas vigentes.</li>
        <li>Dirigir y vigilar con apoyo de la unidad de asuntos jurídicos que los concursos, contratos y convenios para llevar a cabo las adquisiciones del centro se realicen de manera correcta.</li>
        <li>Coordinar y supervisar el programa de adquisiciones, suministro y distribución de bienes, vigilando que este se realice de acuerdo a la normatividad emitida.</li>
        <li>Supervisar y controlar el sistema de inventarios de los bienes de activo fijo y circulante del centro SICT, verificando que se mantenga actualizado conforme a las normas y procedimientos establecidos.</li>
        <li>Dictaminar, licitar y coordinar los trámites relativos a la afectación y baja de los bienes muebles que figuren en los inventarios del centro SICT, así como cancelar los registros correspondientes con previa autorización del Director General.</li>
        <li>Controlar la asignación y uso de vehículos asignados a servicios generales del centro así como supervisar el mantenimiento y suministro de combustible de estos.</li>
        <li>Establecer y supervisar los sistemas de registro y control del personal del centro SICT, verificando que los movimientos, incidencias, licencias, asistencia y prestaciones sociales se realicen de acuerdo a las condiciones generales de trabajo.</li>
        <li>Coordinar la ejecución de las actividades de selección y contratación del personal de las distintas áreas del centro SICT.</li>
        <li>Coordinar la integración del programa de trabajo en materia de seguridad e higiene del centro SICT y vigilar su aplicación de acuerdo con las normas y políticas determinadas por la Comisión Mixta de Seguridad e Higiene.</li>
        <li>Programar, promover las actividades sociales, culturales, recreativas y deportivas a las que tienen derecho el personal del centro SICT.</li>
        <li>Coordinar y supervisar los mecanismos empleados para el pago de la nómina, así como de los diversos movimientos de ésta, así como coordinar la administración presupuestal de las plazas puesto del personal adscrito al centro SICT.</li>
        <li>Supervisar la difusión, aplicación y cumplimiento de las Condiciones Generales de Trabajo entre el personal adscrito al centro SICT.</li>
        <li>Controlar la expedición de constancias, hojas de servicio, bajas y demás documentos similares.</li>
        <li>Coordinar la operación del Programa Interno de Protección Civil, conforme a las normas establecidas para la prevención de riesgos profesionales y accidentes de trabajo.</li>
        <li>Controlar y autorizar el registro y certificación de la documentación oficial para el trámite de préstamos a corto plazo, hipotecarios, pensiones y jubilaciones que solicite el personal adscrito.</li>
        <li>Programar y coordinar la capacitación del personal del centro SICT, así como su evaluación y seguimiento.</li>
      </ul>

     
    </div>
  );
}

export default SubAdmPage;
