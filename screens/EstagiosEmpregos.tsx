
import React from 'react';
import CoordinatorWidget from '../components/CoordinatorWidget.tsx';
import BackButton from '../components/BackButton.tsx';
import { 
  Rocket, Globe, Briefcase, Zap, ExternalLink, 
  Smartphone, Code2, Search, 
  BookOpen, Target, Layout, CheckCircle,
  CircleDollarSign, ShieldCheck, Database
} from 'lucide-react';

const FEATURED_PROGRAMS = [
  { name: 'Vivo 2026', link: 'https://www.estagiovivo2026.com.br/', desc: 'Focado em Tecnologia & Digital, com trilhas de aprendizado e benefícios como smartphone.', color: 'purple', salary: 'R$ 1.500 - 2.400' },
  { name: 'Nubank', link: 'https://estagio.nubank.com.br/', desc: 'Vagas para Engenharia de Software, Ciência de Dados e Design.', color: 'indigo', salary: 'R$ 2.800 - 3.500' },
  { name: 'Subsea7 (RJ)', link: 'https://app.eureca.me/', desc: 'Híbridas na região metropolitana do RJ (Rio/Niterói) para cursos de TI.', color: 'blue', salary: 'R$ 1.800 - 2.600' },
  { name: 'Andrade Gutierrez', link: 'https://www.ciadeestagios.com.br/vagas/andradegutierrez/', desc: 'Focado em inovação e engenharia, aceitando ADS e Computação.', color: 'emerald', salary: 'R$ 1.600 - 2.200' },
  { name: 'Scania 2026', link: 'https://estagioscania.com.br/', desc: 'Foco em sustentabilidade e tecnologia de transporte.', color: 'red', salary: 'R$ 1.800 - 2.700' },
  { name: 'Shopee', link: 'https://www.ciadeestagios.com.br/vagas/shopee/', desc: 'Inscrições abertas até fevereiro de 2026 via Cia de Estágios.', color: 'orange', salary: 'R$ 1.800 - 2.500' },
];

const SPECIALIZED_BOARDS = [
  { title: 'GeekHunter', url: 'https://www.geekhunter.com.br/', desc: 'Exclusiva para devs e dados. As empresas buscam você.', icon: Search, tag: 'Talentos' },
  { title: 'Programathor', url: 'https://programathor.com.br/', desc: 'Um dos maiores portais de vagas para programadores.', icon: Code2, tag: 'Devs' },
  { title: 'Nerdin', url: 'https://www.nerdin.com.br/vagas.php', desc: 'Excelente para nível Júnior e Estágio.', icon: Zap, tag: 'Junior' },
  { title: 'APInfo', url: 'https://www.apinfo.com/apinfo/', desc: 'Eficiente para consultorias de TI tradicionais.', icon: Briefcase, tag: 'Consultoria' },
];

const EXTRA_RESOURCES = [
  { title: 'E-BOOK GRÁTIS', desc: 'Guia completo sobre Empregabilidade em TI.', action: 'DOWNLOAD PDF', icon: BookOpen, color: 'bg-indigo-600', link: 'https://cdn.portal.estacio.br/empregabilidade_estacio_37a8c1bb2c.pdf' },
  { title: 'CIEE', desc: 'Portal oficial para contratação de estagiários.', action: 'VER VAGAS', icon: Target, color: 'bg-blue-600', link: 'https://web.ciee.org.br/login' },
  { title: 'VAGAS ESTÁCIO', desc: 'Encontre Sua Vaga - Exclusivo para alunos.', action: 'ACESSAR HUB', icon: Globe, color: 'bg-estacio-cyan', link: 'https://www.encontresuavaga.com.br/' },
  { title: 'TESTADOR BETA', desc: 'Ganhe dinheiro testando apps reais.', action: 'TESTERWORK', icon: Smartphone, color: 'bg-purple-600', link: 'https://testerwork.com/' },
  { title: 'FREELANCE', desc: 'Inicie sua carreira com projetos reais.', action: 'WORKANA BR', icon: Globe, color: 'bg-amber-500', link: 'https://www.workana.com/' },
];

const EstagiosEmpregos: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20 fade-in">
      <BackButton />

      <div className="max-w-6xl mx-auto">
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-estacio-cyan/10 text-estacio-cyan px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-estacio-cyan/20">
              Carreira TI 2026
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-estacio-navy italic uppercase tracking-tighter mb-8 leading-none">
            Estágios e <span className="text-estacio-cyan">Empregos</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-medium mb-12 leading-relaxed max-w-4xl">
            Sua conexão direta com as maiores empresas do país. Explore programas estruturados e plataformas de nicho para acelerar sua entrada no mercado.
          </p>
        </header>

        <section className="mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {EXTRA_RESOURCES.map((res, i) => (
              <a 
                key={i} 
                href={res.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${res.color} group relative p-8 rounded-[2.5rem] flex flex-col items-center text-center text-white shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden h-full`}
              >
                <div className="absolute inset-0 bg-white/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform">
                  <res.icon size={28} className={res.color.replace('bg-', 'text-')} />
                </div>
                <h4 className="font-black text-xs uppercase tracking-widest mb-3 leading-tight">{res.title}</h4>
                <p className="text-[10px] font-bold opacity-80 leading-relaxed mb-6 flex-grow">{res.desc}</p>
                <div className="mt-auto pt-4 border-t border-white/20 w-full flex items-center justify-center gap-2 text-[9px] font-black uppercase tracking-widest">
                  {res.action} <ExternalLink size={12} />
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-estacio-amber rounded-full"></div>
            <h3 className="text-2xl font-black text-estacio-navy italic uppercase tracking-tight">Programas 2026 (Grandes Empresas)</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_PROGRAMS.map((prog, i) => {
              const colors: Record<string, string> = {
                purple: 'border-purple-500 bg-purple-50 text-purple-600',
                indigo: 'border-indigo-500 bg-indigo-50 text-indigo-600',
                orange: 'border-orange-500 bg-orange-50 text-orange-600',
                blue: 'border-blue-500 bg-blue-50 text-blue-600',
                emerald: 'border-emerald-500 bg-emerald-50 text-emerald-600',
                red: 'border-red-500 bg-red-50 text-red-600',
              };

              return (
                <a 
                  key={i} 
                  href={prog.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`group relative p-10 rounded-[3.5rem] border-2 shadow-xl transition-all duration-300 flex flex-col h-full hover:shadow-2xl ${colors[prog.color] || 'border-slate-200'}`}
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                    <Rocket size={24} />
                  </div>
                  <h4 className="font-black text-estacio-navy italic text-2xl mb-2 uppercase tracking-tight leading-none">{prog.name}</h4>
                  
                  <div className="flex items-center gap-2 mb-4 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                    <CircleDollarSign size={14} className="text-emerald-500" />
                    <span>Est. {prog.salary}</span>
                  </div>

                  <p className="text-[11px] font-bold text-slate-500 uppercase leading-relaxed mb-8 flex-grow">
                    {prog.desc}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-estacio-navy border-t border-slate-200 pt-6">
                    Inscrição <ExternalLink size={14} />
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        <section className="mb-24 bg-slate-950 p-12 md:p-20 rounded-[5rem] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-estacio-cyan/5 blur-[120px] rounded-full"></div>
          
          <div className="flex flex-col lg:flex-row gap-16 relative z-10">
            <div className="lg:w-1/3">
              <h3 className="text-4xl font-black italic uppercase mb-6 tracking-tighter leading-none">Plataformas <span className="text-estacio-cyan">Nicho TI</span></h3>
              <p className="text-white/40 font-medium text-sm leading-relaxed mb-10">
                Portais onde o recrutamento é focado em competências técnicas reais. Filtre as melhores oportunidades de programação e dados.
              </p>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SPECIALIZED_BOARDS.map((board, i) => (
                <a key={i} href={board.url} target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-[3rem] group hover:scale-[1.02] transition-all flex flex-col h-full border border-slate-200">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-estacio-navy">
                      <board.icon size={24} />
                    </div>
                    <span className="text-[9px] font-black uppercase text-slate-400 border border-slate-100 px-3 py-1 rounded-full">{board.tag}</span>
                  </div>
                  <h4 className="text-estacio-navy font-black text-xl mb-2 uppercase italic tracking-tight">{board.title}</h4>
                  <p className="text-slate-500 text-[11px] font-bold leading-relaxed">{board.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <CoordinatorWidget tip="Estágio não é apenas trabalho, é a extensão da sala de aula. Programas como o do Vivo e Nubank são escolas corporativas que mudarão sua trajetória. Não espere o último ano para começar!" />
      </div>
    </div>
  );
};

export default EstagiosEmpregos;
