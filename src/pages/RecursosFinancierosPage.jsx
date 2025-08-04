import React from 'react';
import '../assets/styles/pages/RecursosFinancierosPage.css';
import { useNavigate } from 'react-router-dom';

function RecursosFinancierosPage() {
  const navigate = useNavigate(); 

  return (
    <div className="recursos-financieros-container">
      <h1 className="abajo">Departamento de Recursos Financieros e Ingresos</h1>
      <hr />
      <h2>Funciones del departamento:</h2>
      <ul>
        <li>
          Integrar el Anteproyecto Anual del Presupuesto del centro SICT, con base a
          los programas de obras y necesidades de recursos presentados por cada
          unidad para la atención de las actividades técnicas, operativas y
          administrativas.
        </li>
        <li>
          Llevar a cabo el ejercicio de los recursos presupuestales autorizados al
          centro SICT.
        </li>
        <li>
          Efectuar el registro contable de las operaciones financieras en lo
          relativo a la contabilidad de egresos y procedimiento de documentos
          comprobatorios y justificatorios del centro SICT.
        </li>
        <li>
          Controlar los egresos e ingresos que se realizan en el centro SICT a
          través de pagos y bienes de los servicios prestados por la institución.
        </li>
        <li>
          Tramitar el pago de los documentos que presenten los proveedores de
          bienes, prestadores de servicios, salarios y demás obligaciones contraidas
          por el centro SICT, de acuerdo con el programa y normas establecidas.
        </li>
        <li>
          Mantener coordinación y comunicación eficiente con las unidades del centro
          SICT para apoyar la ejecución de sus respectivos programas, mediante el
          suministro oportuno de los recursos financieros requeridos.
        </li>
        <li>
          Informar sobre el ejercicio presupuestal mensual, de disponibilidad de
          recursos, estados contables, así como los relativos al avance físico y
          financiero de los programas realizados en el centro.
        </li>
        <li>
          Controlar las cuentas por liquidar certificadas y la documentación
          comprobatoria de los pagos efectuados conforme a las disposiciones
          vigentes.
        </li>
        <li>
          Formular las modificaciones presupuestarias, llevar su control y tramitar
          su autorización ante la Secretaría de Hacienda y Crédito Público.
        </li>
        <li>Controlar el manejo del fondo revolvente asignado al centro SICT.</li>
        <li>
          Realizar la conciliación de las disponibilidades presupuestales de los
          centros de trabajo.
        </li>
        <li>
          Apoyar a los centros de trabajo, en el trámite de las cuentas por liquidar
          certificadas y controlar la documentación comprobatoria del gasto.
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

export default RecursosFinancierosPage;