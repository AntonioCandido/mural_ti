
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
                <div key={i} className="bg-white p-6 rounded-xl border hover:border-blue-400 transition-colors cursor-pointer">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-600 px-2 py-1 rounded">{item.tag}</span>
                  <h4 className="font-bold mt-2 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case ViewType.ESTAGIOS:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-xl">Vagas Recomendadas</h4>
              <button className="text-sm text-estacio-cyan font-semibold">Ver todas as 152 vagas</button>
            </div>
            {[
              { company: "Estácio Tech Lab", role: "Estágio Front-end React", salary: "R$ 1.800 + VR", loc: "Híbrido - RJ" },
              { company: "Inova Sistemas", role: "Junior Node.js Developer", salary: "R$ 3.500", loc: "Remoto" },
              { company: "Fintech Global", role: "Estágio Data Science", salary: "R$ 2.200", loc: "São Paulo, SP" }
            ].map((vaga, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 font-bold">
                  {vaga.company.charAt(0)}
                </div>
                <div className="flex-grow">
                  <h5 className="font-bold text-gray-800">{vaga.role}</h5>
                  <div className="flex flex-wrap gap-x-4 text-xs text-gray-500">
                    <span>🏢 {vaga.company}</span>
                    <span>📍 {vaga.loc}</span>
                    <span>💰 {vaga.salary}</span>
                  </div>
                </div>
                <button className="hidden sm:block px-4 py-2 bg-estacio-navy text-white text-xs font-bold rounded-lg hover:bg-blue-800">Candidatar-se</button>
              </div>
            ))}
          </div>
        );
      case ViewType.PROJETOS:
        return (
          <div className="text-center py-10">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                {getIcon('Users', 40)}
              </div>
              <h4 className="text-2xl font-bold mb-4">Grupos de Projetos</h4>
              <p className="text-gray-600 mb-8">Nesta seção você pode encontrar colegas para formar times para o TCC, hackathons ou projetos voluntários.</p>
              <button className="w-full bg-purple-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-purple-700 transition-colors">Criar Novo Grupo</button>
              <button className="w-full mt-4 bg-white text-purple-600 border border-purple-200 font-bold py-4 rounded-xl hover:bg-purple-50 transition-colors">Explorar Grupos Ativos</button>
            </div>
          </div>
        );
      case ViewType.FALE_COORDENADOR:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white shadow-md">
                   <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=coordinatior" alt="Coordenador" />
                </div>
                <h4 className="font-bold text-lg text-estacio-navy">Prof. Dr. Ricardo Silva</h4>
                <p className="text-sm text-gray-500 mb-6">Coordenador Geral de TI</p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <span>ricardo.silva@estacio.br</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <span>Seg a Sex: 14h - 18h</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-xl mb-6">Envie uma Mensagem</h4>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-gray-400">Assunto</label>
                      <select className="w-full p-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-green-500">
                        <option>Dúvidas sobre Matrícula</option>
                        <option>Aproveitamento de Disciplinas</option>
                        <option>Orientação de Carreira</option>
                        <option>Sugestões e Elogios</option>
                        <option>Outros</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-gray-400">Matrícula</label>
                      <input type="text" placeholder="Sua matrícula" className="w-full p-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-green-500" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-gray-400">Sua Mensagem</label>
                    <textarea rows={4} placeholder="Como podemos te ajudar?" className="w-full p-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-green-500"></textarea>
                  </div>
                  <button className="bg-green-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-green-700 transition-colors shadow-lg shadow-green-100">Enviar Solicitação</button>
                </form>
              </div>
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <h5 className="font-bold text-blue-800 mb-2">Dica da Coordenação</h5>
                <p className="text-sm text-blue-600 italic">"Lembre-se de verificar seu SIA regularmente para avisos sobre prazos de trancamento, isenções e avaliações globais."</p>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="bg-white p-10 rounded-2xl text-center border-2 border-dashed border-gray-200">
            <p className="text-gray-400">Conteúdo em desenvolvimento para esta seção.</p>
          </div>
        );
    }
  };

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500 container mx-auto px-4 py-12">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-gray-500 hover:text-estacio-navy mb-8 transition-colors group"
      >
        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Voltar para a Home
      </button>

      <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
        <div className={`p-5 rounded-2xl bg-white shadow-xl ${cardInfo?.color || 'text-estacio-navy'}`}>
          {getIcon(cardInfo?.icon || 'Code', 48)}
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-estacio-navy">{cardInfo?.title || 'Seção'}</h2>
          <p className="text-gray-500 max-w-2xl">{cardInfo?.description}</p>
        </div>
      </div>

      <div className="max-w-5xl">
        {renderContent()}
      </div>
    </div>
  );
};

export default DetailView;
