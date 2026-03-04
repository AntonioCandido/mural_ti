
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import CoordinatorWidget from '../components/CoordinatorWidget.tsx';
import BackButton from '../components/BackButton.tsx';
import { 
  ChevronRight, Zap, Award, 
  Code2, Brain, Heart, ShieldCheck, 
  CheckCircle2, TrendingUp, ChevronDown
} from 'lucide-react';

const ProfissionaisTI: React.FC = () => {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string) => {
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const RECURSOS = [
    {
      id: 'tecnica',
      title: 'Excelência Técnica',
      icon: <Code2 size={24} />,
      color: 'bg-blue-600',
      hoverColor: 'hover:border-blue-500/30',
      accentColor: 'bg-blue-500/5',
      points: [
        { label: 'Fundamentos Sólidos:', text: 'Domine lógica, algoritmos e estruturas antes de frameworks.' },
        { label: 'Perfil em T:', text: 'Seja generalista em TI, mas especialista profundo em uma área.' },
        { label: 'Cybersecurity & LGPD:', text: 'Conhecer segurança e privacidade é indispensável hoje.' }
      ],
      details: "Aprofunde-se em arquitetura de sistemas, padrões de projeto (Design Patterns) e metodologias ágeis como Scrum e Kanban. O domínio de ferramentas de CI/CD e infraestrutura como código (IaC) também é um diferencial competitivo."
    },
    {
      id: 'comportamental',
      title: 'Habilidades Comportamentais',
      icon: <Brain size={24} />,
      color: 'bg-estacio-cyan',
      hoverColor: 'hover:border-estacio-cyan/30',
      accentColor: 'bg-estacio-cyan/5',
      points: [
        { label: 'Comunicação Assertiva:', text: 'Traduz termos complexos para a linguagem de negócios.' },
        { label: 'Pensamento Crítico:', text: 'Resolva problemas de forma eficiente e sustentável.' },
        { label: 'Lifelong Learning:', text: 'Reserve tempo semanal para estudar novas ferramentas.' }
      ],
      details: "A inteligência emocional é crucial para lidar com prazos e feedbacks. Pratique a escuta ativa e a empatia em projetos de equipe. Liderança situacional e negociação são competências que aceleram a promoção para cargos de gestão."
    },
    {
      id: 'gestao',
      title: 'Gestão e Networking',
      icon: <TrendingUp size={24} />,
      color: 'bg-purple-600',
      hoverColor: 'hover:border-purple-500/30',
      accentColor: 'bg-purple-500/5',
      points: [
        { label: 'Portfólio Ativo:', text: 'Mostre como resolve problemas no GitHub ou em um blog.' },
        { label: 'Inglês Técnico:', text: 'O domínio do idioma abre as portas para o mercado global.' }
      ],
      details: "Participe de comunidades técnicas, eventos como a Campus Party ou TDC, e mantenha seu LinkedIn atualizado com conquistas mensuráveis. O networking não é apenas sobre quem você conhece, mas sobre quem conhece o valor do seu trabalho."
    },
    {
      id: 'saude',
      title: 'Saúde e Bem-estar',
      icon: <Heart size={24} />,
      color: 'bg-red-500',
      hoverColor: 'hover:border-red-500/30',
      accentColor: 'bg-red-500/5',
      points: [
        { label: 'Ergonomia:', text: 'Invista em equipamentos corretos para sua saúde física.' },
        { label: 'Gestão de Burnout:', text: 'Estabeleça limites; o ócio gera insights criativos.' }
      ],
      details: "A síndrome do impostor é comum em TI; reconheça suas vitórias. Mantenha uma rotina de exercícios e sono regular. Lembre-se que a produtividade não é medida por horas sentado, mas pela qualidade das soluções entregues."
    }
  ];

  const TENDENCIAS = [
    {
      id: 'ia',
      title: 'IA Generativa',
      icon: <Zap size={40} />,
      color: 'bg-estacio-cyan',
      textColor: 'text-estacio-navy',
      desc: 'A grande virada de 2026. Saber integrar LLMs em fluxos de trabalho é a habilidade mais requisitada do ano.',
      details: 'Domine ferramentas como Copilot, ChatGPT e Claude para acelerar o desenvolvimento. Aprenda Engenharia de Prompt para extrair o máximo das IAs e entenda como integrar APIs de modelos de linguagem em suas aplicações.'
    },
    {
      id: 'cyber',
      title: 'Cybersecurity',
      icon: <ShieldCheck size={40} />,
      color: 'bg-slate-900',
      textColor: 'text-white',
      desc: 'Com o aumento de ataques complexos, a defesa digital tornou-se prioridade zero nas corporações.',
      details: 'A segurança deve ser pensada desde o início do projeto (Security by Design). Conheça as vulnerabilidades do OWASP Top 10 e aprenda sobre criptografia, autenticação multifator e protocolos de comunicação segura.'
    }
  ];

  const PORTAIS = [
    { title: 'Robert Half 2026', url: 'https://www.roberthalf.com/br/pt/insights/guia-salarial', desc: 'A maior referência de salários no Brasil.', color: 'bg-blue-600' },
    { title: 'Portal Salário', url: 'https://www.salario.com.br/estatisticas/cargos-e-salarios-de-ti-tecnologia-da-informacao/', desc: 'Dados oficiais do CAGED/Ministério do Trabalho.', color: 'bg-estacio-navy' },
    { title: 'Workana TI', url: 'https://www.workana.com/pt/jobs?country=BR', desc: 'Board de freelancers e projetos independentes.', color: 'bg-estacio-cyan' }
  ];

  return (
    <div className="container mx-auto px-6 py-12 md:py-20 fade-in bg-slate-50/30">
      <BackButton />

      <div className="max-w-6xl mx-auto">
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-estacio-navy/10 text-estacio-navy px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-estacio-navy/20">
              Carreira & Mercado
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-estacio-navy italic uppercase tracking-tighter mb-8 leading-none">
            Profissionais <span className="text-estacio-cyan text-stroke-navy">de TI</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-4xl leading-relaxed">
            O mercado de Tecnologia da Informação é dinâmico e exige uma combination equilibrada entre <strong className="text-estacio-navy">conhecimento técnico profundo</strong> e <strong className="text-estacio-navy">habilidades comportamentais refinadas</strong>.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {RECURSOS.map((recurso) => (
            <div 
              key={recurso.id}
              className={`bg-white p-12 rounded-[4rem] border border-slate-100 shadow-xl relative overflow-hidden group transition-all ${recurso.hoverColor}`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${recurso.accentColor} rounded-bl-[5rem]`}></div>
              <h3 className="text-2xl font-black text-estacio-navy italic uppercase mb-8 flex items-center gap-4">
                <div className={`w-12 h-12 ${recurso.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                  {recurso.icon}
                </div>
                {recurso.title}
              </h3>
              <ul className="space-y-6">
                {recurso.points.map((point, idx) => (
                  <li key={idx} className="flex gap-4">
                    <CheckCircle2 size={18} className={`${recurso.id === 'comportamental' ? 'text-estacio-cyan' : recurso.id === 'tecnica' ? 'text-blue-600' : recurso.id === 'gestao' ? 'text-purple-600' : 'text-red-500'} shrink-0 mt-1`} />
                    <p className="text-sm font-bold text-slate-600">
                      <span className="text-estacio-navy">{point.label}</span> {point.text}
                    </p>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => toggleCard(recurso.id)}
                className="mt-10 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-estacio-navy hover:text-estacio-cyan transition-colors"
              >
                {expandedCards[recurso.id] ? 'Ver menos' : 'Ver mais'}
                <ChevronDown size={14} className={`transition-transform duration-300 ${expandedCards[recurso.id] ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {expandedCards[recurso.id] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 mt-6 border-t border-slate-100">
                      <p className="text-sm font-medium text-slate-500 italic leading-relaxed">
                        {recurso.details}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="lg:col-span-2 bg-estacio-navy p-12 md:p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5"></div>
            <h3 className="relative z-10 text-2xl font-black italic uppercase mb-8 flex items-center gap-4">
              <Award className="text-estacio-amber" /> Por que TI vale a pena?
            </h3>
            <div className="relative z-10 prose prose-lg max-w-none text-white/70 font-medium space-y-6">
              <p>O mercado de TI no Brasil e no mundo vive uma escassez crônica de talentos qualificados. Isso se traduz em salários acima da média e possibilidade real de carreira global.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                <div className="p-8 bg-white/10 rounded-3xl border border-white/10 shadow-xl backdrop-blur-md">
                  <h4 className="font-black text-estacio-cyan text-xs uppercase tracking-widest mb-4">Média Salarial (BR)</h4>
                  <ul className="space-y-4 text-sm font-bold text-white/80">
                    <li className="flex justify-between border-b border-white/5 pb-2"><span>Junior</span> <span className="text-estacio-cyan font-black">R$ 5k - 8k</span></li>
                    <li className="flex justify-between border-b border-white/5 pb-2"><span>Pleno</span> <span className="text-estacio-cyan font-black">R$ 9k - 14k</span></li>
                    <li className="flex justify-between"><span>Senior</span> <span className="text-estacio-cyan font-black">R$ 15k - 25k+</span></li>
                  </ul>
                </div>
                <div className="p-8 bg-estacio-amber text-estacio-navy rounded-3xl shadow-xl shadow-amber-500/20">
                  <h4 className="font-black text-estacio-navy text-xs uppercase tracking-widest mb-4">Carreira Global</h4>
                  <p className="text-sm leading-relaxed font-bold italic">Vagas remotas nos EUA/Europa podem pagar de $4k a $12k dólares por mês, multiplicando seu poder de compra.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {TENDENCIAS.map((tendencia) => (
              <div 
                key={tendencia.id}
                className={`${tendencia.color} p-10 rounded-[3.5rem] ${tendencia.textColor} shadow-2xl border border-white/20 relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white/10"></div>
                <div className="relative z-10">
                  {React.cloneElement(tendencia.icon as React.ReactElement, { className: 'mb-6' })}
                  <h4 className="font-black text-2xl italic uppercase mb-4 leading-none">{tendencia.title}</h4>
                  <p className="text-sm font-bold leading-relaxed opacity-80">
                    {tendencia.desc}
                  </p>

                  <button 
                    onClick={() => toggleCard(tendencia.id)}
                    className={`mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest ${tendencia.id === 'ia' ? 'text-estacio-navy' : 'text-white'} hover:opacity-70 transition-opacity`}
                  >
                    {expandedCards[tendencia.id] ? 'Ver menos' : 'Ver mais'}
                    <ChevronDown size={12} className={`transition-transform duration-300 ${expandedCards[tendencia.id] ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {expandedCards[tendencia.id] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-white/10">
                          <p className="text-xs font-bold leading-relaxed opacity-90 italic">
                            {tendencia.details}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>
        </div>

        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-estacio-cyan rounded-full"></div>
            <h3 className="text-2xl font-black text-estacio-navy italic uppercase tracking-tight">Portais de Referência</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTAIS.map((link, i) => (
              <a 
                key={i} 
                href={link.url} 
                target="_blank" 
                className={`relative p-10 rounded-[3.5rem] border border-white/20 shadow-xl hover:-translate-y-2 transition-all ${link.color} text-white overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-white/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h4 className="relative z-10 font-black italic uppercase mb-4 text-white text-xl tracking-tight">{link.title}</h4>
                <p className={`relative z-10 text-[11px] font-bold leading-relaxed opacity-80 mb-8`}>{link.desc}</p>
                <div className="relative z-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest pt-6 border-t border-white/10">
                  Acessar Portal <ChevronRight size={14} />
                </div>
              </a>
            ))}
          </div>
        </section>

        <CoordinatorWidget tip="O desafio da coordenação é manter o currículo alinhado com as demandas reais do mercado para garantir sua empregabilidade. Foque em soft skills tanto quanto em hard skills!" />
      </div>
    </div>
  );
};

export default ProfissionaisTI;
