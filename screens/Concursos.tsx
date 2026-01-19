
import React from 'react';
import { CoordinatorWidget } from '../constants';
import { ChevronLeft, ExternalLink, ShieldCheck } from 'lucide-react';

const CONCURSOS_LIST = [
  { orgao: 'TCE-SC', status: 'Publicado', salario: 'R$ 18.984,72', local: 'Santa Catarina', link: 'https://www.estrategiaconcursos.com.br/blog/concursos-ti/', color: 'emerald' },
  { orgao: 'FAPESP', status: 'Edital Previsto', salario: 'R$ 10.571,65', local: 'São Paulo', link: 'https://www.estrategiaconcursos.com.br/blog/concursos-ti/', color: 'amber' },
  { orgao: 'VALEC', status: 'Comissão Formada', salario: 'R$ 8.900,00', local: 'Nacional', link: 'https://blog.grancursosonline.com.br/concursos-ti/', color: 'blue' },
  { orgao: 'DATAPREV', status: 'Vigente', salario: 'Até R$ 9.173,62', local: 'Nacional', link: 'https://conhecimento.fgv.br/concursos/dataprev24', color: 'indigo' },
  { orgao: 'SERPRO', status: 'Prorrogação', salario: 'R$ 9.025,73', local: 'Nacional', link: 'https://www.estrategiaconcursos.com.br/blog/concurso-serpro/', color: 'purple' },
];

const Concursos: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 fade-in">
      <a href="#/home" className="group inline-flex items-center gap-3 text-slate-400 hover:text-estacio-navy font-black uppercase text-[10px] tracking-widest mb-16 transition-all">
        <span className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-estacio-navy transition-colors">
          <ChevronLeft size={14} />
        </span>
        Voltar
      </a>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-8xl font-black text-estacio-navy italic uppercase tracking-tighter mb-8 leading-none">
          Concursos <span className="text-estacio-amber">Públicos</span>
        </h2>
        <p className="text-xl md:text-2xl text-slate-500 font-medium mb-16 leading-relaxed max-w-4xl">
          Estabilidade, planos de carreira sólidos e remuneração competitiva. Confira as melhores oportunidades em TI para 2026.
        </p>
        
        <div className="bg-estacio-navy p-10 rounded-[3rem] mb-16 flex items-start gap-6 shadow-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5"></div>
          <div className="w-12 h-12 bg-estacio-cyan rounded-2xl flex items-center justify-center text-estacio-navy shrink-0 shadow-lg relative z-10">
            <ShieldCheck size={24} />
          </div>
          <div className="relative z-10">
            <h4 className="font-black text-estacio-cyan uppercase text-[10px] tracking-widest mb-2 italic">Aviso Importante</h4>
            <p className="text-white text-base font-medium leading-relaxed">
              O ingresso na carreira pública exige foco em disciplinas básicas (Direito, Português) e domínio total de Engenharia de Software e Banco de Dados. Comece hoje!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {CONCURSOS_LIST.map((conc, i) => {
            const colorClass = {
              emerald: 'border-emerald-500 bg-emerald-50',
              amber: 'border-amber-500 bg-amber-50',
              blue: 'border-blue-500 bg-blue-50',
              indigo: 'border-indigo-500 bg-indigo-50',
              purple: 'border-purple-500 bg-purple-50'
            }[conc.color];

            const accentColor = {
              emerald: 'bg-emerald-500',
              amber: 'bg-amber-500',
              blue: 'bg-blue-500',
              indigo: 'bg-indigo-500',
              purple: 'bg-purple-500'
            }[conc.color];

            return (
              <a 
                key={i} 
                href={conc.link} 
                target="_blank"
                className={`relative p-10 rounded-[3.5rem] border-2 shadow-2xl -translate-y-1 transition-all flex flex-col sm:flex-row justify-between sm:items-center gap-6 ${colorClass}`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest text-white ${accentColor}`}>
                      {conc.status}
                    </span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{conc.local}</span>
                  </div>
                  <h4 className="font-black text-estacio-navy italic text-3xl mb-2 uppercase tracking-tight">{conc.orgao}</h4>
                  <p className="text-xl font-black text-slate-900 tracking-tighter">{conc.salario}</p>
                </div>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg ${accentColor}`}>
                  <ExternalLink size={24} />
                </div>
              </a>
            );
          })}
        </div>

        <CoordinatorWidget tip="A disciplina supera o talento. Crie uma rotina de estudos constante e foque nos editais que valorizam a base teórica sólida de computação e algoritmos." />
      </div>
    </div>
  );
};

export default Concursos;
