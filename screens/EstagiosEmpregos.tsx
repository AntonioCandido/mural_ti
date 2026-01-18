
import React from 'react';
import { CoordinatorWidget } from '../constants';
import { ChevronLeft, Target, Globe, BookOpen, Download, Smartphone, ChevronRight } from 'lucide-react';

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
          {/* Card: E-book Grátis */}
          <a 
            href="https://cdn.portal.estacio.br/empregabilidade_estacio_37a8c1bb2c.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group bg-white p-8 rounded-[3rem] border-2 border-slate-50 shadow-sm hover:shadow-2xl hover:border-indigo-500 transition-all text-center flex flex-col items-center h-full"
          >
            <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
              <BookOpen size={32} />
            </div>
            <h4 className="font-black text-estacio-navy mb-4 italic uppercase leading-tight">E-book Grátis</h4>
            <p className="text-[11px] text-slate-400 font-bold mb-6">Quer saber tudo sobre Empregabilidade? Ganhe um e-book grátis!</p>
            <div className="mt-auto flex items-center gap-2 text-[9px] font-black uppercase text-indigo-500 tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              Download PDF <Download size={12} />
            </div>
          </a>

          {/* Card: CIEE */}
          <a href="https://www.ciee.org.br/" target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-[3rem] border-2 border-slate-50 shadow-sm hover:shadow-2xl hover:border-blue-500 transition-all text-center flex flex-col items-center h-full">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
              <Target size={32} />
            </div>
            <h4 className="font-black text-estacio-navy mb-4 italic uppercase">CIEE</h4>
            <p className="text-[11px] text-slate-400 font-bold">Portal oficial para contratação de estagiários no Brasil.</p>
          </a>

          {/* Card: Vagas Estácio (Destaque) */}
          <a href="https://www.encontresuavaga.com.br/" target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-[4rem] border border-slate-100 shadow-2xl shadow-slate-200/40 hover:shadow-cyan-100 hover:border-estacio-cyan transition-all text-center flex flex-col items-center justify-center min-h-[300px] h-full">
            <div className="w-20 h-20 bg-cyan-50/70 rounded-[2.5rem] flex items-center justify-center text-estacio-cyan mb-8">
              <Globe size={44} />
            </div>
            <h4 className="font-black text-estacio-navy text-2xl mb-4 italic uppercase tracking-tighter">Vagas Estácio</h4>
            <p className="text-[13px] text-slate-400 font-bold max-w-[180px] leading-relaxed">Encontre Sua Vaga - Exclusivo para alunos e parceiros.</p>
          </a>

          {/* Card: Testador Beta (Tester Work) */}
          <a 
            href="https://testerwork.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group bg-white p-8 rounded-[3rem] border-2 border-slate-50 shadow-sm hover:shadow-2xl hover:border-purple-500 transition-all text-center flex flex-col items-center h-full"
          >
            <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all">
              <Smartphone size={32} />
            </div>
            <h4 className="font-black text-estacio-navy mb-4 italic uppercase leading-tight">Testador Beta</h4>
            <p className="text-[11px] text-slate-400 font-bold mb-6">Ganhe dinheiro testando aplicativos e sites reais.</p>
            <div className="mt-auto flex items-center gap-2 text-[9px] font-black uppercase text-purple-500 tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              Acessar TesterWork <ChevronRight size={12} />
            </div>
          </a>

          {/* Card: Freelance */}
          <a href="https://www.workana.com/pt/jobs?country=BR" target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-[3rem] border-2 border-slate-50 shadow-sm hover:shadow-2xl hover:border-amber-500 transition-all text-center flex flex-col items-center h-full">
            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500 mb-6">
              <Globe size={32} />
            </div>
            <h4 className="font-black text-estacio-navy mb-4 italic uppercase">Freelance</h4>
            <p className="text-[11px] text-slate-400 font-bold">Inicie sua carreira com projetos reais no Workana.</p>
          </a>
        </div>

        <div className="bg-slate-900 p-12 rounded-[4rem] text-white mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-estacio-cyan/5 blur-[100px] rounded-full"></div>
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
