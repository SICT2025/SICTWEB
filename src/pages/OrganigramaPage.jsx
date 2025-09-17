
import React, { useState } from 'react';
import '../assets/styles/pages/OrganigramaPage.css';


function OrganigramaPage() {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom(z => Math.min(z + 0.2, 5));
  const handleZoomOut = () => setZoom(z => Math.max(z - 0.2, 0.5));
  const handleReset = () => setZoom(1);

  return (
    <div className="organigrama-container">
      <h1 className="organigrama-title">Organigrama</h1>
      <hr className="organigrama-divider" />

      <div className="organigrama-zoom-buttons">
        <button onClick={handleZoomOut}>-</button>
        <button onClick={handleReset}>Restablecer</button>
        <button onClick={handleZoomIn}>+</button>
      </div>

      <div className="organigrama-content">
        <div className="iframe-container" style={{ transform: `scale(${zoom})`, transformOrigin: 'top left' }}>
          <iframe
            className="organigrama-slides-iframe"
            
src="https://docs.google.com/presentation/d/e/2PACX-1vTYKDwrYFV-LTEIPVOnxgEQi25Eu5Joapm-sdTxWhT91mqDClW-JVhtNmXMQ6MyKMBfDbb3Kzk5hcSN/embed?start=true&loop=true&delayms=60000&rm=minimal" frameborder="0" 
            width="960"
            height="535"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            title="Organigrama institucional"
          ></iframe>
        </div>
          <a
           href="https://drive.google.com/uc?export=download&id=1TEKqETmn-W1wd976SopklXMqdm_94pE_"
          target="_blank"
          rel="noopener noreferrer"
         className="buzon-button"
        style={{ marginTop: 16 }}
            >
          Descargar Contactos de los Departamentos
          </a>
      </div>

    
    </div>
  );
}

export default OrganigramaPage;
