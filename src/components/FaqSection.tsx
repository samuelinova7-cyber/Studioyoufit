import React, { useState } from 'react';
import { FAQ_ITEMS, GYM_INFO } from '../data/gymData';
import { HelpCircle, ChevronDown, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';

interface FaqSectionProps {
  onOpenModal: (subject?: string) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenModal }) => {
  // State for open accordion items (default first one open)
  const [openItems, setOpenItems] = useState<number[]>([1, 4]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const whatsappUrl = `https://wa.me/${GYM_INFO.whatsappClean}?text=${encodeURIComponent('Olá! Tenho uma dúvida sobre a Academia Studio You Fit que não encontrei no site.')}`;

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 bg-[#CCFF00]/10 border border-[#CCFF00]/30 px-3.5 py-1.5 rounded-full mb-3">
          <HelpCircle className="w-4 h-4 text-[#CCFF00]" />
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#CCFF00] font-heading">
            Tire Suas Dúvidas
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white font-heading">
          PERGUNTAS & <span className="text-[#CCFF00] drop-shadow-[0_0_20px_rgba(204,255,0,0.3)]">RESPOSTAS</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mt-3 font-medium leading-relaxed">
          Confira abaixo as 10 principais respostas sobre funcionamento, planos, mensalidades e modalidades do Studio You Fit na Barra Nova.
        </p>
      </div>

      {/* ACCORDION LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {FAQ_ITEMS.map((item) => {
          const isOpen = openItems.includes(item.id);
          return (
            <div
              key={item.id}
              className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-zinc-900/90 border-[#CCFF00]/40 shadow-[0_0_20px_rgba(204,255,0,0.1)]'
                  : 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700'
              }`}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full text-left p-6 flex items-start justify-between gap-4 focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-start gap-3">
                  <span className="text-xs font-mono font-black text-[#CCFF00] bg-black/60 px-2.5 py-1 rounded-lg border border-white/10 shrink-0 mt-0.5">
                    {item.id < 10 ? `0${item.id}` : item.id}
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-heading leading-snug">
                      {item.pergunta}
                    </h3>
                    {item.categoria && (
                      <span className="text-[10px] font-extrabold text-zinc-500 uppercase tracking-widest mt-1 inline-block">
                        {item.categoria}
                      </span>
                    )}
                  </div>
                </div>

                <div
                  className={`p-2 rounded-xl transition-all duration-300 shrink-0 ${
                    isOpen ? 'bg-[#CCFF00] text-black rotate-180' : 'bg-zinc-800 text-zinc-400'
                  }`}
                >
                  <ChevronDown className="w-4 h-4 stroke-[3]" />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-0 text-zinc-300 text-sm leading-relaxed border-t border-zinc-800/80 mt-2 pt-4 pl-12 font-medium">
                  {item.resposta}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* BOTTOM CTA CALLOUT */}
      <div className="mt-12 bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex items-center gap-4 text-left">
          <div className="p-3.5 bg-[#CCFF00] rounded-2xl text-black shrink-0">
            <MessageCircle className="w-7 h-7 stroke-[2.5]" />
          </div>
          <div>
            <h4 className="text-lg font-black uppercase text-white font-heading">
              Ainda ficou com alguma dúvida?
            </h4>
            <p className="text-zinc-400 text-xs font-medium">
              Nossa equipe está disponível no WhatsApp para te ajudar a escolher o melhor plano.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chamar no WhatsApp</span>
          </a>
          <button
            onClick={() => onOpenModal('Dúvida sobre matrícula')}
            className="w-full sm:w-auto bg-[#CCFF00] hover:bg-[#b8e600] text-black px-6 py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider transition-all duration-200 shadow-[0_0_15px_rgba(204,255,0,0.3)]"
          >
            Matricular-se Agora
          </button>
        </div>
      </div>
    </section>
  );
};
