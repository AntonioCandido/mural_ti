
import React from 'react';
import { Camera, ExternalLink } from 'lucide-react';
import CoordinatorWidget from '../components/CoordinatorWidget.tsx';
import BackButton from '../components/BackButton.tsx';

const PHOTOS = [
  { url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800', title: 'Networking & Coffee', desc: 'Alunos em momento de troca.' },
  { url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800', title: 'Laboratório', desc: 'Práticas de Redes.' },
];

const GaleriaFotos: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20 fade-in">
      <BackButton />

      <div className="max-w-6xl mx-auto">
        <header className="mb-20 text-center md:text-left">
          <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
            <div className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
              <Camera size={24} />
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-estacio-navy italic uppercase tracking-tighter leading-none">
              Galeria de <span className="text-indigo-500">Fotos</span>
            </h2>
          </div>
        </header>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 mb-24">
          {PHOTOS.map((photo, i) => (
            <div key={i} className="break-inside-avoid relative bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
              <div className="aspect-video overflow-hidden">
                <img src={photo.url} alt={photo.title} className="w-full h-full object-cover scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h4 className="font-black text-estacio-navy italic uppercase text-lg mb-2">{photo.title}</h4>
                <p className="text-xs text-slate-400 font-bold leading-relaxed">{photo.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <CoordinatorWidget tip="Registre cada etapa do seu crescimento!" />
      </div>
    </div>
  );
};

export default GaleriaFotos;
