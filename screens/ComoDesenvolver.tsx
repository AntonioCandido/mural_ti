
import React from 'react';
import { CoordinatorWidget } from '../constants';
import { ChevronLeft, ExternalLink, Code2, Globe, Database, Shield, Cpu, Layout, Terminal, Gamepad2, Layers } from 'lucide-react';

const CATEGORIES = [
  { name: 'Plataformas', link: 'platforms', desc: 'Sistemas operacionais, cloud e ecossistemas.', icon: Layers, color: 'blue' },
  { name: 'Linguagens', link: 'programming-languages', desc: 'Trilhas de JS, Python, Rust, Go e mais.', icon: Terminal, color: 'cyan' },
  { name: 'Front-End', link: 'front-end-development', desc: 'Frameworks, ferramentas de UI e UX.', icon: Layout, color: 'emerald' },
  { name: 'Back-End', link: 'back-end-development', desc: 'Infra, servidores e lógica de API.', icon: Database, color: 'amber' },
  { name: 'Ciência da Computação', link: 'computer-science', desc: 'Algoritmos, estruturas e teoria.', icon: Code2, color: 'purple' },
  { name: 'Segurança', link: 'security', desc: 'Cybersecurity, pentest e defesa digital.', icon: Shield, color: 'orange' },
  // Fixed: Replaced the non-existent 'Pink' icon with 'Globe' for the Big Data category.
  { name: 'Big Data', link: 'big-data', desc: 'Data Science, análise e processamento.', icon: Globe, color: 'pink' },
  { name: 'Jogos', link: 'gaming', desc: 'Motores, design e lógica de games.', icon: Gamepad2, color: 'indigo' },
  { name: 'Hardware', link: 'hardware', desc: 'IoT, Arduino, eletrônica e robótica.', icon: Cpu, color: 'navy' },
];

const colorMap: Record<string, { bg: string, text: string, border: string, iconBg: string }> = {
  blue: { bg: 'bg-blue-600', text: 'text-white', border: 'border-blue-400/30', iconBg: 'bg-white text-blue-600' },
  cyan: { bg: 'bg-estacio-cyan', text: 'text-estacio-navy', border: 'border-white/20', iconBg: 'bg-white text-estacio-cyan' },
  emerald: { bg: 'bg-emerald-600', text: 'text-white', border: 'border-emerald-400/30', iconBg: 'bg-white text-emerald-600' },
  amber: { bg: 'bg-estacio-amber', text: 'text-estacio-navy', border: 'border-white/20', iconBg: 'bg-white text-estacio-amber' },
  purple: { bg: 'bg-purple-600', text: 'text-white', border: 'border-purple-400/30', iconBg: 'bg-white text-purple-600' },
  orange: { bg: 'bg-orange-600', text: 'text-white', border: 'border-orange-400/30', iconBg: 'bg-white text-orange-600' },
  pink: { bg: 'bg-pink-600', text: 'text-white', border: 'border-pink-400/30', iconBg: 'bg-white text-pink-600' },
  indigo: { bg: 'bg-indigo-600', text: 'text-white', border: 'border-indigo-400/30', iconBg: 'bg-white text-indigo-600' },
  navy: { bg: 'bg-estacio-navy', text: 'text-white', border: 'border-white/10', iconBg: 'bg-white text-estacio-navy' },
};

const ComoDesenvolver: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-8 fade-in">
      <a href="#/home" className="group inline-flex items-center gap-3 text-slate-400 hover:text-estacio-navy font-black uppercase text-[10px] tracking-widest mb-16 transition-all">
        <span className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-estacio-navy transition-colors">
          <ChevronLeft size={14} />
        </span>
        Voltar
      </a>

      <div className="max-w-6xl">
        <header className="mb-20">
          <h2 className="text-4xl md:text-7xl font-black text-estacio-navy italic uppercase tracking-tighter mb-8 leading-none">
            Como <span className="text-estacio-cyan">Desenvolver</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium max-w-3xl leading-relaxed">
            Estude por trilhas organizadas. Abaixo, uma curadoria inspirada no projeto <strong className="text-estacio-navy">Awesome</strong> (Sindre Sorhus), apresentada em estado de alerta máximo para o seu aprendizado.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {CATEGORIES.map((cat, i) => {
            const styles = colorMap[cat.color] || colorMap.navy;
            const Icon = cat.icon;
            
            return (
              <a 
                key={i} 
                href={`https://github.com/sindresorhus/awesome#${cat.link}`} 
                target="_blank"
                rel="noopener noreferrer"
                className={`relative p-8 rounded-[3rem] border shadow-2xl shadow-slate-200/50 flex flex-col items-start transition-all duration-300 -translate-y-1 ${styles.bg} ${styles.border}`}
              >
                {/* Visual Glass Shine */}
                <div className="absolute inset-0 bg-white/10"></div>
                
                <div className="relative z-10 w-full flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg rotate-[4deg] ${styles.iconBg}`}>
                    <Icon size={28} strokeWidth={2.5} />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                    <ExternalLink size={16} />
                  </div>
                </div>
                
                <h4 className={`relative z-10 font-black italic uppercase text-lg mb-3 tracking-tight ${styles.text}`}>
                  {cat.name}
                </h4>
                
                <p className={`relative z-10 text-xs font-bold leading-relaxed opacity-90 ${styles.text}`}>
                  {cat.desc}
                </p>
              </a>
            );
          })}
        </div>

        <div className="bg-slate-900 p-12 md:p-16 rounded-[4rem] text-center mb-16 border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-estacio-cyan/10 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <p className="text-white/60 font-medium mb-10 text-lg relative z-10">Acesse o repositório completo com milhares de recursos gratuitos:</p>
          <a href="https://github.com/sindresorhus/awesome" target="_blank" rel="noopener noreferrer" className="relative z-10 inline-block bg-estacio-cyan text-estacio-navy px-12 py-5 rounded-[2rem] font-black uppercase italic tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-estacio-cyan/20">
            Ir para o Awesome Repo
          </a>
        </div>

        <CoordinatorWidget tip="Não tente aprender tudo de uma vez. Escolha uma trilha, domine os fundamentos sólidos e construa projetos reais para validar seu aprendizado." />
      </div>
    </div>
  );
};

export default ComoDesenvolver;
