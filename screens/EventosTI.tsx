
import React from 'react';
import { CoordinatorWidget } from '../constants';
import { 
  ChevronLeft, Globe, ExternalLink, Calendar, MapPin, 
  Zap, Award, Users, Sparkles, BookOpen, GraduationCap 
} from 'lucide-react';
import Timeline, { EventItem } from '../components/Timeline';

// Ícones Auxiliares movidos para o topo para evitar erro de escopo (TDZ)
const MessageSquareIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const CheckCircleIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const BRAZIL_EVENTS = [
  { name: 'Web Summit Rio', date: '08 a 11 de Junho', local: 'Rio de Janeiro', foco: 'Inovação e Startups', link: 'https://rio.websummit.com/' },
  { name: 'CSBC 2026', date: '19 a 23 de Julho', local: 'Gramado, RS', foco: 'Acadêmico e Científico', link: 'https://csbc.sbc.org.br/2026/' },
  { name: 'Febraban Tech', date: '24 a 26 de Agosto', local: 'São Paulo', foco: 'Fintech e Segurança', link: 'https://www.febrabantech.com.br/' },
  { name: 'TDC (The Developer\'s Conference)', date: 'Várias Datas', local: 'SP, RJ, DF', foco: 'Desenvolvimento de Software', link: 'https://thedevconf.com/' },
  { name: 'Futurecom', date: '06 a 08 de Outubro', local: 'São Paulo', foco: 'Telecom e Conectividade', link: 'https://www.futurecom.com.br/' },
  { name: 'IA Conference Brasil', date: '24 de Setembro', local: 'São Paulo', foco: 'Inteligência Artificial', link: 'https://www.iaconferencebrasil.com.br/' },
];

const INTERNATIONAL_EVENTS = [
  { name: 'CES 2026', date: 'Jan 06-09', local: 'Las Vegas', desc: 'O maior palco mundial de hardware e ecossistemas de IA.', link: 'https://www.ces.tech/', icon: Zap },
  { name: 'Google Cloud Next', date: 'Abril 22-24', local: 'Las Vegas', desc: 'Focado em Nuvem, IA Generativa e Segurança.', link: 'https://cloud.google.com/events', icon: Globe },
  { name: 'Gartner IT Symposium', date: 'Nov 09-12', local: 'Barcelona', desc: 'O evento definitivo para futuras lideranças e estratégia de TI.', link: 'https://www.gartner.com/en/conferences/emea/symposium-spain', icon: Award },
  { name: 'Microsoft Ignite', date: 'Nov 17-20', local: 'San Francisco', desc: 'Foco total em ferramentas de IA (Copilot).', link: 'https://ignite.microsoft.com/', icon: MessageSquareIcon },
  { name: 'AWS re:Invent', date: 'Nov 30 - Dez 04', local: 'Las Vegas', desc: 'A maior conferência de Cloud do mundo.', link: 'https://aws.amazon.com/events/', icon: Sparkles },
];

const TIMELINE_EVENTS: EventItem[] = [
  { date: '06 Jan 2026', name: 'CES 2026', desc: 'Hardware & IA global.', link: 'https://www.ces.tech/' },
  { date: '18 Mar 2026', name: 'Smart City Expo Curitiba', desc: 'Inovação pública e cidades inteligentes.', link: 'https://agile7.com.br/blog/eventos-de-tecnologia-2026-o-que-esperar-do-calendario-no-brasil/' },
  { date: '22 Abr 2026', name: 'Google Cloud Next', desc: 'Cloud, IA e infraestrutura Google.', link: 'https://cloud.google.com/events' },
  { date: 'Maio 2026 (TBA)', name: 'Google I/O', desc: 'Próximos passos de Android e IA.', link: 'https://www.lifewire.com/google-io-5097160', tba: true },
  { date: '08 Jun 2026', name: 'Web Summit Rio', desc: 'Hub de inovação e startups no RJ.', link: 'https://rio.websummit.com/' },
  { date: '19 Jul 2026', name: 'CSBC 2026', desc: 'O maior congresso científico de computação do Brasil.', link: 'https://csbc.sbc.org.br/2026/' },
  { date: '24 Ago 2026', name: 'Febraban Tech', desc: 'Inovação bancária e segurança digital.', link: 'https://www.febrabantech.com.br/' },
  { date: '24 Set 2026', name: 'IA Conference Brasil', desc: 'Inteligência Artificial aplicada.', link: 'https://www.iaconferencebrasil.com.br/' },
  { date: '06 Out 2026', name: 'Futurecom', desc: 'Conectividade e 5G/6G.', link: 'https://www.futurecom.com.br/' },
  { date: '17 Nov 2026', name: 'Microsoft Ignite', desc: 'Ecossistema Microsoft e Copilot.', link: 'https://ignite.microsoft.com/' },
  { date: '30 Nov 2026', name: 'AWS re:Invent', desc: 'Gigante da Cloud em Las Vegas.', link: 'https://aws.amazon.com/events/' },
];

const EventosTI: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20 fade-in bg-slate-50/30">
      <a href="#/home" className="group inline-flex items-center gap-3 text-slate-400 hover:text-estacio-navy font-black uppercase text-[10px] tracking-widest mb-16 transition-all">
        <span className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:bg-estacio-navy group-hover:text-white group-hover:border-estacio-navy shadow-sm transition-all duration-300">
          <ChevronLeft size={18} />
        </span>
        Voltar
      </a>

      <div className="max-w-6xl mx-auto">
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-pink-600/10 text-pink-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-pink-600/20">
              Tech Agenda 2026
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-estacio-navy italic uppercase tracking-tighter mb-8 leading-none">
            Eventos <span className="text-pink-600">de TI</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-4xl leading-relaxed">
            A participação em eventos é um diferencial para o networking e atualização técnica. Explore o calendário 2026 focado em Inovação, IA e Desenvolvimento.
          </p>
        </header>

        {/* --- SEÇÃO: BRASIL (TABELA) --- */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-pink-600 rounded-full"></div>
            <h3 className="text-2xl font-black text-estacio-navy italic uppercase tracking-tight">🇧🇷 Eventos no Brasil</h3>
          </div>
          
          <div className="bg-white rounded-[4rem] border border-slate-100 shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="p-8 text-[11px] font-black uppercase text-slate-400 tracking-widest">Evento</th>
                    <th className="p-8 text-[11px] font-black uppercase text-slate-400 tracking-widest">Data</th>
                    <th className="p-8 text-[11px] font-black uppercase text-slate-400 tracking-widest">Local</th>
                    <th className="p-8 text-[11px] font-black uppercase text-slate-400 tracking-widest">Foco Principal</th>
                    <th className="p-8 text-[11px] font-black uppercase text-slate-400 tracking-widest text-right">Link</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {BRAZIL_EVENTS.map((event, i) => (
                    <tr key={i} className="hover:bg-pink-50/30 transition-colors group">
                      <td className="p-8">
                        <span className="font-black text-estacio-navy italic text-xl uppercase tracking-tight group-hover:text-pink-600 transition-colors">
                          {event.name}
                        </span>
                      </td>
                      <td className="p-8">
                        <div className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase">
                          <Calendar size={14} className="text-pink-600" /> {event.date}
                        </div>
                      </td>
                      <td className="p-8">
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase">
                          <MapPin size={14} /> {event.local}
                        </div>
                      </td>
                      <td className="p-8">
                        <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{event.foco}</span>
                      </td>
                      <td className="p-8 text-right">
                        <a href={event.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 text-estacio-navy rounded-2xl hover:bg-pink-600 hover:text-white transition-all shadow-sm">
                          <ExternalLink size={18} />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* --- SEÇÃO: INTERNACIONAL (CARDS) --- */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-estacio-cyan rounded-full"></div>
            <h3 className="text-2xl font-black text-estacio-navy italic uppercase tracking-tight">🌍 Conferências Internacionais</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INTERNATIONAL_EVENTS.map((event, i) => (
              <a 
                key={i} 
                href={event.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white p-12 rounded-[4rem] border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all flex flex-col h-full overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[5rem] group-hover:bg-estacio-cyan/10 transition-colors"></div>
                <div className="relative z-10 w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-estacio-navy mb-8 group-hover:scale-110 transition-transform">
                  <event.icon size={28} />
                </div>
                <div className="relative z-10 mb-4">
                  <span className="text-[9px] font-black text-estacio-cyan uppercase tracking-widest">{event.date} • {event.local}</span>
                </div>
                <h4 className="relative z-10 font-black italic uppercase text-2xl mb-4 tracking-tight text-estacio-navy">{event.name}</h4>
                <p className="relative z-10 text-[11px] font-bold text-slate-400 uppercase leading-relaxed mb-8 flex-grow">
                  {event.desc}
                </p>
                <div className="relative z-10 mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-estacio-cyan opacity-60 group-hover:opacity-100 transition-opacity">
                  Site Oficial <ExternalLink size={14} />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* --- SEÇÃO: ACADÊMICO (CSBC DESTAQUE) --- */}
        <section className="mb-24 bg-slate-900 p-12 md:p-20 rounded-[5rem] text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-20 opacity-10">
            <GraduationCap size={300} strokeWidth={1} />
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 text-pink-500 mb-6">
                <BookOpen size={24} />
                <span className="text-[11px] font-black uppercase tracking-[0.3em]">Destaque Acadêmico 2026</span>
              </div>
              <h3 className="text-4xl md:text-6xl font-black italic uppercase mb-8 tracking-tighter leading-none">
                Congresso <br/> da <span className="text-pink-600 text-stroke-white">SBC (CSBC)</span>
              </h3>
              <p className="text-white/50 font-medium text-lg mb-10 leading-relaxed italic">
                Tema 2026: "Transformação Digital para um Mundo em Emergência Climática". É o local definitivo para TCCs, Iniciação Científica e fóruns de coordenação.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-sm font-bold"><CheckCircleIcon size={16} className="text-pink-500" /> Concursos de Teses e Dissertações</li>
                <li className="flex items-center gap-3 text-sm font-bold"><CheckCircleIcon size={16} className="text-pink-500" /> Concursos de Trabalhos de Iniciação Científica (CTIC)</li>
                <li className="flex items-center gap-3 text-sm font-bold"><CheckCircleIcon size={16} className="text-pink-500" /> Fóruns de Coordenadores de Cursos de TI</li>
              </ul>
              <a 
                href="https://csbc.sbc.org.br/2026/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-white text-estacio-navy px-10 py-5 rounded-[2.5rem] font-black uppercase italic tracking-widest text-[11px] hover:bg-pink-600 hover:text-white transition-all shadow-xl"
              >
                Detalhes do Congresso <ExternalLink size={16} />
              </a>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-10 rounded-[3.5rem] backdrop-blur-md">
              <div className="flex items-center gap-3 mb-6 text-pink-500">
                <Users size={20} />
                <span className="text-[10px] font-black uppercase tracking-widest">Dica para Alunos</span>
              </div>
              <p className="text-white font-bold italic text-xl leading-relaxed mb-8">
                "Muitos eventos como o Web Summit e Campus Party possuem programas de voluntariado. Participe gratuitamente e ganhe certificados de horas complementares!"
              </p>
              <div className="flex gap-4">
                 <div className="bg-white/10 px-6 py-4 rounded-2xl border border-white/10 flex flex-col items-center">
                    <span className="text-pink-500 font-black text-xl">Gratuito</span>
                    <span className="text-[8px] font-black uppercase opacity-60">Via Voluntariado</span>
                 </div>
                 <div className="bg-white/10 px-6 py-4 rounded-2xl border border-white/10 flex flex-col items-center">
                    <span className="text-estacio-cyan font-black text-xl">AAC</span>
                    <span className="text-[8px] font-black uppercase opacity-60">Horas Válidas</span>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- TIMELINE (PRESERVADA E ATUALIZADA) --- */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-slate-400 rounded-full"></div>
            <h3 className="text-2xl font-black text-estacio-navy italic uppercase tracking-tight text-center md:text-left">Linha do Tempo 2026</h3>
          </div>
          <Timeline events={TIMELINE_EVENTS} />
        </section>

        <div className="mt-16 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Outros Hubs de Inovação</p>
          <div className="flex flex-wrap justify-center gap-12">
            <a href="https://brasil.campus-party.org/" target="_blank" rel="noopener noreferrer" className="text-estacio-navy font-black italic text-xl uppercase hover:text-pink-600 transition-colors">
              Campus Party Brasil
            </a>
            <a href="https://rio.websummit.com/" target="_blank" rel="noopener noreferrer" className="text-estacio-navy font-black italic text-xl uppercase hover:text-pink-600 transition-colors">
              Web Summit Rio
            </a>
          </div>
        </div>

        <CoordinatorWidget tip="Eventos são as melhores janelas para o futuro. Participe ativamente do CSBC ou busque ser voluntário no Web Summit para entender as novas tendências antes que elas virem padrão no mercado." />
      </div>
    </div>
  );
};

export default EventosTI;
