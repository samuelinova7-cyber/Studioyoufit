import React from 'react';
import { PLANOS, SERVICOS_EXTRAS, GYM_INFO } from '../data/gymData';
import { Check, Flame, Sparkles, Shield, HeartHandshake, Building2, HelpCircle, Users, Activity, Tag, Clock } from 'lucide-react';

interface PlansSectionProps {
  onOpenModal: (subject?: string) => void;
}

export const PlansSection: React.FC<PlansSectionProps> = ({ onOpenModal }) => {
  return (
    <section id="planos" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 bg-[#CCFF00]/10 border border-[#CCFF00]/30 px-4 py-1.5 rounded-full mb-3 shadow-[0_0_15px_rgba(204,255,0,0.15)]">
          <Tag className="w-4 h-4 text-[#CCFF00]" />
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#CCFF00] font-heading">
            Valores & Condições Transparentes
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white font-heading">
          ESCOLHA O SEU <span className="text-[#CCFF00] drop-shadow-[0_0_25px_rgba(204,255,0,0.3)]">PLANO IDEAL</span>
        </h2>
        <p className="text-zinc-300 text-sm sm:text-base mt-3 font-medium max-w-2xl mx-auto leading-relaxed">
          Sem burocracia, com débito recorrente que não compromete o limite do seu cartão e acesso à melhor estrutura 100% climatizada de Barra Nova.
        </p>

        {/* MATRÍCULA ISENTA PROMO BADGE */}
        <div className="mt-5 inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg">
          <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Taxa de Matrícula R$ 0,00 • Isenção Total em Todos os Planos</span>
        </div>
      </div>

      {/* PLANS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {PLANOS.map((plano) => {
          const isHighlight = plano.destaque;
          const whatsappMsg = `Olá! Gostaria de me matricular no ${plano.nome} da Studio You Fit.`;
          const planUrl = `https://wa.me/${GYM_INFO.whatsappClean}?text=${encodeURIComponent(whatsappMsg)}`;

          return (
            <div
              key={plano.id}
              className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                isHighlight
                  ? 'bg-zinc-900 border-2 border-[#CCFF00] shadow-[0_0_35px_rgba(204,255,0,0.2)] transform lg:-translate-y-2'
                  : 'bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 shadow-xl'
              }`}
            >
              {/* TOP BADGE */}
              {plano.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md ${
                      isHighlight
                        ? 'bg-[#CCFF00] text-black'
                        : 'bg-zinc-800 text-zinc-300 border border-zinc-700'
                    }`}
                  >
                    {plano.badge}
                  </span>
                </div>
              )}

              {/* CARD TOP */}
              <div>
                <div className="text-center pt-2 pb-4 border-b border-zinc-800">
                  <h3 className="text-xl font-black uppercase text-white font-heading tracking-tight">
                    {plano.nome}
                  </h3>
                  <div className="mt-3 flex items-baseline justify-center gap-1">
                    {plano.preco !== "Especial" ? (
                      <>
                        <span className="text-xs font-bold text-zinc-400">R$</span>
                        <span className="text-3xl sm:text-4xl font-black text-white font-heading tracking-tight">
                          {plano.preco}
                        </span>
                        <span className="text-xs font-bold text-zinc-400">/{plano.periodo}</span>
                      </>
                    ) : (
                      <span className="text-2xl font-black text-[#CCFF00] font-heading uppercase">
                        Sob Consulta
                      </span>
                    )}
                  </div>
                  {plano.observacao && (
                    <p className="text-[11px] text-zinc-400 font-medium mt-1">
                      {plano.observacao}
                    </p>
                  )}
                </div>

                {/* BENEFÍCIOS */}
                <ul className="py-5 space-y-3">
                  {plano.beneficios.map((beneficio, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300 font-medium leading-snug">
                      <div className="p-0.5 bg-[#CCFF00]/20 rounded-full shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#CCFF00]" />
                      </div>
                      <span>{beneficio}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CARD CTA BUTTONS */}
              <div className="pt-4 border-t border-zinc-800/80 space-y-2">
                <a
                  href={planUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 shadow-md ${
                    isHighlight
                      ? 'bg-[#CCFF00] hover:bg-[#b8e600] text-black shadow-[0_0_20px_rgba(204,255,0,0.3)]'
                      : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                  }`}
                >
                  {plano.ctaText}
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* SERVIÇOS AVULSOS: DIÁRIA & AVALIAÇÃO FÍSICA */}
      <div className="mt-12 bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 border-b border-zinc-800/80 pb-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-heading flex items-center gap-2">
              <Activity className="w-6 h-6 text-[#CCFF00]" />
              Serviços Avulsos & Consultas
            </h3>
            <p className="text-xs text-zinc-400 font-medium mt-0.5">
              Opções flexíveis para treinos pontuais e acompanhamento físico profissional.
            </p>
          </div>
          <span className="text-[11px] font-black uppercase tracking-widest text-[#CCFF00] bg-[#CCFF00]/10 px-3 py-1 rounded-full border border-[#CCFF00]/20">
            Valores Oficiais
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICOS_EXTRAS.map((servico) => {
            const servicoMsg = `Olá! Gostaria de informações sobre o serviço de ${servico.nome} no Studio You Fit.`;
            const servicoUrl = `https://wa.me/${GYM_INFO.whatsappClean}?text=${encodeURIComponent(servicoMsg)}`;

            return (
              <div
                key={servico.id}
                className="bg-black/50 border border-zinc-800/80 rounded-2xl p-5 flex flex-col justify-between hover:border-zinc-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="text-base sm:text-lg font-black uppercase text-white font-heading">
                      {servico.nome}
                    </h4>
                    <span className="text-lg sm:text-xl font-black text-[#CCFF00] font-heading shrink-0">
                      R$ {servico.preco}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium mb-4">
                    {servico.descricao}
                  </p>
                </div>

                <a
                  href={servicoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-zinc-800 hover:bg-[#CCFF00] hover:text-black text-white font-black py-2.5 rounded-xl text-xs uppercase tracking-wider text-center transition-all duration-200"
                >
                  {servico.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* CONVÊNIOS CORPORATIVOS: WELLHUB SILVER+ & TOTALPASS TP2 */}
      <div className="mt-8 bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-950 border border-[#CCFF00]/30 rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center lg:text-left">
            <div className="p-3.5 bg-[#CCFF00] text-black rounded-2xl shrink-0 hidden sm:flex">
              <Building2 className="w-8 h-8" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#CCFF00] mb-1">
                <Sparkles className="w-3.5 h-3.5" /> Convênios Parceiros Aceitos
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-heading">
                Treine com Wellhub ou TotalPass
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-medium mt-1">
                Valide seu check-in direto no balcão da academia e aproveite toda a nossa estrutura climatizada.
              </p>
            </div>
          </div>

          {/* BADGES DOS CONVÊNIOS */}
          <div className="flex flex-wrap items-center justify-center gap-3 w-full lg:w-auto">
            <div className="bg-black/70 border border-zinc-700 px-4 py-3 rounded-2xl flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></div>
              <div className="text-left">
                <span className="text-xs font-bold text-zinc-300 block">Wellhub (Gympass)</span>
                <span className="text-[11px] font-black text-[#CCFF00] uppercase tracking-wider block">
                  A partir do Silver+
                </span>
              </div>
            </div>

            <div className="bg-black/70 border border-zinc-700 px-4 py-3 rounded-2xl flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></div>
              <div className="text-left">
                <span className="text-xs font-bold text-zinc-300 block">TotalPass</span>
                <span className="text-[11px] font-black text-[#CCFF00] uppercase tracking-wider block">
                  A partir do TP2
                </span>
              </div>
            </div>

            <a
              href={`https://wa.me/${GYM_INFO.whatsappClean}?text=${encodeURIComponent('Olá! Gostaria de saber como validar meu convênio Wellhub (Silver+) ou TotalPass (TP2) na Studio You Fit.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#CCFF00] hover:bg-[#b8e600] text-black font-black px-5 py-3.5 rounded-2xl text-xs uppercase tracking-wider transition-all duration-200 shadow-md"
            >
              Validar Convênio
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};
