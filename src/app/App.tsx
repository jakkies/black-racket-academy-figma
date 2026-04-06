import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Programs } from "./components/Programs";
import { Philosophy } from "./components/Philosophy";
import { Promotion } from "./components/Promotion";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";
import { Modal } from "./components/ui/Modal";
import { CalendlyEmbed } from "./components/ui/CalendlyEmbed";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleJoinClick = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation onJoinClick={handleJoinClick} />
      <Hero onJoinClick={handleJoinClick} />
      <About />
      <Programs onJoinClick={handleJoinClick} />
      <Philosophy />
      <Promotion />
      <CallToAction onJoinClick={handleJoinClick} />
      <Footer />

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <CalendlyEmbed />
      </Modal>
    </div>
  );
}
