
import React from 'react';
import { ViewType } from '../types';
import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Carreira TI', href: ViewType.PROFISSIONAIS },
    { label: 'Vagas e Estágios', href: ViewType.ESTAGIOS },
    { label: 'Concursos Públicos', href: ViewType.CONCURSOS },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    if (target.startsWith('#')) {
      e.preventDefault();
      window.location.hash = target;
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-white font-black italic uppercase tracking-tighter text-lg">Mural TI</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 opacity-70">
              O Mural digital para o aluno de TI da Estácio. Informação centralizada para o seu sucesso.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-estacio-cyan hover:text-estacio-navy transition-all">
                <OpenSourceIcon size={18} />
              </a>
              <a href="https://www.linkedin.com/in/antonio-candido-oliveira-filho-b2028336" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="mailto:antonio.filho@estacio.br" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-estacio-amber hover:text-estacio-navy transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-white font-black uppercase text-xs tracking-widest mb-6 italic border-l-2 border-estacio-cyan pl-4">Acesso Rápido</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-tight">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-estacio-cyan transition-colors flex items-center gap-2 group"
                  >
                    {link.label}
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h4 className="text-white font-black uppercase text-xs tracking-widest mb-6 italic border-l-2 border-estacio-amber pl-4">Recursos</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-tight">
              <li><a href={ViewType.DESENVOLVIMENTO} onClick={(e) => handleLinkClick(e, ViewType.DESENVOLVIMENTO)} className="hover:text-estacio-amber transition-colors">Trilhas de Estudo</a></li>
              <li><a href={ViewType.EVENTOS} onClick={(e) => handleLinkClick(e, ViewType.EVENTOS)} className="hover:text-estacio-amber transition-colors">Eventos 2026</a></li>
              <li><a href={ViewType.EMPREENDEDOR} onClick={(e) => handleLinkClick(e, ViewType.EMPREENDEDOR)} className="hover:text-estacio-amber transition-colors">Startups e Negócios</a></li>
            </ul>
          </div>

          {/* Contact / Coordination */}
          <div className="col-span-1">
            <h4 className="text-white font-black uppercase text-xs tracking-widest mb-6 italic border-l-2 border-white/20 pl-4">Coordenação</h4>
            <p className="text-sm mb-2 font-medium">ADS e Ciência da Computação</p>
            <p className="text-sm font-black text-estacio-cyan italic mb-4">ANTONIO CANDIDO DE OLIVEIRA FILHO</p>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
              <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">E-mail Acadêmico</p>
              <p className="text-xs font-bold text-white">antonio.filho@estacio.br</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-800 flex flex-col items-center">
          <p className="text-[10px] font-bold text-white/30 text-center leading-relaxed max-w-4xl">
            Este projeto foi desenvolvido exclusivamente para fins de estudo e exercício acadêmico. A instituição Estácio de Sá não detém responsabilidade editorial sobre as informações e opiniões publicadas nesta página.
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
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default Footer;
