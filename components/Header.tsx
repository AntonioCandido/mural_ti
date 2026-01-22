import React, { useState, useEffect } from 'react';
import { ViewType } from '../types';
import { 
  Home, 
  UserCog, 
  Code, 
  Briefcase, 
  Gavel, 
  Lightbulb, 
  Users, 
  Calendar, 
  Play, 
  Images, 
  Link as LinkIcon, 
  Sparkles, 
  UserCheck,
  WifiOff
} from 'lucide-react';

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
    { label: 'Profissionais de TI', href: ViewType.PROFISSIONAIS, icon: UserCog },
    { label: 'Como Desenvolver', href: ViewType.DESENVOLVIMENTO, icon: Code },
    { label: 'Estágios e Empregos', href: ViewType.ESTAGIOS, icon: Briefcase },
    { label: 'Concursos', href: ViewType.CONCURSOS, icon: Gavel },
    { label: 'Empreendedorismo', href: ViewType.EMPREENDEDOR, icon: Lightbulb },
    { label: 'Grupos e Projetos', href: ViewType.PROJETOS, icon: Users },
    { label: 'Eventos de TI', href: ViewType.EVENTOS, icon: Calendar },
    { label: 'Vídeos Essenciais', href: ViewType.VIDEOS, icon: Play },
    { label: 'Galeria de Fotos', href: ViewType.GALERIA, icon: Images },
    { label: 'Links Oficiais', href: ViewType.LINKS, icon: LinkIcon },
    { label: 'Curiosidades Estácio', href: ViewType.CURIOSIDADES, icon: Sparkles },
    { label: 'Fale com o Coordenador', href: ViewType.COORDENADOR, icon: UserCheck },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-estacio-navy text-white shadow-2xl z-50 flex items-center transition-all duration-300 border-b border-white/5">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Identidade Visual - Logo */}
        <div className="flex items-center gap-4">
          <a 
            href={ViewType.HOME} 
            onClick={(e) => handleLinkClick(e, ViewType.HOME)}
            className="group flex flex-col items-start leading-[0.85] transition-transform active:scale-95"
            aria-label="Ir para o início - Mural TI Estácio"
          >
            <span className="text-white font-black text-2xl md:text-3xl italic uppercase tracking-tighter">
              MURAL TI
            </span>
            <span className="text-estacio-cyan font-bold text-[9px] md:text-[11px] uppercase tracking-[0.15em] mt-1 ml-0.5">
              ESTÁCIO DE SÁ
            </span>
          </a>
          
          {isOffline && (
            <div className="hidden sm:flex items-center gap-2 bg-amber-500 text-estacio-navy px-3 py-1 rounded-full animate-pulse shadow-lg ml-4">
              <WifiOff size={10} strokeWidth={3} />
              <span className="text-[8px] font-black uppercase tracking-widest">Offline</span>
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.filter(l => [ViewType.HOME, ViewType.EVENTOS, ViewType.COORDENADOR].includes(l.href as ViewType)).map((link) => (
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

        {/* Hamburger Trigger - Top Right */}
        <button 
          className="md:hidden relative z-[70] p-2 text-white hover:text-estacio-cyan transition-all duration-300 outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <div className="relative w-7 h-5 flex flex-col justify-between items-end">
             <span className={`h-0.5 bg-current transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'w-8 rotate-45 translate-y-2' : 'w-7'}`}></span>
             <span className={`h-0.5 bg-current transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0 w-0' : 'w-5'}`}></span>
             <span className={`h-0.5 bg-current transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'w-8 -rotate-45 -translate-y-2.5' : 'w-6'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Darkened Backdrop */}
        <div 
          className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" 
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Sidebar Panel - Slides from Right */}
        <nav 
          className={`absolute top-0 right-0 h-full w-[85%] max-w-[320px] bg-estacio-navy shadow-[-10px_0_40px_rgba(0,0,0,0.6)] border-l border-white/10 flex flex-col transition-transform duration-500 ease-out overflow-hidden ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Sidebar Header Section */}
          <div className="p-8 pt-12 bg-white/5 border-b border-white/10">
            <span className="text-estacio-cyan font-black uppercase text-[10px] tracking-[0.3em] italic block mb-2">Navegação do Hub</span>
            <h3 className="text-white font-black italic uppercase text-xl tracking-tighter">Mural TI</h3>
          </div>

          {/* Links List - Scrollable */}
          <div className="flex-grow overflow-y-auto p-6 flex flex-col gap-2 custom-scrollbar">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              const isActive = currentHash === link.href;
              return (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 border ${
                    isActive 
                      ? 'bg-white/5 border-estacio-cyan/30 text-estacio-cyan shadow-[0_0_20px_rgba(0,191,255,0.05)]' 
                      : 'text-white/60 border-transparent hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className={`p-2 rounded-xl transition-all ${isActive ? 'bg-estacio-cyan text-estacio-navy' : 'bg-white/5'}`}>
                    <Icon size={18} strokeWidth={isActive ? 3 : 2} />
                  </div>
                  <span className={`font-black italic uppercase tracking-tighter text-sm ${isActive ? 'scale-105' : ''} transition-transform`}>
                    {link.label}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Sidebar Footer */}
          <div className="p-8 border-t border-white/5 bg-black/20">
            <div className="flex items-center gap-3 mb-2">
               <div className={`w-2 h-2 rounded-full ${isOffline ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'}`}></div>
               <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  {isOffline ? 'Modo Offline' : 'Sistema Sincronizado'}
               </span>
            </div>
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-600">
              Estácio de Sá © 2026
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;