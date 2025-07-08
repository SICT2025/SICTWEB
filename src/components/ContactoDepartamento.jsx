import React, { useState } from 'react';

function ContactoDepartamento({ titulo, contacto }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="contacto-departamento">
      <button onClick={() => setVisible(!visible)} className="contacto-toggle">
        {visible ? 'Ocultar' : 'Mostrar'} {titulo}
      </button>
      {visible && (
        <div className="contacto-detalle">
          <p><strong>Nombre:</strong> {contacto.nombre}</p>
          <p><strong>Correo:</strong> {contacto.correo}</p>
          <p><strong>Extensión:</strong> {contacto.extension}</p>
        </div>
      )}
    </div>
  );
}

export default ContactoDepartamento;
