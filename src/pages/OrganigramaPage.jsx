
import React, { useState } from 'react';
import '../assets/styles/pages/OrganigramaPage.css';
import organigrama from '../assets/imagenes/organigrama.jpg';
import ContactoDepartamento from '../components/ContactoDepartamento';

const contactos = [
  {
    titulo: 'Dirección General',
    nombre: 'Mtra. Irma Leticia Gonzáles Sánchez',
    correo: 'irma.gonzalez@sict.gob.mx',
    extension: '48000',
  },
  {
    titulo: 'Unidad de Asuntos Jurídicos',
    nombre: 'Edith Domínguez Hernández',
    correo: 'edomingh@sict.gob.mx',
    extension: '48008',
  },
  {
    titulo: 'Informática',
    nombre: 'Adrián Márquez Rangel',
    correo: 'amarquer@sict.gob.mx',
    extension: '48016 / 48018',
  },
  {
    titulo: 'Subdirección de Comunicaciones',
    nombre: 'Juan Enrique Ibañez Solís',
    correo: 'jibanezs@sict.gob.mx',
    extension: '48957',
  },
  {
    titulo: 'Subdirección de Administraciones',
    nombre: 'Juan Francisco Salazar Reyes',
    correo: 'juan.salazar@sict.gob.mx',
    extension: '48048',
  },
  {
    titulo: 'Subdirección de Obras',
    nombre: 'Raphael Barraza Mariscal',
    correo: 'rbarraza@sict.gob.mx',
    extension: '48093',
  },
  {
    titulo: 'Residencia General de Conservación',
    nombre: 'Eduardo Alfonso Chan Euan',
    correo: 'echanehua@sict.gob.mx',
    extension: '48101',
  },
  {
    titulo: 'Residencia General de Carreteras Alimentadoras',
    nombre: 'Luis Alfonso Morales Cazares',
    correo: 'lmoralec@sict.gob.mx',
    extension: '48325',
  },
  {
    titulo: 'Residencia General de Carreteras Federales',
    nombre: 'José de Jesús Ayala Madrigal',
    correo: 'jayalam@sict.gob.mx',
    extension: '48213',
  },
  {
    titulo: 'Unidad General de Servicios Técnicos',
    nombre: 'Eduardo Andrés Reyes Hernández',
    correo: 'ereyeshe@sict.gob.mx',
    extension: '48493',
  },
  {
    titulo: 'Subdirección de Transporte',
    nombre: 'Efraín Palafox Marin',
    correo: 'apalafox@sict.gob.mx',
    extension: '48517',
  },
];

function OrganigramaPage() {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom(z => Math.min(z + 0.2, 5));
  const handleZoomOut = () => setZoom(z => Math.max(z - 0.2, 0.5));
  const handleReset = () => setZoom(1);

  return (
    <div className="organigrama-container">
      <h1 className="organigrama-title">Organigrama</h1>
      <hr className="organigrama-divider" />

      <div className="organigrama-zoom-buttons">
        <button onClick={handleZoomOut}>-</button>
        <button onClick={handleReset}>Restablecer</button>
        <button onClick={handleZoomIn}>+</button>
      </div>

      <div className="organigrama-content">
        <div className="organigrama-scroll-outer">
          <div
            className="organigrama-scroll-inner"
            style={{ transform: `scale(${zoom})`, transformOrigin: 'top left' }}
          >
            <img
              className="organigrama-image"
              src={organigrama}
              alt="Organigrama institucional"
            />
          </div>
        </div>

        <p id="organigrama-descripcion" className="organigrama-description">
          Estructura organizacional de la dependencia.
        </p>
      </div>

      <div className="organigrama-contactos">
        <h2>Contactos por Departamento</h2>
        {contactos.map((c, index) => (
          <ContactoDepartamento key={index} titulo={c.titulo} contacto={c} />
        ))}
      </div>
    </div>
  );
}

export default OrganigramaPage;
