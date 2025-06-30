import React, { useEffect, useState } from 'react';

function ReadingMask({ active }) {
  const [position, setPosition] = useState({ top: 200, height: 60 });

  useEffect(() => {
    if (!active) return;

    const handleMouseMove = (e) => {
      setPosition(pos => ({
        ...pos,
        top: e.clientY - pos.height / 2
      }));
    };

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
        top: position.top,
        height: position.height,
        background: 'rgba(255,255,0,0.15)',
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'top 0.05s'
      }}
      aria-hidden="true"
    />
  );
}

export default ReadingMask;