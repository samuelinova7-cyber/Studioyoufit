import React, { useState } from 'react';
import { Sparkles, Dumbbell, Flame, Music, Activity, Zap, CheckCircle2, ChevronRight, MessageCircle } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface ServiceItem {
  id: string;
  category: string;
  title: string;
  description: string;
  badge: string;
  points: string[];
  imageUrl: string;
  tags: string[];
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "musculacao",
    category: "Estrutura & Força",
    title: "Musculação & Alta Performance",
    description: "Espaço completo 100% climatizado com maquinários modernos, halteres selecionados e instrutores sempre presentes para ajustar suas posturas e cargas.",
    badge: "100% Climatizada",
    points: [
      "Equipamentos modernos e biomecanicamente alinhados",
      "Ambiente refrigerado durante todo o horário de funcionamento",
      "Instrutores dedicados para montagem e correção de séries",
      "Acesso livre de segunda a domingo e feriados"
    ],
    imageUrl: "https://res.cloudinary.com/xhuikt2k/image/upload/v1786548958/IMG_4451.jpg",
    tags: ["Hipertrofia", "Definição", "Força"]
  },
  {
    id: "hitbox-funcional",
    category: "Cardio & Queima Calórica",
    title: "Hitbox & Treino Funcional",
    description: "Aulas dinâmicas que unem ritmo, música e movimentos funcionais com os professores Julian, Rogério, Moisés e Thallya para queimar até 800 kcal por sessão.",
    badge: "Alta Queima",
    points: [
      "Hitbox com Prof. Julian: queima de gordura e ritmo contagiante",
      "Treinos Funcionais com Profs. Rogério, Moisés e Thallya",
      "Exercícios dinâmicos em grupo para todos os níveis de preparo",
      "Fortalecimento do core, ganho de agilidade e fôlego"
    ],
    imageUrl: "https://res.cloudinary.com/xhuikt2k/image/upload/v1786548151/IMG_4450.jpg",
    tags: ["Hitbox", "Funcional", "Metabolismo"]
  },
  {
    id: "fitdance",
    category: "Dança & Energia",
    title: "FitDance com Prof. Daniel Sales",
    description: "Aprenda e dance as melhores coreografias do Brasil em um ambiente super alegre, contagiante e inclusivo com o renomado Prof. Daniel Sales.",
    badge: "Energia Pura",
    points: [
      "Aulas às terças e quintas-feiras às 19h",
      "Coreografias dinâmicas e instrutivas para todos os níveis",
      "Melhora da coordenação motora, ritmo e liberação de endorfina",
      "Diversão garantida enquanto você queima calorias"
    ],
    imageUrl: "https://res.cloudinary.com/xhuikt2k/image/upload/v1786548962/IMG_4454.jpg",
    tags: ["FitDance", "Dança", "Cardio"]
  },
  {
    id: "muay-thai",
    category: "Lutas & Condicionamento",
    title: "Muay Thai & Artes Marciais",
    description: "Treine a arte das oito armas com o Prof. Alan França. Ganhe condicionamento físico absurdo, agilidade, tônus muscular e autoconfiança com técnicas reais.",
    badge: "Defesa & Foco",
    points: [
      "Aula com o Prof. Alan França em Barra Nova",
      "Técnicas de socos, chutes, cotoveladas e joelhadas",
      "Gasto calórico intenso e alívio imediato do estresse diário",
      "Acompanhamento técnico desde os primeiros movimentos"
    ],
    imageUrl: "https://res.cloudinary.com/xhuikt2k/image/upload/v1786548961/IMG_4453.jpg",
    tags: ["Muay Thai", "Arte Marcial", "Postura"]
  }
];

interface CinematicServicesProps {
  onOpenModal: (subject?: string) => void;
}

export const CinematicServices: React.FC<CinematicServicesProps> = ({ onOpenModal }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const currentService = SERVICES_DATA[activeTab];

  const serviceWhatsappUrl = `https://wa.me/${GYM_INFO.whatsappClean}?text=${encodeURIComponent(`Olá! Gostaria de mais detalhes sobre a modalidade: ${currentService.title} na You Fit.`)}`;

  return (
    <section id="modalidades" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 bg-[#CCFF00]/10 border border-[#CCFF00]/30 px-4 py-1.5 rounded-full mb-3 shadow-[0_0_15px_rgba(204,255,0,0.15)]">
          <Sparkles className="w-4 h-4 text-[#CCFF00]" />
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#CCFF00] font-heading">
            O Que Entregamos
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white font-heading">
          NOSSAS <span className="text-[#CCFF00] drop-shadow-[0_0_25px_rgba(204,255,0,0.3)]">MODALIDADES</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mt-3 font-medium max-w-2xl mx-auto leading-relaxed">
          Musculação completa e aulas dinâmicas com professores qualificados na melhor estrutura climatizada de Barra Nova.
        </p>
      </div>

      {/* HORIZONTAL NAV TABS */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
        {SERVICES_DATA.map((service, idx) => {
          const isActive = activeTab === idx;
          return (
            <button
              key={service.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 sm:px-6 py-3 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                isActive
                  ? 'bg-[#CCFF00] text-black shadow-[0_0_20px_rgba(204,255,0,0.35)] scale-105'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              <span>{service.title.split('&')[0]}</span>
              {isActive && <ChevronRight className="w-4 h-4 text-black hidden sm:inline-block" />}
            </button>
          );
        })}
      </div>

      {/* FEATURED SERVICE BENTO HERO */}
      <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl sm:rounded-[36px] overflow-hidden shadow-2xl transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
          
          {/* LEFT: TEXT CONTENT & POINTS (7 COLS) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-xs font-black uppercase tracking-wider bg-[#CCFF00]/10 text-[#CCFF00] px-3.5 py-1.5 rounded-full border border-[#CCFF00]/20">
                  {currentService.badge}
                </span>
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                  {currentService.category}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black uppercase text-white font-heading tracking-tight leading-tight">
                {currentService.title}
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base mt-4 font-medium leading-relaxed">
                {currentService.description}
              </p>
            </div>

            {/* BULLET POINTS */}
            <div className="space-y-3 bg-black/40 border border-zinc-800/80 rounded-2xl p-5">
              {currentService.points.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="p-1 bg-[#CCFF00]/20 rounded-full shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#CCFF00]" />
                  </div>
                  <span className="text-xs sm:text-sm text-zinc-200 font-medium leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* ACTION CTA & TAGS */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-800">
              <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                {currentService.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[11px] font-bold text-zinc-400 bg-zinc-800 px-3 py-1 rounded-lg">
                    #{tag}
                  </span>
                ))}
              </div>

              <a
                href={serviceWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#CCFF00] hover:bg-[#b8e600] text-black font-black px-6 py-3.5 rounded-2xl text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Quero Praticar Essa Modalidade</span>
              </a>
            </div>

          </div>

          {/* RIGHT: CINEMATIC IMAGE (5 COLS) */}
          <div className="lg:col-span-5 relative group">
            <div className="relative h-[300px] sm:h-[420px] rounded-3xl overflow-hidden border-2 border-zinc-800 shadow-2xl">
              <img
                src={currentService.imageUrl}
                alt={currentService.title}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 bg-zinc-950/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">Studio You Fit</span>
                  <span className="text-sm font-black uppercase text-white font-heading block">{currentService.title}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#CCFF00] flex items-center justify-center text-black">
                  <Zap className="w-4 h-4 fill-black" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
