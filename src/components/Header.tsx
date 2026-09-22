import React, { useState } from 'react';
import { GYM_INFO } from '../data/gymData';
import { Menu, X, Phone, Dumbbell, Sparkles, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onOpenModal: (subject?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Planos & Valores', href: '#planos' },
    { name: 'Modalidades', href: '#modalidades' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Quiz YouFit', href: '#monte-seu-treino' },
    { name: 'Horários', href: '#horarios' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  const whatsappUrl = `https://wa.me/${GYM_INFO.whatsappClean}?text=${encodeURIComponent('Olá! Vim pelo site da Studio You Fit e gostaria de informações sobre matrícula.')}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800/80 transition-all duration-300">
      
      {/* TOP ANNOUNCEMENT BAR (RUNNING TICKER) */}
      <div className="bg-[#CCFF00] text-black py-1 overflow-hidden relative text-[9px] sm:text-[11px] font-black uppercase tracking-wider flex items-center whitespace-nowrap">
        <div className="animate-ticker flex items-center shrink-0">
          <span className="mx-6 flex items-center gap-2">
            <Sparkles className="w-3 h-3 fill-black shrink-0" />
            MATRÍCULA GRÁTIS (R$ 0,00)
          </span>
          <span className="mx-6 flex items-center gap-2">
            <Sparkles className="w-3 h-3 fill-black shrink-0" />
            ACEITAMOS WELLHUB (SILVER+) & TOTALPASS (TP2)
          </span>
          <span className="mx-6 flex items-center gap-2">
            <Sparkles className="w-3 h-3 fill-black shrink-0" />
            ESTRUTURA 100% CLIMATIZADA EM BARRA NOVA - AL
          </span>
        </div>
        <div className="animate-ticker flex items-center shrink-0" aria-hidden="true">
          <span className="mx-6 flex items-center gap-2">
            <Sparkles className="w-3 h-3 fill-black shrink-0" />
            MATRÍCULA GRÁTIS (R$ 0,00)
          </span>
          <span className="mx-6 flex items-center gap-2">
            <Sparkles className="w-3 h-3 fill-black shrink-0" />
            ACEITAMOS WELLHUB (SILVER+) & TOTALPASS (TP2)
          </span>
          <span className="mx-6 flex items-center gap-2">
            <Sparkles className="w-3 h-3 fill-black shrink-0" />
            ESTRUTURA 100% CLIMATIZADA EM BARRA NOVA - AL
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* LOGO */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="relative rounded-2xl overflow-hidden p-0.5 bg-[#CCFF00] logo-green-glow group-hover:scale-105 transition-transform duration-300">
              <img 
                src={GYM_INFO.logoUrl} 
                alt="Studio You Fit Logo" 
                referrerPolicy="no-referrer"
                className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-xl border border-black/50"
              />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tighter text-[#CCFF00] uppercase font-heading block group-hover:text-white transition-colors">
                STUDIO YOU FIT
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-widest block -mt-1">
                Barra Nova • Marechal Deodoro - AL
              </span>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden xl:flex items-center gap-6 text-xs font-black uppercase tracking-wider text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#CCFF00] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#CCFF00] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* RIGHT ACTION BUTTONS */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 px-4 py-2.5 rounded-2xl text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>(82) 97604-9148</span>
            </a>

            <a
              href={`https://wa.me/${GYM_INFO.whatsappClean}?text=${encodeURIComponent('Olá! Gostaria de me matricular na Studio You Fit com matrícula grátis!')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#CCFF00] hover:bg-[#b8e600] text-black px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-wider transition-all duration-200 shadow-[0_0_15px_rgba(204,255,0,0.3)] hover:scale-105 active:scale-95"
            >
              Matricule-se Já
            </a>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="flex xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-300 hover:text-white p-2 rounded-xl bg-zinc-900 border border-zinc-800"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE NAV DROPDOWN */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-zinc-950 border-b border-zinc-800 px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 text-sm font-bold uppercase tracking-wider text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#CCFF00] py-2 px-3 rounded-xl hover:bg-zinc-900 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-zinc-800 flex flex-col gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 text-white font-black py-3 rounded-2xl text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: (82) 97604-9148</span>
              </a>

              <a
                href={`https://wa.me/${GYM_INFO.whatsappClean}?text=${encodeURIComponent('Olá! Gostaria de me matricular na Studio You Fit com matrícula grátis!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#CCFF00] text-black font-black py-3 rounded-2xl text-xs uppercase tracking-wider text-center"
              >
                Matricule-se Já (Matrícula R$ 0)
              </a>
            </div>
          </nav>
        </div>
      )}

    </header>
  );
};
