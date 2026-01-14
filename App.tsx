
import React, { useState } from 'react';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import CardsGrid from './components/CardsGrid';
import DetailView from './screens/DetailView';
import { ViewType } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>(ViewType.HOME);

  const navigateTo = (view: ViewType) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
