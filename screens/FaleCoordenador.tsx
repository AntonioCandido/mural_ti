
import React from 'react';
import BackButton from '../components/BackButton.tsx';
import { Mail, Linkedin, Facebook, MapPin, Clock, Monitor, Sparkles, GraduationCap, Rocket, Briefcase, TrendingUp } from 'lucide-react';

const FaleCoordenador: React.FC = () => {
  const coordinatorPhoto = "https://avatars.githubusercontent.com/u/9017112?s=400&u=14eb77bb805c4996785584f67a0544cf553042d4&v=4";

  return (
    <div className="container mx-auto px-6 py-12 md:py-20 fade-in">
      <BackButton />

      <div className="max-w-6xl mx-auto space-y-12">
        <div className="bg-white border border-slate-100 rounded-[5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-estacio-navy p-12 md:p-20 text-center text-white flex flex-col items-center justify-center">
            <div className="relative w-56 h-56 rounded-full overflow-hidden border-[12px] border-white/10 mb-10 shadow-2xl">
              <img src={coordinatorPhoto} alt="Antonio Candido" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-4xl font-black italic uppercase mb-4 leading-none">ANTONIO CANDIDO</h2>
            <div className="space-y-4 w-full">
              <a href="mailto:antonio.filho@estacio.br" className="flex items-center justify-center gap-3 w-full py-5 bg-white text-estacio-navy rounded-2xl shadow-xl font-black uppercase text-[10px]">
                <Mail size={16} /> Enviar E-mail
              </a>
            </div>
          </div>

          <div className="lg:w-3/5 p-8 md:p-14 bg-gray-50/30 flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              <div className="bg-[#003399] p-10 rounded-[4rem] shadow-xl text-white">
                <div className="flex gap-4 items-center mb-8">
                  <MapPin size={18} className="text-[#00BFFF]" />
                  <h4 className="font-bold text-[#00BFFF] uppercase text-[13px] italic">TOM JOBIM - BARRA</h4>
                </div>
                <div className="space-y-5">
                   <p className="text-[12px]">Presencial: <span className="block opacity-80 italic">Quarta, 09h às 19h</span></p>
                </div>
              </div>
              <div className="bg-[#FFBF00] p-10 rounded-[4rem] shadow-xl text-[#003399]">
                <div className="flex gap-4 items-center mb-8">
                  <MapPin size={18} className="text-[#003399]" />
                  <h4 className="font-bold text-[#003399] uppercase text-[13px] italic">R9 - TAQUARA</h4>
                </div>
                <div className="space-y-5">
                   <p className="text-[12px]">Presencial: <span className="block opacity-80 italic">Quinta, 09h às 19h</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaleCoordenador;
