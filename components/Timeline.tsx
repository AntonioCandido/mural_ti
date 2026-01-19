
import React from 'react';

export interface EventItem {
  date: string;
  name: string;
  desc: string;
  link: string;
  tba?: boolean;
}

interface TimelineProps {
  events: EventItem[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="relative py-12">
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 transform -translate-x-1/2 hidden md:block"></div>
      
      <div className="space-y-12">
        {events.map((event, i) => (
          <div key={i} className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            {/* Dot */}
            <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-estacio-cyan rounded-full transform -translate-x-1/2 z-10 hidden md:block border-4 border-white shadow-lg"></div>
            
            {/* Content Card - Always Active */}
            <div className="w-full md:w-5/12 ml-6 md:ml-0">
              <a 
                href={event.link} 
                target="_blank"
                className={`block p-8 rounded-[2.5rem] border shadow-2xl -translate-y-1 transition-all relative overflow-hidden ${
                  event.tba ? 'bg-estacio-amber border-amber-400' : 'bg-estacio-navy border-blue-800'
                }`}
              >
                <div className="absolute inset-0 bg-white/10"></div>
                <div className="relative z-10 flex justify-between items-start mb-4">
                  <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-white shadow-sm ${
                    event.tba ? 'text-estacio-amber' : 'text-estacio-navy'
                  }`}>
                    {event.date}
                  </span>
                </div>
                <h4 className={`relative z-10 font-black italic text-xl mb-3 uppercase tracking-tight ${
                   event.tba ? 'text-estacio-navy' : 'text-white'
                }`}>{event.name}</h4>
                <p className={`relative z-10 text-[10px] font-bold leading-relaxed opacity-80 ${
                   event.tba ? 'text-estacio-navy/70' : 'text-white/70'
                }`}>{event.desc}</p>
              </a>
            </div>
            
            {/* Spacer for non-active side */}
            <div className="hidden md:block w-5/12"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
