
import React from 'react';
import { ViewType } from '../types';
import { CARDS, getIcon } from '../constants';

interface DetailViewProps {
  view: ViewType;
  onBack: () => void;
}

const DetailView: React.FC<DetailViewProps> = ({ view, onBack }) => {
  const cardInfo = CARDS.find(c => c.id === view);
  
  const renderContent = () => {
    switch (view) {
      case ViewType.COORDENADOR:
        return (
          <div className="space-y-10">
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-estacio-navy rounded-full flex items-center justify-center text-white">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-estacio-navy">Prof. Antônio Cândido</h4>
                  <p className="text-xs text-estacio-cyan font-bold uppercase tracking-widest">Coordenador Acadêmico de TI</p>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg inline-block">
                <p className="text-[10px] font-bold uppercase text-gray-400 mb-1">E-mail para contato</p>
                <p className="font-bold text-estacio-navy">antonio.filho@estacio.br</p>
              </div>
            </div>
            
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
              <h4 className="font-bold text-2xl text-estacio-navy mb-10">Horários de Atendimento</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-8 rounded-[2rem]">
                  <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6">TOM JOBIM - BARRA</h5>
                  <ul className="space-y-4">
                    <li className="flex items-center text-sm font-medium">
                      <span className="w-3 h-3 rounded-full bg-estacio-cyan mr-4"></span>
                      <strong className="text-estacio-navy mr-1">Presencial:</strong> Quarta, 09h às 19h
                    </li>
                    <li className="flex items-center text-sm font-medium">
                      <span className="w-3 h-3 rounded-full bg-blue-500 mr-4"></span>
                      <strong className="text-estacio-navy mr-1">Remoto:</strong> Sexta, 09h às 12h
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-8 rounded-[2rem]">
                  <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6">R9 - TAQUARA</h5>
                  <ul className="space-y-4">
                    <li className="flex items-center text-sm font-medium">
                      <span className="w-3 h-3 rounded-full bg-estacio-cyan mr-4"></span>
                      <strong className="text-estacio-navy mr-1">Presencial:</strong> Quinta, 09h às 19h
                    </li>
                    <li className="flex items-center text-sm font-medium">
                      <span className="w-3 h-3 rounded-full bg-blue-500 mr-4"></span>
                      <strong className="text-estacio-navy mr-1">Remoto:</strong> Sexta, 13h às 16h
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      case ViewType.ESTAGIOS:
        return (
          <div className="space-y-6">
            {[
              { company: "Accenture", role: "Estágio Front-end", salary: "R$ 2.100", loc: "Híbrido - RJ" },
              { company: "Stefanini", role: "Desenvolvedor Junior", salary: "R$ 3.800", loc: "Remoto" },
              { company: "IBM", role: "Cloud Support", salary: "R$ 1.950", loc: "Presencial - RJ" }
            ].map((job, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 hover:border-estacio-cyan transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center font-bold text-estacio-navy">
                    {job.company.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-estacio-navy">{job.role}</h5>
                    <p className="text-sm text-gray-500 font-medium">🏢 {job.company} • 📍 {job.loc}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-green-600 mb-2">{job.salary}</p>
                  <button className="px-6 py-2 bg-estacio-navy text-white text-[10px] font-bold uppercase rounded">Candidatar</button>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return (
          <div className="bg-gray-50 p-20 rounded-xl text-center border-2 border-dashed border-gray-200">
            <p className="text-xl text-gray-400 font-bold italic">Conteúdo em atualização constante.</p>
          </div>
        );
    }
  };

  return (
    <div className="fade-in container mx-auto px-4 py-12">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-gray-400 font-bold uppercase tracking-widest text-[10px] hover:text-estacio-navy mb-12 transition-all"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Voltar para a Home
      </button>

      <div className="flex items-center gap-6 mb-12">
        <div className={`p-6 bg-white shadow-lg rounded-xl flex-shrink-0 ${cardInfo?.color || 'text-estacio-navy'}`}>
          {getIcon(cardInfo?.icon || 'Code', 48)}
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-estacio-navy tracking-tight">{cardInfo?.title}</h2>
          <p className="text-gray-500 font-medium">{cardInfo?.description}</p>
        </div>
      </div>

      <div className="max-w-5xl">
        {renderContent()}
      </div>
    </div>
  );
};

export default DetailView;
