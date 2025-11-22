// src/app/page.tsx
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import InteractiveSection from "./components/InteractiveSection";
import PartnersSection from "./components/PartnersSection";
import WhyAvenirSection from "./components/WhyAvenirSection";
import HowAvenirHelpsSection from "./components/HowAvenirHelpsSection";
import WhoIsAvenirForSection from "./components/WhoIsAvenirForSection";
import EmployAvenirSection from "./components/EmployAvenirSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* <div
        className="absolute"
        style={{
          width: '128.64px',
          height: '1218.61px',
          top: '-214.92px',
          left: '1300px',
          transform: 'rotate(50.89deg)',
          transformOrigin: 'top left',
          background: 'linear-gradient(180deg, #0140AE 50%, rgba(115, 160, 240, 0) 100%)',
          backdropFilter: 'blur(248.72720336914062px)',
          opacity: 0.15,
          pointerEvents: 'none'
        }}
      /> */}
      
      <Navbar />
      <HeroSection />
      <InteractiveSection />
      <PartnersSection />
      <WhyAvenirSection />
      <HowAvenirHelpsSection />
      <WhoIsAvenirForSection />
      <EmployAvenirSection />
      <Footer />
    </div>
  );
}