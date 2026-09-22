import React, { useState, useEffect, useRef } from 'react';
import { GYM_INFO } from '../data/gymData';
import { Sparkles, Trophy, ArrowRight, RotateCcw, Send, CheckCircle2, Flame, Gift, Dumbbell, Shield, Music, Activity, Play, Volume2, VolumeX, Star, Bolt, RotateCw, QrCode, Check } from 'lucide-react';

interface Option {
  id: string;
  title: string;
  desc: string;
  icon: string;
}

interface Step {
  title: string;
  subtitle: string;
  key: string;
  options: Option[];
}

const STEPS_DATA: Step[] = [
  {
    title: "1. Qual é o seu Principal Objetivo?",
    subtitle: "Defina a meta principal para otimizarmos o protocolo Studio You Fit.",
    key: "goal",
    options: [
      { id: "hipertrofia", title: "Hipertrofia & Força", desc: "Ganho de massa muscular na musculação climatizada.", icon: "fa-fire" },
      { id: "emagrecimento", title: "Definição & Queima", desc: "Redução de gordura com Hitbox e Funcional.", icon: "fa-bolt" },
      { id: "luta", title: "Muay Thai & Foco", desc: "Condicionamento e disciplina marcial em Barra Nova.", icon: "fa-shield-halved" },
      { id: "danca", title: "FitDance & Bem-Estar", desc: "Alta queima calórica com muita dança e energia.", icon: "fa-music" }
    ]
  },
  {
    title: "2. Qual o seu Nível de Experiência?",
    subtitle: "Para calibrarmos a intensidade e complexidade dos exercícios.",
    key: "level",
    options: [
      { id: "iniciante", title: "Iniciante / Novato", desc: "Começando agora ou querendo sair do sedentarismo.", icon: "fa-seedling" },
      { id: "intermediario", title: "Intermediário", desc: "Treino regularmente há alguns meses.", icon: "fa-person-running" },
      { id: "avancado", title: "Avançado / Hardcore", desc: "Anos de treino intenso e constância.", icon: "fa-dumbbell" },
      { id: "convenio", title: "Usuário Wellhub (Silver+) / TotalPass (TP2)", desc: "Treino com convênio parceiro You Fit.", icon: "fa-id-card" }
    ]
  },
  {
    title: "3. Dias Disponíveis por Semana",
    subtitle: "Quantas vezes na semana você consegue vir à You Fit?",
    key: "days",
    options: [
      { id: "3x", title: "3 Dias por Semana", desc: "Ideal para rotinas corridas.", icon: "fa-calendar-days" },
      { id: "4x", title: "4 Dias por Semana", desc: "Superior e Inferior balanceado.", icon: "fa-calendar-week" },
      { id: "5x", title: "5 Dias por Semana", desc: "Divisão clássica para resultados máximos.", icon: "fa-fire-flame-curved" },
      { id: "6x", title: "6 Dias por Semana", desc: "Foco total na alta performance.", icon: "fa-bolt-lightning" }
    ]
  },
  {
    title: "4. Tempo Disponível por Sessão",
    subtitle: "Quanto tempo dura cada visita sua à academia?",
    key: "duration",
    options: [
      { id: "30min", title: "30 Minutos", desc: "Treino rápido e dinâmico (Express).", icon: "fa-stopwatch" },
      { id: "45min", title: "45 a 60 Minutos", desc: "Duração ideal para descanso e carga.", icon: "fa-clock" },
      { id: "90min", title: "90 Minutos ou Mais", desc: "Sessão completa + alongamento.", icon: "fa-hourglass-half" }
    ]
  },
  {
    title: "5. Foco Muscular ou Aula Preferida",
    subtitle: "Qual modalidade você quer priorizar?",
    key: "focus_muscle",
    options: [
      { id: "musculacao", title: "Área de Musculação", desc: "Pesos livres, máquinas e halteres modernos.", icon: "fa-dumbbell" },
      { id: "hitbox_funcional", title: "Hitbox & Funcional", desc: "Treino dinâmico em grupo de alta intensidade.", icon: "fa-person-hiking" },
      { id: "muay_thai", title: "Muay Thai & Combate", desc: "Técnica, tônus e alta queima calórica.", icon: "fa-hand-fist" },
      { id: "fitdance", title: "FitDance (Prof. Daniel Sales)", desc: "Coreografias e diversão total.", icon: "fa-compact-disc" }
    ]
  },
  {
    title: "6. Equipamentos de Preferência",
    subtitle: "Como você prefere executar os seus exercícios?",
    key: "equipment",
    options: [
      { id: "maquinas", title: "Máquinas e Cabos", desc: "Segurança total e isolamento guiado.", icon: "fa-gears" },
      { id: "livres", title: "Pesos Livres", desc: "Halteres, anilhas e barras.", icon: "fa-dumbbell" },
      { id: "misto", title: "Abordagem Mista (Recomendado)", desc: "O melhor dos dois mundos You Fit.", icon: "fa-shuffle" },
      { id: "aulas", title: "Aulas Coletivas & Peso Corporal", desc: "Dinamismo e interação em grupo.", icon: "fa-users" }
    ]
  },
  {
    title: "7. Estilo de Cardio Favorito",
    subtitle: "Qual modalidade aeróbica combina mais com você?",
    key: "cardio",
    options: [
      { id: "esteira", title: "Esteira (Corrida / Caminhada)", desc: "Ritmo constante ou tiros.", icon: "fa-person-running" },
      { id: "bike", title: "Bicicleta Ergométrica", desc: "Baixo impacto nas articulações.", icon: "fa-bicycle" },
      { id: "aulas_cardio", title: "Cardio nas Aulas (Hitbox / FitDance)", desc: "Queima em grupo super divertida.", icon: "fa-heart-pulse" },
      { id: "sem_cardio", title: "Apenas Foco em Força", desc: "Foco exclusivo em musculação pesada.", icon: "fa-ban" }
    ]
  },
  {
    title: "8. Ritmo de Descanso",
    subtitle: "Qual intensidade você prefere manter?",
    key: "rest_pace",
    options: [
      { id: "curto", title: "Descanso Curto (30s - 45s)", desc: "Ritmo acelerado e suor.", icon: "fa-bolt" },
      { id: "moderado", title: "Descanso Moderado (60s - 90s)", desc: "Equilíbrio entre força e gasto.", icon: "fa-stopwatch-20" },
      { id: "longo", title: "Descanso Longo (2m - 3m)", desc: "Foco absoluto em carga máxima.", icon: "fa-battery-full" }
    ]
  },
  {
    title: "9. Horário de Treino Habitual",
    subtitle: "Quando você costuma frequentar a You Fit Barra Nova?",
    key: "time_slot",
    options: [
      { id: "manha", title: "Manhã Cedo (05h - 10h)", desc: "Disposição para o dia todo.", icon: "fa-sun" },
      { id: "tarde", title: "Tarde (14h - 17h)", desc: "Foco e tranquilidade.", icon: "fa-cloud-sun" },
      { id: "noite", title: "Noite (17h - 21:30h)", desc: "Descarregar o estresse do dia.", icon: "fa-moon" }
    ]
  },
  {
    title: "10. Opção de Acesso Pretendida",
    subtitle: "Como você deseja treinar na You Fit com Matrícula Grátis?",
    key: "access_type",
    options: [
      { id: "plano_essencial", title: "Plano Anual Essencial (R$ 129,90)", desc: "Musculação completa e climatizada.", icon: "fa-star" },
      { id: "plano_premium", title: "Plano Premium (R$ 149,90)", desc: "Musculação + Todas as Aulas Coletivas.", icon: "fa-crown" },
      { id: "plano_familia", title: "Plano Família (R$ 100,00/pessoa)", desc: "Economia a partir de 3 pessoas.", icon: "fa-users" },
      { id: "convenio", title: "Wellhub (Silver+) ou TotalPass (TP2)", desc: "Ativação direta na recepção.", icon: "fa-circle-check" }
    ]
  }
];

export const QuizGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [gameState, setGameState] = useState<'welcome' | 'playing' | 'result'>('welcome');
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState<Record<string, string>>({});
  const [userXP, setUserXP] = useState(100);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [userName, setUserName] = useState('');

  // Web Audio Synthesizer
  const audioCtxRef = useRef<AudioContext | null>(null);

  const initAudio = () => {
    if (!audioCtxRef.current && typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        audioCtxRef.current = new AudioContextClass();
      }
    }
  };

  const playSound = (type: string) => {
    if (!soundEnabled) return;
    try {
      initAudio();
      const ctx = audioCtxRef.current;
      if (!ctx) return;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;

      if (type === 'start') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.3);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
      } else if (type === 'select') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
        osc.start(now);
        osc.stop(now + 0.15);
      } else if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(329.63, now);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === 'success') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.1);
        osc.frequency.setValueAtTime(783.99, now + 0.2);
        osc.frequency.setValueAtTime(1046.50, now + 0.3);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
        osc.start(now);
        osc.stop(now + 0.5);
      }
    } catch (e) {
      console.log('Audio error:', e);
    }
  };

  // Particle Canvas Background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles: Array<{ x: number; y: number; size: number; speedX: number; speedY: number; color: string; alpha: number }> = [];
    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.5 + 1,
        speedX: (Math.random() - 0.5) * 0.6,
        speedY: (Math.random() - 0.5) * 0.6,
        color: Math.random() > 0.3 ? '#22c55e' : '#CCFF00',
        alpha: Math.random() * 0.4 + 0.2
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > width || p.y < 0 || p.y > height) {
          p.x = Math.random() * width;
          p.y = Math.random() * height;
        }
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const startMinigame = () => {
    playSound('start');
    setGameState('playing');
    setCurrentStep(0);
    setUserData({});
    setUserXP(100);
  };

  const selectOption = (key: string, value: string) => {
    playSound('select');
    setUserData(prev => ({ ...prev, [key]: value }));
    setUserXP(prev => prev + 25);

    setTimeout(() => {
      if (currentStep < STEPS_DATA.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        playSound('success');
        setGameState('result');
      }
    }, 280);
  };

  const nextStep = () => {
    playSound('click');
    const step = STEPS_DATA[currentStep];
    if (!userData[step.key]) {
      setUserData(prev => ({ ...prev, [step.key]: step.options[0].id }));
    }
    if (currentStep < STEPS_DATA.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      playSound('success');
      setGameState('result');
    }
  };

  const prevStep = () => {
    playSound('click');
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleWhatsappSend = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = GYM_INFO.whatsappClean;
    const nameStr = userName.trim() ? `*Nome:* ${userName}%0A` : '';
    let msg = `Olá! Montei meu Treino YouFit 10-X no site:%0A${nameStr}`;
    STEPS_DATA.forEach((s, idx) => {
      const selectedId = userData[s.key] || s.options[0].id;
      const opt = s.options.find(o => o.id === selectedId) || s.options[0];
      msg += `%0A• ${s.title.replace(/^\d+\.\s*/, '')}: *${opt.title}*`;
    });
    msg += `%0A%0AGostaria de garantir minha matrícula com taxa zero em Barra Nova!`;
    window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
  };

  const progressPercentage = Math.round(((currentStep + 1) / STEPS_DATA.length) * 100);
  const currentStepData = STEPS_DATA[currentStep];

  return (
    <section id="monte-seu-treino" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20 relative">
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />

      {/* TOP HEADER */}
      <div className="relative z-10 flex items-center justify-between mb-8 bg-zinc-900/80 backdrop-blur-md border border-[#CCFF00]/30 px-6 py-4 rounded-2xl shadow-[0_0_30px_rgba(204,255,0,0.15)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#CCFF00] flex items-center justify-center text-black font-black shadow-[0_0_15px_rgba(204,255,0,0.5)]">
            <Dumbbell className="w-5 h-5" />
          </div>
          <div>
            <span className="font-black text-lg tracking-wider text-white uppercase font-heading">
              YOUFIT <span className="text-[#CCFF00]">MINIGAME 10-X</span>
            </span>
            <p className="text-xs text-zinc-400 font-medium">Monte seu Treino Interativo em Barra Nova</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              playSound('click');
              setSoundEnabled(!soundEnabled);
            }}
            className="px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-[#CCFF00] border border-zinc-700 transition-all flex items-center gap-2 text-xs font-bold"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            <span className="hidden sm:inline">{soundEnabled ? 'Som Ativo' : 'Mudo'}</span>
          </button>
        </div>
      </div>

      {/* MAIN GAME CONTAINER */}
      <div className="relative z-10 bg-zinc-900/90 backdrop-blur-xl rounded-[32px] border-2 border-[#CCFF00]/40 p-6 sm:p-10 shadow-[0_0_50px_rgba(204,255,0,0.2)] overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#CCFF00]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* WELCOME SCREEN */}
        {gameState === 'welcome' && (
          <div className="text-center py-10 animate-in fade-in duration-300">
            <div className="w-20 h-20 bg-[#CCFF00]/10 border border-[#CCFF00]/40 rounded-3xl flex items-center justify-center mx-auto mb-6 text-[#CCFF00] shadow-[0_0_30px_rgba(204,255,0,0.3)]">
              <Sparkles className="w-10 h-10 animate-bounce" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-heading uppercase tracking-tight mb-4">
              MONTE SEU TREINO <span className="text-[#CCFF00] drop-shadow-[0_0_20px_rgba(204,255,0,0.4)]">10-X YOUFIT</span>
            </h2>
            <p className="text-zinc-300 max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed font-medium">
              Responda a 10 etapas rápidas para personalizar sua rotina fitness na academia You Fit em Barra Nova (Marechal Deodoro - AL). Ganhe XP e resgate seu bônus!
            </p>
            <button
              onClick={startMinigame}
              className="px-10 py-5 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-black text-base uppercase tracking-wider rounded-2xl shadow-[0_0_30px_rgba(204,255,0,0.4)] transition-all transform hover:scale-105 active:scale-95 inline-flex items-center gap-3"
            >
              <Play className="w-5 h-5 fill-black" />
              <span>INICIAR SIMULADOR 🚀</span>
            </button>
          </div>
        )}

        {/* PLAYING SCREEN */}
        {gameState === 'playing' && (
          <div className="animate-in fade-in duration-300">
            {/* Progress Header */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-black text-[#CCFF00] tracking-widest uppercase font-mono">
                ETAPA 0{currentStep + 1} DE 10
              </span>
              <span className="text-xs font-bold text-zinc-300 bg-zinc-800 px-3 py-1 rounded-full border border-zinc-700">
                ⭐ {userXP} XP • {progressPercentage}% Concluído
              </span>
            </div>

            <div className="w-full bg-zinc-800 h-2.5 rounded-full mb-8 overflow-hidden border border-white/5">
              <div
                className="h-full bg-gradient-to-r from-[#b8e600] to-[#CCFF00] transition-all duration-300 shadow-[0_0_15px_rgba(204,255,0,0.8)]"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>

            {/* Question Title */}
            <div className="mb-8">
              <h3 className="text-xl sm:text-3xl font-black text-white font-heading uppercase tracking-tight mb-2">
                {currentStepData.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-medium">
                {currentStepData.subtitle}
              </p>
            </div>

            {/* Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {currentStepData.options.map((opt) => {
                const isSelected = userData[currentStepData.key] === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => selectOption(currentStepData.key, opt.id)}
                    className={`p-5 rounded-2xl border text-left transition-all flex items-start gap-4 group ${
                      isSelected
                        ? 'bg-[#CCFF00]/15 border-[#CCFF00] shadow-[0_0_20px_rgba(204,255,0,0.25)]'
                        : 'bg-zinc-800/80 border-zinc-700/80 hover:border-[#CCFF00]/60 hover:bg-zinc-800'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-[#CCFF00] text-xl shrink-0 group-hover:scale-110 transition-transform">
                      <i className={`fa-solid ${opt.icon}`}></i>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-white text-sm sm:text-base uppercase font-heading group-hover:text-[#CCFF00] transition-colors">
                          {opt.title}
                        </h4>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs font-bold ${
                          isSelected ? 'bg-[#CCFF00] border-[#CCFF00] text-black' : 'border-zinc-600'
                        }`}>
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                      </div>
                      <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                        {opt.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Footer Navigation */}
            <div className="flex items-center justify-between pt-6 border-t border-zinc-800">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className="px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-bold uppercase tracking-wider transition-all disabled:opacity-30 disabled:pointer-events-none"
              >
                ← Voltar
              </button>
              <button
                onClick={nextStep}
                className="px-6 py-3 bg-[#CCFF00] hover:bg-[#b8e600] text-black text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-[0_0_15px_rgba(204,255,0,0.3)] flex items-center gap-2"
              >
                <span>{currentStep === STEPS_DATA.length - 1 ? 'Finalizar Treino' : 'Avançar'}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        )}

        {/* RESULT / SUMMARY SCREEN */}
        {gameState === 'result' && (
          <div className="animate-in fade-in duration-300">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-[#CCFF00]/15 border border-[#CCFF00] rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#CCFF00] shadow-[0_0_25px_rgba(204,255,0,0.3)]">
                <Trophy className="w-8 h-8" />
              </div>
              <span className="bg-[#CCFF00]/10 text-[#CCFF00] border border-[#CCFF00]/30 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-3 inline-block">
                🎉 PROTOCOLO 10-X CONCLUÍDO
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-white font-heading uppercase">
                SEU TREINO PERSONALIZADO YOUFIT
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm mt-2 font-medium">
                Apresente seu resultado na recepção da You Fit em Barra Nova ou agende sua matrícula via WhatsApp!
              </p>
            </div>

            {/* Summary Box */}
            <div className="bg-zinc-950 rounded-2xl p-4 sm:p-6 border border-zinc-800 mb-6 max-h-80 overflow-y-auto space-y-2.5">
              {STEPS_DATA.map((s, idx) => {
                const selectedId = userData[s.key] || s.options[0].id;
                const opt = s.options.find(o => o.id === selectedId) || s.options[0];
                return (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs sm:text-sm">
                    <span className="text-zinc-400 font-bold uppercase font-mono text-[11px]">
                      0{idx + 1}. {s.title.replace(/^\d+\.\s*/, '')}
                    </span>
                    <span className="text-[#CCFF00] font-black uppercase flex items-center gap-1.5 text-right">
                      <i className={`fa-solid ${opt.icon}`}></i>
                      <span>{opt.title}</span>
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Lead WhatsApp Form */}
            <form onSubmit={handleWhatsappSend} className="space-y-4 mb-6">
              <div>
                <label htmlFor="quizUserName" className="block text-xs font-bold text-zinc-400 mb-1.5 uppercase tracking-wider">
                  Digite seu Nome para Salvar o Protocolo:
                </label>
                <input
                  type="text"
                  id="quizUserName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Ex: Carlos Silva"
                  required
                  className="w-full bg-zinc-950 text-white border border-zinc-700 rounded-xl p-3.5 text-sm font-medium focus:outline-none focus:border-[#CCFF00] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#CCFF00] hover:bg-[#b8e600] text-black py-4 px-6 rounded-2xl font-black text-sm uppercase tracking-wider transition-all duration-200 shadow-[0_0_25px_rgba(204,255,0,0.35)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 stroke-[2.5]" />
                <span>ENVIAR MEU TREINO NO WHATSAPP 📲</span>
              </button>
            </form>

            <div className="flex justify-center">
              <button
                onClick={() => setGameState('welcome')}
                className="text-xs text-zinc-400 hover:text-white underline font-bold uppercase transition-colors flex items-center gap-1"
              >
                <RotateCw className="w-3.5 h-3.5" />
                <span>Refazer Simulação 10-X</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
