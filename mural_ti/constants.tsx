
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
  Play,
  GraduationCap,
  Bell
} from 'lucide-react';
import { ViewType } from './types';

export const CARDS_DATA = [
  { id: ViewType.PROFISSIONAIS, title: 'Profissionais de TI', desc: 'Mercado, desafios e remuneração real.', icon: UserCog, color: 'estacio-navy' },
  { id: ViewType.DESENVOLVIMENTO, title: 'Como Desenvolver', desc: 'Trilhas de estudo e recursos Awesome.', icon: Code, color: 'estacio-cyan' },
  { id: ViewType.ESTAGIOS, title: 'Estágios e Empregos', desc: 'Sua primeira vaga e jobs remotos.', icon: Briefcase, color: 'estacio-navy' },
  { id: ViewType.CONCURSOS, title: 'Concursos', desc: 'Editais abertos e previstos para TI.', icon: Gavel, color: 'estacio-amber' },
  { id: ViewType.EMPREENDEDOR, title: 'Empreendedorismo', desc: 'Transforme ideias em startups reais.', icon: Lightbulb, color: 'estacio-cyan' },
  { id: ViewType.PROJETOS, title: 'Grupo e Projetos', desc: 'Espaço de colaboração entre alunos.', icon: Users, color: 'estacio-navy' },
  { id: ViewType.EVENTOS, title: 'Eventos de TI', desc: 'Calendário de conferências 2026.', icon: Calendar, color: 'estacio-cyan' },
  { id: ViewType.VIDEOS, title: 'Vídeos Essenciais', desc: 'Conteúdo audiovisual fundamental para TI.', icon: Play, color: 'estacio-navy' },
  { id: ViewType.GALERIA, title: 'Galeria de Fotos', desc: 'Registros de eventos e aulas práticas.', icon: Images, color: 'estacio-cyan' },
  { id: ViewType.LINKS, title: 'Links Oficiais', desc: 'SIA, Portal, Biblioteca e Office 365.', icon: LinkIcon, color: 'estacio-navy' },
  { id: ViewType.CURIOSIDADES, title: 'Curiosidades Estácio', desc: 'História, números e fatos que inspiram.', icon: Sparkles, color: 'estacio-cyan' },
  { id: ViewType.CURRICULO, title: 'Novo Currículo 2026', desc: 'O novo modelo acadêmico inovador da Estácio.', icon: GraduationCap, color: 'estacio-amber' },
  { id: ViewType.AVISOS, title: 'Avisos Coordenação', desc: 'Feed oficial de comunicados e alertas.', icon: Bell, color: 'brand-red' },
  { id: ViewType.COORDENADOR, title: 'Fale com o coordenador', desc: 'Atendimento e suporte acadêmico.', icon: UserCheck, color: 'estacio-navy' },
];
