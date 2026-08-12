import React from 'react';
import { GYM_INFO } from '../data/gymData';
import { Dumbbell, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-zinc-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* LEFT: LOGO */}
        <div className="flex items-center gap-3">
          <div className="relative rounded-2xl overflow-hidden p-0.5 bg-[#CCFF00] logo-green-glow">
            <img 
              src={GYM_INFO.logoUrl} 
              alt="Studio You Fit Logo" 
              referrerPolicy="no-referrer"
              className="w-10 h-10 object-cover rounded-xl border border-black/50"
            />
          </div>
          <div>
            <span className="text-xl font-black tracking-tighter text-[#CCFF00] uppercase font-heading block">
              STUDIO YOU FIT
            </span>
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">
              Barra Nova • Marechal Deodoro - AL
            </span>
          </div>
        </div>

        {/* CENTER: ADDRESS BRIEF */}
        <div className="text-center text-xs font-medium text-zinc-400 max-w-md">
          <p>{GYM_INFO.endereco}</p>
          <p className="mt-1 text-[11px] text-zinc-500">
            WhatsApp: {GYM_INFO.whatsappFormatted} • Estrutura 100% Climatizada
          </p>
        </div>

        {/* RIGHT: BACK TO TOP BUTTON */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-[#CCFF00] p-3 rounded-2xl border border-zinc-800 transition-colors flex items-center justify-center"
            title="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-[11px] font-bold text-zinc-600 gap-2">
        <span>© {new Date().getFullYear()} Academia Studio You Fit. Todos os direitos reservados.</span>
        <span className="text-[#CCFF00] tracking-widest uppercase">Treine com a melhor • Barra Nova AL</span>
      </div>
    </footer>
  );
};
