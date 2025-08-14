import React from 'react';
import '../assets/styles/pages/JuridicoPage.css';

function JuridicoPage() {
  const areasJuridicas = [
    "Trámite de Aprovechamiento del Derecho de Vía (permisos de accesos, instalación marginal, anuncios, cruzamientos)",
    "Denuncias ante la Fiscalía General de la República sobre daños a las vías de comunicación",
    "Revisión de contratos de obra pública y validación de fianzas",
    "Seguimiento de asuntos jurisdiccionales (amparos, agrarios, laboral, penal, administrativos)",
    "Procedimientos administrativos instaurados por el Centro SICT",
    "Revisión documental para liberación del derecho de vía"
  ];

  return (
    <div className="juridico-container">
      <h1 className="juridico-title">Unidad de Asuntos Jurídicos</h1>
      <hr className="juridico-divider" />
      
      <section className="juridico-section">
        <h2 className="juridico-subtitle">
          Las facultades y/o atribuciones de las Unidades Jurídicas están conferidas  
          en el Acuerdo Secretarial publicado en el Diario Oficial de la Federación el  
          1 de noviembre de 1984
        </h2>

        <ul className="juridico-list">
          {areasJuridicas.map((area, index) => (
            <li key={index} className="juridico-list-item">
              {area}
            </li>
          ))}
        </ul>
      </section>
     <div className="contact-card-juridico">
  <h3>Contacto</h3>
  <p>
    <strong>Nombre:</strong> Edith Dominguez Hernández<br />
    <strong>Correo:</strong> <a href="mailto:edomingh@sct.gob.mx">edomingh@sict.gob.mx</a><br />
    <strong>Teléfono:</strong> <a href="tel:4734541100">4734541100/01</a><br />
    <strong>Extensión:</strong> 48008
  </p>
</div>
    </div>
  );
}

export default JuridicoPage;