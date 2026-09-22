import React, { useState } from 'react';
import { HORARIOS_AULAS, GYM_INFO } from '../data/gymData';
import { Clock, Calendar, Users, Dumbbell, Sparkles, Filter, CheckCircle2 } from 'lucide-react';

interface ScheduleSectionProps {
  onOpenModal: (subject?: string) => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ onOpenModal }) => {
  const [activeFilter, setActiveFilter] = useState<string>('todos');

  const filteredAulas = activeFilter === 'todos' 
    ? HORARIOS_AULAS 
    : HORARIOS_AULAS.filter(a => a.categoria === activeFilter);

  return (
    <section id="horarios" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 bg-[#CCFF00]/10 border border-[#CCFF00]/30 px-4 py-1.5 rounded-full mb-3 shadow-[0_0_15px_rgba(204,255,0,0.15)]">
          <Clock className="w-4 h-4 text-[#CCFF00]" />
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#CCFF00] font-heading">
            Grade Atualizada de Aulas & Treinos
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white font-heading">
          HORÁRIOS DAS <span className="text-[#CCFF00] drop-shadow-[0_0_25px_rgba(204,255,0,0.3)]">AULAS COLETIVAS</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mt-3 font-medium max-w-2xl mx-auto leading-relaxed">
          Planeje sua semana de treinos com os melhores professores de Barra Nova. A musculação fica aberta de 5h às 21:30h (Seg a Sex).
        </p>
      </div>

      {/* HORÁRIOS DE FUNCIONAMENTO GERAL */}
      <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-4 flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-[#CCFF00] animate-pulse shrink-0"></div>
          <div>
            <span className="text-[11px] font-bold text-zinc-400 uppercase block">Segunda a Sexta</span>
            <span className="text-sm font-black text-white font-heading">05:00h às 21:30h</span>
          </div>
        </div>

        <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-4 flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-[#CCFF00] shrink-0"></div>
          <div>
            <span className="text-[11px] font-bold text-zinc-400 uppercase block">Sábado</span>
            <span className="text-sm font-black text-white font-heading">07:00h às 17:00h</span>
          </div>
        </div>

        <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-4 flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-[#CCFF00] shrink-0"></div>
          <div>
            <span className="text-[11px] font-bold text-zinc-400 uppercase block">Domingo</span>
            <span className="text-sm font-black text-white font-heading">07:00h às 12:00h</span>
          </div>
        </div>

        <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-4 flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-amber-400 shrink-0"></div>
          <div>
            <span className="text-[11px] font-bold text-zinc-400 uppercase block">Feriados</span>
            <span className="text-sm font-black text-white font-heading">Horários Especiais</span>
          </div>
        </div>
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        <button
          onClick={() => setActiveFilter('todos')}
          className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 ${
            activeFilter === 'todos'
              ? 'bg-[#CCFF00] text-black shadow-[0_0_15px_rgba(204,255,0,0.3)]'
              : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
          }`}
        >
          Todas as Aulas ({HORARIOS_AULAS.length})
        </button>
        <button
          onClick={() => setActiveFilter('funcional')}
          className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 ${
            activeFilter === 'funcional'
              ? 'bg-[#CCFF00] text-black shadow-[0_0_15px_rgba(204,255,0,0.3)]'
              : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
          }`}
        >
          Funcional (3)
        </button>
        <button
          onClick={() => setActiveFilter('danca')}
          className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 ${
            activeFilter === 'danca'
              ? 'bg-[#CCFF00] text-black shadow-[0_0_15px_rgba(204,255,0,0.3)]'
              : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
          }`}
        >
          Hitbox & FitDance (2)
        </button>
        <button
          onClick={() => setActiveFilter('lutas')}
          className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 ${
            activeFilter === 'lutas'
              ? 'bg-[#CCFF00] text-black shadow-[0_0_15px_rgba(204,255,0,0.3)]'
              : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
          }`}
        >
          Muay Thai (1)
        </button>
      </div>

      {/* SCHEDULE CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAulas.map((aula) => {
          const whatsappMsg = `Olá! Gostaria de informações sobre a aula de ${aula.modalidade} com ${aula.professor} (${aula.dias.join('/')} às ${aula.horario}) na Studio You Fit.`;
          const classUrl = `https://wa.me/${GYM_INFO.whatsappClean}?text=${encodeURIComponent(whatsappMsg)}`;

          return (
            <div
              key={aula.id}
              className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between hover:border-[#CCFF00]/50 transition-all duration-300 shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-black uppercase tracking-wider bg-[#CCFF00]/10 text-[#CCFF00] px-3 py-1 rounded-full border border-[#CCFF00]/20">
                    {aula.modalidade}
                  </span>
                  <span className="text-[11px] font-bold text-zinc-400 bg-zinc-800 px-2.5 py-1 rounded-lg">
                    {aula.tags.join(' • ')}
                  </span>
                </div>

                <h3 className="text-2xl font-black uppercase text-white font-heading mt-2 group-hover:text-[#CCFF00] transition-colors">
                  {aula.modalidade}
                </h3>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-zinc-300 font-semibold">
                    <Calendar className="w-4 h-4 text-[#CCFF00] shrink-0" />
                    <span>{aula.dias.join(' e ')}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-zinc-300 font-semibold">
                    <Clock className="w-4 h-4 text-[#CCFF00] shrink-0" />
                    <span>{aula.horario}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-zinc-400 font-medium">
                    <Users className="w-4 h-4 text-[#CCFF00] shrink-0" />
                    <span>{aula.professor}</span>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 mt-4 leading-relaxed font-medium">
                  {aula.descricao}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/80">
                <a
                  href={classUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-zinc-800 hover:bg-[#CCFF00] hover:text-black text-white font-black py-3 rounded-2xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200"
                >
                  Agendar Esta Aula
                </a>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
