import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import AccessibilityToggle from './AccessibilityToggle';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <AccessibilityToggle />
        </li>
        <li><Link to="/juridico">Jurídico</Link></li>
        <li><Link to="/mapa">Mapa</Link></li>
        <li><Link to="/medicina">Medicina</Link></li>
        <li><Link to="/subdireccion-obras">Subdirección de Obras</Link></li>
        <li
          className="navbar-dropdown"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button className="navbar-dropdown-btn">
            Más opciones <span style={{fontSize: '1.1em'}}>▼</span>
          </button>
          {open && (
            <ul className="navbar-dropdown-list">
              <li><Link to="/serv-tecnicos">Servicios Técnicos</Link></li>
              <li><Link to="/subtransporte">Subdirección de Transporte</Link></li>
              <li><Link to="/subcomunicaciones">Subdirección de Comunicaciones</Link></li>
              <li><Link to="/subadministracion">Subdirección de Administración</Link></li>
              <li><Link to="/organigrama">Organigrama</Link></li>
              <Link to="/comunicacion-social">Comunicación Social</Link>
              <li><Link to="/buzon-quejas">Buzón de Quejas y Sugerencias</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;