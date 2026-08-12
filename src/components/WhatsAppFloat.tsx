import React from 'react';
import { GYM_INFO } from '../data/gymData';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloat: React.FC = () => {
  const defaultMsg = encodeURIComponent("Olá! Vim pelo site e gostaria de informações sobre matrículas e horários na Studio You Fit.");
  const url = `https://wa.me/${GYM_INFO.whatsappClean}?text=${defaultMsg}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      <div className="hidden sm:flex bg-zinc-900/90 text-white border border-zinc-800 text-xs font-extrabold px-3.5 py-2 rounded-2xl shadow-xl backdrop-blur-md animate-bounce">
        <span className="text-[#CCFF00]">Fale no WhatsApp!</span>
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-emerald-500 hover:bg-emerald-400 text-white p-4 rounded-full shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:scale-110 transition-all duration-300 flex items-center justify-center relative group"
        aria-label="Abrir WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CCFF00] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#CCFF00]"></span>
        </span>
        <MessageCircle className="w-6 h-6 fill-white text-emerald-500" />
      </a>
    </div>
  );
};
