
import React, { useState } from 'react';
import { CoordinatorWidget } from '../constants';
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
    featured: true,
    thumbnailUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExQVFRUXGBoYGRgYFxodGhsdGh0dHRoaGRoYHSggGx0lHxgaIjEhJSkrLi4uHR8zODMtNygtLisBCgoKDg0OGxAQGjUmICYtLS0vLzYtLS0yLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAgMEBQYHAQj/xABHEAABAwIDBQYDBQUGBgEFAQABAgMRAAQSITEFBkFRYQcTInGBkTKhsRQjQlLBYnKCktEkM6KywvAVQ1Nz4fFjNGSDk7MX/8QAGgEAAQUBAAAAAAAAAAAAAAAABAABAgMFBv/EADYRAAEDAgQDBQcDBAMAAAAAAAEAAgMEEQUSITFBUWETIjJxkRRCgaGxwdEV4fAGI1LxJDRy/9oADAMBAAIRAxEAPwCvMtYinPxLOEdFFSQPko1bXezi/Uok9wJ0AcMZZD8HpVY2cj75ory++R7mFCPWPnWjdrG1LhldqGH1s4u9xYSM8PdxIIziT70BG1paS5ddWVEzJmRxEXN99gqNt3YNxaKQhxAHegpSoEEE4jIEcYUnXh5VMDs0vuPcz/3D0j8HnVi7VVE29mdSX2/fCTl9KN2sbUeYNr3Ly2grvsWExOFKSmfX61YYmC5OwQTMQqHtYGWDnEgnyVMvtzbpFw0wrug48klHjMHu0jFJw5aSMqi9sbKXaurYejGEYhhMjNJKYyzzEe9SOwtuOrvrRx11bmBYTKzJAcCUqjlJn3FTXa3YzetkZF1jCk81IUY/zJEdaqLGFpc1HMqp45WwzWsWnb4/ZQW1N3LlpllxYQQ9hQgJVKzjhSRBAA+EceNS1v2Z3qoUpTKZMkKWrFnr8KCJ9asu+6gL3ZNuNA8Fx/2ygJ+p9qYdp21Lhq8t0tPONoCEqISqAZcCZI46irTEwXug2YhUvyhlgXZjeyqN7u0+w+i2cSn+H9qYdp21Lhq8t0tPONoCEqISqAZcCZI46irTEwXug2YhUvyhlgXZjeyqN7u0+w+i2cSnvHkwg4pQVTwMSAPDwmm+39hvWag09glSQ54FFQhJKQTkOK"
  },
];

const VideosObrigatorios: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<RecommendedVideo | null>(null);

  const getThumbnail = (video: RecommendedVideo) => {
    if (video.thumbnailUrl) return video.thumbnailUrl;
    return `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`;
  };

  return (
    <div className="container mx-auto px-6 py-12 md:py-20 fade-in bg-slate-50/30 min-h-screen">
      <a href="#/home" className="group inline-flex items-center gap-3 text-slate-400 hover:text-estacio-navy font-black uppercase text-[10px] tracking-widest mb-16 transition-all">
        <span className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:bg-estacio-navy group-hover:text-white group-hover:border-estacio-navy shadow-sm transition-all duration-300">
          <ChevronLeft size={18} />
        </span>
        Voltar
      </a>

      <div className="max-w-6xl mx-auto">
        <header className="mb-20">
          <h2 className="text-5xl md:text-8xl font-black text-estacio-navy italic uppercase tracking-tighter mb-8 leading-none">
            Vídeos <span className="text-red-600">Obrigatórios</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-4xl leading-relaxed">
            Uma curadoria de filmes, documentários e aulas que todo profissional de TI deve assistir para entender o passado, presente e futuro da tecnologia.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {ALL_VIDEOS.map((video) => (
            <article key={video.videoId} className="bg-white rounded-[3rem] border border-slate-100 shadow-xl overflow-hidden group hover:shadow-2xl transition-all flex flex-col h-full">
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                <img 
                  src={getThumbnail(video)} 
                  alt={video.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800';
                  }}
                />
                <button 
                  onClick={() => setSelectedVideo(video)}
                  className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label={`Reproduzir ${video.title}`}
                >
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white shadow-xl scale-90 group-hover:scale-100 transition-transform">
                    <Play size={24} fill="currentColor" className="ml-1" />
                  </div>
                </button>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur text-estacio-navy text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                    {video.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                  <Clock size={12} /> {video.duration}
                </div>
                <h3 className="font-black text-estacio-navy italic text-xl uppercase mb-3 leading-tight tracking-tight">
                  {video.title}
                </h3>
                <p className="text-[11px] font-bold text-slate-500 uppercase leading-relaxed mb-8 flex-grow">
                  {video.desc}
                </p>
                <div className="mt-auto pt-6 border-t border-slate-50">
                  <a 
                    href={video.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[10px] font-black text-red-600 uppercase tracking-widest hover:gap-3 transition-all"
                  >
                    Link Original <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <CoordinatorWidget tip="Conhecer a história da computação não é apenas cultura geral, é entender os ciclos de inovação para prever o que vem a seguir. Filmes como 'Piratas do Vale do Silício' e 'Revolution OS' são fundamentais para sua formação técnica e estratégica." />
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
          <div className="absolute inset-0 bg-estacio-navy/95 backdrop-blur-xl" onClick={() => setSelectedVideo(null)}></div>
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur transition-colors"
              aria-label="Fechar"
            >
              <X size={28} />
            </button>
            <iframe 
              src={selectedVideo.link.includes('youtube.com') 
                ? `https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1` 
                : selectedVideo.link}
              title={selectedVideo.title}
              className="w-full h-full border-none"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideosObrigatorios;
