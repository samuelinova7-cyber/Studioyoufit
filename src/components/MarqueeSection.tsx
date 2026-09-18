import React, { useEffect, useRef } from 'react';

const ROW_1_IMAGES = [
  "https://res.cloudinary.com/xhuikt2k/image/upload/v1786548155/IMG_4448.jpg",
  "https://res.cloudinary.com/xhuikt2k/image/upload/v1786548155/IMG_4449.jpg",
  "https://res.cloudinary.com/xhuikt2k/image/upload/v1786548958/IMG_4451.jpg",
  "https://res.cloudinary.com/xhuikt2k/image/upload/v1786548961/IMG_4452.jpg",
  "https://res.cloudinary.com/xhuikt2k/image/upload/v1786548961/IMG_4453.jpg",
  "https://res.cloudinary.com/xhuikt2k/image/upload/v1786548962/IMG_4454.jpg"
];

const ROW_2_IMAGES = [
  "https://res.cloudinary.com/xhuikt2k/image/upload/v1786548958/IMG_4455.jpg",
  "https://res.cloudinary.com/xhuikt2k/image/upload/v1786548151/IMG_4450.jpg",
  "https://res.cloudinary.com/xhuikt2k/image/upload/v1786548155/IMG_4448.jpg",
  "https://res.cloudinary.com/xhuikt2k/image/upload/v1786548155/IMG_4449.jpg",
  "https://res.cloudinary.com/xhuikt2k/image/upload/v1786548958/IMG_4451.jpg",
  "https://res.cloudinary.com/xhuikt2k/image/upload/v1786548961/IMG_4452.jpg"
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const track1Ref = useRef<HTMLDivElement | null>(null);
  const track2Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !track1Ref.current || !track2Ref.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const sectionTop = rect.top + scrollY;
      const offset = (scrollY - sectionTop + window.innerHeight) * 0.25;

      track1Ref.current.style.transform = `translate3d(${offset - 150}px, 0, 0)`;
      track2Ref.current.style.transform = `translate3d(-${offset - 150}px, 0, 0)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-28 pb-12 bg-gradient-to-b from-[#020405] via-[#05090b] to-[#0C0C0C]"
    >
      {/* Top Fade */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#020405] to-transparent z-10 pointer-events-none"></div>

      {/* Heading */}
      <div className="text-center px-4 mb-12 relative z-10">
        <h2 className="hero-heading text-3xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-center">
          Trabalhos Realizados & Ambiente
        </h2>
      </div>

      {/* Marquee Row 1 */}
      <div className="w-screen overflow-hidden flex select-none pointer-events-none mb-4 relative z-10">
        <div ref={track1Ref} className="flex gap-4 will-change-transform whitespace-nowrap px-4">
          {[...ROW_1_IMAGES, ...ROW_1_IMAGES, ...ROW_1_IMAGES].map((img, idx) => (
            <img
              key={`r1-${idx}`}
              src={img}
              alt={`Studio You Fit Portfolio ${idx}`}
              loading="lazy"
              className="marquee-tile"
            />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 */}
      <div className="w-screen overflow-hidden flex select-none pointer-events-none relative z-10">
        <div ref={track2Ref} className="flex gap-4 will-change-transform whitespace-nowrap px-4" style={{ transform: 'translateX(-200px)' }}>
          {[...ROW_2_IMAGES, ...ROW_2_IMAGES, ...ROW_2_IMAGES].map((img, idx) => (
            <img
              key={`r2-${idx}`}
              src={img}
              alt={`Studio You Fit Portfolio 2 ${idx}`}
              loading="lazy"
              className="marquee-tile"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
