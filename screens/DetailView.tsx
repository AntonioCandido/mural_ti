
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
  Layout,
  Search,
  Sparkles,
  Link2,
  CheckCircle2,
  Trophy,
  GraduationCap,
  Globe,
  TrendingUp,
  ShieldCheck,
  Award,
  ChevronRight,
  Database,
  Network,
  Mail,
  Linkedin,
  Facebook,
  Terminal,
  Smartphone,
  Monitor,
  Box,
  Github,
  Rocket,
  Lightbulb,
  Target,
  FileText,
  Library,
  Medal,
  Users,
  Coins,
  Briefcase,
  Gem,
  PieChart,
  Building2,
  HandCoins,
  Gavel,
  History,
  Bug,
  ShieldAlert,
  Settings,
  FlaskConical,
  Activity,
  Infinity,
  Gamepad2,
  Book,
  PenTool,
  Wifi,
  Stethoscope,
  CalendarDays,
  HardDrive
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
            {/* Hero Empreendedor */}
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
              </div>
            </div>
            {/* ... Rest of Empreendedor Content ... */}
          </div>
        );

      case ViewType.APP_EXEMPLO:
        const awesomeClusters = [
          {
            category: "Core Development",
            icon: <Code2 />,
            links: [
              { name: "Plataformas", desc: "Sistemas operacionais, nuvem e ecossistemas de software.", url: "https://github.com/sindresorhus/awesome?tab=readme-ov-file#platforms" },
              { name: "Linguagens", desc: "A base de tudo: de Rust a Python, explore as sintaxes do futuro.", url: "https://github.com/sindresorhus/awesome?tab=readme-ov-file#programming-languages" },
              { name: "Front-End", desc: "Interfaces incríveis e experiências de usuário memoráveis.", url: "https://github.com/sindresorhus/awesome?tab=readme-ov-file#front-end-development" },
              { name: "Back-End", desc: "A lógica por trás da cortina: servidores, APIs e performance.", url: "https://github.com/sindresorhus/awesome?tab=readme-ov-file#back-end-development" }
            ]
          },
          {
            category: "Science & Data",
            icon: <Database />,
            links: [
              { name: "Ciência da Computação", desc: "Algoritmos, estruturas de dados e fundamentos teóricos.", url: "https://github.com/sindresorhus/awesome?tab=readme-ov-file#computer-science" },
              { name: "Big Data & Databases", desc: "Onde o dado vive e como ele é processado em escala.", url: "https://github.com/sindresorhus/awesome?tab=readme-ov-file#big-data" },
              { name: "Sistemas Descentralizados", desc: "Web3, Blockchain e arquiteturas distribuídas.", url: "https://github.com/sindresorhus/awesome?tab=readme-ov-file#decentralized-systems" }
            ]
          },
          {
            category: "Environment & Tools",
            icon: <Settings />,
            links: [
              { name: "Editores & Ambientes", desc: "VS Code, Vim e como tunar sua máquina de guerra.", url: "https://github.com/sindresorhus/awesome?tab=readme-ov-file#editors" },
              { name: "Testando", desc: "Qualidade de software: de unitários a testes de carga.", url: "https://github.com/sindresorhus/awesome?tab=readme-ov-file#testing" },
              { name: "Segurança", desc: "Hacking ético, defesa e criptografia.", url: "https://github.com/sindresorhus/awesome?tab=readme-ov-file#security" }
            ]
          },
          {
            category: "Career & Knowledge",
            icon: <Briefcase />,
            links: [
              { name: "Aprender & Livros", desc: "O caminho do autodidata: recursos gratuitos e leituras de elite.", url: "https://github.com/sindresorhus/awesome?tab=readme-ov-file#learn" },
              { name: "Negócios & Trabalho", desc: "Soft skills, vagas remotas e como gerir sua carreira.", url: "https://github.com/sindresorhus/awesome?tab=readme-ov-file#work" },
              { name: "Eventos & Networking", desc: "Conferências e comunidades que você deve participar.", url: "https://github.com/sindresorhus/awesome?tab=readme-ov-file#events" }
            ]
          }
        ];

        return (
          <div className="space-y-24">
            {/* Hero Awesome Explorer */}
            <div className="bg-[#0f172a] p-12 md:p-24 rounded-[4rem] text-white relative overflow-hidden shadow-3xl border border-white/5">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-estacio-cyan/10 rounded-full -mr-60 -mt-60 blur-[120px] animate-pulse"></div>
              <div className="relative z-10 max-w-4xl">
                <div className="flex items-center gap-6 mb-10">
                  <div className="bg-white/10 backdrop-blur-xl p-5 rounded-3xl border border-white/10">
                    <Infinity size={48} className="text-estacio-cyan" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-[0.4em] text-blue-200 italic">The Ultimate Resource Directory</span>
                </div>
                <h3 className="text-5xl md:text-8xl font-black tracking-tighter italic mb-8 leading-none">
                  AWESOME <br/> <span className="text-estacio-cyan">EXPLORER</span>.
                </h3>
                <p className="text-blue-100 text-xl md:text-2xl leading-relaxed mb-12 max-w-3xl font-medium">
                  Domine o ecossistema tecnológico mundial. Baseado na curadoria de <strong>Sindre Sorhus</strong>, este hub centraliza o que há de melhor em cada nicho da computação para os alunos da Estácio.
                </p>
              </div>
            </div>

            {/* Clusters de Links */}
            <div className="space-y-20">
              {awesomeClusters.map((cluster, idx) => (
                <div key={idx} className="fade-in">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 bg-estacio-navy rounded-2xl flex items-center justify-center text-estacio-cyan shadow-lg">
                      {React.cloneElement(cluster.icon as React.ReactElement, { size: 24 })}
                    </div>
                    <h3 className="text-3xl font-black text-estacio-navy uppercase tracking-tight italic">{cluster.category}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cluster.links.map((link, lIdx) => (
                      <a 
                        key={lIdx} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group flex flex-col h-full"
                      >
                        <h5 className="font-black text-estacio-navy text-lg mb-3 italic group-hover:text-estacio-cyan transition-colors">{link.name}</h5>
                        <p className="text-gray-400 text-xs font-medium leading-relaxed mb-8 flex-grow">{link.desc}</p>
                        <div className="mt-auto flex items-center gap-2 text-estacio-cyan font-black text-[9px] uppercase tracking-widest">
                          Explorar Categoria <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Vantagens do Profissional de Sucesso */}
            <div className="bg-estacio-navy p-12 md:p-24 rounded-[4rem] text-white relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-estacio-cyan/10 rounded-full blur-[100px]"></div>
              <div className="text-center mb-16">
                <h3 className="text-4xl font-black italic uppercase mb-4">O Caminho do Sucesso</h3>
                <p className="text-blue-200 font-bold text-sm uppercase tracking-[0.2em]">Por que dominar estas ferramentas?</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  { icon: <Gem />, title: "Diferenciação Absoluta", desc: "A maioria dos profissionais conhece apenas o básico. Ao dominar recursos 'Awesome', você entra no top 1% técnico." },
                  { icon: <Globe />, title: "Padrão Internacional", desc: "Estas listas são usadas em empresas como Google, Meta e Netflix. Você aprende o padrão global de engenharia." },
                  { icon: <Trophy />, title: "Velocidade de Entrega", desc: "Saber qual ferramenta certa usar economiza meses de trabalho. Tempo é a moeda mais cara da TI." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center group">
                    <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center text-estacio-cyan mb-8 border border-white/10 group-hover:bg-estacio-cyan group-hover:text-estacio-navy transition-all duration-500">
                      {React.cloneElement(item.icon as React.ReactElement, { size: 40 })}
                    </div>
                    <h4 className="text-2xl font-black mb-4 italic">{item.title}</h4>
                    <p className="text-blue-100/60 text-sm leading-relaxed max-w-xs font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Roteiro do Aluno TI Estácio */}
            <div>
              <div className="flex items-center gap-4 mb-16">
                <div className="w-2 h-10 bg-estacio-cyan rounded-full"></div>
                <h3 className="text-4xl font-black text-estacio-navy tracking-tight uppercase italic">Roadmap do Estudante</h3>
              </div>
              <div className="space-y-12">
                {[
                  { step: "01", title: "Fundamentação", desc: "Comece por Computer Science e Programming Languages. Entenda o porquê antes do como." },
                  { step: "02", title: "Especialização", desc: "Escolha entre Front-end, Back-end ou Big Data. Tente ser mestre em uma trilha antes de pular para outra." },
                  { step: "03", title: "Infraestrutura & Qualidade", desc: "Estude Testing e Platforms. É o que separa o programador amador do engenheiro sênior." },
                  { step: "04", title: "Career Focus", desc: "Explore Work e Business. Aprenda a gerir sua imagem e entender o negócio por trás do código." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col md:flex-row items-center gap-8 bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                    <div className="w-16 h-16 bg-estacio-navy text-estacio-cyan rounded-2xl flex items-center justify-center font-black text-2xl shrink-0 group-hover:bg-estacio-cyan group-hover:text-estacio-navy transition-colors">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-estacio-navy mb-2 italic">{item.title}</h4>
                      <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dica do Coordenador Especial */}
            <div className="bg-[#f0f9ff] p-12 md:p-20 rounded-[4rem] border border-blue-100 flex flex-col lg:flex-row items-center gap-16 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
               <div className="lg:w-1/3 text-center lg:text-left">
                  <div className="w-32 h-32 bg-estacio-navy rounded-full mx-auto lg:mx-0 flex items-center justify-center text-white mb-8 shadow-xl border-8 border-white overflow-hidden relative group">
                     <Users size={64} className="group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="text-2xl font-black italic text-estacio-navy">Fala, Coordenador!</h4>
                  <p className="text-estacio-cyan font-bold uppercase text-[10px] tracking-widest mt-2">Prof. Antônio Cândido</p>
               </div>
               <div className="lg:w-2/3">
                  <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-blue-50 relative">
                    <Sparkles className="absolute -top-4 -right-4 text-estacio-cyan" size={40} />
                    <p className="text-xl italic font-medium leading-relaxed text-gray-700">
                      "Alunos, o repositório 'Awesome' é como uma biblioteca infinita. O segredo não é ler tudo, mas saber onde procurar a resposta certa para cada problema. **Sejam curiosos, mas mantenham o foco**. Escolham um link por semana para explorar e testar. Isso construirá um repertório que nenhum currículo padrão consegue competir."
                    </p>
                    <div className="mt-8 flex gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Curadoria Ativa</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Sucesso Profissional</span>
                      </div>
                    </div>
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
            {/* ... Rest of Coordinator Content ... */}
          </div>
        );

      case ViewType.DICAS:
        return (
          <div className="space-y-24">
            {/* Hero Tech Elite */}
            <div className="bg-gradient-to-br from-estacio-navy via-[#001d5a] to-estacio-cyan p-12 md:p-24 rounded-[4rem] text-white relative overflow-hidden shadow-3xl">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full -mr-60 -mt-60 blur-[120px] animate-pulse"></div>
              <div className="relative z-10 max-w-4xl">
                <div className="flex items-center gap-6 mb-10">
                  <div className="bg-white/10 backdrop-blur-xl p-5 rounded-3xl border border-white/20">
                    <Terminal size={48} className="text-estacio-cyan" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-[0.4em] text-blue-200 italic">Engineering Excellence</span>
                </div>
                <h3 className="text-5xl md:text-8xl font-black tracking-tighter italic mb-8 leading-none">
                  BECOME <br/> <span className="text-estacio-cyan">TOP 1%</span>.
                </h3>
                <p className="text-blue-100 text-xl md:text-2xl leading-relaxed mb-12 max-w-3xl font-medium">
                  O conhecimento técnico é sua maior moeda. No mercado de TI, a curiosidade infinita e a base sólida em algoritmos são o que separam os codificadores dos verdadeiros engenheiros.
                </p>
              </div>
            </div>
            {/* ... Rest of Tips Content ... */}
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
                  Estabilidade, ótimos salários e a chance de trabalhar em projetos de impacto nacional.
                </p>
              </div>
            </div>
            {/* ... Rest of Concursos Content ... */}
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
