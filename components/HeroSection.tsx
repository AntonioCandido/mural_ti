
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-gradient text-white pt-24 pb-32 md:pt-32 md:pb-40 px-6 overflow-hidden">
      <div className="container mx-auto text-center max-w-5xl">
        <div className="inline-block px-5 py-2 bg-[#00aeef] text-white text-[9px] sm:text-[11px] font-black uppercase tracking-[0.15em] rounded-md mb-12 sm:mb-14 shadow-lg shadow-[#00aeef]/20">
          PORTAL DE TECNOLOGIA DA INFORMAÇÃO
        </div>
        
        <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-10 leading-[1.15] tracking-tighter italic break-words">
          Conectando você ao <br className="hidden sm:block"/>
          <span className="text-[#00aeef]">Mercado de TI</span>
        </h2>
        
        <p className="text-base sm:text-lg md:text-2xl text-blue-100/80 leading-relaxed font-medium max-w-4xl mx-auto">
          Impulsione sua carreira tech na Estácio! Vagas de estágio, orientação acadêmica e dicas exclusivas para alunos de ADS e Ciência da Computação. O suporte que você precisa para sair da faculdade direto para o mercado.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
