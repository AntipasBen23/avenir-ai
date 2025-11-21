// src/app/page.tsx
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* First Diagonal Flash Effect */}
      <div
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
      />
      
      <Navbar />
      <HeroSection />
    </div>
  );
}