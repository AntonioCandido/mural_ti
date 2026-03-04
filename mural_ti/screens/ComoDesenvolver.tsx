
import React, { useState } from 'react';
import CoordinatorWidget from '../components/CoordinatorWidget.tsx';
import BackButton from '../components/BackButton.tsx';
import { 
  PenTool, ExternalLink, Database, Terminal, 
  BookOpen, Code2, Globe, Cpu, Gamepad2, Laptop, 
  Briefcase, Network, Lock, FileCode, Beaker, Zap, 
  LayoutTemplate, GraduationCap, Camera, Calendar
} from 'lucide-react';

interface AwesomeItem {
  title: string;
  desc: string;
  url: string;
  icon: any;
  category: string;
}

const AWESOME_RESOURCES: AwesomeItem[] = [
  { title: 'Plataformas', desc: 'Recursos para Node.js, Android, iOS e Cloud.', url: 'https://github.com/sindresorhus/awesome#platforms', icon: Globe, category: 'Base' },
  { title: 'Linguagens', desc: 'Tudo sobre JavaScript, TypeScript, Rust, Go, Python e C#.', url: 'https://github.com/sindresorhus/awesome#programming-languages', icon: FileCode, category: 'Base' },
  { title: 'Front-End', desc: 'Ecossistema React, Vue, CSS-in-JS e Performance Web.', url: 'https://github.com/sindresorhus/awesome#front-end-development', icon: LayoutTemplate, category: 'Dev' },
  { title: 'Back-End', desc: 'Arquiteturas escaláveis em Go, Node, Elixir e Java.', url: 'https://github.com/sindresorhus/awesome#back-end-development', icon: Terminal, category: 'Dev' },
  { title: 'Ciência da Computação', desc: 'Algoritmos, estruturas de dados e fundamentos teóricos.', url: 'https://github.com/sindresorhus/awesome#computer-science', icon: BookOpen, category: 'Academia' },
  { title: 'Big Data', desc: 'Processamento massivo com Spark, Hadoop e Data Engineering.', url: 'https://github.com/sindresorhus/awesome#big-data', icon: Database, category: 'Academia' },
  { title: 'Teoria', desc: 'Compiladores, linguagens formais e lógica matemática.', url: 'https://github.com/sindresorhus/awesome#theory', icon: Beaker, category: 'Academia' },
  { title: 'Editores', desc: 'Configurações de elite para VS Code, Vim e Emacs.', url: 'https://github.com/sindresorhus/awesome#editors', icon: PenTool, category: 'Tools' },
  { title: 'Ambiente de Dev', desc: 'Dotfiles, CLI, Shell e automação de workflow.', url: 'https://github.com/sindresorhus/awesome#development-environment', icon: Laptop, category: 'Tools' },
  { title: 'Bancos de Dados', desc: 'Otimização de SQL, NoSQL e bases vetoriais.', url: 'https://github.com/sindresorhus/awesome#databases', icon: Database, category: 'Tools' },
  { title: 'Segurança', desc: 'Pentesting, criptografia e segurança defensiva.', url: 'https://github.com/sindresorhus/awesome#security', icon: Lock, category: 'Segurança' },
  { title: 'Hardware', desc: 'Arduino, Raspberry Pi e IoT (Internet das Coisas).', url: 'https://github.com/sindresorhus/awesome#hardware', icon: Cpu, category: 'Infra' },
  { title: 'Redes', desc: 'Protocolos, infraestrutura e conectividade moderna.', url: 'https://github.com/sindresorhus/awesome#networking', icon: Network, category: 'Infra' },
  { title: 'Negócios', desc: 'SaaS, startups e gestão de produtos de software.', url: 'https://github.com/sindresorhus/awesome#business', icon: Briefcase, category: 'Business' },
  { title: 'Trabalhar', desc: 'Vagas remotas, currículo tech e cultura de engenharia.', url: 'https://github.com/sindresorhus/awesome#work', icon: Briefcase, category: 'Business' },
  { title: 'Eventos', desc: 'Principais conferências de tecnologia no mundo.', url: 'https://github.com/sindresorhus/awesome#events', icon: Calendar, category: 'Social' },
  { title: 'Jogos', desc: 'Desenvolvimento de jogos, engines e design.', url: 'https://github.com/sindresorhus/awesome#gaming', icon: Gamepad2, category: 'Misc' },
  { title: 'Aprender', desc: 'Cursos gratuitos, tutoriais e roadmaps.', url: 'https://github.com/sindresorhus/awesome#learn', icon: GraduationCap, category: 'Misc' },
  { title: 'Mídia', desc: 'Manipulação de áudio, vídeo e imagem via código.', url: 'https://github.com/sindresorhus/awesome#media', icon: Camera, category: 'Misc' }
];

const TESTING_RESOURCES = [
  { name: 'Vitest', desc: 'Test Runner ultra rápido focado em Vite.', url: 'https://vitest.dev/' },
  { name: 'Jest', desc: 'O padrão ouro para testes unitários em JS.', url: 'https://jestjs.io/' },
  { name: 'Playwright', desc: 'Testes E2E modernos para todos os navegadores.', url: 'https://playwright.dev/' },
  { name: 'Cypress', desc: 'Experiência incrível para testes de integração.', url: 'https://www.cypress.io/' },
  { name: 'Testing Library', desc: 'Foco em testar o comportamento do usuário.', url: 'https://github.com/testing-library' }
];

const ComoDesenvolver: React.FC = () => {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', ...Array.from(new Set(AWESOME_RESOURCES.map(r => r.category)))];

  const filteredResources = filter === 'Todos' 
    ? AWESOME_RESOURCES 
    : AWESOME_RESOURCES.filter(r => r.category === filter);

  return (
    <div className="container mx-auto px-6 py-12 md:py-20 fade-in">
      <BackButton />

      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-estacio-cyan/10 text-estacio-cyan px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-estacio-cyan/20">
              Developer Roadmap 2026
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-estacio-navy italic uppercase tracking-tighter mb-8 leading-none">
            Como <span className="text-estacio-cyan text-stroke-navy">Desenvolver</span>
          </h2>
          <p className="text-xl md:text-3xl text-slate-500 font-medium mb-12 leading-relaxed max-w-5xl">
            Sua jornada para a elite da TI começa com a curiosidade. Explore esta curadoria de recursos essenciais, do hardware à inteligência artificial.
          </p>
        </header>

        <section className="bg-estacio-navy p-12 md:p-20 rounded-[5rem] text-white mb-24 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl md:text-5xl font-black italic uppercase mb-8 tracking-tighter leading-tight">
                O Futuro é de quem <span className="text-estacio-cyan">Constrói</span>
              </h3>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Desenvolvimento em 2026 não é sobre "decorar sintaxe". É sobre entender arquiteturas sustentáveis, garantir a segurança por design e ter a resiliência para aprender novas tecnologias semanalmente. 
              </p>
              <div className="flex gap-4">
                 <div className="bg-white/10 px-6 py-4 rounded-3xl backdrop-blur-md border border-white/10 flex flex-col">
                    <span className="text-estacio-cyan font-black text-[10px] uppercase tracking-widest">Mindset</span>
                    <span className="font-bold text-sm italic">Continuous Learning</span>
                 </div>
                 <div className="bg-white/10 px-6 py-4 rounded-3xl backdrop-blur-md border border-white/10 flex flex-col">
                    <span className="text-estacio-amber font-black text-[10px] uppercase tracking-widest">Prática</span>
                    <span className="font-bold text-sm italic">Code Every Day</span>
                 </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-[3rem] text-estacio-navy rotate-3 shadow-2xl">
                  <Terminal size={40} className="mb-4" />
                  <h4 className="font-black uppercase text-xs">Terminal Master</h4>
                </div>
                <div className="bg-estacio-cyan p-8 rounded-[3rem] text-estacio-navy -rotate-3 shadow-2xl mt-12">
                  <Code2 size={40} className="mb-4" />
                  <h4 className="font-black uppercase text-xs">Software Architect</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-2 h-10 bg-estacio-cyan rounded-full"></div>
              <h3 className="text-3xl font-black text-estacio-navy italic uppercase tracking-tight leading-none">
                Hub de Recursos <span className="text-slate-400">Awesome</span>
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                    filter === cat 
                    ? 'bg-estacio-navy text-white shadow-lg' 
                    : 'bg-white text-slate-400 border border-slate-100 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredResources.map((item, i) => (
              <a 
                key={i} 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-[4rem] group-hover:bg-estacio-cyan/10 transition-colors"></div>
                <div className="relative z-10 w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-estacio-navy mb-8 group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <h4 className="relative z-10 font-black italic uppercase text-lg mb-3 tracking-tight group-hover:text-estacio-navy transition-colors">{item.title}</h4>
                <p className="relative z-10 text-[11px] font-bold text-slate-400 uppercase leading-relaxed mb-8 flex-grow">
                  {item.desc}
                </p>
                <div className="relative z-10 mt-auto flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-estacio-cyan opacity-60 group-hover:opacity-100 transition-opacity">
                  Explorar Repositório <ExternalLink size={12} />
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-24 bg-slate-900 p-12 md:p-20 rounded-[5rem] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-20 opacity-10">
            <Beaker size={300} strokeWidth={1} />
          </div>
          <div className="relative z-10 flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 text-estacio-cyan mb-6">
                <Zap size={24} />
                <span className="text-[11px] font-black uppercase tracking-[0.3em]">Quality Assurance (QA)</span>
              </div>
              <h3 className="text-4xl md:text-6xl font-black italic uppercase mb-8 tracking-tighter leading-none">
                A Arte de <br/> <span className="text-estacio-cyan text-stroke-white">Testar Software</span>
              </h3>
              <p className="text-white/50 font-medium text-lg mb-10 leading-relaxed">
                Um desenvolvedor medíocre entrega código que "parece funcionar". Um profissional de elite entrega código <strong className="text-white">verificado por máquinas</strong>. A confiabilidade é o seu maior trunfo em 2026.
              </p>
              <a 
                href="https://github.com/sindresorhus/awesome?tab=readme-ov-file#testing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-white text-estacio-navy px-10 py-5 rounded-[2.5rem] font-black uppercase italic tracking-widest text-[11px] hover:bg-estacio-cyan hover:text-estacio-navy transition-all shadow-xl"
              >
                Guia Awesome de Testes <ExternalLink size={16} />
              </a>
            </div>
            
            <div className="lg:w-1/2 space-y-6">
              {TESTING_RESOURCES.map((test, i) => (
                <a 
                  key={i} 
                  href={test.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white hover:text-estacio-navy transition-all group"
                >
                  <div className="flex flex-col">
                    <span className="font-black uppercase text-xl italic tracking-tight">{test.name}</span>
                    <span className="text-[10px] font-bold opacity-50 uppercase tracking-widest">{test.desc}</span>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-estacio-navy group-hover:text-white transition-colors">
                    <ExternalLink size={18} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <CoordinatorWidget tip="Software é 1% inspiração e 99% depuração. Use esses recursos não como uma lista de tarefas, mas como uma biblioteca de consulta constante. A maestria técnica vem com o hábito de ler a documentação original." />
      </div>
    </div>
  );
};

export default ComoDesenvolver;
