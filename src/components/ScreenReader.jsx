import React, { useState, useEffect } from 'react';

function speak(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new window.SpeechSynthesisUtterance(text);
    utterance.lang = 'es-MX';
    window.speechSynthesis.speak(utterance);
  }
}

export default function ScreenReader() {
  const [hoverMode, setHoverMode] = useState(false);

  useEffect(() => {
    if (!hoverMode) return;

    function handleMouseOver(e) {
      // Evita leer elementos del menú de accesibilidad
      if (e.target.closest('.accessibility-menu')) return;
      const text = e.target.innerText || e.target.alt || '';
      if (text && text.trim().length > 0) {
        speak(text.trim());
      }
    }

    document.addEventListener('mouseover', handleMouseOver);
    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      window.speechSynthesis.cancel();
    };
  }, [hoverMode]);

  return (
    <div className="screen-reader-controls">
      <button
        onClick={() => setHoverMode(h => !h)}
        style={{ background: hoverMode ? '#b71c50' : undefined, color: hoverMode ? '#fff' : undefined }}
        aria-pressed={hoverMode}
      >
        {hoverMode ? 'Lector activo (pasa el cursor)' : 'Activar lector por cursor'}
      </button>
      <button onClick={() => { setHoverMode(false); window.speechSynthesis.cancel(); }}>
        Detener lectura
      </button>
    </div>
  );
}