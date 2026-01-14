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

  const getAccentColor = (colorClass: string) => {
    if (colorClass.includes('blue-600')) return 'rgba(37, 99, 235, 0.2)';
    if (colorClass.includes('cyan-500')) return 'rgba(6, 182, 212, 0.2)';
    if (colorClass.includes('yellow-600')) return 'rgba(202, 138, 4, 0.2)';
    if (colorClass.includes('blue-800')) return 'rgba(30, 64, 175, 0.2)';
    if (colorClass.includes('orange-500')) return 'rgba(249, 115, 22, 0.2)';
    if (colorClass.includes('purple-600')) return 'rgba(147, 51, 234, 0.2)';
    if (colorClass.includes('green-600')) return 'rgba(22, 163, 74, 0.2)';
    return 'rgba(0, 51, 153, 0.1)';
  };

  return (
    <div className="fade-in">
      {/* HERO SECTION */}
      <section className="bg-estacio-navy text-white py-16 md:py-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-estacio-cyan rounded-full mix-blend-multiply filter blur-[120px] opacity-15 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-estacio-yellow rounded-full mix-blend-multiply filter blur-[120px] opacity-10 -ml-48 -mb-48"></div>
        
        <div className="container mx-auto relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 py-1 px-3 bg-white/5 backdrop-blur-sm border border-white/10 text-estacio-cyan text-[10px] font-semibold rounded-full mb-6 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-estacio-cyan rounded-full animate-pulse"></span>
            Engenharia de Software & TI
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Hub Acadêmico de <br/><span className="text-estacio-cyan">Inovação e Tecnologia</span>
          </h2>
          <p className="text-base md:text-xl text-blue-100/70 mb-8 leading-relaxed max-w-xl mx-auto font-light">
            Recursos exclusivos e conexões para transformar sua jornada tecnológica na Estácio.
          </p>
        </div>
      </section>

      {/* CARDS GRID */}
      <section className="container mx-auto px-4 py-12 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" ref={containerRef}>
          {CARDS.map((card, index) => (
            <div 
              key={card.id}
              onClick={() => onNavigate(card.id)}
              className="p-8 rounded-[1.5rem] cursor-pointer group flex flex-col items-start reveal card-frame"
              style={{ 
                transitionDelay: `${index * 30}ms`,
                // @ts-ignore
                '--card-accent': getAccentColor(card.color)
              } as React.CSSProperties}
            >
              <div className="pci-circuit-overlay"></div>
              <div className="mobile-glow-sphere"></div>
              
              <div className={`p-3.5 rounded-xl bg-slate-50 border border-slate-100 mb-6 group-hover:bg-white group-hover:shadow-sm transition-all duration-300 ${card.color} relative z-10`}>
                {getIcon(card.icon, 28)}
              </div>
              
              <h3 className="text-lg font-bold mb-2 text-slate-800 group-hover:text-estacio-navy transition-colors relative z-10">
                {card.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow relative z-10 font-normal">
                {card.description}
              </p>
              
              <div className="flex items-center text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-estacio-cyan transition-colors relative z-10">
                <span>Explorar Recurso</span>
                <svg className="w-3.5 h-3.5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold mb-2">
            Mural Tecnológico Estácio • 2025
          </p>
          <div className="w-8 h-1 bg-estacio-cyan/30 mx-auto rounded-full"></div>
        </div>
      </footer>
    </div>
  );
};

export default Home;