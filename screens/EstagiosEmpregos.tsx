import React from 'react';
import { CoordinatorWidget } from '../constants';
import { ChevronLeft, Target, Globe } from 'lucide-react';

const EstagiosEmpregos: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-8 fade-in">
      <a href="#/home" className="group inline-flex items-center gap-3 text-slate-400 hover:text-estacio-navy font-black uppercase text-[10px] tracking-widest mb-16 transition-all">
        <span className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-estacio-navy transition-colors">
          <ChevronLeft size={14} />
        </span>
        Voltar
      </a>

      <div className="max-w-5xl">
        <h2 className="text-4xl md:text-6xl font-black text-estacio-navy italic uppercase tracking-tighter mb-8">Estágios e <span className="text-estacio-cyan">Empregos</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <a href="https://www.ciee.org.br/" target="_blank" rel="noopener noreferrer" className="bg-white p-10 rounded-[3rem] border-2 border-slate-50 shadow-sm hover:shadow-2xl hover:border-blue-500 transition-all text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
              <Target size={32} />
            </div>
            <h4 className="font-black text-estacio-navy mb-4 italic uppercase">CIEE</h4>
            <p className="text-xs text-slate-400 font-bold">Portal oficial para contratação de estagiários no Brasil.</p>
          </a>

          <a href="https://encontresuavaga.com.br/" target="_blank" rel="noopener noreferrer" className="bg-white p-10 rounded-[3rem] border-2 border-slate-50 shadow-sm hover:shadow-2xl hover:border-estacio-cyan transition-all text-center">
            <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center text-estacio-cyan mx-auto mb-6">
              <Globe size={32} />
            </div>
            <h4 className="font-black text-estacio-navy mb-4 italic uppercase">Vagas Estácio</h4>
            <p className="text-xs text-slate-400 font-bold">Encontre Sua Vaga - Exclusivo para alunos e parceiros.</p>
          </a>

          <a href="https://www.workana.com/pt/jobs?country=BR" target="_blank" rel="noopener noreferrer" className="bg-white p-10 rounded-[3rem] border-2 border-slate-50 shadow-sm hover:shadow-2xl hover:border-amber-500 transition-all text-center">
            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500 mx-auto mb-6">
              <Globe size={32} />
            </div>
            <h4 className="font-black text-estacio-navy mb-4 italic uppercase">Freelance</h4>
            <p className="text-xs text-slate-400 font-bold">Inicie sua carreira com projetos reais no Workana.</p>
          </a>
        </div>

        <div className="bg-slate-900 p-12 rounded-[4rem] text-white mb-16">
          <h3 className="text-2xl font-black italic uppercase mb-8">Dicas para seu Currículo</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm font-medium opacity-80">
            <div>
              <h5 className="text-estacio-cyan font-bold uppercase mb-4 tracking-widest">O que destacar</h5>
              <ul className="space-y-3">
                <li>• Projetos no GitHub e participação Open Source</li>
                <li>• Conhecimentos em Git e metodologias ágeis</li>
                <li>• Certificações de nuvem (AWS/Azure/GCP)</li>
              </ul>
            </div>
            <div>
              <h5 className="text-estacio-amber font-bold uppercase mb-4 tracking-widest">Portfólio Remoto</h5>
              <p>Construa um portfólio que fale por você. Para o exterior, o inglês é sua maior ferramenta técnica.</p>
            </div>
          </div>
        </div>

        <CoordinatorWidget tip="O estágio é a melhor fase para errar e aprender. Não tenha medo de fazer perguntas 'bobas', a curiosidade acelera seu crescimento exponencialmente." />
      </div>
    </div>
  );
};

export default EstagiosEmpregos;