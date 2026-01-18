
import React from 'react';
import { ChevronLeft, Camera, ExternalLink } from 'lucide-react';
import { CoordinatorWidget } from '../constants';

const PHOTOS = [
  {
    url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800',
    title: 'Networking & Coffee',
    desc: 'Alunos em momento de troca durante intervalo de palestra na Unidade R9.'
  },
  {
    url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
    title: 'Laboratório de Inovação',
    desc: 'Práticas de Redes e Infraestrutura em ambiente controlado.'
  },
  {
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
    title: 'Hackathon Interno',
    desc: 'Maratona de programação para resolução de problemas reais.'
  },
  {
    url: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=800',
    title: 'Evento de Formatura TI',
    desc: 'Celebração da jornada acadêmica e novos ingressos no mercado.'
  },
  {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    title: 'Coding Together',
    desc: 'Grupos de estudo focados em algoritmos e lógica de programação.'
  },
  {
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    title: 'Palestra: IA Generativa',
    desc: 'Auditório lotado para discutir o futuro da IA em 2026.'
  }
];

const GaleriaFotos: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20 fade-in">
      <a href="#/home" className="group inline-flex items-center gap-3 text-slate-400 hover:text-estacio-navy font-black uppercase text-[10px] tracking-widest mb-16 transition-all">
        <span className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-estacio-navy transition-colors">
          <ChevronLeft size={14} />
        </span>
        Voltar
      </a>

      <div className="max-w-6xl mx-auto">
        <header className="mb-20 text-center md:text-left">
          <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
            <div className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <Camera size={24} />
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-estacio-navy italic uppercase tracking-tighter leading-none">
              Galeria de <span className="text-indigo-500">Fotos</span>
            </h2>
          </div>
          <p className="text-xl text-slate-500 font-medium max-w-3xl leading-relaxed">
            Momentos que definem nossa trajetória. Eventos, laboratórios e a vibrante comunidade de TI da Estácio.
          </p>
        </header>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 mb-24">
          {PHOTOS.map((photo, i) => (
            <div key={i} className="break-inside-avoid group relative bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={photo.url} 
                  alt={photo.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h4 className="font-black text-estacio-navy italic uppercase text-lg mb-2">{photo.title}</h4>
                <p className="text-xs text-slate-400 font-bold leading-relaxed">{photo.desc}</p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-indigo-500 shadow-xl">
                  <ExternalLink size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-center text-white mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full"></div>
          <h3 className="text-3xl font-black italic uppercase mb-6 tracking-tight">Tem fotos de algum evento?</h3>
          <p className="text-white/60 font-medium mb-12 max-w-xl mx-auto">
            Ajude-nos a construir essa memória coletiva. Envie seus registros de aulas práticas e eventos para nossa equipe de coordenação.
          </p>
          <a href="mailto:antonio.filho@estacio.br" className="inline-block bg-indigo-500 text-white px-10 py-5 rounded-[2rem] font-black uppercase italic tracking-widest text-[11px] hover:bg-white hover:text-estacio-navy transition-all shadow-xl shadow-indigo-500/20">
            Enviar Fotos
          </a>
        </div>

        <CoordinatorWidget tip="A faculdade não é apenas sobre bits e bytes, é sobre as conexões humanas que você faz. Participe ativamente e registre cada etapa do seu crescimento!" />
      </div>
    </div>
  );
};

export default GaleriaFotos;
