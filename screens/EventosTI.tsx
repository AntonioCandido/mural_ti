import React from 'react';
import { CoordinatorWidget } from '../constants';
import { ChevronLeft } from 'lucide-react';
import Timeline, { EventItem } from '../components/Timeline';

const EVENTS: EventItem[] = [
  { date: '18 Mar 2026', name: 'Smart City Expo Curitiba', desc: 'Inovação pública, cidades inteligentes e ciência de dados.', link: 'https://agile7.com.br/blog/eventos-de-tecnologia-2026-o-que-esperar-do-calendario-no-brasil/' },
  { date: 'Maio 2026 (TBA)', name: 'Google I/O', desc: 'Próximos passos de Android e IA Generativa.', link: 'https://www.lifewire.com/google-io-5097160', tba: true },
  { date: 'Outubro 2026', name: 'Futurecom SP', desc: 'Conectividade e o futuro da infraestrutura digital.', link: 'https://blog.fantasticbrindes.com.br/eventos-de-tecnologia-e-inovacao/' },
  { date: '30 Nov 2026', name: 'AWS re:Invent', desc: 'O maior evento de Cloud do mundo (Las Vegas + Online).', link: 'https://reinvent.awsevents.com/' },
  { date: 'A Confirmar', name: 'Web Summit Rio', desc: 'O polo de startups e tecnologia no Rio de Janeiro.', link: 'https://www.nuvemshop.com.br/blog/eventos-de-tecnologia/', tba: true },
];

const EventosTI: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-8 fade-in">
      <a href="#/home" className="group inline-flex items-center gap-3 text-slate-400 hover:text-estacio-navy font-black uppercase text-[10px] tracking-widest mb-16 transition-all">
        <span className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-estacio-navy transition-colors">
          <ChevronLeft size={14} />
        </span>
        Voltar
      </a>

      <div className="max-w-5xl">
        <h2 className="text-4xl md:text-6xl font-black text-estacio-navy italic uppercase tracking-tighter mb-8">Eventos <span className="text-estacio-cyan">de TI 2026</span></h2>
        
        <p className="text-lg text-slate-500 font-medium mb-12 leading-relaxed">
          Mantenha-se atualizado com as maiores conferências nacionais e internacionais. Muitos oferecem transmissão remota gratuita!
        </p>

        <Timeline events={EVENTS} />

        <div className="mt-16 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Acompanhe também</p>
          <a href="https://brasil.campus-party.org/" target="_blank" rel="noopener noreferrer" className="text-estacio-navy font-black italic text-xl uppercase hover:text-estacio-cyan transition-colors">
            Campus Party Brasil
          </a>
        </div>

        <CoordinatorWidget tip="Eventos são as melhores janelas para o futuro. Participe para entender as novas tendências antes que elas virem padrão no mercado corporativo." />
      </div>
    </div>
  );
};

export default EventosTI;