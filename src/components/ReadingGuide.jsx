import React, { useEffect, useState } from 'react';

function ReadingGuide({ active }) {
  const [y, setY] = useState(200);

  useEffect(() => {
    if (!active) return;

    const handleMouseMove = (e) => setY(e.clientY);

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [active]);

  if (!active) return null;

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        width: '100vw',
        top: y,
        height: 2,
        background: '#6d0033',
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'top 0.05s'
      }}
      aria-hidden="true"
    />
  );
}

export default ReadingGuide;