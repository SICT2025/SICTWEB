import React from 'react';
import '../assets/styles/pages/RecursosFinancierosPage.css'; // Puedes reutilizar el CSS
import { useNavigate } from 'react-router-dom';

function DepartamentoMaterialesPage() {
  const navigate = useNavigate(); // <-- Agrega esta línea

  return (
    <div className="recursos-financieros-container">

      <h1 className="abajo">Departamento de Recursos Materiales</h1>
      <hr />
      <h2>Funciones del departamento:</h2>
      <ul>
        <li>
          Elaborar el anteproyecto del programa anual de adquisiciones de bienes y
          servicios necesarios para el desarrollo de actividades del centro SICT.
        </li>
        <li>
          Supervisar el suministro de los bienes y servicios que requieran los
          centros de trabajo, de acuerdo con los programas y montos autorizados.
        </li>
        <li>
          Verificar y validar los informes que presenten los centros de trabajo
          foráneos, relativos a la rendición de cuentas de almacén.
        </li>
        <li>
          Autorizar las compras de pedidos menores y tramitar las requisiciones,
          cotizaciones y pedidos mayores que requieran los centros de trabajo, así
          como los contratos de arrendamiento y servicios de acuerdo con la
          normatividad, suficiencia presupuestal y montos autorizados.
        </li>
        <li>
          Realizar la adquisición de bienes de activo fijo y de consumo aplicando
          las normas y disposiciones establecidas.
        </li>
        <li>
          Realizar la celebración de concursos de licitación pública, convenios y
          contratos para la adquisición de los bienes y arrendamiento de inmuebles
          para el centro SICT.
        </li>
        <li>
          Promover la baja y destino final de los bienes muebles de conformidad con
          los lineamientos respectivos, así como ejecutar el dictamen, las
          licitaciones y trámites relativos.
        </li>
        <li>
          Controlar y mantener actualizado el inventario de los bienes de activo
          fijo y de consumo con los que cuenta el centro SICT.
        </li>
        <li>
          Recibir, clasificar y enviar la correspondencia del centro SICT conforme a
          los procedimientos determinados, efectuando su distribución a las unidades
          respectivas.
        </li>
        <li>
          Supervisar los servicios de vigilancia, seguridad, intendencia, mensajería
          y otros servicios diversos.
        </li>
        <li>
          Llevar el control del archivo general de la información del centro SICT,
          proporcionando los expedientes de la documentación a las unidades que
          soliciten.
        </li>
        <li>
          Coordinar la administración de riesgos en todas las áreas del centro SICT.
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

export default DepartamentoMaterialesPage;