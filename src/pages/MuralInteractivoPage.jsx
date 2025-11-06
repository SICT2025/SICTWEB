import React, { useState, useEffect } from 'react';
import '../assets/styles/pages/MuralInteractivoPage.css';

function MuralInteractivoPage() {
  const [comentarios, setComentarios] = useState([]);
  const [mensaje, setMensaje] = useState('');
  const API_URL = "https://script.google.com/macros/s/AKfycbwEEu41ku3ZAnD9CmVLqbslT17Axpb6YmZ5GeDp0vHHSx6FyvsySllkq10AXUpMQ0Nu/exec"; 

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setComentarios(data.reverse())) 
      .catch(err => console.error("Error al cargar comentarios:", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mensaje.trim() === '') return;
    const nuevoComentario = {
      id: Date.now(),
      mensaje,
      fecha: new Date().toLocaleString(),
    };
    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(nuevoComentario),
    })
      .then(res => res.json())
      .then(() => {
        setComentarios([nuevoComentario, ...comentarios]);
        setMensaje('');
      })
      .catch(err => console.error("Error al guardar comentario:", err));
  };

  return (
    <div className="mural-page">
      <div className="iframe-container">
        <iframe
src="https://docs.google.com/presentation/d/e/2PACX-1vQyi38jmA4VrAAiAmQvlU9-5hVtR9eweyfGNIlFgunW44wCuJnzn45yoTwHHtIxcWOfqeVSYSH6odBH/embed?start=true&loop=true&delayms=10000&rm=minimal" 
	 frameBorder="0"
        width="960" 
	height="569" 
	allowFullscreen  
	mozallowfullscreen="true" 
	webkitallowfullscreen="true"
	></iframe>
      </div>

      {/* Sección de comentarios */}
      <div className="comentarios-section">
        <h2>Deja tu comentario o felicitación</h2>
        <form onSubmit={handleSubmit} className="comentarios-form">
          <textarea
            placeholder="Escribe tu comentario..."
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            style={{ marginBottom: 8 }}
          ></textarea>
          <button type="submit">Enviar</button>
        </form>

        <div className="comentarios-list">
          {comentarios.length === 0 ? (
            <p>No hay comentarios todavía. ¡Sé el primero en comentar!</p>
          ) : (
            comentarios.map((c) => (
              <div key={c.id} className="comentario">
                <p><em>{c.fecha}</em></p>
                <p>{c.mensaje}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default MuralInteractivoPage;
