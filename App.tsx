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
import { ViewType } from './types';

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<string>(window.location.hash || '#/home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/home';
      setCurrentRoute(hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Initial redirect if hash is empty
    if (!window.location.hash) {
      window.location.hash = '#/home';
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-12">
        {renderScreen()}
      </main>
      <Footer />
    </div>
  );
};

export default App;