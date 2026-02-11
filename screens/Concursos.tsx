
import React from 'react';
import { CoordinatorWidget } from '../constants';
import { ChevronLeft, ExternalLink, ShieldCheck, Target, Zap, Search, Calendar, MapPin, TrendingUp, AlertCircle } from 'lucide-react';

const OPEN_EXAMS = [
  { 
    orgao: 'PRODERJ (RJ)', 
    vagas: 'Analista, Programador e Suporte', 
    status: 'Inscrições até 04/02', 
    salario: 'Até R$ 4.549,35', 
    link: 'https://concursos.ibdoprojetos.org.br/',
    prova: '22 de Março/2026',
    color: 'emerald'
  },
  { 
    orgao: 'Sefa PA', 
    vagas: 'Analista Fazendário de TI', 
    status: 'Inscrições até 13/02', 
    salario: 'R$ 16.659,63', 
    link: 'https://portalfadesp.org.br/',
    prova: 'Abril/2026',
    color: 'blue'
  },
  { 
    orgao: 'TCE RN', 
    vagas: 'Auditor e Analista de TI', 
    status: 'Inscrições até 04/02', 
    salario: 'R$ 15.553,30', 
    link: 'https://conhecimento.fgv.br/',
    prova: 'Março/2026',
    color: 'indigo'
  },
  { 
    orgao: 'IFRJ', 
    vagas: 'Professor de TI e Admin', 
    status: 'Aberto em Janeiro', 
    salario: 'Até R$ 8.000,00', 
    link: 'https://www.idecan.org.br/',
    prova: 'Fevereiro/2026',
    color: 'purple'
  }
];

const EXPECTED_EXAMS = [
  { 
    orgao: 'Polícia Federal', 
    vaga: 'Perito Criminal (TI)', 
    destaque: 'Forense e Segurança', 
    remuneracao: 'R$ 25.000,00+', 
    status: 'Comissão Formada' 
  },
  { 
    orgao: 'Banco do Brasil', 
    vaga: 'Agente de Tecnologia', 
    destaque: 'Ideal para alunos iniciais', 
    remuneracao: 'R$ 6.000,00+', 
    status: 'Expectativa 2026' 
  },
  { 
    orgao: 'TCU / CGU', 
    vaga: 'Auditor de TI', 
    destaque: 'Governança e Dados', 
    remuneracao: 'R$ 22.000,00+', 
    status: 'Autorizado' 
  },
  { 
    orgao: 'CNU 2', 
    vaga: 'Bloco Dados e Tecnologia', 
    destaque: '70+ Vagas Federais', 
    remuneracao: 'Até R$ 20.000,00', 
    status: 'Previsto 2º Semestre' 
  }
];

const Concursos: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20 fade-in">
      <a href="#/home" className="group inline-flex items-center gap-3 text-slate-400 hover:text-estacio-navy font-black uppercase text-[10px] tracking-widest mb-16 transition-all">
        <span className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:bg-estacio-navy group-hover:text-white group-hover:border-estacio-navy shadow-sm transition-all duration-300">
          <ChevronLeft size={18} />
        </span>
        Voltar
      </a>

      <div className="max-w-6xl mx-auto">
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-estacio-amber/10 text-estacio-amber px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-estacio-amber/20">
              Radar 2026
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-estacio-navy italic uppercase tracking-tighter mb-8 leading-none">
            Concursos <span className="text-estacio-amber">Públicos TI</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-medium mb-12 leading-relaxed max-w-4xl">
            O ano de 2026 consolidou-se como o período estratégico para carreiras de estado em TI. Do <strong>PRODERJ</strong> no Rio à <strong>Polícia Federal</strong>, sua estabilidade começa aqui.
          </p>
        </header>

        {/* Seção 1: Inscrições Abertas (Cards de Alta Conversão) */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-emerald-500 rounded-full"></div>
            <h3 className="text-2xl font-black text-estacio-navy italic uppercase tracking-tight">Inscrições Abertas & Editais</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {OPEN_EXAMS.map((conc, i) => {
              const colorBase = conc.color === 'emerald' ? 'emerald' : 
                                conc.color === 'blue' ? 'blue' : 
                                conc.color === 'indigo' ? 'indigo' : 'purple';
              
              return (
                <a 
                  key={i} 
                  href={conc.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`group relative p-10 rounded-[4rem] border-2 transition-all duration-500 hover:scale-[1.02] flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl bg-white border-${colorBase}-500/20 hover:border-${colorBase}-500`}
                >
                  <div className="flex-grow w-full md:w-auto">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest text-white shadow-md bg-${colorBase}-500`}>
                        {conc.status}
                      </span>
                      <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <Calendar size={12} /> Prova: {conc.prova}
                      </div>
                    </div>
                    <h4 className="font-black text-estacio-navy italic text-3xl mb-1 uppercase tracking-tighter group-hover:text-black transition-colors">{conc.orgao}</h4>
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-6 opacity-70">{conc.vagas}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[10px] font-black text-slate-400 uppercase">Remuneração:</span>
                      <p className="text-2xl font-black text-slate-900 tracking-tighter">{conc.salario}</p>
                    </div>
                  </div>
                  <div className={`shrink-0 w-16 h-16 rounded-[1.5rem] flex items-center justify-center text-white shadow-xl transition-transform group-hover:rotate-12 bg-${colorBase}-500`}>
                    <ExternalLink size={24} />
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Seção 2: Rio de Janeiro Especial */}
        <div className="bg-estacio-navy p-12 md:p-20 rounded-[5rem] text-white mb-24 relative overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-estacio-cyan/10 blur-[120px] rounded-full"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 text-estacio-cyan mb-6">
                <MapPin size={24} />
                <span className="text-[11px] font-black uppercase tracking-[0.3em]">Cenário Rio & Região Serrana</span>
              </div>
              <h3 className="text-4xl md:text-6xl font-black italic uppercase mb-8 tracking-tighter leading-none">
                Foco Total no <br/> <span className="text-estacio-cyan text-stroke-white">PRODERJ</span>
              </h3>
              <p className="text-white/60 font-medium text-lg mb-10 leading-relaxed">
                As provas serão em <strong>22 de março</strong>. É a oportunidade perfeita para alunos de ADS e Sistemas, com vagas para Programador e Analista. O conteúdo programático é 80% aderente às nossas disciplinas.
              </p>
              <div className="flex flex-wrap gap-4">
                 <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl flex flex-col">
                    <span className="text-[9px] font-black text-estacio-cyan uppercase opacity-60">Nova Friburgo</span>
                    <span className="text-xs font-bold">Validade prorrogada até 2028</span>
                 </div>
                 <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl flex flex-col">
                    <span className="text-[9px] font-black text-estacio-cyan uppercase opacity-60">PC RJ</span>
                    <span className="text-xs font-bold">Perito Criminal (Comissão Formada)</span>
                 </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 gap-4 w-full">
              <div className="bg-white/5 border border-white/10 p-8 rounded-[3rem] backdrop-blur-sm">
                <AlertCircle className="text-estacio-amber mb-4" />
                <h5 className="font-black uppercase italic text-lg mb-2">Dica de Estudo</h5>
                <p className="text-sm font-medium opacity-60">Foquem em <strong>Desenvolvimento Web, Segurança e Bancos de Dados</strong>. Esses temas dominam as provas da PRODERJ e são o forte da nossa grade.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Seção 3: Radar Federal (Tabela de Previsão) */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-estacio-amber rounded-full"></div>
            <h3 className="text-2xl font-black text-estacio-navy italic uppercase tracking-tight">Radar Federal 2026</h3>
          </div>
          
          <div className="bg-white rounded-[4rem] border border-slate-100 shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="p-8 text-[11px] font-black uppercase text-slate-400 tracking-widest">Órgão</th>
                    <th className="p-8 text-[11px] font-black uppercase text-slate-400 tracking-widest">Cargo / Especialidade</th>
                    <th className="p-8 text-[11px] font-black uppercase text-slate-400 tracking-widest">Status</th>
                    <th className="p-8 text-[11px] font-black uppercase text-slate-400 tracking-widest text-right">Remuneração</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {EXPECTED_EXAMS.map((item, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="p-8">
                        <span className="font-black text-estacio-navy italic text-xl uppercase tracking-tight group-hover:text-estacio-cyan transition-colors">
                          {item.orgao}
                        </span>
                      </td>
                      <td className="p-8">
                        <div className="flex flex-col">
                          <span className="text-sm font-black text-slate-900 uppercase tracking-tighter">{item.vaga}</span>
                          <span className="text-[10px] font-bold text-slate-400 uppercase">{item.destaque}</span>
                        </div>
                      </td>
                      <td className="p-8">
                        <span className="px-3 py-1 bg-estacio-amber/10 text-estacio-amber text-[9px] font-black uppercase rounded-full border border-estacio-amber/20">
                          {item.status}
                        </span>
                      </td>
                      <td className="p-8 text-right">
                        <span className="text-xl font-black text-slate-900 tracking-tighter">{item.remuneracao}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <CoordinatorWidget tip="Alunos de ADS, o edital do PRODERJ é praticamente um resumo das nossas disciplinas. Participar desse concurso é, antes de tudo, o melhor simulado real que vocês podem ter para validar o conhecimento de sala de aula." />
      </div>
    </div>
  );
};

export default Concursos;
