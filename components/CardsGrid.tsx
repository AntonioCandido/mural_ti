import React from 'react';
import { CARDS, getIcon } from '../constants';
import { ViewType } from '../types';

interface CardsGridProps {
  onNavigate: (view: ViewType) => void;
}

const CardsGrid: React.FC<CardsGridProps> = ({ onNavigate }) => {
  return (
    <section className="container mx-auto px-6 py-10 md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
        {CARDS.map((card) => (
          <div 
            key={card.id}
            onClick={() => onNavigate(card.id)}
            className="card-estacio p-6 cursor-pointer flex flex-col items-start group relative overflow-hidden h-full min-h-[210px] justify-between"
          >
            {/* Top Accent Strip */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-estacio-cyan transition-colors duration-300"></div>
            
            <div className="w-full">
              <div className={`w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center ${card.color} mb-4 transition-all group-hover:bg-estacio-navy group-hover:text-white group-hover:scale-105 shadow-inner overflow-hidden`}>
                {getIcon(card.icon, card.id === ViewType.COORDENADOR ? 48 : 24)}
              </div>
              
              <h4 className="text-base font-extrabold mb-2 text-estacio-navy group-hover:text-estacio-cyan transition-colors leading-snug">
                {card.title}
              </h4>
              
              <p className="text-gray-500 text-[11px] md:text-xs leading-relaxed font-medium line-clamp-2">
                {card.description}
              </p>
            </div>

            {/* Subtle indicator of interactivity */}
            <div className="mt-3 w-6 h-1 bg-estacio-cyan/20 group-hover:w-12 group-hover:bg-estacio-cyan transition-all duration-500 rounded-full"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardsGrid;