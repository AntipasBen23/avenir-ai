"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import LoadingScreen from "./LoadingScreen";
import ContentSection from "./ContentSection";
import ProgressIndicator from "./ProgressIndicator";

// Dynamically import ThreeScene to avoid SSR issues
const ThreeScene = dynamic(() => import("./three-scenes/ThreeScene"), {
  ssr: false,
});

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressLine1Ref = useRef<HTMLDivElement>(null); // Line between 01-02
  const progressLine2Ref = useRef<HTMLDivElement>(null); // Line between 02-03
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  
  // Initialize loading state - only show if we're at the top of the page
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window !== 'undefined') {
      // Check if user has scrolled down
      const savedScrollProgress = sessionStorage.getItem('heroScrollProgress');
      // Only show loading screen if at the very beginning (no saved scroll)
      return !savedScrollProgress || parseFloat(savedScrollProgress) === 0;
    }
    return true;
  });
  
  const [binocularsVisible, setBinocularsVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      // If there's saved scroll progress, binoculars should be visible immediately
      const savedScrollProgress = sessionStorage.getItem('heroScrollProgress');
      return !!savedScrollProgress && parseFloat(savedScrollProgress) > 0;
    }
    return false;
  });

  // Handle loading screen completion
  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Trigger binoculars slide-in animation after loading screen fades
    setTimeout(() => {
      setBinocularsVisible(true);
    }, 100);
  };

  // Save scroll progress to sessionStorage
  useEffect(() => {
    const saveProgress = () => {
      sessionStorage.setItem('heroScrollProgress', scrollProgress.toString());
    };
    
    // Save on scroll
    if (scrollProgress > 0) {
      saveProgress();
    }
    
    // Save on page unload (before refresh)
    window.addEventListener('beforeunload', saveProgress);
    return () => window.removeEventListener('beforeunload', saveProgress);
  }, [scrollProgress]);

  // Restore scroll position on mount
  useEffect(() => {
    const savedScrollProgress = sessionStorage.getItem('heroScrollProgress');
    if (savedScrollProgress && parseFloat(savedScrollProgress) > 0) {
      const progress = parseFloat(savedScrollProgress);
      setScrollProgress(progress);
      
      // Update current section based on saved progress
      const section = Math.floor(progress * 2);
      setCurrentSection(Math.min(section, 1));
      
      // Trigger ScrollTrigger to scroll to the saved position
      setTimeout(() => {
        if (sectionRef.current) {
          const scrollTriggerInstance = ScrollTrigger.getById('heroScrollTrigger');
          if (scrollTriggerInstance) {
            // Calculate the scroll position based on progress
            const start = scrollTriggerInstance.start;
            const end = scrollTriggerInstance.end;
            const scrollY = start + (end - start) * progress;
            window.scrollTo(0, scrollY);
          }
        }
      }, 100);
    }
  }, []);

  // Lenis Smooth Scroll Setup
  useEffect(() => {
    let lenis: any;

    const initLenis = async () => {
      const Lenis = (await import("lenis")).default;
      
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        smoothWheel: true,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // Connect Lenis to GSAP ScrollTrigger
      lenis.on("scroll", ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    };

    initLenis();

    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  // Main Scroll Animation
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Main timeline for scroll-jacking
      const tl = gsap.timeline({
        scrollTrigger: {
          id: 'heroScrollTrigger',
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%", // 3 sections * 100% each minus one = 200%
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            // Update scroll progress (0 to 1)
            setScrollProgress(self.progress);

            // Update current section (0 to 2) - 3 sections now
            const section = Math.floor(self.progress * 3);
            setCurrentSection(Math.min(section, 2));
            
            // Update progress lines
            const progress = self.progress;
            
            // First line (01 to 02) - fills during 0-33%
            if (progressLine1Ref.current) {
              if (progress <= 0.33) {
                const line1Progress = progress / 0.33; // 0 to 1
                progressLine1Ref.current.style.height = `${line1Progress * 100}%`;
              } else {
                progressLine1Ref.current.style.height = '100%';
              }
            }
            
            // Second line (02 to 03) - fills during 33-67%
            if (progressLine2Ref.current) {
              if (progress <= 0.33) {
                progressLine2Ref.current.style.height = '0%';
              } else if (progress <= 0.67) {
                const line2Progress = (progress - 0.33) / 0.34; // 0 to 1
                progressLine2Ref.current.style.height = `${line2Progress * 100}%`;
              } else {
                progressLine2Ref.current.style.height = '100%';
              }
            }
          },
        },
      });

      // Animate content sections with proper visibility control
      contentRefs.current.forEach((content, index) => {
        if (!content || index > 2) return;

        if (index === 0) {
          // Section 1: Visible at start, hidden at 31%
          gsap.set(content, { opacity: 1, y: 0, display: 'block' });
          
          tl.to(content, {
            opacity: 0,
            y: -30,
            duration: 0.2,
            ease: "power2.in",
            onComplete: () => { content.style.display = 'none'; }
          }, 0.31);
        }

        if (index === 1) {
          // Section 2: Hidden at start, visible 33-65%
          gsap.set(content, { opacity: 0, y: 30, display: 'none' });
          
          tl.to(content, {
            display: 'block',
            duration: 0,
          }, 0.33);
          
          tl.to(content, {
            opacity: 1,
            y: 0,
            duration: 0.2,
            ease: "power2.out",
          }, 0.33);
          
          tl.to(content, {
            opacity: 0,
            y: -30,
            duration: 0.2,
            ease: "power2.in",
            onComplete: () => { content.style.display = 'none'; }
          }, 0.65);
        }

        if (index === 2) {
          // Section 3: Hidden at start, visible at 67%
          gsap.set(content, { opacity: 0, y: 30, display: 'none' });
          
          tl.to(content, {
            display: 'block',
            duration: 0,
          }, 0.67);
          
          tl.to(content, {
            opacity: 1,
            y: 0,
            duration: 0.2,
            ease: "power2.out",
          }, 0.67);
        }
      });

      // Animate progress lines filling - need to handle 2 separate lines
      // Line 1: Between dots 01-02 (fills from 0-33% scroll)
      // Line 2: Between dots 02-03 (fills from 33-67% scroll)
      
      tl.call(() => {
        const progress = ScrollTrigger.getById('heroScrollTrigger')?.progress || 0;
        
        // First line (01 to 02) - fills during 0-33%
        if (progressLine1Ref.current) {
          if (progress <= 0.33) {
            const line1Progress = progress / 0.33; // 0 to 1
            progressLine1Ref.current.style.height = `${line1Progress * 100}%`;
          } else {
            progressLine1Ref.current.style.height = '100%';
          }
        }
        
        // Second line (02 to 03) - fills during 33-67%
        if (progressLine2Ref.current) {
          if (progress <= 0.33) {
            progressLine2Ref.current.style.height = '0%';
          } else if (progress <= 0.67) {
            const line2Progress = (progress - 0.33) / 0.34; // 0 to 1
            progressLine2Ref.current.style.height = `${line2Progress * 100}%`;
          } else {
            progressLine2Ref.current.style.height = '100%';
          }
        }
      }, [], "+=0"); // Run continuously
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
      style={{ 
        background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 30%, #0f3460 60%, #53a8b6 100%)'
      }}
    >
      {/* Three.js Scene - Background */}
      <div className="absolute inset-0 z-0">
        <ThreeScene 
          scrollProgress={scrollProgress} 
          currentSection={currentSection}
          binocularsVisible={binocularsVisible}
        />
      </div>

      {/* Animated Background Particles/Lines */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {/* Floating vertical lines */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"
            style={{
              height: '200px',
              left: `${10 + i * 12}%`,
              animation: `floatLine ${15 + i * 2}s linear infinite`,
              animationDelay: `${i * -2}s`,
            }}
          />
        ))}

        {/* Floating dots/particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`dot-${i}`}
            className="absolute rounded-full bg-white/30"
            style={{
              width: i % 3 === 0 ? '4px' : '2px',
              height: i % 3 === 0 ? '4px' : '2px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatDot ${10 + i * 3}s ease-in-out infinite`,
              animationDelay: `${i * -1.5}s`,
            }}
          />
        ))}

        {/* Floating horizontal lines */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`hline-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
            style={{
              width: '150px',
              top: `${15 + i * 20}%`,
              animation: `floatHorizontal ${20 + i * 3}s linear infinite`,
              animationDelay: `${i * -3}s`,
            }}
          />
        ))}

        {/* Circular ripples */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`circle-${i}`}
            className="absolute rounded-full border border-white/10"
            style={{
              width: `${40 + i * 20}px`,
              height: `${40 + i * 20}px`,
              left: `${20 + i * 15}%`,
              top: `${25 + i * 10}%`,
              animation: `pulse ${8 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * -2}s`,
            }}
          />
        ))}
      </div>

      {/* Add keyframes for animations */}
      <style jsx>{`
        @keyframes floatLine {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        @keyframes floatDot {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.3;
          }
          25% {
            transform: translate(30px, -50px);
            opacity: 0.6;
          }
          50% {
            transform: translate(-20px, -100px);
            opacity: 0.8;
          }
          75% {
            transform: translate(-40px, -50px);
            opacity: 0.6;
          }
        }

        @keyframes floatHorizontal {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(100vw);
            opacity: 0;
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(0.8);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.3;
          }
        }
      `}</style>

      {/* Dark overlay for better text readability - lighter on right to show 3D scene */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-blue-950/60 via-blue-950/20 to-transparent pointer-events-none" />

      {/* Top Navigation Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 lg:px-16 py-6">
        {/* Logo - Top Left */}
        <div className="flex items-center">
          <img 
            src="/avenirlogo.png" 
            alt="Avenir AI Logo" 
            className="h-8 lg:h-10 w-auto"
          />
        </div>

        {/* Menu Button - Top Right */}
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="relative flex items-center gap-3 px-5 py-3 rounded-lg border border-white/30 bg-transparent overflow-hidden transition-all group"
        >
          {/* White fill animation from bottom to top on hover */}
          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          
          {/* Content (stays on top of white fill) */}
          <div className="relative z-10 flex items-center gap-3">
            {/* Grid Icon (4 squares in 2x2) - changes to black on hover */}
            <div className="grid grid-cols-2 gap-1">
              <div className="w-1.5 h-1.5 bg-white group-hover:bg-black rounded-sm transition-colors duration-300"></div>
              <div className="w-1.5 h-1.5 bg-white group-hover:bg-black rounded-sm transition-colors duration-300"></div>
              <div className="w-1.5 h-1.5 bg-white group-hover:bg-black rounded-sm transition-colors duration-300"></div>
              <div className="w-1.5 h-1.5 bg-white group-hover:bg-black rounded-sm transition-colors duration-300"></div>
            </div>
            {/* Menu Text - changes to black on hover */}
            <span className="text-white group-hover:text-black font-medium text-base transition-colors duration-300">Menu</span>
          </div>
        </button>
      </div>

      {/* Content Container - Bottom Left */}
      <div className="absolute inset-0 z-10 flex items-end pb-12 lg:pb-20">
        <div className="relative w-full max-w-3xl">
          <ContentSection section={0} setRef={(el) => { contentRefs.current[0] = el; }} />
          <ContentSection section={1} setRef={(el) => { contentRefs.current[1] = el; }} />
          <ContentSection section={2} setRef={(el) => { contentRefs.current[2] = el; }} />
        </div>
      </div>

      {/* Progress Indicator */}
      <ProgressIndicator 
        currentSection={currentSection}
        progressLine1Ref={progressLine1Ref}
        progressLine2Ref={progressLine2Ref}
      />

      {/* Scroll Indicator - Bottom Center (only show on first section) */}
      {currentSection === 0 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-gray-400">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-gray-400 rounded-full" />
          </div>
        </div>
      )}

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Slide-out Menu Panel */}
      <div
        className={`fixed top-4 right-4 bottom-4 w-full max-w-xs bg-white rounded-2xl z-[60] transform transition-transform duration-500 ease-out shadow-2xl ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6 lg:p-8">
          {/* Menu Header */}
          <div className="flex items-center justify-between mb-8">
            <span className="text-gray-400 text-lg font-normal" style={{ fontFamily: 'Lato, sans-serif' }}>
              Menu
            </span>
            
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 flex flex-col space-y-6">
            {/* Product */}
            <a 
              href="#" 
              className="text-3xl lg:text-4xl font-bold text-black hover:text-gray-600 transition-colors"
              style={{ fontFamily: 'Lato, sans-serif' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Product
            </a>

            {/* Solutions Accordion */}
            <div>
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="w-full flex items-start justify-between text-3xl lg:text-4xl font-bold text-black hover:text-gray-600 transition-colors"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                Solutions
                <svg 
                  width="28" 
                  height="28" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  className={`mt-2 transition-transform duration-300 ${
                    isSolutionsOpen ? 'rotate-180' : ''
                  }`}
                >
                  <path 
                    d="M6 9L12 15L18 9" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              
              {/* Solutions Submenu */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isSolutionsOpen ? 'max-h-96 mt-4' : 'max-h-0'
                }`}
              >
                <div className="pl-4 space-y-3">
                  <a 
                    href="#" 
                    className="block text-base text-gray-600 hover:text-black transition-colors"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    For Employers
                  </a>
                  <a 
                    href="#" 
                    className="block text-base text-gray-600 hover:text-black transition-colors"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    For Brokers & Consultants
                  </a>
                  <a 
                    href="#" 
                    className="block text-base text-gray-600 hover:text-black transition-colors"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    For CFOs
                  </a>
                </div>
              </div>
            </div>

            {/* About us */}
            <a 
              href="#" 
              className="text-3xl lg:text-4xl font-bold text-black hover:text-gray-600 transition-colors"
              style={{ fontFamily: 'Lato, sans-serif' }}
              onClick={() => setIsMenuOpen(false)}
            >
              About us
            </a>

            {/* Careers */}
            <a 
              href="#" 
              className="text-3xl lg:text-4xl font-bold text-black hover:text-gray-600 transition-colors"
              style={{ fontFamily: 'Lato, sans-serif' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </a>

            {/* Press */}
            <a 
              href="#" 
              className="text-3xl lg:text-4xl font-bold text-black hover:text-gray-600 transition-colors"
              style={{ fontFamily: 'Lato, sans-serif' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Press
            </a>

            {/* Investors */}
            <a 
              href="#" 
              className="flex items-center gap-2 text-3xl lg:text-4xl font-bold text-black hover:text-gray-600 transition-colors"
              style={{ fontFamily: 'Lato, sans-serif' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Investors
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Footer Links */}
          <div className="flex items-end justify-between pt-6 border-t border-gray-200">
            {/* Left side - Legal links */}
            <div className="flex flex-col space-y-3">
              <a 
                href="#" 
                className="text-sm text-gray-500 hover:text-black transition-colors"
                style={{ fontFamily: 'Lato, sans-serif' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Legal Mentions
              </a>
              <a 
                href="#" 
                className="text-sm text-gray-500 hover:text-black transition-colors"
                style={{ fontFamily: 'Lato, sans-serif' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy Policy
              </a>
            </div>
            
            {/* Right side - LinkedIn Icon */}
            <a 
              href="#" 
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex-shrink-0"
              aria-label="LinkedIn"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" fill="#6B7280"/>
                <path d="M6 9H2V21H6V9Z" fill="#6B7280"/>
                <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" fill="#6B7280"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}