
import React from 'react';
import CoordinatorWidget from '../components/CoordinatorWidget.tsx';
import { 
  ChevronLeft, Users2, GitBranch, MessageSquare, 
  HeartHandshake, Kanban, FileText, Share2, 
  Sparkles, Construction, CheckCircle2, UserPlus,
  Users, Target, Award, Code2
} from 'lucide-react';

const GruposProjetos: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20 fade-in bg-slate-50/30">
      <a href="#/home" className="group inline-flex items-center gap-3 text-slate-400 hover:text-estacio-navy font-black uppercase text-[10px] tracking-widest mb-16 transition-all">
        <span className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:bg-estacio-navy group-hover:text-white group-hover:border-estacio-navy shadow-sm transition-all duration-300">
          <ChevronLeft size={18} />
        </span>
        Voltar
      </a>

      <div className="max-w-6xl mx-auto">
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-orange-500/10 text-orange-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-orange-500/20">
              Colaboração & Extensão
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-estacio-navy italic uppercase tracking-tighter mb-8 leading-none">
            Grupos e <span className="text-orange-500">Projetos</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-4xl leading-relaxed">
            Trabalhar em projetos de TI exige equilíbrio entre <strong className="text-estacio-navy">domínio técnico</strong> e <strong className="text-estacio-navy">inteligência interpessoal</strong>. Aqui, a teoria da sala de aula vira solução real através da extensão acadêmica.
          </p>
        </header>

        {/* --- SEÇÃO 1: EXCELÊNCIA EM GRUPOS --- */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-orange-500 rounded-full"></div>
            <h3 className="text-2xl font-black text-estacio-navy italic uppercase tracking-tight">1. Excelência em Grupos (Soft & Hard)</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-xl group hover:border-orange-500/30 transition-all">
              <div className="w-14 h-14 bg-orange-500/10 text-orange-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <GitBranch size={28} />
              </div>
              <h4 className="font-black text-estacio-navy italic text-xl mb-4 leading-tight uppercase tracking-tight">Versionamento e Fluxo</h4>
              <p className="text-[11px] font-bold text-slate-500 uppercase leading-relaxed">
                Use o Git como ferramenta de comunicação. Defina padrões de commits e realize Code Reviews constantes para aprendizado mútuo.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-xl group hover:border-blue-500/30 transition-all">
              <div className="w-14 h-14 bg-blue-500/10 text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <MessageSquare size={28} />
              </div>
              <h4 className="font-black text-estacio-navy italic text-xl mb-4 leading-tight uppercase tracking-tight">Comunicação Assíncrona</h4>
              <p className="text-[11px] font-bold text-slate-500 uppercase leading-relaxed">
                Documente decisões no Slack ou Discord. Interrupções constantes matam a produtividade técnica.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-xl group hover:border-emerald-500/30 transition-all">
              <div className="w-14 h-14 bg-emerald-500/10 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <HeartHandshake size={28} />
              </div>
              <h4 className="font-black text-estacio-navy italic text-xl mb-4 leading-tight uppercase tracking-tight">Gestão de Conflitos</h4>
              <p className="text-[11px] font-bold text-slate-500 uppercase leading-relaxed">
                Decida com base em dados e sustentabilidade, nunca em preferências pessoais ou "ego de dev".
              </p>
            </div>
          </div>
        </section>

        {/* --- SEÇÃO 2: GESTÃO DE PROJETOS (DARK) --- */}
        <section className="mb-24 bg-slate-900 p-12 md:p-20 rounded-[5rem] text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full"></div>
          <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h3 className="text-3xl md:text-5xl font-black italic uppercase mb-8 tracking-tighter leading-none">
                Gestão de <br/> <span className="text-orange-500">Projetos TI</span>
              </h3>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-orange-500 shrink-0 border border-white/10"><Kanban size={24} /></div>
                  <div>
                    <h5 className="font-black text-lg uppercase italic text-white mb-2">Metodologias Ágeis</h5>
                    <p className="text-white/50 text-sm font-medium leading-relaxed">Divida o projeto em Sprints. O uso do Kanban visual ajuda a identificar gargalos antes que virem problemas críticos.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-orange-500 shrink-0 border border-white/10"><FileText size={24} /></div>
                  <div>
                    <h5 className="font-black text-lg uppercase italic text-white mb-2">Documentação Viva</h5>
                    <p className="text-white/50 text-sm font-medium leading-relaxed">Não espere o fim para documentar. Mantenha o README.md e Swagger atualizados desde o primeiro deploy.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-white/5 border border-white/10 p-10 rounded-[3.5rem] backdrop-blur-md">
                <div className="flex items-center gap-3 mb-6 text-orange-500">
                  <Sparkles size={20} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Dica de Sustentabilidade</span>
                </div>
                <p className="text-white font-bold italic text-lg leading-relaxed">
                  "A documentação é o seguro de vida do seu projeto acadêmico. Sem ela, seu sistema morre no fim do semestre."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- SEÇÃO 3: EXTENSÃO E CONTINUIDADE --- */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-estacio-cyan rounded-full"></div>
            <h3 className="text-2xl font-black text-estacio-navy italic uppercase tracking-tight">2. Extensão e Continuidade</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:scale-110 transition-transform">
                <Share2 size={120} />
              </div>
              <h4 className="font-black text-estacio-navy italic uppercase text-xl mb-6">Ciclo de Vida Extensível</h4>
              <p className="text-sm font-bold text-slate-500 leading-relaxed italic border-l-4 border-estacio-cyan pl-6 mb-8">
                Um projeto de Banco de Dados pode continuar em disciplinas de Extensão, gerando impacto social em ONGs ou empresas parceiras.
              </p>
              <div className="flex items-center gap-2 text-[10px] font-black text-estacio-navy uppercase tracking-widest">
                <Award size={16} className="text-estacio-cyan" /> Impacto Social & Real
              </div>
            </div>
            <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:scale-110 transition-transform">
                <CheckCircle2 size={120} />
              </div>
              <h4 className="font-black text-estacio-navy italic uppercase text-xl mb-6">Portfólio de Legado</h4>
              <p className="text-sm font-bold text-slate-500 leading-relaxed italic border-l-4 border-orange-500 pl-6 mb-8">
                Trabalhar em projetos com continuidade prova sua experiência com sistemas legados e manutenção — competências raras no mercado júnior.
              </p>
              <div className="flex items-center gap-2 text-[10px] font-black text-estacio-navy uppercase tracking-widest">
                <CheckCircle2 size={16} className="text-orange-500" /> Experiência Real de Mercado
              </div>
            </div>
          </div>
        </section>

        {/* --- SEÇÃO 4: DICAS PARA COORDENAÇÃO --- */}
        <section className="mb-24 bg-orange-500 p-12 md:p-20 rounded-[5rem] text-estacio-navy shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>
          <h3 className="relative z-10 text-3xl font-black italic uppercase mb-12 text-center">Dicas Práticas de Colaboração</h3>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur p-8 rounded-[2.5rem] shadow-xl">
              <span className="text-[9px] font-black text-orange-600 uppercase mb-2 block">Cultura GitHub</span>
              <p className="text-xs font-bold leading-relaxed">Crie repositórios institucionais para facilitar a transição de projetos entre turmas de extensão.</p>
            </div>
            <div className="bg-white/90 backdrop-blur p-8 rounded-[2.5rem] shadow-xl">
              <span className="text-[9px] font-black text-orange-600 uppercase mb-2 block">Mentorias Cruzadas</span>
              <p className="text-xs font-bold leading-relaxed">Veteranos de extensão atuam como arquitetos para calouros em módulos base do mesmo projeto.</p>
            </div>
            <div className="bg-white/90 backdrop-blur p-8 rounded-[2.5rem] shadow-xl">
              <span className="text-[9px] font-black text-orange-600 uppercase mb-2 block">Foco no Usuário</span>
              <p className="text-xs font-bold leading-relaxed">Extensão exige sair da bolha da TI e realizar testes de usabilidade com pessoas reais.</p>
            </div>
          </div>
          <div className="relative z-10 mt-12 text-center">
            <p className="text-[10px] font-black uppercase tracking-widest italic opacity-60">
              Nota: Disciplinas extensionistas mitigam o "débito técnico" ao forçar códigos mais limpos e sustentáveis.
            </p>
          </div>
        </section>

        {/* --- FERRAMENTA EM CONSTRUÇÃO (PRESERVADA) --- */}
        <section className="mb-24">
          <div className="relative bg-slate-100 p-16 md:p-24 rounded-[5rem] text-center shadow-inner overflow-hidden border border-slate-200">
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white rounded-[1.5rem] flex items-center justify-center text-estacio-navy mx-auto mb-8 shadow-xl rotate-[8deg]">
                <Construction size={32} />
              </div>
              <h3 className="text-2xl font-black text-estacio-navy italic uppercase mb-4 tracking-tight">Plataforma de Matchmaking</h3>
              <p className="text-slate-500 font-bold text-sm max-w-lg mx-auto leading-relaxed mb-8 italic">
                Em breve: ferramenta integrada para formação de times, repositórios institucionais e mentorias via Microsoft Teams.
              </p>
              <div className="inline-flex items-center gap-3 bg-white border border-slate-200 px-6 py-3 rounded-full text-slate-400 font-black uppercase text-[9px] tracking-widest italic shadow-sm">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-ping"></span>
                Beta previsto para Abril 2026
              </div>
            </div>
          </div>
        </section>

        <CoordinatorWidget tip="O networking que você faz em projetos reais vale mais que qualquer diploma isolado. Use as disciplinas extensionistas para construir o portfólio que as empresas de elite buscam." />
      </div>
    </div>
  );
};

export default GruposProjetos;
