import React from 'react';
import { ChevronLeft, Mail, Linkedin, Facebook, MapPin, Clock, Monitor, Sparkles, GraduationCap, Rocket, Globe2, Briefcase, TrendingUp } from 'lucide-react';

const FaleCoordenador: React.FC = () => {
  const coordinatorPhoto = "https://avatars.githubusercontent.com/u/9017112?s=400&u=14eb77bb805c4996785584f67a0544cf553042d4&v=4";
  const careerImg = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200";

  return (
    <div className="container mx-auto px-6 py-12 md:py-20 fade-in">
      <a href="#/home" className="group inline-flex items-center gap-3 text-slate-400 hover:text-estacio-navy font-black uppercase text-[10px] tracking-widest mb-16 transition-all">
        <span className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-estacio-navy transition-colors">
          <ChevronLeft size={14} />
        </span>
        Voltar
      </a>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Card Principal: Coordenador & Atendimento */}
        <div className="bg-white border border-slate-100 rounded-[5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row -translate-y-1.5 transition-all">
          {/* Perfil - Esquerda */}
          <div className="lg:w-2/5 bg-estacio-navy p-12 md:p-20 text-center text-white flex flex-col items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
            <div className="relative mb-10">
              <div className="absolute inset-0 bg-estacio-cyan/30 blur-3xl rounded-full"></div>
              <div className="relative w-56 h-56 rounded-full overflow-hidden border-[12px] border-white/10 shadow-2xl bg-slate-100 flex items-center justify-center">
                <img 
                  src={coordinatorPhoto} 
                  alt="Antonio Candido" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
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
              <a href="mailto:antonio.filho@estacio.br" className="flex items-center justify-center gap-3 w-full py-5 bg-white text-estacio-navy rounded-2xl shadow-xl font-black uppercase text-[10px] tracking-widest hover:scale-105 transition-all">
                <Mail size={16} /> Enviar E-mail
              </a>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/antonio-candido-oliveira-filho-b2028336" target="_blank" rel="noopener noreferrer" className="flex-1 py-5 bg-white/10 rounded-2xl border border-white/10 hover:bg-blue-600 transition-all flex items-center justify-center text-white shadow-lg">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.facebook.com/candidorj" target="_blank" rel="noopener noreferrer" className="flex-1 py-5 bg-white/10 rounded-2xl border border-white/10 hover:bg-blue-800 transition-all flex items-center justify-center text-white shadow-lg">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Atendimento - Direita (VISUAL REFINADO) */}
          <div className="lg:w-3/5 p-8 md:p-14 bg-gray-50/30 flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              
              {/* Card Tom Jobim */}
              <div className="bg-[#003399] p-10 rounded-[4rem] shadow-xl text-white flex flex-col gap-8 relative overflow-hidden">
                <div className="flex gap-4 items-center">
                  <MapPin size={18} className="text-[#00BFFF] shrink-0" />
                  <h4 className="font-bold text-[#00BFFF] uppercase text-[13px] tracking-[0.05em] italic whitespace-nowrap">
                    TOM JOBIM - BARRA
                  </h4>
                </div>
                
                <div className="space-y-5">
                  <div className="flex gap-4 items-center">
                    <Clock size={18} className="text-[#00BFFF] shrink-0" />
                    <p className="text-[12px] font-normal leading-tight">
                      Presencial: <span className="block opacity-80 mt-1 italic text-[11px]">Quarta, 09h às 19h</span>
                    </p>
                  </div>
                  
                  <div className="flex gap-4 items-center">
                    <Monitor size={18} className="text-[#00BFFF] shrink-0" />
                    <p className="text-[12px] font-normal leading-tight">
                      Remoto: <span className="block opacity-80 mt-1 italic text-[11px]">Sexta, 09h às 12h</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Card R9 */}
              <div className="bg-[#FFBF00] p-10 rounded-[4rem] shadow-xl text-[#003399] flex flex-col gap-8 relative overflow-hidden">
                <div className="flex gap-4 items-center">
                  <MapPin size={18} className="text-[#003399] shrink-0" />
                  <h4 className="font-bold text-[#003399] uppercase text-[13px] tracking-[0.05em] italic whitespace-nowrap">
                    R9 - TAQUARA
                  </h4>
                </div>
                
                <div className="space-y-5">
                  <div className="flex gap-4 items-center">
                    <Clock size={18} className="text-[#003399] shrink-0" />
                    <p className="text-[12px] font-normal leading-tight text-[#003399]">
                      Presencial: <span className="block opacity-80 mt-1 italic text-[11px]">Quinta, 09h às 19h</span>
                    </p>
                  </div>
                  
                  <div className="flex gap-4 items-center">
                    <Monitor size={18} className="text-[#003399] shrink-0" />
                    <p className="text-[12px] font-normal leading-tight text-[#003399]">
                      Remoto: <span className="block opacity-80 mt-1 italic text-[11px]">Sexta, 13h às 16h</span>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Card de Carreira: Direcionamento de Mercado */}
        <section className="relative bg-slate-950 rounded-[5rem] overflow-hidden shadow-2xl -translate-y-1.5 border border-white/5 flex flex-col md:flex-row">
          <div className="md:w-5/12 relative h-80 md:h-auto overflow-hidden">
            <img 
              src={careerImg} 
              alt="Engenharia de Software de Alta Performance" 
              className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-950/20 to-slate-950"></div>
            <div className="absolute top-10 left-10 z-20">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full">
                <TrendingUp size={16} className="text-estacio-cyan" />
                <span className="text-white font-black text-[9px] uppercase tracking-[0.2em]">Market Trends 2026</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-7/12 p-12 md:p-20 flex flex-col justify-center relative">
            <div className="absolute bottom-10 right-10 text-white/5 pointer-events-none">
              <Briefcase size={280} strokeWidth={1} />
            </div>
            
            <header className="mb-14 relative z-10">
              <h3 className="text-4xl md:text-6xl font-black text-white italic uppercase mb-6 tracking-tighter leading-none">
                Sua Carreira <span className="text-estacio-cyan">Sem Fronteiras</span>
              </h3>
              <p className="text-white/40 font-bold text-sm uppercase tracking-widest">Manifesto de Empregabilidade em TI</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
              {/* Mentoria Novatos */}
              <article className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-estacio-cyan text-estacio-navy rounded-2xl flex items-center justify-center shadow-lg shadow-estacio-cyan/20">
                    <Rocket size={24} />
                  </div>
                  <h4 className="font-black text-white uppercase text-[12px] tracking-widest italic">Aos Novatos</h4>
                </div>
                <p className="text-white/70 text-sm leading-relaxed italic border-l-2 border-estacio-cyan/30 pl-6">
                  "O mercado de TI não compra diplomas, compra <strong>capacidade de execução</strong>. Comece seu portfólio no dia 1. Lógica e fundamentos de algoritmos são o que separa o programador do apertador de botões."
                </p>
                <div className="flex gap-2">
                   <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[8px] font-black text-estacio-cyan uppercase italic">Lógica</span>
                   <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[8px] font-black text-estacio-cyan uppercase italic">Git</span>
                   <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[8px] font-black text-estacio-cyan uppercase italic">Soft Skills</span>
                </div>
              </article>

              {/* Mentoria Veteranos */}
              <article className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-estacio-amber text-estacio-navy rounded-2xl flex items-center justify-center shadow-lg shadow-estacio-amber/20">
                    <GraduationCap size={24} />
                  </div>
                  <h4 className="font-black text-white uppercase text-[12px] tracking-widest italic">Aos Veteranos</h4>
                </div>
                <p className="text-white/70 text-sm leading-relaxed italic border-l-2 border-estacio-amber/30 pl-6">
                  "Especialize-se para ser insubstituível. O domínio de arquiteturas escaláveis e a fluência em <strong>inglês técnico</strong> abrem as portas para o trabalho remoto global em dólar e euro."
                </p>
                <div className="flex gap-2">
                   <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[8px] font-black text-estacio-amber uppercase italic">Arch</span>
                   <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[8px] font-black text-estacio-amber uppercase italic">Cloud</span>
                   <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[8px] font-black text-estacio-amber uppercase italic">Seniority</span>
                </div>
              </article>
            </div>

            <footer className="mt-16 pt-10 border-t border-white/5 flex flex-wrap items-center justify-between gap-6 relative z-10">
               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-estacio-cyan rounded-full animate-ping"></div>
                  <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Conectado ao Mercado Real</span>
               </div>
               <div className="flex items-center gap-3 opacity-30">
                  <Sparkles size={14} className="text-estacio-cyan" />
                  <span className="text-[9px] font-black text-white uppercase italic">Mural TI Ecosystem</span>
               </div>
            </footer>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FaleCoordenador;