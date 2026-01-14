
import React from 'react';
import { ViewType } from '../types';
import { CARDS, getIcon } from '../constants';
import { 
  Mail, 
  Linkedin, 
  Facebook, 
  Github, 
  ExternalLink, 
  Terminal, 
  BookOpen, 
  Cpu, 
  Zap, 
  MessageSquare, 
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
  Coins,
  UserCheck,
  TrendingUp,
  ShieldCheck,
  Award,
  BookOpenCheck,
  Layers,
  Star,
  ZapOff,
  Briefcase,
  MousePointer2,
  ChevronRight
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
          <div className="space-y-20">
            {/* Seção 1: Importância e Vantagens */}
            <div className="bg-estacio-navy p-10 md:p-16 rounded-[3rem] text-white">
              <div className="max-w-4xl">
                <div className="flex items-center gap-6 mb-8">
                  <div className="bg-estacio-cyan p-4 rounded-3xl">
                    <Trophy size={40} className="text-white" />
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black">Por que se certificar?</h3>
                </div>
                <p className="text-blue-100/70 text-lg md:text-xl leading-relaxed mb-12">
                  No mercado de tecnologia, as certificações funcionam como um **"selo de garantia"**. Elas validam sua expertise técnica perante recrutadores globais e comprovam que você domina as ferramentas que as grandes empresas utilizam.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
                    <TrendingUp className="text-estacio-cyan mb-4" size={32} />
                    <h5 className="font-black text-lg mb-2 italic">Valorização Salarial</h5>
                    <p className="text-blue-100/50 text-sm">Profissionais com certificações cloud ou segurança chegam a ganhar 40% mais que a média.</p>
                  </div>
                  <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
                    <Globe className="text-estacio-cyan mb-4" size={32} />
                    <h5 className="font-black text-lg mb-2 italic">Carreira Global</h5>
                    <p className="text-blue-100/50 text-sm">Os selos da AWS, Azure e Google Cloud são reconhecidos em qualquer país do mundo.</p>
                  </div>
                  <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
                    <ShieldCheck className="text-estacio-cyan mb-4" size={32} />
                    <h5 className="font-black text-lg mb-2 italic">Credibilidade</h5>
                    <p className="text-blue-100/50 text-sm">Reduz o tempo de triagem em processos seletivos, garantindo que você tem a base técnica necessária.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Seção 2: Melhores Certificações */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <Layers className="text-estacio-cyan" size={32} />
                <h3 className="text-2xl font-black text-estacio-navy uppercase tracking-tight">Trilhas de Elite no Mercado</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* AWS Card */}
                <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600">
                      <Zap size={32} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full italic">Líder de Mercado</span>
                  </div>
                  <h4 className="text-2xl font-black text-estacio-navy mb-4 italic">AWS (Amazon Web Services)</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8">A nuvem mais utilizada do mundo. Ideal para quem quer focar em arquitetura, DevOps e infraestrutura escalável.</p>
                  <div className="space-y-3 mb-10">
                    <div className="flex items-center gap-3 text-xs font-bold text-gray-700">
                      <CheckCircle2 size={16} className="text-orange-500" /> Cloud Practitioner (Entrada)
                    </div>
                    <div className="flex items-center gap-3 text-xs font-bold text-gray-700">
                      <CheckCircle2 size={16} className="text-orange-500" /> Solutions Architect Associate
                    </div>
                  </div>
                  <a href="https://aws.amazon.com/pt/certification/" target="_blank" className="inline-flex items-center gap-2 text-orange-600 font-black text-[11px] uppercase tracking-widest hover:underline">
                    Ver trilha oficial AWS <ExternalLink size={14} />
                  </a>
                </div>

                {/* Microsoft Azure Card */}
                <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                      <Cpu size={32} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full italic">Foco Corporativo</span>
                  </div>
                  <h4 className="text-2xl font-black text-estacio-navy mb-4 italic">Microsoft Azure</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8">Dominante no mercado corporativo e integração com Windows/Office 365. Essencial para grandes consultorias.</p>
                  <div className="space-y-3 mb-10">
                    <div className="flex items-center gap-3 text-xs font-bold text-gray-700">
                      <CheckCircle2 size={16} className="text-blue-500" /> Azure Fundamentals (AZ-900)
                    </div>
                    <div className="flex items-center gap-3 text-xs font-bold text-gray-700">
                      <CheckCircle2 size={16} className="text-blue-500" /> Azure Administrator (AZ-104)
                    </div>
                  </div>
                  <a href="https://learn.microsoft.com/pt-br/credentials/browse/?resource_type=certification" target="_blank" className="inline-flex items-center gap-2 text-blue-600 font-black text-[11px] uppercase tracking-widest hover:underline">
                    Ver trilha oficial Azure <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Seção 3: Parcerias Exclusivas Estácio (COMPLEMENTADO) */}
            <div className="bg-white p-10 md:p-16 rounded-[3rem] border border-blue-50 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-estacio-cyan/5 rounded-full -mr-32 -mt-32"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 mb-16">
                  <div className="bg-estacio-navy p-6 rounded-[2rem] shadow-xl shadow-estacio-navy/10 shrink-0">
                    <GraduationCap className="text-white" size={48} />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black text-estacio-navy mb-4 italic">Benefícios para Alunos Estácio</h3>
                    <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-3xl">
                      A Estácio investe pesado em parcerias para que você já saia da graduação com o currículo de um profissional sênior. Fique atento aos editais no seu portal SIA (Sistema de Informações Acadêmicas).
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {/* Oracle ONE */}
                  <div className="bg-[#F8FAFC] p-10 rounded-[2.5rem] border border-gray-100 flex flex-col h-full group hover:border-estacio-cyan transition-all">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-[#f80000]">
                        <Code2 size={28} />
                      </div>
                      <h4 className="text-2xl font-black text-estacio-navy">Oracle NEXT Education (ONE)</h4>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                      Programa de educação e empregabilidade que oferece trilhas de **Front-end, Java, Soft Skills e Business Agility**. Ao concluir as trilhas, você ganha acesso exclusivo a uma rede de empresas contratantes parceiras da Oracle.
                    </p>
                    <div className="bg-white p-5 rounded-2xl mb-8 border border-gray-100">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">O que você ganha:</p>
                      <ul className="text-xs font-bold text-estacio-navy space-y-2">
                        <li className="flex items-center gap-2"><ChevronRight size={14} className="text-estacio-cyan" /> Vouchers de 100% para Certificações OCI</li>
                        <li className="flex items-center gap-2"><ChevronRight size={14} className="text-estacio-cyan" /> Plataforma Alura liberada durante o curso</li>
                      </ul>
                    </div>
                    <a href="https://www.oracle.com/br/education/oracle-next-education/" target="_blank" className="inline-flex items-center justify-center gap-3 bg-estacio-navy text-white px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-estacio-cyan transition-all shadow-lg shadow-estacio-navy/10">
                      Inscrever-se no Oracle ONE <ExternalLink size={16} />
                    </a>
                  </div>

                  {/* Cisco Networking Academy */}
                  <div className="bg-[#F8FAFC] p-10 rounded-[2.5rem] border border-gray-100 flex flex-col h-full group hover:border-estacio-cyan transition-all">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#00bceb]">
                        <Globe size={28} />
                      </div>
                      <h4 className="text-2xl font-black text-estacio-navy">Cisco Networking Academy</h4>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                      Foque na base da internet. Cursos de **Redes, Segurança Cibernética, IoT e Programação (Python/C++)**. É a certificação mais respeitada para quem deseja atuar com infraestrutura de rede global.
                    </p>
                    <div className="bg-white p-5 rounded-2xl mb-8 border border-gray-100">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">O que você ganha:</p>
                      <ul className="text-xs font-bold text-estacio-navy space-y-2">
                        <li className="flex items-center gap-2"><ChevronRight size={14} className="text-estacio-cyan" /> Descontos de até 70% no CCNA</li>
                        <li className="flex items-center gap-2"><ChevronRight size={14} className="text-estacio-cyan" /> Emblemas digitais (Badges) para o LinkedIn</li>
                      </ul>
                    </div>
                    <a href="https://www.netacad.com/pt-br" target="_blank" className="inline-flex items-center justify-center gap-3 bg-estacio-navy text-white px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-estacio-cyan transition-all shadow-lg shadow-estacio-navy/10">
                      Acessar Cisco Academy <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                {/* Guia de Acesso SIA */}
                <div className="mt-16 bg-estacio-navy p-10 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center gap-10">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <MousePointer2 size={36} className="text-estacio-cyan" />
                  </div>
                  <div>
                    <h5 className="text-xl font-black mb-2 italic text-estacio-cyan">Como resgatar seus benefícios no SIA?</h5>
                    <p className="text-blue-100/60 text-sm leading-relaxed mb-6">
                      Muitos alunos perdem prazos por não saberem onde procurar. Siga este caminho:
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="bg-white/5 px-6 py-3 rounded-xl border border-white/10 text-xs font-bold">1. Acesse o Portal SIA</div>
                      <div className="bg-white/5 px-6 py-3 rounded-xl border border-white/10 text-xs font-bold">2. Menu "Atividades Complementares"</div>
                      <div className="bg-white/5 px-6 py-3 rounded-xl border border-white/10 text-xs font-bold">3. Ver "Editais e Parcerias"</div>
                      <div className="bg-white/5 px-6 py-3 rounded-xl border border-white/10 text-xs font-bold">4. Resgate seu código</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Seção 4: Dicas de Estudo */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="bg-white p-10 md:p-14 rounded-[3rem] border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <BookOpenCheck className="text-estacio-cyan" size={32} />
                  <h4 className="text-2xl font-black text-estacio-navy italic">Dicas para Aprovação</h4>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-5">
                    <div className="font-black text-4xl text-gray-100">01</div>
                    <p className="text-gray-500 text-sm leading-relaxed"><strong>Foco na Prática:</strong> Use as camadas gratuitas (Free Tier) da AWS e Azure. Certificação sem "mão na massa" perde o valor no dia a dia do trabalho.</p>
                  </div>
                  <div className="flex gap-5">
                    <div className="font-black text-4xl text-gray-100">02</div>
                    <p className="text-gray-500 text-sm leading-relaxed"><strong>Simulados:</strong> Plataformas como **Udemy** e **ExamTopics** são fundamentais para treinar o tempo de resposta e o estilo das questões.</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-10 md:p-14 rounded-[3rem] border border-blue-100 flex flex-col justify-center">
                <Star className="text-yellow-500 mb-6" size={40} fill="currentColor" />
                <h4 className="text-2xl font-black text-estacio-navy mb-6">Explore Mais Recursos</h4>
                <div className="flex flex-wrap gap-4">
                  <a href="https://www.udemy.com" target="_blank" className="bg-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase text-estacio-navy shadow-sm hover:shadow-lg transition-all border border-gray-100">
                    Udemy Study <ExternalLink size={12} />
                  </a>
                  <a href="https://www.coursera.org" target="_blank" className="bg-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase text-estacio-navy shadow-sm hover:shadow-lg transition-all border border-gray-100">
                    Coursera <ExternalLink size={12} />
                  </a>
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
                      <Github size={32} />
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

            {/* Seção 2: Vantagens PJ */}
            <div className="bg-white p-10 md:p-16 rounded-[3rem] border border-emerald-100 shadow-sm">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                  <UserCheck size={36} />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-estacio-navy">Carreira Autônoma & PJ</h3>
                  <p className="text-emerald-600 font-bold text-sm uppercase tracking-widest">Vantagens do Empreendedorismo em TI</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700">
                    <TrendingUp size={20} />
                  </div>
                  <h5 className="font-black text-lg text-estacio-navy italic">Maior Ganho Líquido</h5>
                  <p className="text-gray-500 text-sm leading-relaxed">Contratos PJ geralmente oferecem valores brutos superiores ao regime CLT, com carga tributária reduzida.</p>
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
          <h2 className="text-5xl md:text-7xl font-black text-estacio-navy tracking-tighter mb-4 leading-none">
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
