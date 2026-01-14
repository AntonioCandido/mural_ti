
import React from 'react';
import { ViewType } from '../types';
import { CARDS, getIcon } from '../constants';
import { Mail, Linkedin, Facebook } from 'lucide-react';

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
          <div className="grid grid-cols-1 gap-12">
            {/* Perfil e Redes Sociais - Design Atualizado conforme Imagem */}
            <div className="bg-white p-12 md:p-16 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40 text-center flex flex-col items-center">
              <h3 className="text-3xl md:text-5xl font-black text-estacio-navy mb-6">
                Prof. Antônio Cândido de O. Filho
              </h3>
              
              <div className="text-gray-500 font-semibold text-base md:text-xl leading-relaxed max-w-2xl mb-12">
                Coordenador de Análise e Desenvolvimento de Sistemas 
                <br /> - ADS e Ciência da Computação - CC
              </div>

              <div className="w-full max-w-lg space-y-6 text-left">
                {/* Email Item */}
                <div className="flex items-center gap-5 p-2 group cursor-pointer">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-500 transition-transform group-hover:scale-110">
                    <Mail size={24} />
                  </div>
                  <span className="text-lg md:text-xl font-bold text-gray-700">antonio.filho@estacio.br</span>
                </div>

                {/* LinkedIn Item */}
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-5 p-2 group cursor-pointer hover:no-underline"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 transition-transform group-hover:scale-110">
                    <Linkedin size={24} fill="currentColor" stroke="none" />
                  </div>
                  <span className="text-lg md:text-xl font-bold text-blue-600">LinkedIn Perfil</span>
                </a>

                {/* Facebook Item */}
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-5 p-2 group cursor-pointer hover:no-underline"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 transition-transform group-hover:scale-110">
                    <Facebook size={24} fill="currentColor" stroke="none" />
                  </div>
                  <span className="text-lg md:text-xl font-bold text-blue-600">Facebook Perfil</span>
                </a>
              </div>
            </div>
            
            {/* Horários de Atendimento */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40">
              <h4 className="font-black text-3xl md:text-4xl text-estacio-navy mb-12">Horários de Atendimento</h4>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Campus Barra */}
                <div className="bg-[#F8FAFC] p-8 md:p-10 rounded-[2rem] border border-gray-50 flex flex-col h-full">
                  <h5 className="text-[12px] font-black uppercase text-estacio-navy/60 tracking-[0.2em] mb-8">TOM JOBIM - BARRA</h5>
                  <ul className="space-y-6">
                    <li className="flex items-center group">
                      <span className="w-3.5 h-3.5 rounded-full bg-estacio-cyan mr-5 shadow-sm shadow-estacio-cyan/40 shrink-0"></span>
                      <span className="text-base md:text-lg font-medium text-gray-600">
                        <strong className="text-estacio-navy font-black">Presencial:</strong> Quarta, 09h às 19h
                      </span>
                    </li>
                    <li className="flex items-center group">
                      <span className="w-3.5 h-3.5 rounded-full bg-blue-500 mr-5 shadow-sm shadow-blue-500/40 shrink-0"></span>
                      <span className="text-base md:text-lg font-medium text-gray-600">
                        <strong className="text-estacio-navy font-black">Remoto:</strong> Sexta, 09h às 12h
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Campus Taquara */}
                <div className="bg-[#F8FAFC] p-8 md:p-10 rounded-[2rem] border border-gray-50 flex flex-col h-full">
                  <h5 className="text-[12px] font-black uppercase text-estacio-navy/60 tracking-[0.2em] mb-8">R9 - TAQUARA</h5>
                  <ul className="space-y-6">
                    <li className="flex items-center group">
                      <span className="w-3.5 h-3.5 rounded-full bg-estacio-cyan mr-5 shadow-sm shadow-estacio-cyan/40 shrink-0"></span>
                      <span className="text-base md:text-lg font-medium text-gray-600">
                        <strong className="text-estacio-navy font-black">Presencial:</strong> Quinta, 09h às 19h
                      </span>
                    </li>
                    <li className="flex items-center group">
                      <span className="w-3.5 h-3.5 rounded-full bg-blue-500 mr-5 shadow-sm shadow-blue-500/40 shrink-0"></span>
                      <span className="text-base md:text-lg font-medium text-gray-600">
                        <strong className="text-estacio-navy font-black">Remoto:</strong> Sexta, 13h às 16h
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <p className="mt-12 text-sm text-gray-400 font-medium leading-relaxed bg-blue-50/50 p-6 rounded-2xl border border-blue-100/50 italic">
                <strong>Nota:</strong> É fundamental realizar o agendamento prévio através do sistema SIA para garantir seu atendimento presencial nos campi.
              </p>
            </div>
          </div>
        );
      case ViewType.ESTAGIOS:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { company: "Accenture", role: "Estágio Front-end", salary: "R$ 2.100", type: "Híbrido" },
              { company: "Stefanini", role: "Dev Jr. (Java)", salary: "R$ 4.200", type: "Remoto" },
              { company: "IBM", role: "Suporte em Nuvem", salary: "R$ 1.950", type: "Presencial" },
              { company: "Stone", role: "Tech Intern", salary: "R$ 2.500", type: "Remoto" }
            ].map((job, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 flex justify-between items-start hover:border-estacio-cyan transition-all shadow-sm group">
                <div>
                  <div className="text-[10px] font-black uppercase text-estacio-cyan mb-2">{job.company}</div>
                  <h5 className="font-black text-xl text-estacio-navy mb-1">{job.role}</h5>
                  <p className="text-sm text-gray-500 font-bold mb-4">📍 {job.type}</p>
                  <span className="text-lg font-black text-green-600">{job.salary}</span>
                </div>
                <button className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-estacio-cyan group-hover:text-white transition-all">
                  →
                </button>
              </div>
            ))}
          </div>
        );
      default:
        return (
          <div className="bg-gray-50 p-24 rounded-3xl text-center border-4 border-dashed border-gray-200">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-2xl font-black text-estacio-navy mb-4">Em Construção</h3>
              <p className="text-gray-500 font-medium">Estamos preparando conteúdos exclusivos para esta seção. Volte em breve!</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="fade-in container mx-auto px-6 py-16">
      <button 
        onClick={onBack}
        className="group flex items-center gap-3 text-gray-400 font-black uppercase tracking-widest text-[11px] hover:text-estacio-navy mb-16 transition-all"
      >
        <span className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-estacio-navy group-hover:bg-estacio-navy group-hover:text-white transition-all">
          ←
        </span>
        Voltar para a Home
      </button>

      <div className="flex flex-col md:flex-row md:items-center gap-8 mb-20 border-l-8 border-estacio-cyan pl-8">
        <div className={`p-6 bg-white shadow-2xl shadow-gray-200 rounded-3xl flex-shrink-0 ${cardInfo?.color || 'text-estacio-navy'}`}>
          {getIcon(cardInfo?.icon || 'Info', 64)}
        </div>
        <div>
          <h2 className="text-4xl md:text-6xl font-black text-estacio-navy tracking-tight mb-4">{cardInfo?.title}</h2>
          <p className="text-xl text-gray-500 font-medium max-w-2xl">{cardInfo?.description}</p>
        </div>
      </div>

      <div className="pb-24">
        {renderContent()}
      </div>
    </div>
  );
};

export default DetailView;
