
import React from 'react';
import BackButton from '../components/BackButton.tsx';
import { 
  Mail, 
  MapPin, 
  Terminal, 
  Sparkles, 
  Rocket, 
  Code2, 
  Cpu, 
  Layers,
  ChevronRight,
  MessageSquareCode
} from 'lucide-react';

const FaleCoordenador: React.FC = () => {
  const coordinatorPhoto = "https://avatars.githubusercontent.com/u/9017112?s=400&u=14eb77bb805c4996785584f67a0544cf553042d4&v=4";

  return (
    <div className="container mx-auto px-6 py-12 md:py-20 fade-in bg-slate-50/30">
      <BackButton />

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hero & Welcome Message */}
        <section className="text-center md:text-left">
          <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
            <span className="bg-estacio-navy text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest italic">
              System Log: 2026.1 Initialized
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-estacio-navy italic uppercase tracking-tighter mb-8 leading-none">
            Welcome to the <span className="text-estacio-cyan text-stroke-navy">Next Level</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-4xl leading-relaxed">
            Aqui, não apenas entregamos diplomas. Nós <strong className="text-estacio-navy">compilamos sonhos</strong>, <strong className="text-estacio-navy">debugamos desafios</strong> e <strong className="text-estacio-navy">commitamos conhecimento</strong> que transforma o mundo.
          </p>
        </section>

        {/* The Mentorship Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calouros - O Init */}
          <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Rocket size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-estacio-cyan rounded-2xl flex items-center justify-center text-estacio-navy mb-8 shadow-lg">
                <Terminal size={28} />
              </div>
              <h3 className="text-3xl font-black text-estacio-navy italic uppercase mb-4 tracking-tight">Para os Calouros: <br/><span className="text-estacio-cyan">Hello World!</span></h3>
              <p className="text-sm font-bold text-slate-400 uppercase leading-relaxed mb-8">
                Seja bem-vindo ao cluster. Sua jornada começa com o setup do seu mindset. Estamos aqui para garantir que sua "instalação" no ecossistema de TI da Estácio seja livre de erros. Explore, erre rápido e aprenda ainda mais rápido.
              </p>
              <div className="flex items-center gap-3 text-[10px] font-black text-estacio-navy uppercase tracking-widest">
                <ChevronRight size={16} /> Status: Integrando ao Kernel
              </div>
            </div>
          </div>

          {/* Veteranos - O Deploy */}
          <div className="bg-estacio-navy p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Cpu size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-estacio-cyan mb-8 shadow-lg backdrop-blur-md">
                <Code2 size={28} />
              </div>
              <h3 className="text-3xl font-black italic uppercase mb-4 tracking-tight">Para os Veteranos: <br/><span className="text-estacio-cyan text-stroke-white">Deploy Ready</span></h3>
              <p className="text-white/60 text-sm font-bold uppercase leading-relaxed mb-8">
                Hora de refatorar sua carreira. 2026.1 é o semestre de consolidar sua stack e preparar o merge com o mercado de elite. Meu papel é ser seu Code Reviewer, refinando seu portfólio para que ele rode perfeitamente em produção.
              </p>
              <div className="flex items-center gap-3 text-[10px] font-black text-estacio-cyan uppercase tracking-widest">
                <ChevronRight size={16} /> Status: Escalonando Performance
              </div>
            </div>
          </div>
        </div>

        {/* Coordinator Profile Card */}
        <div className="bg-white border border-slate-100 rounded-[5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-estacio-navy p-12 md:p-20 text-center text-white flex flex-col items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
            <div className="relative w-56 h-56 rounded-full overflow-hidden border-[12px] border-white/10 mb-10 shadow-2xl">
              <img src={coordinatorPhoto} alt="Antonio Candido" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-4xl font-black italic uppercase mb-2 leading-none">ANTONIO CANDIDO</h2>
            <p className="text-estacio-cyan font-bold text-[10px] uppercase tracking-[0.3em] mb-8">Lead Architect & Coordinator</p>
            <div className="space-y-4 w-full relative z-10">
              <a href="mailto:antonio.filho@estacio.br" className="flex items-center justify-center gap-3 w-full py-5 bg-white text-estacio-navy rounded-2xl shadow-xl font-black uppercase text-[10px] hover:bg-estacio-cyan transition-colors">
                <Mail size={16} /> Abrir Ticket via E-mail
              </a>
            </div>
          </div>

          <div className="lg:w-3/5 p-8 md:p-14 bg-gray-50/30 flex flex-col justify-center">
            <div className="mb-10 flex items-center gap-4">
              <MessageSquareCode className="text-estacio-navy" size={32} />
              <h4 className="text-2xl font-black text-estacio-navy italic uppercase tracking-tight">Middleware de Atendimento</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
              <div className="bg-white p-10 rounded-[4rem] shadow-xl border border-slate-100 group hover:border-estacio-navy/20 transition-all">
                <div className="flex gap-4 items-center mb-6">
                  <div className="w-10 h-10 bg-estacio-navy/5 rounded-xl flex items-center justify-center text-estacio-navy">
                    <MapPin size={18} />
                  </div>
                  <h4 className="font-black text-estacio-navy uppercase text-[11px] italic tracking-widest">TOM JOBIM - BARRA</h4>
                </div>
                <div className="space-y-2">
                   <p className="text-[10px] font-black text-slate-400 uppercase">Ambiente Presencial:</p>
                   <p className="text-sm font-bold text-estacio-navy italic">Quarta, 09h às 19h</p>
                </div>
              </div>

              <div className="bg-white p-10 rounded-[4rem] shadow-xl border border-slate-100 group hover:border-estacio-amber/20 transition-all">
                <div className="flex gap-4 items-center mb-6">
                  <div className="w-10 h-10 bg-estacio-amber/5 rounded-xl flex items-center justify-center text-estacio-amber">
                    <MapPin size={18} />
                  </div>
                  <h4 className="font-black text-estacio-navy uppercase text-[11px] italic tracking-widest">R9 - TAQUARA</h4>
                </div>
                <div className="space-y-2">
                   <p className="text-[10px] font-black text-slate-400 uppercase">Ambiente Presencial:</p>
                   <p className="text-sm font-bold text-estacio-navy italic">Quinta, 09h às 19h</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-estacio-navy/5 rounded-[3rem] border border-dashed border-estacio-navy/20">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="text-estacio-amber" size={20} />
                <h6 className="font-black text-estacio-navy uppercase text-[10px] tracking-widest italic">Stack de Facilitação</h6>
              </div>
              <p className="text-[11px] font-bold text-slate-500 uppercase leading-relaxed">
                Meu papel é otimizar sua rota acadêmica. Se encontrar um "bloqueador" no seu progresso, não hesite em me acionar. Juntos, faremos o refactoring necessário para seu sucesso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaleCoordenador;
