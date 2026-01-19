
import React from 'react';
import { CoordinatorWidget } from '../constants';
import { ChevronLeft, Rocket, Building, Globe } from 'lucide-react';

const Empreendedorismo: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-8 fade-in">
      <a href="#/home" className="group inline-flex items-center gap-3 text-slate-400 hover:text-estacio-navy font-black uppercase text-[10px] tracking-widest mb-16 transition-all">
        <span className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-estacio-navy transition-colors">
          <ChevronLeft size={14} />
        </span>
        Voltar
      </a>

      <div className="max-w-5xl">
        <h2 className="text-4xl md:text-6xl font-black text-estacio-navy italic uppercase tracking-tighter mb-12">Empreende<span className="text-estacio-amber">dorismo</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-estacio-navy p-10 rounded-[3rem] border border-blue-800 shadow-2xl -translate-y-1 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5"></div>
            <div className="relative z-10 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-estacio-navy mb-6 shadow-xl rotate-[4deg]">
              <Building size={32} />
            </div>
            <h3 className="relative z-10 text-2xl font-black italic uppercase mb-6 text-estacio-cyan">Incubadoras</h3>
            <p className="relative z-10 text-white/70 font-bold text-sm leading-relaxed">
              Focadas em negócios em estágio muito inicial, oferecendo infraestrutura e mentoria básica para validar sua ideia.
            </p>
          </div>
          
          <div className="bg-estacio-amber p-10 rounded-[3rem] border border-amber-400 shadow-2xl -translate-y-1 text-estacio-navy relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20"></div>
            <div className="relative z-10 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-estacio-amber mb-6 shadow-xl -rotate-[4deg]">
              <Rocket size={32} />
            </div>
            <h3 className="relative z-10 text-2xl font-black italic uppercase mb-6">Aceleradoras</h3>
            <p className="relative z-10 text-estacio-navy/70 font-bold text-sm leading-relaxed">
              Para quem já tem um MVP (Produto Mínimo Viável) e busca escala rápida através de investimento e rede de contatos.
            </p>
          </div>
        </div>

        <div className="bg-slate-900 p-12 rounded-[4rem] text-white mb-16 shadow-2xl border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-estacio-cyan/10 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <h3 className="text-2xl font-black italic uppercase mb-10 text-center relative z-10">Recursos Essenciais</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative z-10">
            <a href="https://www.sebrae.com.br" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white hover:text-estacio-navy transition-all text-center shadow-lg -translate-y-1">
              <h4 className="font-black text-estacio-amber mb-2 uppercase text-sm">SEBRAE</h4>
              <p className="text-[10px] font-bold uppercase opacity-60">Consultoria e Planos</p>
            </a>
            <a href="https://www.bndes.gov.br" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white hover:text-estacio-navy transition-all text-center shadow-lg -translate-y-1">
              <h4 className="font-black text-estacio-amber mb-2 uppercase text-sm">BNDES</h4>
              <p className="text-[10px] font-bold uppercase opacity-60">Financiamento</p>
            </a>
            <a href="https://www.gov.br/empresas-e-negocios" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white hover:text-estacio-navy transition-all text-center shadow-lg -translate-y-1">
              <h4 className="font-black text-estacio-amber mb-2 uppercase text-sm">Gov.br</h4>
              <p className="text-[10px] font-bold uppercase opacity-60">Portal Empreendedor</p>
            </a>
          </div>
        </div>

        <CoordinatorWidget tip="Toda grande solução nasce de um problema real. Antes de codar, valide se sua ideia resolve uma dor latente do mercado. Escute o seu cliente primeiro." />
      </div>
    </div>
  );
};

export default Empreendedorismo;
