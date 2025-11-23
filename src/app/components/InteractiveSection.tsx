// src/app/components/InteractiveSection.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function InteractiveSection() {
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
      className="w-full max-w-[363px] md:max-w-[900px] lg:max-w-[984px] mx-auto rounded-xl md:rounded-3xl lg:rounded-[32px] p-3 md:p-6 lg:p-8 grid gap-4 md:gap-6 lg:gap-10 opacity-100 border translate-y-[150px]"
      style={{
        background: '#0E142099',
        borderImageSource: 'linear-gradient(180deg, #0F141F 0%, rgba(12, 23, 45, 0) 100%)',
        borderImageSlice: 1,
        gridTemplateRows: 'auto auto 1fr'
      }}
    >
      {/* Search Bar - Smaller on mobile */}
      <div 
        className="flex items-center rounded-full mx-auto w-[90%] md:w-[466px] h-7 md:h-11 lg:h-[45px] gap-2 px-2.5 md:px-4 py-1.5 md:py-3 border"
        style={{
          background: '#12192980',
          borderImageSource: 'linear-gradient(180deg, #0F141F 0%, rgba(12, 23, 45, 0) 100%)',
          borderImageSlice: 1
        }}
      >
        {/* Search Icon - Smaller on mobile */}
        <Image 
          src="/search-icon.png" 
          alt="Search" 
          width={12} 
          height={12}
          className="flex-shrink-0 md:w-5 md:h-5"
        />
        
        {/* Search Input - Smaller text on mobile */}
        <input
          type="text"
          placeholder="What are the top claims cost drivers this month?"
          className="flex-1 bg-transparent border-none outline-none text-[9px] md:text-sm lg:text-base text-[#A3ACBF] placeholder:truncate placeholder:text-[#A3ACBF]"
          style={{
            fontFamily: 'Lato, sans-serif'
          }}
        />
      </div>

      {/* Heading - More spacing on mobile */}
      <h2
        className="text-sm md:text-xl lg:text-2xl leading-[150%] text-center font-medium text-[#E6EAF2] mt-2 md:mt-0"
        style={{
          fontFamily: 'Lato, sans-serif',
          letterSpacing: '0%'
        }}
      >
        Here's what we found
      </h2>

      {/* Two Boxes Container - More spacing on mobile */}
      <div className="flex flex-row gap-2 md:gap-6 justify-center mt-2 md:mt-0">
        {/* First Box - Economic Environment */}
        <div
          className="rounded-lg md:rounded-[20px] lg:rounded-3xl p-2 md:p-5 lg:p-6 flex-1 border"
          style={{
            background: '#12192980',
            borderImageSource: 'linear-gradient(180deg, #0F141F 0%, rgba(12, 23, 45, 0) 100%)',
            borderImageSlice: 1
          }}
        >
          {/* Header with Blue Dot */}
          <div className="flex items-center gap-1 mb-2 md:mb-6">
            <Image 
              src="/blue-dot.png" 
              alt="Indicator" 
              width={6} 
              height={6}
              className="md:w-3 md:h-3"
            />
            <span
              className="text-[8px] md:text-[15px] lg:text-base leading-[150%] font-medium text-[#A3ACBF]"
              style={{
                fontFamily: 'Lato, sans-serif',
                letterSpacing: '0%'
              }}
            >
              Economic environment
            </span>
          </div>

          {/* Two Circles Side by Side */}
          <div className="flex gap-2 md:gap-6 lg:gap-8 justify-center">
            {/* Personal Challenges Circle */}
            <div className="flex flex-col items-center gap-1 md:gap-3 lg:gap-4">
              <span
                className="text-[7px] md:text-sm lg:text-base leading-[150%] text-center font-medium text-[#A3ACBF]"
                style={{
                  fontFamily: 'Lato, sans-serif',
                  letterSpacing: '0%'
                }}
              >
                Personal Challenges
              </span>
              <div className="relative">
                <svg width="45" height="45" viewBox="0 0 120 120" className="md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]">
                  {/* Background circle */}
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    fill="none"
                    stroke="#FAFAFA05"
                    strokeWidth="8"
                  />
                  {/* Animated blue arc - 28% */}
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="8"
                    strokeDasharray="327"
                    strokeDashoffset={isVisible ? "236" : "327"}
                    strokeLinecap="round"
                    transform="rotate(-90 60 60)"
                    className="transition-all duration-[1500ms] ease-out"
                  />
                </svg>
                <span
                  className="absolute inset-0 flex items-center justify-center text-xs md:text-[28px] lg:text-[32px] font-bold text-[#E6EAF2]"
                  style={{
                    fontFamily: 'Lato, sans-serif'
                  }}
                >
                  28%
                </span>
              </div>
            </div>

            {/* Medical validation Circle */}
            <div className="flex flex-col items-center gap-1 md:gap-3 lg:gap-4">
              <span
                className="text-[7px] md:text-sm lg:text-base leading-[150%] text-center font-medium text-[#A3ACBF]"
                style={{
                  fontFamily: 'Lato, sans-serif',
                  letterSpacing: '0%'
                }}
              >
                Medical validation
              </span>
              <div className="relative">
                <svg width="45" height="45" viewBox="0 0 120 120" className="md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]">
                  {/* Background circle */}
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    fill="none"
                    stroke="#FAFAFA05"
                    strokeWidth="8"
                  />
                  {/* Animated blue arc - 45% */}
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="8"
                    strokeDasharray="327"
                    strokeDashoffset={isVisible ? "180" : "327"}
                    strokeLinecap="round"
                    transform="rotate(-90 60 60)"
                    className="transition-all duration-[1500ms] ease-out"
                  />
                </svg>
                <span
                  className="absolute inset-0 flex items-center justify-center text-xs md:text-[28px] lg:text-[32px] font-bold text-[#E6EAF2]"
                  style={{
                    fontFamily: 'Lato, sans-serif'
                  }}
                >
                  45%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Second Box - Prescription Drugs */}
        <div
          className="rounded-lg md:rounded-[20px] lg:rounded-3xl p-2 md:p-5 lg:p-6 flex flex-col flex-1 border"
          style={{
            background: '#12192980',
            borderImageSource: 'linear-gradient(180deg, #0F141F 0%, rgba(12, 23, 45, 0) 100%)',
            borderImageSlice: 1
          }}
        >
          {/* Header with Blue Square */}
          <div className="flex items-center gap-1 mb-1.5 md:mb-4">
            <Image 
              src="/blue-square.png" 
              alt="Indicator" 
              width={6} 
              height={6}
              className="md:w-3 md:h-3"
            />
            <span
              className="text-[8px] md:text-[15px] lg:text-base leading-[150%] font-medium text-[#A3ACBF]"
              style={{
                fontFamily: 'Lato, sans-serif',
                letterSpacing: '0%'
              }}
            >
              Prescription Drugs
            </span>
          </div>

          {/* Subheading */}
          <p
            className="text-[7px] md:text-[13px] lg:text-sm leading-[150%] font-medium text-[#626773] mb-1.5 md:mb-3"
            style={{
              fontFamily: 'Lato, sans-serif',
              letterSpacing: '0%'
            }}
          >
            GLP-1 drugs PMPM double-digit increase
          </p>

          {/* Graph */}
          <div className="flex-1 flex items-center justify-center min-h-[40px] md:min-h-[80px] lg:min-h-[100px]">
            <svg width="100%" height="40" viewBox="0 0 280 100" fill="none" className="md:h-20 lg:h-[100px]" preserveAspectRatio="xMidYMid meet">
              {/* Animated path */}
              <path
                d="M 10 80 Q 40 70, 60 65 T 100 55 Q 130 50, 160 45 T 200 35 Q 230 25, 260 10"
                fill="none"
                stroke="#0157ED"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="400"
                strokeDashoffset={isVisible ? "0" : "400"}
                className="transition-all duration-[2000ms] ease-out"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}