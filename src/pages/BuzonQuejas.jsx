import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/pages/quejas.css';
import jsPDF from 'jspdf';
import logo from '../assets/imagenes/img1.png'; // Cambia por la ruta de tu logo real

export default function BuzonQuejas() {
  const [tipo, setTipo] = useState('laboral');
  const [texto, setTexto] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [folio, setFolio] = useState(null);
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setMensaje('');

    try {
      const res = await fetch('https://api-quejas.onrender.com/api/quejas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tipo, texto })
      });

      if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);

      const data = await res.json();

      if (data.folio) {
        setFolio(data.folio);
        setMensaje('✅ Tu queja fue enviada correctamente.');
        setTexto('');
      } else {
        setMensaje('⚠ La queja fue enviada pero no se recibió un folio.');
      }
    } catch (error) {
      console.error(error);
      setMensaje('❌ No se pudo conectar con el servidor. Intenta más tarde.');
    }

    setEnviando(false);
  };

  const handleDescargarPDF = () => {
  if (!folio) return;

  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margen = 20;
  const headerHeight = 50;

    doc.setFillColor('#e6d194'); // dorado claro
    doc.rect(0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight(), 'F');

  // Cargar logo y mantener proporciones
  const imgWidth = 50; // ancho máximo
  const imgProps = doc.getImageProperties(logo);
  const imgHeight = (imgProps.height * imgWidth) / imgProps.width; // altura proporcional
  doc.addImage(logo, 'PNG', margen, (headerHeight - imgHeight) / 2, imgWidth, imgHeight);

  // Título centrado
  doc.setFontSize(20);
  doc.setTextColor('#9b2247');
  doc.setFont('helvetica', 'bold');
  doc.text('Buzón de Quejas', pageWidth / 2, 30, { align: 'center' });

  // Subtítulo
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  doc.text('Confirmación de Folio', pageWidth / 2, headerHeight - 5, { align: 'center' });

  // Línea divisoria
  doc.setDrawColor('#9b2247');
  doc.setLineWidth(0.5);
  doc.line(margen, headerHeight + 2, pageWidth - margen, headerHeight + 2);

  // Folio centrado
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text(`Folio generado: ${folio}`, pageWidth / 2, headerHeight + 30, { align: 'center' });

  // Mensaje centrado
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text(
    'Por favor, guarda este documento. El folio es único y será necesario para consultar el estatus de tu queja.',
    pageWidth / 2,
    headerHeight + 50,
    { maxWidth: pageWidth - margen * 2, align: 'center' }
  );

  doc.text(
    'La información que proporciones será tratada con estricta confidencialidad.',
    pageWidth / 2,
    headerHeight + 65,
    { maxWidth: pageWidth - margen * 2, align: 'center' }
  );

    // Pie de página
    doc.setFontSize(10);
    doc.setTextColor(120, 120, 120);
    doc.text('Sistema de Buzón de Quejas - © 2025', pageWidth / 2, 280, { align: 'center' });

    // Abrir en nueva pestaña
    window.open(doc.output('bloburl'), '_blank');

    // Descargar automáticamente
    doc.save(`folio-${folio}.pdf`);
  };

  return (
    <div className="buzon-root">
      <div className="buzon-container">
        <div className="buzon-info">
          <h1 className="buzon-title">Buzón de Quejas</h1>
          <p className="buzon-body">
            En este espacio puedes expresar tus inquietudes y reportar situaciones que afecten tu bienestar laboral.
          </p>
          <p className="buzon-body">
            Para poder tener un mejor manejo de tu queja favor de proporcionar tus datos de contacto (nombre, departamento, correo o número de teléfono). Tu información será tratada con la máxima confidencialidad y respeto.
          </p>
          <h2 className="buzon-subtitle">Quejas Laborales</h2>
          <p className="buzon-body">
            Si tienes algún problema relacionado con tus condiciones de trabajo, ambiente laboral, trato de superiores o compañeros, puedes presentar tu queja de manera confidencial.
          </p>
          <h2 className="buzon-subtitle">Quejas por Acoso</h2>
          <p className="buzon-body">
            Si has sido víctima o testigo de acoso sexual en el entorno laboral, este buzón está disponible para que puedas reportarlo de forma segura y confidencial.
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
                onChange={(e) => setTipo(e.target.value)}
                className="form-select"
                disabled={enviando}
              >
                <option value="laboral">Laboral</option>
                <option value="acoso">Acoso</option>
              </select>
            </label>
          </div>

          <div className="form-group">
            <label className="buzon-body">
              Descripción:
              <textarea
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                className="form-textarea"
                placeholder="Describe tu queja aquí..."
                required
                disabled={enviando}
              />
            </label>
          </div>

          <button type="submit" disabled={enviando} className="buzon-button">
            {enviando ? 'Enviando...' : 'Enviar queja'}
          </button>

          {mensaje && <p style={{ marginTop: 16 }}>{mensaje}</p>}

          {folio && (
            <div style={{ marginTop: 16 }}>
              <p><strong>Folio generado:</strong> {folio}</p>
              <button type="button" onClick={handleDescargarPDF} className="buzon-button" style={{ marginRight: 10 }}>
                Descargar PDF
              </button>
              <Link to="/consulta-estatus-queja" className="buzon-button">
                Consultar estatus
              </Link>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
