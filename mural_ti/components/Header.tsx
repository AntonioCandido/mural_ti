
import React from 'react';
import { ViewType } from '../types';

const Header: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    window.location.hash = target;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col shadow-xl">
      {/* Blue Header Section */}
      <div className="h-24 bg-[#154498] flex items-center">
        <div className="container mx-auto px-6">
          <a 
            href={ViewType.HOME} 
            onClick={(e) => handleLinkClick(e, ViewType.HOME)}
            className="flex flex-col group transition-all active:scale-95"
            aria-label="Ir para o início - Mural TI Estácio"
          >
            <span className="text-white font-black text-4xl md:text-5xl italic tracking-tighter uppercase leading-none" style={{ letterSpacing: '-0.05em' }}>
              MURAL TI
            </span>
            <span className="text-[#00B4E5] font-bold text-[11px] md:text-sm uppercase tracking-[0.15em] mt-1">
              ESTÁCIO DE SÁ
            </span>
          </a>
        </div>
      </div>
      
      {/* Gray Bar Section */}
      <div className="h-4 bg-[#D1D3D4] border-b border-gray-300 shadow-inner"></div>
    </header>
  );
};

export default Header;
