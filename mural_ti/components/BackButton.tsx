
import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { ViewType } from '../types';

const BackButton: React.FC = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = ViewType.HOME;
  };

  return (
    <a 
      href={ViewType.HOME} 
      onClick={handleClick}
      className="group inline-flex items-center gap-5 text-estacio-navy font-black uppercase text-[15px] tracking-[0.2em] mb-16 transition-all hover:opacity-90 active:scale-95"
    >
      <span className="w-14 h-14 rounded-full bg-estacio-navy flex items-center justify-center text-white shadow-xl shadow-estacio-navy/20 transition-transform group-hover:scale-110 duration-300">
        <ChevronLeft size={28} strokeWidth={3} />
      </span>
      VOLTAR
    </a>
  );
};

export default BackButton;
