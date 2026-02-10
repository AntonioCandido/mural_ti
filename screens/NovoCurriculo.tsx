
import React from 'react';
import BackButton from '../components/BackButton.tsx';
import CoordinatorWidget from '../components/CoordinatorWidget.tsx';
import { 
  GraduationCap, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Cpu, 
  Cloud, 
  Zap, 
  Award,
  BookOpenCheck,
  Target,
  BrainCircuit,
  Rocket
} from 'lucide-react';

const NovoCurriculo: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20 fade-in bg-slate-50/30">
      <BackButton />

      <div className="max-w-6xl mx-auto">
        {/* Hero Section - Marketing de Impacto */}
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-estacio-amber text-estacio-navy px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-amber-500/20">
              REBOOT 2026: O FUTURO É AGORA
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-estacio-navy italic uppercase tracking-tighter mb-8 leading-none">
            Sua Carreira na Velocidade das <span className="text-estacio-cyan text-stroke-navy">Big Techs</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-4xl leading-relaxed">
            Esqueça o modelo tradicional. O Novo Currículo 2026 foi desenhado para fechar o gap entre a sala de aula e o mercado de elite. Aqui, você não apenas estuda tecnologia; você <strong className="text-estacio-navy">constrói o futuro.</strong>
          </p>
        </header>

        {/* Pilares da Formação de Elite */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-estacio-navy rounded-full"></div>
            <h3 className="text-2xl font-black text-estacio-navy italic uppercase tracking-tight">O Binômio de Sucesso: Hard + Soft Skills</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pilar Tech */}
            <div className="bg-white p-10 md:p-14 rounded-[4rem] border border-slate-100 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-bl-[5rem] group-hover:bg-blue-600/10 transition-colors"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl">
                  <Cpu size={32} />
                </div>
                <h4 className="text-3xl font-black text-estacio-navy italic uppercase mb-6">Core Tecnológico</h4>
                <p className="text-slate-500 font-bold uppercase text-[11px] mb-8 leading-relaxed">
                  IA e Cloud no seu DNA. Implementação real com <span className="text-blue-600">Gemini API</span> e deploy em escala com <span className="text-blue-600">Vercel</span>.
                </p>
                <ul className="space-y-4">
                  {['IA Generativa Transversal', 'Arquitetura Serverless', 'Cloud Native (Firebase/Vercel)'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      <CheckCircle2 size={16} className="text-blue-600" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pilar Lab Vida */}
            <div className="bg-estacio-navy p-10 md:p-14 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[5rem]"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-estacio-cyan rounded-2xl flex items-center justify-center text-estacio-navy mb-8 shadow-xl">
                  <BrainCircuit size={32} />
                </div>
                <h4 className="text-3xl font-black text-white italic uppercase mb-6">Lab Vida</h4>
                <p className="text-white/60 font-bold uppercase text-[11px] mb-8 leading-relaxed">
                  O "Sistema Operacional" das suas competências humanas. De LV1 a LV8, transformamos seu potencial em <span className="text-estacio-cyan">liderança real</span>.
                </p>
                <ul className="space-y-4">
                  {['Inteligência Emocional Aplicada', 'Comunicação para Tech Leads', 'Gestão de Carreira e Portfólio'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[10px] font-black text-white/40 uppercase tracking-widest">
                      <CheckCircle2 size={16} className="text-estacio-cyan" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Trilhas Lab Vida: O seu Diferencial Competitivo */}
        <section className="mb-24 bg-white p-12 md:p-20 rounded-[5rem] border border-slate-100 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 p-10 opacity-5">
            <Rocket size={300} strokeWidth={1} />
          </div>
          
          <div className="relative z-10 max-w-4xl">
            <h3 className="text-4xl md:text-6xl font-black italic uppercase mb-8 tracking-tighter text-estacio-navy leading-none">
              Lab Vida:<br/>
              <span className="text-estacio-cyan text-stroke-navy">Seu Roadmap de Sucesso</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-estacio-cyan/10 flex items-center justify-center text-estacio-cyan shrink-0 font-black italic">
                    LV 1-4
                  </div>
                  <div>
                    <h5 className="font-black text-estacio-navy uppercase text-lg mb-2">Fundação Emocional</h5>
                    <p className="text-xs font-bold text-slate-400 uppercase leading-relaxed">
                      Autoconhecimento e comunicação assertiva. O foco é aprender a trabalhar em <span className="text-estacio-navy">equipes ágeis</span> e resolver conflitos antes que eles virem bugs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-estacio-amber/10 flex items-center justify-center text-estacio-amber shrink-0 font-black italic">
                    LV 5-8
                  </div>
                  <div>
                    <h5 className="font-black text-estacio-navy uppercase text-lg mb-2">Aceleração de Carreira</h5>
                    <p className="text-xs font-bold text-slate-400 uppercase leading-relaxed">
                      Foco total em <span className="text-estacio-navy">empregabilidade</span>. Preparação para processos seletivos globais e gestão estratégica do seu GitHub e LinkedIn.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
               <div className="flex items-center gap-4 mb-4">
                 <Zap className="text-estacio-amber" size={24} />
                 <h6 className="font-black text-estacio-navy uppercase text-xs tracking-widest italic">Por que isso é o seu diferencial?</h6>
               </div>
               <p className="text-xs font-bold text-slate-500 uppercase leading-relaxed">
                 Recrutadores de grandes empresas (Google, Amazon, NuBank) buscam profissionais que sabem codar, mas contratam aqueles que sabem <span className="text-estacio-navy">colaborar e evoluir</span>. O Lab Vida garante que você seja esse profissional.
               </p>
            </div>
          </div>
        </section>

        {/* Evolução de Aprendizado */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-estacio-amber rounded-full"></div>
            <h3 className="text-2xl font-black text-estacio-navy italic uppercase tracking-tight">A Evolução do Ensino</h3>
          </div>
          <div className="bg-slate-900 rounded-[4rem] overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-12 md:p-16 border-b md:border-b-0 md:border-r border-white/5">
                <h4 className="text-white/30 font-black uppercase text-[10px] tracking-[0.3em] mb-10 italic">O que ficou para trás</h4>
                <ul className="space-y-6">
                  {['Teoria sem aplicação imediata', 'IA como tema isolado', 'Foco apenas em Hard Skills'].map((text, i) => (
                    <li key={i} className="flex gap-4 items-center opacity-40">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <span className="text-white text-xs font-bold uppercase">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-12 md:p-16 bg-gradient-to-br from-estacio-navy to-slate-900">
                <h4 className="text-estacio-cyan font-black uppercase text-[10px] tracking-[0.3em] mb-10 italic">O Novo Padrão 2026</h4>
                <ul className="space-y-6">
                  {['Código em Deploy desde o dia 1', 'IA como ferramenta transversal', 'Trilha Lab Vida (LV1 a LV8)'].map((text, i) => (
                    <li key={i} className="flex gap-4 items-center">
                      <CheckCircle2 className="text-estacio-cyan" size={20} />
                      <span className="text-white text-xs font-black uppercase tracking-tight">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CoordinatorWidget tip="O Currículo 2026 não é apenas uma mudança de grade, é um compromisso com sua empregabilidade. O Lab Vida é o seu maior trunfo para chegar ao topo." />
      </div>
    </div>
  );
};

export default NovoCurriculo;
