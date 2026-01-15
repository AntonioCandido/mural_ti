
import React, { useState } from 'react';
import { ViewType } from '../types';
import { CARDS, getIcon } from '../constants';
import { 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Trophy, 
  Github, 
  Globe, 
  Plane, 
  ChevronRight, 
  Mail, 
  Linkedin, 
  Facebook, 
  Clock, 
  MapPin, 
  Users,
  Smartphone,
  Code2,
  Layout,
  Terminal,
  Cpu,
  PieChart,
  Library,
  Book,
  PenTool,
  Gamepad2,
  Settings,
  Activity,
  Database,
  Tv,
  GraduationCap,
  ShieldCheck,
  Box,
  Microchip,
  Briefcase,
  TrendingUp,
  Globe2,
  HeartPulse,
  CalendarDays,
  FlaskConical,
  Puzzle,
  Link2,
  Search,
  Target,
  FileText,
  Medal,
  Zap,
  Star,
  X
} from 'lucide-react';

interface DetailViewProps {
  view: ViewType;
  onBack: () => void;
}

interface AwesomeCategory {
  title: string;
  icon: React.ReactNode;
  link: string;
  desc: string;
  longDesc: string;
}

const DetailView: React.FC<DetailViewProps> = ({ view, onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState<AwesomeCategory | null>(null);
  const cardInfo = CARDS.find(c => c.id === view);

  const awesomeCategories: AwesomeCategory[] = [
    { 
      title: "Plataformas", 
      icon: <Smartphone />, 
      link: "https://github.com/sindresorhus/awesome#platforms", 
      desc: "iOS, Android, Cloud e ecossistemas OS.",
      longDesc: "Explore guias completos para desenvolvimento mobile nativo e multiplataforma, além de recursos para as principais plataformas de cloud do mercado."
    },
    { 
      title: "Linguagens", 
      icon: <Code2 />, 
      link: "https://github.com/sindresorhus/awesome#programming-languages", 
      desc: "Os pilares da lógica moderna.",
      longDesc: "De C++ a Rust, encontre repositórios curados com as melhores práticas, frameworks e bibliotecas para as linguagens mais demandadas do mundo."
    },
    { 
      title: "Front-End", 
      icon: <Layout />, 
      link: "https://github.com/sindresorhus/awesome#front-end-development", 
      desc: "Interfaces ricas e UX de alta performance.",
      longDesc: "Tudo sobre o ecossistema Web: React, Vue, Angular, CSS moderno, WebGL e ferramentas para criar experiências visuais incríveis."
    },
    { 
      title: "Back-End", 
      icon: <Terminal />, 
      link: "https://github.com/sindresorhus/awesome#back-end-development", 
      desc: "Escalabilidade e lógica de servidor.",
      longDesc: "Recursos para Node.js, Python, Go, Ruby e Java. Foque em arquitetura de microsserviços, mensageria e alta disponibilidade."
    },
    { 
      title: "Ciência da Comp.", 
      icon: <Cpu />, 
      link: "https://github.com/sindresorhus/awesome#computer-science", 
      desc: "Fundamentos e algoritmos clássicos.",
      longDesc: "A base de tudo. Estude estruturas de dados, algoritmos, teoria da computação e conceitos que definem um engenheiro de software de elite."
    },
    { 
      title: "Big Data", 
      icon: <PieChart />, 
      link: "https://github.com/sindresorhus/awesome#big-data", 
      desc: "Processamento massivo e análise de dados.",
      longDesc: "Ferramentas como Hadoop, Spark e ecossistemas para lidar com volumes de dados em escala petabyte."
    },
    { 
      title: "Teoria", 
      icon: <Library />, 
      link: "https://github.com/sindresorhus/awesome#theory", 
      desc: "Lógica formal e tipos computacionais.",
      longDesc: "Mergulhe na teoria das categorias, tipos e lógica matemática aplicada à computação."
    },
    { 
      title: "Livros", 
      icon: <Book />, 
      link: "https://github.com/sindresorhus/awesome#books", 
      desc: "As bíblias do desenvolvimento.",
      longDesc: "Uma lista curada de livros essenciais, muitos deles gratuitos, que cobrem desde Clean Code até Design Patterns."
    },
    { 
      title: "Editores", 
      icon: <PenTool />, 
      link: "https://github.com/sindresorhus/awesome#editors", 
      desc: "Maximize sua produtividade no código.",
      longDesc: "Configurações e plugins para VS Code, Vim, Emacs e as melhores IDEs do mercado para acelerar seu fluxo."
    },
    { 
      title: "Jogos", 
      icon: <Gamepad2 />, 
      link: "https://github.com/sindresorhus/awesome#gaming", 
      desc: "Engines e design de games.",
      longDesc: "Recursos para Unity, Unreal, Godot e desenvolvimento de jogos indie, incluindo assets e tutoriais de game design."
    },
    { 
      title: "Ambiente de Dev", 
      icon: <Settings />, 
      link: "https://github.com/sindresorhus/awesome#development-environment", 
      desc: "Docker, Dotfiles e automação.",
      longDesc: "Aprenda a configurar sua máquina como um profissional. Automação de shell, containers e fluxos de trabalho produtivos."
    },
    { 
      title: "Entretenimento", 
      icon: <Activity />, 
      link: "https://github.com/sindresorhus/awesome#entertainment", 
      desc: "O lado criativo da tecnologia.",
      longDesc: "Podcasts de TI, música para focar, vlogs e comunidades que tornam a jornada do desenvolvedor mais leve."
    },
    { 
      title: "Bancos de Dados", 
      icon: <Database />, 
      link: "https://github.com/sindresorhus/awesome#databases", 
      desc: "SQL, NoSQL e persistência moderna.",
      longDesc: "Tudo sobre PostgreSQL, MongoDB, Redis e novas tendências como bancos de dados vetoriais e distribuídos."
    },
    { 
      title: "Mídia", 
      icon: <Tv />, 
      link: "https://github.com/sindresorhus/awesome#media", 
      desc: "Processamento de vídeo e áudio.",
      longDesc: "FFmpeg, processamento de imagem, streaming e ferramentas de edição digital via código."
    },
    { 
      title: "Aprender", 
      icon: <GraduationCap />, 
      link: "https://github.com/sindresorhus/awesome#learn", 
      desc: "Plataformas de educação e cursos.",
      longDesc: "Roadmaps de estudo, plataformas de cursos gratuitos e comunidades focadas no aprendizado contínuo."
    },
    { 
      title: "Segurança", 
      icon: <ShieldCheck />, 
      link: "https://github.com/sindresorhus/awesome#security", 
      desc: "Cybersecurity e defesa digital.",
      longDesc: "Pentesting, criptografia, segurança em aplicações web e como proteger seus sistemas contra vulnerabilidades comuns."
    },
    { 
      title: "CMS", 
      icon: <Box />, 
      link: "https://github.com/sindresorhus/awesome#content-management-systems", 
      desc: "WordPress, Strapi e Headless CMS.",
      longDesc: "Sistemas de gerenciamento de conteúdo modernos para blogs, e-commerces e sites corporativos."
    },
    { 
      title: "Hardware", 
      icon: <Microchip />, 
      link: "https://github.com/sindresorhus/awesome#hardware", 
      desc: "Arduino, IoT e eletrônica.",
      longDesc: "A ponte entre código e o mundo físico. Sensores, placas de desenvolvimento e robótica para iniciantes."
    },
    { 
      title: "Negócios", 
      icon: <Briefcase />, 
      link: "https://github.com/sindresorhus/awesome#business", 
      desc: "Startups e gestão de produtos.",
      longDesc: "Como gerenciar times, entender o modelo de negócio por trás do software e dicas de empreendedorismo tech."
    },
    { 
      title: "Trabalhar", 
      icon: <TrendingUp />, 
      link: "https://github.com/sindresorhus/awesome#work", 
      desc: "Carreira, currículos e entrevistas.",
      longDesc: "Recursos para se preparar para entrevistas técnicas nas Big Techs, dicas de currículo e sites de vagas remotas."
    },
    { 
      title: "Redes", 
      icon: <Users />, 
      link: "https://github.com/sindresorhus/awesome#networking", 
      desc: "Comunidades e fóruns globais.",
      longDesc: "Onde os desenvolvedores se encontram: Slack, Discord, Reddit e conferências mundiais."
    },
    { 
      title: "Descentralizados", 
      icon: <Globe2 />, 
      link: "https://github.com/sindresorhus/awesome#decentralized-systems", 
      desc: "Web3, Blockchain e P2P.",
      longDesc: "O futuro da internet: contratos inteligentes, protocolos descentralizados e arquiteturas resilientes."
    },
    { 
      title: "Saúde & Sociais", 
      icon: <HeartPulse />, 
      link: "https://github.com/sindresorhus/awesome#health-and-social-science", 
      desc: "Tecnologia com impacto humano.",
      longDesc: "Softwares para saúde, bioinformática e projetos open-source que resolvem problemas sociais."
    },
    { 
      title: "Eventos", 
      icon: <CalendarDays />, 
      link: "https://github.com/sindresorhus/awesome#events", 
      desc: "Hackathons e conferências.",
      longDesc: "Calendário global de eventos de tecnologia, maratonas de programação e encontros locais."
    },
    { 
      title: "Testando", 
      icon: <FlaskConical />, 
      link: "https://github.com/sindresorhus/awesome#testing", 
      desc: "Unitários, E2E e QA.",
      longDesc: "Garantia de qualidade de software: Jest, Cypress, Selenium e técnicas de TDD/BDD."
    },
    { 
      title: "Variado", 
      icon: <Puzzle />, 
      link: "https://github.com/sindresorhus/awesome#miscellaneous", 
      desc: "Pérolas raras do mundo open source.",
      longDesc: "Repositórios que não se encaixam em uma categoria específica, mas são úteis para qualquer dev."
    },
    { 
      title: "Relacionado", 
      icon: <Link2 />, 
      link: "https://github.com/sindresorhus/awesome#related", 
      desc: "Outras listas 'Awesome'.",
      longDesc: "Extensões da curadoria original e diretórios focados em nichos específicos de tecnologia."
    }
  ];

  const CoordinatorTip = ({ message }: { message: string }) => (
    <div className="bg-estacio-navy p-10 md:p-14 rounded-[3rem] text-white flex flex-col lg:flex-row items-center gap-10 shadow-2xl relative overflow-hidden mt-20">
      <div className="absolute top-0 right-0 w-64 h-64 bg-estacio-cyan/10 rounded-full blur-3xl"></div>
      <div className="lg:w-1/4 text-center shrink-0">
        <div className="w-20 h-20 bg-white/10 rounded-full mx-auto flex items-center justify-center mb-4 border border-white/20">
          <Users size={40} className="text-estacio-cyan" />
        </div>
        <h4 className="font-black italic text-base leading-tight">Dica do Coordenador</h4>
        <p className="text-[9px] uppercase font-bold text-estacio-cyan mt-1">Prof. Antônio Cândido</p>
      </div>
      <div className="lg:w-3/4">
        <p className="text-lg md:text-xl italic font-medium leading-relaxed">"{message}"</p>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (view) {
      case ViewType.PROFISSIONAIS:
        return (
          <div className="space-y-16">
            <div className="bg-white p-10 md:p-16 rounded-[4rem] border border-gray-100 shadow-sm leading-relaxed">
              <h3 className="text-2xl sm:text-3xl font-black text-estacio-navy italic mb-8 uppercase">A área de TI vale a pena?</h3>
              <p className="text-gray-600 text-lg mb-8">
                Vivemos na era da transformação digital. Atuar em TI hoje não é apenas sobre "consertar computadores", é sobre criar o futuro. Com salários acima da média e flexibilidade global, é uma das carreiras mais resilientes do mundo.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
                  <h4 className="font-black text-estacio-navy mb-4 flex items-center gap-2 italic"><Zap size={20} className="text-yellow-500" /> Os Desafios</h4>
                  <ul className="space-y-3 text-sm text-gray-500 font-medium">
                    <li>• Aprendizado contínuo (Obsolescência rápida)</li>
                    <li>• Gestão de expectativas e prazos</li>
                    <li>• Resolução de problemas complexos sob pressão</li>
                  </ul>
                </div>
                <div className="p-8 bg-green-50 rounded-3xl border border-green-100">
                  <h4 className="font-black text-estacio-navy mb-4 flex items-center gap-2 italic"><Star size={20} className="text-green-500" /> As Recompensas</h4>
                  <ul className="space-y-3 text-sm text-gray-500 font-medium">
                    <li>• Alta demanda global (Carreira sem fronteiras)</li>
                    <li>• Salários competitivos e benefícios</li>
                    <li>• Impacto real na vida de milhões de pessoas</li>
                  </ul>
                </div>
              </div>
              <div className="bg-estacio-navy/5 p-8 rounded-3xl border border-estacio-navy/10 italic text-gray-700">
                <strong>Caso de Sucesso:</strong> Alunos da Estácio hoje lideram times de engenharia em unicórnios como iFood, Nubank e até gigantes como Google e Amazon. O limite é o seu esforço.
              </div>
            </div>
            <CoordinatorTip message="A área de TI exige curiosidade eterna. Não se contente com o 'como', busque o 'porquê'. O mercado valoriza solucionadores de problemas, não apenas digitadores de código." />
          </div>
        );

      case ViewType.APP_EXEMPLO:
        return (
          <div className="space-y-16 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {awesomeCategories.map((cat, i) => (
                <button 
                  key={i} 
                  onClick={() => setSelectedCategory(cat)}
                  className="bg-white p-6 sm:p-8 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col h-full text-left overflow-hidden"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-estacio-navy group-hover:bg-estacio-cyan group-hover:text-white transition-all shrink-0">
                      {React.cloneElement(cat.icon as React.ReactElement, { size: 22 })}
                    </div>
                    <h4 className="font-black text-estacio-navy italic group-hover:text-estacio-cyan transition-colors text-base sm:text-lg line-clamp-1">{cat.title}</h4>
                  </div>
                  <p className="text-gray-400 text-[10px] sm:text-xs font-medium mb-8 flex-grow line-clamp-2">{cat.desc}</p>
                  <div className="mt-auto flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-estacio-cyan">
                    Ver Detalhes <ArrowRight size={14} />
                  </div>
                </button>
              ))}
            </div>

            {selectedCategory && (
              <div className="fixed inset-0 z-[100] bg-estacio-navy/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
                <div className="bg-white rounded-[2.5rem] sm:rounded-[3.4rem] max-w-2xl w-full p-8 sm:p-12 relative shadow-2xl overflow-y-auto max-h-[90vh] animate-in zoom-in-95 duration-300">
                  <button 
                    onClick={() => setSelectedCategory(null)}
                    className="absolute top-6 right-6 sm:top-10 sm:right-10 text-gray-400 hover:text-estacio-navy transition-colors p-2"
                  >
                    <X size={28} />
                  </button>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8 sm:mb-12">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-estacio-navy rounded-[1.8rem] flex items-center justify-center text-estacio-cyan shadow-lg shrink-0">
                      {React.cloneElement(selectedCategory.icon as React.ReactElement, { size: 36 })}
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-estacio-navy italic uppercase leading-tight text-balance break-words">{selectedCategory.title}</h3>
                      <p className="text-estacio-cyan font-bold uppercase text-[9px] sm:text-[10px] tracking-widest mt-2">Recurso de Desenvolvimento</p>
                    </div>
                  </div>

                  <div className="space-y-6 sm:space-y-8 mb-10 sm:mb-14">
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-medium">
                      {selectedCategory.longDesc}
                    </p>
                    <div className="p-6 sm:p-10 bg-gray-50 rounded-[2rem] border border-gray-100">
                      <h5 className="font-black text-estacio-navy text-[10px] sm:text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Sparkles size={16} className="text-estacio-cyan" /> Por que explorar?
                      </h5>
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
                        Esta categoria faz parte da "Awesome List", a curadoria definitiva de tecnologia no GitHub. Dominar estes recursos coloca você à frente no mercado de trabalho.
                      </p>
                    </div>
                  </div>

                  <a 
                    href={selectedCategory.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-5 sm:py-7 bg-estacio-navy text-white rounded-2xl font-black uppercase tracking-widest text-[10px] sm:text-xs flex items-center justify-center gap-3 hover:bg-estacio-cyan transition-all shadow-xl shadow-estacio-navy/20 active:scale-95"
                  >
                    Acessar Repositório Oficial <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            )}

            <CoordinatorTip message="Não tente aprender tudo de uma vez. O repositório 'Awesome' é uma biblioteca: use quando precisar. Foque em dominar os fundamentos antes de pular para o framework da moda." />
          </div>
        );

      case ViewType.ESTAGIOS:
        return (
          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="bg-white p-12 rounded-[4rem] border border-gray-100 shadow-sm flex flex-col h-full">
                <h3 className="text-2xl sm:text-3xl font-black text-estacio-navy italic mb-8 uppercase flex items-center gap-3"><Globe size={28} className="text-blue-500" /> Brasil</h3>
                <div className="space-y-6 flex-grow">
                  <a href="https://www.encontresuavaga.com.br/" target="_blank" className="block p-8 bg-gray-50 rounded-3xl hover:bg-estacio-cyan/10 transition-colors group">
                    <h4 className="font-black text-estacio-navy mb-2 flex justify-between items-center">Encontre sua Vaga <ExternalLink size={16} className="opacity-40 group-hover:opacity-100" /></h4>
                    <p className="text-xs text-gray-500 font-medium">Portal oficial Estácio para estágios e vagas diretas.</p>
                  </a>
                  <a href="https://portal.ciee.org.br/" target="_blank" className="block p-8 bg-gray-50 rounded-3xl hover:bg-estacio-cyan/10 transition-colors group">
                    <h4 className="font-black text-estacio-navy mb-2 flex justify-between items-center">CIEE <ExternalLink size={16} className="opacity-40 group-hover:opacity-100" /></h4>
                    <p className="text-xs text-gray-500 font-medium">O maior integrador de estágios do Brasil.</p>
                  </a>
                </div>
              </div>
              <div className="bg-estacio-navy p-12 rounded-[4rem] text-white flex flex-col h-full relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
                <h3 className="text-2xl sm:text-3xl font-black italic mb-8 uppercase flex items-center gap-3"><Plane size={28} className="text-estacio-cyan" /> Exterior</h3>
                <p className="text-blue-100/60 mb-10 text-lg leading-relaxed font-medium">Trabalhar para empresas dos EUA ou Europa do Brasil é a realidade de muitos devs. Ganhe em moeda forte e viva no Brasil.</p>
                <a href="https://remote.com/" target="_blank" className="mt-auto block p-8 bg-white/5 rounded-3xl hover:bg-white/10 border border-white/10 transition-colors group">
                  <h4 className="font-black mb-2 flex justify-between items-center">Remote.com <ExternalLink size={16} className="opacity-40 group-hover:opacity-100" /></h4>
                  <p className="text-xs text-blue-200/50 font-medium">Vagas globais 100% remotas para engenheiros de software.</p>
                </a>
              </div>
            </div>
            <CoordinatorTip message="O estágio é o momento de errar barato. Busque empresas que tenham mentoria. O valor do seu primeiro estágio não está no salário, mas no quanto você vai aprender." />
          </div>
        );

      case ViewType.CONCURSOS:
        return (
          <div className="space-y-16">
            <div className="bg-white p-12 rounded-[4rem] border border-gray-100 shadow-sm">
              <h3 className="text-2xl sm:text-3xl font-black text-estacio-navy italic mb-8 uppercase flex items-center gap-3"><Medal size={28} className="text-purple-500" /> Carreira Pública</h3>
              <p className="text-gray-600 mb-10 text-lg">Estabilidade e projetos de impacto nacional. Órgãos como SERPRO, DATAPREV e Bancos Públicos buscam talentos constantemente.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="https://www.pciconcursos.com.br/" target="_blank" className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl hover:bg-purple-50 transition-colors group">
                  <span className="font-black text-estacio-navy italic">PCI Concursos</span>
                  <ExternalLink size={16} className="text-purple-500 opacity-40 group-hover:opacity-100" />
                </a>
                <a href="https://folhadirigida.com.br/" target="_blank" className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl hover:bg-purple-50 transition-colors group">
                  <span className="font-black text-estacio-navy italic">Folha Dirigida</span>
                  <ExternalLink size={16} className="text-purple-500 opacity-40 group-hover:opacity-100" />
                </a>
              </div>
            </div>
            <CoordinatorTip message="Estudar para concurso exige disciplina. Foque em Português e Raciocínio Lógico tanto quanto em TI. Muitos bons técnicos reprovam por negligenciar as matérias base." />
          </div>
        );

      case ViewType.EVENTOS:
        return (
          <div className="space-y-16">
            <div className="bg-white p-12 rounded-[4rem] border border-gray-100 shadow-sm">
              <h3 className="text-2xl sm:text-3xl font-black text-estacio-navy italic mb-10 uppercase flex items-center gap-3"><CalendarDays size={28} className="text-pink-500" /> Próximos Eventos</h3>
              <div className="space-y-8">
                {[
                  { name: "Web Summit Rio", date: "Abril 2024", type: "Híbrido", desc: "O maior evento de tecnologia do mundo no Rio de Janeiro.", url: "https://rio.websummit.com/" },
                  { name: "Google I/O", date: "Maio 2024", type: "Remoto", desc: "Novidades do ecossistema Google e Android.", url: "https://io.google/" },
                  { name: "AWS Re:Invent", date: "Dezembro 2024", type: "Remoto/Presencial", desc: "O encontro definitivo para Cloud Computing.", url: "https://reinvent.awsevents.com/" }
                ].map((ev, i) => (
                  <div key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 bg-gray-50 rounded-3xl border border-transparent hover:border-pink-200 transition-all">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-pink-500 text-white text-[9px] font-black uppercase rounded-full">{ev.type}</span>
                        <h4 className="font-black text-estacio-navy italic text-xl">{ev.name}</h4>
                      </div>
                      <p className="text-gray-500 text-xs font-medium mb-1">{ev.desc}</p>
                      <p className="text-pink-600 text-xs font-bold uppercase tracking-widest">{ev.date}</p>
                    </div>
                    <a href={ev.url} target="_blank" className="px-8 py-3 bg-estacio-navy text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-estacio-cyan transition-colors text-center">Inscrição</a>
                  </div>
                ))}
              </div>
            </div>
            <CoordinatorTip message="Eventos são os melhores lugares para fazer networking. Não vá apenas para assistir palestras, vá para conversar com pessoas. Um contato pode valer mais que um diploma." />
          </div>
        );

      case ViewType.PROJETOS:
        return (
          <div className="space-y-16">
            <div className="bg-white p-24 rounded-[4rem] border-4 border-dashed border-gray-100 text-center">
              <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-8">
                <Users size={48} className="text-orange-500" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-estacio-navy italic mb-4 uppercase">Em Construção</h3>
              <p className="text-gray-400 font-medium max-w-md mx-auto">Estamos preparando um espaço incrível para que você possa encontrar parceiros de projetos e trocar experiências reais de código.</p>
            </div>
            <CoordinatorTip message="Grandes sistemas nunca são construídos sozinhos. Aprenda a trabalhar em equipe e a usar Git de forma profissional. O código é secundário à colaboração." />
          </div>
        );

      case ViewType.COORDENADOR:
        return (
          <div className="space-y-16">
            <div className="bg-white p-12 md:p-16 rounded-[4rem] border border-gray-100 shadow-xl text-center">
              <div className="w-40 h-40 bg-gray-50 rounded-full mx-auto flex items-center justify-center mb-10 border-4 border-white shadow-inner shrink-0">
                <Users size={80} className="text-estacio-navy" />
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-estacio-navy mb-4 italic leading-tight">Prof. Antônio Cândido de O. Filho</h3>
              <p className="text-gray-500 font-bold uppercase text-[10px] sm:text-xs tracking-widest mb-12">Coordenador ADS & Ciência da Computação</p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-16">
                <a href="mailto:antonio.filho@estacio.br" className="flex items-center gap-3 px-8 py-4 bg-gray-50 rounded-2xl hover:bg-estacio-cyan/10 border border-gray-100 transition-all group">
                  <Mail size={20} className="text-estacio-navy group-hover:text-estacio-cyan" />
                  <span className="text-[10px] sm:text-xs font-black text-estacio-navy">antonio.filho@estacio.br</span>
                </a>
                <a href="https://www.linkedin.com/in/antonio-candido-oliveira-filho-b2028336" target="_blank" className="flex items-center gap-3 px-8 py-4 bg-gray-50 rounded-2xl hover:bg-blue-50 border border-gray-100 transition-all group">
                  <Linkedin size={20} className="text-blue-600" />
                  <span className="text-[10px] sm:text-xs font-black text-estacio-navy">LinkedIn</span>
                </a>
                <a href="https://www.facebook.com/candidorj" target="_blank" className="flex items-center gap-3 px-8 py-4 bg-gray-50 rounded-2xl hover:bg-blue-100 border border-gray-100 transition-all group">
                  <Facebook size={20} className="text-blue-800" />
                  <span className="text-[10px] sm:text-xs font-black text-estacio-navy">Facebook</span>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="p-8 sm:p-10 bg-gray-50 rounded-[2.5rem] sm:rounded-[3rem] border border-gray-100">
                  <h4 className="font-black text-estacio-navy uppercase text-[9px] sm:text-[10px] tracking-widest mb-8">TOM JOBIM - BARRA</h4>
                  <ul className="space-y-6">
                    <li className="flex items-start sm:items-center gap-4"><div className="w-2 h-2 rounded-full bg-estacio-cyan shrink-0 mt-1.5 sm:mt-0"></div><span className="text-xs sm:text-sm font-medium leading-relaxed"><strong>Presencial:</strong> Quarta, 09h às 19h</span></li>
                    <li className="flex items-start sm:items-center gap-4"><div className="w-2 h-2 rounded-full bg-blue-400 shrink-0 mt-1.5 sm:mt-0"></div><span className="text-xs sm:text-sm font-medium leading-relaxed"><strong>Remoto (Teams):</strong> Sexta, 09h às 12h</span></li>
                  </ul>
                </div>
                <div className="p-8 sm:p-10 bg-gray-50 rounded-[2.5rem] sm:rounded-[3rem] border border-gray-100">
                  <h4 className="font-black text-estacio-navy uppercase text-[9px] sm:text-[10px] tracking-widest mb-8">R9 - TAQUARA</h4>
                  <ul className="space-y-6">
                    <li className="flex items-start sm:items-center gap-4"><div className="w-2 h-2 rounded-full bg-estacio-cyan shrink-0 mt-1.5 sm:mt-0"></div><span className="text-xs sm:text-sm font-medium leading-relaxed"><strong>Presencial:</strong> Quinta, 09h às 19h</span></li>
                    <li className="flex items-start sm:items-center gap-4"><div className="w-2 h-2 rounded-full bg-blue-400 shrink-0 mt-1.5 sm:mt-0"></div><span className="text-xs sm:text-sm font-medium leading-relaxed"><strong>Remoto (Teams):</strong> Sexta, 13h às 16h</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-estacio-navy p-12 sm:p-16 rounded-[3.5rem] sm:rounded-[4rem] text-white text-center shadow-2xl">
              <Sparkles size={40} className="text-estacio-cyan mx-auto mb-8" />
              <p className="text-xl sm:text-2xl italic font-medium max-w-2xl mx-auto leading-relaxed">"Meu papel é garantir que sua jornada acadêmica seja o trampolim para o seu sucesso profissional. Minha porta está sempre aberta."</p>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-gray-50 p-24 rounded-[4rem] text-center border-4 border-dashed border-gray-200">
            <p className="text-xl text-gray-400 font-black italic">Seção em Construção.</p>
          </div>
        );
    }
  };

  return (
    <div className="fade-in container mx-auto px-6 py-12">
      <button 
        onClick={onBack}
        className="group flex items-center gap-4 text-gray-400 font-black uppercase tracking-widest text-[9px] sm:text-[11px] hover:text-estacio-navy mb-12 sm:mb-16 transition-all"
      >
        <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-estacio-navy group-hover:bg-estacio-navy group-hover:text-white transition-all">
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 rotate-180" />
        </span>
        Voltar para a Home
      </button>

      <div className="flex flex-col md:flex-row md:items-center gap-8 sm:gap-10 mb-16 sm:mb-20 border-l-[8px] sm:border-l-[12px] border-estacio-cyan pl-6 sm:pl-10">
        <div className="p-6 sm:p-8 bg-white shadow-2xl shadow-gray-200 rounded-[2rem] sm:rounded-[2.5rem] flex-shrink-0 w-max">
          <div className={`${cardInfo?.color || 'text-estacio-navy'}`}>
            {getIcon(cardInfo?.icon || 'Info', 56)}
          </div>
        </div>
        <div className="overflow-hidden">
          <h2 className="text-2xl sm:text-5xl md:text-7xl font-black text-estacio-navy tracking-tighter mb-3 sm:mb-4 leading-[1.1] italic uppercase break-words">
            {cardInfo?.title}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-medium max-w-3xl leading-relaxed line-clamp-2 sm:line-clamp-none">
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
