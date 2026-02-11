
import React, { useState, useEffect, Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './screens/Home';
import ProfissionaisTI from './screens/ProfissionaisTI';
import ComoDesenvolver from './screens/ComoDesenvolver';
import EstagiosEmpregos from './screens/EstagiosEmpregos';
import Concursos from './screens/Concursos';
import Empreendedorismo from './screens/Empreendedorismo';
import GruposProjetos from './screens/GruposProjetos';
import EventosTI from './screens/EventosTI';
import GaleriaFotos from './screens/GaleriaFotos';
import LinksEssenciais from './screens/LinksEssenciais';
import FaleCoordenador from './screens/FaleCoordenador';
import CuriosidadesEstacio from './screens/CuriosidadesEstacio';
import VideosObrigatorios from './screens/VideosObrigatorios';
import NovoCurriculo from './screens/NovoCurriculo';
import Avisos from './screens/Avisos';

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<string>(window.location.hash || '#/home');
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash || '#/home');
      window.scrollTo(0, 0);
    };

    const handleNetworkChange = () => setIsOffline(!navigator.onLine);

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('online', handleNetworkChange);
    window.addEventListener('offline', handleNetworkChange);
    
    if (!window.location.hash) {
      window.location.hash = '#/home';
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('online', handleNetworkChange);
      window.removeEventListener('offline', handleNetworkChange);
    };
  }, []);

  const renderScreen = () => {
    switch (currentRoute) {
      case '#/home': return <Home />;
      case '#/profissionais-ti': return <ProfissionaisTI />;
      case '#/como-desenvolver': return <ComoDesenvolver />;
      case '#/estagios-empregos': return <EstagiosEmpregos />;
      case '#/concursos': return <Concursos />;
      case '#/empreendedorismo': return <Empreendedorismo />;
      case '#/grupos-projetos': return <GruposProjetos />;
      case '#/eventos-ti': return <EventosTI />;
      case '#/videos-essenciais': return <VideosObrigatorios />;
      case '#/galeria-fotos': return <GaleriaFotos />;
      case '#/links-essenciais': return <LinksEssenciais />;
      case '#/novo-curriculo-2026': return <NovoCurriculo />;
      case '#/fale-com-o-coordenador': return <FaleCoordenador />;
      case '#/curiosidades-estacio': return <CuriosidadesEstacio />;
      case '#/avisos-da-coordenacao': return <Avisos />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      
      {/* Global Offline Bar (Mobile Focus) */}
      {isOffline && (
        <div className="fixed top-20 left-0 right-0 bg-amber-500 text-estacio-navy text-center py-1.5 z-[45] shadow-md border-b border-amber-600/20">
          <p className="text-[9px] font-black uppercase tracking-[0.2em] italic">
            Você está navegando sem internet • Conteúdo Carregado do Cache
          </p>
        </div>
      )}

      <main className="flex-grow pt-24 pb-4 transition-all duration-500">
        <Suspense fallback={<div className="flex items-center justify-center p-20"><div className="w-10 h-10 border-4 border-estacio-cyan border-t-transparent rounded-full animate-spin"></div></div>}>
          {renderScreen()}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;
