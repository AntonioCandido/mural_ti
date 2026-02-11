
import React, { useState, useEffect } from 'react';
import { ViewType } from '../types';
import { 
  Home, 
  Briefcase, 
  Megaphone, 
  MessageCircle, 
  Calendar, 
  Link as LinkIcon, 
  Info,
  X,
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

  const menuItems = [
    { label: 'Início', href: ViewType.HOME, icon: Home },
    { label: 'Vagas & Estágios TI', href: ViewType.ESTAGIOS, icon: Briefcase },
    { label: 'Avisos da Coordenação', href: ViewType.AVISOS, icon: Megaphone },
    { label: 'Fale com o Coordenador', href: ViewType.COORDENADOR, icon: MessageCircle },
    { label: 'Eventos & Workshops', href: ViewType.EVENTOS, icon: Calendar },
    { label: 'Links Úteis (SIA/Portal)', href: ViewType.LINKS, icon: LinkIcon },
    { label: 'Sobre o Mural', href: ViewType.CURIOSIDADES, icon: Info },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-estacio-navy text-white shadow-2xl z-50 flex items-center border-b border-white/5">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Identidade Visual - Logo (Sempre Visível) */}
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
        </div>

        {/* Gatilho da Sidebar (Hambúrguer) - Posicionado à Direita */}
        <button 
          className="relative p-2 text-white/50 hover:text-estacio-cyan transition-all duration-300 outline-none"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Abrir menu de navegação"
        >
          <div className="flex flex-col gap-1.5 items-end">
             <span className="h-[2px] w-7 bg-current rounded-full"></span>
             <span className="h-[2px] w-5 bg-current rounded-full"></span>
             <span className="h-[2px] w-6 bg-current rounded-full"></span>
          </div>
        </button>
      </div>

      {/* Sistema de Sidebar Lateral */}
      <div 
        className={`fixed inset-0 z-[100] transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Overlay Escurecido (Backdrop) */}
        <div 
          className={`absolute inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`} 
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Painel do Menu - Desliza da Direita para a Esquerda */}
        <nav 
          className={`absolute top-0 right-0 h-full w-[85%] max-w-[340px] bg-estacio-navy shadow-[-15px_0_50px_rgba(0,0,0,0.8)] border-l border-white/5 flex flex-col p-6 pt-10 transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Botão Fechar "X" no topo do painel */}
          <div className="flex justify-end mb-12">
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-3 text-white/40 hover:text-white transition-colors"
              aria-label="Fechar menu"
            >
              <X size={28} strokeWidth={1.5} />
            </button>
          </div>

          {/* Lista Vertical de Itens de Navegação */}
          <div className="flex flex-col gap-2 overflow-y-auto custom-scrollbar">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = currentHash === item.href;
              
              return (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`group relative flex items-center gap-5 p-5 rounded-[1.5rem] transition-all duration-300 ${
                    isActive 
                      ? 'bg-white/5 text-estacio-cyan' 
                      : 'text-white/60 hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  {/* Barra Vertical Luminosa para Item Ativo */}
                  {isActive && (
                    <span className="absolute right-0 top-1/4 bottom-1/4 w-1 bg-estacio-cyan rounded-full shadow-[0_0_15px_#00BFFF]"></span>
                  )}
                  
                  <div className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:translate-x-1'}`}>
                    <Icon size={22} strokeWidth={isActive ? 2.5 : 1.8} />
                  </div>
                  
                  <span className={`text-[15px] font-bold tracking-tight transition-all ${
                    isActive ? 'opacity-100 translate-x-1' : 'opacity-80'
                  }`}>
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Rodapé do Menu Lateral */}
          <div className="mt-auto pt-10 border-t border-white/5">
            <div className="flex items-center gap-3 mb-4">
               <div className={`w-2 h-2 rounded-full ${isOffline ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'}`}></div>
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                  {isOffline ? 'Modo Offline' : 'Sistema Sincronizado'}
               </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest italic">
                Mural TI • Estácio
              </span>
              <span className="text-[9px] font-bold text-slate-700">
                v3.2.1
              </span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
