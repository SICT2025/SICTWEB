import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ConsultaEstatusQueja = () => {
  const [folio, setFolio] = useState('');
  const [estatus, setEstatus] = useState(null);
  const [error, setError] = useState(null);

  const handleBuscar = async (e) => {
    e.preventDefault();
    setEstatus(null);
    setError(null);
    try {

      const res = await fetch(`https://api-quejas.onrender.com/api/quejas/${folio}`);
      if (res.ok) {
        const data = await res.json();
        setEstatus(data.estatus);
      } else {
        setError('No se encontró ninguna queja con ese folio.');
      }
    } catch {
      setError('Error al conectar con el servidor.');
    }
  };

  return (
    <div style={{
      maxWidth: 420,
      margin: '40px auto',
      background: '#fff',
      borderRadius: 12,
      boxShadow: '0 4px 24px rgba(138,0,71,0.10)',
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h2 style={{ color: '#8a0047', marginBottom: 16, fontWeight: 700 }}>Consulta el Estatus de tu Queja</h2>
      <form onSubmit={handleBuscar} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <label style={{ fontWeight: 500, color: '#333' }}>
          Ingresa tu folio:
          <input
            type="text"
            value={folio}
            onChange={e => setFolio(e.target.value)}
            placeholder="Ejemplo: QJ-123456789"
            required
            style={{
              marginTop: 8,
              width: '100%',
              padding: '10px 12px',
              borderRadius: 6,
              border: '1px solid #ccc',
              fontSize: '1rem'
            }}
          />
        </label>
        <button
          type="submit"
          style={{
            background: '#8a0047',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            padding: '10px 0',
            fontWeight: 'bold',
            fontSize: '1rem',
            cursor: 'pointer',
            marginTop: 8
          }}
        >
          Buscar estatus
        </button>
      </form>
      {estatus && (
        <div style={{
          marginTop: 24,
          background: '#f3e5ec',
          borderRadius: 8,
          padding: '16px 20px',
          color: '#222',
          fontWeight: 500,
          width: '100%',
          textAlign: 'center',
          border: '1px solid #8a0047'
        }}>
          <span style={{ color: '#8a0047' }}>Estatus:</span> {estatus}
        </div>
      )}
      {error && (
        <div style={{
          marginTop: 24,
          background: '#ffeaea',
          borderRadius: 8,
          padding: '12px 20px',
          color: '#b00020',
          fontWeight: 500,
          width: '100%',
          textAlign: 'center',
          border: '1px solid #b00020'
        }}>
          {error}
        </div>
      )}
      <Link
        to="/buzon-quejas"
        style={{
          marginTop: 32,
          background: '#fff',
          color: '#8a0047',
          border: '2px solid #8a0047',
          borderRadius: 6,
          padding: '10px 24px',
          fontWeight: 'bold',
          textDecoration: 'none',
          transition: 'background 0.2s, color 0.2s'
        }}
        onMouseOver={e => { e.target.style.background = '#8a0047'; e.target.style.color = '#fff'; }}
        onMouseOut={e => { e.target.style.background = '#fff'; e.target.style.color = '#8a0047'; }}
      >
        ← Regresar al Buzón de Quejas
      </Link>
    </div>
  );
};

export default ConsultaEstatusQueja;