
import React from 'react';
import { ViewType } from './types';
import { 
  Lightbulb, 
  Smartphone, 
  Briefcase, 
  Info, 
  Medal, 
  Users, 
  Megaphone,
  Rocket,
  Code2,
  Cpu,
  CalendarDays,
  UserCheck
} from 'lucide-react';

export interface CardData {
  id: ViewType;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const CARDS: CardData[] = [
  {
    id: ViewType.PROFISSIONAIS,
    title: 'Profissionais de TI',
    description: 'Carreira, desafios e motivação para o mercado de tecnologia.',
    icon: 'UserCheck',
    color: 'text-cyan-500',
  },
  {
    id: ViewType.APP_EXEMPLO,
    title: 'Desenvolvimento',
    description: 'A maior curadoria de recursos (Awesome List) para desenvolvedores.',
    icon: 'Code2',
    color: 'text-blue-400',
  },
  {
    id: ViewType.ESTAGIOS,
    title: 'Estágios e Empregos',
    description: 'Carreira nacional, internacional e dicas para sua primeira vaga.',
    icon: 'Briefcase',
    color: 'text-blue-600',
  },
  {
    id: ViewType.CONCURSOS,
    title: 'Concursos Públicos',
    description: 'Editais de TI, dicas de estudo e estabilidade na carreira pública.',
    icon: 'Medal',
    color: 'text-purple-500',
  },
  {
    id: ViewType.EVENTOS,
    title: 'Eventos de TI',
    description: 'Calendário de conferências nacionais e internacionais remotas.',
    icon: 'CalendarDays',
    color: 'text-pink-500',
  },
  {
    id: ViewType.PROJETOS,
    title: 'Grupo e Projetos',
    description: 'Espaço de colaboração e troca de experiências entre alunos.',
    icon: 'Users',
    color: 'text-orange-500',
  },
  {
    id: ViewType.EMPREENDEDOR,
    title: 'Empreendedorismo',
    description: 'Transforme suas ideias em startups e negócios reais.',
    icon: 'Rocket',
    color: 'text-amber-500',
  },
  {
    id: ViewType.COORDENADOR,
    title: 'Fale com o coordenador',
    description: 'Suporte acadêmico e orientações com o Prof. Antônio Cândido.',
    icon: 'Megaphone',
    color: 'text-cyan-600',
  },
];

export const getIcon = (name: string, size: number = 24) => {
  switch (name) {
    case 'Lightbulb': return <Lightbulb size={size} />;
    case 'Smartphone': return <Smartphone size={size} />;
    case 'Briefcase': return <Briefcase size={size} />;
    case 'Info': return <Info size={size} />;
    case 'Medal': return <Medal size={size} />;
    case 'Users': return <Users size={size} />;
    case 'Megaphone': return <Megaphone size={size} />;
    case 'Rocket': return <Rocket size={size} />;
    case 'Code2': return <Code2 size={size} />;
    case 'Cpu': return <Cpu size={size} />;
    case 'CalendarDays': return <CalendarDays size={size} />;
    case 'UserCheck': return <UserCheck size={size} />;
    default: return <Info size={size} />;
  }
};
