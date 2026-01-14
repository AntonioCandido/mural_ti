import React from 'react';
import { ViewType } from '../types';
import { CARDS, getIcon } from '../constants';

interface DetailViewProps {
  view: ViewType;
  onBack: () => void;
}

const DetailView: React.FC<DetailViewProps> = ({ view, onBack }) => {
  const cardInfo = CARDS.find(c => c.id === view);
  
  // Custom mock data for different sections
  const renderContent = () => {
    switch (view) {
      case ViewType.DICAS:
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Dominando o Git", tag: "DevOps", text: "Aprenda workflows avançados para trabalhar em equipe com Git Flow." },
                { title: "Clean Code", tag: "Software", text: "Como escrever código que seus colegas de equipe vão amar ler." },
                { title: "Tendências 2025", tag: "Tech", text: "WebAssembly, Edge Computing e o futuro do JavaScript." },
                { title: "Soft Skills para Devs", tag: "Carreira", text: "Comunicação e empatia são tão importantes quanto o código." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 cursor-pointer group">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-600 px-3 py-1 rounded-full">{item.tag}</span>
                  <h4 className="text-xl md:text-2xl font-bold mt-4 mb-2 text-slate-800 group-hover:text-estacio-navy transition-colors">{item.title}</h4>
                  <p className="text-sm md:text-base text-gray-500 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case ViewType.ESTAGIOS:
        return (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
              <h4 className="font-extrabold text-2xl md:text-3xl text-estacio-navy">Vagas Recomendadas</h4>
              <button className="text-sm md:text-base text-estacio-cyan font-bold hover:underline self-start sm:self-auto transition-all">Ver todas as 152 vagas</button>
            </div>
            <div className="space-y-4">
              {[
                { company: "Estácio Tech Lab", role: "Estágio Front-end React", salary: "R$ 1.800 + VR", loc: "Híbrido - RJ" },
                { company: "Inova Sistemas", role: "Junior Node.js Developer", salary: "R$ 3.500", loc: "Remoto" },
                { company: "Fintech Global", role: "Estágio Data Science", salary: "R$ 2.200", loc: "São Paulo, SP" }
              ].map((vaga, i) => (
                <div key={i} className="flex items-center gap-4 md:gap-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-50 hover:shadow-lg hover:border-blue-100 transition-all">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 font-bold text-xl flex-shrink-0">
                    {vaga.company.charAt(0)}
                  </div>
                  <div className="flex-grow">
                    <h5 className="font-bold text-lg md:text-xl text-slate-800 mb-1">{vaga.role}</h5>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs md:text-sm text-gray-500">
                      <span className="flex items-center gap-1.5"><span className="opacity-60">🏢</span> {vaga.company}</span>
                      <span className="flex items-center gap-1.5"><span className="opacity-60">📍</span> {vaga.loc}</span>
                      <span className="flex items-center gap-1.5 font-semibold text-green-600">💰 {vaga.salary}</span>
                    </div>
                  </div>
                  <button className="hidden lg:block px-6 py-2.5 bg-estacio-navy text-white text-xs font-bold rounded-xl hover:bg-blue-800 hover:shadow-lg transition-all">Candidatar-se</button>
                </div>
              ))}
            </div>
          </div>
        );
      case ViewType.PROJETOS:
        return (
          <div className="text-center py-12 px-4">
            <div className="max-w-2xl mx-auto">
              <div className="w-24 h-24 bg-purple-100 text-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                {getIcon('Users', 48)}
              </div>
              <h4 className="text-3xl md:text-4xl font-extrabold mb-6 text-estacio-navy leading-tight">Grupos de Projetos Colaborativos</h4>
              <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed font-medium">Nesta seção você pode encontrar colegas para formar times de elite para o TCC, hackathons ou projetos voluntários inovadores.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-4 bg-purple-600 text-white font-bold rounded-2xl shadow-xl shadow-purple-200 hover:bg-purple-700 hover:-translate-y-1 transition-all">Criar Novo Grupo</button>
                <button className="px-10 py-4 bg-white text-purple-600 border-2 border-purple-100 font-bold rounded-2xl hover:bg-purple-50 hover:border-purple-200 transition-all">Explorar Grupos Ativos</button>
              </div>
            </div>
          </div>
        );
      case ViewType.FALE_COORDENADOR:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 text-center h-full flex flex-col justify-center items-center">
                <h4 className="font-extrabold text-2xl md:text-3xl text-estacio-navy leading-tight mb-4 px-2">Prof. Antônio Cândido de O. Filho</h4>
                <p className="text-sm md:text-base text-gray-500 mb-10 px-4 leading-relaxed font-medium max-w-[280px]">Coordenador de Análise e Desenvolvimento de Sistemas - ADS e Ciência da Computação - CC</p>
                
                <div className="space-y-4 text-left w-full">
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=antonio.filho@estacio.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-sm md:text-base text-slate-600 group p-3 transition-all duration-300 rounded-2xl border border-transparent hover:border-green-100 hover:bg-green-50 hover:shadow-md"
                  >
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0 group-hover:bg-green-600 group-hover:text-white transition-all duration-500 shadow-sm">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <span className="truncate font-bold group-hover:text-green-700 transition-colors">antonio.filho@estacio.br</span>
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/antonio-candido-oliveira-filho-b2028336" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-sm md:text-base text-slate-600 group p-3 transition-all duration-300 rounded-2xl border border-transparent hover:border-blue-100 hover:bg-blue-50 hover:shadow-md"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </div>
                    <span className="text-blue-700 font-bold truncate group-hover:text-blue-900 transition-colors">LinkedIn Perfil</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 h-full">
                <h4 className="font-extrabold text-2xl md:text-3xl mb-8 text-estacio-navy">Horários de Atendimento</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-500">
                    <p className="font-black text-estacio-navy mb-5 uppercase tracking-widest text-xs opacity-70">TOM JOBIM - BARRA</p>
                    <div className="space-y-4 text-base text-slate-600">
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-estacio-cyan animate-pulse"></div>
                        <p><span className="font-bold text-slate-800">Presencial:</span> Quarta, 09h às 19h</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-400"></div>
                        <p><span className="font-bold text-slate-800">Remoto:</span> Sexta, 09h às 12h</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-500">
                    <p className="font-black text-estacio-navy mb-5 uppercase tracking-widest text-xs opacity-70">R9 - TAQUARA</p>
                    <div className="space-y-4 text-base text-slate-600">
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-estacio-cyan animate-pulse"></div>
                        <p><span className="font-bold text-slate-800">Presencial:</span> Quinta, 09h às 19h</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-400"></div>
                        <p><span className="font-bold text-slate-800">Remoto:</span> Sexta, 13h às 16h</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="bg-white p-12 md:p-20 rounded-3xl text-center border-2 border-dashed border-slate-200">
            <p className="text-lg md:text-xl text-slate-400 font-medium italic">Conteúdo em fase de compilação para esta seção.</p>
          </div>
        );
    }
  };

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-700 container mx-auto px-4 py-8 md:py-16">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-400 font-bold uppercase tracking-widest text-[10px] md:text-xs hover:text-estacio-navy mb-10 md:mb-12 transition-all group"
      >
        <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Voltar para a Home
      </button>

      <div className="flex flex-col md:flex-row md:items-start lg:items-center gap-6 md:gap-10 mb-16 md:mb-24">
        <div className={`p-6 md:p-8 rounded-[2rem] bg-white shadow-2xl shadow-blue-900/10 border border-slate-50 flex-shrink-0 ${cardInfo?.color || 'text-estacio-navy'}`}>
          {getIcon(cardInfo?.icon || 'Code', 64)}
        </div>
        <div className="max-w-4xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-estacio-navy leading-none tracking-tighter mb-4 md:mb-6">{cardInfo?.title || 'Seção'}</h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-500 leading-relaxed font-medium">{cardInfo?.description}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default DetailView;