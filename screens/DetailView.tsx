import React from 'react';
import { ViewType } from '../types';
import { CARDS, getIcon } from '../constants';
import { 
  ExternalLink, 
  ChevronRight, 
  Mail, 
  Linkedin, 
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
  Zap,
  Star,
  Sparkles
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
}

const DetailView: React.FC<DetailViewProps> = ({ view, onBack }) => {
  const cardInfo = CARDS.find(c => c.id === view);

  const awesomeCategories: AwesomeCategory[] = [
    { title: "Plataformas", icon: <Smartphone />, link: "https://github.com/sindresorhus/awesome#platforms", desc: "iOS, Android, Cloud e ecossistemas OS." },
    { title: "Linguagens", icon: <Code2 />, link: "https://github.com/sindresorhus/awesome#programming-languages", desc: "Os pilares da lógica moderna." },
    { title: "Front-End", icon: <Layout />, link: "https://github.com/sindresorhus/awesome#front-end-development", desc: "Interfaces ricas e UX de alta performance." },
    { title: "Back-End", icon: <Terminal />, link: "https://github.com/sindresorhus/awesome#back-end-development", desc: "Escalabilidade e lógica de servidor." },
    { title: "Ciência da Comp.", icon: <Cpu />, link: "https://github.com/sindresorhus/awesome#computer-science", desc: "Fundamentos e algoritmos clássicos." },
    { title: "Big Data", icon: <PieChart />, link: "https://github.com/sindresorhus/awesome#big-data", desc: "Processamento massivo e análise de dados." },
    { title: "Teoria", icon: <Library />, link: "https://github.com/sindresorhus/awesome#theory", desc: "Lógica formal e tipos computacionais." },
    { title: "Livros", icon: <Book />, link: "https://github.com/sindresorhus/awesome#books", desc: "As bíblias do desenvolvimento." },
    { title: "Editores", icon: <PenTool />, link: "https://github.com/sindresorhus/awesome#editors", desc: "Maximize sua produtividade no código." },
    { title: "Jogos", icon: <Gamepad2 />, link: "https://github.com/sindresorhus/awesome#gaming", desc: "Engines e design de games." },
    { title: "Ambiente de Dev", icon: <Settings />, link: "https://github.com/sindresorhus/awesome#development-environment", desc: "Docker, Dotfiles e automação." },
    { title: "Entretenimento", icon: <Activity />, link: "https://github.com/sindresorhus/awesome#entertainment", desc: "O lado criativo da tecnologia." },
    { title: "Bancos de Dados", icon: <Database />, link: "https://github.com/sindresorhus/awesome#databases", desc: "SQL, NoSQL e persistência moderna." },
    { title: "Mídia", icon: <Tv />, link: "https://github.com/sindresorhus/awesome#media", desc: "Processamento de vídeo e áudio." },
    { title: "Aprender", icon: <GraduationCap />, link: "https://github.com/sindresorhus/awesome#learn", desc: "Plataformas de educação e cursos." },
    { title: "Segurança", icon: <ShieldCheck />, link: "https://github.com/sindresorhus/awesome#security", desc: "Cybersecurity e defesa digital." },
    { title: "CMS", icon: <Box />, link: "https://github.com/sindresorhus/awesome#content-management-systems", desc: "WordPress, Strapi e Headless CMS." },
    { title: "Hardware", icon: <Microchip />, link: "https://github.com/sindresorhus/awesome#hardware", desc: "Arduino, IoT e eletrônica." },
    { title: "Negócios", icon: <Briefcase />, link: "https://github.com/sindresorhus/awesome#business", desc: "Startups e gestão de produtos." },
    { title: "Trabalhar", icon: <TrendingUp />, link: "https://github.com/sindresorhus/awesome#work", desc: "Carreira, currículos e entrevistas." },
    { title: "Descentralizados", icon: <Globe2 />, link: "https://github.com/sindresorhus/awesome#decentralized-systems", desc: "Web3, Blockchain e P2P." },
    { title: "Saúde & Sociais", icon: <HeartPulse />, link: "https://github.com/sindresorhus/awesome#health-and-social-science", desc: "Tecnologia com impacto humano." },
    { title: "Eventos", icon: <CalendarDays />, link: "https://github.com/sindresorhus/awesome#events", desc: "Hackathons e conferências." },
    { title: "Testando", icon: <FlaskConical />, link: "https://github.com/sindresorhus/awesome#testing", desc: "Unitários, E2E e QA." },
    { title: "Variado", icon: <Puzzle />, link: "https://github.com/sindresorhus/awesome#miscellaneous", desc: "Pérolas raras do mundo open source." },
    { title: "Relacionado", icon: <Link2 />, link: "https://github.com/sindresorhus/awesome#related", desc: "Outras listas 'Awesome'." }
  ];

  const CoordinatorTip = ({ message }: { message: string }) => (
    <div className="bg-estacio-navy p-10 md:p-14 rounded-[3rem] text-white flex flex-col lg:flex-row items-center gap-10 shadow-2xl relative overflow-hidden mt-20">
      <div className="absolute top-0 right-0 w-64 h-64 bg-estacio-cyan/10 rounded-full blur-3xl"></div>
      <div className="lg:w-1/4 text-center shrink-0">
        <div className="w-24 h-24 bg-white/10 rounded-full mx-auto flex items-center justify-center mb-4 border border-white/20 overflow-hidden shadow-lg">
          <img 
            src="./candido.png" 
            alt="Prof. Antônio Cândido" 
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Antonio+Candido&background=003399&color=fff';
            }}
          />
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
            </div>
            <CoordinatorTip message="A área de TI exige curiosidade eterna. Não se contente com o 'como', busque o 'porquê'. O mercado valoriza solucionadores de problemas, não apenas digitadores de código." />
          </div>
        );

      case ViewType.APP_EXEMPLO:
        return (
          <div className="space-y-16 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {awesomeCategories.map((cat, i) => (
                <a 
                  key={i} 
                  href={cat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-6 sm:p-8 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col h-full text-left overflow-hidden"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-estacio-navy group-hover:bg-estacio-cyan group-hover:text-white transition-all shrink-0">
                      {React.isValidElement(cat.icon) ? React.cloneElement(cat.icon as React.ReactElement<any>, { size: 22 }) : cat.icon}
                    </div>
                    <h4 className="font-black text-estacio-navy italic group-hover:text-estacio-cyan transition-colors text-base sm:text-lg line-clamp-1">{cat.title}</h4>
                  </div>
                  <p className="text-gray-400 text-[10px] sm:text-xs font-medium mb-8 flex-grow line-clamp-2">{cat.desc}</p>
                  <div className="mt-auto flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-estacio-cyan">
                    Acessar Recurso <ExternalLink size={14} />
                  </div>
                </a>
              ))}
            </div>
            <CoordinatorTip message="Não tente aprender tudo de uma vez. O repositório 'Awesome' é uma biblioteca: use quando precisar. Foque em dominar os fundamentos antes de pular para o framework da moda." />
          </div>
        );

      case ViewType.COORDENADOR:
        return (
          <div className="space-y-16">
            <div className="bg-white p-12 md:p-24 rounded-[4rem] border border-gray-100 shadow-xl flex flex-col items-center">
              <div className="relative mb-12 group">
                <div className="absolute inset-0 bg-estacio-cyan rounded-full blur-2xl opacity-20"></div>
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-gradient-to-br from-estacio-navy to-estacio-cyan flex items-center justify-center">
                  <img 
                    src="./candido.png" 
                    alt="Prof. Antônio Cândido de O. Filho" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Antonio+Candido&size=256&background=003399&color=fff';
                    }}
                  />
                </div>
              </div>

              <div className="text-center mb-16">
                <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black text-estacio-navy italic tracking-tight leading-none mb-6">
                  Prof. Antônio Cândido de O. Filho
                </h3>
                <p className="text-gray-400 font-bold uppercase text-xs sm:text-sm lg:text-base tracking-[0.25em]">
                  Coordenador ADS & Ciência da Computação
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 mb-20">
                <a href="mailto:antonio.filho@estacio.br" className="flex items-center gap-3 px-8 py-5 bg-gray-50 rounded-2xl hover:bg-estacio-cyan/10 border border-gray-100 transition-all group">
                  <Mail size={22} className="text-estacio-navy group-hover:text-estacio-cyan" />
                  <span className="text-xs sm:text-sm font-black text-estacio-navy">antonio.filho@estacio.br</span>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-5 bg-gray-50 rounded-2xl hover:bg-blue-50 border border-gray-100 transition-all group">
                  <Linkedin size={22} className="text-blue-600" />
                  <span className="text-xs sm:text-sm font-black text-estacio-navy">LinkedIn</span>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl text-left">
                <div className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100 hover:shadow-lg transition-shadow">
                  <h4 className="font-black text-estacio-navy uppercase text-[10px] tracking-widest mb-10 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-estacio-cyan rounded-full"></div>
                    TOM JOBIM - BARRA
                  </h4>
                  <ul className="space-y-6">
                    <li className="flex items-center gap-5 text-gray-600">
                      <strong>Presencial:</strong> Quarta, 09h às 19h
                    </li>
                    <li className="flex items-center gap-5 text-gray-600">
                      <strong>Remoto (Teams):</strong> Sexta, 09h às 12h
                    </li>
                  </ul>
                </div>
                <div className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100 hover:shadow-lg transition-shadow">
                  <h4 className="font-black text-estacio-navy uppercase text-[10px] tracking-widest mb-10 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-estacio-cyan rounded-full"></div>
                    R9 - TAQUARA
                  </h4>
                  <ul className="space-y-6">
                    <li className="flex items-center gap-5 text-gray-600">
                      <strong>Presencial:</strong> Quinta, 09h às 19h
                    </li>
                    <li className="flex items-center gap-5 text-gray-600">
                      <strong>Remoto (Teams):</strong> Sexta, 13h às 16h
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-estacio-navy p-12 sm:p-20 rounded-[4rem] text-white text-center shadow-2xl relative overflow-hidden">
              <Sparkles size={48} className="text-estacio-cyan mx-auto mb-10" />
              <p className="text-xl sm:text-3xl italic font-medium max-w-3xl mx-auto leading-relaxed relative z-10">
                "Meu papel é garantir que sua jornada acadêmica seja o trampolim para o seu sucesso profissional."
              </p>
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
        <div className="p-6 sm:p-8 bg-white shadow-2xl shadow-gray-200 rounded-[2rem] sm:rounded-[2.5rem] flex-shrink-0 w-max overflow-hidden">
          <div className={`${view === ViewType.COORDENADOR ? '' : (cardInfo?.color || 'text-estacio-navy')}`}>
            {getIcon(cardInfo?.icon || 'Info', 64)}
          </div>
        </div>
        <div className="overflow-hidden">
          <h2 className="text-2xl sm:text-5xl md:text-7xl font-black text-estacio-navy tracking-tighter mb-3 sm:mb-4 leading-[1.1] italic uppercase break-words">
            {cardInfo?.title}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-medium max-w-3xl leading-relaxed">
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