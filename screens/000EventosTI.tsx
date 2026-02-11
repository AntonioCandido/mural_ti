
import React from 'react';
import CoordinatorWidget from '../components/CoordinatorWidget.tsx';
import BackButton from '../components/BackButton.tsx';
import { 
  Globe, ExternalLink, Calendar, MapPin, 
  Zap, Award, Users, Sparkles, BookOpen, GraduationCap,
  Star, Handshake
} from 'lucide-react';
import Timeline, { EventItem } from '../components/Timeline';

const MessageSquareIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const BRAZIL_EVENTS = [
  { name: 'Campus Party Brasil', date: 'Setembro 2026', local: 'São Paulo, SP', foco: 'Inovação e Comunidade', desc: 'O maior festival de tecnologia e criatividade do mundo.', link: 'https://brasil.campus-party.org/', special: true },
  { name: 'Web Summit Rio', date: '08 a 11 de Junho', local: 'Rio de Janeiro, RJ', foco: 'Inovação e Startups', desc: 'O maior evento de tecnologia do Rio.', link: 'https://rio.websummit.com/' },
];

const INTERNATIONAL_EVENTS = [
  { name: 'CES 2026', date: 'Jan 06-09', local: 'Las Vegas', desc: 'Hardware e ecossistemas de IA.', link: 'https://www.ces.tech/', icon: Zap },
  { name: 'AWS re:Invent', date: 'Nov 30', local: 'Las Vegas', desc: 'A maior conferência de Cloud do mundo.', link: 'https://aws.amazon.com/events/', icon: Sparkles },
];

const TIMELINE_EVENTS: EventItem[] = [
  { date: '06 Jan 2026', name: 'CES 2026', desc: 'Hardware & IA global.', link: 'https://www.ces.tech/' },
  { date: '08 Jun 2026', name: 'Web Summit Rio', desc: 'Hub de inovação no RJ.', link: 'https://rio.websummit.com/' },
];

const EventosTI: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20 fade-in bg-slate-50/30">
      <BackButton />

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
            A participação em eventos é o combustível para sua rede de contatos e atualização técnica. Explore o calendário 2026.
          </p>
        </header>

        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-pink-600 rounded-full"></div>
            <h3 className="text-2xl font-black text-estacio-navy italic uppercase tracking-tight">🇧🇷 Eventos no Brasil</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BRAZIL_EVENTS.map((event, i) => (
              <div key={i} className={`group relative bg-white p-8 md:p-10 rounded-[3rem] border transition-all duration-500 hover:-translate-y-2 flex flex-col h-full shadow-xl ${event.special ? 'border-estacio-amber/40' : 'border-slate-100'}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${event.special ? 'bg-estacio-amber/10 text-estacio-amber' : 'bg-pink-100 text-pink-600'}`}>
                    {event.special ? <Sparkles size={24} /> : <Calendar size={24} />}
                  </div>
                  <div>
                    <h4 className="font-black text-estacio-navy italic text-xl uppercase tracking-tighter leading-tight">{event.name}</h4>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{event.date}</span>
                  </div>
                </div>
                <p className="text-[11px] font-bold text-slate-500 uppercase leading-relaxed mb-8 flex-grow">{event.desc}</p>
                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                  <a href={event.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-100 text-estacio-navy rounded-xl flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all">
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CoordinatorWidget tip="A tecnologia muda rápido, mas os fundamentos permanecem. Participe!" />
      </div>
    </div>
  );
};

export default EventosTI;
