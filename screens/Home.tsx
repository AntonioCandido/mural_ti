import React from 'react';
import { CARDS_DATA } from '../constants';

const Home: React.FC = () => {
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    window.location.hash = target;
  };

  return (
    <div className="container mx-auto px-6 py-12 md:py-20 fade-in">
      <div className="max-w-5xl mb-24 text-center mx-auto">
        <div className="inline-block px-4 py-1.5 bg-estacio-cyan/10 rounded-full mb-8">
          <span className="text-estacio-navy font-black text-[11px] uppercase tracking-[0.3em]">Portal Universitário 2026</span>
        </div>
        <h2 className="text-5xl md:text-8xl font-black text-estacio-navy italic uppercase tracking-tighter leading-none mb-8">
          Hub de <span className="text-estacio-cyan">Carreira</span><br/>& <span className="text-estacio-amber">Recursos</span>
        </h2>
        <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto">
          Centralizamos trilhas de estudo, vagas, concursos e suporte acadêmico para impulsionar seu futuro na tecnologia.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {CARDS_DATA.map((card) => {
          const Icon = card.icon;
          return (
            <a 
              key={card.id}
              href={card.id}
              onClick={(e) => handleNavigation(e, card.id)}
              className={`group relative bg-white p-10 rounded-[3.5rem] border-2 border-slate-50 ${card.color} shadow-sm hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-2 transition-all flex flex-col items-center text-center overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-full -mr-12 -mt-12 group-hover:bg-estacio-navy/5 transition-colors"></div>
              
              <div className="relative w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center text-estacio-navy mb-8 group-hover:scale-110 group-hover:bg-estacio-navy group-hover:text-white transition-all shadow-inner">
                <Icon size={36} />
              </div>
              
              <h3 className="relative font-black text-estacio-navy text-xl leading-[1.1] mb-4 uppercase italic tracking-tighter">
                {card.title}
              </h3>
              
              <p className="relative text-[11px] text-slate-400 font-bold leading-relaxed uppercase tracking-wider">
                {card.desc}
              </p>

              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-1 bg-estacio-cyan rounded-full"></div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Home;