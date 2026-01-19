
import React from 'react';
import { CoordinatorWidget } from '../constants';
import { ChevronLeft, Play, Youtube, ExternalLink, Clock, Info, Bookmark, Sparkles } from 'lucide-react';

const RECOMMENDED_VIDEOS = [
  {
    title: "Intel 4004: O Microprocessador que Mudou o Mundo",
    desc: "A fascinante história do primeiro microprocessador comercial. Descubra como um pequeno chip de silício deu início à revolução digital que vivemos hoje.",
    duration: "15 min",
    category: "Hardware & História",
    link: "https://youtu.be/pAN9tLbYNH8",
    videoId: "pAN9tLbYNH8",
    featured: false
  },
  {
    title: "QUAL a MELHOR LINGUAGEM para PROGRAMAÇÃO?",
    desc: "A pergunta de um milhão de dólares. Analisamos o mercado, ecossistemas e tendências para ajudar você a escolher sua próxima stack estratégica.",
    duration: "14 min",
    category: "Carreira & Dev",
    link: "https://youtu.be/zTMvVEBh9mY",
    videoId: "zTMvVEBh9mY",
    featured: false
  },
  {
    title: "Como CRIAR UMA INTRANET completa em 20 MINUTOS!",
    desc: "Mão na massa com HumHub. Aprenda a configurar uma rede social corporativa completa utilizando ferramentas open-source de alto nível.",
    duration: "21 min",
    category: "Sistemas & Infra",
    link: "https://youtu.be/6Q0R9m7o6Kk",
    videoId: "6Q0R9m7o6Kk",
    featured: false
  },
  {
    title: "Jobs - filme completo (dublado)",
    desc: "Jobs- O filme conta a história de Steve Jobs, que criou a Apple começando em uma garagem e uma visão de futuro pra negócios muito aguçada.",
    duration: "128 min",
    category: "Cine Biografia",
    link: "https://youtu.be/O9-0RFvjvzw?si=5PYB1Vv-P9IKkbEY",
    videoId: "O9-0RFvjvzw",
    featured: true
  },
  {
    title: "Piratas do Vale do Silício",
    desc: "O duelo épico entre Jobs e Gates. Entenda como a disputa entre Apple e Microsoft moldou a interface gráfica e o conceito moderno de computador pessoal.",
    duration: "95 min",
    category: "História & Cinema",
    link: "https://www.youtube.com/watch?v=X-XoXp_XwXw",
    videoId: "X-XoXp_XwXw",
    featured: true
  }
];

const VideosObrigatorios: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20 fade-in bg-slate-50/40">
      {/* Navegação Superior */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-20 max-w-6xl mx-auto gap-6">
        <a href="#/home" className="group inline-flex items-center gap-3 text-slate-400 hover:text-estacio-navy font-black uppercase text-[10px] tracking-widest transition-all">
          <span className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:bg-estacio-navy group-hover:text-white group-hover:border-estacio-navy shadow-sm transition-all duration-300">
            <ChevronLeft size={18} />
          </span>
          Voltar para Home
        </a>
        <div className="flex items-center gap-3 bg-red-600/10 px-6 py-3 rounded-2xl border border-red-600/20">
          <Youtube size={18} className="text-red-600 animate-pulse" />
          <span className="text-[10px] font-black text-red-700 uppercase tracking-[0.2em]">Curadoria Acadêmica</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header Hero Design */}
        <header className="mb-24 relative text-center md:text-left">
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-red-600/5 blur-[80px] rounded-full"></div>
          <div className="flex items-center gap-6 mb-8 justify-center md:justify-start">
             <div className="w-2 h-12 bg-red-600 rounded-full"></div>
             <h2 className="text-5xl md:text-8xl font-black text-estacio-navy italic uppercase tracking-tighter leading-none">
              Vídeos <span className="text-red-600">Obrigatórios</span>
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-3xl leading-relaxed mx-auto md:mx-0">
            Seleção técnica da <span className="text-estacio-navy font-black italic underline decoration-red-600 decoration-4 underline-offset-8">Coordenação de TI</span> para impulsionar sua carreira.
          </p>
        </header>

        {/* Cinematic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
          {RECOMMENDED_VIDEOS.map((video, i) => (
            <a 
              key={i} 
              href={video.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex flex-col h-full bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] transition-all duration-500 border border-slate-100"
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
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                
                {/* Floating Tags */}
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <span className="px-4 py-1.5 bg-white/20 backdrop-blur-xl border border-white/20 rounded-xl text-[8px] font-black uppercase tracking-widest text-white shadow-xl flex items-center gap-2">
                        {video.featured && <Sparkles size={10} className="text-amber-400" />}
                        {video.category}
                    </span>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-6 left-6 flex items-center gap-3 px-4 py-2 bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl">
                  <Clock size={12} className="text-red-500" />
                  <span className="text-[10px] text-white font-black tracking-widest">{video.duration}</span>
                </div>

                {/* Animated Play Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 shadow-2xl shadow-red-600/40">
                        <Play size={28} fill="currentColor" className="ml-1" />
                    </div>
                </div>
              </div>

              {/* Text Section */}
              <div className="p-10 flex flex-col flex-grow relative">
                <h4 className="text-2xl font-black text-estacio-navy italic uppercase tracking-tight mb-4 group-hover:text-red-600 transition-colors duration-300 leading-[1.1]">
                  {video.title}
                </h4>
                
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-10 line-clamp-3 italic opacity-80">
                  "{video.desc}"
                </p>
                
                <div className="mt-auto flex items-center justify-between pt-8 border-t border-slate-50">
                   <div className="flex items-center gap-3 text-[10px] font-black uppercase text-red-600 tracking-[0.2em] group-hover:gap-5 transition-all">
                      ASSISTIR AGORA <ExternalLink size={14} />
                   </div>
                </div>
              </div>

              {/* Feature Indicator */}
              {video.featured && (
                <div className="absolute top-0 right-0 w-2 h-full bg-red-600/20"></div>
              )}
            </a>
          ))}
        </div>

        {/* Info Banner */}
        <div className="bg-estacio-navy rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden mb-24 shadow-2xl">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-600/20 to-transparent"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-estacio-cyan/10 blur-[120px] rounded-full"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-2/3">
                <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 bg-white/10 rounded-full border border-white/10 backdrop-blur-md">
                    <Info className="text-estacio-cyan" size={18} />
                    <span className="text-[10px] font-black uppercase tracking-widest text-estacio-cyan">Dica de Estudo</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-8 leading-none">
                  Filtramos o ruído para <span className="text-red-600">você focar.</span>
                </h3>
                <p className="text-xl text-white/50 font-medium leading-relaxed mb-12 max-w-2xl">
                  O YouTube está cheio de conteúdo. Aqui, selecionamos apenas o que realmente vai moldar seu pensamento crítico como engenheiro.
                </p>
            </div>
            
            <div className="lg:w-1/3 w-full">
                <div className="p-10 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] shadow-inner">
                    <h5 className="font-black italic uppercase tracking-widest text-lg mb-8 text-estacio-cyan border-b border-white/10 pb-4">Checklist</h5>
                    <ul className="space-y-6">
                        {[
                            "Assista em velocidade 1.25x para otimizar.",
                            "Tome notas sobre as stacks mencionadas.",
                            "Analise as decisões de UI/UX apresentadas.",
                            "Compartilhe insights com sua turma."
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-4 text-sm font-bold text-white/70 italic">
                                <div className="mt-1.5 w-2 h-2 rounded-full bg-red-600 shrink-0"></div>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
          </div>
        </div>

        <CoordinatorWidget tip="A tecnologia muda todo dia, mas a história da inovação se repete. Aprenda com os pioneiros para construir sua própria jornada de sucesso." />
      </div>
    </div>
  );
};

export default VideosObrigatorios;
