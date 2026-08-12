import React from 'react';
import { PLANOS, GYM_INFO } from '../data/gymData';
import { Check, ShieldCheck, Heart, Sparkles, ArrowRight, Building2 } from 'lucide-react';

interface PlansSectionProps {
  onOpenModal: (subject?: string) => void;
}

export const PlansSection: React.FC<PlansSectionProps> = ({ onOpenModal }) => {
  return (
    <section id="planos" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800/80">
      
      {/* SECTION TITLE */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-extrabold text-[#CCFF00] uppercase tracking-widest font-heading">
          TRANSPARÊNCIA E VALOR
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white font-heading mt-1">
          Planos & Condições Especiais
        </h2>
        <p className="text-zinc-400 text-sm font-medium mt-2">
          Escolha o plano ideal para a sua rotina sem pegadinhas. Estrutura 100% climatizada aberta todos os dias em Barra Nova.
        </p>
      </div>

      {/* PLANOS CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
        {PLANOS.map((plano) => (
          <div
            key={plano.id}
            className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
              plano.destaque
                ? 'bg-zinc-900 border-2 border-[#CCFF00] shadow-[0_0_30px_rgba(204,255,0,0.15)] md:-translate-y-2'
                : 'bg-zinc-900 border border-zinc-800 hover:border-zinc-700'
            }`}
          >
            {plano.badge && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#CCFF00] text-black text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                {plano.badge}
              </div>
            )}

            <div>
              <h3 className="text-2xl font-black uppercase text-white font-heading mb-1">
                {plano.nome}
              </h3>
              <p className="text-xs text-zinc-400 font-medium mb-6">
                {plano.observacao}
              </p>

              <div className="mb-6 pb-6 border-b border-zinc-800">
                {plano.preco !== 'Especial' ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-zinc-400 font-bold text-sm">R$</span>
                    <span className="text-5xl font-black text-[#CCFF00] tracking-tight font-heading">
                      {plano.preco}
                    </span>
                    <span className="text-zinc-400 font-bold text-sm">/{plano.periodo}</span>
                  </div>
                ) : (
                  <div className="text-3xl font-black text-[#CCFF00] uppercase font-heading">
                    Consulte Dupla
                  </div>
                )}
              </div>

              {/* LIST OF BENEFIT CHECKMARKS */}
              <ul className="space-y-3.5 mb-8 text-xs font-medium text-zinc-300">
                {plano.beneficios.map((beneficio, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="bg-[#CCFF00]/10 p-1 rounded-full border border-[#CCFF00]/30 text-[#CCFF00] mt-0.5 shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{beneficio}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onOpenModal(`Interesse no ${plano.nome}`)}
              className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 ${
                plano.destaque
                  ? 'bg-[#CCFF00] hover:bg-[#b8e600] text-black shadow-[0_0_15px_rgba(204,255,0,0.2)]'
                  : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700'
              }`}
            >
              <span>{plano.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* CASAL HIGHLIGHT BENTO BANNER */}
      <div className="bg-gradient-to-r from-zinc-900 via-zinc-900 to-rose-950/40 rounded-3xl p-8 border border-zinc-800 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex items-center gap-5">
          <div className="bg-rose-500/10 p-4 rounded-2xl border border-rose-500/30 text-rose-400 shrink-0">
            <Heart className="w-8 h-8 fill-rose-500/20" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
              CONDIÇÃO ESPECIAL PARA CASAIS & AMIGOS
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-heading mt-2">
              Treinem Juntos e Evoluam Juntos!
            </h3>
            <p className="text-zinc-300 text-xs font-medium max-w-xl mt-1">
              Garanta descontos exclusivos ao matricular você e seu acompanhante na Studio You Fit. Mais motivação, parceria e resultados!
            </p>
          </div>
        </div>

        <button
          onClick={() => onOpenModal('Desconto para Casal/Dupla')}
          className="bg-rose-500 hover:bg-rose-600 text-white font-extrabold px-8 py-4 rounded-2xl text-xs uppercase tracking-wider shrink-0 transition-transform hover:scale-105 shadow-lg"
        >
          Consultar Desconto Dupla
        </button>
      </div>

      {/* CONVÊNIOS BANNER (WELLHUB & TOTALPASS) */}
      <div id="convenios" className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-[#CCFF00]/10 border border-[#CCFF00]/30 px-3 py-1 rounded-full text-xs font-extrabold text-[#CCFF00] uppercase tracking-wider mb-3">
              <Building2 className="w-3.5 h-3.5" />
              CONVÊNIOS CORPORATIVOS
            </div>
            <h3 className="text-2xl sm:text-4xl font-black uppercase text-white font-heading">
              Aceitamos Wellhub & TotalPass
            </h3>
            <p className="text-zinc-300 text-xs sm:text-sm font-medium mt-2 leading-relaxed">
              Você já possui plano do <strong>Wellhub (antigo Gympass)</strong> ou <strong>TotalPass</strong> pela sua empresa? Treine na Studio You Fit com estrutura completa e climatizada sem burocracia.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <div className="bg-white rounded-2xl p-5 w-full sm:w-44 flex flex-col items-center justify-center text-center shadow-lg">
              <span className="text-black font-black italic text-xl tracking-tighter">wellhub</span>
              <span className="text-[10px] font-bold text-zinc-500 uppercase mt-0.5">Gympass</span>
            </div>

            <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-5 w-full sm:w-44 flex flex-col items-center justify-center text-center shadow-lg">
              <span className="text-white font-extrabold tracking-tight text-xl">TotalPass</span>
              <span className="text-[10px] font-bold text-[#CCFF00] uppercase mt-0.5">Check-in Liberado</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
