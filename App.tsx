
import React, { useState, useEffect, Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { ViewType } from './types';

// Telas principais carregadas imediatamente para LCP (Largest Contentful Paint)
import Home from './screens/Home';

// Telas secundárias carregadas sob demanda (Lazy Loading) para reduzir o bundle inicial
const ProfissionaisTI = lazy(() => import('./screens/ProfissionaisTI'));
const ComoDesenvolver = lazy(() => import('./screens/ComoDesenvolver'));
const EstagiosEmpregos = lazy(() => import('./screens/EstagiosEmpregos'));
const Concursos = lazy(() => import('./screens/Concursos'));
const Empreendedorismo = lazy(() => import('./screens/Empreendedorismo'));
const GruposProjetos = lazy(() => import('./screens/GruposProjetos'));
const EventosTI = lazy(() => import('./screens/EventosTI'));
const GaleriaFotos = lazy(() => import('./screens/GaleriaFotos'));
const LinksEssenciais = lazy(() => import('./screens/LinksEssenciais'));
const FaleCoordenador = lazy(() => import('./screens/FaleCoordenador'));
const CuriosidadesEstacio = lazy(() => import('./screens/CuriosidadesEstacio'));
const NovoCurriculo = lazy(() => import('./screens/NovoCurriculo'));
const Avisos = lazy(() => import('./screens/Avisos'));
const VideosObrigatorios = lazy(() => import('./screens/VideosObrigatorios'));

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<string>(window.location.hash || ViewType.HOME);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || ViewType.HOME;
      setCurrentRoute(hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNetworkChange = () => setIsOffline(!navigator.onLine);

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('online', handleNetworkChange);
    window.addEventListener('offline', handleNetworkChange);
    
    // Fallback inicial
    if (!window.location.hash) {
      window.location.hash = ViewType.HOME;
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('online', handleNetworkChange);
      window.removeEventListener('offline', handleNetworkChange);
    };
  }, []);

  const renderScreen = () => {
    switch (currentRoute) {
      case ViewType.HOME: return <Home />;
      case ViewType.PROFISSIONAIS: return <ProfissionaisTI />;
      case ViewType.DESENVOLVIMENTO: return <ComoDesenvolver />;
      case ViewType.ESTAGIOS: return <EstagiosEmpregos />;
      case ViewType.CONCURSOS: return <Concursos />;
      case ViewType.EMPREENDEDOR: return <Empreendedorismo />;
      case ViewType.PROJETOS: return <GruposProjetos />;
      case ViewType.EVENTOS: return <EventosTI />;
      case ViewType.VIDEOS: return <VideosObrigatorios />;
      case ViewType.GALERIA: return <GaleriaFotos />;
      case ViewType.LINKS: return <LinksEssenciais />;
      case ViewType.CURRICULO: return <NovoCurriculo />;
      case ViewType.COORDENADOR: return <FaleCoordenador />;
      case ViewType.CURIOSIDADES: return <CuriosidadesEstacio />;
      case ViewType.AVISOS: return <Avisos />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative selection:bg-estacio-cyan/30">
      <Header />
      
      {/* Barra de Status Offline com Animação Fluida */}
      <div className={`fixed top-20 left-0 right-0 z-[45] transition-all duration-500 transform ${isOffline ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="bg-amber-500 text-estacio-navy text-center py-2 shadow-lg border-b border-amber-600/20 backdrop-blur-md bg-opacity-95">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] italic flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-estacio-navy rounded-full animate-ping"></span>
            Modo Offline Ativado • Navegando via Cache Local
          </p>
        </div>
      </div>

      <main className="flex-grow pt-24 pb-4 overflow-x-hidden">
        <Suspense fallback={
          <div className="flex flex-col items-center justify-center p-20 animate-pulse">
            <div className="w-16 h-16 border-t-4 border-estacio-cyan border-solid rounded-full animate-spin mb-4"></div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Carregando Módulo TI...</span>
          </div>
        }>
          {renderScreen()}
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
