import React, { useEffect, useRef } from 'react';
import { CARDS, getIcon } from '../constants';
import { ViewType } from '../types';

interface HomeProps {
  onNavigate: (view: ViewType) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="fade-in">
      {/* HERO SECTION */}
      <section className="bg-estacio-navy text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-estacio-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-estacio-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-10 -ml-40 -mb-40"></div>
        
        <div className="container mx-auto relative z-10 text-center max-w-4xl">
          <span className="inline-block py-1 px-4 bg-estacio-cyan text-estacio-navy text-xs font-bold rounded-full mb-6 uppercase tracking-widest">
            Tecnologia da Informação
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Seu Hub de <span className="text-estacio-cyan">Carreira e Inovação</span> na Estácio
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto">
            Acesse as melhores ferramentas, dicas de estudo e oportunidades de estágio selecionadas especialmente para alunos de TI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate(ViewType.DICAS)}
              className="bg-estacio-yellow text-estacio-navy font-bold py-4 px-10 rounded-lg shadow-xl hover:bg-yellow-400 transition-all flex items-center justify-center gap-2 group"
            >
              Explorar Recursos
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
            </button>
          </div>
        </div>
      </section>

      {/* CARDS GRID */}
      <section className="container mx-auto px-4 py-24 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={containerRef}>
          {CARDS.map((card, index) => (
            <div 
              key={card.id}
              onClick={() => onNavigate(card.id)}
              className="p-8 rounded-2xl cursor-pointer group flex flex-col items-start reveal card-frame"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className={`p-4 rounded-xl bg-gray-50 mb-6 group-hover:bg-blue-50 transition-colors ${card.color}`}>
                {getIcon(card.icon)}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-estacio-navy transition-colors">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                {card.description}
              </p>
              <div className="mt-6 flex items-center text-sm font-semibold text-estacio-cyan opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                Acessar seção
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-white py-24 px-4 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 reveal">
              <div className="p-2 bg-gradient-to-tr from-estacio-navy to-estacio-cyan rounded-[2rem] shadow-2xl">
                <img 
                  src="https://raw.githubusercontent.com/fabiomariz/estacio-ti-portal/main/estacio-dica-secreta.jpg" 
                  alt="Cartaz Estácio Dica Secreta" 
                  className="rounded-[1.8rem] w-full h-auto object-cover transform hover:scale-[1.01] transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>
            </div>
            <div className="md:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-estacio-navy mb-4 reveal">Por que usar o Mural tecnológico?</h2>
              <div className="space-y-6">
                <div className="flex gap-5 reveal" style={{ transitionDelay: '100ms' }}>
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Centralização Inteligente</h4>
                    <p className="text-gray-600 text-sm">Tudo o que você precisa para seu sucesso acadêmico e profissional em um só lugar intuitivo.</p>
                  </div>
                </div>
                <div className="flex gap-5 reveal" style={{ transitionDelay: '200ms' }}>
                  <div className="flex-shrink-0 w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center text-cyan-600 shadow-sm">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Foco na Carreira</h4>
                    <p className="text-gray-600 text-sm">Acesso rápido a editais de estágio, vagas de tecnologia e materiais de preparação para o mercado.</p>
                  </div>
                </div>
                <div className="flex gap-5 reveal" style={{ transitionDelay: '300ms' }}>
                  <div className="flex-shrink-0 w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600 shadow-sm">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Colaboração e Projetos</h4>
                    <p className="text-gray-600 text-sm">Conecte-se com alunos de diversos campi para colaborar em projetos inovadores e trocar experiências.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CALL TO ACTION */}
      <section className="bg-estacio-navy py-16 text-center reveal">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Pronto para acelerar sua carreira em TI?</h3>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">Explore todos os recursos gratuitos disponibilizados para a comunidade acadêmica Estácio.</p>
          <button 
             onClick={() => onNavigate(ViewType.HOME)}
             className="bg-white text-estacio-navy font-bold py-3 px-10 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
          >
            Voltar ao topo
          </button>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-500 py-10 text-center text-sm">
        <p>© 2025 Mural tecnológico Estácio • Desenvolvido para Futuros Engenheiros de Software</p>
      </footer>
    </div>
  );
};

export default Home;