
import React from 'react';
import { ViewType } from '../types';
import { CARDS, getIcon } from '../constants';
import { 
  ExternalLink, 
  Cpu, 
  Zap, 
  Compass,
  ArrowRight,
  Code2,
  Clock,
  Layout,
  Search,
  Sparkles,
  Link2,
  CheckCircle2,
  Trophy,
  GraduationCap,
  Globe,
  UserCheck,
  TrendingUp,
  ShieldCheck,
  Award,
  BookOpenCheck,
  Layers,
  Star,
  MousePointer2,
  ChevronRight,
  Database,
  Network,
  Mail,
  Linkedin,
  Facebook,
  BookOpen,
  Terminal,
  MousePointerClick,
  Smartphone,
  TestTube2,
  Monitor,
  Box,
  Github,
  Rocket,
  Lightbulb,
  Heart,
  Target,
  FileText,
  Library,
  Scale,
  Medal,
  Users,
  Coins,
  Megaphone,
  Briefcase,
  Flame,
  Gem,
  PieChart,
  LightbulbIcon,
  Building2,
  HandCoins,
  Gavel
} from 'lucide-react';

interface DetailViewProps {
  view: ViewType;
  onBack: () => void;
}

const DetailView: React.FC<DetailViewProps> = ({ view, onBack }) => {
  const cardInfo = CARDS.find(c => c.id === view);
  
  const renderContent = () => {
    switch (view) {
      case ViewType.EMPREENDEDOR:
        return (
          <div className="space-y-24">
            {/* Hero Empreendedor - Visual Tech Startup */}
            <div className="bg-gradient-to-br from-[#f59e0b] via-[#ea580c] to-[#c2410c] p-12 md:p-24 rounded-[4rem] text-white relative overflow-hidden shadow-3xl">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -mr-40 -mt-40 blur-[100px] animate-pulse"></div>
              <div className="relative z-10 max-w-4xl">
                <div className="flex items-center gap-6 mb-10">
                  <div className="bg-white/20 backdrop-blur-md p-5 rounded-3xl border border-white/30">
                    <Rocket size={48} className="text-white" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-[0.4em] text-orange-200 italic">Startup Hub Estácio</span>
                </div>
                <h3 className="text-5xl md:text-8xl font-black tracking-tighter italic mb-8 leading-none">
                  STARTUP <br/> <span className="text-yellow-300">STUDIO</span>.
                </h3>
                <p className="text-orange-100 text-xl md:text-2xl leading-relaxed mb-12 max-w-2xl font-medium">
                  Não seja apenas um executor de tarefas, seja o arquiteto do seu próprio futuro. No mundo da TI, a distância entre uma ideia e um negócio global é apenas uma linha de código.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-3 bg-black/20 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/10">
                    <TrendingUp size={20} className="text-yellow-400" />
                    <span className="text-sm font-bold">Crescimento Exponencial</span>
                  </div>
                  <div className="flex items-center gap-3 bg-black/20 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/10">
                    <PieChart size={20} className="text-yellow-400" />
                    <span className="text-sm font-bold">Domínio de Mercado</span>
                  </div>
                </div>
              </div>
            </div>

            {/* As Vantagens de Ser um Case de Sucesso */}
            <div>
              <div className="flex items-center gap-4 mb-16">
                <div className="w-2 h-10 bg-orange-500 rounded-full"></div>
                <h3 className="text-4xl font-black text-estacio-navy tracking-tight uppercase italic">Vantagens do Sucesso</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  { icon: <Gem />, title: "Independência Financeira", desc: "Diferente de um salário fixo, o retorno de um negócio próprio não tem teto. O céu é o limite." },
                  { icon: <Globe />, title: "Alcance Global", desc: "Software não tem fronteiras. Seu App criado no Rio de Janeiro pode ser usado em Tóquio amanhã." },
                  { icon: <Award />, title: "Autoridade Técnica", desc: "Fundar uma startup valida seu conhecimento de forma mais profunda que qualquer prova." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group border-b-8 border-b-orange-500">
                    <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-8 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                      {item.icon}
                    </div>
                    <h4 className="text-2xl font-black text-estacio-navy mb-4 italic">{item.title}</h4>
                    <p className="text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Roteiro: Do Código ao Business */}
            <div className="bg-[#0f172a] p-12 md:p-24 rounded-[5rem] text-white relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
              <h3 className="text-4xl font-black mb-20 text-center uppercase tracking-widest italic">Roteiro Founder Journey</h3>
              <div className="space-y-12 relative">
                <div className="absolute left-[29px] md:left-[50%] top-0 bottom-0 w-0.5 bg-gray-800 hidden md:block"></div>
                {[
                  { step: "01", title: "Problema x Solução", desc: "Esqueça a tecnologia por um momento. Qual dor você está curando? Se as pessoas não pagariam pela solução, você tem um hobby, não um negócio.", side: "left" },
                  { step: "02", title: "MVP & Lean", desc: "Construa o mínimo necessário para testar sua tese. Use frameworks rápidos. O objetivo aqui é falhar rápido ou aprender rápido.", side: "right" },
                  { step: "03", title: "Product-Market Fit", desc: "Ajuste seu código com base no feedback real. O mercado dirá o que ele quer. Esteja pronto para 'pivotar' sua ideia.", side: "left" },
                  { step: "04", title: "Captação & Escala", desc: "Com números na mão, busque investidores anjo ou editais de fomento. Use a nuvem para escalar sua infraestrutura infinitamente.", side: "right" }
                ].map((item, i) => (
                  <div key={i} className={`flex flex-col md:flex-row items-center gap-12 ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                    <div className="flex-1 text-center md:text-right px-4">
                      {item.side === 'left' && (
                        <>
                          <h4 className="text-2xl font-black text-orange-500 mb-3 italic">{item.title}</h4>
                          <p className="text-gray-400 text-sm leading-relaxed max-w-sm ml-auto">{item.desc}</p>
                        </>
                      )}
                    </div>
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-gray-900 font-black text-xl z-10 shadow-2xl border-4 border-orange-500 shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1 text-center md:text-left px-4">
                      {item.side === 'right' && (
                        <>
                          <h4 className="text-2xl font-black text-orange-500 mb-3 italic">{item.title}</h4>
                          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">{item.desc}</p>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Órgãos de Apoio e Fomento - NOVA SEÇÃO */}
            <div>
              <div className="flex items-center gap-4 mb-16">
                <div className="w-2 h-10 bg-blue-600 rounded-full"></div>
                <h3 className="text-4xl font-black text-estacio-navy tracking-tight uppercase italic">Apoio Governamental & Fomento</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { 
                    name: "FINEP", 
                    desc: "Financiadora de Estudos e Projetos. Editais de subvenção econômica para inovação tecnológica.", 
                    link: "http://www.finep.gov.br/",
                    icon: <Building2 className="text-blue-700" />
                  },
                  { 
                    name: "BNDES Garagem", 
                    desc: "Programa de aceleração do BNDES focado em startups que resolvem problemas reais do Brasil.", 
                    link: "https://www.bndes.gov.br/wps/portal/site/home/institucional/bndes-garagem",
                    icon: <HandCoins className="text-green-600" />
                  },
                  { 
                    name: "MCTI", 
                    desc: "Ministério da Ciência e Tecnologia. Programas como 'Centelha' e 'Startup Brasil'.", 
                    link: "https://www.gov.br/mcti/pt-br",
                    icon: <Gavel className="text-yellow-700" />
                  },
                  { 
                    name: "CVM (Sandbox)", 
                    desc: "Ambiente regulatório experimental para Fintechs e novos modelos de negócio financeiro.", 
                    link: "https://www.gov.br/cvm/pt-br/assuntos/sandbox",
                    icon: <ShieldCheck className="text-purple-600" />
                  }
                ].map((item, i) => (
                  <a key={i} href={item.link} target="_blank" className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h5 className="font-black text-estacio-navy text-lg mb-2 italic">{item.name}</h5>
                    <p className="text-[10px] text-gray-500 font-bold uppercase mb-6 leading-relaxed">{item.desc}</p>
                    <span className="text-blue-600 text-[10px] font-black uppercase flex items-center gap-2">
                      Visitar Portal <ArrowRight size={12} />
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Dicas do Coordenador - Seção Especial */}
            <div className="bg-estacio-navy p-12 md:p-20 rounded-[4rem] text-white flex flex-col lg:flex-row items-center gap-16 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-estacio-cyan/20 rounded-full blur-3xl"></div>
               <div className="lg:w-1/3 text-center lg:text-left">
                  <div className="w-32 h-32 bg-white rounded-full mx-auto lg:mx-0 flex items-center justify-center text-estacio-navy mb-8 shadow-xl border-8 border-estacio-navy/50 overflow-hidden relative">
                     <Users size={64} />
                  </div>
                  <h4 className="text-2xl font-black italic">Dicas do Coordenador</h4>
                  <p className="text-estacio-cyan font-bold uppercase text-[10px] tracking-widest mt-2">Prof. Antônio Cândido</p>
               </div>
               <div className="lg:w-2/3 space-y-8">
                  <div className="bg-white/10 p-8 rounded-3xl border border-white/10 backdrop-blur-sm relative">
                    <Sparkles className="absolute -top-4 -left-4 text-yellow-400" size={32} />
                    <p className="text-lg italic font-medium leading-relaxed">
                      "Alunos, o mercado de TI hoje valoriza o <strong>'Intraempreendedorismo'</strong> tanto quanto o empreendedorismo externo. Mesmo que você decida trabalhar em uma empresa, tenha a mentalidade de dono. Busque problemas para resolver, não apenas tickets para fechar. Isso é o que acelerará sua carreira exponencialmente."
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                      <LightbulbIcon className="text-yellow-400 shrink-0" size={20} />
                      <p className="text-xs font-medium text-blue-100"><strong>Dica de Mestre:</strong> Saber vender sua ideia é tão importante quanto saber codar. Estude oratória!</p>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                      <Target className="text-estacio-cyan shrink-0" size={20} />
                      <p className="text-xs font-medium text-blue-100"><strong>Networking:</strong> Não trabalhe sozinho. Frequente meetups e hackathons presenciais no Rio.</p>
                    </div>
                  </div>
               </div>
            </div>

            {/* Toolkit do Founder corrigido */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
               <div className="bg-white p-12 rounded-[4rem] border border-gray-100 shadow-sm">
                  <h3 className="text-3xl font-black text-estacio-navy italic mb-10 flex items-center gap-4">
                    <Sparkles className="text-orange-500" /> Startups de Garagem
                  </h3>
                  <div className="space-y-6">
                    {[
                      { name: "NuBank", tech: "Clojure/Cloud", impact: "Revolucionou o sistema bancário focado em UX." },
                      { name: "Gympass", tech: "Mobile/Data", impact: "Transformou o acesso a saúde corporativa globalmente." },
                      { name: "Hotmart", tech: "Web/Payments", impact: "Líder em infoprodutos e economia criativa." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 items-start p-4 hover:bg-gray-50 rounded-2xl transition-all cursor-default">
                        <div className="w-12 h-12 bg-estacio-navy rounded-xl shrink-0 flex items-center justify-center font-black text-white">{item.name[0]}</div>
                        <div>
                          <h6 className="font-black text-estacio-navy italic">{item.name}</h6>
                          <p className="text-[10px] text-orange-500 font-black uppercase tracking-widest mb-1">{item.tech}</p>
                          <p className="text-xs text-gray-500 font-medium">{item.impact}</p>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>

               <div className="bg-gray-100 p-12 rounded-[4rem] border border-gray-200">
                  <h3 className="text-3xl font-black text-estacio-navy italic mb-10">Toolkit do Founder</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a href="https://leanstack.com/lean-canvas" target="_blank" className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-orange-400 group flex flex-col">
                      <Layout size={24} className="text-orange-500 mb-4" />
                      <span className="font-black text-xs text-estacio-navy mb-1 italic">Lean Canvas</span>
                      <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest leading-none">Modelagem de Negócio</p>
                    </a>
                    <a href="https://github.com/startup-os/startup-os" target="_blank" className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-orange-400 group flex flex-col">
                      <Github size={24} className="text-gray-900 mb-4" />
                      <span className="font-black text-xs text-estacio-navy mb-1 italic">Startup OS</span>
                      <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest leading-none">Recursos Open Source</p>
                    </a>
                    <a href="https://sebraestartups.com.br/" target="_blank" className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-orange-400 group flex flex-col">
                      <Rocket size={24} className="text-blue-500 mb-4" />
                      <span className="font-black text-xs text-estacio-navy mb-1 italic">Sebrae Startups</span>
                      <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest leading-none">Cursos e Mentoria Oficial</p>
                    </a>
                    <a href="https://inovativabrasil.com.br/ciclos-de-aceleracao/" target="_blank" className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-orange-400 group flex flex-col">
                      <Briefcase size={24} className="text-green-500 mb-4" />
                      <span className="font-black text-xs text-estacio-navy mb-1 italic">Aceleração</span>
                      <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest leading-none">InovAtiva Brasil</p>
                    </a>
                  </div>
               </div>
            </div>
          </div>
        );
      case ViewType.CONCURSOS:
        return (
          <div className="space-y-20">
            {/* Introdução Motivacional */}
            <div className="bg-gradient-to-br from-estacio-navy to-[#001a4d] p-10 md:p-20 rounded-[4rem] text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-estacio-yellow/10 rounded-full -mr-48 -mt-48 blur-3xl animate-pulse"></div>
              <div className="relative z-10 max-w-4xl">
                <div className="flex items-center gap-6 mb-8">
                  <div className="bg-estacio-yellow p-4 rounded-3xl shadow-lg shadow-estacio-yellow/20">
                    <Trophy size={40} className="text-estacio-navy" />
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black tracking-tighter italic uppercase">Carreira Pública em TI</h3>
                </div>
                <p className="text-blue-100/70 text-lg md:text-xl leading-relaxed mb-8">
                  Estabilidade, ótimos salários e a chance de trabalhar em projetos de impacto nacional. O caminho para se tornar um <strong>Servidor Público de TI</strong> exige estratégia, e nós preparamos o seu roteiro.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-white/10 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">Estabilidade Vitalícia</span>
                  <span className="bg-white/10 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">Altos Salários</span>
                  <span className="bg-white/10 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">Progressão de Carreira</span>
                </div>
              </div>
            </div>

            {/* Trilha do Sucesso (Roadmap) */}
            <div>
              <div className="flex items-center gap-4 mb-12">
                <Target className="text-estacio-cyan" size={32} />
                <h3 className="text-3xl font-black text-estacio-navy uppercase tracking-tight">Trilha da Aprovação</h3>
              </div>
              
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-100 hidden md:block"></div>
                
                <div className="space-y-12">
                  {[
                    { 
                      step: "01", 
                      title: "Base Fundamental", 
                      desc: "Não ignore o básico. 40% da sua prova será Português, Raciocínio Lógico e Direito Administrativo/Constitucional.",
                      icon: <Library className="text-blue-500" /> 
                    },
                    { 
                      step: "02", 
                      title: "Núcleo de TI", 
                      desc: "Domine Engenharia de Software, Banco de Dados (SQL/NoSQL) e Redes. São os temas que mais caem em qualquer edital.",
                      icon: <Code2 className="text-estacio-cyan" /> 
                    },
                    { 
                      step: "03", 
                      title: "Específicos de Elite", 
                      desc: "Aprofunde em Segurança da Informação, LGPD e Gestão de TI (ITIL e COBIT). Isso separa os aprovados dos demais.",
                      icon: <ShieldCheck className="text-orange-500" /> 
                    },
                    { 
                      step: "04", 
                      title: "Ciclo de Questões", 
                      desc: "Resolva 50 questões por dia. Concurso é treino. Conheça as bancas (FGV, CESPE, FCC) como a palma da sua mão.",
                      icon: <FileText className="text-green-500" /> 
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="relative flex flex-col md:flex-row gap-8 items-start group">
                      <div className="hidden md:flex absolute left-0 w-16 h-16 bg-white border-4 border-gray-50 rounded-full items-center justify-center font-black text-estacio-navy shadow-sm z-10 group-hover:border-estacio-cyan transition-colors">
                        {item.step}
                      </div>
                      <div className="md:ml-24 bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all flex-grow">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="md:hidden w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center font-black text-estacio-navy">
                            {item.step}
                          </div>
                          <div className="p-2 bg-gray-50 rounded-xl">{item.icon}</div>
                          <h4 className="text-xl font-black text-estacio-navy italic">{item.title}</h4>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Dicas de Ouro de Estudo */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="bg-blue-50 p-10 md:p-14 rounded-[3.5rem] border border-blue-100">
                <Sparkles className="text-estacio-navy mb-6" size={40} />
                <h4 className="text-2xl font-black text-estacio-navy mb-6 italic">Dicas de Mestre</h4>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-estacio-cyan shrink-0" size={20} />
                    <p className="text-gray-600 text-sm font-medium"><strong>Foco na Banca:</strong> Cada banca tem um "estilo". A FGV ama códigos complexos; o CESPE foca em conceitos teóricos.</p>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-estacio-cyan shrink-0" size={20} />
                    <p className="text-gray-600 text-sm font-medium"><strong>Revisões Periódicas:</strong> Use Anki ou Flashcards. O conteúdo de TI é vasto e você não pode esquecer a base.</p>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-estacio-cyan shrink-0" size={20} />
                    <p className="text-gray-600 text-sm font-medium"><strong>LGPD é Obrigatório:</strong> Atualmente, quase todo concurso de TI cobra a Lei Geral de Proteção de Dados.</p>
                  </li>
                </ul>
              </div>

              <div className="bg-estacio-navy p-10 md:p-14 rounded-[3.5rem] text-white flex flex-col justify-center">
                <Search className="text-estacio-cyan mb-6" size={40} />
                <h4 className="text-2xl font-black mb-6 italic">Onde Monitorar Vagas?</h4>
                <p className="text-blue-100/60 mb-10 text-sm leading-relaxed">Não perca os prazos. Salve estes portais nos seus favoritos e verifique toda segunda-feira.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: "PCI Concursos", url: "https://www.pciconcursos.com.br" },
                    { name: "Folha Dirigida", url: "https://folhadirigida.com.br" },
                    { name: "JC Concursos", url: "https://jcconcursos.com.br" },
                    { name: "Estratégia TI", url: "https://www.estrategiaconcursos.com.br/blog/concursos-ti/" }
                  ].map((site, i) => (
                    <a key={i} href={site.url} target="_blank" className="flex items-center justify-between bg-white/10 hover:bg-estacio-cyan transition-colors px-6 py-4 rounded-2xl border border-white/5 group">
                      <span className="text-[10px] font-black uppercase tracking-widest">{site.name}</span>
                      <ExternalLink size={14} className="opacity-40 group-hover:opacity-100" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer de Encerramento */}
            <div className="text-center py-10">
              <div className="inline-block p-6 bg-white shadow-xl rounded-[2.5rem] border border-gray-100">
                <p className="text-gray-500 font-bold italic mb-4">"O concurso não se faz para passar, mas até passar."</p>
                <div className="flex items-center justify-center gap-2 text-estacio-navy font-black text-[10px] uppercase tracking-[0.2em]">
                  <Medal size={16} className="text-estacio-yellow" /> Persistência é a Chave do Sucesso
                </div>
              </div>
            </div>
          </div>
        );
      case ViewType.COORDENADOR:
        return (
          <div className="grid grid-cols-1 gap-12">
            <div className="bg-white p-12 md:p-16 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40 text-center flex flex-col items-center">
              <h3 className="text-3xl md:text-5xl font-black text-estacio-navy mb-6">
                Prof. Antônio Cândido de O. Filho
              </h3>
              
              <div className="text-gray-500 font-semibold text-base md:text-xl leading-relaxed max-w-2xl mb-12">
                Coordenador de Análise e Desenvolvimento de Sistemas 
                <br /> - ADS e Ciência da Computação - CC
              </div>

              <div className="w-full max-w-lg space-y-6 text-left">
                <div className="flex items-center gap-5 p-2 group cursor-pointer">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-500 transition-transform group-hover:scale-110">
                    <Mail size={24} />
                  </div>
                  <span className="text-lg md:text-xl font-bold text-gray-700">antonio.filho@estacio.br</span>
                </div>

                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-2 group cursor-pointer hover:no-underline">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 transition-transform group-hover:scale-110">
                    <Linkedin size={24} fill="currentColor" stroke="none" />
                  </div>
                  <span className="text-lg md:text-xl font-bold text-blue-600">LinkedIn Perfil</span>
                </a>

                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-2 group cursor-pointer hover:no-underline">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 transition-transform group-hover:scale-110">
                    <Facebook size={24} fill="currentColor" stroke="none" />
                  </div>
                  <span className="text-lg md:text-xl font-bold text-blue-600">Facebook Perfil</span>
                </a>
              </div>
            </div>
            
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40">
              <h4 className="font-black text-3xl md:text-4xl text-estacio-navy mb-12">Horários de Atendimento</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-[#F8FAFC] p-8 md:p-10 rounded-[2rem] border border-gray-50 flex flex-col h-full">
                  <h5 className="text-[12px] font-black uppercase text-estacio-navy/60 tracking-[0.2em] mb-8">TOM JOBIM - BARRA</h5>
                  <ul className="space-y-6">
                    <li className="flex items-center group">
                      <span className="w-3.5 h-3.5 rounded-full bg-estacio-cyan mr-5 shadow-sm shadow-estacio-cyan/40 shrink-0"></span>
                      <span className="text-base md:text-lg font-medium text-gray-600">
                        <strong className="text-estacio-navy font-black">Presencial:</strong> Quarta, 09h às 19h
                      </span>
                    </li>
                    <li className="flex items-center group">
                      <span className="w-3.5 h-3.5 rounded-full bg-blue-500 mr-5 shadow-sm shadow-blue-500/40 shrink-0"></span>
                      <span className="text-base md:text-lg font-medium text-gray-600">
                        <strong className="text-estacio-navy font-black">Remoto:</strong> Sexta, 09h às 12h
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-[#F8FAFC] p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 h-full">
                  <h5 className="text-[12px] font-black uppercase text-estacio-navy/60 tracking-[0.2em] mb-8">R9 - TAQUARA</h5>
                  <ul className="space-y-6">
                    <li className="flex items-center group">
                      <span className="w-3.5 h-3.5 rounded-full bg-estacio-cyan mr-5 shadow-sm shadow-estacio-cyan/40 shrink-0"></span>
                      <span className="text-base md:text-lg font-medium text-gray-600">
                        <strong className="text-estacio-navy font-black">Presencial:</strong> Quinta, 09h às 19h
                      </span>
                    </li>
                    <li className="flex items-center group">
                      <span className="w-3.5 h-3.5 rounded-full bg-blue-500 mr-5 shadow-sm shadow-blue-500/40 shrink-0"></span>
                      <span className="text-base md:text-lg font-medium text-gray-600">
                        <strong className="text-estacio-navy font-black">Remoto:</strong> Sexta, 13h às 16h
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      case ViewType.ESTAGIOS:
        return (
          <div className="space-y-20">
            {/* Portais de Oportunidades */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <Compass className="text-estacio-cyan" size={32} />
                <h3 className="text-2xl font-black text-estacio-navy uppercase tracking-tight">Onde Encontrar Vagas?</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group border-l-8 border-l-blue-500">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Search size={32} />
                    </div>
                    <div>
                      <h4 className="font-black text-xl text-estacio-navy">Encontre sua Vaga</h4>
                      <p className="text-xs text-blue-500 font-bold uppercase tracking-widest">Parceiro Estácio</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8">Portal exclusivo para alunos e egressos da Estácio. Milhares de vagas de estágio direto com empresas parceiras.</p>
                  <a href="https://www.encontresuavaga.com.br" target="_blank" className="inline-flex items-center gap-3 bg-estacio-navy text-white px-8 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-estacio-cyan transition-all">
                    Acessar Portal <ExternalLink size={14} />
                  </a>
                </div>
                <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group border-l-8 border-l-orange-500">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                      <GraduationCap size={32} />
                    </div>
                    <div>
                      <h4 className="font-black text-xl text-estacio-navy">CIEE Portal</h4>
                      <p className="text-gray-500 text-sm leading-relaxed mb-8">A maior integradora de estágios do país. Ideal para quem busca a primeira experiência no mercado formal.</p>
                      <a href="https://portal.ciee.org.br" target="_blank" className="inline-flex items-center gap-3 bg-estacio-navy text-white px-8 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-estacio-cyan transition-all">
                        Acessar CIEE <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="bg-gray-50 p-24 rounded-3xl text-center border-4 border-dashed border-gray-200">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-2xl font-black text-estacio-navy mb-4">Em Construção</h3>
              <p className="text-gray-500 font-medium">Estamos preparando conteúdos exclusivos para esta seção.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="fade-in container mx-auto px-6 py-12">
      <button 
        onClick={onBack}
        className="group flex items-center gap-5 text-gray-400 font-black uppercase tracking-widest text-[11px] hover:text-estacio-navy mb-16 transition-all"
      >
        <span className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-estacio-navy group-hover:bg-estacio-navy group-hover:text-white transition-all">
          <ChevronRight className="w-5 h-5 rotate-180" />
        </span>
        Voltar para a Home
      </button>

      <div className="flex flex-col md:flex-row md:items-center gap-10 mb-20 border-l-[12px] border-estacio-cyan pl-10">
        <div className="p-8 bg-white shadow-2xl shadow-gray-200 rounded-[2.5rem] flex-shrink-0">
          <div className={`${cardInfo?.color || 'text-estacio-navy'}`}>
            {getIcon(cardInfo?.icon || 'Info', 72)}
          </div>
        </div>
        <div>
          <h2 className="text-5xl md:text-7xl font-black text-estacio-navy tracking-tighter mb-4 leading-none italic uppercase">
            {cardInfo?.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-3xl leading-relaxed">
            {cardInfo?.description}
          </p>
        </div>
      </div>

      <div className="pb-32">
        {renderContent()}
      </div>
    </div>
  );
};

export default DetailView;
