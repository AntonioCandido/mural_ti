
import React from 'react';
import { 
  Lightbulb, 
  Smartphone, 
  Briefcase, 
  Info, 
  Medal, 
  Users,
  Code,
  Compass,
  Zap,
  MessageSquare
} from 'lucide-react';
import { ViewType, CardConfig } from './types';

export const CARDS: CardConfig[] = [
  {
    id: ViewType.DICAS,
    title: "Dicas de TI",
    description: "Mantenha-se atualizado com as melhores práticas de codificação, ferramentas e tendências do mercado.",
    icon: 'Lightbulb',
    color: 'text-blue-600'
  },
  {
    id: ViewType.APP_EXEMPLO,
    title: "Exemplo de App",
    description: "Explore protótipos e exemplos práticos de aplicações mobile e web para inspirar seus projetos.",
    icon: 'Smartphone',
    color: 'text-cyan-500'
  },
  {
    id: ViewType.ESTAGIOS,
    title: "Estágios e Empregos",
    description: "Vagas exclusivas e dicas de carreira para impulsionar sua entrada no mercado de tecnologia.",
    icon: 'Briefcase',
    color: 'text-yellow-600'
  },
  {
    id: ViewType.SAIBA_MAIS,
    title: "Saiba Mais",
    description: "Informações acadêmicas, guias de curso e recursos extras da nossa instituição.",
    icon: 'Info',
    color: 'text-blue-800'
  },
  {
    id: ViewType.CONCURSOS,
    title: "Concursos",
    description: "Editais abertos e materiais de estudo focados em carreiras públicas de tecnologia.",
    icon: 'Medal',
    color: 'text-orange-500'
  },
  {
    id: ViewType.PROJETOS,
    title: "Grupo de Projetos",
    description: "Conecte-se com outros alunos para colaborar em projetos open-source e trabalhos acadêmicos.",
    icon: 'Users',
    color: 'text-purple-600'
  },
  {
    id: ViewType.FALE_COORDENADOR,
    title: "Fale com seu Coordenador",
    description: "Canal direto para dúvidas acadêmicas, orientações de carreira e suporte institucional.",
    icon: 'MessageSquare',
    color: 'text-green-600'
  }
];

export const getIcon = (iconName: string, size = 32, className = "") => {
  switch (iconName) {
    case 'Lightbulb': return <Lightbulb size={size} className={className} />;
    case 'Smartphone': return <Smartphone size={size} className={className} />;
    case 'Briefcase': return <Briefcase size={size} className={className} />;
    case 'Info': return <Info size={size} className={className} />;
    case 'Medal': return <Medal size={size} className={className} />;
    case 'Users': return <Users size={size} className={className} />;
    case 'Code': return <Code size={size} className={className} />;
    case 'Compass': return <Compass size={size} className={className} />;
    case 'Zap': return <Zap size={size} className={className} />;
    case 'MessageSquare': return <MessageSquare size={size} className={className} />;
    default: return <Code size={size} className={className} />;
  }
};
