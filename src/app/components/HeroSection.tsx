"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import LoadingScreen from "./LoadingScreen";

// Dynamically import ThreeScene to avoid SSR issues
const ThreeScene = dynamic(() => import("./three-scenes/ThreeScene"), {
  ssr: false,
});

// Import your content sections (currently commented out)
// import Section1 from "./hero-sections/Section1";
// import Section2 from "./hero-sections/Section2";
// import Section3 from "./hero-sections/Section3";
// import Section4 from "./hero-sections/Section4";
// import Section5 from "./hero-sections/Section5";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [binocularsVisible, setBinocularsVisible] = useState(false);

  // Check if loading screen has been shown this session
  useEffect(() => {
    const hasLoadedBefore = sessionStorage.getItem('hasLoadedHero');
    
    if (hasLoadedBefore) {
      // Skip loading screen, show content immediately
      setIsLoading(false);
      setBinocularsVisible(true);
    }
  }, []);

  // Handle loading screen completion
  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Mark that loading screen has been shown
    sessionStorage.setItem('hasLoadedHero', 'true');
    // Trigger binoculars slide-in animation after loading screen fades
    setTimeout(() => {
      setBinocularsVisible(true);
    }, 100);
  };

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
          trigger: sectionRef.current,
          start: "top top",
          end: "+=100%", // 2 sections * 100% each minus one = 100%
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            // Update scroll progress (0 to 1)
            setScrollProgress(self.progress);

            // Update current section (0 to 1) - only 2 sections now
            const section = Math.floor(self.progress * 2);
            setCurrentSection(Math.min(section, 1));
          },
        },
      });

      // Animate content sections (only 2 sections now)
      contentRefs.current.forEach((content, index) => {
        if (!content || index > 1) return; // Only handle first 2 sections

        if (index === 0) {
          // Section 1: Starts VISIBLE, fades out when entering Section 2 (at 50% scroll)
          gsap.set(content, { opacity: 1, y: 0 }); // Set initial state as visible
          
          tl.to(
            content,
            {
              opacity: 0,
              y: -30,
              duration: 0.3,
              ease: "power2.in",
            },
            0.48 // Fade out at 48% (just before Section 2 starts at 50%)
          );
        }

        if (index === 1) {
          // Section 2: Fades in when it starts (at 50% scroll)
          tl.fromTo(
            content,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            },
            0.5 // Fade in at 50% (when Section 2 starts)
          );
        }
      });

      // Animate progress line filling
      if (progressLineRef.current) {
        tl.fromTo(
          progressLineRef.current,
          { height: "0%" },
          {
            height: "100%",
            duration: 2, // 2 sections
            ease: "none",
          },
          0
        );
      }
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

      {/* Content Container - Bottom Left (like Beyond Aero) */}
      <div className="absolute inset-0 z-10 flex items-end pb-12 lg:pb-20">
        <div className="relative w-full max-w-3xl px-8 lg:px-16">
          {/* Section 1: Hero - AI Vision (VISIBLE BY DEFAULT) */}
          <div
            ref={(el) => {
              contentRefs.current[0] = el;
            }}
            className="absolute bottom-0"
          >
            <div className="space-y-4">
              {/* Main heading */}
              <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight max-w-xl">
                Optimize Employee Benefits<br />with AI-Powered Precision
              </h1>
              
              {/* Description */}
              <p className="text-sm lg:text-base text-gray-300 max-w-lg leading-relaxed">
                Interactive AI workers analyze claims, HRIS, and benchmarks to uncover<br className="hidden lg:block" /> 
                cost drivers, forecast trends, and streamline decisions — in real time.
              </p>
              
              {/* Buttons */}
              <div className="flex gap-4 pt-2">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all flex items-center gap-2 group text-sm">
                  Book a demo
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button className="px-6 py-3 border border-white/40 hover:border-white/60 text-white rounded-full font-medium transition-all text-sm">
                  Contact us
                </button>
              </div>
            </div>
          </div>

          {/* Section 2: Workstation - Planning (HIDDEN BY DEFAULT) */}
          <div
            ref={(el) => {
              contentRefs.current[1] = el;
            }}
            className="absolute bottom-0"
          >
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight max-w-xl">
                From Vision to Execution
              </h2>
              <p className="text-sm lg:text-base text-gray-300 max-w-lg leading-relaxed">
                Our AI platform transforms insights into action, connecting the dots between data and decisions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicator - Right Side */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20">
        <div className="relative flex flex-col items-center">
          {/* Progress Dots */}
          {[1, 2].map((num, index) => (
            <div key={num} className="relative flex flex-col items-center">
              {/* Dot */}
              <div
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  index === currentSection
                    ? "border-white bg-white scale-125"
                    : "border-gray-500 bg-transparent"
                }`}
              />

              {/* Number */}
              <span
                className={`mt-2 text-xs font-medium transition-colors duration-300 ${
                  index === currentSection ? "text-white" : "text-gray-500"
                }`}
              >
                0{num}
              </span>

              {/* Line connector (only between dots) */}
              {index < 1 && (
                <div className="relative w-0.5 h-16 my-2 bg-gray-700">
                  {/* Filling white line */}
                  {index === 0 && (
                    <div
                      ref={progressLineRef}
                      className="absolute top-0 left-0 w-full bg-white origin-top"
                      style={{ height: "0%" }}
                    />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

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