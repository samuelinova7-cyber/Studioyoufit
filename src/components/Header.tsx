import React, { useState } from 'react';
import { GYM_INFO } from '../data/gymData';
import { Menu, X, MessageCircle, Flame, Dumbbell } from 'lucide-react';

interface HeaderProps {
  onOpenModal: (subject?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappMessage = encodeURIComponent("Olá! Vim pelo site da Academia Studio You Fit e gostaria de tirar dúvidas sobre as matrículas.");
  const whatsappUrl = `https://wa.me/${GYM_INFO.whatsappClean}?text=${whatsappMessage}`;

  return (
    <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="relative rounded-2xl overflow-hidden p-0.5 bg-[#CCFF00] logo-green-glow group-hover:scale-105 transition-all duration-300">
            <img 
              src={GYM_INFO.logoUrl} 
              alt="Studio You Fit Logo" 
              referrerPolicy="no-referrer"
              className="w-11 h-11 sm:w-12 sm:h-12 object-cover rounded-xl border border-black/50"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-[#CCFF00] uppercase font-heading leading-none group-hover:drop-shadow-[0_0_8px_rgba(204,255,0,0.8)] transition-all">
              YOU FIT
            </span>
            <span className="text-[10px] font-bold text-zinc-400 tracking-widest uppercase">
              STUDIO • BARRA NOVA
            </span>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-xs font-bold uppercase tracking-widest text-zinc-400">
          <a href="#inicio" className="hover:text-[#CCFF00] transition-colors py-1">Início</a>
          <a href="#planos" className="hover:text-[#CCFF00] transition-colors py-1 text-[#CCFF00]/90">Planos & Preços</a>
          <a href="#desafio" className="hover:text-[#CCFF00] transition-colors py-1 text-white font-extrabold flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse"></span>
            <span>Desafio</span>
          </a>
          <a href="#modalidades" className="hover:text-[#CCFF00] transition-colors py-1">Aulas</a>
          <a href="#horarios" className="hover:text-[#CCFF00] transition-colors py-1">Horários</a>
          <a href="#faq" className="hover:text-[#CCFF00] transition-colors py-1">Dúvidas</a>
          <a href="#instagram" className="hover:text-[#CCFF00] transition-colors py-1">Instagram</a>
          <a href="#contato" className="hover:text-[#CCFF00] transition-colors py-1">Contato</a>
        </nav>

        {/* CTA BUTTONS */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => onOpenModal('Matrícula')}
            className="bg-[#CCFF00] hover:bg-[#b8e600] text-black px-5 py-2.5 rounded-full font-extrabold text-xs uppercase tracking-wider transition-all duration-200 shadow-[0_0_15px_rgba(204,255,0,0.25)] hover:shadow-[0_0_20px_rgba(204,255,0,0.4)] hover:scale-105"
          >
            Matricule-se Agora
          </button>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white p-2.5 rounded-full transition-all duration-200 hover:scale-105 flex items-center justify-center"
            title="Falar no WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-xl"
          aria-label="Abrir Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#CCFF00]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3 font-bold text-sm uppercase tracking-wider text-zinc-300">
            <a 
              href="#inicio" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2 border-b border-zinc-800/60 hover:text-[#CCFF00]"
            >
              Início
            </a>
            <a 
              href="#planos" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2 border-b border-zinc-800/60 text-[#CCFF00] font-extrabold flex items-center justify-between"
            >
              <span>Planos, Preços & Convênios</span>
              <span className="text-[10px] bg-[#CCFF00]/20 text-[#CCFF00] px-2 py-0.5 rounded-full">A partir de R$110</span>
            </a>
            <a 
              href="#desafio" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2 border-b border-zinc-800/60 text-white font-extrabold flex items-center justify-between"
            >
              <span>Quiz Desafio YouFit ⚡</span>
              <span className="text-[10px] bg-[#CCFF00] text-black px-2 py-0.5 rounded-full font-extrabold uppercase">1 Aula Grátis</span>
            </a>
            <a 
              href="#modalidades" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2 border-b border-zinc-800/60 hover:text-[#CCFF00]"
            >
              Aulas & Modalidades
            </a>
            <a 
              href="#horarios" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2 border-b border-zinc-800/60 hover:text-[#CCFF00]"
            >
              Grade de Horários
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2 border-b border-zinc-800/60 hover:text-[#CCFF00]"
            >
              Perguntas Frequentes (10 FAQ)
            </a>
            <a 
              href="#instagram" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2 border-b border-zinc-800/60 hover:text-[#CCFF00] flex items-center justify-between"
            >
              <span>Siga no Instagram</span>
              <span className="text-[10px] bg-pink-500/20 text-pink-400 px-2 py-0.5 rounded-full font-bold">@studioyoufit_</span>
            </a>
            <a 
              href="#contato" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2 hover:text-[#CCFF00]"
            >
              Localização & Contato
            </a>
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal('Matrícula pelo site');
              }}
              className="w-full bg-[#CCFF00] text-black font-extrabold py-3 rounded-2xl uppercase tracking-wider text-xs shadow-md text-center"
            >
              Matricule-se Agora
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-2xl uppercase tracking-wider text-xs flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
