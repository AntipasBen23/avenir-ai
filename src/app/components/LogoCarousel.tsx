"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface LogoCarouselProps {
  scrollProgress: number; // 0 to 1 for entire hero section
}

const logos = [
  { name: "Harvard", src: "/logos/harvard.png" },
  { name: "Harvard Medical", src: "/logos/harvard-medical.png" },
  { name: "Martin Trust", src: "/logos/martin-trust.png" },
  { name: "MEC", src: "/logos/mec.png" },
  { name: "MIT $100K", src: "/logos/mit-100k.png" },
  { name: "MIT Delta V", src: "/logos/mit-delta.png" },
];

export default function LogoCarousel({ scrollProgress }: LogoCarouselProps) {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Calculate section-specific progress (67-100% of total scroll)
  const sectionProgress = Math.max(0, Math.min(1, (scrollProgress - 0.67) / 0.33));

  // Show carousel during camera sweep phase (30-70% of section 3)
  const showCarousel = sectionProgress >= 0.3 && sectionProgress < 0.7;

  useEffect(() => {
    setIsVisible(showCarousel);
  }, [showCarousel]);

  // Auto-rotate logos every 4 seconds
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentLogoIndex((prev) => (prev + 1) % logos.length);
    }, 4000); // 4 seconds per logo

    return () => clearInterval(interval);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
      {/* Podium Screen Area - positioned where the 3D screen is */}
      <div className="absolute" style={{ 
        top: '45%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        width: '40%',
        maxWidth: '600px',
        aspectRatio: '3/2',
      }}>
        {/* Dark screen background */}
        <div className="absolute inset-0 bg-black/80 rounded-lg shadow-2xl border border-gray-800" />
        
        {/* Logo display area */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          {logos.map((logo, index) => (
            <div
              key={logo.name}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 p-8
                ${index === currentLogoIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Subtle screen glow effect */}
        <div className="absolute inset-0 bg-blue-500/5 rounded-lg blur-xl" />
      </div>

      {/* Optional: "Backed by" text above screen */}
      <div 
        className="absolute text-white/70 text-sm font-light tracking-wider"
        style={{ 
          top: '35%', 
          left: '50%', 
          transform: 'translateX(-50%)'
        }}
      >
        BACKED BY
      </div>
    </div>
  );
}