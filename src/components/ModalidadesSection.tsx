import React, { useState } from 'react';
import { MODALIDADES, ClassModalidade, GYM_INFO } from '../data/gymData';
import { Dumbbell, Shield, Flame, Music, Activity, Zap, CheckCircle2, ArrowRight, UserCheck } from 'lucide-react';

interface ModalidadesSectionProps {
  onOpenModal: (subject?: string) => void;
}

export const ModalidadesSection: React.FC<ModalidadesSectionProps> = ({ onOpenModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todas as Aulas' },
    { id: 'Musculação', label: 'Musculação' },
    { id: 'Lutas', label: 'Lutas' },
    { id: 'Dança', label: 'Dança' },
    { id: 'Funcional', label: 'Funcional' }
  ];

  const filteredModalidades = selectedCategory === 'todos' 
    ? MODALIDADES 
    : MODALIDADES.filter(m => m.categoria === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell': return <Dumbbell className="w-6 h-6 text-[#CCFF00]" />;
      case 'Shield': return <Shield className="w-6 h-6 text-[#CCFF00]" />;
      case 'Flame': return <Flame className="w-6 h-6 text-[#CCFF00]" />;
      case 'Music': return <Music className="w-6 h-6 text-[#CCFF00]" />;
      case 'Activity': return <Activity className="w-6 h-6 text-[#CCFF00]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#CCFF00]" />;
      default: return <Dumbbell className="w-6 h-6 text-[#CCFF00]" />;
    }
  };

  return (
    <section id="modalidades" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800/80">
      
      {/* SECTION TITLE */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <span className="text-xs font-extrabold text-[#CCFF00] uppercase tracking-widest font-heading">
            O QUE VOCÊ PROCURA HOJE?
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white font-heading mt-1">
            Modalidades & Profissionais
          </h2>
        </div>
        <p className="text-zinc-400 text-sm max-w-md font-medium">
          Aulas dinâmicas, instrutores experientes e equipamentos modernos para transformar seu físico e sua saúde.
        </p>
      </div>

      {/* CATEGORY FILTERS */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-200 border ${
              selectedCategory === cat.id
                ? 'bg-[#CCFF00] text-black border-[#CCFF00] shadow-[0_0_15px_rgba(204,255,0,0.2)]'
                : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* MODALIDADES CARDS BENTO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredModalidades.map((item) => (
          <div
            key={item.id}
            className="bg-zinc-900 rounded-3xl p-5 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
          >
            <div>
              {/* IMAGE HEADER WITH OVERLAY */}
              <div className="relative h-48 sm:h-52 rounded-2xl overflow-hidden mb-5 border border-zinc-800/80 group-hover:border-[#CCFF00]/40 transition-colors">
                <img 
                  src={item.imageUrl} 
                  alt={item.nome} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-950/20 to-black/40"></div>

                {/* Top Badge */}
                {item.destaqueBadge && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="bg-black/75 backdrop-blur-md text-[#CCFF00] border border-[#CCFF00]/40 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                      {item.destaqueBadge}
                    </span>
                  </div>
                )}

                {/* Icon Badge Bottom Left */}
                <div className="absolute bottom-3 left-3 z-10 bg-black/80 backdrop-blur-md p-2.5 rounded-xl border border-white/10 group-hover:border-[#CCFF00]/50 transition-colors">
                  {getIcon(item.iconeName)}
                </div>
              </div>

              <h3 className="text-2xl font-black uppercase text-white font-heading group-hover:text-[#CCFF00] transition-colors">
                {item.nome}
              </h3>

              <div className="flex items-center gap-2 mt-2 mb-3 text-xs font-bold text-zinc-300 bg-zinc-950/60 p-2.5 rounded-xl border border-zinc-800/50">
                <UserCheck className="w-4 h-4 text-[#CCFF00]" />
                <span>{item.professor}</span>
              </div>

              <p className="text-zinc-400 text-xs font-medium leading-relaxed mb-5">
                {item.descricao}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
              <button
                onClick={() => onOpenModal(`Interesse na aula: ${item.nome} com ${item.professor}`)}
                className="w-full bg-zinc-800 hover:bg-[#CCFF00] hover:text-black text-white font-bold py-3 px-4 rounded-2xl text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-[0_0_15px_rgba(204,255,0,0.2)]"
              >
                <span>Saber Mais / Agendar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
