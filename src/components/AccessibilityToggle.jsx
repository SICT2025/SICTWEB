import React, { useState, useEffect, useRef } from 'react';
import AccessibilityMenu from './AccessibilityMenu';

function AccessibilityToggle() {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const containerRef = useRef(null);

  // Detectar si es escritorio o móvil/tableta
  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const updateDeviceType = () => setIsDesktop(mediaQuery.matches);
    updateDeviceType();

    mediaQuery.addEventListener('change', updateDeviceType);
    return () => mediaQuery.removeEventListener('change', updateDeviceType);
  }, []);

  const handleMouseEnter = () => {
    if (isDesktop) setOpen(true);
  };

  const handleMouseLeave = () => {
    if (isDesktop) setOpen(false);
  };

  const handleClick = () => {
    if (!isDesktop) setOpen(prev => !prev);
  };

  return (
    <div
      className="accessibility-toggle-wrapper"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="accessibility-toggle"
        aria-label="Opciones de accesibilidad"
        onClick={handleClick}
      >
        {/* Ícono de accesibilidad SVG */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="#fff">
          <circle cx="16" cy="16" r="16" fill="#b48d5a" />
          <path d="M16 7a2 2 0 110 4 2 2 0 010-4zm-7 5a1 1 0 011-1h12a1 1 0 011 1v1a2 2 0 01-2 2h-2v8h2a1 1 0 110 2h-8a1 1 0 110-2h2v-8h-2a2 2 0 01-2-2v-1z" fill="#fff" />
        </svg>
      </button>

      {open && <AccessibilityMenu />}
    </div>
  );
}

export default AccessibilityToggle;
