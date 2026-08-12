import React, { useState, useEffect } from 'react';
import { GYM_INFO, HORARIOS_AULAS, MODALIDADES } from '../data/gymData';
import { Star, Flame, CheckCircle2, MapPin, ArrowRight, Clock, ShieldCheck, Sparkles, MessageCircle, Calendar, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

interface HeroBentoProps {
  onOpenModal: (subject?: string) => void;
}

export const HeroBento: React.FC<HeroBentoProps> = ({ onOpenModal }) => {
  const whatsappUrl = `https://wa.me/${GYM_INFO.whatsappClean}?text=${encodeURIComponent('Olá! Gostaria de consultar informações e valores da Academia Studio You Fit em Barra Nova!')}`;

  // Slideshow state for the two hero images
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <section id="inicio" className="pt-6 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* HEADER BANNER TOP SUB-TITLE */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 bg-zinc-900/80 border border-zinc-800 p-3.5 rounded-2xl">
        <div className="flex items-center gap-3">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CCFF00] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#CCFF00]"></span>
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">
            Estrutura 100% Climatizada • Aberta Todos os Dias em Barra Nova, Alagoas
          </span>
        </div>
        
        <div className="flex items-center gap-2 text-xs font-bold text-[#CCFF00]">
          <Star className="w-4 h-4 fill-[#CCFF00] text-[#CCFF00]" />
          <span>{GYM_INFO.avaliacao} ★ no Google Maps</span>
        </div>
      </div>

      {/* BENTO GRID MAIN CONTAINER */}
      <div className="grid grid-cols-12 gap-4">
        
        {/* CARD 1: MAIN HERO BANNER (Col-span 12 on mobile, 7 on desktop) */}
        <div className="col-span-12 lg:col-span-7 bg-zinc-900 rounded-3xl p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden border border-zinc-800 group shadow-2xl min-h-[420px]">
          {/* Background Decorative Graphic */}
          <div className="absolute -top-12 -right-12 w-80 h-80 bg-[#CCFF00]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute top-6 right-6 opacity-10 pointer-events-none hidden sm:block">
            <Flame className="w-48 h-48 text-[#CCFF00]" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#CCFF00]/10 border border-[#CCFF00]/30 px-3.5 py-1.5 rounded-full mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#CCFF00]" />
              <span className="text-xs font-extrabold text-[#CCFF00] uppercase tracking-widest font-heading">
                ACADEMIA STUDIO YOU FIT
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black leading-none uppercase tracking-tighter mb-4 text-white font-heading">
              FOCO, FORÇA &<br />
              <span className="text-[#CCFF00] drop-shadow-[0_0_25px_rgba(204,255,0,0.3)]">
                RESULTADO
              </span>
            </h1>

            <p className="text-zinc-300 max-w-xl text-base sm:text-lg font-medium leading-relaxed mb-8">
              Sua melhor versão começa aqui. Treine com equipamentos de alto padrão, equipe técnica especializada e aulas coletivas exclusivas no coração de Barra Nova.
            </p>
          </div>

          {/* Highlights Pills & Action */}
          <div className="relative z-10 space-y-6">
            <div className="flex flex-wrap gap-2.5">
              <span className="bg-zinc-950/80 border border-zinc-800 text-zinc-300 text-xs font-bold px-3.5 py-2 rounded-xl flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#CCFF00]" /> 100% Climatizada
              </span>
              <span className="bg-zinc-950/80 border border-zinc-800 text-zinc-300 text-xs font-bold px-3.5 py-2 rounded-xl flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#CCFF00]" /> Aberta Todos os Dias
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => onOpenModal('Matrícula pelo Banner Hero')}
                className="bg-[#CCFF00] hover:bg-[#b8e600] text-black px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-3 group shadow-[0_0_20px_rgba(204,255,0,0.2)]"
              >
                <span>Matricule-se Agora</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#horarios"
                className="bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 px-6 py-4 rounded-2xl font-bold text-sm uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2"
              >
                <Clock className="w-4 h-4 text-[#CCFF00]" />
                <span>Ver Horários</span>
              </a>
            </div>
          </div>
        </div>

        {/* CARD 2: SHOWCASE SLIDESHOW (Col-span 12, lg 5) - ALTERNATING IMAGES BLOCK */}
        <div className="col-span-12 lg:col-span-5 bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden relative group min-h-[420px] flex flex-col justify-between shadow-2xl">
          {/* Images Container with smooth opacity crossfade */}
          <div className="absolute inset-0">
            {GYM_INFO.heroImages.map((img, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  currentSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={img.url}
                  alt={img.titulo}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-700"
                />
                {/* Gradient Overlays for readable text */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-black/30"></div>
              </div>
            ))}
          </div>

          {/* Top Badge Overlay */}
          <div className="relative z-20 p-5 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md border border-[#CCFF00]/40 px-3.5 py-1.5 rounded-full">
              <Camera className="w-3.5 h-3.5 text-[#CCFF00]" />
              <span className="text-[11px] font-extrabold text-white uppercase tracking-wider font-heading">
                ESTRUTURA & TREINOS
              </span>
            </div>

            <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono font-bold text-[#CCFF00] border border-white/10">
              <span>0{currentSlide + 1}</span>
              <span className="text-zinc-500">/</span>
              <span>0{GYM_INFO.heroImages.length}</span>
            </div>
          </div>

          {/* Bottom Captions & Controls Overlay */}
          <div className="relative z-20 p-6 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent pt-12">
            <h3 className="text-xl font-black uppercase text-white font-heading leading-snug drop-shadow-md">
              {GYM_INFO.heroImages[currentSlide].titulo}
            </h3>
            <p className="text-zinc-300 text-xs font-medium mt-1 leading-relaxed">
              {GYM_INFO.heroImages[currentSlide].legenda}
            </p>

            {/* Controls Bar */}
            <div className="flex items-center justify-between mt-5 pt-3 border-t border-white/10">
              {/* Dots */}
              <div className="flex items-center gap-2">
                {GYM_INFO.heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === idx
                        ? 'w-8 bg-[#CCFF00] shadow-[0_0_10px_rgba(204,255,0,0.8)]'
                        : 'w-2 bg-white/30 hover:bg-white/60'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2 bg-black/50 hover:bg-[#CCFF00] text-white hover:text-black border border-white/20 rounded-xl transition-all duration-200"
                  aria-label="Imagem Anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 bg-black/50 hover:bg-[#CCFF00] text-white hover:text-black border border-white/20 rounded-xl transition-all duration-200"
                  aria-label="Próxima Imagem"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 3: PLANO DESTAQUE (Col-span 12, md 6, lg 4) */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#CCFF00] rounded-3xl p-8 flex flex-col justify-between text-black relative overflow-hidden shadow-lg group hover:scale-[1.01] transition-transform">
          <div className="absolute top-4 right-4 bg-black/10 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
            Destaque Anual
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest opacity-80 mb-2">
              Plano Mais Procurado
            </p>
            <h2 className="text-3xl font-black leading-tight uppercase font-heading">
              ANUAL RECORRENTE
            </h2>
            <p className="text-xs font-bold uppercase opacity-80 mt-1">
              Débito no cartão sem comprometer o limite total
            </p>
          </div>

          <div className="my-6 bg-black/5 p-4 rounded-2xl border border-black/10">
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-bold">R$</span>
              <span className="text-5xl font-black tracking-tight font-heading">110</span>
              <span className="text-lg font-bold">,00 /mês</span>
            </div>
            <p className="text-xs font-bold uppercase tracking-tight opacity-90 mt-2">
              ✓ Musculação Liberada Todos os Dias
            </p>
          </div>

          <button
            onClick={() => onOpenModal('Plano Anual Recorrente R$ 110/mês')}
            className="w-full bg-black text-white hover:bg-zinc-900 py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
          >
            <span>Garantir Essa Condição</span>
            <ArrowRight className="w-4 h-4 text-[#CCFF00]" />
          </button>
        </div>

        {/* CARD 4: MODALIDADES RAPIDAS (Col-span 12, md 6, lg 4) */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-zinc-900 rounded-3xl p-6 border border-zinc-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[#CCFF00] text-xs font-extrabold uppercase tracking-widest font-heading">
                Modalidades & Treinadores
              </h3>
              <span className="text-[10px] bg-zinc-800 text-zinc-400 px-2.5 py-1 rounded-full uppercase font-bold">
                Aulas Inclusas
              </span>
            </div>

            <div className="space-y-3">
              {MODALIDADES.slice(1, 5).map((mod) => (
                <div key={mod.id} className="flex justify-between items-center border-b border-zinc-800 pb-2">
                  <div>
                    <span className="font-bold uppercase text-sm text-white block">
                      {mod.nome}
                    </span>
                    <span className="text-[11px] text-zinc-400">
                      {mod.professor}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-[#CCFF00]/10 text-[#CCFF00] border border-[#CCFF00]/20">
                    {mod.destaqueBadge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <a
            href="#modalidades"
            className="mt-4 text-center text-xs font-extrabold uppercase tracking-wider text-[#CCFF00] hover:underline flex items-center justify-center gap-1 py-1"
          >
            <span>Ver todas as modalidades</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* CARD 5: GOOGLE MAPS RATING (Col-span 12, sm 6, lg 4) */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-zinc-900 rounded-3xl p-6 flex flex-col justify-between border border-zinc-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase text-zinc-500 tracking-wider">
              Google Reviews
            </span>
            <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
              Verificado
            </span>
          </div>

          <div className="my-2">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-[#CCFF00] font-heading">4.8</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <p className="text-xs text-zinc-400 font-medium mt-1">
              Baseado em +120 avaliações reais no Google Maps em Barra Nova.
            </p>
          </div>

          <a
            href={GYM_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-bold uppercase tracking-wider text-zinc-300 hover:text-[#CCFF00] flex items-center gap-1 transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-[#CCFF00]" />
            <span>Ver Localização no Mapa</span>
          </a>
        </div>

        {/* CARD 6: Destaques Horários de Hoje (Col-span 12, lg 5) */}
        <div className="col-span-12 lg:col-span-5 bg-zinc-900 rounded-3xl p-6 border border-zinc-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[#CCFF00] text-xs font-extrabold uppercase tracking-widest font-heading flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#CCFF00]" />
                Aulas de Destaque
              </h3>
              <span className="text-[10px] font-bold text-zinc-400 uppercase bg-zinc-800 px-2.5 py-1 rounded-full">
                Segunda a Sexta
              </span>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-center gap-3 bg-zinc-950 p-3 rounded-2xl border border-zinc-800/80">
                <div className="text-[#CCFF00] font-mono text-sm font-bold bg-zinc-900 px-2.5 py-1 rounded-xl">
                  06:00
                </div>
                <div className="h-6 w-1 bg-[#CCFF00] rounded-full"></div>
                <div>
                  <p className="text-xs font-extrabold uppercase text-white">Treino Funcional</p>
                  <p className="text-[10px] text-zinc-400">Prof. Rogério • Segunda e Quarta</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-zinc-950 p-3 rounded-2xl border border-zinc-800/80">
                <div className="text-[#CCFF00] font-mono text-sm font-bold bg-zinc-900 px-2.5 py-1 rounded-xl">
                  17:00
                </div>
                <div className="h-6 w-1 bg-amber-400 rounded-full"></div>
                <div>
                  <p className="text-xs font-extrabold uppercase text-white">Jiu-Jitsu Premium</p>
                  <p className="text-[10px] text-zinc-400">Prof. Wesley Rosa • Seg e Qua</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-zinc-950 p-3 rounded-2xl border border-zinc-800/80">
                <div className="text-[#CCFF00] font-mono text-sm font-bold bg-zinc-900 px-2.5 py-1 rounded-xl">
                  19:00
                </div>
                <div className="h-6 w-1 bg-purple-500 rounded-full"></div>
                <div>
                  <p className="text-xs font-extrabold uppercase text-white">FitDance / Ritbox</p>
                  <p className="text-[10px] text-zinc-400">Prof. Dan Sollys & Prof. Julian</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-bold text-zinc-400">
            <span>Aulas de Jiu-Jitsu com 1ª aula grátis</span>
            <a href="#horarios" className="text-[#CCFF00] hover:underline uppercase">Tabela Completa →</a>
          </div>
        </div>

        {/* CARD 7: CONVÊNIOS ACEITOS (Col-span 12, sm 6, lg 4) */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-zinc-900 rounded-3xl p-6 border border-zinc-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-zinc-400 text-xs font-extrabold uppercase tracking-widest font-heading">
                Convênios Aceitos
              </h3>
              <ShieldCheck className="w-4 h-4 text-[#CCFF00]" />
            </div>

            <div className="grid grid-cols-2 gap-3 my-2">
              <div className="bg-white rounded-2xl p-3.5 flex flex-col items-center justify-center text-center shadow-md">
                <span className="text-black font-black italic text-base tracking-tighter">wellhub</span>
                <span className="text-[9px] font-bold text-zinc-500 uppercase">antigo Gympass</span>
              </div>

              <div className="bg-zinc-800 rounded-2xl p-3.5 flex flex-col items-center justify-center text-center border border-zinc-700">
                <span className="text-white font-extrabold tracking-tight text-base">TotalPass</span>
                <span className="text-[9px] font-bold text-[#CCFF00] uppercase">Check-in OK</span>
              </div>
            </div>
          </div>

          <p className="text-[11px] text-zinc-400 font-medium">
            Ative seu passe corporativo e faça seu check-in diretamente na recepção!
          </p>
        </div>

        {/* CARD 8: WHATSAPP DIRECT CALLOUT (Col-span 12, lg 3) */}
        <div className="col-span-12 lg:col-span-3 bg-emerald-600 rounded-3xl p-6 flex flex-col justify-between text-white relative overflow-hidden shadow-lg hover:bg-emerald-500 transition-colors">
          <div className="relative z-10">
            <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider mb-2 inline-block">
              Atendimento Direto
            </span>
            <h3 className="text-2xl font-black uppercase leading-tight font-heading">
              Dúvidas?<br />Fale Conosco
            </h3>
            <p className="text-xs text-emerald-100 font-medium mt-2">
              Chame nossa equipe no WhatsApp para valores, horários e matrículas em 1 minuto.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 relative z-10 bg-white text-emerald-700 font-extrabold px-5 py-3 rounded-2xl text-xs uppercase tracking-wider flex items-center justify-between hover:scale-105 transition-transform shadow-md"
          >
            <span className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
              <span>Abrir WhatsApp</span>
            </span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

