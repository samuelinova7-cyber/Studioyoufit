import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroBento } from './components/HeroBento';
import { PlansSection } from './components/PlansSection';
import { QuizGame } from './components/QuizGame';
import { ModalidadesSection } from './components/ModalidadesSection';
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
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-[#CCFF00] selection:text-black">
      
      {/* HEADER */}
      <Header onOpenModal={handleOpenModal} />

      {/* MAIN CONTENT */}
      <main>
        {/* HERO BENTO GRID SECTION (Com Destaque R$ 110/mês) */}
        <HeroBento onOpenModal={handleOpenModal} />

        {/* PLANOS, VALORES, CASAL & CONVÊNIOS NA PARTE SUPERIOR */}
        <PlansSection onOpenModal={handleOpenModal} />

        {/* DESAFIO INTERATIVO QUIZ YOUFIT */}
        <QuizGame />

        {/* MODALIDADES & AULAS */}
        <ModalidadesSection onOpenModal={handleOpenModal} />

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
