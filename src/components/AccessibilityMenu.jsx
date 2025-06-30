import React from 'react';
import { useAccessibility } from '../context/AccessibilityContext';
import ScreenReader from './ScreenReader';
import './AccessibilityMenu.css';

function AccessibilityMenu() {
  const {
    grayscale, setGrayscale,
    highContrast, setHighContrast,
    bigCursor, setBigCursor,
    dyslexiaFont, setDyslexiaFont,
    lineSpacing, setLineSpacing,
    readingMask, setReadingMask,
    readingGuide, setReadingGuide,
    fontSize, increaseFontSize, decreaseFontSize,
    resetAll
  } = useAccessibility();

  return (
    <aside className="accessibility-menu">
      <div className="font-size-controls">
        <button
          className="font-size-btn"
          onClick={decreaseFontSize}
          aria-label="Disminuir tamaño de letra"
        >
          A-
        </button>
        <button
          className="font-size-btn"
          onClick={increaseFontSize}
          aria-label="Aumentar tamaño de letra"
        >
          A+
        </button>
      </div>
      {/* Lector de pantalla */}
      <ScreenReader />
      <button className="accessibility-btn reset" onClick={resetAll}>
        <span className="accessibility-btn-icon">
          {/* SVG de restablecer */}
          <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6a6 6 0 1 1-6-6z"/></svg>
        </span>
        <span className="accessibility-btn-text">Restablecer</span>
      </button>
      <button className="accessibility-btn" onClick={() => setGrayscale(g => !g)}>
        <span className="accessibility-btn-icon">
          {/* SVG escala de grises */}
          <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fff"/><path d="M12 2a10 10 0 0 1 0 20V2z" fill="#b48d5a"/></svg>
        </span>
        <span className="accessibility-btn-text">Cambiar escala de grises</span>
      </button>
      <button className="accessibility-btn" onClick={() => setHighContrast(h => !h)}>
        <span className="accessibility-btn-icon">
          {/* SVG contraste */}
          <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fff"/><path d="M12 2a10 10 0 0 1 0 20V2z" fill="#8a0047"/></svg>
        </span>
        <span className="accessibility-btn-text">Cambiar el contraste de color</span>
      </button>
      <button className="accessibility-btn" onClick={() => setBigCursor(b => !b)}>
        <span className="accessibility-btn-icon">
          {/* SVG cursor */}
          <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24"><path d="M3 2l17 7-7 3-3 7z" fill="#fff" stroke="#8a0047" strokeWidth="2"/></svg>
        </span>
        <span className="accessibility-btn-text">Cambiar tamaño de cursor</span>
      </button>
      <button className="accessibility-btn" onClick={() => setReadingMask(m => !m)}>
        <span className="accessibility-btn-icon">
          {/* SVG máscara */}
          <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="4" rx="2" fill="#fff" stroke="#8a0047" strokeWidth="2"/></svg>
        </span>
        <span className="accessibility-btn-text">Mascara de lectura</span>
      </button>
      <button className="accessibility-btn" onClick={() => setReadingGuide(g => !g)}>
        <span className="accessibility-btn-icon">
          {/* SVG guía */}
          <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24"><rect x="4" y="12" width="16" height="2" rx="1" fill="#fff" stroke="#8a0047" strokeWidth="2"/></svg>
        </span>
        <span className="accessibility-btn-text">Guía de Lectura</span>
      </button>
      <button className="accessibility-btn" onClick={() => setDyslexiaFont(f => !f)}>
        <span className="accessibility-btn-icon">
          {/* SVG dislexia */}
          <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24"><text x="6" y="20" fontSize="18" fontWeight="bold" fill="#8a0047">I</text></svg>
        </span>
        <span className="accessibility-btn-text">Cambio de tipografía dislexia</span>
      </button>
      <button className="accessibility-btn" onClick={() => setLineSpacing(l => !l)}>
        <span className="accessibility-btn-icon">
          {/* SVG espaciado */}
          <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24"><rect x="6" y="8" width="12" height="2" fill="#8a0047"/><rect x="6" y="14" width="12" height="2" fill="#8a0047"/></svg>
        </span>
        <span className="accessibility-btn-text">Espaciado vertical</span>
      </button>
    </aside>
  );
}
export default AccessibilityMenu;