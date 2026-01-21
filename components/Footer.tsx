
import React from 'react';
import { ViewType } from '../types';
import { ExternalLink, Linkedin, Mail, Globe, BookOpen, Camera, Link as LinkIcon, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Carreira TI', href: ViewType.PROFISSIONAIS },
    { label: 'Vagas e Estágios', href: ViewType.ESTAGIOS },
    { label: 'Concursos Públicos', href: ViewType.CONCURSOS },
    { label: 'Links Oficiais', href: ViewType.LINKS },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    if (target.startsWith('#')) {
      e.preventDefault();
      window.location.hash = target;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-20 border-t border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-estacio-navy/10 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Info */}
          <div className="flex flex-col items-start">
            <div className="mb-8">
              <span className="text-white font-black italic uppercase tracking-tighter text-2xl leading-tight block">
                Mural Ti
              </span>
              <span className="text-estacio-cyan font-bold text-[10px] uppercase tracking-[0.3em] mt-1 block">
                Estácio de Sá
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-8 opacity-60 font-medium">
              O hub de apoio estratégico ao estudante de tecnologia, conectando você às ferramentas oficiais, trilhas de estudo e ao mercado global.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/sindresorhus/awesome" 
                target="_blank"
                rel="noopener noreferrer"
                title="Repositório Awesome"
                className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-white hover:text-estacio-navy transition-all duration-300 border border-white/5"
              >
                <OpenSourceIcon size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/antonio-candido-oliveira-filho-b2028336" 
                target="_blank" 
                rel="noopener noreferrer"
                title="LinkedIn do Coordenador"
                className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 border border-white/5"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:antonio.filho@estacio.br" 
                title="E-mail Acadêmico"
                className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-estacio-amber hover:text-estacio-navy transition-all duration-300 border border-white/5"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-[0.2em] mb-8 italic border-l-4 border-estacio-cyan pl-4">Explorar</h4>
            <ul className="space-y-5 text-[11px] font-black uppercase tracking-widest">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-estacio-cyan transition-colors flex items-center gap-3 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-estacio-cyan transition-colors"></span>
                    {link.label}
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Community */}
          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-[0.2em] mb-8 italic border-l-4 border-estacio-amber pl-4">Comunidade</h4>
            <ul className="space-y-5 text-[11px] font-black uppercase tracking-widest">
              <li>
                <a href={ViewType.DESENVOLVIMENTO} onClick={(e) => handleLinkClick(e, ViewType.DESENVOLVIMENTO)} className="hover:text-estacio-cyan transition-colors flex items-center gap-3 group">
                  <BookOpen size={16} className="text-estacio-cyan" />
                  Trilhas de Estudo
                </a>
              </li>
              <li>
                <a href={ViewType.GALERIA} onClick={(e) => handleLinkClick(e, ViewType.GALERIA)} className="hover:text-estacio-cyan transition-colors flex items-center gap-3 group">
                  <Camera size={16} className="text-indigo-500" />
                  Galeria de Fotos
                </a>
              </li>
              <li>
                <a href={ViewType.EVENTOS} onClick={(e) => handleLinkClick(e, ViewType.EVENTOS)} className="hover:text-estacio-amber transition-colors flex items-center gap-3 group">
                  <Globe size={16} className="text-estacio-amber" />
                  Agenda Tech 2026
                </a>
              </li>
            </ul>
          </div>

          {/* Academic Info */}
          <div className="lg:pl-8">
            <h4 className="text-white font-black uppercase text-xs tracking-[0.2em] mb-8 italic border-l-4 border-white/20 pl-4">Coordenação</h4>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-3">ADS & Ciência da Computação</p>
            <p className="text-lg font-black text-white italic mb-6 tracking-tighter uppercase leading-none">
              ANTONIO CANDIDO FILHO
            </p>
            <div className="bg-white/5 p-6 rounded-[2rem] border border-white/5 backdrop-blur-sm group hover:border-estacio-cyan/30 transition-all">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck size={12} className="text-estacio-cyan" />
                <p className="text-[9px] font-black uppercase tracking-widest text-estacio-cyan">Suporte Acadêmico</p>
              </div>
              <p className="text-xs font-bold text-white/80 group-hover:text-white transition-colors">antonio.filho@estacio.br</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-12 border-t border-white/5 flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8 text-[9px] font-black uppercase tracking-[0.3em] text-slate-600">
             <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
                <span>SISTEMAS ONLINE</span>
             </div>
             <span className="hidden md:block opacity-30">|</span>
             <span>© 2026 MURAL TI</span>
             <span className="hidden md:block opacity-30">|</span>
             <span>ESTÁCIO R9 & TOM JOBIM</span>
          </div>
          <p className="text-[10px] font-bold text-slate-700 text-center leading-relaxed max-w-4xl italic">
            "Portal acadêmico informativo para alunos de TI. A Estácio de Sá não detém responsabilidade editorial sobre as opiniões e links de terceiros aqui publicados."
          </p>
        </div>
      </div>
    </footer>
  );
};

const OpenSourceIcon = ({ size }: { size: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default Footer;
