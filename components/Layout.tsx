
import React from 'react';
import { ViewType } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentView, onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER */}
      <header className="bg-estacio-navy text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div 
            className="flex items-center cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => onNavigate(ViewType.HOME)}
          >
            <div className="block">
              <h1 className="text-xl font-bold leading-tight">Mural tecnológico</h1>
              <p className="text-xs text-estacio-cyan uppercase tracking-widest font-semibold">Recursos Acadêmicos</p>
            </div>
          </div>

          <nav className="flex gap-4 md:gap-8">
            <button 
              onClick={() => onNavigate(ViewType.HOME)}
              className={`text-sm font-medium hover:text-estacio-cyan transition-colors ${currentView === ViewType.HOME ? 'text-estacio-cyan' : ''}`}
            >
              Início
            </button>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
};

export default Layout;
