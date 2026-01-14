
import React from 'react';
import { ViewType } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentView, onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="bg-estacio-navy sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-6 h-24 flex justify-between items-center">
          <div 
            className="flex flex-col cursor-pointer group"
            onClick={() => onNavigate(ViewType.HOME)}
          >
            <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight group-hover:text-estacio-cyan transition-colors">
              Mural tecnológico
            </h1>
            <p className="text-[10px] md:text-xs text-estacio-cyan font-bold uppercase tracking-[0.2em] leading-none mt-1">
              RECURSOS ACADÊMICOS
            </p>
          </div>

          <nav className="flex items-center">
            <button 
              onClick={() => onNavigate(ViewType.HOME)}
              className={`text-base md:text-lg font-bold transition-colors ${currentView === ViewType.HOME ? 'text-estacio-cyan' : 'text-white hover:text-estacio-cyan'}`}
            >
              Início
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-grow bg-white">
        {children}
      </main>
    </div>
  );
};

export default Layout;
