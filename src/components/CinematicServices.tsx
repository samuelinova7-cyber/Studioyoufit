import React from 'react';
import { MODALIDADES } from '../data/gymData';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CinematicServicesProps {
  onOpenModal: (subject?: string) => void;
}

const SERVICE_ITEMS = [
  {
    number: "01",
    title: "Planejamento de Treino & Musculação",
    desc: "Definição de metas, avaliação e acompanhamento na nossa área 100% climatizada com equipamentos modernos para ganho de força e hipertrofia."
  },
  {
    number: "02",
    title: "Gestão de Aulas de Ritbox & Funcional",
    desc: "Aulas dinâmicas em grupo focadas em alta queima calórica, condicionamento físico e tonificação muscular com instrutores especializados."
  },
  {
    number: "03",
    title: "Jiu-Jitsu & Muay Thai",
    desc: "Aulas técnicas de artes marciais e defesa pessoal voltadas tanto para iniciantes quanto para praticantes avançados em Barra Nova."
  },
  {
    number: "04",
    title: "FitDance & Dança",
    desc: "Coreografias envolventes, energia contagiante e muita diversão para queimar calorias de forma leve e descontraída."
  },
  {
    number: "05",
    title: "Convênios & Acompanhamento Contínuo",
    desc: "Suporte completo com aceitação de Wellhub e TotalPass, além de horários flexíveis para você treinar todos os dias sem desculpas."
  }
];

export const CinematicServices: React.FC<CinematicServicesProps> = ({ onOpenModal }) => {
  return (
    <section
      id="modalidades"
      className="relative z-8 bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[60px] pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0A8F45]/10 border border-[#0A8F45]/30 px-4 py-1.5 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-[#0A8F45]" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0A8F45]">
              MODALIDADES & SERVIÇOS
            </span>
          </div>
          <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter text-[#0C0C0C]">
            Serviços de Alta Performance
          </h2>
          <p className="text-zinc-600 font-medium max-w-2xl mx-auto mt-3 text-sm sm:text-base">
            Tudo o que você precisa para alcançar seus objetivos com estrutura de ponta, climatização total e professores qualificados.
          </p>
        </div>

        {/* Services List Container */}
        <div className="max-w-5xl mx-auto flex flex-col divide-y divide-zinc-300/80">
          {SERVICE_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group transition-all duration-300 hover:pl-4"
            >
              <div className="flex items-baseline gap-6 md:w-1/3">
                <span className="text-4xl sm:text-6xl font-black text-[#0C0C0C]/80 font-mono tracking-tighter group-hover:text-[#0A8F45] transition-colors">
                  {item.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#0C0C0C] group-hover:text-[#0A8F45] transition-colors">
                  {item.title}
                </h3>
              </div>

              <div className="md:w-1/2">
                <p className="text-zinc-600 font-normal text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="md:w-auto shrink-0">
                <button
                  onClick={() => onOpenModal(`Serviço: ${item.title}`)}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0A8F45] hover:text-black transition-colors"
                >
                  <span>Agendar Aula</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
