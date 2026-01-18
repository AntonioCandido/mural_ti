
import React, { useState, useEffect } from 'react';
import { ViewType } from '../types';
import { Menu, X, Home, Calendar, UserCheck, WifiOff } from 'lucide-react';

const Header: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash || ViewType.HOME);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || ViewType.HOME);
      setIsMobileMenuOpen(false);
    };

    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    window.location.hash = target;
  };

  const navLinks = [
    { label: 'Início', href: ViewType.HOME, icon: Home },
    { label: 'Eventos', href: ViewType.EVENTOS, icon: Calendar },
    { label: 'Contato', href: ViewType.COORDENADOR, icon: UserCheck },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-estacio-navy text-white shadow-2xl z-50 flex items-center transition-all duration-300 border-b border-white/5">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Nova Identidade Visual - Logo Estilo Bloco */}
        <div className="flex items-center gap-4">
          <a 
            href={ViewType.HOME} 
            onClick={(e) => handleLinkClick(e, ViewType.HOME)}
            className="group flex flex-col items-start leading-[0.85] transition-transform hover:scale-105 active:scale-95"
            aria-label="Ir para o início - Mural TI Estácio"
          >
            <span className="text-white font-black text-2xl md:text-3xl italic uppercase tracking-tighter">
              MURAL TI
            </span>
            <span className="text-estacio-cyan font-bold text-[9px] md:text-[11px] uppercase tracking-[0.15em] mt-1 ml-0.5">
              ESTÁCIO DE SÁ
            </span>
          </a>
          
          {/* Offline Badge */}
          {isOffline && (
            <div className="hidden sm:flex items-center gap-2 bg-amber-500 text-estacio-navy px-3 py-1 rounded-full animate-pulse shadow-lg ml-4">
              <WifiOff size={10} strokeWidth={3} />
              <span className="text-[8px] font-black uppercase tracking-widest">Offline</span>
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-[11px] font-black uppercase tracking-widest transition-all relative py-2 ${
                currentHash === link.href ? 'text-estacio-cyan' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
              {currentHash === link.href && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-estacio-cyan rounded-full"></span>
              )}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-white hover:text-estacio-cyan transition-colors flex items-center gap-3"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isOffline && <WifiOff size={20} className="text-amber-500" />}
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div 
        className={`fixed inset-0 bg-estacio-navy/98 backdrop-blur-xl z-40 transition-transform duration-500 md:hidden flex flex-col pt-24 px-8 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`flex items-center gap-4 text-2xl font-black uppercase tracking-tighter italic transition-all ${
                currentHash === link.href ? 'text-estacio-cyan' : 'text-white'
              }`}
            >
              <link.icon className={currentHash === link.href ? 'text-estacio-cyan' : 'text-white/40'} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
