import React from 'react';
import '../assets/styles/pages/MapaPage.css';
import croquis from '../assets/imagenes/croquis.jpg';

function MapaPage() {
  return (
    <div className="mapa-container">

      <h1 className="mapa-title">Croquis del Establecimiento</h1>

      <hr className="mapa-divider" />

      <div className="mapa-content">
        <img
          className="mapa-image"
          src={croquis}
          alt="Croquis del establecimiento SICT"
          aria-describedby="croquis-descripcion"
        />
        <p id="croquis-descripcion" className="mapa-description">
          Imagen representativa del croquis del establecimiento de la SICT.
        </p>
      </div>
    </div>
  );
}

export default MapaPage;