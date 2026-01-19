
import React from 'react';
import { ChevronLeft, Mail, Linkedin, Facebook, MapPin, Clock, Monitor, Sparkles, GraduationCap, Rocket, Globe2, Briefcase } from 'lucide-react';

const FaleCoordenador: React.FC = () => {
  const coordinatorPhoto = "https://media.licdn.com/dms/image/v2/D4D03AQH1HQJvGVGLrw/profile-displayphoto-crop_800_800/B4DZutPuDRJMAI-/0/1768138139079?e=1770249600&v=beta&t=kAVGLV8YKILR76nahJqDR6avuXQGoiuNy4kea4AMvd4";
  const careerImg = "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200";

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
          {/* Perfil */}
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

          {/* Atendimento */}
          <div className="lg:w-3/5 p-12 md:p-20 bg-white">
            <section>
              <div className="flex items-center gap-4 mb-12">
                <div className="w-1.5 h-10 bg-estacio-cyan rounded-full"></div>
                <h3 className="text-3xl font-black text-estacio-navy italic uppercase tracking-tight">Atendimento</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-10 bg-estacio-navy rounded-[3.5rem] shadow-2xl border border-white/10 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/5"></div>
                  <h4 className="relative z-10 font-black text-estacio-cyan uppercase text-[11px] tracking-widest mb-6 flex items-center gap-3">
                    <MapPin size={16} /> TOM JOBIM - BARRA
                  </h4>
                  <div className="relative z-10 space-y-4 text-sm font-bold opacity-90">
                    <div className="flex items-center gap-3"><Clock size={16} className="text-estacio-cyan" /> <span>Presencial: Quarta, 09h às 19h</span></div>
                    <div className="flex items-center gap-3"><Monitor size={16} className="text-estacio-cyan" /> <span>Remoto: Sexta, 09h às 12h</span></div>
                  </div>
                </div>
                <div className="p-10 bg-estacio-amber rounded-[3.5rem] shadow-2xl border border-white/10 text-estacio-navy relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10"></div>
                  <h4 className="relative z-10 font-black text-estacio-navy uppercase text-[11px] tracking-widest mb-6 flex items-center gap-3">
                    <MapPin size={16} /> R9 - TAQUARA
                  </h4>
                  <div className="relative z-10 space-y-4 text-sm font-bold opacity-90">
                    <div className="flex items-center gap-3"><Clock size={16} /> <span>Presencial: Quinta, 09h às 19h</span></div>
                    <div className="flex items-center gap-3"><Monitor size={16} /> <span>Remoto: Sexta, 13h às 16h</span></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Card Motivacional: Foco em Mercado de Trabalho */}
        <section className="relative bg-slate-950 rounded-[5rem] overflow-hidden shadow-2xl -translate-y-1.5 border border-white/5 flex flex-col md:flex-row">
          {/* Lado da Imagem: Vibe Carreira Global */}
          <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
            <img 
              src={careerImg} 
              alt="Ambiente de TI Moderno" 
              className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-950/40 to-slate-950"></div>
            <div className="absolute bottom-10 left-10 z-20">
              <div className="bg-estacio-cyan text-estacio-navy font-black text-[10px] uppercase tracking-widest px-4 py-2 rounded-full italic shadow-xl">
                Mercado de Trabalho 2026
              </div>
            </div>
          </div>
          
          {/* Lado do Texto: Mentorias de Carreira */}
          <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center relative">
            <div className="absolute top-10 right-10 text-estacio-cyan/10">
              <Briefcase size={120} strokeWidth={1} />
            </div>
            
            <h3 className="text-4xl md:text-5xl font-black text-white italic uppercase mb-12 tracking-tighter leading-none relative z-10">
              Prepare-se para o <span className="text-estacio-cyan">Mundo Real</span>
            </h3>

            <div className="space-y-12 relative z-10">
              {/* Para Novatos: O Start na Carreira */}
              <div className="group flex gap-6 items-start">
                <div className="w-14 h-14 bg-estacio-cyan text-estacio-navy rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-estacio-cyan/20 group-hover:rotate-6 transition-transform">
                  <Rocket size={28} />
                </div>
                <div>
                  <h4 className="font-black text-estacio-cyan uppercase text-[11px] tracking-widest mb-3 flex items-center gap-2">
                    Primeiros Períodos <span className="w-1.5 h-1.5 bg-estacio-cyan rounded-full animate-ping"></span>
                  </h4>
                  <p className="text-white/80 text-base font-medium leading-relaxed italic">
                    "O mercado não busca perfeição, busca fundamentos. Foque em algoritmos, Git e Inglês. Seu currículo começa no seu primeiro projeto no GitHub, não no dia da formatura."
                  </p>
                </div>
              </div>

              {/* Para Veteranos: Carreira Global & Especialização */}
              <div className="group flex gap-6 items-start">
                <div className="w-14 h-14 bg-estacio-amber text-estacio-navy rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-estacio-amber/20 group-hover:-rotate-6 transition-transform">
                  <Globe2 size={28} />
                </div>
                <div>
                  <h4 className="font-black text-estacio-amber uppercase text-[11px] tracking-widest mb-3">
                    Reta Final & Especialização
                  </h4>
                  <p className="text-white/80 text-base font-medium leading-relaxed italic">
                    "O mundo é o seu escritório. Domine arquitetura, cloud e liderança técnica. O diferencial entre um programador e um engenheiro é a capacidade de resolver problemas de negócio com código elegante."
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
               <div className="flex items-center gap-2 text-[10px] font-black text-white/40 uppercase tracking-widest">
                  <Sparkles size={14} className="text-estacio-cyan" /> 
                  Foco em Empregabilidade
               </div>
               <div className="text-[10px] font-black text-white italic opacity-40 uppercase">
                  Mural TI • 2026
               </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FaleCoordenador;
