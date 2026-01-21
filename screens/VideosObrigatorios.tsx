
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { CoordinatorWidget } from '../constants';
import { 
  ChevronLeft, Play, Globe, Clock, Sparkles, Cpu, History, Code2, Monitor, ExternalLink, Download, CheckCircle2, Loader2, X, Film, BookOpen, Tv
} from 'lucide-react';

type VideoTopic = 'essenciais';

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
  {
    topic: 'essenciais',
    title: "Piratas do Vale do Silício",
    desc: "Filme que retrata a rivalidade histórica entre Steve Jobs (Apple) e Bill Gates (Microsoft) na criação do PC.",
    duration: "01:35:00",
    category: "Filme",
    link: "https://www.youtube.com/watch?v=4nPNO7Wl-9Y",
    videoId: "4nPNO7Wl-9Y",
    featured: true
  },
  {
    topic: 'essenciais',
    title: "Qual a melhor linguagem?",
    desc: "O mestre Gustavo Guanabara explica os critérios para escolher sua primeira linguagem de programação.",
    duration: "00:33:00",
    category: "Aula",
    link: "https://www.youtube.com/watch?v=DjUB-yVWT2A",
    videoId: "DjUB-yVWT2A",
    featured: true
  },
  {
    topic: 'essenciais',
    title: "A Guerra dos Navegadores",
    desc: "Documentário sobre a disputa feroz entre o Netscape e o Internet Explorer da Microsoft nos anos 90.",
    duration: "00:43:00",
    category: "Documentário",
    link: "https://www.youtube.com/watch?v=yggAiSFD4Sw",
    videoId: "yggAiSFD4Sw",
    featured: false
  },
  {
    topic: 'essenciais',
    title: "O Triunfo dos Nerds",
    desc: "Um clássico que detalha a ascensão dos computadores pessoais e o impacto da cultura hacker.",
    duration: "03:00:00",
    category: "Documentário",
    link: "https://www.youtube.com/watch?v=LcOoQP7nhl4",
    videoId: "LcOoQP7nhl4",
    featured: true
  },
  {
    topic: 'essenciais',
    title: "História da Computação",
    desc: "Uma aula completa sobre a evolução das máquinas, desde o ábaco até os primeiros supercomputadores.",
    duration: "00:45:00",
    category: "Aula",
    link: "https://www.youtube.com/watch?v=MOb2GdQ7wiI",
    videoId: "MOb2GdQ7wiI",
    featured: false
  },
  {
    topic: 'essenciais',
    title: "A Base que Todo TI Precisa",
    desc: "Discussão sobre os fundamentos teóricos necessários antes de se aventurar em frameworks modernos.",
    duration: "00:20:00",
    category: "Fundamental",
    link: "https://www.youtube.com/watch?v=7c5yfAdmIEQ",
    videoId: "7c5yfAdmIEQ",
    featured: true
  },
  {
    topic: 'essenciais',
    title: "A História dos Vídeo Games",
    desc: "Documentário dublado que explora como a indústria de jogos impulsionou o hardware gráfico e a IA.",
    duration: "00:50:00",
    category: "Documentário",
    link: "https://www.youtube.com/watch?v=xIrs9js0uHo",
    videoId: "xIrs9js0uHo",
    featured: false
  },
  {
    topic: 'essenciais',
    title: "Revolution OS",
    desc: "Conta a história do sistema operacional Linux e o nascimento do movimento Open Source (Código Aberto).",
    duration: "01:25:00",
    category: "Open Source",
    link: "https://www.youtube.com/watch?v=LApncvI0d2M",
    videoId: "LApncvI0d2M",
    featured: true
  },
  {
    topic: 'essenciais',
    title: "A Saga do Napster",
    desc: "Documentário sobre como o compartilhamento de arquivos mudou a rede e as leis de direitos autorais.",
    duration: "01:30:00",
    category: "Rede & Sociedade",
    link: "https://www.youtube.com/watch?v=oOr0_Y_LU30",
    videoId: "oOr0_Y_LU30",
    featured: false
  },
  {
    topic: 'essenciais',
    title: "Arquitetura de Software",
    desc: "Explicação didática sobre como estruturar sistemas de forma robusta e escalável.",
    duration: "00:15:00",
    category: "Engenharia",
    link: "https://www.youtube.com/watch?v=AA9fxKRbBSM",
    videoId: "AA9fxKRbBSM",
    featured: true
  },
  {
    topic: 'essenciais',
    title: "O que saber antes de começar",
    desc: "Dicas valiosas para iniciantes sobre o mercado de trabalho e as competências além do código.",
    duration: "00:12:00",
    category: "Carreira",
    link: "https://www.youtube.com/watch?v=o57faBz3WJg",
    videoId: "o57faBz3WJg",
    featured: false
  },
  {
    topic: 'essenciais',
    title: "Google e o Cérebro do Mundo",
    desc: "A história do projeto ambicioso do Google de digitalizar todos os livros e os dilemas éticos envolvidos.",
    duration: "01:30:00",
    category: "Documentário",
    link: "https://www.youtube.com/watch?v=v_G60Vl9K-c",
    videoId: "v_G60Vl9K-c",
    featured: false
  },
  {
    topic: 'essenciais',
    title: "Deep Web: O documentário",
    desc: "Uma exploração sobre as camadas ocultas da internet, privacidade e segurança digital.",
    duration: "01:30:00",
    category: "Segurança",
    link: "https://www.youtube.com/watch?v=oOr0_Y_LU30",
    videoId: "oOr0_Y_LU30",
    featured: false
  },
  {
    topic: 'essenciais',
    title: "Hacktivistas (Anonymous)",
    desc: "Documentário que analisa o papel do ativismo digital e a segurança da informação na sociedade.",
    duration: "01:20:00",
    category: "Segurança",
    link: "https://www.youtube.com/watch?v=oOr0_Y_LU30",
    videoId: "oOr0_Y_LU30",
    featured: false
  },
  {
    topic: 'essenciais',
    title: "História do Computador (Kids)",
    desc: "Uma versão simplificada mas essencial para entender conceitos básicos de hardware e binário.",
    duration: "00:10:00",
    category: "Kids / Conceito",
    link: "https://www.youtube.com/watch?v=xxnHfwfEZ60",
    videoId: "xxnHfwfEZ60",
    featured: false
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
    </div>
  );
};

const VideosObrigatorios: React.FC = () => {
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
             <h2 className="text-4xl md:text-7xl font-black text-estacio-navy italic uppercase tracking-tighter leading-none">
              Vídeos <span className="text-red-600">Essenciais</span>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-5xl leading-relaxed mx-auto md:mx-0 border-l-4 border-red-600/20 pl-6 italic">
            Para um aluno de TI, entender a história e os fundamentos da tecnologia é tão importante quanto aprender a programar. temos uma lista com vídeos essenciais (documentários, filmes e aulas) dublados ou em português do Brasil:
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
          {ALL_VIDEOS.map((video, i) => {
            const isDownloaded = downloadedVideos.includes(video.videoId);
            const isDownloading = downloadingId === video.videoId;

            return (
              <article 
                key={i}
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
                          VER AGORA <Play size={14} fill="currentColor" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Concluding Section */}
        <section className="bg-white border-2 border-slate-100 rounded-[4rem] p-12 md:p-20 shadow-2xl mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 blur-[100px] rounded-full"></div>
          <div className="relative z-10 space-y-8">
            <div className="flex items-center gap-4 text-red-600">
               <CheckCircle2 size={32} />
               <h3 className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter">Visão de Mercado e Fundamentos</h3>
            </div>
            <div className="prose prose-lg max-w-none text-slate-600 font-medium leading-relaxed italic">
              <p>
                Este conteúdo ajudará a formar uma base sólida tanto em hardware e software quanto em visão de mercado.
              </p>
              <p className="border-l-4 border-red-600 pl-8 mt-10 text-estacio-navy font-black not-italic text-xl">
                <a href="https://www.youtube.com/watch?v=4nPNO7Wl-9Y" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">
                  Piratas do Vale do Silício
                </a> é um dos filmes mais recomendados para estudantes de computação entenderem como a indústria moderna foi moldada pela disputa entre Apple e Microsoft.
              </p>
            </div>
          </div>
        </section>

        <CoordinatorWidget tip="A curadoria de conteúdo é essencial em um mundo de excesso de informação. Estes vídeos foram selecionados por sua precisão técnica e valor histórico para qualquer engenheiro de software." />
      </div>

      {/* Video Player Modal */}
      {selectedVideoId && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
          <div 
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-2xl cursor-pointer"
            onClick={() => setSelectedVideoId(null)}
          ></div>
          
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-[2rem] overflow-hidden shadow-[0_0_100px_rgba(220,38,38,0.2)] animate-in zoom-in-95 duration-500 border border-white/10">
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
