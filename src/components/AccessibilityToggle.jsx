import React, { useState } from 'react';
import AccessibilityMenu from './AccessibilityMenu';

function AccessibilityToggle() {
  const [open, setOpen] = useState(false);
  const [hovering, setHovering] = useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
    // No cerramos aquí automáticamente
  };

  const handleButtonClick = () => {
    setOpen(prev => !prev);
  };

  const handleActionSelected = () => {
    setOpen(false); // Cierra el menú al seleccionar una opción
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <button
        className="accessibility-toggle"
        aria-label="Opciones de accesibilidad"
        onClick={handleButtonClick}
      >
         {/* Ícono de accesibilidad SVG */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="#fff">
          <circle cx="16" cy="16" r="16" fill="#b48d5a"/>
          <path d="M16 7a2 2 0 110 4 2 2 0 010-4zm-7 5a1 1 0 011-1h12a1 1 0 011 1v1a2 2 0 01-2 2h-2v8h2a1 1 0 110 2h-8a1 1 0 110-2h2v-8h-2a2 2 0 01-2-2v-1z" fill="#fff"/>
        </svg>
      </button>
      {open && <AccessibilityMenu onAction={handleActionSelected} />}
    </div>
  );
}

export default AccessibilityToggle;
