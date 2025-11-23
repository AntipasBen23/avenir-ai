// src/app/components/PartnersSection.tsx
"use client";

import Image from "next/image";

export default function PartnersSection() {
  return (
    <section 
      className="w-full max-w-[375px] md:max-w-[900px] lg:max-w-[1440px] mx-auto grid gap-12 md:gap-16 lg:gap-20 pt-[60px] pb-[60px] opacity-100 translate-y-[200px]"
      style={{
        gridTemplateRows: 'auto 1fr'
      }}
    >
      {/* Heading */}
      <h2
        className="text-base md:text-lg leading-[150%] text-center uppercase font-medium text-[#626773] px-4 md:px-0"
        style={{
          fontFamily: 'Lato, sans-serif',
          letterSpacing: '-0.01em'
        }}
      >
        {/* Mobile: Line break after Awards */}
        <span className="md:hidden">
          Backed by grants, honors, and awards<br />from
        </span>
        
        {/* Tablet & Desktop: No line break */}
        <span className="hidden md:inline">
          Backed by grants, honors, and awards from
        </span>
      </h2>

      {/* Partners Logos Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 md:gap-x-12 md:gap-y-16 items-center justify-items-center px-6 md:px-12 lg:px-20">
        {/* Row 1 - Mobile: 2 logos, Desktop: 4 logos */}
        <div className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer opacity-60 hover:opacity-100">
          <Image 
            src="/martin-trust.png" 
            alt="Martin Trust Center for MIT Entrepreneurship" 
            width={140} 
            height={45}
            className="md:w-[180px] lg:w-[200px] h-auto"
          />
        </div>
        <div className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer opacity-60 hover:opacity-100">
          <Image 
            src="/mit-delta.png" 
            alt="MIT delta v" 
            width={130} 
            height={45}
            className="md:w-[160px] lg:w-[180px] h-auto"
          />
        </div>
        <div className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer opacity-60 hover:opacity-100">
          <Image 
            src="/harvard.png" 
            alt="Harvard T.H. Chan School of Public Health" 
            width={120} 
            height={45}
            className="md:w-[140px] lg:w-[160px] h-auto"
          />
        </div>
        <div className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer opacity-60 hover:opacity-100">
          <Image 
            src="/mec.png" 
            alt="MEC" 
            width={130} 
            height={45}
            className="md:w-[160px] lg:w-[180px] h-auto"
          />
        </div>

        {/* Row 2 */}
        <div className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer opacity-60 hover:opacity-100">
          <Image 
            src="/mit-100k.png" 
            alt="MIT $100K" 
            width={120} 
            height={45}
            className="md:w-[140px] lg:w-[160px] h-auto"
          />
        </div>
        <div className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer opacity-60 hover:opacity-100">
          <Image 
            src="/harvard-medical.png" 
            alt="Harvard Medical School" 
            width={140} 
            height={45}
            className="md:w-[180px] lg:w-[200px] h-auto"
          />
        </div>
        <div className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer opacity-60 hover:opacity-100">
          <Image 
            src="/mit-sandbox.png" 
            alt="MIT Sandbox" 
            width={120} 
            height={45}
            className="md:w-[140px] lg:w-[160px] h-auto"
          />
        </div>
        
      </div>
    </section>
  );
}
