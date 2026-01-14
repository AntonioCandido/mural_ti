
import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
import DetailView from './components/DetailView';
import { ViewType } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>(ViewType.HOME);

  const handleNavigate = (view: ViewType) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentView(view);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case ViewType.HOME:
        return <Home onNavigate={handleNavigate} />;
      default:
        return <DetailView view={currentView} onBack={() => handleNavigate(ViewType.HOME)} />;
    }
  };

  return (
    <Layout currentView={currentView} onNavigate={handleNavigate}>
      {renderCurrentView()}
    </Layout>
  );
};

export default App;
