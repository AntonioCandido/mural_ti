
import React, { useState, useEffect } from 'react';
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
import FaleCoordenador from './screens/FaleCoordenador';

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
      case '#/fale-com-o-coordenador': return <FaleCoordenador />;
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

      <main className={`flex-grow ${isOffline ? 'pt-28' : 'pt-24'} pb-12 transition-all duration-500`}>
        {renderScreen()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
