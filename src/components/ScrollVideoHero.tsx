import React, { useEffect, useRef } from 'react';

export const ScrollVideoHero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const progressRef = useRef<HTMLSpanElement | null>(null);
  const loadingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const progressEl = progressRef.current;
    const loadingEl = loadingRef.current;
    const heroSection = document.querySelector('.hero') as HTMLElement;
    const heroContent = document.querySelector('.hero__content') as HTMLElement;
    const projectsSection = document.querySelector('.projects-section') as HTMLElement;
    const projectsInner = document.querySelector('.projects-section__inner') as HTMLElement;
    const projectCards = document.querySelectorAll('.project-card');
    const projectsHeading = document.querySelector('.projects-section h2');

    if (!video || !heroSection) return;

    let duration = 0;
    let targetTime = 0;
    let currentTime = 0;
    let rafId: number | null = null;
    let timelineInitialized = false;

    const videoSrc = "https://res.cloudinary.com/dalwymbky/video/upload/v1784654111/hero1_xgxoxk.mp4";

    video.muted = true;
    video.playsInline = true;
    video.crossOrigin = "anonymous";
    video.preload = "auto";

    const updateBufferProgress = () => {
      if (!video || !progressEl) return;
      if (video.buffered.length > 0 && duration > 0) {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1);
        const percent = Math.min(100, Math.round((bufferedEnd / duration) * 100));
        progressEl.textContent = percent.toString();
      }
    };

    const handleLoadedMetadata = () => {
      duration = video.duration || 1;
      video.pause();
      updateBufferProgress();
      initScrollAndTimeline();
    };

    const handleProgress = () => {
      updateBufferProgress();
    };

    const handleCanPlay = () => {
      if (loadingEl) {
        loadingEl.classList.add('is-hidden');
      }
      updateBufferProgress();
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('progress', handleProgress);
    video.addEventListener('canplay', handleCanPlay);

    video.src = videoSrc;
    video.load();

    const loop = () => {
      currentTime += (targetTime - currentTime) * 0.08;
      if (video && Math.abs(targetTime - currentTime) > 0.01 && !video.seeking) {
        video.currentTime = Math.max(0, Math.min(duration, currentTime));
      }
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    const initScrollAndTimeline = () => {
      if (timelineInitialized) return;
      if (typeof window === 'undefined' || !(window as any).gsap || !(window as any).ScrollTrigger) return;

      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      // Hero video scrub trigger
      ScrollTrigger.create({
        trigger: heroSection,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self: any) => {
          targetTime = self.progress * duration;
        },
        onLeave: () => {
          const wrapper = document.querySelector('.hero__video-wrapper') as HTMLElement;
          const content = document.querySelector('.hero__content') as HTMLElement;
          if (wrapper) wrapper.style.display = 'none';
          if (content) content.style.display = 'none';
          if (projectsSection) projectsSection.style.display = 'none';
        },
        onEnterBack: () => {
          const wrapper = document.querySelector('.hero__video-wrapper') as HTMLElement;
          const content = document.querySelector('.hero__content') as HTMLElement;
          if (wrapper) wrapper.style.display = 'block';
          if (content) content.style.display = 'block';
          if (projectsSection) projectsSection.style.display = 'flex';
        }
      });

      // Solutions transition timeline
      const isMobile = window.innerWidth <= 640;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroSection,
          start: isMobile ? "top top" : "18% top",
          end: isMobile ? "+=260%" : "85% top",
          scrub: isMobile ? 0.55 : 1.15,
          invalidateOnRefresh: true
        }
      });

      // Initial states via GSAP
      gsap.set(projectsSection, { autoAlpha: 0, y: 58 });
      if (projectsHeading) gsap.set(projectsHeading, { autoAlpha: 0, y: 34 });
      if (projectCards.length) gsap.set(projectCards, { autoAlpha: 0, y: 86, filter: "blur(0px)" });

      // Timeline sequence
      tl.to(heroContent, { autoAlpha: 0, y: -22, duration: 0.55, ease: "none" }, 0)
        .to(projectsSection, { autoAlpha: 1, y: 0, duration: 0.75, ease: "none" }, 0.62);

      if (projectsHeading) {
        tl.to(projectsHeading, { autoAlpha: 1, y: 0, duration: 0.48, ease: "none" }, 0.82);
      }

      if (projectCards.length) {
        tl.to(projectCards, { autoAlpha: 1, y: 0, duration: 0.72, stagger: 0.24, ease: "none" }, 1);
      }

      if (!isMobile) {
        // Desktop exit blur sequence
        tl.to(projectCards, { autoAlpha: 0, y: -24, filter: "blur(14px)", duration: 0.58, stagger: 0.16, ease: "none" }, "+=0.35")
          .to(projectsHeading, { autoAlpha: 0, y: -18, filter: "blur(10px)", duration: 0.42 }, "-=0.3")
          .to(projectsSection, { autoAlpha: 0, y: -34, duration: 0.5 }, "-=0.2");
      } else {
        // Mobile inner scroll
        const overflow = Math.max(0, (projectsInner?.scrollHeight || 0) - (window.innerHeight - 68));
        if (overflow > 0) {
          tl.to(projectsInner, { y: -overflow, duration: 1.15, ease: "none" }, "+=0.12");
        }
      }

      timelineInitialized = true;
    };

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (video) {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        video.removeEventListener('progress', handleProgress);
        video.removeEventListener('canplay', handleCanPlay);
      }
      if ((window as any).ScrollTrigger) {
        (window as any).ScrollTrigger.getAll().forEach((t: any) => t.kill());
      }
    };
  }, []);

  return (
    <>
      {/* Loading Overlay */}
      <div ref={loadingRef} className="hero__loading">
        Loading... <span id="hero-progress">0</span>%
      </div>

      {/* Main Hero Section (420svh scroll distance) */}
      <section className="hero relative isolate min-h-[420svh] overflow-hidden bg-[#050505] text-[#f8f8f4]">
        
        {/* Fixed Video Wrapper (100vw x 100svh viewport layer) */}
        <div className="hero__video-wrapper fixed inset-0 w-screen h-[100svh] overflow-hidden bg-[#050505] z-0 pointer-events-none">
          <video
            ref={videoRef}
            id="hero-video"
            className="hero__video block w-full h-full max-w-none object-cover object-center will-change-contents"
            muted
            playsInline
            crossOrigin="anonymous"
            preload="auto"
          />
          <div className="hero__overlay absolute inset-0 z-1 bg-black/28 pointer-events-none"></div>
        </div>

        {/* Fixed Hero Content Layer */}
        <div className="hero__content fixed inset-0 z-2 pointer-events-none will-change-[opacity,transform]">
          {/* Hero Message (Bottom Left) */}
          <div className="hero__message absolute left-[clamp(16px,3.8vw,72px)] bottom-[clamp(26px,8.3vw,132px)] w-[min(69vw,900px)]">
            <h1 className="m-0 text-[clamp(28px,4.15vw,72px)] font-black uppercase tracking-normal leading-[0.86] text-[#f8f8f4] [text-wrap:balance] [text-shadow:0_2px_0_rgba(0,0,0,0.52),0_0_10px_rgba(255,255,255,0.08)]">
              ESCALAMOS<br />
              A SUA PERFORMANCE<br />
              <strong>O PRÓXIMO É O SEU</strong>
            </h1>
          </div>

          {/* Hero Side Text (Bottom Right) */}
          <div className="hero__side-text absolute right-[clamp(18px,10.2vw,160px)] bottom-[clamp(50px,8.8vw,144px)] max-w-[270px] m-0 text-[rgba(255,255,255,0.72)] text-[clamp(11px,1vw,17px)] font-bold leading-[1.25]">
            Para quem está pronto para<br />dominar seu treino e sua saúde.
          </div>
        </div>

        {/* Fixed Solutions Overlay Section */}
        <div className="projects-section fixed inset-0 z-3 isolation-isolate flex items-center p-[clamp(28px,5vw,64px)_clamp(18px,4vw,54px)] bg-black/12 text-[#f8f8f4] opacity-0 invisible translate-y-[58px] pointer-events-none will-change-[opacity,transform] sm:overflow-visible overflow-hidden">
          {/* Atmosphere Background Layer */}
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_46%_5%,rgba(13,20,27,0.45)_0%,transparent_60%),radial-gradient(circle_at_84%_58%,rgba(20,30,40,0.35)_0%,transparent_70%),linear-gradient(180deg,#050505_0%,rgba(5,5,5,0.85)_100%)] backdrop-grayscale-[0.65] backdrop-contrast-[1.05] pointer-events-none"></div>

          <div className="projects-section__inner relative z-1 w-[min(100%,1180px)] mx-auto">
            <h2 className="m-0 mb-[clamp(28px,3.7vw,44px)] text-[clamp(40px,6vw,84px)] font-bold leading-[0.9] tracking-normal will-change-[opacity,transform]">
              Soluções que entregamos
            </h2>

            <div className="projects-grid grid grid-cols-1 sm:grid-cols-3 gap-[clamp(22px,4.8vw,62px)] pb-[30px] sm:pb-0">
              {/* Card 1 */}
              <article className="project-card relative min-h-[clamp(280px,31vw,330px)] p-[clamp(48px,5vw,68px)_clamp(30px,3.2vw,46px)_38px] bg-[rgba(13,20,27,0.92)] border border-[rgba(255,255,255,0.86)] will-change-[opacity,transform,filter]">
                <div className="project-card__dot absolute -top-[9px] -left-[9px] w-[18px] h-[18px] rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.65)]"></div>
                <h3 className="m-0 mb-[clamp(16px,1.8vw,24px)] text-[#f8f8f4] text-[clamp(22px,2.2vw,34px)] font-black leading-[1.03] max-w-[10ch]">
                  Treino & Hipertrofia
                </h3>
                <p className="m-0 text-[#f8f8f4] text-[clamp(13px,1.05vw,16px)] font-bold leading-[1.58]">
                  Estrutura moderna e 100% climatizada com equipamentos de ponta para ganho de força e máxima definição muscular.
                </p>
              </article>

              {/* Card 2 */}
              <article className="project-card relative min-h-[clamp(280px,31vw,330px)] p-[clamp(48px,5vw,68px)_clamp(30px,3.2vw,46px)_38px] bg-[rgba(13,20,27,0.92)] border border-[rgba(255,255,255,0.86)] will-change-[opacity,transform,filter]">
                <div className="project-card__dot absolute -top-[9px] -left-[9px] w-[18px] h-[18px] rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.65)]"></div>
                <h3 className="m-0 mb-[clamp(16px,1.8vw,24px)] text-[#f8f8f4] text-[clamp(22px,2.2vw,34px)] font-black leading-[1.03] max-w-[10ch]">
                  Aulas Coletivas
                </h3>
                <p className="m-0 text-[#f8f8f4] text-[clamp(13px,1.05vw,16px)] font-bold leading-[1.58]">
                  Ritbox, Funcional, FitDance, Muay Thai e Jiu-Jitsu para alta queima calórica e energia contagiante em grupo.
                </p>
              </article>

              {/* Card 3 */}
              <article className="project-card relative min-h-[clamp(280px,31vw,330px)] p-[clamp(48px,5vw,68px)_clamp(30px,3.2vw,46px)_38px] bg-[rgba(13,20,27,0.92)] border border-[rgba(255,255,255,0.86)] will-change-[opacity,transform,filter]">
                <div className="project-card__dot absolute -top-[9px] -left-[9px] w-[18px] h-[18px] rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.65)]"></div>
                <h3 className="m-0 mb-[clamp(16px,1.8vw,24px)] text-[#f8f8f4] text-[clamp(22px,2.2vw,34px)] font-black leading-[1.03] max-w-[10ch]">
                  Operação & Convênios
                </h3>
                <p className="m-0 text-[#f8f8f4] text-[clamp(13px,1.05vw,16px)] font-bold leading-[1.58]">
                  Atendimento personalizado com aceitação dos principais convênios como Wellhub e TotalPass para você treinar sem barreiras.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
