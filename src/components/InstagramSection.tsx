import React, { useState, useRef } from 'react';
import { GYM_INFO } from '../data/gymData';
import { Instagram, Volume2, VolumeX, Play, Pause, Heart, MessageCircle, ExternalLink, Sparkles, Video } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  // State for sound toggle for each video (default: muted)
  const [mutedStatus, setMutedStatus] = useState<Record<number, boolean>>({ 0: true, 1: true });
  const [playingStatus, setPlayingStatus] = useState<Record<number, boolean>>({ 0: true, 1: true });

  const videoRefs = [
    useRef<HTMLVideoElement | null>(null),
    useRef<HTMLVideoElement | null>(null)
  ];

  const toggleMute = (index: number) => {
    const videoObj = videoRefs[index].current;
    if (videoObj) {
      const nextMuted = !videoObj.muted;
      videoObj.muted = nextMuted;
      setMutedStatus((prev) => ({ ...prev, [index]: nextMuted }));
    }
  };

  const togglePlay = (index: number) => {
    const videoObj = videoRefs[index].current;
    if (videoObj) {
      if (videoObj.paused) {
        videoObj.play();
        setPlayingStatus((prev) => ({ ...prev, [index]: true }));
      } else {
        videoObj.pause();
        setPlayingStatus((prev) => ({ ...prev, [index]: false }));
      }
    }
  };

  return (
    <section id="instagram" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-yellow-500/10 border border-pink-500/30 px-3.5 py-1.5 rounded-full mb-3">
            <Instagram className="w-4 h-4 text-pink-400" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-pink-400 font-heading">
              SIGA NO INSTAGRAM
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white font-heading leading-tight">
            NOSSOS VÍDEOS & <br />
            <span className="text-[#CCFF00] drop-shadow-[0_0_20px_rgba(204,255,0,0.3)]">
              {GYM_INFO.instagramHandle}
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-2 font-medium leading-relaxed">
            Acompanhe o dia a dia dos nossos treinos, a energia das aulas coletivas e dicas exclusivas diretamente no nosso feed.
          </p>
        </div>

        {/* TOP CTA BUTTON */}
        <a
          href={GYM_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 text-white px-7 py-3.5 rounded-2xl font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(219,39,119,0.3)] hover:shadow-[0_0_35px_rgba(219,39,119,0.5)] hover:scale-105 self-start md:self-auto"
        >
          <Instagram className="w-5 h-5" />
          <span>Seguir {GYM_INFO.instagramHandle}</span>
          <ExternalLink className="w-4 h-4 opacity-80" />
        </a>
      </div>

      {/* VIDEOS GRID CONTAINER */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {GYM_INFO.instagramVideos.map((video, idx) => (
          <div
            key={video.id}
            className="bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden relative group shadow-2xl flex flex-col justify-between"
          >
            {/* INSTAGRAM REEL HEADER BAR */}
            <div className="p-4 bg-zinc-900/90 backdrop-blur-md border-b border-zinc-800/80 flex items-center justify-between z-20">
              <div className="flex items-center gap-3">
                <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                  <img
                    src={GYM_INFO.logoUrl}
                    alt={GYM_INFO.nome}
                    referrerPolicy="no-referrer"
                    className="w-9 h-9 object-cover rounded-full border border-black"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-extrabold text-white leading-none font-heading">
                      studioyoufit_
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]"></span>
                  </div>
                  <span className="text-[11px] font-medium text-zinc-400">
                    Barra Nova • Marechal Deodoro
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="bg-zinc-800 text-pink-400 border border-pink-500/30 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Video className="w-3 h-3" /> REELS
                </span>
              </div>
            </div>

            {/* VIDEO DISPLAY CONTAINER */}
            <div className="relative aspect-[9/14] sm:aspect-[9/13] w-full bg-black overflow-hidden group">
              <video
                ref={videoRefs[idx]}
                src={video.url}
                autoPlay
                loop
                muted={mutedStatus[idx]}
                playsInline
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => togglePlay(idx)}
              />

              {/* GRADIENT OVERLAY FOR CAPTION */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none"
              />

              {/* MUTE / UNMUTE BUTTON OVERLAY */}
              <button
                onClick={() => toggleMute(idx)}
                className="absolute top-4 right-4 z-30 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full border border-white/20 backdrop-blur-md transition-all duration-200 hover:scale-110 shadow-lg flex items-center gap-1.5"
                title={mutedStatus[idx] ? "Ativar som" : "Desativar som"}
                aria-label={mutedStatus[idx] ? "Ativar som do vídeo" : "Desativar som do vídeo"}
              >
                {mutedStatus[idx] ? (
                  <>
                    <VolumeX className="w-4 h-4 text-zinc-300" />
                    <span className="text-[10px] font-bold text-zinc-300 pr-1 uppercase hidden sm:inline">Sem Som</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4 text-[#CCFF00]" />
                    <span className="text-[10px] font-bold text-[#CCFF00] pr-1 uppercase hidden sm:inline">Com Som</span>
                  </>
                )}
              </button>

              {/* PAUSE / PLAY OVERLAY INDICATOR ON HOVER */}
              <button
                onClick={() => togglePlay(idx)}
                className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
                aria-label={playingStatus[idx] ? "Pausar vídeo" : "Reproduzir vídeo"}
              >
                <div className="p-4 bg-black/60 rounded-full border border-white/20 text-[#CCFF00] backdrop-blur-md">
                  {playingStatus[idx] ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 fill-[#CCFF00]" />}
                </div>
              </button>

              {/* BOTTOM CAPTION OVERLAY INSIDE VIDEO */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 pointer-events-none">
                <div className="flex items-center gap-4 mb-3 text-white pointer-events-auto">
                  <a
                    href={GYM_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-zinc-300 hover:text-pink-400 transition-colors text-xs font-bold"
                  >
                    <Heart className="w-5 h-5 text-pink-500 fill-pink-500/20" />
                    <span>Curtir</span>
                  </a>
                  <a
                    href={GYM_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-zinc-300 hover:text-pink-400 transition-colors text-xs font-bold"
                  >
                    <MessageCircle className="w-5 h-5 text-zinc-300" />
                    <span>Comentar</span>
                  </a>
                </div>

                <h3 className="text-xl font-black uppercase text-white font-heading drop-shadow-lg leading-tight">
                  {video.titulo}
                </h3>
                <p className="text-zinc-300 text-xs font-medium mt-1 leading-relaxed drop-shadow">
                  {video.legenda}
                </p>
              </div>
            </div>

            {/* CARD BOTTOM BAR WITH LINK */}
            <div className="p-4 bg-zinc-900 border-t border-zinc-800 flex items-center justify-between">
              <span className="text-xs font-bold text-zinc-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#CCFF00]" /> Studio You Fit Barra Nova
              </span>
              <a
                href={GYM_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-black uppercase text-[#CCFF00] hover:text-white transition-colors flex items-center gap-1 font-heading"
              >
                <span>Ver no Insta</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER CALLOUT BANNER */}
      <div className="mt-10 bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950 p-6 sm:p-8 rounded-3xl border border-zinc-800 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex items-center gap-4 text-left">
          <div className="p-3.5 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-2xl text-white shadow-[0_0_20px_rgba(219,39,119,0.3)]">
            <Instagram className="w-7 h-7" />
          </div>
          <div>
            <h4 className="text-lg font-black uppercase text-white font-heading">
              Quer ver mais treinos e novidades?
            </h4>
            <p className="text-zinc-400 text-xs font-medium">
              Siga @studioyoufit_ no Instagram e marque nosso perfil nos seus treinos!
            </p>
          </div>
        </div>

        <a
          href={GYM_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto bg-[#CCFF00] hover:bg-[#b8e600] text-black px-7 py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:scale-105 shrink-0"
        >
          Siga @studioyoufit_
        </a>
      </div>
    </section>
  );
};
