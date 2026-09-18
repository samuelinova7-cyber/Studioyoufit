import React, { useState } from 'react';
import { Header } from './components/Header';
import { ScrollVideoHero } from './components/ScrollVideoHero';
import { MarqueeSection } from './components/MarqueeSection';
import { CinematicServices } from './components/CinematicServices';
import { StickyProcessSection } from './components/StickyProcessSection';
import { PlansSection } from './components/PlansSection';
import { QuizGame } from './components/QuizGame';
import { ScheduleSection } from './components/ScheduleSection';
import { FaqSection } from './components/FaqSection';
import { InstagramSection } from './components/InstagramSection';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { FirstLessonModal } from './components/FirstLessonModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState<string | undefined>(undefined);

  const handleOpenModal = (subject?: string) => {
    setModalSubject(subject);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#f8f8f4] font-['Montserrat',sans-serif] selection:bg-[#CCFF00] selection:text-black overflow-x-hidden">
      
      {/* HEADER */}
      <Header onOpenModal={handleOpenModal} />

      {/* MAIN CONTENT */}
      <main>
        {/* SCROLL-SCRUBBED VIDEO HERO & SOLUTIONS SECTION */}
        <ScrollVideoHero />

        {/* TRABALHOS REALIZADOS & AMBIENTE MARQUEE */}
        <MarqueeSection />

        {/* PLANOS, VALORES, CASAL & CONVÊNIOS NA PARTE SUPERIOR */}
        <PlansSection onOpenModal={handleOpenModal} />

        {/* CINEMATIC SERVICES SECTION */}
        <CinematicServices onOpenModal={handleOpenModal} />

        {/* STICKY PROCESS SECTION (COMO FUNCIONA) */}
        <StickyProcessSection />

        {/* DESAFIO INTERATIVO QUIZ YOUFIT */}
        <QuizGame />

        {/* GRADE DE HORÁRIOS */}
        <ScheduleSection onOpenModal={handleOpenModal} />

        {/* PERGUNTAS E RESPOSTAS (10 FAQ) */}
        <FaqSection onOpenModal={handleOpenModal} />

        {/* SIGA NO INSTAGRAM (VÍDEOS) */}
        <InstagramSection />

        {/* LOCALIZAÇÃO, CONTATO & REVIEWS */}
        <LocationContact onOpenModal={handleOpenModal} />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* FLOATING WHATSAPP BUTTON */}
      <WhatsAppFloat />

      {/* ENROLLMENT & EXPERIMENTAL CLASS MODAL */}
      <FirstLessonModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialSubject={modalSubject}
      />

    </div>
  );
}

