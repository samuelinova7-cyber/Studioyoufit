import React from 'react';
import { GYM_INFO, GOOGLE_REVIEWS } from '../data/gymData';
import { MapPin, Phone, Clock, Star, MessageCircle, Navigation, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface LocationContactProps {
  onOpenModal: (subject?: string) => void;
}

export const LocationContact: React.FC<LocationContactProps> = ({ onOpenModal }) => {
  const whatsappUrl = `https://wa.me/${GYM_INFO.whatsappClean}?text=${encodeURIComponent('Olá! Vim pelo site da Academia Studio You Fit e gostaria de tirar dúvidas sobre localização, matrículas e horários.')}`;

  return (
    <section id="contato" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800/80">
      
      {/* SECTION TITLE */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-extrabold text-[#CCFF00] uppercase tracking-widest font-heading">
            VENHA CONHECER DE PERTO
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white font-heading mt-1">
            Localização & Contato
          </h2>
        </div>
        <p className="text-zinc-400 text-sm max-w-md font-medium">
          Estamos situados na rua principal de Barra Nova, com fácil acesso e estacionamento para sua comodidade.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        
        {/* LEFT COLUMN: INFO CARDS (5 COLS) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* ENDEREÇO CARD */}
          <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-[#CCFF00] p-3 rounded-2xl text-black">
                <MapPin className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-xs font-extrabold uppercase text-[#CCFF00] tracking-wider">
                  Endereço Oficial
                </h3>
                <p className="text-white font-bold text-sm sm:text-base leading-snug">
                  {GYM_INFO.endereco}
                </p>
              </div>
            </div>

            <a
              href={GYM_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 px-4 rounded-2xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 border border-zinc-700"
            >
              <Navigation className="w-4 h-4 text-[#CCFF00]" />
              <span>Como Chegar (Google Maps)</span>
            </a>
          </div>

          {/* TELEFONE & HORARIOS CARD */}
          <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-600 p-3 rounded-2xl text-white">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xs font-extrabold uppercase text-emerald-400 tracking-wider">
                  WhatsApp / Atendimento
                </h3>
                <p className="text-white font-extrabold text-lg">
                  {GYM_INFO.whatsappFormatted}
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-zinc-800/80 space-y-2 text-xs text-zinc-300 font-medium">
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-1.5 font-bold">
                  <Clock className="w-3.5 h-3.5 text-[#CCFF00]" /> Segunda a Sexta:
                </span>
                <span className="text-white font-mono font-bold">05:00 às 22:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-1.5 font-bold">
                  <Clock className="w-3.5 h-3.5 text-[#CCFF00]" /> Sábados:
                </span>
                <span className="text-white font-mono font-bold">07:00 às 13:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-1.5 font-bold">
                  <Clock className="w-3.5 h-3.5 text-[#CCFF00]" /> Domingos e Feriados:
                </span>
                <span className="text-white font-mono font-bold">Horários Especiais</span>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-3.5 px-4 rounded-2xl text-xs uppercase tracking-wider transition-transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Iniciar Conversa no WhatsApp</span>
            </a>
          </div>

        </div>

        {/* RIGHT COLUMN: MAP EMBED (7 COLS) */}
        <div className="lg:col-span-7 bg-zinc-900 rounded-3xl p-3 border border-zinc-800 overflow-hidden shadow-xl min-h-[380px] flex flex-col justify-between">
          <div className="w-full h-full min-h-[360px] rounded-2xl overflow-hidden relative">
            <iframe
              title="Google Maps Studio You Fit"
              src="https://maps.google.com/maps?q=Rua+Jo%C3%A3o+Argemiro+Rosa+867+Barra+Nova+Marechal+Deodoro+AL&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '360px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale contrast-125 rounded-2xl"
            ></iframe>
          </div>
        </div>

      </div>

      {/* REVIEWS GRID BENTO CARD */}
      <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
              <span className="text-white font-black text-lg ml-1">4.8 / 5.0</span>
            </div>
            <h3 className="text-2xl font-black uppercase text-white font-heading">
              O que os Alunos Dizem
            </h3>
          </div>

          <a
            href={GYM_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#CCFF00] hover:underline uppercase tracking-wider"
          >
            Ver todas as avaliações no Google →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GOOGLE_REVIEWS.map((review, i) => (
            <div key={i} className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800/80 flex flex-col justify-between">
              <p className="text-zinc-300 text-xs italic font-medium leading-relaxed mb-4">
                "{review.comentario}"
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
                <div>
                  <p className="text-white font-bold text-xs">{review.nome}</p>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase">{review.local}</p>
                </div>
                <div className="flex text-amber-400">
                  {[...Array(review.nota)].map((_, idx) => (
                    <Star key={idx} className="w-3 h-3 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
