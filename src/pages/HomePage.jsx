import React from 'react';
import '../assets/styles/pages/HomePage.css';
import centro from '../assets/imagenes/sict.png'; //Este es para la imagen del centro SICT no del logo
 
function HomePage() {
  return (
    <div className="home-bg">
      <div className="home-main-card">
        <h1 className="home-title">
          Módulo de Información de la Secretaría<br />
          de Infraestructura, Comunicaciones y Transportes
        </h1>
        <hr className="home-divider" />
        <p className="home-description">
MISIÓN:
Instrumentar políticas públicas que impulsen el desarrollo económico, nacional y regional, mediante la expansión de infraestructura eficiente, sustentable, segura, incluyente y resiliente, así como la ampliación de la cobertura y mejora constante de la calidad, operación y oportunidad de los servicios de comunicaciones y transportes en beneficio de la población.
<br> VISIÓN:
Ser una Secretaría que genera las condiciones para que la prestación de servicios públicos de comunicaciones y transportes cubra las necesidades de los usuarios en las mejores condiciones de oportunidad, calidad y operación, mediante el desarrollo de infraestructura.
</br>
https://www.gob.mx/sct/es/archivo/acciones_y_programas

        </p>  
 
        <div className="home-image-container">
          <img
            className="home-image"
            src={centro}
            alt="Centro SICT"
            loading="lazy"
          />
        </div>
 
      </div>
    </div>
  );
}
 
export default HomePage;