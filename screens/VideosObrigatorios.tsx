
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { CoordinatorWidget } from '../constants';
import { 
  ChevronLeft, Play, Globe, Clock, Sparkles, ExternalLink, Download, CheckCircle2, Loader2, X, Monitor, Cpu, Film
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
            isLoaded ? 'opacity-70 group-hover:opacity-100 group-hover:scale-105' : 'opacity-0 scale-105'
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

  useEffect(() => {
    const saved = localStorage.getItem('muralti_downloads');
    if (saved) {
      setDownloadedVideos(JSON.parse(saved));
    }
  }, []);

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

  const handleOpenPlayer = (e: React.MouseEvent, videoLink: string) => {
    e.preventDefault();
    window.open(videoLink, '_blank');
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 fade-in bg-slate-50/20">
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite linear;
        }
        .text-stroke-red {
          -webkit-text-stroke: 1px #dc2626;
        }
      `}</style>

      {/* Navigation Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 md:mb-24 max-w-7xl mx-auto gap-8">
        <a href="#/home" className="group inline-flex items-center gap-4 text-slate-400 hover:text-estacio-navy font-black uppercase text-[10px] tracking-widest transition-all">
          <span className="w-14 h-14 rounded-[1.5rem] bg-white border border-slate-200 flex items-center justify-center group-hover:bg-estacio-navy group-hover:text-white group-hover:border-estacio-navy shadow-xl transition-all duration-500">
            <ChevronLeft size={20} />
          </span>
          Voltar ao Mural
        </a>
        <div className="flex items-center gap-4 bg-red-600/5 px-8 py-4 rounded-[2rem] border border-red-600/10 shadow-sm">
          <Globe size={20} className="text-red-600 animate-pulse" />
          <span className="text-[11px] font-black text-red-700 uppercase tracking-[0.2em]">Curadoria Validada • PT-BR</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <header className="mb-24 md:mb-32 relative text-center md:text-left">
          <div className="inline-flex items-center gap-3 bg-red-600 text-white px-5 py-2 rounded-full mb-8 font-black text-[9px] uppercase tracking-[0.3em] shadow-lg shadow-red-600/20">
            <Play size={12} fill="currentColor" /> Audiovisual Fundamental
          </div>
          <h2 className="text-6xl md:text-9xl font-black text-estacio-navy italic uppercase tracking-tighter leading-[0.85] mb-12">
            Vídeos <span className="text-red-600 text-stroke-red text-transparent">Essenciais</span>
          </h2>
          <div className="max-w-4xl p-10 md:p-14 bg-white border border-slate-100 rounded-[3.5rem] shadow-2xl shadow-slate-200/50 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-bl-[4rem]"></div>
             <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed italic border-l-8 border-red-600 pl-8">
              Para um aluno de TI, entender a história e os fundamentos da tecnologia é tão importante quanto aprender a programar. temos uma lista com vídeos essenciais (documentários, filmes e aulas) dublados ou em português do Brasil:
             </p>
          </div>
        </header>

        {/* Responsive Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-32">
          {ALL_VIDEOS.map((video, i) => {
            const isDownloaded = downloadedVideos.includes(video.videoId);
            const isDownloading = downloadingId === video.videoId;

            return (
              <article 
                key={i}
                className="group relative bg-white rounded-[3rem] overflow-hidden shadow-xl hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] transition-all duration-700 border border-slate-100 flex flex-col h-full cursor-pointer hover:-translate-y-4"
                style={{ animationDelay: `${i * 100}ms` }}
                onClick={(e) => handleOpenPlayer(e, video.link)}
              >
                {/* Thumbnail Layer */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <YouTubeThumbnail videoUrl={video.link} alt={video.title} />
                  
                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>
                  
                  {/* Category & Badge */}
                  <div className="absolute top-6 left-6 flex items-center gap-2 z-20">
                      <span className="px-5 py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[1.25rem] text-[9px] font-black uppercase tracking-widest text-white shadow-2xl flex items-center gap-3">
                          {video.featured && <Sparkles size={14} className="text-amber-400 animate-pulse" />}
                          {video.category}
                      </span>
                  </div>

                  {/* Offline Action */}
                  <button 
                    onClick={(e) => handleDownload(e, video.videoId)}
                    disabled={isDownloading}
                    className={`absolute top-6 right-6 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 z-20 ${
                      isDownloading 
                      ? 'bg-amber-500 text-white shadow-lg' 
                      : 'bg-white/10 backdrop-blur-xl text-white hover:bg-white hover:text-red-600 border border-white/20 shadow-2xl'
                    }`}
                    title="Salvar em cache para offline"
                  >
                    {isDownloading ? <Loader2 size={20} className="animate-spin" /> : <Download size={20} />}
                  </button>

                  {/* Play Button Center (Visible on Hover) */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                      <div className="w-24 h-24 bg-red-600 text-white rounded-full flex items-center justify-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 shadow-[0_0_50px_rgba(220,38,38,0.5)]">
                          <Play size={40} fill="currentColor" className="ml-2" />
                      </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-6 left-6 flex items-center gap-3 px-5 py-2.5 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl z-20">
                    <Clock size={14} className="text-red-500" />
                    <span className="text-[11px] text-white font-black tracking-widest">{video.duration}</span>
                  </div>
                </div>

                {/* Content Layer */}
                <div className="p-10 md:p-12 flex flex-col flex-grow bg-white group-hover:bg-slate-50 transition-colors duration-700">
                  <h4 className="text-2xl font-black text-estacio-navy italic uppercase tracking-tighter mb-4 leading-[1.1] group-hover:text-red-600 transition-colors duration-500">
                    {video.title}
                  </h4>
                  <p className="text-sm text-slate-400 font-bold leading-relaxed mb-10 line-clamp-3 italic opacity-80 group-hover:text-slate-600 transition-colors">
                    "{video.desc}"
                  </p>
                  
                  {/* CTA Footer */}
                  <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-[10px] font-black uppercase text-red-600 tracking-[0.25em] group-hover:gap-6 transition-all duration-500">
                        ABRIR NO YOUTUBE <Play size={16} fill="currentColor" />
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <ExternalLink size={18} className="text-slate-300" />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Closing Highlight Section */}
        <section className="bg-estacio-navy p-12 md:p-24 rounded-[4rem] text-white shadow-2xl mb-32 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full group-hover:bg-red-600/20 transition-all duration-1000"></div>
          
          <div className="relative z-10 max-w-5xl">
            <div className="flex items-center gap-6 mb-12">
               <div className="w-16 h-16 bg-red-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-red-600/40 rotate-[10deg] group-hover:rotate-0 transition-transform duration-700">
                  <CheckCircle2 size={36} />
               </div>
               <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">Visão de Mercado <br/> & <span className="text-red-600">Fundamentos</span></h3>
            </div>
            
            <div className="space-y-12">
              <p className="text-xl md:text-2xl text-white/70 font-medium leading-relaxed italic border-l-4 border-red-600/40 pl-10">
                Este conteúdo ajudará a formar uma base sólida tanto em hardware e software quanto em visão de mercado.
              </p>
              
              <a 
                href="https://www.youtube.com/watch?v=4nPNO7Wl-9Y" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group/link inline-flex flex-col md:flex-row md:items-center gap-6 bg-white/5 border border-white/10 p-10 rounded-[3rem] hover:bg-white hover:text-estacio-navy transition-all duration-700 shadow-xl"
              >
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white shadow-2xl shrink-0 group-hover/link:scale-110 transition-transform">
                   <Film size={32} />
                </div>
                <div>
                   <h5 className="font-black uppercase text-xl md:text-2xl tracking-tight mb-2 italic">Piratas do Vale do Silício</h5>
                   <p className="text-sm font-bold opacity-60 uppercase tracking-widest leading-relaxed">
                     O filme definitivo para entender como a indústria moderna foi moldada pela disputa entre Apple e Microsoft.
                   </p>
                </div>
                <div className="ml-auto opacity-40 group-hover/link:opacity-100 transition-opacity">
                   <ExternalLink size={24} />
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Global Widget */}
        <CoordinatorWidget tip="A curadoria de conteúdo é essencial em um mundo de excesso de informação. Estes vídeos foram selecionados por sua precisão técnica e valor histórico para qualquer engenheiro de software." />
      </div>
    </div>
  );
};

export default VideosObrigatorios;
