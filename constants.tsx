
import React from 'react';
import { ViewType } from './types';
import { 
  Lightbulb, 
  Smartphone, 
  Briefcase, 
  Info, 
  Medal, 
  Users, 
  Megaphone 
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
    id: ViewType.DICAS,
    title: 'Dicas de TI',
    description: 'Materiais de estudo, ferramentas e guias para acelerar seu aprendizado em TI.',
    icon: 'Lightbulb',
    color: 'text-yellow-500',
  },
  {
    id: ViewType.APP_EXEMPLO,
    title: 'Exemplo de App',
    description: 'Explore protótipos e aplicações desenvolvidas por nossos alunos.',
    icon: 'Smartphone',
    color: 'text-blue-400',
  },
  {
    id: ViewType.ESTAGIOS,
    title: 'Estágios e Empregos',
    description: 'Oportunidades de carreira selecionadas para o perfil Estácio.',
    icon: 'Briefcase',
    color: 'text-blue-600',
  },
  {
    id: ViewType.SAIBA_MAIS,
    title: 'Saiba mais',
    description: 'Informações sobre certificações, cursos extras e parcerias.',
    icon: 'Info',
    color: 'text-gray-400',
  },
  {
    id: ViewType.CONCURSOS,
    title: 'Concursos',
    description: 'Editais abertos na área de tecnologia para o serviço público.',
    icon: 'Medal',
    color: 'text-purple-500',
  },
  {
    id: ViewType.PROJETOS,
    title: 'Grupo e Projetos',
    description: 'Iniciativas de inovação e colaboração entre estudantes.',
    icon: 'Users',
    color: 'text-orange-500',
  },
  {
    id: ViewType.COORDENADOR,
    title: 'Fale com o coordenador',
    description: 'Dúvidas acadêmicas e orientações com o Prof. Antônio Cândido.',
    icon: 'Megaphone',
    color: 'text-cyan-500',
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
    default: return <Info size={size} />;
  }
};
