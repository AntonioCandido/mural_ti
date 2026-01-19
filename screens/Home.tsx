
import React from 'react';
import { CARDS_DATA } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Home: React.FC = () => {
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    window.location.hash = target;
  };

  // Mapeamento de cores sólidas e vibrantes (antigos estados de hover agora são padrão)
  const colorMap: Record<string, { bg: string, text: string, icon: string, border: string }> = {
    'group-hover:border-blue-500': { bg: 'bg-blue-600', text: 'text-white', icon: 'text-blue-600', border: 'border-blue-400/30' },
    'group-hover:border-estacio-cyan': { bg: 'bg-estacio-cyan', text: 'text-estacio-navy', icon: 'text-estacio-cyan', border: 'border-white/20' },
    'group-hover:border-emerald-500': { bg: 'bg-emerald-600', text: 'text-white', icon: 'text-emerald-600', border: 'border-emerald-400/30' },
    'group-hover:border-estacio-amber': { bg: 'bg-estacio-amber', text: 'text-estacio-navy', icon: 'text-estacio-amber', border: 'border-white/20' },
    'group-hover:border-purple-500': { bg: 'bg-purple-600', text: 'text-white', icon: 'text-purple-600', border: 'border-purple-400/30' },
    'group-hover:border-orange-500': { bg: 'bg-orange-600', text: 'text-white', icon: 'text-orange-600', border: 'border-orange-400/30' },
    'group-hover:border-pink-500': { bg: 'bg-pink-600', text: 'text-white', icon: 'text-pink-600', border: 'border-pink-400/30' },
    'group-hover:border-indigo-500': { bg: 'bg-indigo-600', text: 'text-white', icon: 'text-indigo-600', border: 'border-indigo-400/30' },
    'group-hover:border-estacio-navy': { bg: 'bg-estacio-navy', text: 'text-white', icon: 'text-estacio-navy', border: 'border-white/10' },
  };

  return (
    <div className="container mx-auto px-4 md:px-6 pt-4 pb-20 fade-in">
      <header className="max-w-5xl mb-12 md:mb-16 text-center mx-auto flex flex-col items-center">
        
        {/* Unidades Badge - Responsivo e Fiel ao Design Solicitado */}
        <div className="mb-8 md:mb-12 w-full flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 bg-white border border-slate-200/60 p-1.5 md:p-2 rounded-full shadow-lg shadow-slate-200/50 max-w-full">
            <span className="bg-estacio-navy text-white text-[9px] md:text-[11px] font-black uppercase tracking-widest px-4 py-1.5 md:py-2 rounded-full italic shadow-sm flex-shrink-0">
              CAMPUS
            </span>
            <div className="flex items-center gap-2 md:gap-4 px-2">
              <span className="text-[10px] md:text-[13px] font-bold text-slate-500 uppercase tracking-tight flex-shrink-0">
                R9 <span className="text-estacio-navy font-black">TAQUARA</span>
              </span>
              <span className="w-1.5 h-1.5 bg-slate-300 rounded-full flex-shrink-0"></span>
              <span className="text-[10px] md:text-[13px] font-bold text-slate-500 uppercase tracking-tight flex-shrink-0">
                TOM JOBIM <span className="text-estacio-cyan font-black">BARRA</span>
              </span>
            </div>
          </div>
        </div>
        
        {/* Title Section */}
        <div className="relative mb-8 px-4">
          <h2 className="text-5xl md:text-9xl font-black text-estacio-navy italic uppercase tracking-tighter leading-[0.8] text-center mb-6">
            HUB DE <span className="text-estacio-cyan">CARREIRA</span>
          </h2>
          <p className="text-sm md:text-xl text-slate-400 font-semibold max-w-2xl mx-auto leading-relaxed">
            Sua central estratégica para o sucesso acadêmico e profissional no ecossistema de TI.
          </p>
        </div>
      </header>

      {/* Shortcut Grid com visual Permanente 'Ativo' */}
      <nav aria-label="Atalhos de Navegação" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {CARDS_DATA.map((card) => {
          const Icon = card.icon;
          const styles = colorMap[card.color] || colorMap['group-hover:border-estacio-navy'];
          
          return (
            <article key={card.id} className="h-full">
              <a 
                href={card.id}
                onClick={(e) => handleNavigation(e, card.id)}
                className={`relative h-full p-8 md:p-10 rounded-[3.5rem] border ${styles.border} flex flex-col items-center text-center overflow-hidden shadow-2xl shadow-slate-300/40 -translate-y-2 transition-all duration-300 ${styles.bg}`}
              >
                {/* Visual Glass Shine */}
                <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>
                
                {/* Permanent Active Icon Box */}
                <div className={`relative w-16 h-16 md:w-20 md:h-20 rounded-[2rem] flex items-center justify-center bg-white shadow-xl mb-8 rotate-[5deg] scale-110 ${styles.icon}`}>
                  <Icon size={32} md:size={40} strokeWidth={2.5} aria-hidden="true" />
                </div>
                
                <h3 className={`relative z-10 font-black text-sm md:text-base leading-tight mb-3 uppercase italic tracking-tighter ${styles.text}`}>
                  {card.title}
                </h3>
                
                <p className={`relative z-10 text-[10px] md:text-[11px] font-bold leading-relaxed uppercase tracking-widest line-clamp-2 opacity-80 ${styles.text}`}>
                  {card.desc}
                </p>

                {/* Permanent Action Indicator */}
                <div className="mt-auto pt-8 relative z-10">
                   <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white border border-white/20">
                      <ArrowUpRight size={20} strokeWidth={3} />
                   </div>
                </div>
              </a>
            </article>
          );
        })}
      </nav>
    </div>
  );
};

export default Home;
