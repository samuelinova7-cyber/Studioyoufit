import React from 'react';
import { GYM_INFO, GOOGLE_REVIEWS } from '../data/gymData';
import { MapPin, Phone, MessageCircle, Clock, Star, ExternalLink, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';

interface LocationContactProps {
  onOpenModal: (subject?: string) => void;
}

export const LocationContact: React.FC<LocationContactProps> = ({ onOpenModal }) => {
  const whatsappUrl = `https://wa.me/${GYM_INFO.whatsappClean}?text=${encodeURIComponent('Olá! Vim pelo site da Academia Studio You Fit e gostaria de tirar uma dúvida.')}`;

  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 bg-[#CCFF00]/10 border border-[#CCFF00]/30 px-4 py-1.5 rounded-full mb-3 shadow-[0_0_15px_rgba(204,255,0,0.15)]">
          <MapPin className="w-4 h-4 text-[#CCFF00]" />
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#CCFF00] font-heading">
            Onde Estamos & Atendimento
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white font-heading">
          VISITE NOSSA <span className="text-[#CCFF00] drop-shadow-[0_0_25px_rgba(204,255,0,0.3)]">ESTRUTURA</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mt-3 font-medium max-w-2xl mx-auto leading-relaxed">
          Venha conhecer nossa academia 100% climatizada no coração da Barra Nova, em Marechal Deodoro - AL.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: INFO & HOURS (5 COLS) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* ADDRESS CARD */}
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl font-black uppercase text-white font-heading mb-4 flex items-center gap-2.5">
              <MapPin className="w-5 h-5 text-[#CCFF00]" />
              Endereço
            </h3>
            <p className="text-zinc-300 text-sm font-medium leading-relaxed">
              {GYM_INFO.endereco}
            </p>
            <div className="mt-4 pt-4 border-t border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
                Barra Nova • Marechal Deodoro - AL
              </span>
              <a
                href={GYM_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-black text-[#CCFF00] hover:underline uppercase"
              >
                Abrir no GPS <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* HOURS CARD */}
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
            <h3 className="text-xl font-black uppercase text-white font-heading flex items-center gap-2.5">
              <Clock className="w-5 h-5 text-[#CCFF00]" />
              Horários de Funcionamento
            </h3>

            <div className="space-y-2.5 text-xs sm:text-sm font-medium">
              <div className="flex justify-between items-center py-1.5 border-b border-zinc-800/80">
                <span className="text-zinc-400">Segunda a Sexta:</span>
                <span className="text-white font-bold">05h às 21:30h</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-zinc-800/80">
                <span className="text-zinc-400">Sábado:</span>
                <span className="text-white font-bold">07h às 17h</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-zinc-800/80">
                <span className="text-zinc-400">Domingo:</span>
                <span className="text-white font-bold">07h às 12h</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-zinc-800/80">
                <span className="text-zinc-400">Feriados:</span>
                <span className="text-[#CCFF00] font-bold">Horários Especiais</span>
              </div>
            </div>

            <div className="mt-3 bg-zinc-950 p-3 rounded-2xl border border-zinc-800/80 flex items-start gap-2.5 text-[11px] text-zinc-400 leading-relaxed">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                Feriados com horários especiais informados com antecedência no Instagram @studioyoufit_. Fechado em datas especiais (Natal, Ano Novo e Sexta-feira Santa).
              </span>
            </div>
          </div>

          {/* DIRECT WHATSAPP ACTION CARD */}
          <div className="bg-gradient-to-br from-emerald-950/60 to-zinc-900 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl font-black uppercase text-white font-heading mb-2 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              WhatsApp Oficial
            </h3>
            <p className="text-zinc-300 text-xs sm:text-sm font-medium leading-relaxed mb-5">
              Atendimento rápido para tirar dúvidas, agendar visitas ou confirmar convênios (Wellhub Silver+ / TotalPass TP2).
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-3.5 rounded-2xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Conversar: {GYM_INFO.whatsappFormatted}</span>
            </a>
          </div>

        </div>

        {/* RIGHT COLUMN: GOOGLE MAPS EMBED & REVIEWS (7 COLS) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* MAP IFRAME CONTAINER */}
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-3 sm:p-4 shadow-xl overflow-hidden">
            <div className="relative w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden border border-zinc-800">
              <iframe
                title="Localização Studio You Fit Barra Nova"
                src={GYM_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[0.2] contrast-[1.1]"
              ></iframe>
            </div>
          </div>

          {/* REVIEWS SLIDER / LIST */}
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg sm:text-xl font-black uppercase text-white font-heading flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#CCFF00] fill-[#CCFF00]" />
                  Avaliações dos Alunos
                </h3>
                <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
                  Nota 4.8 no Google Maps ({GYM_INFO.totalAvaliacoes} avaliações)
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {GOOGLE_REVIEWS.map((review, i) => (
                <div key={i} className="bg-black/60 border border-zinc-800/80 rounded-2xl p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(review.nota)].map((_, idx) => (
                        <Star key={idx} className="w-3.5 h-3.5 text-[#CCFF00] fill-[#CCFF00]" />
                      ))}
                    </div>
                    <p className="text-xs text-zinc-300 font-medium leading-relaxed italic mb-3">
                      "{review.comentario}"
                    </p>
                  </div>
                  <div className="border-t border-zinc-800/80 pt-2">
                    <span className="text-xs font-black text-white block">{review.nome}</span>
                    <span className="text-[10px] text-zinc-500 block">{review.local}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
