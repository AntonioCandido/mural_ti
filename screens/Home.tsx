
import React from 'react';
import { CARDS_DATA } from '../constants';

const Home: React.FC = () => {
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    window.location.hash = target;
  };

  return (
    <div className="container mx-auto px-6 py-12 md:py-20 fade-in">
      <header className="max-w-5xl mb-24 text-center mx-auto">
        <div className="flex flex-col items-center mb-10 gap-5">
          <div className="inline-flex items-center bg-estacio-navy rounded-full p-1 pr-6 shadow-2xl border border-white/10 group hover:scale-105 transition-transform">
            <div className="bg-estacio-cyan px-4 py-2 rounded-full shadow-inner">
              <span className="text-estacio-navy font-black text-[10px] uppercase tracking-widest italic">Mural</span>
            </div>
            <span className="text-white/40 font-black text-[9px] uppercase tracking-[0.2em] ml-4 italic">Tecnologia da Informação</span>
          </div>
          <span className="text-[10px] md:text-[12px] font-black text-slate-400 uppercase tracking-[0.3em] italic bg-slate-100 px-6 py-2 rounded-xl">
            Taquara R9 • Barra Tom Jobim
          </span>
        </div>
        <h2 className="text-5xl md:text-8xl font-black text-estacio-navy italic uppercase tracking-tighter leading-none mb-10">
          Hub de <span className="text-estacio-cyan">Carreira</span><br/>& <span className="text-estacio-amber">Recursos</span>
        </h2>
        <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto">
          Centralizamos trilhas de estudo, vagas, concursos e suporte acadêmico para impulsionar seu futuro na tecnologia.
        </p>
      </header>

      <nav aria-label="Menu Principal de Recursos" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {CARDS_DATA.map((card) => {
          const Icon = card.icon;
          return (
            <article key={card.id}>
              <a 
                href={card.id}
                onClick={(e) => handleNavigation(e, card.id)}
                className={`group relative bg-white p-10 rounded-[3.5rem] border-2 border-slate-50 ${card.color} shadow-sm hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-2 transition-all flex flex-col items-center text-center overflow-hidden h-full`}
                aria-label={`Ver informações sobre ${card.title}`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-full -mr-12 -mt-12 group-hover:bg-estacio-navy/5 transition-colors"></div>
                
                <div className="relative w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center text-estacio-navy mb-8 group-hover:scale-110 group-hover:bg-estacio-navy group-hover:text-white transition-all shadow-inner">
                  <Icon size={36} aria-hidden="true" />
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
            </article>
          );
        })}
      </nav>
    </div>
  );
};

export default Home;
