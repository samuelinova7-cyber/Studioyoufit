import React from 'react';
import { Trophy, Sparkles } from 'lucide-react';

const STEPS = [
  {
    step: "01",
    category: "Etapa 01",
    title: "Diagnóstico & Objetivo",
    intro: "Entendemos sua meta principal, seu nível de condicionamento e sua rotina diária.",
    body: "A partir dessa leitura, indicamos a melhor modalidade (Musculação, Muay Thai, FitDance, Funcional ou Hitbox) e alinhamos o plano ideal (Essencial, Premium ou Família) com matrícula grátis."
  },
  {
    step: "02",
    category: "Etapa 02",
    title: "Acolhimento & Recepção",
    intro: "Recepção calorosa em nossa academia 100% climatizada em Barra Nova com suporte de instrutores.",
    body: "Tudo é configurado para que você treine com segurança, acompanhamento de qualidade e facilidade na validação de convênios como Wellhub (Silver+) e TotalPass (TP2)."
  },
  {
    step: "03",
    category: "Etapa 03",
    title: "Evolução & Constância",
    intro: "Acompanhamento contínuo dos seus treinos, frequência e resultados obtidos.",
    body: "Com treinos dinâmicos, acompanhamento profissional e opção de avaliação física detalhada, garantimos que você vença o sedentarismo e conquiste seu melhor físico."
  }
];

export const StickyProcessSection: React.FC = () => {
  return (
    <section
      id="como-funciona"
      className="relative z-10 bg-[#0C0C0C] text-[#D7E2EA] pt-24 pb-32 px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 rounded-t-[40px] sm:rounded-t-[60px]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#CCFF00]/10 border border-[#CCFF00]/30 px-4 py-1.5 rounded-full mb-4 shadow-[0_0_15px_rgba(204,255,0,0.15)]">
            <Trophy className="w-4 h-4 text-[#CCFF00]" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#CCFF00] font-heading">
              METODOLOGIA YOU FIT
            </span>
          </div>
          <h2 className="hero-heading text-4xl sm:text-7xl font-black uppercase tracking-tight text-center">
            Como Funciona
          </h2>
          <p className="text-zinc-400 font-light max-w-xl mx-auto mt-3 text-sm sm:text-base uppercase tracking-wide">
            O passo a passo simples e direto para transformar sua rotina de treinos.
          </p>
        </div>

        {/* Stacked Cards Container */}
        <div className="max-w-4xl mx-auto space-y-8">
          {STEPS.map((s, idx) => (
            <div
              key={idx}
              className="sticky top-28 bg-[#0C0C0C] border-2 border-[#D7E2EA]/30 rounded-[30px] sm:rounded-[40px] p-6 sm:p-10 shadow-[0_-20px_40px_rgba(0,0,0,0.8)] flex flex-col gap-6"
              style={{ top: `${7 + idx * 3.5}rem` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl sm:text-6xl font-black text-[#CCFF00] font-mono">
                    {s.step}
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                      {s.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight">
                      {s.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-lg font-medium text-white/90">
                  {s.intro}
                </p>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
