
import React from 'react';
import { ViewType } from '../types';
import { 
  Linkedin, 
  Mail, 
  Globe, 
  BookOpen, 
  Camera, 
  ShieldCheck, 
  Github, 
  Sparkles, 
  Terminal, 
  Cpu, 
  Layers
} from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Mercado de TI', href: ViewType.PROFISSIONAIS },
    { label: 'Carreira & Vagas', href: ViewType.ESTAGIOS },
    { label: 'Editais Abertos', href: ViewType.CONCURSOS },
    { label: 'Nossa História', href: ViewType.CURIOSIDADES },
    { label: 'Projetos Alunos', href: ViewType.PROJETOS },
    { label: 'SIA / Portais', href: ViewType.LINKS },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    if (target.startsWith('#')) {
      e.preventDefault();
      window.location.hash = target;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#020617] text-slate-400 pt-24 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Background Decor Elements */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-estacio-navy/10 blur-[180px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-estacio-cyan/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand & Social Column */}
          <div className="flex flex-col items-start">
            <div className="mb-10 group cursor-default">
              <span className="text-white font-black italic uppercase tracking-tighter text-4xl leading-tight block group-hover:text-estacio-cyan transition-colors">
                MURAL <span className="text-estacio-cyan group-hover:text-white transition-colors">TI</span>
              </span>
              <div className="flex items-center gap-2 mt-2">
                <div className="h-[2px] w-8 bg-estacio-cyan"></div>
                <span className="text-slate-500 font-black text-[9px] uppercase tracking-[0.4em]">
                  ESTÁCIO DE SÁ
                </span>
              </div>
            </div>
            <p className="text-xs leading-relaxed mb-10 opacity-60 font-bold uppercase tracking-wider max-w-xs">
              O ecossistema definitivo de inteligência e carreira para o futuro engenheiro de software.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com", color: "hover:bg-white hover:text-black" },
                { icon: Linkedin, href: "https://linkedin.com", color: "hover:bg-blue-600 hover:text-white" },
                { icon: Mail, href: "mailto:antonio.filho@estacio.br", color: "hover:bg-estacio-amber hover:text-estacio-navy" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center transition-all duration-300 border border-white/5 group ${social.color}`}
                >
                  <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-white font-black uppercase text-[10px] tracking-[0.4em] mb-12 italic flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-estacio-cyan rounded-full"></span> MAPA DO HUB
            </h4>
            <ul className="grid grid-cols-1 gap-5 text-[11px] font-black uppercase tracking-widest">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-estacio-cyan transition-all flex items-center gap-4 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-estacio-cyan group-hover:scale-150 transition-all"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience Column */}
          <div>
            <h4 className="text-white font-black uppercase text-[10px] tracking-[0.4em] mb-12 italic flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-estacio-amber rounded-full"></span> LABS & EXPERIENCE
            </h4>
            <ul className="space-y-6 text-[11px] font-black uppercase tracking-widest">
              {[
                { label: 'Trilhas de Estudo', href: ViewType.DESENVOLVIMENTO, icon: BookOpen, color: 'text-estacio-cyan', bg: 'bg-estacio-cyan/10' },
                { label: 'Galeria Social', href: ViewType.GALERIA, icon: Camera, color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
                { label: 'Eventos Globais', href: ViewType.EVENTOS, icon: Globe, color: 'text-pink-500', bg: 'bg-pink-500/10' },
                { label: 'Startup Mindset', href: ViewType.EMPREENDEDOR, icon: Sparkles, color: 'text-estacio-amber', bg: 'bg-estacio-amber/10' }
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.href} onClick={(e) => handleLinkClick(e, item.href)} className="hover:text-white transition-all flex items-center gap-4 group">
                    <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center ${item.color} group-hover:scale-110 transition-all border border-white/5`}>
                      <item.icon size={16} />
                    </div>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coordination Card Column */}
          <div className="lg:pl-6">
            <h4 className="text-white font-black uppercase text-[10px] tracking-[0.4em] mb-12 italic flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-slate-500 rounded-full"></span> SUPORTE DIRETO
            </h4>
            <div className="bg-gradient-to-br from-white/5 to-transparent p-8 rounded-[3rem] border border-white/10 backdrop-blur-xl group hover:border-estacio-cyan/30 transition-all">
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500 mb-2">Coordenação do curso</p>
              <p className="text-lg font-black text-white italic mb-6 tracking-tighter uppercase leading-tight">
                ANTONIO <span className="text-estacio-cyan">CANDIDO</span>
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={14} className="text-emerald-500" />
                  <span className="text-[10px] font-bold text-slate-300 uppercase">Atendimento Prioritário</span>
                </div>
                <p className="text-[10px] font-medium text-slate-500 leading-relaxed italic">
                  Suporte acadêmico exclusivo para alunos das unidades R9 e Tom Jobim.
                </p>
              </div>

              <a 
                href="mailto:antonio.filho@estacio.br"
                className="flex items-center justify-center gap-2 py-4 bg-estacio-navy text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-estacio-cyan hover:text-estacio-navy transition-all shadow-xl shadow-black/20"
              >
                CONTATAR AGORA
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar - Compacted & Raised */}
        <div className="pt-8 border-t border-white/5 flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-8 text-[10px] font-black uppercase tracking-[0.4em]">
             <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-slate-500">SYSTEMS OPERATIONAL</span>
             </div>
             <span className="text-slate-700">© 2026 MURAL TI HUB</span>
             <span className="text-slate-700">UNIDADES R9 & TOM JOBIM</span>
          </div>
          
          <div className="max-w-4xl text-center">
            <p className="text-[10px] font-bold text-slate-500 leading-relaxed italic uppercase tracking-normal opacity-70">
              "Este portal possui finalidade exclusivamente pedagógica e informativa, servindo como ambiente de prática acadêmica para estudantes de TI. Em conformidade com o Marco Civil da Internet, a Estácio de Sá não exerce controle editorial prévio sobre as opiniões e links de terceiros aqui veiculados, sendo a responsabilidade pelo conteúdo integralmente atribuída aos seus respectivos autores ou provedores."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
