
import React from 'react';
import CoordinatorWidget from '../components/CoordinatorWidget.tsx';
import { 
  ChevronLeft, Rocket, Building, Globe, Zap, ShieldCheck, 
  Leaf, Cpu, Target, CheckCircle2, BarChart3, Users, 
  Search, Lightbulb, Scale, Wallet, MessageSquare, Briefcase
} from 'lucide-react';

// FIX: Move BrainIcon definition before its usage in TRENDS constant to fix block-scoped variable error.
const BrainIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5z" />
    <path d="M17 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5z" />
    <path d="M7 7a5 5 0 0 0-5 5 5 5 0 0 0 5 5 5 5 0 0 0 5-5 5 5 0 0 0-5-5z" />
    <path d="M12 12a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5z" />
  </svg>
);

const TRENDS = [
  {
    title: "IA como Aliada Competitiva",
    desc: "Foco em Hyperautomation e análise preditiva de falhas industriais, indo além da simples geração de texto.",
    icon: BrainIcon,
    color: "text-purple-500",
    bg: "bg-purple-500/5"
  },
  {
    title: "Green Tech & TI Sustentável",
    desc: "Demanda por 'Green Cloud' e softwares de contabilidade de carbono para redução da pegada ambiental.",
    icon: Leaf,
    color: "text-emerald-500",
    bg: "bg-emerald-500/5"
  },
  {
    title: "SaaS B2B de Nicho",
    desc: "Soluções específicas para setores tradicionais como Agro, Saúde e Educação com alto potencial de escala.",
    icon: Building,
    color: "text-blue-500",
    bg: "bg-blue-500/5"
  },
  {
    title: "Zero Trust Security",
    desc: "Vender segurança por padrão como diferencial comercial estratégico, não apenas requisito técnico.",
    icon: ShieldCheck,
    color: "text-estacio-navy",
    bg: "bg-estacio-navy/5"
  }
];

const ROADMAP_STEPS = [
  { id: 1, title: "Encontre a Dor Real", desc: "Observe processos manuais frustrantes. O erro é criar a solução antes do problema." },
  { id: 2, title: "MVP (Mínimo Viável)", desc: "Use low-code or cloud-native para lançar rápido. O foco é resolver o problema principal." },
  { id: 3, title: "Círculo Interno", desc: "Valide com parceiros estratégicos. Feedback direto vale mais que métricas de vaidade." },
  { id: 4, title: "Escalabilidade (Day 1)", desc: "Automatize o onboarding e suporte. Pense em atender 1.000 clientes sem inchar a equipe." }
];

const MANAGEMENT_TIPS = [
  { area: "Operação", action: "Use IA para automatizar logs, testes e documentação.", icon: Zap },
  { area: "Vendas", action: "Foque em relacionamento direto e canais qualificados.", icon: Target },
  { area: "Finanças", action: "Separe PJ da PF e projete caixa para 6 meses.", icon: Wallet },
  { area: "Legal", action: "Formalize o CNPJ e garanta conformidade com a LGPD.", icon: Scale }
];

const Empreendedorismo: React.FC = () => {
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
            <span className="bg-estacio-amber/10 text-estacio-amber px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-estacio-amber/20">
              Startup Mindset 2026
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-estacio-navy italic uppercase tracking-tighter mb-8 leading-none">
            Empreende<span className="text-estacio-amber text-stroke-navy">dorismo Tech</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-4xl leading-relaxed">
            Empreender em TI exige conectar a <strong className="text-estacio-navy underline decoration-estacio-amber underline-offset-4">arquitetura de sistemas</strong> à <strong className="text-estacio-navy underline decoration-estacio-amber underline-offset-4">estratégia de negócios</strong>. O perfil atual é estratégico, híbrido e focado em impacto.
          </p>
        </header>

        {/* --- NOVO: TENDÊNCIAS E NICHOS --- */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-purple-500 rounded-full"></div>
            <h3 className="text-2xl font-black text-estacio-navy italic uppercase tracking-tight">Tendências & Nichos 2026</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TRENDS.map((trend, i) => (
              <div key={i} className={`p-10 rounded-[3.5rem] border border-slate-100 shadow-xl transition-all hover:-translate-y-2 bg-white flex flex-col h-full`}>
                <div className={`w-14 h-14 ${trend.bg} ${trend.color} rounded-2xl flex items-center justify-center mb-8 shadow-sm`}>
                  <trend.icon size={28} />
                </div>
                <h4 className="font-black text-estacio-navy italic text-xl mb-4 leading-tight uppercase tracking-tight">{trend.title}</h4>
                <p className="text-[11px] font-bold text-slate-500 uppercase leading-relaxed mb-6 flex-grow">{trend.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- NOVO: ROADMAP DO EMPREENDEDOR --- */}
        <section className="mb-24 bg-estacio-navy p-12 md:p-20 rounded-[5rem] text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black italic uppercase mb-12 tracking-tighter text-center">
              Roadmap da <span className="text-estacio-amber">Validação Rápida</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {ROADMAP_STEPS.map((step) => (
                <div key={step.id} className="relative group">
                  <div className="w-12 h-12 bg-estacio-amber text-estacio-navy rounded-full flex items-center justify-center font-black text-xl mb-6 shadow-xl group-hover:scale-110 transition-transform">
                    {step.id}
                  </div>
                  <h4 className="font-black text-xl italic uppercase mb-3 text-estacio-cyan">{step.title}</h4>
                  <p className="text-white/60 text-[11px] font-bold uppercase leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- EXISTENTE: INCUBADORAS E ACELERADORAS (MESCLADO) --- */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-estacio-cyan rounded-full"></div>
            <h3 className="text-2xl font-black text-estacio-navy italic uppercase tracking-tight">Ecossistema de Apoio</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-xl relative overflow-hidden group hover:bg-slate-50 transition-colors">
              <div className="relative z-10 w-14 h-14 bg-estacio-navy rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl rotate-[4deg]">
                <Building size={32} />
              </div>
              <h3 className="relative z-10 text-2xl font-black italic uppercase mb-6 text-estacio-navy">Incubadoras</h3>
              <p className="relative z-10 text-slate-500 font-bold text-sm leading-relaxed mb-4 italic border-l-4 border-estacio-navy pl-6">
                Focadas em negócios em estágio muito inicial (pre-seed), oferecendo infraestrutura e mentoria básica para validar sua ideia acadêmica.
              </p>
            </div>
            
            <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-xl relative overflow-hidden group hover:bg-slate-50 transition-colors">
              <div className="relative z-10 w-14 h-14 bg-estacio-amber rounded-2xl flex items-center justify-center text-estacio-navy mb-8 shadow-xl -rotate-[4deg]">
                <Rocket size={32} />
              </div>
              <h3 className="relative z-10 text-2xl font-black italic uppercase mb-6 text-estacio-navy">Aceleradoras</h3>
              <p className="relative z-10 text-slate-500 font-bold text-sm leading-relaxed mb-4 italic border-l-4 border-estacio-amber pl-6">
                Para quem já tem um MVP validado e busca escala rápida através de investimento, rede de contatos e conexões com VCs.
              </p>
            </div>
          </div>
        </section>

        {/* --- NOVO: MENTALIDADE HYBRID --- */}
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-4xl font-black italic uppercase tracking-tight leading-none text-estacio-navy">
              A Mentalidade <span className="text-estacio-cyan">Hybrid</span>
            </h3>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">
              Em 2026, o "AI Literacy" é o básico. O empreendedor de sucesso deve transitar entre o código e o capital com fluidez.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Comunicação Técnica", desc: "Explique arquitetura focada em resultados financeiros.", icon: MessageSquare },
                { title: "Visão de Produto (UX)", desc: "Um backend robusto não salva uma interface ruim.", icon: Search },
                { title: "Gestão Financeira", desc: "Domine métricas como LTV e CAC desde o início.", icon: BarChart3 },
                { title: "AI Literacy", desc: "Integre LLMs nos fluxos de trabalho da startup.", icon: BrainIcon }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-estacio-cyan/10 rounded-xl flex items-center justify-center text-estacio-navy shrink-0"><item.icon size={20} /></div>
                  <div>
                    <h5 className="font-black uppercase text-xs text-estacio-navy mb-1">{item.title}</h5>
                    <p className="text-[10px] font-bold text-slate-400 leading-tight uppercase">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-900 p-12 rounded-[5rem] text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5"></div>
            <h4 className="relative z-10 text-2xl font-black italic uppercase mb-8 text-center">Dicas Práticas de Gestão</h4>
            <div className="relative z-10 space-y-4">
              {MANAGEMENT_TIPS.map((tip, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-4">
                    <tip.icon className="text-estacio-amber" size={20} />
                    <div className="flex flex-col">
                      <span className="font-black uppercase text-[10px] tracking-widest text-estacio-cyan">{tip.area}</span>
                      <span className="text-xs font-bold opacity-80">{tip.action}</span>
                    </div>
                  </div>
                  <CheckCircle2 size={18} className="text-emerald-500 opacity-40" />
                </div>
              ))}
            </div>
            <div className="mt-12 p-6 bg-estacio-amber text-estacio-navy rounded-3xl text-center">
              <p className="text-xs font-black italic uppercase leading-tight">
                "Feito é melhor que perfeito, mas o feito precisa ser seguro."
              </p>
            </div>
          </div>
        </section>

        {/* --- EXISTENTE: RECURSOS ESSENCIAIS (REFATORADO) --- */}
        <section className="mb-24">
          <div className="bg-slate-100 p-12 md:p-20 rounded-[5rem] relative overflow-hidden">
            <h3 className="text-2xl font-black italic uppercase mb-12 text-center text-estacio-navy relative z-10">Recursos & Formalização</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative z-10">
              <a href="https://www.sebrae.com.br" target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-[2.5rem] border border-slate-200 hover:border-estacio-navy transition-all text-center shadow-lg group">
                <h4 className="font-black text-estacio-navy group-hover:text-blue-600 mb-2 uppercase text-sm">SEBRAE</h4>
                <p className="text-[10px] font-bold uppercase opacity-60">Consultoria e Planos de Negócio</p>
              </a>
              <a href="https://www.bndes.gov.br" target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-[2.5rem] border border-slate-200 hover:border-estacio-navy transition-all text-center shadow-lg group">
                <h4 className="font-black text-estacio-navy group-hover:text-blue-600 mb-2 uppercase text-sm">BNDES</h4>
                <p className="text-[10px] font-bold uppercase opacity-60">Linhas de Crédito e Financiamento</p>
              </a>
              <a href="https://www.gov.br/empresas-e-negocios" target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-[2.5rem] border border-slate-200 hover:border-estacio-navy transition-all text-center shadow-lg group">
                <h4 className="font-black text-estacio-navy group-hover:text-blue-600 mb-2 uppercase text-sm">Gov.br</h4>
                <p className="text-[10px] font-bold uppercase opacity-60">Abertura de MEI e CNPJ Digital</p>
              </a>
            </div>
          </div>
        </section>

        <CoordinatorWidget tip="Toda grande solução nasce de um problema real. Antes de codar, valide se sua ideia resolve uma dor latente do mercado. Escute o seu cliente primeiro e lembre-se: escalabilidade se constrói desde o dia 1." />
      </div>
    </div>
  );
};

export default Empreendedorismo;
