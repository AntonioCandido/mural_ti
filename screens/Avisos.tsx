
import React, { useState } from 'react';
import BackButton from '../components/BackButton.tsx';
import CoordinatorWidget from '../components/CoordinatorWidget.tsx';
import { 
  Megaphone, 
  AlertTriangle, 
  Calendar, 
  Info, 
  Clock, 
  Filter,
  ArrowRight,
  Bell
} from 'lucide-react';

interface Notice {
  id: number;
  type: 'urgent' | 'academic' | 'event';
  title: string;
  date: string;
  content: string;
  priority: boolean;
}

const NOTICES: Notice[] = [
  { 
    id: 1, 
    type: 'urgent', 
    title: 'RENOVAÇÃO DE MATRÍCULA 2026.1', 
    date: 'Hoje', 
    content: 'Atenção! O prazo para renovação sem juros encerra na próxima sexta-feira. Verifique pendências no SIA para evitar bloqueio de acesso ao SAVA.', 
    priority: true 
  },
  { 
    id: 2, 
    type: 'academic', 
    title: 'LANÇAMENTO DE NOTAS AV1', 
    date: '2 dias atrás', 
    content: 'O sistema SIA já está aberto para lançamento das notas. Em caso de divergência, procure o professor da disciplina via Teams.', 
    priority: false 
  },
  { 
    id: 3, 
    type: 'event', 
    title: 'TECH WEEK 2026 - INSCRIÇÕES', 
    date: '1 semana atrás', 
    content: 'As inscrições para os workshops de IA e Cloud Computing estão abertas. Vagas limitadas por laboratório.', 
    priority: false 
  },
  { 
    id: 4, 
    type: 'academic', 
    title: 'HORAS AAC: PRAZO FINAL', 
    date: '3 dias atrás', 
    content: 'Lembrete para formandos: o envio de certificados de atividades complementares deve ser feito até o final deste mês.', 
    priority: true 
  }
];

const Avisos: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'urgent' | 'academic' | 'event'>('all');

  const filteredNotices = filter === 'all' 
    ? NOTICES 
    : NOTICES.filter(n => n.type === filter);

  return (
    <div className="container mx-auto px-6 py-12 md:py-20 fade-in bg-slate-50/30 min-h-screen">
      <BackButton />

      <div className="max-w-6xl mx-auto">
        {/* Header da Página */}
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-estacio-navy text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest italic">
              Official Feed: Coordinator Channel
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-estacio-navy italic uppercase tracking-tighter mb-8 leading-none">
            Avisos da <span className="text-estacio-cyan text-stroke-navy">Coordenação</span>
          </h2>
          
          {/* Filtros */}
          <div className="flex flex-wrap gap-3 mt-12">
            {[
              { id: 'all', label: 'Todos', icon: Megaphone },
              { id: 'urgent', label: 'Urgente', icon: AlertTriangle },
              { id: 'academic', label: 'Acadêmico', icon: Info },
              { id: 'event', label: 'Eventos', icon: Calendar },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id as any)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  filter === btn.id 
                  ? 'bg-estacio-navy text-white shadow-xl shadow-navy/20' 
                  : 'bg-white text-slate-400 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <btn.icon size={14} />
                {btn.label}
              </button>
            ))}
          </div>
        </header>

        {/* Feed de Avisos */}
        <div className="space-y-8 mb-24">
          {filteredNotices.map((notice) => {
            const isUrgent = notice.type === 'urgent';
            
            return (
              <div 
                key={notice.id} 
                className={`group relative bg-white rounded-[3.5rem] p-10 shadow-xl border-2 transition-all duration-500 hover:-translate-y-1 ${
                  isUrgent ? 'border-red-500/20 shadow-red-500/5' : 'border-white'
                }`}
              >
                {/* Status Indicator */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      notice.type === 'urgent' ? 'bg-red-500 text-white' : 
                      notice.type === 'academic' ? 'bg-blue-600 text-white' : 
                      'bg-estacio-amber text-estacio-navy'
                    } shadow-lg`}>
                      {notice.type === 'urgent' ? <AlertTriangle size={24} /> : 
                       notice.type === 'academic' ? <Info size={24} /> : 
                       <Calendar size={24} />}
                    </div>
                    <div>
                      <h4 className={`text-xl font-black italic uppercase tracking-tight ${
                        isUrgent ? 'text-red-600' : 'text-estacio-navy'
                      }`}>
                        {notice.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock size={12} className="text-slate-400" />
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{notice.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  {isUrgent && (
                    <div className="bg-red-500/10 text-red-600 px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-widest animate-pulse border border-red-500/20">
                      Ação Requerida Imadiata
                    </div>
                  )}
                </div>

                <p className="text-slate-500 font-bold uppercase text-[11px] leading-relaxed mb-10 max-w-4xl">
                  {notice.content}
                </p>

                <div className="flex items-center justify-between pt-8 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-[9px] font-black text-slate-300 uppercase tracking-widest">
                    Postado por: Coordenação TI
                  </div>
                  <button className="flex items-center gap-3 text-estacio-navy font-black text-[10px] uppercase tracking-widest group-hover:text-estacio-cyan transition-colors">
                    Detalhes <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <CoordinatorWidget tip="Mantenha o radar ligado. No mundo da tecnologia, o timing é tão importante quanto o código. Não deixe seus avisos acumularem!" />
      </div>
    </div>
  );
};

export default Avisos;
