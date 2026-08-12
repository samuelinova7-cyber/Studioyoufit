import React, { useState } from 'react';
import { GYM_INFO } from '../data/gymData';
import { Sparkles, Trophy, ArrowRight, RotateCcw, Send, CheckCircle2, Flame, Gift, Dumbbell, Shield, Music, Activity } from 'lucide-react';

interface Option {
  label: string;
  icon: string;
  category?: string;
}

interface Step {
  type: 'start' | 'question';
  title: string;
  description?: string;
  buttonText?: string;
  options?: Option[];
}

interface Recommendation {
  title: string;
  desc: string;
  gift: string;
}

const GAME_STEPS: Step[] = [
  {
    type: "start",
    title: "Descubra seu Protocolo de Treino Ideal na YouFit! ⚡",
    description: "Responda a 3 perguntas rápidas e monte seu plano personalizado com direito a 1 AULA EXPERIMENTAL GRATUITA na Barra Nova.",
    buttonText: "COMENÇAR DESAFIO 🚀"
  },
  {
    type: "question",
    title: "1. Qual é o seu objetivo principal hoje?",
    options: [
      { label: "Ganhar massa muscular e força", icon: "🏋️‍♂️", category: "musculacao" },
      { label: "Queimar gordura e ter energia", icon: "🔥", category: "ritbox" },
      { label: "Aprender defesa pessoal e foco", icon: "🥋", category: "luta" },
      { label: "Descontrair, dançar e tonificar", icon: "💃", category: "fitdance" }
    ]
  },
  {
    type: "question",
    title: "2. Qual o seu nível atual de atividade física?",
    options: [
      { label: "Sedentário (Querendo voltar ao foco)", icon: "💤" },
      { label: "Iniciante (Treino de vez em quando)", icon: "🚶‍♂️" },
      { label: "Intermediário / Avançado (Pegando pesado)", icon: "⚡" }
    ]
  },
  {
    type: "question",
    title: "3. Qual horário você prefere treinar?",
    options: [
      { label: "Manhã bem cedo (Disposição pro dia)", icon: "🌅" },
      { label: "Fim da tarde / Noite (Descarregar o estresse)", icon: "🌙" },
      { label: "Horário flexível / Finais de semana", icon: "🗓️" }
    ]
  }
];

const RECOMMENDATIONS: Record<string, Recommendation> = {
  musculacao: {
    title: "Protocolo Musculação & Hipertrofia",
    desc: "Sua estrutura ideal conta com acompanhamento em nossa área climatizada de musculação com equipamentos modernos.",
    gift: "VIP Pass: Avaliação Física + Treino Experimental de Musculação"
  },
  ritbox: {
    title: "Protocolo Ritbox & Funcional",
    desc: "Aulas de alta intensidade para queimar calorias treinando em grupo de forma altamente dinâmica.",
    gift: "VIP Pass: 1 Aula Experimental de Ritbox ou Funcional"
  },
  luta: {
    title: "Protocolo Jiu-Jitsu & Muay Thai",
    desc: "Aulas técnicas com instrutores qualificados para desenvolvimento de foco, disciplina, defesa pessoal e condicionamento.",
    gift: "VIP Pass: 1 Aula Grátis de Jiu-Jitsu ou Muay Thai"
  },
  fitdance: {
    title: "Protocolo FitDance & Dança",
    desc: "Queima de calorias com muita música, energia lá em cima e um ambiente super descontraído.",
    gift: "VIP Pass: 1 Aula Grátis de FitDance"
  }
};

export const QuizGame: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userCategory, setUserCategory] = useState<string>("musculacao");
  const [userName, setUserName] = useState("");
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const handleSelectOption = (category?: string, label?: string) => {
    if (category) {
      setUserCategory(category);
    }
    if (label) {
      setUserAnswers(prev => [...prev, label]);
    }
    setCurrentStep(prev => prev + 1);
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setUserCategory("musculacao");
    setUserName("");
    setUserAnswers([]);
  };

  const handleSubmitWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim()) return;

    const result = RECOMMENDATIONS[userCategory] || RECOMMENDATIONS.musculacao;
    const phone = GYM_INFO.whatsappClean;

    const message = `Olá! Fiz o Desafio YouFit no site.%0A%0A*Nome:* ${encodeURIComponent(userName)}%0A*Resultado:* ${encodeURIComponent(result.title)}%0A*Recompensa:* ${encodeURIComponent(result.gift)}%0A%0AGostaria de agendar minha visita/aula experimental!`;

    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  // Progress percentage calculation
  const totalQuestions = GAME_STEPS.length - 1;
  const progressPercentage = currentStep === 0 ? 0 : Math.min(100, Math.round((currentStep / totalQuestions) * 100));

  const isCompleted = currentStep >= GAME_STEPS.length;
  const currentStepData = GAME_STEPS[currentStep];
  const activeRecommendation = RECOMMENDATIONS[userCategory] || RECOMMENDATIONS.musculacao;

  return (
    <section id="desafio" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 bg-[#CCFF00]/10 border border-[#CCFF00]/30 px-3.5 py-1.5 rounded-full mb-3">
          <Trophy className="w-4 h-4 text-[#CCFF00]" />
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#CCFF00] font-heading">
            INTERATIVO • YOUFIT CHALLENGE
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white font-heading">
          DESCUBRA SEU <span className="text-[#CCFF00] drop-shadow-[0_0_20px_rgba(204,255,0,0.3)]">TREINO IDEAL</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mt-2 font-medium leading-relaxed">
          Responda a 3 perguntas em menos de 1 minuto e receba uma sugestão de treino personalizada com direito a 1 aula experimental grátis!
        </p>
      </div>

      {/* QUIZ CONTAINER BOX */}
      <div className="max-w-xl mx-auto bg-zinc-900 rounded-3xl border-2 border-[#CCFF00]/40 p-6 sm:p-8 shadow-[0_0_40px_rgba(204,255,0,0.15)] relative overflow-hidden">
        {/* Background Decorative Glow */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#CCFF00]/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* BRAND HEADER */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="text-lg font-black tracking-tighter text-[#CCFF00] uppercase font-heading">
              YOUFIT CHALLENGE
            </span>
            <span className="text-[10px] bg-[#CCFF00]/20 text-[#CCFF00] px-2 py-0.5 rounded-full font-bold uppercase">
              Quiz Fitness
            </span>
          </div>

          {!isCompleted && currentStep > 0 && (
            <button
              onClick={handleRestart}
              className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reiniciar</span>
            </button>
          )}
        </div>

        {/* PROGRESS BAR */}
        <div className="w-full bg-zinc-800 h-2.5 rounded-full mb-6 overflow-hidden border border-white/5">
          <div
            className="h-full bg-gradient-to-r from-[#b8e600] to-[#CCFF00] transition-all duration-500 ease-out shadow-[0_0_10px_rgba(204,255,0,0.8)]"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {/* DYNAMIC CONTENT */}
        {!isCompleted ? (
          <div className="animate-in fade-in duration-300">
            {currentStepData.type === 'start' ? (
              <div className="text-center py-4">
                <div className="w-16 h-16 bg-[#CCFF00]/10 border border-[#CCFF00]/30 rounded-2xl flex items-center justify-center mx-auto mb-5 text-[#CCFF00] shadow-[0_0_20px_rgba(204,255,0,0.2)]">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white font-heading uppercase mb-3 leading-snug">
                  {currentStepData.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-md mx-auto font-medium">
                  {currentStepData.description}
                </p>
                <button
                  onClick={() => setCurrentStep(1)}
                  className="w-full bg-[#CCFF00] hover:bg-[#b8e600] text-black py-4 px-6 rounded-2xl font-black text-sm uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <span>{currentStepData.buttonText}</span>
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-zinc-400 font-mono">
                    Pergunta 0{currentStep} de 0{totalQuestions}
                  </span>
                  <span className="text-xs font-bold text-[#CCFF00]">
                    {progressPercentage}% Concluído
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-6 font-heading leading-snug">
                  {currentStepData.title}
                </h3>

                <div className="space-y-3 mb-6">
                  {currentStepData.options?.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(opt.category, opt.label)}
                      className="w-full bg-zinc-800/80 hover:bg-zinc-800 text-white border border-zinc-700/80 hover:border-[#CCFF00] p-4 rounded-2xl font-semibold text-sm transition-all duration-200 flex items-center gap-4 text-left group hover:shadow-[0_0_15px_rgba(204,255,0,0.15)] hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <span className="text-2xl p-2 bg-zinc-900 rounded-xl border border-zinc-700/60 group-hover:border-[#CCFF00]/40 transition-colors shrink-0">
                        {opt.icon}
                      </span>
                      <span className="flex-1 text-zinc-100 group-hover:text-white font-medium">
                        {opt.label}
                      </span>
                      <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-[#CCFF00] transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* RESULT & LEAD FORM SCREEN */
          <div className="animate-in fade-in duration-300">
            <div className="text-center mb-6">
              <span className="inline-block bg-[#CCFF00]/10 text-[#CCFF00] border border-[#CCFF00]/30 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-3">
                🎯 SUA RECOMENDAÇÃO YOUFIT
              </span>
              <h3 className="text-2xl font-black text-white font-heading uppercase leading-tight">
                {activeRecommendation.title}
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm mt-2 leading-relaxed font-medium">
                {activeRecommendation.desc}
              </p>
            </div>

            {/* REWARD GIFT BOX */}
            <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 p-4 rounded-2xl border-l-4 border-[#CCFF00] border-y border-r border-zinc-800 mb-6 shadow-inner">
              <div className="flex items-center gap-2 mb-1">
                <Gift className="w-4 h-4 text-[#CCFF00]" />
                <span className="text-xs font-black text-[#CCFF00] uppercase tracking-wider">
                  RECOMPENSA LIBERADA:
                </span>
              </div>
              <p className="text-sm font-bold text-white pl-6">
                {activeRecommendation.gift}
              </p>
            </div>

            {/* LEAD FORM */}
            <form onSubmit={handleSubmitWhatsapp} className="space-y-4">
              <div>
                <label htmlFor="userName" className="block text-xs font-bold text-zinc-400 mb-1.5 uppercase tracking-wider">
                  Digite seu Nome:
                </label>
                <input
                  type="text"
                  id="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Ex: João Silva"
                  required
                  className="w-full bg-zinc-950 text-white border border-zinc-700 rounded-xl p-3.5 text-sm font-medium focus:outline-none focus:border-[#CCFF00] transition-colors placeholder:text-zinc-600"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#CCFF00] hover:bg-[#b8e600] text-black py-4 px-6 rounded-2xl font-black text-sm uppercase tracking-wider transition-all duration-200 shadow-[0_0_25px_rgba(204,255,0,0.35)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 stroke-[2.5]" />
                <span>AGENDAR MINHA VISITA AGORA 📲</span>
              </button>
            </form>

            <div className="mt-4 text-center">
              <button
                onClick={handleRestart}
                className="text-xs text-zinc-500 hover:text-zinc-300 font-medium underline transition-colors"
              >
                Refazer o Desafio YouFit
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
