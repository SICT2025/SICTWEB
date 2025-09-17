import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import JuridicoPage from './pages/JuridicoPage';
import MapaPage from './pages/MapaPage';
import MedicinaPage from './pages/MedicinaPage';
import SubdireccionObrasPage from './pages/SubdireccionObrasPage';
import ServTecnPage from './pages/ServTecnPage';
import SubTransportePage from './pages/SubTransportePage';
import SubComunicacionesPage from './pages/SubComunicacionesPage';
import SubAdmPage from './pages/SubAdmPage';
import OrganigramaPage from './pages/OrganigramaPage';
import RecursosFinancierosPage from './pages/RecursosFinancierosPage';
import DepartamentoHumanosPage from './pages/DepartamentoHumanosPage';
import DepartamentoMaterialesPage from './pages/DepartamentoMaterialesPage';
import TransporteFerroviarioPage from './pages/TransporteFerroviarioPage';
import AutotransporteCelayaPage from './pages/AutotransporteCelayaPage';
import AutotransporteLeonPage from './pages/AutotransporteLeonPage';
import UnidadLaboratoriosPage from './pages/UnidadLaboratoriosPage';
import UnidadEstudiosPage from './pages/UnidadEstudiosPage';
import UnidadVialidadProyectosPage from './pages/UnidadVialidadProyectosPage';
import BuzonQuejas from './pages/BuzonQuejas';
import ConsultaEstatusQueja from './pages/ConsultaEstatusQueja';
import FolioGenerado from './pages/FolioGenerado';
import ComunicacionSocialPage from './pages/ComunicacionSocialPage';
import MuralInteractivoPage from './pages/MuralInteractivoPage';
import EncuestaGenero from "./pages/EncuestaGenero";
import { useAccessibility } from './context/AccessibilityContext';
import './App.css';
import logos from './assets/imagenes/logos.png';
import ReadingMask from './components/ReadingMask';
import ReadingGuide from './components/ReadingGuide';
 
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
 
// Hook para registrar page views SPA
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
  usePageViews();
 
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
<Route path="/mapa" element={<MapaPage />} />
<Route path="/medicina" element={<MedicinaPage />} />
<Route path="/subdireccion-obras" element={<SubdireccionObrasPage />} />
<Route path="/serv-tecnicos" element={<ServTecnPage />} />
<Route path="/subtransporte" element={<SubTransportePage />} />
<Route path="/subcomunicaciones" element={<SubComunicacionesPage />} />
<Route path="/subadministracion" element={<SubAdmPage />} />
<Route path="/organigrama" element={<OrganigramaPage />} />
<Route path="/recursos-financieros" element={<RecursosFinancierosPage />} />
<Route path="/departamento-humanos" element={<DepartamentoHumanosPage />} />
<Route path="/departamento-materiales" element={<DepartamentoMaterialesPage />} />
<Route path="/transporte-ferroviario" element={<TransporteFerroviarioPage />} />
<Route path="/autotransporte-celaya" element={<AutotransporteCelayaPage />} />
<Route path="/autotransporte-leon" element={<AutotransporteLeonPage />} />
<Route path="/unidad-laboratorios" element={<UnidadLaboratoriosPage />} />
<Route path="/unidad-estudios" element={<UnidadEstudiosPage />} />
<Route path="/unidad-vialidad-proyectos" element={<UnidadVialidadProyectosPage />} />
<Route path="/buzon-quejas" element={<BuzonQuejas />} />
<Route path="/consulta-estatus-queja" element={<ConsultaEstatusQueja />} />
<Route path="/folio-generado" element={<FolioGenerado />} />
<Route path="/comunicacion-social" element={<ComunicacionSocialPage />} />
<Route path="/mural" element={<MuralInteractivoPage />} />
<Route path="/encuesta-genero" element={<EncuestaGenero />} />
</Routes>
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