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
      const res = await fetch('https://api-quejas.onrender.com/api/quejas', {
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
    <div className="buzon-root">
      
      <div className="buzon-container">
       
        <div className="buzon-info">
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
          
          <div className="buzon-consulta">
            <b>¿Ya tienes un folio?</b>{' '}
            <Link to="/consulta-estatus-queja" className="buzon-link">
              Consulta el estatus de tu queja aquí
            </Link>
          </div>
        </div>
        
        
        <form onSubmit={handleSubmit} className="buzon-form">
          <div className="form-group">
            <label className="buzon-body">
              Tipo de queja:
              <select
                value={tipo}
                onChange={e => setTipo(e.target.value)}
                className="form-select"
                disabled={enviando}
              >
                <option value="laboral">Laboral</option>
                <option value="acoso">Acoso sexual</option>
              </select>
            </label>
          </div>
          
          <div className="form-group">
            <label className="buzon-body">
              Descripción:
              <textarea
                value={texto}
                onChange={e => setTexto(e.target.value)}
                className="form-textarea"
                placeholder="Describe tu queja aquí..."
                required
                disabled={enviando}
              />
            </label>
          </div>
          
          <button
            type="submit"
            disabled={enviando}
            className="buzon-button"
          >
            {enviando ? 'Enviando...' : 'Enviar queja'}
          </button>
        </form>
      </div>
    </div>
  );
}