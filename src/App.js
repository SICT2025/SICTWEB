import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import JuridicoPage from './pages/JuridicoPage';
import MapaPage from './pages/MapaPage';
import SubdireccionObrasPage from './pages/SubdireccionObrasPage';
import ServTecnPage from './pages/ServTecnPage';
import SubTransportePage from './pages/SubTransportePage';
import SubComunicacionesPage from './pages/SubComunicacionesPage';
import SubAdmPage from './pages/SubAdmPage';
import OrganigramaPage from './pages/OrganigramaPage';
import UnidadLaboratoriosPage from './pages/UnidadLaboratoriosPage';
import UnidadEstudiosPage from './pages/UnidadEstudiosPage';
import UnidadVialidadProyectosPage from './pages/UnidadVialidadProyectosPage';
import BuzonQuejas from './pages/BuzonQuejas';
import ComiteEtica from './pages/EticaPage';
import ConsultaEstatusQueja from './pages/ConsultaEstatusQueja';
import FolioGenerado from './pages/FolioGenerado';
import MuralInteractivoPage from './pages/MuralInteractivoPage';
import EncuestaGenero from "./pages/EncuestaGenero";
import { useAccessibility } from './context/AccessibilityContext';
import './App.css';
import logos from './assets/imagenes/logosss.png'; // Aqui es donde se modifica el logo
import ReadingMask from './components/ReadingMask';
import ReadingGuide from './components/ReadingGuide';
import ModalEncuestaGenero from './components/ModalEncuestaGenero';
import DireccionGeneral from './pages/DireccionGeneralPage';
 
// Inicializa Google Analytics solo en producción
const initGA = () => {
  if (process.env.NODE_ENV === 'production') {
    if (!window.gtag) {
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'G-HXPVCHG0F2');
      console.log("GA inicializado en producción");
    }
  }
};
 
// Custom hook para registrar page views SPA (usa useLocation internamente)
function usePageViews() {
  const location = useLocation();
 
  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
      });
      console.log("Page view registrado:", location.pathname);
    }
  }, [location]);
}
 
function AppContent() {
  const { readingMask, readingGuide } = useAccessibility();
 
  // Llamada al custom hook — debe ejecutarse dentro de un componente que esté dentro de <Router>
  usePageViews();
 
  // --- Moved hooks inside the component (fix ESLint errors) ---
  const [showEncuesta, setShowEncuesta] = useState(false);
 
  useEffect(() => {
    // Mostrar encuesta/modal al montar (ajusta la lógica si quieres mostrarlo condicionalmente)
    setShowEncuesta(true);
  }, []);
  // ---------------------------------------------------------
 
  return (
    <>
      <Navbar />
      <div
        style={{
          background: '#e6d194',
          padding: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden'
        }}
      >
        <img
          src={logos}
          alt="logos"
          className="header-logos-comunicaciones"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            objectFit: 'contain'
          }}
        />
      </div>
 
      <div className="main-content">
        <ReadingMask active={readingMask} />
        <ReadingGuide active={readingGuide} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/juridico" element={<JuridicoPage />} />
          <Route path="/direcciongeneral" element={<DireccionGeneral />} />
          <Route path="/mapa" element={<MapaPage />} />
          <Route path="/subdireccion-obras" element={<SubdireccionObrasPage />} />
          <Route path="/serv-tecnicos" element={<ServTecnPage />} />
          <Route path="/subtransporte" element={<SubTransportePage />} />
          <Route path="/subcomunicaciones" element={<SubComunicacionesPage />} />
          <Route path="/subadministracion" element={<SubAdmPage />} />
          <Route path="/organigrama" element={<OrganigramaPage />} />
          <Route path="/unidad-laboratorios" element={<UnidadLaboratoriosPage />} />
          <Route path="/unidad-estudios" element={<UnidadEstudiosPage />} />
          <Route path="/unidad-vialidad-proyectos" element={<UnidadVialidadProyectosPage />} />
          <Route path="/buzon-quejas" element={<BuzonQuejas />} />
          <Route path="/consulta-estatus-queja" element={<ConsultaEstatusQueja />} />
          <Route path="/folio-generado" element={<FolioGenerado />} />
          <Route path="/mural" element={<MuralInteractivoPage />} />
          <Route path="/encuesta-genero" element={<EncuestaGenero />} />
          <Route path="/comite-etica" element={<ComiteEtica />} />
        </Routes>
 
        {/* Modal de encuesta: paso onClose para poder ocultarlo */}
        <ModalEncuestaGenero
          open={showEncuesta}
          show={showEncuesta}
          onClose={() => setShowEncuesta(false)}
        />
      </div>
      <Footer />
    </>
  );
}
 
function App() {
  useEffect(() => {
    initGA(); // Inicializa GA solo en producción
 
    // Contador de visitas local (funciona en localhost y producción)
    const visitCount = localStorage.getItem('sictt-visit-count');
    const currentCount = visitCount ? parseInt(visitCount, 10) : 0;
    const newCount = currentCount + 1;
    localStorage.setItem('sictt-visit-count', newCount.toString());
    localStorage.setItem('sictt-last-visit', new Date().toISOString());
    console.log(`Visita número: ${newCount}`);
  }, []);
 
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
 
export default App;