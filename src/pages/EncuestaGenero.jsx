import React, { useState } from "react";
 
const EncuestaGenero = () => {
  const [enviado, setEnviado] = useState(false);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const genero = e.target.genero.value;
 
    // Enviar evento personalizado a Google Analytics
    if (window.gtag) {
      window.gtag("event", "encuesta_genero", {
        respuesta: genero,
      });
    }
 
    setEnviado(true);
  };
 
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Encuesta de Género</h2>
      {!enviado ? (
        <form onSubmit={handleSubmit}>
          <label>
            <input type="radio" name="genero" value="hombre" required /> Hombre
          </label>
          <br />
          <label>
            <input type="radio" name="genero" value="mujer" required /> Mujer
          </label>
          <br />
          <button type="submit" style={{ marginTop: "10px" }}>
            Enviar
          </button>
        </form>
      ) : (
        <p>¡Gracias por participar!</p>
      )}
    </div>
  );
};
 
export default EncuestaGenero;