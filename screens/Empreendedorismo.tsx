import React from 'react';
import { CoordinatorWidget } from '../constants';
import { ChevronLeft, Rocket, Building } from 'lucide-react';

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
          <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
            <Building className="text-estacio-navy mb-6" size={40} />
            <h3 className="text-2xl font-black text-estacio-navy italic uppercase mb-6">Incubadoras</h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              Focadas em negócios em estágio muito inicial, oferecendo infraestrutura e mentoria básica para validar sua ideia.
            </p>
          </div>
          <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
            <Rocket className="text-estacio-amber" size={40} />
            <h3 className="text-2xl font-black text-estacio-navy italic uppercase mb-6">Aceleradoras</h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              Para quem já tem um MVP (Produto Mínimo Viável) e busca escala rápida através de investimento e rede de contatos.
            </p>
          </div>
        </div>

        <div className="bg-slate-900 p-12 rounded-[4rem] text-white mb-16">
          <h3 className="text-2xl font-black italic uppercase mb-10 text-center">Recursos Essenciais</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <a href="https://www.sebrae.com.br" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-8 rounded-3xl hover:bg-white/10 transition-colors text-center">
              <h4 className="font-bold text-estacio-amber mb-2">SEBRAE</h4>
              <p className="text-[10px] font-bold uppercase opacity-60">Consultoria e Planos</p>
            </a>
            <a href="https://www.bndes.gov.br" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-8 rounded-3xl hover:bg-white/10 transition-colors text-center">
              <h4 className="font-bold text-estacio-amber mb-2">BNDES</h4>
              <p className="text-[10px] font-bold uppercase opacity-60">Financiamento</p>
            </a>
            <a href="https://www.gov.br/empresas-e-negocios" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-8 rounded-3xl hover:bg-white/10 transition-colors text-center">
              <h4 className="font-bold text-estacio-amber mb-2">Gov.br</h4>
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