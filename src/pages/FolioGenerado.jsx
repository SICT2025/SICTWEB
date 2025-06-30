import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function FolioGenerado() {
  const location = useLocation();
  const folio = location.state?.folio;

  return (
    <div style={{
      maxWidth: 500,
      margin: '40px auto',
      background: '#fff',
      borderRadius: 12,
      boxShadow: '0 4px 24px rgba(138,0,71,0.10)',
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h2 style={{ color: '#8a0047', marginBottom: 16, fontWeight: 700 }}>¡Queja enviada correctamente!</h2>
      {folio ? (
        <>
          <p style={{ fontSize: '1.1rem', marginBottom: 16 }}>
            Tu folio es:
          </p>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#8a0047',
            background: '#f3e5ec',
            padding: '12px 24px',
            borderRadius: 8,
            marginBottom: 24
          }}>
            {folio}
          </div>
          <ol style={{ textAlign: 'left', marginBottom: 24 }}>
            <li>Guarda tu folio en un lugar seguro.</li>
            <li>Para consultar el estatus de tu queja, ve a la página de <Link to="/consulta-estatus-queja" style={{ color: '#8a0047', textDecoration: 'underline' }}>Consulta de Estatus</Link>.</li>
            <li>Ingresa tu folio en el campo correspondiente y haz clic en "Buscar estatus".</li>
          </ol>
        </>
      ) : (
        <p>No se encontró el folio. Por favor, vuelve a enviar tu queja.</p>
      )}
      <Link
        to="/"
        style={{
          marginTop: 16,
          background: '#fff',
          color: '#8a0047',
          border: '2px solid #8a0047',
          borderRadius: 6,
          padding: '10px 24px',
          fontWeight: 'bold',
          textDecoration: 'none'
        }}
      >
        Ir al inicio
      </Link>
    </div>
  );
}