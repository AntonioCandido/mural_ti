
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import CardsGrid from './components/CardsGrid';
import DetailView from './screens/DetailView';
import { ViewType } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>(ViewType.HOME);

  // Sincroniza o estado da aplicação com o botão voltar do dispositivo
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.view) {
        setCurrentView(event.state.view);
      } else {
        setCurrentView(ViewType.HOME);
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    // Define o estado inicial se não houver um
    if (!window.history.state) {
      window.history.replaceState({ view: ViewType.HOME }, '');
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (view: ViewType) => {
    if (view !== currentView) {
      setCurrentView(view);
      window.history.pushState({ view }, '', view === ViewType.HOME ? '/' : `#${view.toLowerCase()}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Layout currentView={currentView} onNavigate={navigateTo}>
      {currentView === ViewType.HOME ? (
        <div className="fade-in">
          <HeroSection />
          <CardsGrid onNavigate={navigateTo} />
        </div>
      ) : (
        <DetailView 
          view={currentView} 
          onBack={() => navigateTo(ViewType.HOME)} 
        />
      )}
    </Layout>
  );
};

export default App;
