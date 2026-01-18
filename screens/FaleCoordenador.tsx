import React from 'react';
import { ChevronLeft, Mail, Linkedin, Facebook, MapPin, Clock, Monitor } from 'lucide-react';

const FaleCoordenador: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20 fade-in">
      <a href="#/home" className="group inline-flex items-center gap-3 text-slate-400 hover:text-estacio-navy font-black uppercase text-[10px] tracking-widest mb-16 transition-all">
        <span className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-estacio-navy transition-colors">
          <ChevronLeft size={14} />
        </span>
        Voltar
      </a>

      <div className="max-w-6xl mx-auto">
        <div className="bg-white border border-slate-100 rounded-[5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          {/* Lado Esquerdo - Perfil */}
          <div className="lg:w-2/5 bg-estacio-navy p-12 md:p-20 text-center text-white flex flex-col items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
            
            <div className="relative mb-10">
              <div className="absolute inset-0 bg-estacio-cyan/20 blur-3xl rounded-full"></div>
              <div className="relative w-56 h-56 rounded-full overflow-hidden border-[12px] border-white/10 shadow-2xl bg-slate-900 flex items-center justify-center">
                {/* SOLUÇÃO: Usar o caminho direto da raiz / para arquivos na pasta public */}
            
            
                <img 
                  src="/candido_sf.png" 
                  alt="Antonio Candido" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Se a imagem ainda assim não carregar, ele mostrará o AC
                    (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Antonio+Candido&background=003399&color=fff&size=512';
                  }}
                />








              </div>
            </div>
            
            <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-4 leading-[0.9]">
              ANTONIO CANDIDO<br/>DE OLIVEIRA FILHO
            </h2>
            <div className="h-1 w-12 bg-estacio-cyan rounded-full mb-8"></div>
            <p className="text-estacio-cyan font-black uppercase tracking-[0.3em] text-[10px] mb-12">Coordenador Acadêmico de TI</p>
            
            <div className="space-y-4 w-full">
              <a href="mailto:antonio.filho@estacio.br" className="flex items-center justify-center gap-3 w-full py-4 bg-white/10 rounded-2xl border border-white/10 hover:bg-white hover:text-estacio-navy transition-all font-black uppercase text-[10px] tracking-widest">
                <Mail size={16} /> Enviar E-mail
              </a>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/antonio-candido-oliveira-filho-b2028336" target="_blank" rel="noopener noreferrer" className="flex-1 py-4 bg-white/10 rounded-2xl border border-white/10 hover:bg-blue-600 transition-all flex items-center justify-center">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.facebook.com/candidorj" target="_blank" rel="noopener noreferrer" className="flex-1 py-4 bg-white/10 rounded-2xl border border-white/10 hover:bg-blue-800 transition-all flex items-center justify-center">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Lado Direito - Conteúdo (Mantido original) */}
          <div className="lg:w-3/5 p-12 md:p-20 bg-white">
            <section>
              <div className="flex items-center gap-4 mb-12">
                <div className="w-1.5 h-10 bg-estacio-cyan rounded-full"></div>
                <h3 className="text-3xl font-black text-estacio-navy italic uppercase tracking-tight">Atendimento</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="p-8 bg-slate-50 rounded-[3rem] border border-slate-100">
                    <h4 className="font-black text-estacio-navy uppercase text-[11px] tracking-widest mb-6 flex items-center gap-3">
                      <MapPin size={16} className="text-estacio-cyan" /> TOM JOBIM - BARRA
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-sm font-bold text-slate-500">
                        <Clock size={16} className="text-slate-300" /> 
                        <span><strong className="text-estacio-navy">Presencial:</strong> Quarta, 09h às 19h</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm font-bold text-slate-500">
                        <Monitor size={16} className="text-slate-300" /> 
                        <span><strong className="text-estacio-navy">Remoto:</strong> Sexta, 09h às 12h</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="p-8 bg-slate-50 rounded-[3rem] border border-slate-100">
                    <h4 className="font-black text-estacio-navy uppercase text-[11px] tracking-widest mb-6 flex items-center gap-3">
                      <MapPin size={16} className="text-estacio-amber" /> R9 - TAQUARA
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-sm font-bold text-slate-500">
                        <Clock size={16} className="text-slate-300" /> 
                        <span><strong className="text-estacio-navy">Presencial:</strong> Quinta, 09h às 19h</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm font-bold text-slate-500">
                        <Monitor size={16} className="text-slate-300" /> 
                        <span><strong className="text-estacio-navy">Remoto:</strong> Sexta, 13h às 16h</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaleCoordenador;