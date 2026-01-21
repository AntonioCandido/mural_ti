
import React from 'react';
import { ChevronLeft, ExternalLink, GraduationCap, Book, ShieldCheck, MessageSquare, Mail, Globe, Play, Info, BookOpen, Lightbulb } from 'lucide-react';
import { CoordinatorWidget } from '../constants';

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
      <a href="#/home" className="group inline-flex items-center gap-3 text-slate-400 hover:text-estacio-navy font-black uppercase text-[10px] tracking-widest mb-16 transition-all">
        <span className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-estacio-navy transition-colors">
          <ChevronLeft size={14} />
        </span>
        Voltar
      </a>

      <div className="max-w-6xl mx-auto">
        <header className="mb-16">
          <h2 className="text-4xl md:text-7xl font-black text-estacio-navy italic uppercase tracking-tighter mb-8 leading-none">
            Links <span className="text-slate-400">Oficiais</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium max-w-4xl leading-relaxed">
            Para facilitar a sua jornada acadêmica na <strong>Estácio</strong>, reunimos os principais portais e ferramentas digitais. Do SIA ao Office 365, tudo o que você precisa em um só lugar.
          </p>
        </header>

        {/* Grid de Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {OFFICIAL_LINKS.map((link, i) => {
            const Icon = link.icon;
            const isCyan = link.color === 'bg-estacio-cyan';
            const isAmber = link.color === 'bg-estacio-amber';
            
            return (
              <a 
                key={i} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`group relative p-10 rounded-[3.5rem] border border-slate-100 shadow-2xl -translate-y-1.5 transition-all flex flex-col items-start ${link.color}`}
              >
                <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>
                
                <div className="w-full flex justify-between items-start mb-8">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl rotate-[4deg] group-hover:rotate-0 transition-transform">
                    <Icon size={32} className={isCyan || isAmber ? 'text-estacio-navy' : link.color.replace('bg-', 'text-')} />
                  </div>
                  <span className={`text-[8px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-black/20 ${isCyan || isAmber ? 'text-estacio-navy' : 'text-white'}`}>
                    {link.tag}
                  </span>
                </div>
                
                <h4 className={`font-black italic uppercase text-xl mb-4 leading-tight ${isCyan || isAmber ? 'text-estacio-navy' : 'text-white'}`}>
                  {link.title}
                </h4>
                
                <p className={`text-[11px] font-bold leading-relaxed mb-8 opacity-80 ${isCyan || isAmber ? 'text-estacio-navy/70' : 'text-white/70'}`}>
                  {link.desc}
                </p>
                
                <div className={`mt-auto flex items-center gap-2 text-[9px] font-black uppercase tracking-widest ${isCyan || isAmber ? 'text-estacio-navy' : 'text-white'}`}>
                  Acessar Portal <ExternalLink size={12} />
                </div>
              </a>
            );
          })}
        </div>

        {/* Seção Dica Primeiro Acesso */}
        <div className="bg-white border-2 border-dashed border-slate-200 rounded-[4rem] p-10 md:p-16 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
            <Info size={200} />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-24 h-24 bg-estacio-amber rounded-[2rem] flex items-center justify-center text-estacio-navy shrink-0 shadow-xl rotate-[-6deg]">
              <Sparkles size={40} />
            </div>
            <div>
              <h3 className="text-2xl font-black text-estacio-navy italic uppercase mb-4 tracking-tight">Dica para o Primeiro Acesso</h3>
              <p className="text-slate-600 font-medium leading-relaxed italic">
                Caso tenha dificuldades no primeiro login, a senha padrão costuma ser composta pelos: <br/>
                <strong className="text-estacio-navy">6 primeiros dígitos do CPF + @ + as duas primeiras letras do nome</strong> (a primeira Maiúscula e a segunda minúscula). <br/>
                Exemplo: <code className="bg-slate-100 px-2 py-1 rounded text-pink-600 font-bold">123456@An</code>
              </p>
            </div>
          </div>
        </div>

        {/* Seção Vídeo Tutorial */}
        <div className="bg-slate-950 rounded-[4rem] overflow-hidden shadow-2xl mb-20 border border-white/5">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-red-500 mb-6">
                <Play size={20} fill="currentColor" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Guia Visual Passo a Passo</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-white italic uppercase mb-6 tracking-tighter leading-tight">
                Como acessar <br/> o <span className="text-estacio-cyan">SIA da Estácio</span>
              </h3>
              <p className="text-white/40 font-medium leading-relaxed mb-10">
                Assista a este vídeo tutorial para realizar seu primeiro acesso ou recuperar sua senha de forma simples e rápida nos sistemas da universidade.
              </p>
              <a 
                href="https://www.youtube.com/watch?v=TytwxwQ4Yqo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-4 bg-red-600 text-white px-10 py-5 rounded-2xl font-black uppercase italic tracking-widest text-[11px] hover:bg-white hover:text-red-600 transition-all shadow-xl shadow-red-600/20"
              >
                Ver no YouTube <ExternalLink size={16} />
              </a>
            </div>
            <div className="lg:w-1/2 relative min-h-[300px] bg-slate-900 flex items-center justify-center">
              <img 
                src="https://img.youtube.com/vi/TytwxwQ4Yqo/maxresdefault.jpg" 
                alt="Thumbnail Vídeo SIA" 
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white shadow-2xl animate-pulse">
                    <Play size={32} fill="currentColor" className="ml-1" />
                 </div>
              </div>
            </div>
          </div>
        </div>

        <CoordinatorWidget tip="A organização é a chave para o sucesso acadêmico. Mantenha esses links nos seus favoritos e verifique seu SIA e E-mail Institucional pelo menos uma vez ao dia." />
      </div>
    </div>
  );
};

const Sparkles = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" /><path d="M3 5h4" /><path d="M21 17v4" /><path d="M19 19h4" />
  </svg>
);

export default LinksEssenciais;
