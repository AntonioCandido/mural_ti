
import React from 'react';
import { CoordinatorWidget } from '../constants';
import { ChevronLeft, Play, Youtube, ExternalLink, Clock, Info } from 'lucide-react';

const RECOMMENDED_VIDEOS = [
  {
    title: "Clean Code - Uncle Bob - Lesson 1",
    desc: "A aula inaugural do criador do Clean Code, Robert C. Martin. Essencial para entender a filosofia por trás de softwares robustos e profissionais.",
    duration: "1h 12min",
    category: "Engenharia",
    link: "https://youtu.be/pAN9tLbYNH8?si=UPVDSF45rMTYu-BX",
    videoId: "pAN9tLbYNH8"
  },
  {
    title: "What is Generative AI? | Generative AI Explained",
    desc: "Um mergulho técnico e acessível sobre o funcionamento das IAs Generativas e como elas estão redefinindo a criação de valor na tecnologia.",
    duration: "14 min",
    category: "Inovação",
    link: "https://youtu.be/DjUB-yVWT2A?si=1-I5oYN2r6rULcdv",
    videoId: "DjUB-yVWT2A"
  },
  {
    title: "TI: Guia de Carreira (O que estudar? Qual área escolher?)",
    desc: "Um mapa completo para quem está começando, discutindo trilhas de especialização e as demandas reais das empresas atuais.",
    duration: "21 min",
    category: "Carreira",
    link: "https://youtu.be/JaM5zJ5ckI8?si=ADZgWUVCYCMkkO0y",
    videoId: "JaM5zJ5ckI8"
  },
  {
    title: "MERCADO DE TI: SALÁRIOS, VAGAS E O FUTURO DA ÁREA",
    desc: "Análise realista sobre as flutuações do mercado, expectativas salariais por nível e as profissões que serão tendência nos próximos anos.",
    duration: "25 min",
    category: "Mercado",
    link: "https://youtu.be/O9-0RFvjvzw?si=rfSl4zbNa9EOkEfM",
    videoId: "O9-0RFvjvzw"
  },
  {
    title: "O que é Cybersecurity? (Guia para iniciantes)",
    desc: "Os pilares da segurança da informação explicados de forma simples, focando no que um desenvolvedor precisa saber para proteger seus dados.",
    duration: "12 min",
    category: "Segurança",
    link: "https://youtu.be/DaeJJo0VyX0?si=1p9Amx3SGLADxMBx",
    videoId: "DaeJJo0VyX0"
  },
  {
    title: "Como conseguir o primeiro emprego em TI",
    desc: "Estratégias práticas de currículo, portfólio e postura em entrevistas para quem busca quebrar a barreira da primeira contratação.",
    duration: "18 min",
    category: "Empregabilidade",
    link: "https://youtu.be/1s8o3lZ6keY?si=LsCpRWdS0lF7aktx",
    videoId: "1s8o3lZ6keY"
  },
  {
    title: "Como estudar programação do jeito certo",
    desc: "Fuja da 'paralisia por tutorial'. Aprenda métodos de estudo ativo que realmente fixam o conhecimento técnico e aceleram sua evolução.",
    duration: "15 min",
    category: "Educação",
    link: "https://youtu.be/gb2btn2skFU?si=_ExgmziDOc6XK_b1",
    videoId: "gb2btn2skFU"
  }
];

const VideosObrigatorios: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20 fade-in">
      {/* Botão Voltar */}
      <a href="#/home" className="group inline-flex items-center gap-3 text-slate-400 hover:text-estacio-navy font-black uppercase text-[10px] tracking-widest mb-16 transition-all">
        <span className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-estacio-navy transition-colors">
          <ChevronLeft size={14} />
        </span>
        Voltar para a Home
      </a>

      <div className="max-w-6xl mx-auto">
        {/* Header da Seção */}
        <header className="mb-20">
          <div className="flex items-center gap-5 mb-8">
            <div className="w-14 h-14 bg-red-600 rounded-[1.25rem] flex items-center justify-center text-white shadow-xl shadow-red-600/20 rotate-3 group-hover:rotate-0 transition-transform">
              <Play size={28} fill="currentColor" />
            </div>
            <div>
              <h2 className="text-4xl md:text-7xl font-black text-estacio-navy italic uppercase tracking-tighter leading-none">
                Vídeos <span className="text-red-600">Obrigatórios</span>
              </h2>
            </div>
          </div>
          <p className="text-xl text-slate-500 font-medium max-w-3xl leading-relaxed flex items-start gap-4">
            <Info className="text-red-600 shrink-0 mt-1" size={20} />
            Utilizamos os títulos oficiais do YouTube para facilitar sua busca. Sinopses curadas pela coordenação para otimizar seu tempo.
          </p>
        </header>

        {/* Grid de Vídeos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24">
          {RECOMMENDED_VIDEOS.map((video, i) => (
            <a 
              key={i} 
              href={video.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white rounded-[4rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all flex flex-col sm:flex-row h-full"
            >
              {/* Miniatura do Vídeo */}
              <div className="sm:w-[45%] aspect-video sm:aspect-auto bg-slate-900 flex items-center justify-center relative overflow-hidden">
                <img 
                  src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`} 
                  alt={video.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  onError={(e) => {
                    // Fallback para hqdefault se maxres não existir
                    (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                
                {/* Botão de Play Central */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white shadow-2xl scale-75 group-hover:scale-100 transition-transform">
                      <Play size={32} fill="currentColor" />
                   </div>
                </div>

                {/* Badge de Duração */}
                <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2 border border-white/10 shadow-xl z-10">
                  <Clock size={12} className="text-red-500" />
                  <span className="text-[10px] text-white font-black uppercase tracking-widest">{video.duration}</span>
                </div>
              </div>

              {/* Conteúdo / Sinopse */}
              <div className="p-10 sm:w-[55%] flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                   <span className="w-8 h-[2px] bg-red-600"></span>
                   <span className="text-[9px] font-black uppercase tracking-widest text-red-600">{video.category}</span>
                </div>
                
                <h4 className="font-black text-estacio-navy italic uppercase text-xl mb-4 leading-[1.1] group-hover:text-red-600 transition-colors">
                  {video.title}
                </h4>
                
                <p className="text-xs text-slate-500 font-bold leading-relaxed mb-8 italic">
                  "{video.desc}"
                </p>
                
                <div className="mt-auto flex items-center gap-3 text-[10px] font-black uppercase text-red-600 tracking-[0.2em] group-hover:gap-5 transition-all">
                  Assistir no YouTube <ExternalLink size={14} />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer de Destaque */}
        <div className="bg-slate-900 rounded-[5rem] p-12 md:p-20 text-center text-white mb-20 relative overflow-hidden border border-white/5">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-estacio-cyan/5 blur-[120px] rounded-full"></div>
          
          <h3 className="text-3xl md:text-4xl font-black italic uppercase mb-6 tracking-tighter relative z-10">
            Conhecimento que <span className="text-red-600 underline decoration-wavy underline-offset-8">liberta</span>
          </h3>
          <p className="text-white/50 font-medium mb-12 max-w-xl mx-auto text-sm leading-relaxed relative z-10">
            Esta seleção foi feita para que você não perca tempo com conteúdos superficiais. Cada vídeo aqui é uma peça fundamental do seu quebra-cabeça profissional.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
             <div className="px-8 py-4 border border-white/10 rounded-3xl bg-white/5 flex items-center gap-3 backdrop-blur-sm">
                <Youtube size={18} className="text-red-600" />
                <span className="text-[10px] font-black uppercase tracking-widest">Títulos Oficiais</span>
             </div>
             <div className="px-8 py-4 border border-white/10 rounded-3xl bg-white/5 flex items-center gap-3 backdrop-blur-sm">
                <Play size={18} className="text-red-600" />
                <span className="text-[10px] font-black uppercase tracking-widest">Acesso Direto</span>
             </div>
          </div>
        </div>

        <CoordinatorWidget tip="Assista aos vídeos de Clean Code e Arquitetura com papel e caneta na mão. Os conceitos apresentados pelo Uncle Bob são a base de qualquer sistema de larga escala." />
      </div>
    </div>
  );
};

export default VideosObrigatorios;
