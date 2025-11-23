// src/app/components/HowAvenirHelpsSection.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HowAvenirHelpsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full max-w-[375px] md:max-w-[900px] lg:max-w-[1440px] mx-auto grid gap-12 md:gap-16 lg:gap-20 pt-[120px] pb-[120px] px-4 md:px-12 lg:px-[120px] opacity-100 translate-y-[150px]"
      style={{
        gridTemplateRows: 'auto auto 1fr'
      }}
    >
      {/* Heading */}
      <h2
        className="text-[28px] md:text-[36px] lg:text-[40px] leading-[100%] text-center font-semibold text-[#E4E8F0]"
        style={{
          fontFamily: 'League Spartan, sans-serif',
          letterSpacing: '-0.03em'
        }}
      >
        {/* Mobile: Line break after helps */}
        <span className="md:hidden">
          How Avenir helps<br />you
        </span>
        
        {/* Tablet & Desktop: No line break */}
        <span className="hidden md:inline">
          How Avenir helps you
        </span>
      </h2>

      {/* Three Features Container - Stack on Mobile, Row on Desktop */}
      <div 
        className="flex flex-col md:flex-row justify-center items-start mx-auto w-full gap-12 md:gap-16 lg:gap-20"
        style={{
          maxWidth: '1200px'
        }}
      >
        {/* Feature 1 - Real-Time Market Trend Analysis */}
        <div className="flex flex-col items-center flex-1">
          <div
            className="mb-6"
            style={{
              transform: isVisible ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-180deg)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s ease-out',
              transitionDelay: '0s'
            }}
          >
            <Image 
              src="/chart-icon.png" 
              alt="Chart" 
              width={60} 
              height={60}
            />
          </div>
          <h3
            className="text-lg md:text-xl lg:text-2xl leading-[100%] text-center mb-4 font-semibold text-[#E4E8F0]"
            style={{
              fontFamily: 'League Spartan, sans-serif',
              letterSpacing: '-0.03em'
            }}
          >
            {/* Mobile: Line break after Trend */}
            <span className="md:hidden">
              Real-Time Market Trend<br />Analysis
            </span>
            
            {/* Tablet & Desktop: No line break */}
            <span className="hidden md:inline">
              Real-Time Market Trend Analysis
            </span>
          </h3>
          <p
            className="text-sm md:text-base leading-[150%] text-center font-normal text-[#A3ACBF]"
            style={{
              fontFamily: 'Lato, sans-serif',
              letterSpacing: '0%'
            }}
          >
            Continuously monitor claims, HRIS, and benchmarks to identify savings opportunities and emerging risks before anyone else.
          </p>
        </div>

        {/* Feature 2 - AI-Generated Vendor & Compliance Reports */}
        <div className="flex flex-col items-center flex-1">
          <div
            className="mb-6"
            style={{
              transform: isVisible ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-180deg)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s ease-out',
              transitionDelay: '0.2s'
            }}
          >
            <Image 
              src="/document-icon.png" 
              alt="Document" 
              width={60} 
              height={60}
            />
          </div>
          <h3
            className="text-lg md:text-xl lg:text-2xl leading-[100%] text-center mb-4 font-semibold text-[#E4E8F0]"
            style={{
              fontFamily: 'League Spartan, sans-serif',
              letterSpacing: '-0.03em'
            }}
          >
            {/* Mobile: Line break after & */}
            <span className="md:hidden">
              AI-Generated Vendor &<br />Compliance Reports
            </span>
            
            {/* Tablet & Desktop: No line break */}
            <span className="hidden md:inline">
              AI-Generated Vendor & Compliance Reports
            </span>
          </h3>
          <p
            className="text-sm md:text-base leading-[150%] text-center font-normal text-[#A3ACBF]"
            style={{
              fontFamily: 'Lato, sans-serif',
              letterSpacing: '0%'
            }}
          >
            Generate comparisons, compliance docs, and benchmark reports with a conversational assistant that works 24/7.
          </p>
        </div>

        {/* Feature 3 - Cost Forecasting & Budget Optimization */}
        <div className="flex flex-col items-center flex-1">
          <div
            className="mb-6"
            style={{
              transform: isVisible ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-180deg)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s ease-out',
              transitionDelay: '0.4s'
            }}
          >
            <Image 
              src="/gear-icon.png" 
              alt="Settings" 
              width={60} 
              height={60}
            />
          </div>
          <h3
            className="text-lg md:text-xl lg:text-2xl leading-[100%] text-center mb-4 font-semibold text-[#E4E8F0]"
            style={{
              fontFamily: 'League Spartan, sans-serif',
              letterSpacing: '-0.03em'
            }}
          >
            {/* Mobile: Line break after Budget */}
            <span className="md:hidden">
              Cost Forecasting & Budget<br />Optimization
            </span>
            
            {/* Tablet & Desktop: No line break */}
            <span className="hidden md:inline">
              Cost Forecasting & Budget Optimization
            </span>
          </h3>
          <p
            className="text-sm md:text-base leading-[150%] text-center font-normal text-[#A3ACBF]"
            style={{
              fontFamily: 'Lato, sans-serif',
              letterSpacing: '0%'
            }}
          >
            Move from guessing to planning. Interactive tools deliver accurate cost predictions so your benefits stay competitive and cost-effective.
          </p>
        </div>
      </div>
    </section>
  );
}