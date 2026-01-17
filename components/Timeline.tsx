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
            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-estacio-cyan rounded-full transform -translate-x-1/2 z-10 hidden md:block border-4 border-white"></div>
            
            {/* Content Card */}
            <div className="w-full md:w-5/12 ml-6 md:ml-0">
              <a 
                href={event.link} 
                target="_blank"
                className="block bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${event.tba ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'}`}>
                    {event.date}
                  </span>
                </div>
                <h4 className="font-black text-estacio-navy italic text-xl mb-3 uppercase tracking-tight">{event.name}</h4>
                <p className="text-xs text-slate-400 font-bold leading-relaxed">{event.desc}</p>
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