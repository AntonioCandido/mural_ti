
import React from 'react';
import { CoordinatorWidget } from '../constants';
import { ChevronLeft, Hammer, Construction, Sparkles } from 'lucide-react';

const GruposProjetos: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-8 fade-in">
      <a href="#/home" className="group inline-flex items-center gap-3 text-slate-400 hover:text-estacio-navy font-black uppercase text-[10px] tracking-widest mb-16 transition-all">
        <span className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-estacio-navy transition-colors">
          <ChevronLeft size={14} />
        </span>
        Voltar
      </a>

      <div className="max-w-5xl">
        <h2 className="text-4xl md:text-6xl font-black text-estacio-navy italic uppercase tracking-tighter mb-12">Grupos e <span className="text-estacio-cyan">Projetos</span></h2>
        
        <div className="relative bg-estacio-navy p-16 md:p-32 rounded-[5rem] text-center mb-16 shadow-2xl overflow-hidden border border-white/10 -translate-y-2">
          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-estacio-cyan/10 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full"></div>
          <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>

          <div className="relative z-10">
            <div className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center text-estacio-navy mx-auto mb-10 shadow-2xl rotate-[8deg]">
              <Construction size={48} />
            </div>
            
            <h3 className="text-4xl md:text-5xl font-black text-white italic uppercase mb-6 tracking-tight flex items-center justify-center gap-4">
              <Sparkles className="text-estacio-cyan" /> Em Construção
            </h3>
            
            <p className="text-white/70 font-bold text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-12 italic">
              Estamos codificando uma plataforma integrada para matchmaking de times, repositórios compartilhados e mentorias via Teams.
            </p>

            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 px-8 py-4 rounded-full text-white font-black uppercase text-[10px] tracking-widest italic">
              <span className="w-2 h-2 bg-estacio-cyan rounded-full animate-ping"></span>
              Lançamento previsto para Abril 2026
            </div>
          </div>
        </div>

        <CoordinatorWidget tip="O networking que você faz aqui vale mais que qualquer diploma isolado. Em breve, você poderá encontrar sócios e parceiros para seus projetos de software diretamente por aqui." />
      </div>
    </div>
  );
};

export default GruposProjetos;
