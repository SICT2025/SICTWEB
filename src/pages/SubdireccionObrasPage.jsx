import React, { useState } from 'react';
import '../assets/styles/pages/SubdireccionObrasPage.css';

const residencias = [
  {
    key: 'carreteras-federales',
    titulo: 'Residencia General de Carreteras Federales',
    ficha: (
      <>
        <p>
          Se encarga de la planeación, supervisión y control de los proyectos de construcción, modernización y mantenimiento de la red de carreteras federales. Su función principal es garantizar que la infraestructura cumpla con los estándares técnicos y de seguridad establecidos.
        </p>
      </>
    ),
  },
  {
    key: 'conservacion',
    titulo: 'Residencia General de Conservación',
    ficha: (
      <>
        <p>
          Tiene como objetivo preservar en buen estado las carreteras federales existentes. Supervisa trabajos de conservación rutinaria y periódica (bacheo, señalamiento, limpieza, deshierbe, mantenimiento de puentes y estructuras) para asegurar la movilidad y seguridad de los usuarios.
        </p>
      </>
    ),
  },
  {
    key: 'carreteras-alimentadoras',
    titulo: 'Residencia General de Carreteras Alimentadoras',
    ficha: (
      <>
        <p>
          Coordina y supervisa los proyectos de construcción y modernización de carreteras alimentadoras, que conectan a localidades rurales y centros de producción con la red federal de carreteras, fomentando la integración regional y el desarrollo económico local.
        </p>
      </>
    ),
  },
  {
    key: 'contratos-estimaciones',
    titulo: 'Departamento de Contratos y Estimaciones',
    ficha: (
      <>
        <p>
          Se encarga de la gestión administrativa y técnica de los contratos de obra y servicios relacionados con la infraestructura. Supervisa la elaboración, revisión y control de estimaciones de avance físico y financiero, asegurando el correcto uso de los recursos públicos.
        </p>
      </>
    ),
  },
];

function SubdireccionObras() {
  const [fichaAbierta, setFichaAbierta] = useState(null);

  const handleFicha = (key) => {
    setFichaAbierta(fichaAbierta === key ? null : key);
  };

  return (
    <div className="obras-container">
      <h1 className="obras-title">Subdirección de Obras</h1>
      <hr className="obras-divider" />

      <section className="obras-section">
        <h2>Departamentos y residencias:</h2>
        <div className="obras-acordeon">
          {residencias.map((res) => (
            <div key={res.key} className="obras-acordeon-item">
              <button
                className={`obras-acordeon-btn${fichaAbierta === res.key ? ' active' : ''}`}
                onClick={() => handleFicha(res.key)}
              >
                {res.titulo}
                <span className="obras-acordeon-icon">{fichaAbierta === res.key ? '👍' : '👇'}</span>
              </button>
              {fichaAbierta === res.key && (
                <div className="obras-acordeon-panel">
                  {res.ficha}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ...resto del contenido original... */}
        <h2 style={{ marginTop: 32 }}>Procedimientos para la construcción de obras públicas:</h2>
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