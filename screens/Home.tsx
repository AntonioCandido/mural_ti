
import React from 'react';
import { CARDS_DATA } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Home: React.FC = () => {
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    window.location.hash = target;
  };

  // Mapeamento de cores sólidas e vibrantes (antigos estados de hover)
  const colorMap: Record<string, { bg: string, text: string, icon: string }> = {
    'group-hover:border-blue-500': { bg: 'bg-blue-600', text: 'text-white', icon: 'text-blue-600' },
    'group-hover:border-estacio-cyan': { bg: 'bg-estacio-cyan', text: 'text-estacio-navy', icon: 'text-estacio-cyan' },
    'group-hover:border-emerald-500': { bg: 'bg-emerald-600', text: 'text-white', icon: 'text-emerald-600' },
    'group-hover:border-estacio-amber': { bg: 'bg-estacio-amber', text: 'text-estacio-navy', icon: 'text-estacio-amber' },
    'group-hover:border-purple-500': { bg: 'bg-purple-600', text: 'text-white', icon: 'text-purple-600' },
    'group-hover:border-orange-500': { bg: 'bg-orange-600', text: 'text-white', icon: 'text-orange-600' },
    'group-hover:border-pink-500': { bg: 'bg-pink-600', text: 'text-white', icon: 'text-pink-600' },
    'group-hover:border-indigo-500': { bg: 'bg-indigo-600', text: 'text-white', icon: 'text-indigo-600' },
    'group-hover:border-estacio-navy': { bg: 'bg-estacio-navy', text: 'text-white', icon: 'text-estacio-navy' },
  };

  return (
    <div className="container mx-auto px-6 pt-4 pb-20 fade-in">
      <header className="max-w-5xl mb-16 text-center mx-auto flex flex-col items-center">
        
        {/* Unidades Badge */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-4 bg-white border border-slate-200/60 px-4 py-2 rounded-2xl shadow-sm transition-all duration-500">
            <span className="bg-estacio-navy text-white text-[7px] font-black uppercase tracking-widest px-2 py-1 rounded-lg italic">
              Campus
            </span>
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">
                R9 <span className="text-estacio-navy font-black">Taquara</span>
              </span>
              <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">
                Tom Jobim <span className="text-estacio-cyan font-black">Barra</span>
              </span>
            </div>
          </div>
        </div>
        
        {/* Title Section */}
        <div className="relative mb-8">
          <h2 className="text-5xl md:text-8xl font-black text-estacio-navy italic uppercase tracking-tighter leading-[0.85] text-center">
            HUB DE <span className="text-estacio-cyan">CARREIRA</span>
          </h2>
          <p className="text-sm md:text-lg text-slate-400 font-semibold mt-6 max-w-xl mx-auto leading-relaxed">
            Seus atalhos essenciais para o sucesso acadêmico e profissional em Tecnologia da Informação.
          </p>
        </div>
      </header>

      {/* Shortcut Grid com visual Permanente 'Ativo' */}
      <nav aria-label="Atalhos de Navegação" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {CARDS_DATA.map((card) => {
          const Icon = card.icon;
          const styles = colorMap[card.color] || colorMap['group-hover:border-estacio-navy'];
          
          return (
            <article key={card.id} className="h-full">
              <a 
                href={card.id}
                onClick={(e) => handleNavigation(e, card.id)}
                className={`relative h-full p-6 md:p-8 rounded-[2.5rem] border border-white/20 flex flex-col items-center text-center overflow-hidden shadow-2xl shadow-slate-200/50 -translate-y-1 transition-transform duration-300 ${styles.bg}`}
              >
                {/* Visual Glass Shine */}
                <div className="absolute inset-0 bg-white/10"></div>
                
                {/* Permanent Active Icon Box */}
                <div className={`relative w-14 h-14 md:w-16 md:h-16 rounded-[1.5rem] flex items-center justify-center bg-white shadow-xl mb-6 rotate-[6deg] scale-105 ${styles.icon}`}>
                  <Icon size={28} md:size={32} strokeWidth={2.5} aria-hidden="true" />
                </div>
                
                <h3 className={`relative z-10 font-black text-xs md:text-sm leading-tight mb-2 uppercase italic tracking-tighter ${styles.text}`}>
                  {card.title}
                </h3>
                
                <p className={`relative z-10 text-[9px] font-bold leading-tight uppercase tracking-wider line-clamp-2 opacity-90 ${styles.text}`}>
                  {card.desc}
                </p>

                {/* Permanent Action Indicator */}
                <div className="mt-auto pt-6 relative z-10">
                   <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                      <ArrowUpRight size={14} strokeWidth={3} />
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
