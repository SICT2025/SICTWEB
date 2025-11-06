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
  };

  const handleButtonClick = () => {
    setOpen(prev => !prev);
  };

  const handleActionSelected = () => {
    setOpen(false); 
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
        style={{
          background: '#b48d5a',
          borderRadius: '50%',
          width: 40,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          padding: 0
        }}
      >
        {/* Ícono de accesibilidad: silla de ruedas */}
        <img
          src={require('../assets/imagenes/accesibilidad-silla-ruedas.png')}
          alt="Accesibilidad"
          style={{ width: 28, height: 28, objectFit: 'contain', filter: 'invert(1)' }}
        />
      </button>
      {open && <AccessibilityMenu onAction={handleActionSelected} />}
    </div>
  );
}

export default AccessibilityToggle;
