import React, { useState } from 'react';
import { HORARIOS_AULAS, ClassSchedule } from '../data/gymData';
import { Clock, Calendar, User, ArrowRight, CheckCircle2, LayoutGrid, Table } from 'lucide-react';

interface ScheduleSectionProps {
  onOpenModal: (subject?: string) => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ onOpenModal }) => {
  const [selectedDay, setSelectedDay] = useState<string>('todos');
  const [viewType, setViewType] = useState<'cards' | 'table'>('cards');

  const daysList = [
    { id: 'todos', label: 'Todos os Dias' },
    { id: 'Segunda', label: 'Segunda' },
    { id: 'Terça', label: 'Terça' },
    { id: 'Quarta', label: 'Quarta' },
    { id: 'Quinta', label: 'Quinta' },
    { id: 'Sexta', label: 'Sexta' }
  ];

  const filteredHorarios = selectedDay === 'todos'
    ? HORARIOS_AULAS
    : HORARIOS_AULAS.filter(item => item.dias.some(d => d.toLowerCase().includes(selectedDay.toLowerCase())));

  return (
    <section id="horarios" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800/80">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <span className="text-xs font-extrabold text-[#CCFF00] uppercase tracking-widest font-heading">
            PROGRAMAÇÃO SEMANAL
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white font-heading mt-1">
            Grade de Horários
          </h2>
        </div>

        <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 p-1.5 rounded-2xl self-start md:self-auto">
          <button
            onClick={() => setViewType('cards')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase flex items-center gap-1.5 transition-colors ${
              viewType === 'cards' ? 'bg-[#CCFF00] text-black font-extrabold' : 'text-zinc-400 hover:text-white'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Cards</span>
          </button>
          <button
            onClick={() => setViewType('table')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase flex items-center gap-1.5 transition-colors ${
              viewType === 'table' ? 'bg-[#CCFF00] text-black font-extrabold' : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Table className="w-3.5 h-3.5" />
            <span>Tabela Completa</span>
          </button>
        </div>
      </div>

      {/* DAYS FILTER PILLS */}
      <div className="flex flex-wrap gap-2 mb-8">
        {daysList.map((day) => (
          <button
            key={day.id}
            onClick={() => setSelectedDay(day.id)}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all border ${
              selectedDay === day.id
                ? 'bg-[#CCFF00] text-black border-[#CCFF00] shadow-[0_0_12px_rgba(204,255,0,0.25)]'
                : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white'
            }`}
          >
            {day.label}
          </button>
        ))}
      </div>

      {/* CARDS VIEW */}
      {viewType === 'cards' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredHorarios.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 hover:border-[#CCFF00]/40 transition-all duration-200 flex flex-col justify-between group shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[#CCFF00]/10 text-[#CCFF00] font-mono text-xs font-bold px-3 py-1 rounded-full border border-[#CCFF00]/30 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {item.horario}
                  </span>
                  <span className="text-[10px] uppercase font-extrabold text-zinc-400 bg-zinc-800 px-2.5 py-1 rounded-full">
                    {item.dias.join(' e ')}
                  </span>
                </div>

                <h3 className="text-2xl font-black uppercase text-white font-heading group-hover:text-[#CCFF00] transition-colors">
                  {item.modalidade}
                </h3>

                <div className="flex items-center gap-2 mt-2 text-xs font-bold text-zinc-300">
                  <User className="w-3.5 h-3.5 text-[#CCFF00]" />
                  <span>{item.professor}</span>
                </div>

                <p className="text-zinc-400 text-xs mt-3 leading-relaxed font-medium">
                  {item.descricao}
                </p>
              </div>

              <button
                onClick={() => onOpenModal(`Experimental na aula: ${item.modalidade} (${item.horario})`)}
                className="mt-6 w-full bg-zinc-950 hover:bg-[#CCFF00] hover:text-black border border-zinc-800 text-zinc-300 font-extrabold py-2.5 px-4 rounded-2xl text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Agendar Aula Grátis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      ) : (
        /* TABLE VIEW */
        <div className="bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-950 border-b border-zinc-800 text-[#CCFF00] text-xs font-extrabold uppercase tracking-wider">
                  <th className="p-4 sm:p-5">Modalidade</th>
                  <th className="p-4 sm:p-5">Dias da Semana</th>
                  <th className="p-4 sm:p-5">Horário</th>
                  <th className="p-4 sm:p-5">Professor(a)</th>
                  <th className="p-4 sm:p-5 text-right">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 text-sm font-medium">
                {filteredHorarios.map((item) => (
                  <tr key={item.id} className="hover:bg-zinc-800/50 transition-colors">
                    <td className="p-4 sm:p-5 font-extrabold uppercase text-white font-heading">
                      {item.modalidade}
                    </td>
                    <td className="p-4 sm:p-5 text-zinc-300 font-bold">
                      {item.dias.join(' e ')}
                    </td>
                    <td className="p-4 sm:p-5 text-[#CCFF00] font-mono font-bold">
                      {item.horario}
                    </td>
                    <td className="p-4 sm:p-5 text-zinc-300">
                      {item.professor}
                    </td>
                    <td className="p-4 sm:p-5 text-right">
                      <button
                        onClick={() => onOpenModal(`Aula experimental: ${item.modalidade}`)}
                        className="bg-[#CCFF00] hover:bg-[#b8e600] text-black font-extrabold px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>Reservar</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* MUSCULAÇÃO FREE HOURS NOTE */}
      <div className="mt-8 bg-zinc-900/90 border border-zinc-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-[#CCFF00]/10 p-2.5 rounded-xl border border-[#CCFF00]/20 text-[#CCFF00]">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-extrabold text-white uppercase">Musculação Climatizada Liberada Todos os Dias</p>
            <p className="text-[11px] text-zinc-400">De Segunda a Domingo com treinos orientados por professores.</p>
          </div>
        </div>
        <button
          onClick={() => onOpenModal('Dúvida sobre Horário da Musculação')}
          className="text-xs font-extrabold text-[#CCFF00] hover:underline uppercase tracking-wider whitespace-nowrap"
        >
          Consultar Horário de Feriados →
        </button>
      </div>

    </section>
  );
};
