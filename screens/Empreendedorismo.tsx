
import React from 'react';
import CoordinatorWidget from '../components/CoordinatorWidget.tsx';
import BackButton from '../components/BackButton.tsx';
import { 
  Rocket, Building, Zap, ShieldCheck, 
  Leaf, Target, CheckCircle2, BarChart3, 
  Search, Wallet, MessageSquare
} from 'lucide-react';

const TRENDS = [
  { title: "IA Competitiva", desc: "IA além da geração de texto.", icon: Zap, color: "text-purple-500", bg: "bg-purple-500/5" },
  { title: "Green Tech", desc: "Softwares de sustentabilidade.", icon: Leaf, color: "text-emerald-500", bg: "bg-emerald-500/5" },
];

const Empreendedorismo: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20 fade-in bg-slate-50/30">
      <BackButton />

      <div className="max-w-6xl mx-auto">
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-estacio-amber/10 text-estacio-amber px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-estacio-amber/20">
              Startup Mindset 2026
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-estacio-navy italic uppercase tracking-tighter mb-8 leading-none">
            Empreende<span className="text-estacio-amber text-stroke-navy">dorismo Tech</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-4xl leading-relaxed">
            Conecte arquitetura de sistemas à estratégia de negócios.
          </p>
        </header>

        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TRENDS.map((trend, i) => (
              <div key={i} className="p-10 rounded-[3.5rem] border border-slate-100 shadow-xl bg-white flex flex-col h-full">
                <div className={`w-14 h-14 ${trend.bg} ${trend.color} rounded-2xl flex items-center justify-center mb-8`}>
                  <trend.icon size={28} />
                </div>
                <h4 className="font-black text-estacio-navy italic text-xl mb-4 leading-tight uppercase tracking-tight">{trend.title}</h4>
                <p className="text-[11px] font-bold text-slate-500 uppercase leading-relaxed">{trend.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <CoordinatorWidget tip="Toda grande solução nasce de um problema real." />
      </div>
    </div>
  );
};

export default Empreendedorismo;
