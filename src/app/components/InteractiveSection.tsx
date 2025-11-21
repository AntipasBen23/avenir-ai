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
      className="w-full max-w-[984px] mx-auto rounded-[32px] p-8 grid"
      style={{
        height: '475px',
        gap: '40px',
        opacity: 1,
        background: '#0E142099',
        border: '1px solid',
        borderImageSource: 'linear-gradient(180deg, #0F141F 0%, rgba(12, 23, 45, 0) 100%)',
        borderImageSlice: 1,
        transform: 'translateY(150px)',
        gridTemplateRows: 'auto auto 1fr'
      }}
    >
      {/* Search Bar */}
      <div 
        className="flex items-center rounded-full mx-auto"
        style={{
          width: '466px',
          height: '45px',
          gap: '10px',
          paddingTop: '12px',
          paddingRight: '16px',
          paddingBottom: '12px',
          paddingLeft: '16px',
          background: '#12192980',
          border: '1px solid',
          borderImageSource: 'linear-gradient(180deg, #0F141F 0%, rgba(12, 23, 45, 0) 100%)',
          borderImageSlice: 1,
          opacity: 1
        }}
      >
        {/* Search Icon */}
        <Image 
          src="/search-icon.png" 
          alt="Search" 
          width={20} 
          height={20}
        />
        
        {/* Search Input */}
        <input
          type="text"
          placeholder="What are the top claims cost drivers this month?"
          className="flex-1 bg-transparent border-none outline-none text-[16px]"
          style={{
            fontFamily: 'Lato, sans-serif',
            color: '#A3ACBF'
          }}
        />
      </div>

      {/* Heading */}
      <h2
        className="text-[24px] leading-[150%] text-center"
        style={{
          fontFamily: 'Lato, sans-serif',
          fontWeight: 500,
          letterSpacing: '0%',
          color: '#E6EAF2'
        }}
      >
        Here's what we found
      </h2>

      {/* Two Boxes Container */}
      <div className="flex gap-6 justify-center">
        {/* First Box - Economic Environment */}
        <div
          className="rounded-[24px] p-6"
          style={{
            width: '420px',
            height: '250px',
            gap: '24px',
            background: '#12192980',
            border: '1px solid',
            borderImageSource: 'linear-gradient(180deg, #0F141F 0%, rgba(12, 23, 45, 0) 100%)',
            borderImageSlice: 1,
            opacity: 1
          }}
        >
          {/* Header with Blue Dot */}
          <div className="flex items-center gap-2 mb-6">
            <Image 
              src="/blue-dot.png" 
              alt="Indicator" 
              width={12} 
              height={12}
            />
            <span
              className="text-[16px] leading-[150%]"
              style={{
                fontFamily: 'Lato, sans-serif',
                fontWeight: 500,
                letterSpacing: '0%',
                color: '#A3ACBF'
              }}
            >
              Economic environment
            </span>
          </div>

          {/* Two Circles Side by Side */}
          <div className="flex gap-8 justify-center">
            {/* Personal Challenges Circle */}
            <div className="flex flex-col items-center gap-4">
              <span
                className="text-[16px] leading-[150%]"
                style={{
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 500,
                  letterSpacing: '0%',
                  color: '#A3ACBF'
                }}
              >
                Personal Challenges
              </span>
              <div className="relative">
                <svg width="120" height="120" viewBox="0 0 120 120">
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
                    style={{
                      transition: 'stroke-dashoffset 1.5s ease-out'
                    }}
                  />
                </svg>
                <span
                  className="absolute inset-0 flex items-center justify-center text-[32px] font-bold"
                  style={{
                    fontFamily: 'Lato, sans-serif',
                    color: '#E6EAF2'
                  }}
                >
                  28%
                </span>
              </div>
            </div>

            {/* Medical validation Circle */}
            <div className="flex flex-col items-center gap-4">
              <span
                className="text-[16px] leading-[150%]"
                style={{
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 500,
                  letterSpacing: '0%',
                  color: '#A3ACBF'
                }}
              >
                Medical validation
              </span>
              <div className="relative">
                <svg width="120" height="120" viewBox="0 0 120 120">
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
                    style={{
                      transition: 'stroke-dashoffset 1.5s ease-out'
                    }}
                  />
                </svg>
                <span
                  className="absolute inset-0 flex items-center justify-center text-[32px] font-bold"
                  style={{
                    fontFamily: 'Lato, sans-serif',
                    color: '#E6EAF2'
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
          className="rounded-[24px] p-6 flex flex-col"
          style={{
            width: '420px',
            height: '250px',
            gap: '24px',
            background: '#12192980',
            border: '1px solid',
            borderImageSource: 'linear-gradient(180deg, #0F141F 0%, rgba(12, 23, 45, 0) 100%)',
            borderImageSlice: 1,
            opacity: 1
          }}
        >
          {/* Header with Blue Square */}
          <div className="flex items-center gap-2">
            <Image 
              src="/blue-square.png" 
              alt="Indicator" 
              width={12} 
              height={12}
            />
            <span
              className="text-[16px] leading-[150%]"
              style={{
                fontFamily: 'Lato, sans-serif',
                fontWeight: 500,
                letterSpacing: '0%',
                color: '#A3ACBF'
              }}
            >
              Prescription Drugs
            </span>
          </div>

          {/* Subheading */}
          <p
            className="text-[14px] leading-[150%]"
            style={{
              fontFamily: 'Lato, sans-serif',
              fontWeight: 500,
              letterSpacing: '0%',
              color: '#626773'
            }}
          >
            GLP-1 drugs PMPM double-digit increase
          </p>

          {/* Graph */}
          <div className="flex-1 flex items-center justify-center">
            <svg width="280" height="100" viewBox="0 0 280 100" fill="none">
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
                style={{
                  transition: 'stroke-dashoffset 2s ease-out'
                }}
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}