import React, { useState } from 'react';
import '../assets/styles/pages/OrganigramaPage.css';
import organigrama from '../assets/imagenes/organigrama.jpg';
import ContactoDepartamento from '../components/ContactoDepartamento';

const contactos = [
  {
    titulo: 'Dirección General',
    nombre: 'Mtra. Irma Leticia Gonzáles Sánchez',
    correo: 'irma.gonzalez@sict.gob.mx',
    extension: '4800',
  },
  {
    titulo: 'Unidad de Asuntos Jurídicos',
    nombre: 'Edith Domínguez Hernández',
    correo: 'edomingh@sct.gob.mx',
    extension: '48008',
  },
  {
    titulo: 'Informática',
    nombre: 'Adrián Márquez Rangel',
    correo: 'amarquer@sct.gob.mx',
    extension: '48016 / 48018',
  },
  {
    titulo: 'Subdirección de Comunicaciones',
    nombre: 'Juan Francisco Ibañez Solís',
    correo: 'jibanezs@sct.gob.mx',
    extension: '48957',
  },
  {
    titulo: 'Subdirección de Administraciones',
    nombre: 'Juan Francisco Salazar Reyes',
    correo: 'juan.salazar@sct.gob.mx',
    extension: '48048',
  },
  {
    titulo: 'Subdirección de Obras',
    nombre: 'Raphael Barraza Mariscal',
    correo: 'rbarraza@sct.gob.mx',
    extension: '48093',
  },
  {
    titulo: 'Residencia General de Conservación',
    nombre: 'Eduardo Alfonso Chan Euan',
    correo: 'echanehuan@sct.gob.mx',
    extension: '48101',
  },
  {
    titulo: 'Residencia General de Carreteras Alimentadoras',
    nombre: 'Luis Alfonso Morales Cazares',
    correo: 'lmoralec@sct.gob.mx',
    extension: '48325',
  },
  {
    titulo: 'Residencia General de Carreteras Federales',
    nombre: 'José de Jesús Ayala Madrigal',
    correo: 'jayalam@sct.gob.mx',
    extension: '48213',
  },
  {
    titulo: 'Unidad General de Servicios Técnicos',
    nombre: 'Eduardo Andrés Reyes Hernández',
    correo: 'ereyeshe@sct.gob.mx',
    extension: '48493',
  },
  {
    titulo: 'Subdirección de Transporte',
    nombre: 'Efraín Palafox Martín',
    correo: 'apalafox@sct.gob.mx',
    extension: '48517',
  },
];

function OrganigramaPage() {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom(z => Math.min(z + 0.2, 3));
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
        <div
          className="organigrama-zoom-target"
          style={{ transform: `scale(${zoom})`, transformOrigin: 'top center' }}
        >
          <img
            className="organigrama-image"
            src={organigrama}
            alt="Organigrama institucional"
          />
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
