
import React from 'react';
import CoordinatorWidget from '../components/CoordinatorWidget.tsx';
import BackButton from '../components/BackButton.tsx';
import { 
  ChevronRight, Zap, Award, 
  Code2, Brain, Heart, ShieldCheck, 
  CheckCircle2, TrendingUp
} from 'lucide-react';

const ProfissionaisTI: React.FC = () => {
  const PORTAIS = [
    { title: 'Robert Half 2026', url: 'https://www.roberthalf.com/br/pt/insights/guia-salarial', desc: 'A maior referência de salários no Brasil.', color: 'bg-blue-600' },
    { title: 'Portal Salário', url: 'https://www.salario.com.br/estatisticas/cargos-e-salarios-de-ti-tecnologia-da-informacao/', desc: 'Dados oficiais do CAGED/Ministério do Trabalho.', color: 'bg-estacio-navy' },
    { title: 'Workana TI', url: 'https://www.workana.com/pt/jobs?country=BR', desc: 'Board de freelancers e projetos independentes.', color: 'bg-estacio-cyan' }
  ];

  return (
    <div className="container mx-auto px-6 py-12 md:py-20 fade-in bg-slate-50/30">
      <BackButton />

      <div className="max-w-6xl mx-auto">
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-estacio-navy/10 text-estacio-navy px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-estacio-navy/20">
              Carreira & Mercado
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-estacio-navy italic uppercase tracking-tighter mb-8 leading-none">
            Profissionais <span className="text-estacio-cyan text-stroke-navy">de TI</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-4xl leading-relaxed">
            O mercado de Tecnologia da Informação é dinâmico e exige uma combination equilibrada entre <strong className="text-estacio-navy">conhecimento técnico profundo</strong> e <strong className="text-estacio-navy">habilidades comportamentais refinadas</strong>.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-xl relative overflow-hidden group hover:border-blue-500/30 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-[5rem]"></div>
            <h3 className="text-2xl font-black text-estacio-navy italic uppercase mb-8 flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <Code2 size={24} />
              </div>
              🛠️ Excelência Técnica
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-1" />
                <p className="text-sm font-bold text-slate-600"><span className="text-estacio-navy">Fundamentos Sólidos:</span> Domine lógica, algoritmos e estruturas antes de frameworks.</p>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-1" />
                <p className="text-sm font-bold text-slate-600"><span className="text-estacio-navy">Perfil em T:</span> Seja generalista em TI, mas especialista profundo em uma área.</p>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-1" />
                <p className="text-sm font-bold text-slate-600"><span className="text-estacio-navy">Cybersecurity & LGPD:</span> Conhecer segurança e privacidade é indispensável hoje.</p>
              </li>
            </ul>
          </div>

          <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-xl relative overflow-hidden group hover:border-estacio-cyan/30 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-estacio-cyan/5 rounded-bl-[5rem]"></div>
            <h3 className="text-2xl font-black text-estacio-navy italic uppercase mb-8 flex items-center gap-4">
              <div className="w-12 h-12 bg-estacio-cyan rounded-2xl flex items-center justify-center text-estacio-navy shadow-lg">
                <Brain size={24} />
              </div>
              🤝 Habilidades Comportamentais
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <CheckCircle2 size={18} className="text-estacio-cyan shrink-0 mt-1" />
                <p className="text-sm font-bold text-slate-600"><span className="text-estacio-navy">Comunicação Assertiva:</span> Traduza termos complexos para a linguagem de negócios.</p>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 size={18} className="text-estacio-cyan shrink-0 mt-1" />
                <p className="text-sm font-bold text-slate-600"><span className="text-estacio-navy">Pensamento Crítico:</span> Resolva problemas de forma eficiente e sustentável.</p>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 size={18} className="text-estacio-cyan shrink-0 mt-1" />
                <p className="text-sm font-bold text-slate-600"><span className="text-estacio-navy">Lifelong Learning:</span> Reserve tempo semanal para estudar novas ferramentas.</p>
              </li>
            </ul>
          </div>

          <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-xl relative overflow-hidden group hover:border-purple-500/30 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-bl-[5rem]"></div>
            <h3 className="text-2xl font-black text-estacio-navy italic uppercase mb-8 flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <TrendingUp size={24} />
              </div>
              📈 Gestão e Networking
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <CheckCircle2 size={18} className="text-purple-600 shrink-0 mt-1" />
                <p className="text-sm font-bold text-slate-600"><span className="text-estacio-navy">Portfólio Ativo:</span> Mostre como resolve problemas no GitHub ou em um blog.</p>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 size={18} className="text-purple-600 shrink-0 mt-1" />
                <p className="text-sm font-bold text-slate-600"><span className="text-estacio-navy">Inglês Técnico:</span> O domínio do idioma abre as portas para o mercado global.</p>
              </li>
            </ul>
          </div>

          <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-xl relative overflow-hidden group hover:border-red-500/30 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-bl-[5rem]"></div>
            <h3 className="text-2xl font-black text-estacio-navy italic uppercase mb-8 flex items-center gap-4">
              <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <Heart size={24} />
              </div>
              🧘 Saúde e Bem-estar
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <CheckCircle2 size={18} className="text-red-500 shrink-0 mt-1" />
                <p className="text-sm font-bold text-slate-600"><span className="text-estacio-navy">Ergonomia:</span> Invista em equipamentos corretos para sua saúde física.</p>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 size={18} className="text-red-500 shrink-0 mt-1" />
                <p className="text-sm font-bold text-slate-600"><span className="text-estacio-navy">Gestão de Burnout:</span> Estabeleça limites; o ócio gera insights criativos.</p>
              </li>
            </ul>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="lg:col-span-2 bg-estacio-navy p-12 md:p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5"></div>
            <h3 className="relative z-10 text-2xl font-black italic uppercase mb-8 flex items-center gap-4">
              <Award className="text-estacio-amber" /> Por que TI vale a pena?
            </h3>
            <div className="relative z-10 prose prose-lg max-w-none text-white/70 font-medium space-y-6">
              <p>O mercado de TI no Brasil e no mundo vive uma escassez crônica de talentos qualificados. Isso se traduz em salários acima da média e possibilidade real de carreira global.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                <div className="p-8 bg-white/10 rounded-3xl border border-white/10 shadow-xl backdrop-blur-md">
                  <h4 className="font-black text-estacio-cyan text-xs uppercase tracking-widest mb-4">Média Salarial (BR)</h4>
                  <ul className="space-y-4 text-sm font-bold text-white/80">
                    <li className="flex justify-between border-b border-white/5 pb-2"><span>Junior</span> <span className="text-estacio-cyan font-black">R$ 5k - 8k</span></li>
                    <li className="flex justify-between border-b border-white/5 pb-2"><span>Pleno</span> <span className="text-estacio-cyan font-black">R$ 9k - 14k</span></li>
                    <li className="flex justify-between"><span>Senior</span> <span className="text-estacio-cyan font-black">R$ 15k - 25k+</span></li>
                  </ul>
                </div>
                <div className="p-8 bg-estacio-amber text-estacio-navy rounded-3xl shadow-xl shadow-amber-500/20">
                  <h4 className="font-black text-estacio-navy text-xs uppercase tracking-widest mb-4">Carreira Global</h4>
                  <p className="text-sm leading-relaxed font-bold italic">Vagas remotas nos EUA/Europa podem pagar de $4k a $12k dólares por mês, multiplicando seu poder de compra.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="bg-estacio-cyan p-10 rounded-[3.5rem] text-estacio-navy shadow-2xl border border-white/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10"></div>
              <Zap size={40} className="mb-6 relative z-10" />
              <h4 className="relative z-10 font-black text-2xl italic uppercase mb-4 leading-none">IA Generativa</h4>
              <p className="relative z-10 text-sm font-bold leading-relaxed opacity-80">
                A grande virada de 2026. Saber integrar LLMs em fluxos de trabalho é a habilidade mais requisitada do ano.
              </p>
            </div>
            <div className="bg-slate-900 p-10 rounded-[3.5rem] text-white shadow-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/5"></div>
              <ShieldCheck size={40} className="mb-6 text-estacio-amber relative z-10" />
              <h4 className="relative z-10 font-black text-2xl italic uppercase mb-4 leading-none">Cybersecurity</h4>
              <p className="relative z-10 text-sm font-bold leading-relaxed opacity-70">
                Com o aumento de ataques complexos, a defesa digital tornou-se prioridade zero nas corporações.
              </p>
            </div>
          </div>
        </div>

        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-estacio-cyan rounded-full"></div>
            <h3 className="text-2xl font-black text-estacio-navy italic uppercase tracking-tight">Portais de Referência</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTAIS.map((link, i) => (
              <a 
                key={i} 
                href={link.url} 
                target="_blank" 
                className={`relative p-10 rounded-[3.5rem] border border-white/20 shadow-xl hover:-translate-y-2 transition-all ${link.color} text-white overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-white/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h4 className="relative z-10 font-black italic uppercase mb-4 text-white text-xl tracking-tight">{link.title}</h4>
                <p className={`relative z-10 text-[11px] font-bold leading-relaxed opacity-80 mb-8`}>{link.desc}</p>
                <div className="relative z-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest pt-6 border-t border-white/10">
                  Acessar Portal <ChevronRight size={14} />
                </div>
              </a>
            ))}
          </div>
        </section>

        <CoordinatorWidget tip="O desafio da coordenação é manter o currículo alinhado com as demandas reais do mercado para garantir sua empregabilidade. Foque em soft skills tanto quanto em hard skills!" />
      </div>
    </div>
  );
};

export default ProfissionaisTI;
