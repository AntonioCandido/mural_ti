import React from 'react';
import { CoordinatorWidget } from '../constants';
import { ChevronLeft, ExternalLink } from 'lucide-react';

const CATEGORIES = [
  { name: 'Plataformas', link: 'platforms', desc: 'Sistemas operacionais, cloud e ecossistemas.' },
  { name: 'Linguagens', link: 'programming-languages', desc: 'Trilhas de JS, Python, Rust, Go e mais.' },
  { name: 'Front-End', link: 'front-end-development', desc: 'Frameworks, ferramentas de UI e UX.' },
  { name: 'Back-End', link: 'back-end-development', desc: 'Infra, servidores e lógica de API.' },
  { name: 'Ciência da Computação', link: 'computer-science', desc: 'Algoritmos, estruturas e teoria.' },
  { name: 'Segurança', link: 'security', desc: 'Cybersecurity, pentest e defesa digital.' },
  { name: 'Big Data', link: 'big-data', desc: 'Data Science, análise e processamento.' },
  { name: 'Jogos', link: 'gaming', desc: 'Motores, design e lógica de games.' },
  { name: 'Hardware', link: 'hardware', desc: 'IoT, Arduino, eletrônica e robótica.' },
];

const ComoDesenvolver: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-8 fade-in">
      <a href="#/home" className="group inline-flex items-center gap-3 text-slate-400 hover:text-estacio-navy font-black uppercase text-[10px] tracking-widest mb-16 transition-all">
        <span className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-estacio-navy transition-colors">
          <ChevronLeft size={14} />
        </span>
        Voltar
      </a>

      <div className="max-w-5xl">
        <h2 className="text-4xl md:text-6xl font-black text-estacio-navy italic uppercase tracking-tighter mb-8">Como <span className="text-estacio-cyan">Desenvolver</span></h2>
        <p className="text-xl text-slate-500 font-medium mb-16 leading-relaxed">
          Estude por trilhas organizadas. Abaixo, uma curadoria inspirada no projeto <strong>Awesome</strong> (Sindre Sorhus).
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {CATEGORIES.map((cat, i) => (
            <a 
              key={i} 
              href={`https://github.com/sindresorhus/awesome#${cat.link}`} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-estacio-cyan transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-black text-estacio-navy italic uppercase">{cat.name}</h4>
                <ExternalLink size={16} className="text-slate-300 group-hover:text-estacio-cyan transition-colors" />
              </div>
              <p className="text-xs text-slate-400 font-bold leading-relaxed">{cat.desc}</p>
            </a>
          ))}
        </div>

        <div className="bg-white p-10 rounded-[3rem] border border-gray-100 text-center mb-16">
          <p className="text-slate-600 font-medium mb-6">Acesse o repositório completo com milhares de recursos gratuitos:</p>
          <a href="https://github.com/sindresorhus/awesome" target="_blank" rel="noopener noreferrer" className="inline-block bg-slate-900 text-white px-10 py-4 rounded-2xl font-black uppercase italic tracking-widest hover:bg-black transition-colors">
            Ir para o Awesome Repo
          </a>
        </div>

        <CoordinatorWidget tip="Não tente aprender tudo de uma vez. Escolha uma trilha, domine os fundamentos sólidos e construa projetos reais para validar seu aprendizado." />
      </div>
    </div>
  );
};

export default ComoDesenvolver;