import React, { useState } from "react";
import EncuestaGenero from "../pages/EncuestaGenero";

const ModalEncuestaGenero = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
      background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999
    }}>
      <div style={{
        background: "#fff", padding: 24, borderRadius: 8, minWidth: 320, boxShadow: "0 2px 8px #0003"
      }}>
        <button onClick={onClose} style={{ float: "right", fontSize: 18, border: "none", background: "none", cursor: "pointer" }}>×</button>
        <EncuestaGenero />
      </div>
    </div>
  );
};

export default ModalEncuestaGenero;