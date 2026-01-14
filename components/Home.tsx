import React from 'react';
import { ViewType } from '../types';
import HeroSection from './HeroSection';
import CardsGrid from './CardsGrid';

interface HomeProps {
  onNavigate: (view: ViewType) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="fade-in">
      <HeroSection />
      <CardsGrid onNavigate={onNavigate} />
    </div>
  );
};

export default Home;