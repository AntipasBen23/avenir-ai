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
      className="w-full mx-auto grid"
      style={{
        maxWidth: '1440px',
        height: '584px',
        gap: '80px',
        padding: '120px',
        opacity: 1,
        gridTemplateRows: 'auto auto 1fr',
        transform: 'translateY(150px)'
      }}
    >
      {/* Heading */}
      <h2
        className="text-[40px] leading-[100%] text-center"
        style={{
          fontFamily: 'League Spartan, sans-serif',
          fontWeight: 600,
          letterSpacing: '-0.03em',
          color: '#E4E8F0'
        }}
      >
        How Avenir helps you
      </h2>

      {/* Three Features Container */}
      <div 
        className="flex justify-center items-start mx-auto"
        style={{
          maxWidth: '1200px',
          width: '100%',
          height: '224px',
          gap: '80px',
          opacity: 1
        }}
      >
        {/* Feature 1 - Real-Time Market Trend Analysis */}
        <div className="flex flex-col items-center" style={{ flex: 1 }}>
          <div
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
              className="mb-6"
            />
          </div>
          <h3
            className="text-[24px] leading-[100%] text-center mb-4"
            style={{
              fontFamily: 'League Spartan, sans-serif',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              color: '#E4E8F0'
            }}
          >
            Real-Time Market Trend Analysis
          </h3>
          <p
            className="text-[16px] leading-[150%] text-center"
            style={{
              fontFamily: 'Lato, sans-serif',
              fontWeight: 400,
              letterSpacing: '0%',
              color: '#A3ACBF'
            }}
          >
            Continuously monitor claims, HRIS, and benchmarks to identify savings opportunities and emerging risks before anyone else.
          </p>
        </div>

        {/* Feature 2 - AI-Generated Vendor & Compliance Reports */}
        <div className="flex flex-col items-center" style={{ flex: 1 }}>
          <div
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
              className="mb-6"
            />
          </div>
          <h3
            className="text-[24px] leading-[100%] text-center mb-4"
            style={{
              fontFamily: 'League Spartan, sans-serif',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              color: '#E4E8F0'
            }}
          >
            AI-Generated Vendor & Compliance Reports
          </h3>
          <p
            className="text-[16px] leading-[150%] text-center"
            style={{
              fontFamily: 'Lato, sans-serif',
              fontWeight: 400,
              letterSpacing: '0%',
              color: '#A3ACBF'
            }}
          >
            Generate comparisons, compliance docs, and benchmark reports with a conversational assistant that works 24/7.
          </p>
        </div>

        {/* Feature 3 - Cost Forecasting & Budget Optimization */}
        <div className="flex flex-col items-center" style={{ flex: 1 }}>
          <div
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
              className="mb-6"
            />
          </div>
          <h3
            className="text-[24px] leading-[100%] text-center mb-4"
            style={{
              fontFamily: 'League Spartan, sans-serif',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              color: '#E4E8F0'
            }}
          >
            Cost Forecasting & Budget Optimization
          </h3>
          <p
            className="text-[16px] leading-[150%] text-center"
            style={{
              fontFamily: 'Lato, sans-serif',
              fontWeight: 400,
              letterSpacing: '0%',
              color: '#A3ACBF'
            }}
          >
            Move from guessing to planning. Interactive tools deliver accurate cost predictions so your benefits stay competitive and cost-effective.
          </p>
        </div>
      </div>
    </section>
  );
}