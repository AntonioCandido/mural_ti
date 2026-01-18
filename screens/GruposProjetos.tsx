import React from 'react';
import { CoordinatorWidget } from '../constants';
import { ChevronLeft, Hammer } from 'lucide-react';

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
        <h2 className="text-4xl md:text-6xl font-black text-estacio-navy italic uppercase tracking-tighter mb-8">Grupos e <span className="text-estacio-cyan">Projetos</span></h2>
        
        <div className="bg-white border-4 border-dashed border-slate-100 p-24 rounded-[4rem] text-center mb-16">
          <Hammer size={64} className="text-slate-200 mx-auto mb-8" />
          <h3 className="text-2xl font-black text-slate-300 italic uppercase mb-4">Em Construção</h3>
          <p className="text-slate-400 font-medium max-w-sm mx-auto">
            Estamos preparando um espaço para fomentar a troca de experiências e projetos colaborativos. Em breve, inscrições via Teams/Discord.
          </p>
        </div>

        <CoordinatorWidget tip="O networking feito na faculdade pode render parcerias para a vida toda. Participe de projetos extracurriculares e conecte-se com seus colegas hoje!" />
      </div>
    </div>
  );
};

export default GruposProjetos;