import React from 'react';
import { 
  UserCog, 
  Code, 
  Briefcase, 
  Gavel, 
  Lightbulb, 
  Users, 
  Calendar, 
  UserCheck,
  Images,
  Link as LinkIcon,
  Sparkles,
  Play
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
  { id: ViewType.VIDEOS, title: 'Vídeos Essenciais', desc: 'Conteúdo audiovisual fundamental para TI.', icon: Play, color: 'group-hover:border-red-500' },
  { id: ViewType.GALERIA, title: 'Galeria de Fotos', desc: 'Registros de eventos e aulas práticas.', icon: Images, color: 'group-hover:border-indigo-500' },
  { id: ViewType.LINKS, title: 'Links Oficiais', desc: 'SIA, Portal, Biblioteca e Office 365.', icon: LinkIcon, color: 'group-hover:border-teal-500' },
  { id: ViewType.CURIOSIDADES, title: 'Curiosidades Estácio', desc: 'História, números e fatos que inspiram.', icon: Sparkles, color: 'group-hover:border-estacio-cyan' },
  { id: ViewType.COORDENADOR, title: 'Fale com o coordenador', desc: 'Atendimento e suporte acadêmico.', icon: UserCheck, color: 'group-hover:border-estacio-navy' },
];

interface CoordinatorWidgetProps {
  tip?: string;
}

export const CoordinatorWidget: React.FC<CoordinatorWidgetProps> = ({ 
  tip = "Meu papel é garantir que sua jornada acadêmica seja o trampolim para o seu sucesso profissional." 
}) => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = ViewType.COORDENADOR;
  };

  const coordinatorPhoto = "https://avatars.githubusercontent.com/u/9017112?s=400&u=14eb77bb805c4996785584f67a0544cf553042d4&v=4";

  return (
    <div className="mt-12 md:mt-16 relative">
      <div className="absolute inset-0 bg-estacio-navy/5 blur-3xl rounded-full"></div>
      <div className="relative bg-white border border-slate-100 rounded-[3.5rem] p-8 pt-24 md:p-14 md:pt-14 shadow-2xl shadow-slate-200/50 flex flex-col md:flex-row items-center gap-8 md:gap-14 max-w-5xl mx-auto overflow-visible">
        
        {/* Avatar Circle - Floating Higher Effect */}
        <div className="relative shrink-0 -mt-36 md:-mt-44 md:mb-0">
          <div className="absolute inset-0 bg-estacio-cyan/20 blur-2xl rounded-full scale-125 animate-pulse"></div>
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border-[8px] border-white shadow-2xl overflow-hidden bg-slate-100 flex items-center justify-center ring-12 ring-estacio-cyan/5 transition-transform hover:scale-105 duration-500">
            <img 
              src={coordinatorPhoto} 
              alt="Coordenador Antônio Cândido" 
              className="w-full h-full object-cover scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Antonio+Candido&background=003399&color=fff&size=256';
              }}
            />
          </div>
        </div>
        
        <div className="flex-grow text-center md:text-left">
          <div className="inline-block px-5 py-1.5 bg-estacio-navy/5 rounded-full mb-6">
            <h4 className="text-estacio-navy font-black text-[10px] uppercase tracking-[0.2em]">Dica do Coordenador</h4>
          </div>
          
          <p className="text-slate-700 italic font-bold text-xl md:text-2xl leading-relaxed mb-8 tracking-tight">
            "{tip}"
          </p>
          
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="space-y-1">
              <p className="font-black text-estacio-navy text-sm uppercase tracking-tight">ANTONIO CANDIDO DE OLIVEIRA FILHO</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Coordenação do curso</p>
            </div>
          </div>
        </div>
        
        <a 
          href="#/fale-com-o-coordenador" 
          onClick={handleNav}
          className="shrink-0 bg-estacio-navy text-white px-10 py-5 rounded-[2rem] font-black uppercase italic tracking-widest text-[11px] hover:bg-estacio-cyan hover:text-estacio-navy hover:scale-105 transition-all shadow-xl shadow-estacio-navy/20 w-full md:w-auto text-center"
        >
          Agendar Conversa
        </a>
      </div>
    </div>
  );
};