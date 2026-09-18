import React, { useState, useEffect, useRef } from 'react';
import { GYM_INFO } from '../data/gymData';
import { Sparkles, ArrowRight, Star, Flame } from 'lucide-react';

interface CinematicHeroProps {
  onOpenModal: (subject?: string) => void;
}

export const CinematicHero: React.FC<CinematicHeroProps> = ({ onOpenModal }) => {
  const heroRef = useRef<HTMLElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      setMousePos({ x: x * 30, y: y * 20 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative min-h-[92vh] bg-[#020405] text-[#D7E2EA] flex flex-col items-center justify-between overflow-hidden px-4 sm:px-6 lg:px-8 pt-20 pb-16 isolation-isolate"
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 46%, rgba(215,226,234,0.08) 0%, rgba(99,113,124,0.04) 20%, rgba(2,4,5,0) 54%),
          linear-gradient(180deg, #050708 0%, #020405 68%, #020405 100%)
        `
      }}
    >
      {/* Top Atmospheric Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#0A8F45]/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Top Meta Bar */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-4 mb-8 bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 px-5 py-3 rounded-2xl">
        <div className="flex items-center gap-3">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CCFF00] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#CCFF00]"></span>
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-300 font-['Kanit',sans-serif]">
            Barra Nova • Marechal Deodoro - AL • Aberto Todos os Dias
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-[#CCFF00]">
          <Star className="w-4 h-4 fill-[#CCFF00] text-[#CCFF00]" />
          <span>{GYM_INFO.avaliacao} ★ Avaliações no Google Maps</span>
        </div>
      </div>

      {/* Main Hero Content Center */}
      <div className="relative z-20 max-w-5xl mx-auto text-center w-full my-auto flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#0A8F45]/20 border border-[#0A8F45]/40 px-4 py-1.5 rounded-full mb-6 fade-in-load">
          <Sparkles className="w-4 h-4 text-[#67F39B]" />
          <span className="text-xs font-extrabold text-[#67F39B] uppercase tracking-widest">
            STUDIO YOU FIT • PERFORMANCE & ESCALA
          </span>
        </div>

        {/* Huge Uppercase Gradient Heading */}
        <h1 className="hero-heading font-black uppercase tracking-tight leading-[0.9] text-4xl sm:text-7xl lg:text-8xl mb-6 max-w-5xl mx-auto">
          TRANSFORME CLIQUE EM <br />
          <span className="text-white drop-shadow-[0_0_35px_rgba(10,143,69,0.4)]">
            CLIENTES REAIS
          </span>
        </h1>

        {/* Bio paragraph */}
        <p className="text-[#D7E2EA] font-light uppercase tracking-wide text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed opacity-90">
          Estratégia, equipamentos modernos, musculação climatizada e otimização diária para transformar seu investimento em resultados inquestionáveis.
        </p>

        {/* Primary Contact CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => onOpenModal('Diagnóstico / Aula Experimental')}
            className="btn-contact px-8 py-4 text-sm font-bold shadow-[0_0_30px_rgba(10,143,69,0.5)]"
          >
            <span>Solicitar Diagnóstico 🚀</span>
          </button>
          <a
            href="#planos"
            className="px-8 py-4 rounded-full border border-zinc-700 bg-zinc-900/80 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-widest transition-all"
          >
            Ver Planos & Preços (R$ 110)
          </a>
        </div>
      </div>

      {/* Centered Statue / Fitness Hero Portrait */}
      <div 
        className="relative z-10 w-full flex justify-center mt-8 pointer-events-none transition-transform duration-75 ease-out"
        style={{ transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)` }}
      >
        <div className="relative max-w-md w-full px-4">
          <img
            src="https://res.cloudinary.com/dalwymbky/image/upload/v1783952002/hero_dimpqc.png"
            alt="Studio You Fit Performance"
            className="w-full h-auto object-contain drop-shadow-[0_3rem_3.5rem_rgba(0,0,0,0.7)] select-none"
            draggable={false}
          />
          {/* Floor Shadow Ellipse */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/60 blur-xl rounded-full"></div>
        </div>
      </div>

      {/* Bottom Atmosphere Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0C0C0C] to-transparent pointer-events-none"></div>
    </section>
  );
};
