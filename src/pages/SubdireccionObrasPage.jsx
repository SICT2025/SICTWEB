import React from 'react';

import '../assets/styles/pages/SubdireccionObrasPage.css';

function SubdireccionObras() {
  return (
    <div className="obras-container">
      <h1 className="obras-title">Subdirección de Obras</h1>
      <hr className="obras-divider" />

      <section className="obras-section">
        <h2>Cuenta con tres residencias:</h2>
        <ul>
          <li>Residencia general de carreteras federales.</li>
          <li>Residencia general de conservación.</li>
          <li>Residencia general de carreteras alimentadoras.</li>
        </ul>

        <p className="obras-section">
          Coordina las acciones relacionadas con la contratación de obra pública en la red carretera
          (conservación de carretera, construcción y supervisión de nuevas carreteras, ampliaciones,
          construcciones de puentes y mantenimiento de dicha obra, así como la supervisión y
          construcción en los caminos de terracería), mediante las modalidades de licitación pública,
          invitación a mínimo tres proveedores o adjudicación directa.
        </p>

        <h2>Procedimientos para la construcción de obras públicas:</h2>
        <ul>
          <li>Por contrato.</li>
          <li>Por administración.</li>
        </ul>

        <h2>Requisitos para el proceso de planeación de obra pública:</h2>
        <ul>
          <li>Captación de requerimientos o identificación de necesidades</li>
          <li>Análisis o selección de evaluación</li>
          <li>Registro del proyecto</li>
          <li>Integración de elementos</li>
          <li>Proyecto ejecutivo</li>
          <li>Evaluación del impacto ambiental</li>
          <li>Ordenamiento territorial y regularización de la propiedad rural</li>
          <li>Propiedad del derecho de vía</li>
          <li>Dictamen sobre el análisis de factibilidad</li>
          <li>
            Permisos que se requieran como comisión nacional del agua, antropología e historia
          </li>
        </ul>

        <h3>Contratación de Obra Pública</h3>
        <p>La contratación de una obra puede ser mediante cualquiera de los siguientes procedimientos:</p>

        <ul>
          <li>
            <strong>Licitación Pública:</strong> mediante convocatoria pública, la cual se inicia con
            la publicación de la convocatoria para que libremente se presenten las personas
            interesadas.
          </li>
          <li>
            <strong>Invitación a cuando menos tres personas:</strong> mediante la entrega de un
            documento de invitación para presentar propuestas, en sobre sellado, concluyendo con la
            firma del contrato.
          </li>
          <li>
            <strong>Adjudicación directa:</strong> cuando la obra tiene características únicas y solo
            un contratista puede realizarla, según artículos 42 frac. I LOPSRM y 41 frac. I y VIII LAASSP.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default SubdireccionObras;