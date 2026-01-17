import React from 'react';
import { CoordinatorWidget } from '../constants';
import { ChevronLeft, ChevronRight, Zap, DollarSign, Award } from 'lucide-react';

const ProfissionaisTI: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 fade-in">
      <a href="#/home" className="group inline-flex items-center gap-3 text-slate-400 hover:text-estacio-navy font-black uppercase text-[10px] tracking-widest mb-16 transition-all">
        <span className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-estacio-navy transition-colors">
          <ChevronLeft size={14} />
        </span>
        Voltar
      </a>

      <div className="max-w-6xl mx-auto">
        <header className="mb-20">
          <h2 className="text-5xl md:text-8xl font-black text-estacio-navy italic uppercase tracking-tighter mb-8 leading-none">
            Profissionais <span className="text-estacio-cyan">de TI</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-4xl leading-relaxed">
            A área de tecnologia é, hoje, a espinha dorsal de qualquer economia moderna. Entenda as oportunidades, os salários e como se posicionar.
          </p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="lg:col-span-2 bg-white p-12 md:p-16 rounded-[4rem] border border-slate-100 shadow-sm">
            <h3 className="text-2xl font-black text-estacio-navy italic uppercase mb-8 flex items-center gap-4">
              <Award className="text-estacio-amber" /> Por que TI vale a pena?
            </h3>
            <div className="prose prose-lg max-w-none text-slate-600 font-medium space-y-6">
              <p>O mercado de TI no Brasil e no mundo vive uma escassez crônica de talentos qualificados. Isso se traduz em salários acima da média, benefícios agressivos e a possibilidade real de trabalhar para empresas globais sem sair de casa.</p>
              <p>Segundo o <strong>Guia Salarial Robert Half 2026</strong>, cargos de liderança técnica e especialistas em dados/IA lideram o crescimento de remuneração.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                <div className="p-8 bg-slate-50 rounded-3xl">
                  <h4 className="font-black text-estacio-navy text-xs uppercase tracking-widest mb-4">Média Salarial (BR)</h4>
                  <ul className="space-y-4 text-sm font-bold text-slate-500">
                    <li className="flex justify-between border-b border-slate-200 pb-2"><span>Junior</span> <span className="text-estacio-navy">R$ 5k - 8k</span></li>
                    <li className="flex justify-between border-b border-slate-200 pb-2"><span>Pleno</span> <span className="text-estacio-navy">R$ 9k - 14k</span></li>
                    <li className="flex justify-between"><span>Senior</span> <span className="text-estacio-navy">R$ 15k - 25k+</span></li>
                  </ul>
                </div>
                <div className="p-8 bg-estacio-navy text-white rounded-3xl">
                  <h4 className="font-black text-estacio-cyan text-xs uppercase tracking-widest mb-4">Carreira Global</h4>
                  <p className="text-sm leading-relaxed opacity-90">Vagas remotas nos EUA/Europa podem pagar de $4k a $12k dólares por mês, multiplicando seu poder de compra.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="bg-estacio-cyan p-10 rounded-[3.5rem] text-estacio-navy">
              <Zap size={40} className="mb-6" />
              <h4 className="font-black text-2xl italic uppercase mb-4 leading-none">IA Generativa</h4>
              <p className="text-sm font-bold leading-relaxed opacity-80">
                A grande virada de 2026. Saber integrar LLMs em fluxos de trabalho é a habilidade mais requisitada do ano.
              </p>
            </div>
            <div className="bg-slate-900 p-10 rounded-[3.5rem] text-white">
              <Zap size={40} className="mb-6 text-estacio-amber" />
              <h4 className="font-black text-2xl italic uppercase mb-4 leading-none">Cybersecurity</h4>
              <p className="text-sm font-bold leading-relaxed opacity-70">
                Com o aumento de ataques complexos, a defesa digital tornou-se prioridade zero nas corporações.
              </p>
            </div>
          </div>
        </div>

        <section className="mb-20">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-2xl font-black text-estacio-navy italic uppercase tracking-widest flex items-center gap-4">
              <DollarSign className="text-estacio-cyan" /> Portais de Referência
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Robert Half 2026', url: 'https://www.roberthalf.com/br/pt/insights/guia-salarial', desc: 'A maior referência de salários no Brasil.' },
              { title: 'Portal Salário', url: 'https://www.salario.com.br/estatisticas/cargos-e-salarios-de-ti-tecnologia-da-informacao/', desc: 'Dados oficiais do CAGED/Ministério do Trabalho.' },
              { title: 'Workana TI', url: 'https://www.workana.com/pt/jobs?country=BR', desc: 'Board de freelancers e projetos independentes.' }
            ].map((link, i) => (
              <a 
                key={i} 
                href={link.url} 
                target="_blank" 
                className="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-estacio-cyan transition-all"
              >
                <h4 className="font-black text-estacio-navy italic uppercase mb-4 group-hover:text-estacio-cyan transition-colors">{link.title}</h4>
                <p className="text-xs text-slate-400 font-bold leading-relaxed">{link.desc}</p>
                <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase text-estacio-cyan tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Acessar Portal <ChevronRight size={12} />
                </div>
              </a>
            ))}
          </div>
        </section>

        <CoordinatorWidget />
      </div>
    </div>
  );
};

export default ProfissionaisTI;