
import React from 'react';
import { CARDS_DATA } from '../constants';
import { MapPin } from 'lucide-react';

const Home: React.FC = () => {
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    window.location.hash = target;
  };

  return (
    <div className="container mx-auto px-6 pt-4 pb-12 fade-in">
      <header className="max-w-5xl mb-16 text-center mx-auto flex flex-col items-center">
        
        {/* Unidades - Design de Linha Única com Texto Atualizado */}
        <div className="mb-12 group">
          <div className="inline-flex items-center gap-4 bg-white/40 backdrop-blur-md border border-slate-200/60 px-5 py-2.5 rounded-full shadow-sm group-hover:shadow-md group-hover:border-estacio-cyan/30 transition-all duration-500">
            
            {/* Tag de Contexto */}
            <span className="bg-estacio-amber text-estacio-navy text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full italic">
              Unidades
            </span>

            {/* Texto das Unidades em Linha Única */}
            <div className="flex items-center gap-3 md:gap-5">
              <div className="flex items-center gap-2">
                <MapPin size={12} className="text-estacio-navy/40" />
                <span className="text-[10px] md:text-[11px] font-bold text-estacio-navy/60 uppercase tracking-wider whitespace-nowrap">
                  R9 - <span className="font-black italic text-estacio-navy">Taquara</span>
                </span>
              </div>

              <span className="w-px h-3 bg-slate-300"></span>

              <div className="flex items-center gap-2">
                <MapPin size={12} className="text-estacio-cyan/60" />
                <span className="text-[10px] md:text-[11px] font-bold text-estacio-navy/60 uppercase tracking-wider whitespace-nowrap">
                  Tom Jobim - <span className="text-estacio-cyan font-black italic">Barra da Tijuca</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Heading Section */}
        <h2 className="flex flex-col items-center gap-0 leading-[0.82] mb-10">
          <span className="text-5xl md:text-8xl font-black text-estacio-navy italic uppercase tracking-tighter">
            HUB DE
          </span>
          <span className="text-6xl md:text-9xl font-black text-estacio-cyan italic uppercase tracking-tighter">
            CARREIRA
          </span>
          <span className="text-5xl md:text-8xl font-black text-estacio-amber italic uppercase tracking-tighter">
            & RECURSOS
          </span>
        </h2>

        <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
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
