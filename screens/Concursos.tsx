import React from 'react';
import { CoordinatorWidget } from '../constants';
import { ChevronLeft, ExternalLink, ShieldCheck } from 'lucide-react';

const CONCURSOS_LIST = [
  { orgao: 'TCE-SC', status: 'Publicado', salario: 'R$ 18.984,72', local: 'Santa Catarina', link: 'https://www.estrategiaconcursos.com.br/blog/concursos-ti/' },
  { orgao: 'FAPESP', status: 'Edital Previsto', salario: 'R$ 10.571,65', local: 'São Paulo', link: 'https://www.estrategiaconcursos.com.br/blog/concursos-ti/' },
  { orgao: 'VALEC', status: 'Comissão Formada', salario: 'R$ 8.900,00', local: 'Nacional', link: 'https://blog.grancursosonline.com.br/concursos-ti/' },
  { orgao: 'DATAPREV', status: 'Vigente', salario: 'Até R$ 9.173,62', local: 'Nacional', link: 'https://conhecimento.fgv.br/concursos/dataprev24' },
  { orgao: 'SERPRO', status: 'Prorrogação', salario: 'R$ 9.025,73', local: 'Nacional', link: 'https://www.estrategiaconcursos.com.br/blog/concurso-serpro/' },
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
        
        <div className="bg-blue-50 border border-blue-100 p-10 rounded-[3rem] mb-16 flex items-start gap-6 shadow-sm shadow-blue-100/50">
          <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/30">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h4 className="font-black text-blue-900 uppercase text-xs tracking-widest mb-2 italic">Aviso Importante</h4>
            <p className="text-blue-900/80 text-base font-medium leading-relaxed">
              O ingresso na carreira pública exige foco em disciplinas básicas (Direito, Português) e domínio total de Engenharia de Software e Banco de Dados. Comece hoje!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {CONCURSOS_LIST.map((conc, i) => (
            <a 
              key={i} 
              href={conc.link} 
              target="_blank"
              className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col sm:flex-row justify-between sm:items-center gap-6 group"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                    conc.status === 'Publicado' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {conc.status}
                  </span>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{conc.local}</span>
                </div>
                <h4 className="font-black text-estacio-navy italic text-3xl mb-2 uppercase tracking-tight group-hover:text-estacio-amber transition-colors">{conc.orgao}</h4>
                <p className="text-xl font-black text-slate-900 tracking-tighter">{conc.salario}</p>
              </div>
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 group-hover:bg-estacio-amber group-hover:text-white transition-all">
                <ExternalLink size={24} />
              </div>
            </a>
          ))}
        </div>

        <CoordinatorWidget tip="A disciplina supera o talento. Crie uma rotina de estudos constante e foque nos editais que valorizam a base teórica sólida de computação e algoritmos." />
      </div>
    </div>
  );
};

export default Concursos;