import React, { useState } from 'react';
import { ChevronLeft, ExternalLink, ShieldCheck, MessageSquare, Book, Globe, Lightbulb, Mail, Info, BookOpen, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import CoordinatorWidget from '../components/CoordinatorWidget.tsx';
import BackButton from '../components/BackButton.tsx';

const OFFICIAL_LINKS = [
  {
    id: 'sia',
    title: 'SIA - Sistema Acadêmico ',
    desc: 'O coração da vida do aluno. Consulta de notas, histórico, boletos, requerimentos e agendamento de provas.',
    url: 'https://sia.estacio.br/',
    icon: ShieldCheck,
    color: 'bg-estacio-navy',
    tag: 'Gestão & Financeiro'
  },
  {
    id: 'sava',
    title: 'SAVA - Sala de Aula',
    desc: 'Plataforma de ensino para disciplinas digitais e online. Videoaulas, conteúdos interativos e fóruns.',
    url: 'https://estudante.estacio.br/',
    icon: MessageSquare,
    color: 'bg-blue-600',
    tag: 'Aprendizagem'
  },
  {
    id: 'biblioteca',
    title: 'Bibliotecas Virtuais',
    desc: 'Acesso a milhares de títulos (Pearson e Grupo A) através da Minha Biblioteca. Estude de qualquer lugar.',
    url: 'https://estacio.br/biblioteca',
    icon: Book,
    color: 'bg-emerald-600',
    tag: 'Pesquisa'
  },
  {
    id: 'carreiras',
    title: 'Estácio Carreiras',
    desc: 'Portal exclusivo para alunos e egressos. Vagas e ferramentas para construção de currículo.',
    url: 'https://estacio.br/guia-de-carreiras',
    icon: Globe,
    color: 'bg-estacio-cyan',
    tag: 'Empregabilidade'
  },
  {
    id: 'vaga',
    title: 'Encontre Sua Vaga',
    desc: 'Hub de oportunidades diretas e parcerias com o mercado de trabalho regional e nacional.',
    url: 'https://www.encontresuavaga.com.br/',
    icon: Lightbulb,
    color: 'bg-purple-600',
    tag: 'Empregabilidade'
  },
  {
    id: 'office',
    title: 'Microsoft Office 365',
    desc: 'Word, Excel e 1TB de nuvem grátis para alunos ativos. Login com seu e-mail acadêmico.',
    url: 'https://www.office.com/',
    icon: Mail,
    color: 'bg-blue-500',
    tag: 'Benefícios'
  },
  {
    id: 'guia',
    title: 'Guia Prático Estácio',
    desc: 'Repositório de tutoriais para tirar todas as dúvidas sobre o uso dos sistemas da instituição.',
    url: 'http://alunodigital.estacio.br/guiapratico/',
    icon: Info,
    color: 'bg-slate-600',
    tag: 'Suporte'
  },
  {
    id: 'cursos',
    title: 'Estácio Cursos Livres',
    desc: 'Plataforma para horas complementares (AAC) e especializações rápidas para turbinar o currículo.',
    url: 'https://app.online.estacio.br/',
    icon: BookOpen,
    color: 'bg-estacio-amber',
    tag: 'Educação'
  }
];

const LinksEssenciais: React.FC = () => {
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleLinkClick = (id: string) => {
    setLoadingId(id);
    // Simulate a loading state for 3 seconds to provide visual feedback
    setTimeout(() => {
      setLoadingId(null);
    }, 3000);
  };

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
            <motion.a 
              key={link.id} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={() => handleLinkClick(link.id)}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative p-10 rounded-[3.5rem] border border-slate-100 shadow-2xl transition-all flex flex-col items-start overflow-hidden ${link.color}`}
            >
              <AnimatePresence>
                {loadingId === link.id && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center text-white"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    >
                      <Loader2 size={48} />
                    </motion.div>
                    <motion.span 
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="mt-4 font-black uppercase tracking-widest text-[10px]"
                    >
                      Abrindo Portal...
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>

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
            </motion.a>
          ))}
        </div>

        <CoordinatorWidget tip="A organização é a chave para o sucesso acadêmico. Mantenha seus acessos em dia e explore todos os benefícios, como o Office 365 gratuito!" />
      </div>
    </div>
  );
};

export default LinksEssenciais;