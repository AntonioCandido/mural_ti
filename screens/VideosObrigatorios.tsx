
import React, { useState } from 'react';
import CoordinatorWidget from '../components/CoordinatorWidget.tsx';
import BackButton from '../components/BackButton.tsx';
import { 
  Play, Clock, ExternalLink, X
} from 'lucide-react';

interface RecommendedVideo {
  title: string;
  desc: string;
  duration: string;
  category: string;
  link: string;
  videoId: string;
  featured: boolean;
  thumbnailUrl?: string;
}

const ALL_VIDEOS: RecommendedVideo[] = [
  { title: "Piratas do Vale do Silício", desc: "Rivalidade Apple vs Microsoft.", duration: "01:35:00", category: "Filme", link: "https://archive.org/embed/piratas-do-vale-do-silicio-1999-ptbr", videoId: "piratas-vale-silicio", featured: true },
  { title: "Revolution OS", desc: "A história do Linux.", duration: "01:25:00", category: "Open Source", link: "https://www.youtube.com/watch?v=LApncvI0d2M", videoId: "LApncvI0d2M", featured: true },
];

const VideosObrigatorios: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<RecommendedVideo | null>(null);

  return (
    <div className="container mx-auto px-6 py-12 md:py-20 fade-in bg-slate-50/30 min-h-screen">
      <BackButton />

      <div className="max-w-6xl mx-auto">
        <header className="mb-20">
          <h2 className="text-5xl md:text-8xl font-black text-estacio-navy italic uppercase tracking-tighter mb-8 leading-none">
            Vídeos <span className="text-red-600">Obrigatórios</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {ALL_VIDEOS.map((video) => (
            <article key={video.videoId} className="bg-white rounded-[3rem] border border-slate-100 shadow-xl overflow-hidden transition-all flex flex-col h-full">
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                <img src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`} alt={video.title} className="w-full h-full object-cover" />
                <button onClick={() => setSelectedVideo(video)} className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white"><Play size={24} fill="currentColor" className="ml-1" /></div>
                </button>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-black text-estacio-navy italic text-xl uppercase mb-3">{video.title}</h3>
                <p className="text-[11px] font-bold text-slate-500 uppercase flex-grow">{video.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <CoordinatorWidget tip="Filmes fundamentais para sua formação técnica e estratégica." />
      </div>
    </div>
  );
};

export default VideosObrigatorios;
