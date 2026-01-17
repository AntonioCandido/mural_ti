import React from 'react';
import { 
  UserCog, 
  Code, 
  Briefcase, 
  Gavel, 
  Lightbulb, 
  Users, 
  Calendar, 
  UserCheck 
} from 'lucide-react';
import { ViewType } from './types';

export const CARDS_DATA = [
  { id: ViewType.PROFISSIONAIS, title: 'Profissionais de TI', desc: 'Mercado, desafios e remuneração real.', icon: UserCog, color: 'group-hover:border-blue-500' },
  { id: ViewType.DESENVOLVIMENTO, title: 'Como Desenvolver', desc: 'Trilhas de estudo e recursos Awesome.', icon: Code, color: 'group-hover:border-estacio-cyan' },
  { id: ViewType.ESTAGIOS, title: 'Estágios e Empregos', desc: 'Sua primeira vaga e jobs remotos.', icon: Briefcase, color: 'group-hover:border-emerald-500' },
  { id: ViewType.CONCURSOS, title: 'Concursos', desc: 'Editais abertos e previstos para TI.', icon: Gavel, color: 'group-hover:border-estacio-amber' },
  { id: ViewType.EMPREENDEDOR, title: 'Empreendedorismo', desc: 'Transforme ideias em startups reais.', icon: Lightbulb, color: 'group-hover:border-purple-500' },
  { id: ViewType.PROJETOS, title: 'Grupo e Projetos', desc: 'Espaço de colaboração entre alunos.', icon: Users, color: 'group-hover:border-orange-500' },
  { id: ViewType.EVENTOS, title: 'Eventos de TI', desc: 'Calendário de conferências 2026.', icon: Calendar, color: 'group-hover:border-pink-500' },
  { id: ViewType.COORDENADOR, title: 'Fale com o coordenador', desc: 'Atendimento e suporte acadêmico.', icon: UserCheck, color: 'group-hover:border-estacio-navy' },
];

export const CoordinatorWidget = () => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = ViewType.COORDENADOR;
  };

  return (
    <div className="mt-20 relative">
      <div className="absolute inset-0 bg-estacio-navy/5 blur-3xl rounded-full"></div>
      <div className="relative bg-white border border-slate-100 rounded-[3rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-estacio-cyan/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
        
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg shrink-0 ring-4 ring-estacio-cyan/20">
          <img 
            src="/candido.png" 
            alt="Coordenador Antônio Cândido" 
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Antonio+Candido&background=003399&color=fff&size=200';
            }}
          />
        </div>
        
        <div className="flex-grow text-center md:text-left">
          <div className="inline-block px-4 py-1 bg-estacio-navy/10 rounded-full mb-4">
            <h4 className="text-estacio-navy font-black text-[10px] uppercase tracking-[0.2em]">Dica do Coordenador</h4>
          </div>
          <p className="text-slate-700 italic font-semibold text-lg md:text-xl leading-relaxed mb-4">
            "Meu papel é garantir que sua jornada acadêmica seja o trampolim para o seu sucesso profissional."
          </p>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <p className="font-black text-estacio-navy text-sm italic uppercase tracking-tight">ANTONIO CANDIDO DE OLIVEIRA FILHO</p>
            <span className="hidden md:block w-1.5 h-1.5 bg-estacio-cyan rounded-full"></span>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Coordenação ADS & Ciência da Computação</p>
          </div>
        </div>
        
        <a 
          href="#/fale-com-o-coordenador" 
          onClick={handleNav}
          className="shrink-0 bg-estacio-navy text-white px-8 py-4 rounded-2xl font-black uppercase italic tracking-widest text-xs hover:bg-black hover:scale-105 transition-all shadow-lg shadow-estacio-navy/20"
        >
          Agendar Conversa
        </a>
      </div>
    </div>
  );
};