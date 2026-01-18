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

  return (
    <div className="mt-20 relative">
      <div className="absolute inset-0 bg-estacio-navy/5 blur-3xl rounded-full"></div>
      <div className="relative bg-white border border-slate-100 rounded-[3.5rem] p-8 md:p-14 shadow-2xl shadow-slate-200/50 flex flex-col md:flex-row items-center gap-8 md:gap-14 max-w-5xl mx-auto overflow-hidden">
        
        {/* Avatar Circle */}
        <div className="relative shrink-0">
          <div className="absolute inset-0 bg-estacio-cyan/10 blur-xl rounded-full scale-125"></div>
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-estacio-navy flex items-center justify-center ring-8 ring-estacio-cyan/5">
            <img 
              src="/candido.png" 
              alt="Coordenador Antônio Cândido" 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLElement;
                target.style.display = 'none';
                if (target.nextElementSibling) (target.nextElementSibling as HTMLElement).style.display = 'flex';
              }}
            />
            <span className="hidden text-white font-black text-4xl md:text-5xl italic tracking-tighter">AC</span>
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
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Coordenação ADS & Ciência da Computação</p>
            </div>
          </div>
        </div>
        
        <a 
          href="#/fale-com-o-coordenador" 
          onClick={handleNav}
          className="shrink-0 bg-estacio-navy text-white px-10 py-5 rounded-[2rem] font-black uppercase italic tracking-widest text-[11px] hover:bg-estacio-cyan hover:text-estacio-navy hover:scale-105 transition-all shadow-xl shadow-estacio-navy/20"
        >
          Agendar Conversa
        </a>
      </div>
    </div>
  );
};