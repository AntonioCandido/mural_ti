
import React from 'react';
import CoordinatorWidget from '../components/CoordinatorWidget.tsx';
import BackButton from '../components/BackButton.tsx';
import { 
  ExternalLink, Calendar, MapPin, AlertCircle 
} from 'lucide-react';

const OPEN_EXAMS = [
  { orgao: 'PRODERJ (RJ)', vagas: 'Analista, Programador e Suporte', status: 'Inscrições até 04/02', salario: 'Até R$ 4.549,35', link: 'https://concursos.ibdoprojetos.org.br/', prova: '22 de Março/2026', color: 'emerald' },
  { orgao: 'Sefa PA', vagas: 'Analista Fazendário de TI', status: 'Inscrições até 13/02', salario: 'R$ 16.659,63', link: 'https://portalfadesp.org.br/', prova: 'Abril/2026', color: 'blue' },
  { orgao: 'TCE RN', vagas: 'Auditor e Analista de TI', status: 'Inscrições até 04/02', salario: 'R$ 15.553,30', link: 'https://conhecimento.fgv.br/', prova: 'Março/2026', color: 'indigo' },
  { orgao: 'IFRJ', vagas: 'Professor de TI e Admin', status: 'Aberto em Janeiro', salario: 'Até R$ 8.000,00', link: 'https://www.idecan.org.br/', prova: 'Fevereiro/2026', color: 'purple' }
];

const EXPECTED_EXAMS = [
  { orgao: 'Polícia Federal', vaga: 'Perito Criminal (TI)', destaque: 'Forense e Segurança', remuneracao: 'R$ 25.000,00+', status: 'Comissão Formada' },
  { orgao: 'Banco do Brasil', vaga: 'Agente de Tecnologia', destaque: 'Ideal para alunos iniciais', remuneracao: 'R$ 6.000,00+', status: 'Expectativa 2026' },
  { orgao: 'TCU / CGU', vaga: 'Auditor de TI', destaque: 'Governança e Dados', remuneracao: 'R$ 22.000,00+', status: 'Autorizado' },
  { orgao: 'CNU 2', vaga: 'Bloco Dados e Tecnologia', destaque: '70+ Vagas Federais', remuneracao: 'Até R$ 20.000,00', status: 'Previsto 2º Semestre' }
];

const Concursos: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20 fade-in">
      <BackButton />

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

        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-emerald-500 rounded-full"></div>
            <h3 className="text-2xl font-black text-estacio-navy italic uppercase tracking-tight">Inscrições Abertas & Editais</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {OPEN_EXAMS.map((conc, i) => (
              <a 
                key={i} 
                href={conc.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`group relative p-10 rounded-[4rem] border-2 transition-all duration-500 hover:scale-[1.02] flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl bg-white border-slate-100 hover:border-${conc.color}-500`}
              >
                <div className="flex-grow w-full md:w-auto">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest text-white shadow-md bg-${conc.color}-500`}>
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
                <div className={`shrink-0 w-16 h-16 rounded-[1.5rem] flex items-center justify-center text-white shadow-xl transition-transform group-hover:rotate-12 bg-${conc.color}-500`}>
                  <ExternalLink size={24} />
                </div>
              </a>
            ))}
          </div>
        </section>

        <CoordinatorWidget tip="Alunos de ADS, o edital do PRODERJ é praticamente um resumo das nossas disciplinas. Participar desse concurso é, antes de tudo, o melhor simulado real que vocês podem ter para validar o conhecimento de sala de aula." />
      </div>
    </div>
  );
};

export default Concursos;
