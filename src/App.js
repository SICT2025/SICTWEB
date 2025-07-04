import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import { useAccessibility } from './context/AccessibilityContext';
import './App.css';
import logos from './assets/imagenes/logos.png';
import ReadingMask from './components/ReadingMask';
import ReadingGuide from './components/ReadingGuide';
import UnidadLaboratoriosPage from './pages/UnidadLaboratoriosPage';
import UnidadEstudiosPage from './pages/UnidadEstudiosPage';
import UnidadVialidadProyectosPage from './pages/UnidadVialidadProyectosPage';
import BuzonQuejas from './pages/BuzonQuejas';
import ConsultaEstatusQueja from './pages/ConsultaEstatusQueja';
import FolioGenerado from './pages/FolioGenerado';
import ComunicacionSocialPage from './pages/ComunicacionSocialPage';

 
function App() {
  // No se aplican clases aquí, se aplican en el <body> desde el contexto
  const {
    readingMask,
    readingGuide,
  } = useAccessibility();
 
  return (
    <div>
      <Router>
        <Navbar />
 
        {/* Logo debajo del navbar */}
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
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
 
export default App;