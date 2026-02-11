
import React from 'react';
import CoordinatorWidget from '../components/CoordinatorWidget.tsx';
import BackButton from '../components/BackButton.tsx';
import { 
  GitBranch, MessageSquare, 
  HeartHandshake, Kanban, FileText, Share2, 
  Sparkles, Construction, CheckCircle2, UserPlus,
  Award
} from 'lucide-react';

const GruposProjetos: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20 fade-in bg-slate-50/30">
      <BackButton />

      <div className="max-w-6xl mx-auto">
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-orange-500/10 text-orange-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-orange-500/20">
              Colaboração & Extensão
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-estacio-navy italic uppercase tracking-tighter mb-8 leading-none">
            Grupos e <span className="text-orange-500">Projetos</span>
          </h2>
        </header>

        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-xl">
              <div className="w-14 h-14 bg-orange-500/10 text-orange-600 rounded-2xl flex items-center justify-center mb-8">
                <GitBranch size={28} />
              </div>
              <h4 className="font-black text-estacio-navy italic text-xl mb-4 uppercase tracking-tight">Git e Fluxo</h4>
              <p className="text-[11px] font-bold text-slate-500 uppercase leading-relaxed">Defina padrões de commits para aprendizado mútuo.</p>
            </div>
          </div>
        </section>

        <CoordinatorWidget tip="O networking que você faz em projetos reais vale mais que qualquer diploma isolado." />
      </div>
    </div>
  );
};

export default GruposProjetos;
