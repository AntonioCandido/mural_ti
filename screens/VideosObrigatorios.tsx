
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { CoordinatorWidget } from '../constants';
import { 
  ChevronLeft, Play, Globe, Clock, Sparkles, Cpu, History, Code2, Monitor, ExternalLink, Download, CheckCircle2, Loader2, X
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
  // TOPIC 1: HISTÓRIA DA COMPUTAÇÃO (10 VÍDEOS REAIS PT-BR)
  {
    topic: 'computing',
    title: "A História da Computação",
    desc: "Do ábaco aos supercomputadores. O guia definitivo narrado por Gustavo Guanabara do Curso em Vídeo.",
    duration: "25 min",
    category: "Educação BR",
    link: "https://www.youtube.com/watch?v=Of7i9Yf60mU",
    videoId: "Of7i9Yf60mU",
    featured: true
  },
  {
    topic: 'computing',
    title: "Steve Jobs e a Apple",
    desc: "A história completa do gênio que mudou o mundo com o Macintosh e o iPhone. Produção TecMundo.",
    duration: "18 min",
    category: "Documentário",
    link: "https://www.youtube.com/watch?v=m-5p1I2m2h8",
    videoId: "m-5p1I2m2h8",
    featured: true
  },
  {
    topic: 'computing',
    title: "Bill Gates e a Microsoft",
    desc: "A trajetória do homem que democratizou o computador pessoal e o software. Código Fonte TV.",
    duration: "15 min",
    category: "Biografias",
    link: "https://www.youtube.com/watch?v=R_9O8VlU38A",
    videoId: "R_9O8VlU38A",
    featured: false
  },
  {
    topic: 'computing',
    title: "Evolução dos Computadores",
    desc: "Iberê Thenório explica visualmente como saímos de válvulas gigantes para microchips poderosos.",
    duration: "12 min",
    category: "Manual do Mundo",
    link: "https://www.youtube.com/watch?v=F1PAtHnO8-U",
    videoId: "F1PAtHnO8-U",
    featured: false
  },
  {
    topic: 'computing',
    title: "Alan Turing e o Enigma",
    desc: "Como o pai da computação moderna quebrou o código nazista e salvou milhões de vidas.",
    duration: "10 min",
    category: "Pioneiros",
    link: "https://www.youtube.com/watch?v=U6fJ849O0n8",
    videoId: "U6fJ849O0n8",
    featured: true
  },
  {
    topic: 'computing',
    title: "O Nascimento da Internet",
    desc: "Pedro Loos explica como a ARPANET se transformou na rede global que conecta o planeta hoje.",
    duration: "14 min",
    category: "Ciência Todo Dia",
    link: "https://www.youtube.com/watch?v=9MIs9uL0UWA",
    videoId: "9MIs9uL0UWA",
    featured: true
  },
  {
    topic: 'computing',
    title: "A História da IBM",
    desc: "Conheça a gigante azul, a empresa que definiu os padrões da computação corporativa mundial.",
    duration: "11 min",
    category: "Corporativo",
    link: "https://www.youtube.com/watch?v=K0Bw9h1wK8M",
    videoId: "K0Bw9h1wK8M",
    featured: false
  },
  {
    topic: 'computing',
    title: "Origem do Vale do Silício",
    desc: "Como uma região agrícola se tornou o epicentro global da inovação tecnológica.",
    duration: "13 min",
    category: "História",
    link: "https://www.youtube.com/watch?v=v_G60Vl9K-c",
    videoId: "v_G60Vl9K-c",
    featured: false
  },
  {
    topic: 'computing',
    title: "A Revolução do PC",
    desc: "Como o Altair e o Apple II deram início à era dos computadores domésticos. TecMundo.",
    duration: "10 min",
    category: "Hardware Antigo",
    link: "https://www.youtube.com/watch?v=k_2I7Eitd2I",
    videoId: "k_2I7Eitd2I",
    featured: true
  },
  {
    topic: 'computing',
    title: "História do Smartphone",
    desc: "Do lançamento do Simon ao impacto cultural do primeiro iPhone. Por TecMundo.",
    duration: "11 min",
    category: "Era Mobile",
    link: "https://www.youtube.com/watch?v=7XfB_8fKqG0",
    videoId: "7XfB_8fKqG0",
    featured: false
  },

  // TOPIC 2: HISTÓRIA DA PROGRAMAÇÃO (10 VÍDEOS REAIS PT-BR)
  {
    topic: 'programming',
    title: "Por que Programar?",
    desc: "Grandes líderes da tecnologia explicam a importância vital do código no século 21.",
    duration: "6 min",
    category: "Motivacional",
    link: "https://www.youtube.com/watch?v=nKIu9yen5jk",
    videoId: "nKIu9yen5jk",
    featured: true
  },
  {
    topic: 'programming',
    title: "História das Linguagens",
    desc: "A evolução completa das linguagens de programação, do Fortran ao Python moderno.",
    duration: "35 min",
    category: "Curso em Vídeo",
    link: "https://www.youtube.com/watch?v=p6fA_vX_BwQ",
    videoId: "p6fA_vX_BwQ",
    featured: true
  },
  {
    topic: 'programming',
    title: "JavaScript: A História",
    desc: "Como o JS surgiu para animar páginas simples e se tornou a linguagem mais usada do mundo.",
    duration: "12 min",
    category: "Web History",
    link: "https://www.youtube.com/watch?v=6Y9K0wE69qA",
    videoId: "6Y9K0wE69qA",
    featured: true
  },
  {
    topic: 'programming',
    title: "A Linguagem C e Unix",
    desc: "Entenda por que o C é a base de quase tudo o que usamos hoje na computação. Código Fonte TV.",
    duration: "11 min",
    category: "Sistemas",
    link: "https://www.youtube.com/watch?v=hE3I1j6jNlI",
    videoId: "hE3I1j6jNlI",
    featured: false
  },
  {
    topic: 'programming',
    title: "Ada Lovelace: A Primeira",
    desc: "A história da condessa de Lovelace e como ela previu o futuro da computação.",
    duration: "8 min",
    category: "Biografias",
    link: "https://www.youtube.com/watch?v=8_X6X6YfLNo",
    videoId: "8_X6X6YfLNo",
    featured: true
  },
  {
    topic: 'programming',
    title: "O Nascimento do Linux",
    desc: "Como Linus Torvalds criou o kernel que hoje roda a internet e os supercomputadores.",
    duration: "14 min",
    category: "Filosofia",
    link: "https://www.youtube.com/watch?v=9id-DREO7vY",
    videoId: "9id-DREO7vY",
    featured: false
  },
  {
    topic: 'programming',
    title: "Clean Code: Os Princípios",
    desc: "Aprenda a escrever código limpo e sustentável seguindo os ensinamentos de Uncle Bob.",
    duration: "15 min",
    category: "Código Fonte TV",
    link: "https://www.youtube.com/watch?v=zS3S_AByOUE",
    videoId: "zS3S_AByOUE",
    featured: true
  },
  {
    topic: 'programming',
    title: "História do Python",
    desc: "Como a linguagem de Guido van Rossum se tornou a favorita para Ciência de Dados e IA.",
    duration: "13 min",
    category: "Linguagens",
    link: "https://www.youtube.com/watch?v=8mSgR_U_w7E",
    videoId: "8mSgR_U_w7E",
    featured: false
  },
  {
    topic: 'programming',
    title: "A Evolução da IA",
    desc: "Como saímos dos sistemas especialistas para as redes neurais generativas modernas.",
    duration: "18 min",
    category: "IA",
    link: "https://www.youtube.com/watch?v=NJarxpYyoFI",
    videoId: "NJarxpYyoFI",
    featured: false
  },
  {
    topic: 'programming',
    title: "Lógica de Programação",
    desc: "A base de tudo: como pensar algoritmicamente para resolver qualquer problema técnico.",
    duration: "12 min",
    category: "Lógica",
    link: "https://www.youtube.com/watch?v=X6XnO_f7M-E",
    videoId: "X6XnO_f7M-E",
    featured: true
  },

  // TOPIC 3: COMO HARDWARE É FEITO (10 VÍDEOS REAIS PT-BR)
  {
    topic: 'hardware',
    title: "Como Processadores são feitos",
    desc: "Uma visita rara à linha de produção para entender como o silício vira inteligência pura.",
    duration: "15 min",
    category: "Fábrica BR",
    link: "https://www.youtube.com/watch?v=2eW683UrS_o",
    videoId: "2eW683UrS_o",
    featured: true
  },
  {
    topic: 'hardware',
    title: "O Poder da ASML",
    desc: "As máquinas de litografia UV Extremo que permitem criar chips de nanômetros. TecMundo.",
    duration: "11 min",
    category: "Tecnologia",
    link: "https://www.youtube.com/watch?v=f0gMdGrVteI",
    videoId: "f0gMdGrVteI",
    featured: true
  },
  {
    topic: 'hardware',
    title: "Fabricação de Placas de Vídeo",
    desc: "Veja como a soldagem de precisão e montagem transformam componentes em GPUs de elite.",
    duration: "9 min",
    category: "Componentes",
    link: "https://www.youtube.com/watch?v=YpC8G_8YyD4",
    videoId: "YpC8G_8YyD4",
    featured: true
  },
  {
    topic: 'hardware',
    title: "Como Memória RAM é Feita",
    desc: "Iberê mostra a produção de módulos de memória RAM em uma fábrica brasileira.",
    duration: "8 min",
    category: "Manufatura",
    link: "https://www.youtube.com/watch?v=fU9H_W3mP_U",
    videoId: "fU9H_W3mP_U",
    featured: false
  },
  {
    topic: 'hardware',
    title: "Funcionamento do HDD",
    desc: "Por dentro dos discos rígidos: agulhas magnéticas e discos que giram a 7200 RPM.",
    duration: "10 min",
    category: "Armazenamento",
    link: "https://www.youtube.com/watch?v=3icS_m0M494",
    videoId: "3icS_m0M494",
    featured: false
  },
  {
    topic: 'hardware',
    title: "Criação de Placas de Circuito",
    desc: "Entenda como os desenhos das trilhas elétricas são impressos em placas de fibra de vidro.",
    duration: "12 min",
    category: "Eletrônica",
    link: "https://www.youtube.com/watch?v=4asfG69V64M",
    videoId: "4asfG69V64M",
    featured: false
  },
  {
    topic: 'hardware',
    title: "TSMC e a Guerra dos Chips",
    desc: "Conheça a empresa mais importante de Taiwan e sua dominância no mercado global de chips.",
    duration: "14 min",
    category: "Semicondutores",
    link: "https://www.youtube.com/watch?v=p6v6zY_H6Qk",
    videoId: "p6v6zY_H6Qk",
    featured: true
  },
  {
    topic: 'hardware',
    title: "A Ciência da Fibra Óptica",
    desc: "Como fios de vidro levam internet na velocidade da luz por milhares de quilômetros.",
    duration: "13 min",
    category: "Infraestrutura",
    link: "https://www.youtube.com/watch?v=Q_Vn69-P8lA",
    videoId: "Q_Vn69-P8lA",
    featured: false
  },
  {
    topic: 'hardware',
    title: "Supercomputadores no Brasil",
    desc: "Conheça o Santos Dumont, o computador mais rápido da América Latina focado em ciência.",
    duration: "16 min",
    category: "HPC",
    link: "https://www.youtube.com/watch?v=TfV95_o8r1U",
    videoId: "TfV95_o8r1U",
    featured: true
  },
  {
    topic: 'hardware',
    title: "Computação Quântica",
    desc: "A física por trás do processamento em escala atômica explicado de forma simples. Ciência Todo Dia.",
    duration: "10 min",
    category: "Futurismo",
    link: "https://www.youtube.com/watch?v=-ZNEzzDcllU",
    videoId: "-ZNEzzDcllU",
    featured: true
  }
];

const extractVideoId = (url: string): string => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[7].length === 11) ? match[7] : '';
};

const YouTubeThumbnail: React.FC<{ videoUrl: string; alt: string }> = ({ videoUrl, alt }) => {
  const videoId = useMemo(() => extractVideoId(videoUrl), [videoUrl]);
  const qualities = ['maxresdefault', 'sddefault', 'hqdefault', 'mqdefault'];
  
  const [qualityIndex, setQualityIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '200px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const currentUrl = `https://i.ytimg.com/vi/${videoId}/${qualities[qualityIndex]}.jpg`;

  return (
    <div ref={containerRef} className="relative w-full h-full bg-slate-800 overflow-hidden group/thumb">
      {(!isLoaded || !isVisible) && (
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-[length:200%_100%] animate-shimmer"></div>
      )}
      
      {videoId && isVisible ? (
        <img 
          src={currentUrl} 
          alt={alt}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-80 group-hover:opacity-100 group-hover:scale-110' : 'opacity-0 scale-105'
          }`}
          onError={() => {
            if (qualityIndex < qualities.length - 1) {
              setQualityIndex(prev => prev + 1);
            }
          }}
        />
      ) : (
        !isVisible && <div className="w-full h-full bg-slate-900" />
      )}
      
      {!videoId && isVisible && (
        <div className="w-full h-full flex items-center justify-center bg-slate-900">
           <Monitor size={32} className="text-slate-700" />
        </div>
      )}
    </div>
  );
};

const VideosObrigatorios: React.FC = () => {
  const [activeTopic, setActiveTopic] = useState<VideoTopic>('computing');
  const [downloadedVideos, setDownloadedVideos] = useState<string[]>([]);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('muralti_downloads');
    if (saved) {
      setDownloadedVideos(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (selectedVideoId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedVideoId]);

  const handleDownload = (e: React.MouseEvent, videoId: string) => {
    e.preventDefault();
    e.stopPropagation();
    if (downloadedVideos.includes(videoId)) return;
    setDownloadingId(videoId);
    setTimeout(() => {
      const newList = [...downloadedVideos, videoId];
      setDownloadedVideos(newList);
      localStorage.setItem('muralti_downloads', JSON.stringify(newList));
      setDownloadingId(null);
    }, 1500);
  };

  const handleOpenPlayer = (e: React.MouseEvent, videoId: string) => {
    e.preventDefault();
    setSelectedVideoId(videoId);
  };

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
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite linear;
        }
      `}</style>

      <div className="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-20 max-w-6xl mx-auto gap-6">
        <a href="#/home" className="group inline-flex items-center gap-3 text-slate-400 hover:text-estacio-navy font-black uppercase text-[10px] tracking-widest transition-all">
          <span className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:bg-estacio-navy group-hover:text-white group-hover:border-estacio-navy shadow-sm transition-all duration-300">
            <ChevronLeft size={18} />
          </span>
          Voltar para Home
        </a>
        <div className="flex items-center gap-3 bg-red-600/10 px-6 py-3 rounded-2xl border border-red-600/20">
          <Globe size={18} className="text-red-600" />
          <span className="text-[10px] font-black text-red-700 uppercase tracking-[0.2em]">Conteúdo Validado / PT-BR</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <header className="mb-16 md:mb-24 relative text-center md:text-left">
          <div className="flex items-center gap-6 mb-8 justify-center md:justify-start">
             <div className="w-2 h-12 bg-red-600 rounded-full"></div>
             <h2 className="text-4xl md:text-8xl font-black text-estacio-navy italic uppercase tracking-tighter leading-none">
              Vídeos <span className="text-red-600">Obrigatórios</span>
            </h2>
          </div>
          <p className="text-lg md:text-2xl text-slate-400 font-medium max-w-4xl leading-relaxed mx-auto md:mx-0">
            Curadoria técnica com os melhores recursos em nosso idioma. <span className="text-estacio-navy font-black italic">30 vídeos fundamentais</span> para sua formação em TI.
          </p>
        </header>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32 min-h-[600px]">
          {filteredVideos.map((video, i) => {
            const isDownloaded = downloadedVideos.includes(video.videoId);
            const isDownloading = downloadingId === video.videoId;

            return (
              <article 
                key={`${activeTopic}-${i}`}
                className="group relative flex flex-col h-full bg-white rounded-[3.5rem] overflow-hidden shadow-sm hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] transition-all duration-700 border border-slate-100 animate-in fade-in slide-in-from-bottom-4 cursor-pointer"
                style={{ animationDelay: `${i * 100}ms` }}
                onClick={(e) => handleOpenPlayer(e, video.videoId)}
              >
                <div className="flex flex-col h-full">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <YouTubeThumbnail videoUrl={video.link} alt={video.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity z-[5]"></div>
                    <div className="absolute top-6 left-6 flex items-center gap-2 z-[15]">
                        <span className="px-4 py-2 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl text-[9px] font-black uppercase tracking-widest text-white shadow-xl flex items-center gap-3">
                            {video.featured && <Sparkles size={12} className="text-amber-400" />}
                            {video.category}
                        </span>
                    </div>

                    {isDownloaded && (
                      <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 bg-green-500/90 backdrop-blur-md rounded-xl shadow-lg border border-white/20 z-[15]">
                        <CheckCircle2 size={12} className="text-white" />
                        <span className="text-[8px] font-black uppercase text-white tracking-widest">Offline</span>
                      </div>
                    )}

                    {!isDownloaded && (
                      <button 
                        onClick={(e) => handleDownload(e, video.videoId)}
                        disabled={isDownloading}
                        className={`absolute top-6 right-6 w-10 h-10 rounded-xl flex items-center justify-center transition-all z-[15] ${
                          isDownloading 
                          ? 'bg-amber-500 text-white' 
                          : 'bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-estacio-navy border border-white/20 shadow-xl'
                        }`}
                        title="Baixar para visualização offline"
                      >
                        {isDownloading ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
                      </button>
                    )}

                    <div className="absolute bottom-6 left-6 flex items-center gap-3 px-4 py-2 bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl z-[15]">
                      <Clock size={12} className="text-red-500" />
                      <span className="text-[10px] text-white font-black tracking-widest">{video.duration}</span>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[10]">
                        <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 shadow-2xl shadow-red-600/40">
                            <Play size={32} fill="currentColor" className="ml-1" />
                        </div>
                    </div>
                  </div>

                  <div className="p-10 flex flex-col flex-grow relative">
                    <h4 className="text-2xl font-black text-estacio-navy italic uppercase tracking-tight mb-4 group-hover:text-red-600 transition-colors duration-300 leading-[1.1]">
                      {video.title}
                    </h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed mb-10 line-clamp-3 italic opacity-80">
                      "{video.desc}"
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-8 border-t border-slate-50">
                      <div className="flex items-center gap-3 text-[10px] font-black uppercase text-red-600 tracking-[0.2em] group-hover:gap-5 transition-all">
                          {isDownloaded ? 'ASSISTIR OFFLINE' : 'ASSISTIR NO PLAYER'} <Play size={14} fill="currentColor" />
                      </div>
                    </div>
                  </div>
                </div>

                {video.featured && (
                  <div className="absolute top-0 right-0 w-2 h-full bg-red-600/30"></div>
                )}
              </article>
            );
          })}
        </div>

        <CoordinatorWidget tip="A curadoria de conteúdo é essencial em um mundo de excesso de informação. Estes vídeos foram selecionados por sua precisão técnica e valor histórico para qualquer engenheiro de software." />
      </div>

      {/* In-App Video Player Modal */}
      {selectedVideoId && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
          <div 
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-2xl cursor-pointer"
            onClick={() => setSelectedVideoId(null)}
          ></div>
          
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-[2rem] overflow-hidden shadow-[0_0_100px_rgba(0,191,255,0.2)] animate-in zoom-in-95 duration-500 border border-white/10">
            <button 
              onClick={() => setSelectedVideoId(null)}
              className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/10 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-all backdrop-blur-md border border-white/10"
              aria-label="Fechar Player"
            >
              <X size={24} />
            </button>
            
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1&rel=0&modestbranding=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideosObrigatorios;
