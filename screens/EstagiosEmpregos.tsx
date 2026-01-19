
import React from 'react';
import { CoordinatorWidget } from '../constants';
import { ChevronLeft, Target, Globe, BookOpen, Download, Smartphone, ChevronRight } from 'lucide-react';

const VAGAS_LINKS = [
  { 
    title: 'E-book Grátis', 
    url: 'https://cdn.portal.estacio.br/empregabilidade_estacio_37a8c1bb2c.pdf', 
    desc: 'Guia completo sobre Empregabilidade em TI.', 
    icon: BookOpen, 
    color: 'bg-indigo-600', 
    action: 'Download PDF' 
  },
  { 
    title: 'CIEE', 
    url: 'https://www.ciee.org.br/', 
    desc: 'Portal oficial para contratação de estagiários.', 
    icon: Target, 
    color: 'bg-blue-600', 
    action: 'Ver Vagas' 
  },
  { 
    title: 'Vagas Estácio', 
    url: 'https://www.encontresuavaga.com.br/', 
    desc: 'Encontre Sua Vaga - Exclusivo para alunos.', 
    icon: Globe, 
    color: 'bg-estacio-cyan', 
    action: 'Acessar Hub' 
  },
  { 
    title: 'Testador Beta', 
    url: 'https://testerwork.com/', 
    desc: 'Ganhe dinheiro testando apps reais.', 
    icon: Smartphone, 
    color: 'bg-purple-600', 
    action: 'TesterWork' 
  },
  { 
    title: 'Freelance', 
    url: 'https://www.workana.com/pt/jobs?country=BR', 
    desc: 'Inicie sua carreira com projetos reais.', 
    icon: Globe, 
    color: 'bg-amber-500', 
    action: 'Workana BR' 
  }
];

const EstagiosEmpregos: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-8 fade-in">
      <a href="#/home" className="group inline-flex items-center gap-3 text-slate-400 hover:text-estacio-navy font-black uppercase text-[10px] tracking-widest mb-16 transition-all">
        <span className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-estacio-navy transition-colors">
          <ChevronLeft size={14} />
        </span>
        Voltar
      </a>

      <div className="max-w-6xl">
        <h2 className="text-4xl md:text-6xl font-black text-estacio-navy italic uppercase tracking-tighter mb-8">Estágios e <span className="text-estacio-cyan">Empregos</span></h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {VAGAS_LINKS.map((link, i) => {
            const Icon = link.icon;
            const isCyan = link.color === 'bg-estacio-cyan';
            
            return (
              <a 
                key={i}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`relative p-8 rounded-[3rem] border border-white/20 shadow-2xl -translate-y-1 transition-all text-center flex flex-col items-center h-full ${link.color}`}
              >
                <div className="absolute inset-0 bg-white/10"></div>
                
                <div className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-white shadow-lg rotate-[4deg] ${isCyan ? 'text-estacio-navy' : link.color.replace('bg-', 'text-')}`}>
                  <Icon size={32} />
                </div>
                
                <h4 className={`relative z-10 font-black mb-4 italic uppercase leading-tight text-lg ${isCyan ? 'text-estacio-navy' : 'text-white'}`}>
                  {link.title}
                </h4>
                
                <p className={`relative z-10 text-[11px] font-bold mb-6 opacity-90 ${isCyan ? 'text-estacio-navy/70' : 'text-white/80'}`}>
                  {link.desc}
                </p>
                
                <div className={`relative z-10 mt-auto flex items-center gap-2 text-[9px] font-black uppercase tracking-widest ${isCyan ? 'text-estacio-navy' : 'text-white'}`}>
                  {link.action} {link.action.includes('PDF') ? <Download size={12} /> : <ChevronRight size={12} />}
                </div>
              </a>
            );
          })}
        </div>

        <div className="bg-slate-900 p-12 rounded-[4rem] text-white mb-16 relative overflow-hidden shadow-2xl border border-white/5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-estacio-cyan/10 blur-[100px] rounded-full"></div>
          <h3 className="text-2xl font-black italic uppercase mb-8 relative z-10">Dicas para seu Currículo</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm font-medium opacity-80 relative z-10">
            <div>
              <h5 className="text-estacio-cyan font-bold uppercase mb-4 tracking-widest text-[11px]">O que destacar</h5>
              <ul className="space-y-3">
                <li>• Projetos no GitHub e participação Open Source</li>
                <li>• Conhecimentos em Git e metodologias ágeis</li>
                <li>• Certificações de nuvem (AWS/Azure/GCP)</li>
              </ul>
            </div>
            <div>
              <h5 className="text-estacio-amber font-bold uppercase mb-4 tracking-widest text-[11px]">Portfólio Remoto</h5>
              <p className="leading-relaxed">Construa um portfólio que fale por você. Para o exterior, o inglês é sua maior ferramenta técnica, não apenas um diferencial.</p>
            </div>
          </div>
        </div>

        <CoordinatorWidget tip="O estágio é a melhor fase para errar e aprender. Não tenha medo de fazer perguntas 'bobas', a curiosidade acelera seu crescimento exponencialmente." />
      </div>
    </div>
  );
};

export default EstagiosEmpregos;
