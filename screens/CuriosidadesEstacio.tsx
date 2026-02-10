
import React from 'react';
import CoordinatorWidget from '../components/CoordinatorWidget.tsx';
import BackButton from '../components/BackButton.tsx';
import { 
  History, Tablet, Users, Award, 
  Zap, Target, Briefcase,
  GraduationCap, Star, TrendingUp, Globe, CheckCircle2
} from 'lucide-react';

const CURIOSITIES = [
  { title: "Raízes Cariocas", desc: "A Estácio nasceu em 1970 no Rio de Janeiro.", icon: History, color: "text-estacio-navy", bg: "bg-estacio-navy/10" },
  { title: "Pioneirismo", desc: "Primeira a oferecer tablets gratuitos em 2011.", icon: Tablet, color: "text-estacio-cyan", bg: "bg-estacio-cyan/10" },
];

const CuriosidadesEstacio: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20 fade-in bg-slate-50/30">
      <BackButton />

      <div className="max-w-6xl mx-auto">
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-estacio-navy/10 text-estacio-navy px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-estacio-navy/20">
              Sobre Nossa Instituição
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-estacio-navy italic uppercase tracking-tighter mb-8 leading-none">
            Curiosidades <span className="text-estacio-cyan text-stroke-navy">Estácio</span>
          </h2>
        </header>

        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CURIOSITIES.map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-xl flex flex-col items-start transition-all hover:-translate-y-2 group">
                <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <item.icon size={28} />
                </div>
                <h4 className="font-black text-estacio-navy italic text-xl mb-4 uppercase">{item.title}</h4>
                <p className="text-sm font-bold text-slate-400 uppercase">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <CoordinatorWidget tip="A história da Estácio é a prova de que grandes sonhos começam pequenos." />
      </div>
    </div>
  );
};

export default CuriosidadesEstacio;
