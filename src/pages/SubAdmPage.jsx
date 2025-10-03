import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/pages/SubAdmPage.css';

const fichas = {
  "recursos-humanos": {
    titulo: "Departamento de Recursos Humanos",
    descripcion: (
      <>
        Se encarga de la administración, selección, contratación, capacitación y control del personal del centro SICT. Atiende trámites de nómina, licencias, prestaciones sociales y expedición de constancias.
        <br /><br />
        <strong>Funciones principales:</strong>
        <ul style={{ marginTop: 8 }}>
          <li>Reclutamiento, selección y contratación de personal conforme a normas y presupuesto.</li>
          <li>Elaboración de constancias de nombramiento y contratos para personal eventual.</li>
          <li>Expedición y trámite de certificaciones por servicio activo y hojas de servicio.</li>
          <li>Trámite de actas e irregularidades administrativas por accidentes o violaciones legales.</li>
          <li>Registro y control de nombramientos, incidencias, asistencias, licencias, vacaciones, bajas y movimientos del personal, así como reportes y estadísticas.</li>
          <li>Manejo y actualización de expedientes personales y archivo de documentación.</li>
          <li>Elaboración y control del programa anual de vacaciones.</li>
          <li>Formulación y coordinación del programa anual de capacitación.</li>
          <li>Aplicación de descuentos al Fondo Nacional de Ahorro Capitalizable.</li>
          <li>Vigilancia de exámenes de capacidad, médicos y psicotécnicos para nuevo ingreso.</li>
          <li>Trámite de pagos por defunción, liquidación e indemnización por riesgos profesionales, y apoyo en trámites asistenciales.</li>
          <li>Actualización del catálogo de puestos, control de plazas vacantes y cuadros de calificación escalafonaria.</li>
          <li>Aplicación y difusión de dictámenes de la Comisión Mixta de Seguridad e Higiene.</li>
          <li>Registro de evaluaciones periódicas de desempeño y gestión de permisos, estímulos y recompensas.</li>
          <li>Vigilancia del pago por servicios personales a los trabajadores.</li>
        </ul>
      </>
    )
  },
  "departamento-materiales": {
    titulo: "Departamento de Recursos de Materiales",
    descripcion: (
      <>
        Gestiona la adquisición, suministro, distribución y control de bienes materiales, inventarios y vehículos. Supervisa el mantenimiento y abastecimiento de recursos materiales y servicios generales.
        <br /><br />
        <strong>Funciones principales:</strong>
        <ul style={{ marginTop: 8 }}>
          <li>Elaborar el anteproyecto del programa anual de adquisiciones de bienes y servicios.</li>
          <li>Supervisar el suministro de bienes y servicios según programas y montos autorizados.</li>
          <li>Verificar y validar informes de rendición de cuentas de almacén de centros foráneos.</li>
          <li>Autorizar compras menores y tramitar requisiciones, cotizaciones y pedidos mayores, así como contratos de arrendamiento y servicios.</li>
          <li>Adquirir bienes de activo fijo y de consumo conforme a normas y disposiciones.</li>
          <li>Realizar concursos de licitación pública, convenios y contratos para adquisiciones y arrendamientos.</li>
          <li>Promover la baja y destino final de bienes muebles, ejecutando dictámenes y trámites respectivos.</li>
          <li>Controlar y mantener actualizado el inventario de bienes de activo fijo y de consumo.</li>
          <li>Recibir, clasificar y distribuir la correspondencia del centro SICT.</li>
          <li>Supervisar servicios de vigilancia, seguridad, intendencia, mensajería y otros servicios diversos.</li>
          <li>Llevar el control del archivo general de información y proporcionar expedientes a las unidades que lo soliciten.</li>
          <li>Coordinar la administración de riesgos en todas las áreas del centro SICT.</li>
        </ul>
      </>
    )
  },
  "departamento-financieros": {
    titulo: "Departamento de Recursos Financieros e Ingresos",
    descripcion: (
      <>
        Administra el presupuesto, controla los ingresos y egresos, realiza registros contables y supervisa el cumplimiento de las normas financieras. Coordina trámites de pagos y administración de plazas.
        <br /><br />
        <strong>Funciones principales:</strong>
        <ul style={{ marginTop: 8 }}>
          <li>Integrar el anteproyecto anual del presupuesto del centro SICT, considerando programas y necesidades de recursos.</li>
          <li>Ejercer los recursos presupuestales autorizados al centro SICT.</li>
          <li>Registrar contablemente las operaciones financieras, egresos y documentos comprobatorios.</li>
          <li>Controlar los egresos e ingresos mediante pagos y bienes de los servicios prestados.</li>
          <li>Tramitar el pago de proveedores, prestadores de servicios, salarios y obligaciones conforme a normas y programas.</li>
          <li>Mantener coordinación con las unidades del centro SICT para el suministro oportuno de recursos financieros.</li>
          <li>Informar sobre el ejercicio presupuestal, disponibilidad de recursos y estados contables.</li>
          <li>Controlar cuentas por liquidar certificadas y documentación comprobatoria de pagos.</li>
          <li>Formular y controlar modificaciones presupuestarias, y tramitar su autorización ante la Secretaría de Hacienda y Crédito Público.</li>
          <li>Controlar el manejo del fondo revolvente asignado al centro SICT.</li>
          <li>Realizar conciliaciones de disponibilidades presupuestales de los centros de trabajo.</li>
          <li>Apoyar en el trámite de cuentas por liquidar certificadas y controlar la documentación comprobatoria del gasto.</li>
        </ul>
      </>
    )
  }
};

function SubAdmPage() {
  const [fichaAbierta, setFichaAbierta] = useState(null);

  const handleFicha = (key) => {
    setFichaAbierta(fichaAbierta === key ? null : key);
  };

  return (
    <div className="subadm-container">
      <h1 className="subadm-title">Subdirección de Administración</h1>
      <hr className="subadm-divider" />

      <h2 className="subadm-subtitle">
        Esta subdirección tiene tres departamentos los cuales son:
      </h2>
      <div className="subadm-acordeon">
        {Object.entries(fichas).map(([key, ficha]) => (
          <div key={key} className="subadm-acordeon-item">
            <button
              className={`subadm-acordeon-btn${fichaAbierta === key ? ' active' : ''}`}
              onClick={() => handleFicha(key)}
            >
              {ficha.titulo}
              <span className="subadm-acordeon-icon">{fichaAbierta === key ? '👍' : '👇'}</span>
            </button>
            {fichaAbierta === key && (
              <div className="subadm-acordeon-panel">
                {ficha.descripcion}
              </div>
            )}
          </div>
        ))}
      </div>

 <h2 className="subadm-subtitle">Funciones de la subdirección:</h2>
      <ul className="subadm-list">
        {/* ...funciones existentes... */}
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