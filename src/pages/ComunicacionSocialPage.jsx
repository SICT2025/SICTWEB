import React from 'react';
import '../assets/styles/pages/RecursosFinancierosPage.css';

export default function ComunicacionSocialPage() {
  return (
    <div className="home-bg">
      <div className="home-main-card">
        <h1 className="home-title">Comunicación Social</h1>
        <hr className="home-divider" />
        <p className="home-description">
          Bienvenido a la sección de Comunicación Social. Aquí encontrarás información relevante sobre actividades, comunicados, eventos y noticias de interés para la comunidad.
          <br /><br />
          Si tienes alguna duda o comentario, puedes ponerte en contacto con el área de Comunicación Social para recibir atención y orientación.
        </p>
        {/* Puedes agregar más contenido, imágenes o enlaces aquí */}
      </div>
    </div>
  );
}