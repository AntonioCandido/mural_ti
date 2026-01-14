
import React from 'react';
import { ViewType } from '../types';
import { CARDS, getIcon } from '../constants';
// Added missing imports: Mail, Linkedin, Facebook, BookOpen, Terminal
import { 
  ExternalLink, 
  Cpu, 
  Zap, 
  Compass,
  ArrowRight,
  Code2,
  Clock,
  Layout,
  Search,
  Sparkles,
  Link2,
  CheckCircle2,
  Trophy,
  GraduationCap,
  Globe,
  UserCheck,
  TrendingUp,
  ShieldCheck,
  Award,
  BookOpenCheck,
  Layers,
  Star,
  MousePointer2,
  ChevronRight,
  Database,
  Network,
  Mail,
  Linkedin,
  Facebook,
  BookOpen,
  Terminal
} from 'lucide-react';

interface DetailViewProps {
  view: ViewType;
  onBack: () => void;
}

const DetailView: React.FC<DetailViewProps> = ({ view, onBack }) => {
  const cardInfo = CARDS.find(c => c.id === view);
  
  const renderContent = () => {
    switch (view) {
      case ViewType.SAIBA_MAIS:
        return (
          <div className="space-y-24">
            {/* Seção 1: O Diferencial Competitivo */}
            <div className="bg-estacio-navy p-10 md:p-16 rounded-[3rem] text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-estacio-cyan/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
              <div className="relative z-10 max-w-4xl">
                <div className="flex items-center gap-6 mb-8">
                  <div className="bg-estacio-cyan p-4 rounded-3xl shadow-lg shadow-estacio-cyan/20">
                    <Trophy size={40} className="text-white" />
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black tracking-tighter italic">Potencialize seu Currículo</h3>
                </div>
                <p className="text-blue-100/70 text-lg md:text-xl leading-relaxed mb-12">
                  As certificações são o atalho para as melhores vagas. Elas provam que você não apenas estudou, mas foi validado pelas gigantes que criaram as tecnologias.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { icon: <TrendingUp />, title: "+40% Salário", desc: "Média de aumento para profissionais certificados." },
                    { icon: <Globe />, title: "Global", desc: "Validade internacional em qualquer país." },
                    { icon: <ShieldCheck />, title: "Autoridade", desc: "Selo de confiança para recrutadores." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/5 p-6 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="text-estacio-cyan mb-3">{item.icon}</div>
                      <h5 className="font-black text-lg mb-1 italic">{item.title}</h5>
                      <p className="text-blue-100/40 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Seção 2: Parcerias Estratégicas Estácio */}
            <div>
              <div className="flex items-center gap-4 mb-12">
                <Award className="text-estacio-cyan" size={32} />
                <h3 className="text-3xl font-black text-estacio-navy uppercase tracking-tight">Parcerias Exclusivas</h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Oracle ONE Card */}
                <div className="bg-white p-10 md:p-12 rounded-[3.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group flex flex-col">
                  <div className="flex justify-between items-start mb-10">
                    <div className="w-20 h-20 bg-red-50 rounded-3xl flex items-center justify-center text-[#f80000] group-hover:bg-[#f80000] group-hover:text-white transition-all duration-500">
                      <Database size={40} />
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-black uppercase tracking-widest bg-red-100 text-[#f80000] px-4 py-2 rounded-full">Oracle ONE</span>
                    </div>
                  </div>
                  <h4 className="text-3xl font-black text-estacio-navy mb-6 italic">Oracle NEXT Education</h4>
                  <p className="text-gray-500 text-base leading-relaxed mb-10">
                    Uma jornada completa de 6 meses. Aprenda **Java, React, SQL e Agilidade** com cursos da Alura e certificações oficiais Oracle Cloud Infrastructure (OCI).
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                      <p className="text-[10px] font-black text-gray-400 uppercase mb-1">Duração</p>
                      <p className="text-sm font-bold text-estacio-navy italic">6 Meses</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                      <p className="text-[10px] font-black text-gray-400 uppercase mb-1">Custo</p>
                      <p className="text-sm font-bold text-green-600 italic">Gratuito p/ Alunos</p>
                    </div>
                  </div>
                  <a href="https://www.oracle.com/br/education/oracle-next-education/" target="_blank" className="mt-auto flex items-center justify-center gap-3 bg-estacio-navy text-white px-10 py-5 rounded-3xl text-xs font-black uppercase tracking-widest hover:bg-estacio-cyan transition-all shadow-xl shadow-estacio-navy/20 active:scale-95">
                    Inscrever-se no Oracle ONE <ExternalLink size={18} />
                  </a>
                </div>

                {/* Cisco NetAcad Card */}
                <div className="bg-white p-10 md:p-12 rounded-[3.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group flex flex-col">
                  <div className="flex justify-between items-start mb-10">
                    <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-[#00bceb] group-hover:bg-[#00bceb] group-hover:text-white transition-all duration-500">
                      <Network size={40} />
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-black uppercase tracking-widest bg-blue-100 text-[#00bceb] px-4 py-2 rounded-full">Cisco Academy</span>
                    </div>
                  </div>
                  <h4 className="text-3xl font-black text-estacio-navy mb-6 italic">Cisco Networking Academy</h4>
                  <p className="text-gray-500 text-base leading-relaxed mb-10">
                    Domine as redes que movem o mundo. Cursos oficiais de **CCNA, CyberOps, Python e IoT**. Receba Badges digitais para destacar seu perfil no LinkedIn.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                      <p className="text-[10px] font-black text-gray-400 uppercase mb-1">Foco</p>
                      <p className="text-sm font-bold text-estacio-navy italic">Redes & Cyber</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                      <p className="text-[10px] font-black text-gray-400 uppercase mb-1">Vantagem</p>
                      <p className="text-sm font-bold text-green-600 italic">Vouchers Desconto</p>
                    </div>
                  </div>
                  <a href="https://www.netacad.com/pt-br" target="_blank" className="mt-auto flex items-center justify-center gap-3 bg-estacio-navy text-white px-10 py-5 rounded-3xl text-xs font-black uppercase tracking-widest hover:bg-estacio-cyan transition-all shadow-xl shadow-estacio-navy/20 active:scale-95">
                    Acessar Cisco NetAcad <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Seção 3: Guia do SIA (Vouchers) */}
            <div className="bg-white p-10 md:p-16 rounded-[4rem] border border-gray-100 shadow-sm relative overflow-hidden">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/3">
                  <div className="inline-block p-4 bg-estacio-cyan/10 rounded-3xl text-estacio-cyan mb-6">
                    <MousePointer2 size={40} />
                  </div>
                  <h4 className="text-3xl font-black text-estacio-navy mb-4 italic">Como resgatar seu benefício?</h4>
                  <p className="text-gray-500 font-medium leading-relaxed">
                    Muitos vouchers de 100% de desconto e convites para cursos extras estão "escondidos" no seu portal. Siga este roteiro para não perder nada.
                  </p>
                </div>
                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { step: "01", title: "Acesse o SIA", desc: "Faça login no portal do aluno Estácio." },
                    { step: "02", title: "Atividades Comp.", desc: "Clique no menu lateral de Atividades Complementares." },
                    { step: "03", title: "Editais & Parcerias", desc: "Procure pela aba de cursos externos e convênios." },
                    { step: "04", title: "Gere o Código", desc: "Copie seu token ou link exclusivo de aluno." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 flex gap-6 items-start hover:border-estacio-cyan transition-colors group">
                      <span className="text-4xl font-black text-gray-200 group-hover:text-estacio-cyan transition-colors">{item.step}</span>
                      <div>
                        <h6 className="font-black text-estacio-navy mb-1 italic">{item.title}</h6>
                        <p className="text-[11px] text-gray-400 font-bold uppercase leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Seção 4: Trilhas de Mercado (AWS & Azure) */}
            <div>
              <div className="flex items-center gap-4 mb-12">
                <Layers className="text-estacio-cyan" size={32} />
                <h3 className="text-3xl font-black text-estacio-navy uppercase tracking-tight">Gigantes da Nuvem</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* AWS Card */}
                <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600">
                      <Zap size={24} />
                    </div>
                    <h4 className="text-xl font-black text-estacio-navy italic">Amazon Web Services (AWS)</h4>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8">
                    A plataforma de nuvem mais adotada globalmente. Ideal para arquitetura de sistemas e DevOps.
                  </p>
                  <ul className="space-y-3 mb-10 flex-grow">
                    <li className="flex items-center gap-3 text-xs font-bold text-gray-600"><CheckCircle2 size={16} className="text-orange-500" /> Cloud Practitioner</li>
                    <li className="flex items-center gap-3 text-xs font-bold text-gray-600"><CheckCircle2 size={16} className="text-orange-500" /> Solutions Architect Associate</li>
                  </ul>
                  <a href="https://aws.amazon.com/pt/certification/" target="_blank" className="flex items-center gap-2 text-orange-600 font-black text-[10px] uppercase tracking-widest hover:underline">
                    Ver Exames AWS <ChevronRight size={14} />
                  </a>
                </div>

                {/* Azure Card */}
                <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                      <Cpu size={24} />
                    </div>
                    <h4 className="text-xl font-black text-estacio-navy italic">Microsoft Azure</h4>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8">
                    Foco total no mercado corporativo e integração com ecossistema Windows/Active Directory.
                  </p>
                  <ul className="space-y-3 mb-10 flex-grow">
                    <li className="flex items-center gap-3 text-xs font-bold text-gray-600"><CheckCircle2 size={16} className="text-blue-500" /> Azure Fundamentals (AZ-900)</li>
                    <li className="flex items-center gap-3 text-xs font-bold text-gray-600"><CheckCircle2 size={16} className="text-blue-500" /> Azure Admin (AZ-104)</li>
                  </ul>
                  <a href="https://learn.microsoft.com/pt-br/credentials/browse/?resource_type=certification" target="_blank" className="flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-widest hover:underline">
                    Ver Exames Azure <ChevronRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Footer de Recursos de Estudo */}
            <div className="bg-blue-50 p-10 md:p-14 rounded-[4rem] border border-blue-100 flex flex-col md:flex-row items-center gap-12">
              <div className="bg-white p-8 rounded-[2rem] shadow-sm shrink-0">
                <BookOpenCheck className="text-estacio-navy" size={48} />
              </div>
              <div>
                <h5 className="text-2xl font-black text-estacio-navy mb-4 italic">Bônus: Onde estudar de graça?</h5>
                <p className="text-gray-500 font-medium leading-relaxed mb-8">
                  Além das parcerias, explore plataformas que oferecem trilhas gratuitas e certificações de entrada reconhecidas por grandes empresas de tecnologia.
                </p>
                <div className="flex flex-wrap gap-4">
                  {[
                    { name: "Udemy Free", url: "https://www.udemy.com" },
                    { name: "Coursera", url: "https://www.coursera.org" },
                    { name: "edX", url: "https://www.edx.org" }
                  ].map((site, i) => (
                    <a key={i} href={site.url} target="_blank" className="bg-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase text-estacio-navy shadow-sm hover:shadow-lg transition-all border border-gray-100">
                      {site.name} <ExternalLink size={12} className="inline ml-1" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case ViewType.COORDENADOR:
        return (
          <div className="grid grid-cols-1 gap-12">
            <div className="bg-white p-12 md:p-16 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40 text-center flex flex-col items-center">
              <h3 className="text-3xl md:text-5xl font-black text-estacio-navy mb-6">
                Prof. Antônio Cândido de O. Filho
              </h3>
              
              <div className="text-gray-500 font-semibold text-base md:text-xl leading-relaxed max-w-2xl mb-12">
                Coordenador de Análise e Desenvolvimento de Sistemas 
                <br /> - ADS e Ciência da Computação - CC
              </div>

              <div className="w-full max-w-lg space-y-6 text-left">
                <div className="flex items-center gap-5 p-2 group cursor-pointer">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-500 transition-transform group-hover:scale-110">
                    <Mail size={24} />
                  </div>
                  <span className="text-lg md:text-xl font-bold text-gray-700">antonio.filho@estacio.br</span>
                </div>

                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-2 group cursor-pointer hover:no-underline">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 transition-transform group-hover:scale-110">
                    <Linkedin size={24} fill="currentColor" stroke="none" />
                  </div>
                  <span className="text-lg md:text-xl font-bold text-blue-600">LinkedIn Perfil</span>
                </a>

                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-2 group cursor-pointer hover:no-underline">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 transition-transform group-hover:scale-110">
                    <Facebook size={24} fill="currentColor" stroke="none" />
                  </div>
                  <span className="text-lg md:text-xl font-bold text-blue-600">Facebook Perfil</span>
                </a>
              </div>
            </div>
            
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40">
              <h4 className="font-black text-3xl md:text-4xl text-estacio-navy mb-12">Horários de Atendimento</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-[#F8FAFC] p-8 md:p-10 rounded-[2rem] border border-gray-50 flex flex-col h-full">
                  <h5 className="text-[12px] font-black uppercase text-estacio-navy/60 tracking-[0.2em] mb-8">TOM JOBIM - BARRA</h5>
                  <ul className="space-y-6">
                    <li className="flex items-center group">
                      <span className="w-3.5 h-3.5 rounded-full bg-estacio-cyan mr-5 shadow-sm shadow-estacio-cyan/40 shrink-0"></span>
                      <span className="text-base md:text-lg font-medium text-gray-600">
                        <strong className="text-estacio-navy font-black">Presencial:</strong> Quarta, 09h às 19h
                      </span>
                    </li>
                    <li className="flex items-center group">
                      <span className="w-3.5 h-3.5 rounded-full bg-blue-500 mr-5 shadow-sm shadow-blue-500/40 shrink-0"></span>
                      <span className="text-base md:text-lg font-medium text-gray-600">
                        <strong className="text-estacio-navy font-black">Remoto:</strong> Sexta, 09h às 12h
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-[#F8FAFC] p-8 md:p-10 rounded-[2rem] border border-gray-50 flex flex-col h-full">
                  <h5 className="text-[12px] font-black uppercase text-estacio-navy/60 tracking-[0.2em] mb-8">R9 - TAQUARA</h5>
                  <ul className="space-y-6">
                    <li className="flex items-center group">
                      <span className="w-3.5 h-3.5 rounded-full bg-estacio-cyan mr-5 shadow-sm shadow-estacio-cyan/40 shrink-0"></span>
                      <span className="text-base md:text-lg font-medium text-gray-600">
                        <strong className="text-estacio-navy font-black">Presencial:</strong> Quinta, 09h às 19h
                      </span>
                    </li>
                    <li className="flex items-center group">
                      <span className="w-3.5 h-3.5 rounded-full bg-blue-500 mr-5 shadow-sm shadow-blue-500/40 shrink-0"></span>
                      <span className="text-base md:text-lg font-medium text-gray-600">
                        <strong className="text-estacio-navy font-black">Remoto:</strong> Sexta, 13h às 16h
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      case ViewType.DICAS:
        return (
          <div className="space-y-20">
            {/* Seção 1: Trilhas e Roadmaps */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <Compass className="text-estacio-cyan" size={32} />
                <h3 className="text-2xl font-black text-estacio-navy uppercase tracking-tight">Onde Começar?</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-estacio-cyan/30 transition-all group">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                    <BookOpen size={24} />
                  </div>
                  <h4 className="font-black text-lg text-estacio-navy mb-3">Roadmap.sh</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">Guias visuais completos para trilhas de Front-end, Back-end e DevOps. Indispensável para sua evolução.</p>
                  <a href="https://roadmap.sh" target="_blank" className="inline-flex items-center gap-2 text-estacio-cyan font-bold text-xs uppercase tracking-widest hover:underline">
                    Explorar Trilhas <ExternalLink size={14} />
                  </a>
                </div>

                <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-estacio-cyan/30 transition-all group">
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                    <Terminal size={24} />
                  </div>
                  <h4 className="font-black text-lg text-estacio-navy mb-3">Exercism</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">Pratique lógica de programação em mais de 60 linguagens com feedback de mentores reais.</p>
                  <a href="https://exercism.org" target="_blank" className="inline-flex items-center gap-2 text-estacio-cyan font-bold text-xs uppercase tracking-widest hover:underline">
                    Praticar Código <ExternalLink size={14} />
                  </a>
                </div>

                <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-estacio-cyan/30 transition-all group">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
                    <Zap size={24} />
                  </div>
                  <h4 className="font-black text-lg text-estacio-navy mb-3">FreeCodeCamp</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">Certificações gratuitas em Web Design, Data Science e Segurança da Informação reconhecidas pelo mercado.</p>
                  <a href="https://freecodecamp.org" target="_blank" className="inline-flex items-center gap-2 text-estacio-cyan font-bold text-xs uppercase tracking-widest hover:underline">
                    Obter Certificado <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Seção 2: Carreira & Visibilidade */}
            <div className="bg-estacio-navy p-10 md:p-16 rounded-[3rem] text-white">
              <div className="max-w-4xl">
                <h3 className="text-3xl md:text-4xl font-black mb-10">Dicas de Carreira</h3>
                <div className="space-y-12">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="bg-estacio-cyan p-4 rounded-3xl shrink-0">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </div>
                    <div>
                      <h5 className="font-black text-xl mb-3 italic text-estacio-cyan">Seu GitHub é seu currículo</h5>
                      <p className="text-blue-100/70 leading-relaxed mb-6">Documentação é o que separa um dev amador de um profissional. Projetos com README detalhados recebem muito mais atenção em processos seletivos.</p>
                      <a href="https://github.com/matiassingers/awesome-readme" target="_blank" className="inline-flex items-center gap-2 bg-white/10 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-estacio-cyan transition-colors">
                        Guia: Awesome README <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case ViewType.ESTAGIOS:
        return (
          <div className="space-y-20">
            {/* Seção 1: Portais de Oportunidades */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <Compass className="text-estacio-cyan" size={32} />
                <h3 className="text-2xl font-black text-estacio-navy uppercase tracking-tight">Onde Encontrar Vagas?</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Encontre sua Vaga */}
                <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group border-l-8 border-l-blue-500">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Search size={32} />
                    </div>
                    <div>
                      <h4 className="font-black text-xl text-estacio-navy">Encontre sua Vaga</h4>
                      <p className="text-xs text-blue-500 font-bold uppercase tracking-widest">Parceiro Estácio</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8">Portal exclusivo para alunos e egressos da Estácio. Milhares de vagas de estágio e emprego direto com empresas parceiras.</p>
                  <a href="https://www.encontresuavaga.com.br" target="_blank" className="inline-flex items-center gap-3 bg-estacio-navy text-white px-8 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-estacio-cyan transition-all shadow-lg shadow-estacio-navy/20">
                    Acessar Portal <ExternalLink size={14} />
                  </a>
                </div>

                {/* CIEE */}
                <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group border-l-8 border-l-orange-500">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                      <GraduationCap size={32} />
                    </div>
                    <div>
                      <h4 className="font-black text-xl text-estacio-navy">CIEE Portal</h4>
                      <p className="text-gray-500 text-sm leading-relaxed mb-8">A maior integradora de estágios do país. Ideal para quem busca a primeira experiência profissional no mercado formal.</p>
                      <a href="https://portal.ciee.org.br" target="_blank" className="inline-flex items-center gap-3 bg-estacio-navy text-white px-8 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-estacio-cyan transition-all shadow-lg shadow-estacio-navy/20">
                        Acessar CIEE <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="bg-gray-50 p-24 rounded-3xl text-center border-4 border-dashed border-gray-200">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-2xl font-black text-estacio-navy mb-4">Em Construção</h3>
              <p className="text-gray-500 font-medium">Estamos preparando conteúdos exclusivos para esta seção.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="fade-in container mx-auto px-6 py-12">
      {/* Botão Voltar */}
      <button 
        onClick={onBack}
        className="group flex items-center gap-5 text-gray-400 font-black uppercase tracking-widest text-[11px] hover:text-estacio-navy mb-16 transition-all"
      >
        <span className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-estacio-navy group-hover:bg-estacio-navy group-hover:text-white transition-all">
          <ChevronRight className="w-5 h-5 rotate-180" />
        </span>
        Voltar para a Home
      </button>

      {/* Header Seção */}
      <div className="flex flex-col md:flex-row md:items-center gap-10 mb-20 border-l-[12px] border-estacio-cyan pl-10">
        <div className="p-8 bg-white shadow-2xl shadow-gray-200 rounded-[2.5rem] flex-shrink-0">
          <div className={`${cardInfo?.color || 'text-estacio-navy'}`}>
            {getIcon(cardInfo?.icon || 'Info', 72)}
          </div>
        </div>
        <div>
          <h2 className="text-5xl md:text-7xl font-black text-estacio-navy tracking-tighter mb-4 leading-none italic">
            {cardInfo?.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-3xl leading-relaxed">
            {cardInfo?.description}
          </p>
        </div>
      </div>

      <div className="pb-32">
        {renderContent()}
      </div>
    </div>
  );
};

export default DetailView;
