import React, { useEffect, useRef } from 'react';
import { CARDS, getIcon } from '../constants';
import { ViewType } from '../types';

interface HomeProps {
  onNavigate: (view: ViewType) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -20px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Helper para cores de destaque baseadas na categoria do card
  const getAccentColor = (colorClass: string) => {
    if (colorClass.includes('blue-600')) return 'rgba(37, 99, 235, 0.4)';
    if (colorClass.includes('cyan-500')) return 'rgba(6, 182, 212, 0.4)';
    if (colorClass.includes('yellow-600')) return 'rgba(202, 138, 4, 0.4)';
    if (colorClass.includes('blue-800')) return 'rgba(30, 64, 175, 0.4)';
    if (colorClass.includes('orange-500')) return 'rgba(249, 115, 22, 0.4)';
    if (colorClass.includes('purple-600')) return 'rgba(147, 51, 234, 0.4)';
    if (colorClass.includes('green-600')) return 'rgba(22, 163, 74, 0.4)';
    return 'rgba(0, 174, 239, 0.4)';
  };

  return (
    <div className="fade-in">
      {/* HERO SECTION - REFINED */}
      <section className="bg-estacio-navy text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-estacio-cyan rounded-full mix-blend-multiply filter blur-[100px] opacity-20 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-estacio-yellow rounded-full mix-blend-multiply filter blur-[100px] opacity-10 -ml-48 -mb-48"></div>
        
        <div className="container mx-auto relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-white/10 backdrop-blur-md border border-white/20 text-estacio-cyan text-[10px] font-bold rounded-full mb-8 uppercase tracking-[0.2em]">
            <span className="w-2 h-2 bg-estacio-cyan rounded-full animate-pulse"></span>
            Engenharia de Software & TI
          </div>
          <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
            Seu Futuro na <br/><span className="text-estacio-cyan">Tecnologia</span> Começa Aqui.
          </h2>
          <p className="text-lg md:text-2xl text-blue-100/80 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
            Recursos exclusivos, mentorias e conexões para transformar sua jornada acadêmica na Estácio.
          </p>
        </div>
      </section>

      {/* CARDS GRID - PCI THEMED */}
      <section className="container mx-auto px-4 py-16 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={containerRef}>
          {CARDS.map((card, index) => (
            <div 
              key={card.id}
              onClick={() => onNavigate(card.id)}
              className="p-8 rounded-[2rem] cursor-pointer group flex flex-col items-start reveal card-frame"
              style={{ 
                transitionDelay: `${index * 50}ms`,
                // @ts-ignore
                '--card-accent': getAccentColor(card.color)
              } as React.CSSProperties}
            >
              {/* Camadas PCI Dinâmicas */}
              <div className="pci-circuit-overlay"></div>
              <div className="pci-data-scan"></div>
              <div className="mobile-glow-sphere"></div>
              
              <div className={`p-4 rounded-2xl bg-white shadow-lg shadow-slate-200/50 mb-8 transform group-hover:-translate-y-2 group-hover:rotate-3 transition-all duration-500 ${card.color} relative z-10`}>
                {getIcon(card.icon, 32)}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-estacio-navy transition-colors relative z-10">
                {card.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow relative z-10">
                {card.description}
              </p>
              
              <div className="flex items-center text-[10px] font-black uppercase tracking-widest text-estacio-cyan group-hover:text-estacio-navy transition-colors relative z-10">
                <span className="mr-2">Executar Módulo</span>
                <div className="w-8 h-[2px] bg-current transform origin-left group-hover:scale-x-125 transition-transform"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="bg-slate-50 py-16 border-t border-slate-200/60 overflow-hidden relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-8 opacity-20 hover:opacity-100 transition-opacity duration-700">
            <img 
              src="https://www.estacio.br/assets/images/logo-estacio.svg" 
              alt="Estácio" 
              className="h-10 mx-auto"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
          </div>
          <p className="text-slate-400 text-[11px] uppercase tracking-[0.3em] font-bold">
            Mural Tecnológico Estácio • 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;