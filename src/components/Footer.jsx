import React from 'react';
import './Footer.css';
import escudo from '../assets/imagenes/escudo-gob.png';
import footerPattern from '../assets/imagenes/escudogob.png'; // Asegúrate de que la ruta sea correcta
 
function Footer() {
  return (
    <footer className="footer-gob">
      <div className="footer-content">
        <div className="footer-col logo-col">
          <img src={escudo} alt="Escudo Gobierno de México" className="footer-escudo" />
          <div className="footer-gob-mx"></div>
        </div>
        <div className="footer-col">
          <h4>Secretaría de Infraestructura, Comunicaciones y Transportes </h4>
          <p className="footer-desc">
            Modulo Unico de información y atención al cliente del Centro SICT Guanajuato. <a href="#"></a>
          </p>
          <ul>
            <li><a href="#">2025 Todos los Derechos Reservados.</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contacto</h4>
          <p>Dudas e información a<br /><a href="mailto:buzon_ucg@sict.gob.mx">buzon_ucg@sict.gob.mx</a></p>
          <div className="footer-social"></div>
        </div>
      </div>
      {/* Patrón decorativo personalizado */}
      <div
        className="footer-pattern"
        style={{
          width: '100%',
          height: '48px',
          background: `url(${footerPattern}) repeat-x center`,
          backgroundSize: 'auto 48px',
          marginTop: 0,
          borderTop: 0,
          padding: 0
        }}
      ></div>
    </footer>
  );
}
 
export default Footer;