import React from 'react';
import { ChevronLeft, ExternalLink, ShieldCheck, MessageSquare, Book, Globe, Lightbulb, Mail, Info, BookOpen } from 'lucide-react';
import CoordinatorWidget from '../components/CoordinatorWidget.tsx';
import BackButton from '../components/BackButton.tsx';

const OFFICIAL_LINKS = [
  {
    title: 'SIA - Sistema Acadêmico',
    desc: 'O coração da vida do aluno. Consulta de notas, histórico, boletos, requerimentos e agendamento de provas.',
    url: 'https://sia.estacio.br/',
    icon: ShieldCheck,
    color: 'bg-estacio-navy',
    tag: 'Gestão & Financeiro'
  },
  {
    title: 'SAVA - Sala de Aula',
    desc: 'Plataforma de ensino para disciplinas digitais e online. Videoaulas, conteúdos interativos e fóruns.',
    url: 'https://estudante.estacio.br/',
    icon: MessageSquare,
    color: 'bg-blue-600',
    tag: 'Aprendizagem'
  },
  {
    title: 'Bibliotecas Virtuais',
    desc: 'Acesso a milhares de títulos (Pearson e Grupo A) através da Minha Biblioteca. Estude de qualquer lugar.',
    url: 'https://estacio.br/biblioteca',
    icon: Book,
    color: 'bg-emerald-600',
    tag: 'Pesquisa'
  },
  {
    title: 'Estácio Carreiras',
    desc: 'Portal exclusivo para alunos e egressos. Vagas e ferramentas para construção de currículo.',
    url: 'https://estacio.br/guia-de-carreiras',
    icon: Globe,
    color: 'bg-estacio-cyan',
    tag: 'Empregabilidade'
  },
  {
    title: 'Encontre Sua Vaga',
    desc: 'Hub de oportunidades diretas e parcerias com o mercado de trabalho regional e nacional.',
    url: 'https://www.encontresuavaga.com.br/',
    icon: Lightbulb,
    color: 'bg-purple-600',
    tag: 'Empregabilidade'
  },
  {
    title: 'Microsoft Office 365',
    desc: 'Word, Excel e 1TB de nuvem grátis para alunos ativos. Login com seu e-mail acadêmico.',
    url: 'https://www.office.com/',
    icon: Mail,
    color: 'bg-blue-500',
    tag: 'Benefícios'
  },
  {
    title: 'Guia Prático Estácio',
    desc: 'Repositório de tutoriais para tirar todas as dúvidas sobre o uso dos sistemas da instituição.',
    url: 'http://alunodigital.estacio.br/guiapratico/',
    icon: Info,
    color: 'bg-slate-600',
    tag: 'Suporte'
  },
  {
    title: 'Estácio Cursos Livres',
    desc: 'Plataforma para horas complementares (AAC) e especializações rápidas para turbinar o currículo.',
    url: 'https://app.online.estacio.br/',
    icon: BookOpen,
    color: 'bg-estacio-amber',
    tag: 'Educação'
  }
];

const LinksEssenciais: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20 fade-in">
      <BackButton />

      <div className="max-w-6xl mx-auto">
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-estacio-navy/10 text-estacio-navy px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-estacio-navy/20">
              Recursos Oficiais
            </span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-estacio-navy italic uppercase tracking-tighter mb-8 leading-none">
            Links <span className="text-slate-400">Essenciais</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium max-w-3xl leading-relaxed">
            Acesse as plataformas fundamentais para sua gestão acadêmica e desenvolvimento profissional.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {OFFICIAL_LINKS.map((link, i) => (
            <a 
              key={i} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`group relative p-10 rounded-[3.5rem] border border-slate-100 shadow-2xl transition-all hover:-translate-y-2 flex flex-col items-start ${link.color}`}
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                <link.icon size={32} className={link.color.replace('bg-', 'text-')} />
              </div>
              <div className="mb-4">
                <span className="text-[9px] font-black uppercase tracking-widest bg-black/10 px-3 py-1 rounded-full text-white/90">
                  {link.tag}
                </span>
              </div>
              <h4 className="font-black italic uppercase text-xl mb-4 text-white tracking-tight">{link.title}</h4>
              <p className="text-[11px] font-bold text-white/80 mb-8 leading-relaxed flex-grow">{link.desc}</p>
              <div className="mt-auto flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-white border-t border-white/10 pt-6 w-full">
                Acessar Portal <ExternalLink size={12} />
              </div>
            </a>
          ))}
        </div>

        <CoordinatorWidget tip="A organização é a chave para o sucesso acadêmico. Mantenha seus acessos em dia e explore todos os benefícios, como o Office 365 gratuito!" />
      </div>
    </div>
  );
};

export default LinksEssenciais;