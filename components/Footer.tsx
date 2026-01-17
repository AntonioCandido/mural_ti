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
              <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                <span className="text-white font-bold italic">E</span>
              </div>
              <span className="text-white font-black italic uppercase tracking-tighter text-lg">Mural TI</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 opacity-70">
              O portal definitivo de recursos para o aluno de TI da Estácio. Informação centralizada para o seu sucesso.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-estacio-cyan hover:text-estacio-navy transition-all">
                <Github size={18} />
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
        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 text-center md:text-left">
            © 2026 Estácio de Sá • Todos os direitos reservados
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-white/30">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Acessibilidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;