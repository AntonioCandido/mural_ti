
import React from 'react';
import { CoordinatorWidget } from '../constants';
import { 
  ChevronLeft, Sparkles, History, Tablet, Users, Award, 
  BarChart3, Zap, Lightbulb, CheckCircle2, Target, Briefcase
} from 'lucide-react';

const CURIOSITIES = [
  {
    title: "Raízes Cariocas",
    desc: "A Estácio nasceu em 1970 em uma pequena casa no Rio de Janeiro, fundada pelo magistrado João Uchôa Cavalcanti Netto. O que começou com uma turma de Direito hoje alcança todos os cantos do Brasil.",
    icon: History,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Pioneirismo Tecnológico",
    desc: "Em 2011, fomos a primeira instituição de ensino do Brasil a oferecer tablets com material didático gratuito para alunos, revolucionando o acesso à informação.",
    icon: Tablet,
    color: "text-estacio-cyan",
    bg: "bg-estacio-cyan/10"
  },
  {
    title: "Alunos Estrelados",
    desc: "Grandes talentos já passaram por nossos corredores: a atriz Taís Araújo formou-se em Jornalismo conosco, e o craque Romário também já foi parte da nossa história acadêmica.",
    icon: Users,
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    title: "O Nome por Trás da Marca",
    desc: "Nossa universidade homenageia Estácio de Sá, o militar espanhol que fundou a cidade do Rio de Janeiro em 1565. Assim como ele fundou uma cidade, nós ajudamos você a fundar sua carreira.",
    icon: Award,
    color: "text-estacio-amber",
    bg: "bg-estacio-amber/10"
  }
];

const STATS = [
  { indicator: "Alunos Matriculados", impact: "Mais de 800.000 mentes em movimento." },
  { indicator: "Presença Nacional", impact: "+2.000 Polos e 90 unidades em todos os estados." },
  { indicator: "Corpo Docente", impact: "+10.000 professores, mestres e doutores." },
  { indicator: "Empregabilidade", impact: "+80.000 vagas de estágio e emprego publicadas por ano." },
  { indicator: "Qualidade MEC", impact: "Mais de 85 cursos com notas máximas (4 e 5)." }
];

const SUCCESS_TIPS = [
  {
    title: "Explore o Estácio Tech",
    desc: "Não fique apenas na grade comum. Mergulhe nas trilhas de Big Data, IoT e Cibersegurança. O mercado de TI de 2026 não espera por quem sabe apenas o básico.",
    icon: Zap
  },
  {
    title: "Networking no SIA",
    desc: "Utilize o sistema e as redes sociais da unidade para se conectar com colegas de todo o Brasil. O seu próximo sócio ou contratante pode estar na sala ao lado.",
    icon: Target
  },
  {
    title: "Portal de Carreiras",
    desc: "Atualize seu currículo no portal Estácio Carreiras. Com 35.000 empresas parceiras, a oportunidade pode chegar antes mesmo da formatura.",
    icon: Briefcase
  }
];

const CuriosidadesEstacio: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20 fade-in bg-slate-50/30">
      <a href="#/home" className="group inline-flex items-center gap-3 text-slate-400 hover:text-estacio-navy font-black uppercase text-[10px] tracking-widest mb-16 transition-all">
        <span className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:bg-estacio-navy group-hover:text-white group-hover:border-estacio-navy shadow-sm transition-all duration-300">
          <ChevronLeft size={18} />
        </span>
        Voltar
      </a>

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-teal-500/10 text-teal-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-teal-500/20">
              Sobre Nossa Instituição
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-estacio-navy italic uppercase tracking-tighter mb-8 leading-none">
            Curiosidades <span className="text-teal-500 text-stroke-navy">Estácio</span>
          </h2>
          
          <div className="bg-white p-10 md:p-16 rounded-[4rem] border border-slate-100 shadow-2xl relative overflow-hidden group mb-16">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 blur-[100px] rounded-full"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-4xl font-black italic uppercase mb-6 text-estacio-navy tracking-tight">
                🌟 Onde o Seu Futuro Ganha Vida
              </h3>
              <div className="space-y-6 text-lg text-slate-500 font-medium leading-relaxed max-w-4xl">
                <p>
                  Não é apenas um diploma. É o seu próximo grande salto. No mundo da Tecnologia da Informação, o relógio não para. E na Estácio, nós também não.
                </p>
                <p>
                  Somos mais que uma sala de aula; somos o laboratório onde suas ideias ganham código, onde seu esforço se transforma em solução e onde o mercado de trabalho encontra o seu nome. 
                </p>
                <p>
                  Desde 1970, nossa missão é democratizar o brilho. Acreditamos que o conhecimento é a única ferramenta capaz de derrubar muros e construir pontes. Aqui, você tem a estrutura da maior universidade do país e a agilidade de quem fala a língua do futuro: <strong className="text-estacio-navy">Python, IA, Cloud e Métodos Ágeis.</strong>
                </p>
                <p className="text-teal-600 font-black italic uppercase">
                  Brilha sem medo. O amanhã está sendo escrito agora, e o teclado está nas suas mãos.
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Curiosities Grid */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-teal-500 rounded-full"></div>
            <h3 className="text-2xl font-black text-estacio-navy italic uppercase tracking-tight">🔍 Curiosidades que Inspiram</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CURIOSITIES.map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-xl flex flex-col items-start transition-all hover:-translate-y-2">
                <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
                  <item.icon size={28} />
                </div>
                <h4 className="font-black text-estacio-navy italic text-xl mb-4 leading-tight uppercase tracking-tight">{item.title}</h4>
                <p className="text-sm font-bold text-slate-400 uppercase leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics Table Section */}
        <section className="mb-24">
          <div className="bg-slate-900 p-12 md:p-20 rounded-[5rem] text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-12 justify-center">
                <BarChart3 className="text-teal-400" size={32} />
                <h3 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-center">
                  📊 Estatísticas <span className="text-teal-400">de Peso</span>
                </h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-teal-400 text-[10px] font-black uppercase tracking-widest">
                      <th className="p-6">Indicador</th>
                      <th className="p-6">Impacto 2025/2026</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {STATS.map((stat, i) => (
                      <tr key={i} className="group hover:bg-white/5 transition-colors">
                        <td className="p-6 font-black italic uppercase tracking-tight text-xl">{stat.indicator}</td>
                        <td className="p-6 text-white/60 font-bold uppercase text-sm">{stat.impact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Success Tips Section */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-8 bg-estacio-amber rounded-full"></div>
            <h3 className="text-2xl font-black text-estacio-navy italic uppercase tracking-tight">💡 Dicas para o Sucesso</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SUCCESS_TIPS.map((tip, i) => (
              <div key={i} className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-xl flex flex-col h-full group hover:border-estacio-amber/30 transition-all">
                <div className="w-12 h-12 bg-estacio-amber/10 text-estacio-amber rounded-2xl flex items-center justify-center mb-6">
                  <tip.icon size={24} />
                </div>
                <h4 className="font-black text-estacio-navy italic text-lg mb-4 leading-tight uppercase tracking-tight">{tip.title}</h4>
                <p className="text-[11px] font-bold text-slate-500 uppercase leading-relaxed mb-6 flex-grow">{tip.desc}</p>
                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center gap-2 text-[9px] font-black text-estacio-amber uppercase tracking-widest">
                  <CheckCircle2 size={14} /> Recomendação Acadêmica
                </div>
              </div>
            ))}
          </div>
        </section>

        <CoordinatorWidget tip="A história da Estácio é a prova de que grandes sonhos começam pequenos. Sua trajetória acadêmica aqui é a fundação do seu legado na tecnologia. Aproveite cada recurso!" />
      </div>
    </div>
  );
};

export default CuriosidadesEstacio;
