import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import AccessibilityToggle from './AccessibilityToggle';

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detecta si estamos en móvil
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Cierra el menú al cambiar de ruta
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(false);
  }, [window.location.pathname]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (e) => {
    if (isMobile) {
      e.preventDefault();
      setOpenDropdown(!openDropdown);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Botón hamburguesa solo en móviles */}
        <button 
          className="navbar-toggle" 
          onClick={toggleMobileMenu}
          aria-label="Menú"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        <ul className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}> 
          <li className="navbar-accessibility">
            <AccessibilityToggle />
          </li>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/organigrama">Organigrama</Link></li>
          <li><Link to="/mural">Mural</Link></li>
          <li><Link to="/mapa">Mapa</Link></li>
          <li><Link to="/comite-etica">Comite de Etica</Link></li>
          <li><Link to="/buzon-quejas">Buzón de Quejas</Link></li>
          <li
            className={`navbar-dropdown ${openDropdown ? 'active' : ''}`}
            onMouseEnter={!isMobile ? () => setOpenDropdown(true) : undefined}
            onMouseLeave={!isMobile ? () => setOpenDropdown(false) : undefined}
          >
            <button 
              className="navbar-dropdown-btn" 
              onClick={toggleDropdown}
            >
              Departamentos <span style={{fontSize: '1.1em'}}>▼</span>
            </button>
            {(openDropdown || (!isMobile && openDropdown)) && (
              <ul className="navbar-dropdown-list">
                <li><Link to="/juridico">Jurídico</Link></li>
                <li><Link to="/medicina">Medicina</Link></li>
                <li><Link to="/subdireccion-obras">Subdirección de Obras</Link></li>
                <li><Link to="/serv-tecnicos">Servicios Técnicos</Link></li>
                <li><Link to="/subtransporte">Subdirección de Transporte</Link></li>
                <li><Link to="/subcomunicaciones">Subdirección de Comunicaciones</Link></li>
                <li><Link to="/subadministracion">Subdirección de Administración</Link></li>
                <li><Link to="/comunicacion-social">Comunicación Social</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
