
import React from 'react';
import { ExternalLink, Book, ShieldCheck, MessageSquare, Mail, Globe, Play, Info, BookOpen, Lightbulb } from 'lucide-react';
import CoordinatorWidget from '../components/CoordinatorWidget.tsx';
import BackButton from '../components/BackButton.tsx';

const OFFICIAL_LINKS = [
  { title: 'SIA', desc: 'Consulta de notas, boletos e requerimentos.', url: 'https://sia.estacio.br/', icon: ShieldCheck, color: 'bg-estacio-navy', tag: 'Gestão' },
  { title: 'SAVA', desc: 'Videoaulas e conteúdos interativos.', url: 'https://estudante.estacio.br/', icon: MessageSquare, color: 'bg-blue-600', tag: 'Aulas' },
];

const LinksEssenciais: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20 fade-in">
      <BackButton />

      <div className="max-w-6xl mx-auto">
        <header className="mb-16">
          <h2 className="text-4xl md:text-7xl font-black text-estacio-navy italic uppercase tracking-tighter mb-8 leading-none">
            Links <span className="text-slate-400">Oficiais</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {OFFICIAL_LINKS.map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className={`group relative p-10 rounded-[3.5rem] border border-slate-100 shadow-2xl transition-all flex flex-col items-start ${link.color}`}>
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                <link.icon size={32} className={link.color.replace('bg-', 'text-')} />
              </div>
              <h4 className="font-black italic uppercase text-xl mb-4 text-white">{link.title}</h4>
              <p className="text-[11px] font-bold text-white/80 mb-8">{link.desc}</p>
              <div className="mt-auto flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-white">
                Acessar Portal <ExternalLink size={12} />
              </div>
            </a>
          ))}
        </div>

        <CoordinatorWidget tip="A organização é a chave para o sucesso acadêmico." />
      </div>
    </div>
  );
};

export default LinksEssenciais;
