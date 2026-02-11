import React, { useState } from 'react';
import CoordinatorWidget from '../components/CoordinatorWidget.tsx';
import { 
  ChevronLeft, Play, Clock, ExternalLink, X
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
  thumbnailUrl?: string;
}

const ALL_VIDEOS: RecommendedVideo[] = [
  {
    topic: 'essenciais',
    title: "Piratas do Vale do Silício",
    desc: "Filme que retrata a rivalidade histórica entre Steve Jobs (Apple) e Bill Gates (Microsoft) na criação do PC.",
    duration: "01:35:00",
    category: "Filme",
    link: "https://archive.org/embed/piratas-do-vale-do-silicio-1999-ptbr",
    videoId: "piratas-vale-silicio",
    featured: true,
    thumbnailUrl: "https://archive.org/services/img/piratas-do-vale-do-silicio-1999-ptbr"
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
  }
];

const VideosObrigatorios: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<RecommendedVideo | null>(null);

  const getThumbnail = (video: RecommendedVideo) => {
    if (video.thumbnailUrl) return video.thumbnailUrl;
    return `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
  };

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
            <span className="bg-red-600/10 text-red-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-red-600/20">
              Must Watch List
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-estacio-navy italic uppercase tracking-tighter mb-8 leading-none">
            Vídeos <span className="text-red-600">Essenciais</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-4xl leading-relaxed">
            Uma curadoria de filmes e aulas que todo profissional de TI deveria conhecer para entender a cultura e a história do nosso setor.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {ALL_VIDEOS.map((video, i) => (
            <div 
              key={i} 
              className="group bg-white rounded-[3.5rem] border border-slate-100 shadow-xl overflow-hidden flex flex-col hover:shadow-2xl transition-all cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={getThumbnail(video)} 
                  alt={video.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white shadow-2xl">
                     <Play fill="currentColor" size={24} />
                   </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white text-[9px] font-black px-3 py-1 rounded-full flex items-center gap-2">
                  <Clock size={12} /> {video.duration}
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <div className="mb-4">
                  <span className="bg-slate-100 text-slate-400 text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                    {video.category}
                  </span>
                </div>
                <h4 className="text-xl font-black text-estacio-navy italic uppercase tracking-tight mb-4 group-hover:text-red-600 transition-colors">
                  {video.title}
                </h4>
                <p className="text-[11px] font-bold text-slate-400 uppercase leading-relaxed mb-8 flex-grow">
                  {video.desc}
                </p>
                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest italic">TI History Series</span>
                  <div className="text-red-600">
                    <Play size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Player */}
        {selectedVideo && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={() => setSelectedVideo(null)}></div>
            <div className="relative bg-black w-full max-w-5xl aspect-video rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 scale-in">
              <button 
                className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-md transition-all"
                onClick={() => setSelectedVideo(null)}
              >
                <X size={24} />
              </button>
              <iframe 
                src={selectedVideo.link.includes('youtube') 
                  ? `https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1` 
                  : selectedVideo.link}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        <CoordinatorWidget tip="A história da tecnologia é escrita por rebeldes e visionários. Entender de onde viemos ajuda a projetar para onde estamos indo. Esses vídeos são o alicerce cultural que todo engenheiro de software deve ter." />
      </div>
    </div>
  );
};

export default VideosObrigatorios;