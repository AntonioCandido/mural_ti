
import React, { useState, useMemo } from 'react';
import { CoordinatorWidget } from '../constants';
import { 
  ChevronLeft, Play, Youtube, ExternalLink, Clock, Info, 
  Sparkles, Cpu, History, Code2, Monitor, Layers, Globe
} from 'lucide-react';

type VideoTopic = 'computing' | 'programming' | 'hardware';

interface RecommendedVideo {
  title: string;
  desc: string;
  duration: string;
  category: string;
  link: string;
  videoId: string;
  featured: boolean;
  topic: VideoTopic;
}

const ALL_VIDEOS: RecommendedVideo[] = [
  // TOPIC 1: HISTÓRIA DA COMPUTAÇÃO (DUBLADOS/PT-BR)
  {
    topic: 'computing',
    title: "A História da Computação (Curso em Vídeo)",
    desc: "O guia definitivo narrado por Gustavo Guanabara. Do ábaco aos computadores modernos de forma didática.",
    duration: "25 min",
    category: "Educação BR",
    link: "https://youtu.be/Of7i9Yf60mU",
    videoId: "Of7i9Yf60mU",
    featured: true
  },
  {
    topic: 'computing',
    title: "Steve Jobs: O Homem que Mudou o Mundo",
    desc: "Documentário completo dublado sobre a trajetória do fundador da Apple e a revolução do Macintosh.",
    duration: "45 min",
    category: "Documentário",
    link: "https://youtu.be/p6l3lY0yB_8",
    videoId: "p6l3lY0yB_8",
    featured: true
  },
  {
    topic: 'computing',
    title: "Piratas do Vale do Silício (Cenas Icônicas)",
    desc: "Dublado. A disputa histórica entre Bill Gates e Steve Jobs pela criação da interface gráfica.",
    duration: "15 min",
    category: "Cinema/História",
    link: "https://youtu.be/e7vW68lq_gQ",
    videoId: "e7vW68lq_gQ",
    featured: false
  },
  {
    topic: 'computing',
    title: "A Evolução dos Computadores (Manual do Mundo)",
    desc: "Iberê Thenório explica visualmente como saímos de máquinas gigantes para os smartphones.",
    duration: "12 min",
    category: "Ciência BR",
    link: "https://youtu.be/F1PAtHnO8-U",
    videoId: "F1PAtHnO8-U",
    featured: false
  },
  {
    topic: 'computing',
    title: "Alan Turing e o Enigma (Dublado)",
    desc: "A história do pai da computação e como ele quebrou códigos nazistas com a primeira máquina lógica.",
    duration: "10 min",
    category: "Pioneiros",
    link: "https://youtu.be/U6fJ849O0n8",
    videoId: "U6fJ849O0n8",
    featured: true
  },
  {
    topic: 'computing',
    title: "Como a Internet Surgiu? (Ciência Todo Dia)",
    desc: "Pedro Loos explica em português a transição da ARPANET para a rede mundial que usamos hoje.",
    duration: "14 min",
    category: "Redes",
    link: "https://youtu.be/9MIs9uL0UWA",
    videoId: "9MIs9uL0UWA",
    featured: true
  },
  {
    topic: 'computing',
    title: "Deep Blue vs Kasparov (Especial Dublado)",
    desc: "O momento em que a IBM provou que as máquinas poderiam superar a mente humana no xadrez.",
    duration: "9 min",
    category: "IA Clássica",
    link: "https://youtu.be/mRz4pA9FwNo",
    videoId: "mRz4pA9FwNo",
    featured: false
  },
  {
    topic: 'computing',
    title: "A História da Microsoft (Dublado)",
    desc: "Como um software de sistema operacional (DOS) criou o maior império da tecnologia mundial.",
    duration: "40 min",
    category: "Corporativo",
    link: "https://youtu.be/R_9O8VlU38A",
    videoId: "R_9O8VlU38A",
    featured: false
  },
  {
    topic: 'computing',
    title: "ENIAC: O Primeiro Gigante (Dublado)",
    desc: "Veja em português os detalhes técnicos da primeira máquina de calcular eletrônica de larga escala.",
    duration: "7 min",
    category: "Hardware Antigo",
    link: "https://youtu.be/M_Gf5-O25y4",
    videoId: "M_Gf5-O25y4",
    featured: true
  },
  {
    topic: 'computing',
    title: "O Surgimento do Smartphone (Dublado)",
    desc: "A história da convergência tecnológica que colocou computadores no bolso de todos.",
    duration: "11 min",
    category: "Era Mobile",
    link: "https://youtu.be/7XfB_8fKqG0",
    videoId: "7XfB_8fKqG0",
    featured: false
  },

  // TOPIC 2: HISTÓRIA DA PROGRAMAÇÃO (DUBLADOS/PT-BR)
  {
    topic: 'programming',
    title: "O que as Escolas não Ensinam (Dublado)",
    desc: "O vídeo clássico da Code.org dublado. Bill Gates e outros sobre a importância do código.",
    duration: "6 min",
    category: "Motivacional",
    link: "https://youtu.be/nKIu9yen5jk",
    videoId: "nKIu9yen5jk",
    featured: true
  },
  {
    topic: 'programming',
    title: "História das Linguagens (Curso em Vídeo)",
    desc: "A árvore genealógica das linguagens, do Fortran ao Python, explicado em português do Brasil.",
    duration: "35 min",
    category: "Acadêmico",
    link: "https://youtu.be/p6fA_vX_BwQ",
    videoId: "p6fA_vX_BwQ",
    featured: true
  },
  {
    topic: 'programming',
    title: "A História do JavaScript (Filipe Deschamps)",
    desc: "Como a linguagem da web foi criada em 10 dias e dominou o mundo. Narrativa épica em PT-BR.",
    duration: "12 min",
    category: "Web History",
    link: "https://youtu.be/U6fJ849O0n8",
    videoId: "U6fJ849O0n8",
    featured: true
  },
  {
    topic: 'programming',
    title: "O Nascimento do C e Unix (TecMundo)",
    desc: "A história de Dennis Ritchie e como o C se tornou a fundação de quase todos os sistemas modernos.",
    duration: "10 min",
    category: "Linguagens",
    link: "https://youtu.be/M8_U8p8yE8Q",
    videoId: "M8_U8p8yE8Q",
    featured: false
  },
  {
    topic: 'programming',
    title: "Ada Lovelace: A Primeira Programadora",
    desc: "Documentário dublado sobre a mulher que escreveu o primeiro algoritmo da história.",
    duration: "8 min",
    category: "Biografias",
    link: "https://youtu.be/6SjQ2l4Y6N4",
    videoId: "6SjQ2l4Y6N4",
    featured: true
  },
  {
    topic: 'programming',
    title: "A Revolução do Open Source (Dublado)",
    desc: "Como o Linux e a filosofia de código aberto mudaram a forma como o software é construído.",
    duration: "50 min",
    category: "Open Source",
    link: "https://youtu.be/o8NPllzkFhE",
    videoId: "o8NPllzkFhE",
    featured: false
  },
  {
    topic: 'programming',
    title: "Clean Code: Introdução (Código Fonte TV)",
    desc: "Os princípios de Uncle Bob explicados por especialistas brasileiros para melhorar seu código.",
    duration: "15 min",
    category: "Metodologias",
    link: "https://youtu.be/zS3S_AByOUE",
    videoId: "zS3S_AByOUE",
    featured: true
  },
  {
    topic: 'programming',
    title: "A História do Python (Ciência Todo Dia)",
    desc: "Por que o Python se tornou a linguagem oficial da Ciência de Dados e IA. Em português.",
    duration: "13 min",
    category: "Linguagens",
    link: "https://youtu.be/8mSgR_U_w7E",
    videoId: "8mSgR_U_w7E",
    featured: false
  },
  {
    topic: 'programming',
    title: "História da Inteligência Artificial (Dublado)",
    desc: "Dos primeiros algoritmos neurais até o GPT. A evolução da programação que simula a mente.",
    duration: "18 min",
    category: "IA",
    link: "https://youtu.be/NJarxpYyoFI",
    videoId: "NJarxpYyoFI",
    featured: false
  },
  {
    topic: 'programming',
    title: "Por dentro da Programação de Jogos (Dublado)",
    desc: "Como os engines e a lógica de programação criam mundos virtuais complexos.",
    duration: "12 min",
    category: "Games",
    link: "https://youtu.be/X6XnO_f7M-E",
    videoId: "X6XnO_f7M-E",
    featured: true
  },

  // TOPIC 3: COMO HARDWARE É FEITO (DUBLADOS/PT-BR)
  {
    topic: 'hardware',
    title: "Como é Feito um Processador (Manual do Mundo)",
    desc: "Iberê mostra o processo de fabricação desde o wafer de silício até o chip final.",
    duration: "15 min",
    category: "Fábrica BR",
    link: "https://youtu.be/2eW683UrS_o",
    videoId: "2eW683UrS_o",
    featured: true
  },
  {
    topic: 'hardware',
    title: "A Máquina de Litografia EUV (Dublado)",
    desc: "Entenda em português a tecnologia da ASML que permite criar chips de 3 nanômetros.",
    duration: "11 min",
    category: "Alta Tecnologia",
    link: "https://youtu.be/f0gMdGrVteI",
    videoId: "f0gMdGrVteI",
    featured: true
  },
  {
    topic: 'hardware',
    title: "Como as Placas de Vídeo são Feitas (Dublado)",
    desc: "Tour dublado por uma linha de montagem de GPUs de alta performance.",
    duration: "9 min",
    category: "Componentes",
    link: "https://youtu.be/YpC8G_8YyD4",
    videoId: "YpC8G_8YyD4",
    featured: true
  },
  {
    topic: 'hardware',
    title: "Fábrica de Memória RAM (TecMundo)",
    desc: "Visita à fábrica da Kingston/Micron explicando como os pentes de memória são montados.",
    duration: "8 min",
    category: "Manufatura",
    link: "https://youtu.be/fU9H_W3mP_U",
    videoId: "fU9H_W3mP_U",
    featured: false
  },
  {
    topic: 'hardware',
    title: "Como é Feito um Hard Drive (Discovery Dublado)",
    desc: "O processo mecânico de precisão absoluta na fabricação dos pratos magnéticos de um HDD.",
    duration: "10 min",
    category: "Storage",
    link: "https://youtu.be/3icS_m0M494",
    videoId: "3icS_m0M494",
    featured: false
  },
  {
    topic: 'hardware',
    title: "Fabricação de Placas de Circuito (PCB)",
    desc: "Dublado. Como as camadas de cobre são corroídas para formar as trilhas eletrônicas.",
    duration: "12 min",
    category: "Eletrônica",
    link: "https://youtu.be/4asfG69V64M",
    videoId: "4asfG69V64M",
    featured: false
  },
  {
    topic: 'hardware',
    title: "TSMC: O Coração dos Chips (Dublado)",
    desc: "Documentário dublado sobre a fábrica em Taiwan que produz quase todos os chips do mundo.",
    duration: "14 min",
    category: "Semicondutores",
    link: "https://youtu.be/p6v6zY_H6Qk",
    videoId: "p6v6zY_H6Qk",
    featured: true
  },
  {
    topic: 'hardware',
    title: "Como é Feita a Fibra Óptica (Manual do Mundo)",
    desc: "A tecnologia que sustenta a internet mundial sendo fabricada no Brasil.",
    duration: "13 min",
    category: "Infraestrutura",
    link: "https://youtu.be/Q_Vn69-P8lA",
    videoId: "Q_Vn69-P8lA",
    featured: false
  },
  {
    topic: 'hardware',
    title: "Supercomputadores: Montagem (Dublado)",
    desc: "Como milhares de processadores são interconectados para criar o hardware mais potente da Terra.",
    duration: "16 min",
    category: "HPC",
    link: "https://youtu.be/TfV95_o8r1U",
    videoId: "TfV95_o8r1U",
    featured: true
  },
  {
    topic: 'hardware',
    title: "Hardware Quântico (Dublado)",
    desc: "A fabricação dos processadores que operam no zero absoluto. O futuro do hardware.",
    duration: "10 min",
    category: "Futurismo",
    link: "https://youtu.be/-ZNEzzDcllU",
    videoId: "-ZNEzzDcllU",
    featured: true
  }
];

const VideosObrigatorios: React.FC = () => {
  const [activeTopic, setActiveTopic] = useState<VideoTopic>('computing');

  const filteredVideos = useMemo(() => {
    return ALL_VIDEOS.filter(v => v.topic === activeTopic);
  }, [activeTopic]);

  const tabs = [
    { id: 'computing' as VideoTopic, label: 'Computação', icon: History, color: 'text-red-500', bg: 'bg-red-500/10' },
    { id: 'programming' as VideoTopic, label: 'Programação', icon: Code2, color: 'text-estacio-cyan', bg: 'bg-estacio-cyan/10' },
    { id: 'hardware' as VideoTopic, label: 'Hardware', icon: Cpu, color: 'text-estacio-amber', bg: 'bg-estacio-amber/10' }
  ];

  return (
    <div className="container mx-auto px-6 py-12 md:py-20 fade-in bg-slate-50/40">
      {/* Top Navigation */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-20 max-w-6xl mx-auto gap-6">
        <a href="#/home" className="group inline-flex items-center gap-3 text-slate-400 hover:text-estacio-navy font-black uppercase text-[10px] tracking-widest transition-all">
          <span className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:bg-estacio-navy group-hover:text-white group-hover:border-estacio-navy shadow-sm transition-all duration-300">
            <ChevronLeft size={18} />
          </span>
          Voltar para Home
        </a>
        <div className="flex items-center gap-3 bg-red-600/10 px-6 py-3 rounded-2xl border border-red-600/20">
          <Globe size={18} className="text-red-600" />
          <span className="text-[10px] font-black text-red-700 uppercase tracking-[0.2em]">Conteúdo 100% Dublado / PT-BR</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="mb-16 md:mb-24 relative text-center md:text-left">
          <div className="flex items-center gap-6 mb-8 justify-center md:justify-start">
             <div className="w-2 h-12 bg-red-600 rounded-full"></div>
             <h2 className="text-4xl md:text-8xl font-black text-estacio-navy italic uppercase tracking-tighter leading-none">
              Vídeos <span className="text-red-600">Obrigatórios</span>
            </h2>
          </div>
          <p className="text-lg md:text-2xl text-slate-400 font-medium max-w-4xl leading-relaxed mx-auto md:mx-0">
            Aprenda com os melhores recursos em nosso idioma. <span className="text-estacio-navy font-black italic">30 marcos técnicos</span> fundamentais para sua carreira em TI.
          </p>
        </header>

        {/* Custom Tabs Navigation */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTopic(tab.id)}
              className={`flex items-center gap-4 px-8 py-5 rounded-[2rem] font-black uppercase italic tracking-widest text-[11px] transition-all duration-500 shadow-sm border ${
                activeTopic === tab.id 
                ? `${tab.bg} ${tab.color} border-current shadow-xl scale-105` 
                : 'bg-white text-slate-400 border-slate-100 hover:bg-slate-50'
              }`}
            >
              <tab.icon size={20} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cinematic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32 min-h-[600px]">
          {filteredVideos.map((video, i) => (
            <article 
              key={`${activeTopic}-${i}`}
              className="group relative flex flex-col h-full bg-white rounded-[3.5rem] overflow-hidden shadow-sm hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] transition-all duration-700 border border-slate-100 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <a 
                href={video.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img 
                    src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`} 
                    alt={video.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                    }}
                  />
                  
                  {/* Visual Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity"></div>
                  
                  {/* Floating Tags */}
                  <div className="absolute top-6 left-6 flex items-center gap-2">
                      <span className="px-4 py-2 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl text-[9px] font-black uppercase tracking-widest text-white shadow-xl flex items-center gap-3">
                          {video.featured && <Sparkles size={12} className="text-amber-400" />}
                          {video.category}
                      </span>
                      <span className="px-3 py-2 bg-red-600/80 backdrop-blur-md rounded-2xl text-[8px] font-black uppercase text-white">Dublado</span>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-6 left-6 flex items-center gap-3 px-4 py-2 bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl">
                    <Clock size={12} className="text-red-500" />
                    <span className="text-[10px] text-white font-black tracking-widest">{video.duration}</span>
                  </div>

                  {/* Animated Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 shadow-2xl shadow-red-600/40">
                          <Play size={32} fill="currentColor" className="ml-1" />
                      </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-10 flex flex-col flex-grow relative">
                  <h4 className="text-2xl font-black text-estacio-navy italic uppercase tracking-tight mb-4 group-hover:text-red-600 transition-colors duration-300 leading-[1.1]">
                    {video.title}
                  </h4>
                  
                  <p className="text-sm text-slate-500 font-medium leading-relaxed mb-10 line-clamp-3 italic opacity-80">
                    "{video.desc}"
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between pt-8 border-t border-slate-50">
                    <div className="flex items-center gap-3 text-[10px] font-black uppercase text-red-600 tracking-[0.2em] group-hover:gap-5 transition-all">
                        ASSISTIR EM PORTUGUÊS <ExternalLink size={14} />
                    </div>
                  </div>
                </div>
              </a>

              {/* Feature Indicator */}
              {video.featured && (
                <div className="absolute top-0 right-0 w-2 h-full bg-red-600/30"></div>
              )}
            </article>
          ))}
        </div>

        {/* Final Information Banner */}
        <div className="bg-estacio-navy rounded-[5rem] p-12 md:p-32 text-white relative overflow-hidden mb-24 shadow-2xl">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-600/20 to-transparent"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-estacio-cyan/10 blur-[120px] rounded-full"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-2/3">
                <div className="inline-flex items-center gap-3 mb-8 px-6 py-2 bg-white/10 rounded-full border border-white/10 backdrop-blur-md">
                    <Globe className="text-estacio-cyan" size={18} />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-estacio-cyan">Conhecimento Sem Fronteiras</span>
                </div>
                <h3 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter mb-8 leading-none">
                  A história dublada para <span className="text-red-600">você.</span>
                </h3>
                <p className="text-xl text-white/50 font-medium leading-relaxed mb-12 max-w-2xl">
                  Filtramos os melhores conteúdos do mundo que possuem tradução ou narração em português, garantindo que a barreira do idioma não impeça seu crescimento técnico.
                </p>
                <div className="flex flex-wrap gap-8">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-red-600 border border-white/10">
                            <Monitor size={24} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-white/70">Educação BR</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-estacio-cyan border border-white/10">
                            <Code2 size={24} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-white/70">Lógica Global</span>
                    </div>
                </div>
            </div>
            
            <div className="lg:w-1/3 w-full">
                <div className="p-10 md:p-12 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[4rem] shadow-inner">
                    <h5 className="font-black italic uppercase tracking-widest text-lg mb-8 text-estacio-cyan border-b border-white/10 pb-6">Checklist Dev</h5>
                    <ul className="space-y-6">
                        {[
                            "10 Clássicos da Computação",
                            "10 Marcos da Programação",
                            "10 Segredos da Fabricação",
                            "Tudo em Português do Brasil"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-4 text-sm font-bold text-white/70 italic group">
                                <div className="mt-1.5 w-2 h-2 rounded-full bg-red-600 shrink-0 shadow-[0_0_10px_rgba(220,38,38,0.8)] transition-all group-hover:scale-150"></div>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
          </div>
        </div>

        <CoordinatorWidget tip="O conhecimento é a única coisa que ninguém pode tirar de você. Assista a esses vídeos como se fossem parte do seu currículo básico, pois eles dão o contexto necessário para entender o 'porquê' das coisas na TI." />
      </div>
    </div>
  );
};

export default VideosObrigatorios;
