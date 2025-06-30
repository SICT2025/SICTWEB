import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles/pages/quejas.css';

export default function BuzonQuejas() {
  const [tipo, setTipo] = useState('laboral');
  const [texto, setTexto] = useState('');
  const [enviando, setEnviando] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    try {
      const res = await fetch('http://localhost:3001/api/quejas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tipo, texto })
      });
      const data = await res.json();
      if (data.folio) {
        navigate('/folio-generado', { state: { folio: data.folio } });
      } else {
        alert('Error al enviar la queja. Intenta de nuevo.');
      }
    } catch {
      alert('Error al conectar con el servidor.');
    }
    setEnviando(false);
  };

  return (
    <div className="buzon-root"
      style={{
        maxWidth: 1100,
        margin: '40px auto',
        padding: 24,
        display: 'flex',
        gap: 48,
        alignItems: 'flex-start',
        background: '#fff',
        borderRadius: 18,
        boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10), 0 1.5px 6px 0 rgba(0,0,0,0.08)',
        transition: 'box-shadow 0.2s',
      }}>
      {/* Columna izquierda: Descripción */}
      <div style={{ flex: 1, minWidth: 320 }}>
        <h1 className="buzon-title">Buzón de Quejas</h1>
        <p className="buzon-body">
          En este espacio puedes expresar tus inquietudes y reportar situaciones que afecten tu bienestar laboral.
        </p>
        <h2 className="buzon-subtitle">Quejas Laborales</h2>
        <p className="buzon-body">
          Si tienes algún problema relacionado con tus condiciones de trabajo, ambiente laboral, trato de superiores o compañeros, puedes presentar tu queja de manera confidencial. Todas las quejas serán atendidas con seriedad y respeto.
        </p>
        <h2 className="buzon-subtitle">Quejas por Acoso Sexual</h2>
        <p className="buzon-body">
          Si has sido víctima o testigo de acoso sexual en el entorno laboral, este buzón está disponible para que puedas reportarlo de forma segura y confidencial. Tu denuncia será tratada con la máxima discreción y se tomarán las medidas necesarias para protegerte.
        </p>
        <div style={{ marginTop: 32 }}>
          <b>¿Ya tienes un folio?</b>{' '}
          <Link to="/consulta-estatus-queja" style={{ color: '#8a0047', textDecoration: 'underline' }}>
            Consulta el estatus de tu queja aquí
          </Link>
        </div>
      </div>
      {/* Columna derecha: Formulario */}
      <form
        onSubmit={handleSubmit}
        style={{
          flex: 1,
          minWidth: 320,
          background: 'transparent',
          display: 'flex',
          flexDirection: 'column',
          gap: 16
        }}
      >
        <label className="buzon-body">
          Tipo de queja:
          <select
            value={tipo}
            onChange={e => setTipo(e.target.value)}
            style={{ marginLeft: 8, marginTop: 4 }}
          >
            <option value="laboral">Laboral</option>
            <option value="acoso">Acoso sexual</option>
          </select>
        </label>
        <label className="buzon-body">
          Descripción:
          <textarea
            rows={7}
            value={texto}
            onChange={e => setTexto(e.target.value)}
            style={{
              width: '100%',
              marginTop: 8,
              resize: 'vertical',
              fontFamily: 'inherit',
              fontSize: '1rem'
            }}
            placeholder="Describe tu queja aquí..."
            required
          />
        </label>
        <button
          type="submit"
          disabled={enviando}
          style={{
            marginTop: 8,
            background: '#8a0047',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            padding: '10px 20px',
            fontWeight: 'bold',
            cursor: enviando ? 'not-allowed' : 'pointer',
            alignSelf: 'flex-end'
          }}
        >
          {enviando ? 'Enviando...' : 'Enviar queja'}
        </button>
      </form>
    </div>
  );
}