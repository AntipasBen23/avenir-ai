// src/app/components/PartnersSection.tsx
"use client";

import Image from "next/image";

export default function PartnersSection() {
  return (
    <section 
      className="w-full max-w-[1440px] mx-auto grid"
      style={{
        height: '544px',
        gap: '80px',
        paddingTop: '60px',
        paddingBottom: '60px',
        opacity: 1,
        gridTemplateRows: 'auto 1fr',
        transform: 'translateY(200px)'
      }}
    >
      {/* Heading */}
      <h2
        className="text-[16px] leading-[150%] text-center uppercase"
        style={{
          fontFamily: 'Lato, sans-serif',
          fontWeight: 500,
          letterSpacing: '-0.01em',
          color: '#626773'
        }}
      >
        Backed by grants, honors, and awards from
      </h2>

      {/* Partners Logos Grid */}
      <div className="grid grid-cols-4 gap-x-12 gap-y-16 items-center justify-items-center px-20">
        {/* Row 1 */}
        <div className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer opacity-60 hover:opacity-100">
          <Image 
            src="/martin-trust.png" 
            alt="Martin Trust Center for MIT Entrepreneurship" 
            width={200} 
            height={60}
          />
        </div>
        <div className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer opacity-60 hover:opacity-100">
          <Image 
            src="/mit-delta.png" 
            alt="MIT delta v" 
            width={180} 
            height={60}
          />
        </div>
        <div className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer opacity-60 hover:opacity-100">
          <Image 
            src="/harvard.png" 
            alt="Harvard T.H. Chan School of Public Health" 
            width={160} 
            height={60}
          />
        </div>
        <div className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer opacity-60 hover:opacity-100">
          <Image 
            src="/mec.png" 
            alt="MEC" 
            width={180} 
            height={60}
          />
        </div>

        {/* Row 2 */}
        <div className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer opacity-60 hover:opacity-100">
          <Image 
            src="/mit-100k.png" 
            alt="MIT $100K" 
            width={160} 
            height={60}
          />
        </div>
        <div className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer opacity-60 hover:opacity-100">
          <Image 
            src="/harvard-medical.png" 
            alt="Harvard Medical School" 
            width={200} 
            height={60}
          />
        </div>
        <div className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer opacity-60 hover:opacity-100">
          <Image 
            src="/mit-sandbox.png" 
            alt="MIT Sandbox" 
            width={160} 
            height={60}
          />
        </div>
        <div className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer opacity-60 hover:opacity-100">
          <Image 
            src="/mit-sandbox.png" 
            alt="MIT Sandbox" 
            width={160} 
            height={60}
          />
        </div>
      </div>
    </section>
  );
}