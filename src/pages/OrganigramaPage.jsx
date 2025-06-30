import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/pages/OrganigramaPage.css';
import img1 from '../assets/imagenes/img1.png';
import organigrama from '../assets/imagenes/organigrama.jpg';

function OrganigramaPage() {
  return (
    <div className="organigrama-container">

      <h1 className="organigrama-title">Organigrama</h1>
      <hr className="organigrama-divider" />

      <div className="organigrama-content">
        <img
          className="organigrama-image"
          src={organigrama}
          alt="Organigrama institucional"
          aria-describedby="organigrama-descripcion"
        />
        <p id="organigrama-descripcion" className="organigrama-description">
          Estructura organizacional de la dependencia.
        </p>
      </div>

    </div>
  );
}

export default OrganigramaPage;
