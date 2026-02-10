
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
