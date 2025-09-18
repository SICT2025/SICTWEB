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
      <h2>Paridad de Género</h2>

      <p style={{ marginBottom: "15px", fontSize: "14px", lineHeight: "1.5" }}>
        De acuerdo a la norma <strong>NMX-R-025-SCFI-2015</strong>, tomando en cuenta la
        paridad de género, queremos conocer a qué público llega nuestra página.
        <br />
        Por favor responde esta pequeña encuesta con el género que corresponda a tu persona:
      </p>

      {!enviado ? (
        <form onSubmit={handleSubmit}>
          <label>
            <input type="radio" name="genero" value="masculino" required /> Masculino
          </label>
          <br />
          <label>
            <input type="radio" name="genero" value="femenino" required /> Femenino
          </label>
          <br />
          <label>
            <input type="radio" name="genero" value="no_binario" required /> No binario
          </label>
          <br />
          <label>
            <input type="radio" name="genero" value="no_estoy_seguro" required /> No estoy seguro
          </label>
          <br />
          <button type="submit" style={{ marginTop: "15px" }}>
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
