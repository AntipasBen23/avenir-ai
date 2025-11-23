// src/app/components/EmployAvenirSection.tsx
"use client";

export default function EmployAvenirSection() {
  return (
    <section 
      className="w-full max-w-[375px] md:max-w-[900px] lg:max-w-[1440px] mx-auto pt-[160px] pb-[160px] px-4 md:px-12 lg:px-0 opacity-100 relative"
    >
      {/* Main Heading */}
      <h2
        className="text-[32px] md:text-[48px] lg:text-[60px] leading-[100%] text-center font-semibold text-[#E4E8F0] relative z-10 mb-6"
        style={{
          fontFamily: 'League Spartan',
          letterSpacing: '-3%'
        }}
      >
        {/* Mobile: Line break after "to" */}
        <span className="md:hidden">
          Employ Avenir AI to<br />
          make decisions faster
        </span>
        
        {/* Tablet & Desktop: Original line break */}
        <span className="hidden md:inline">
          Employ Avenir AI to make
          <br />
          decisions faster
        </span>
      </h2>

      {/* Subtitle */}
      <p
        className="text-sm md:text-base lg:text-lg leading-[150%] text-center font-normal text-[#A3ACBF] relative z-10 mb-8 px-2"
        style={{
          fontFamily: 'Lato',
          letterSpacing: '0%'
        }}
      >
        {/* Mobile: Line breaks after "show" and "measurable" */}
        <span className="md:hidden">
          We'll learn about your priorities and show<br />
          you the fastest path to obtain measurable<br />
          results.
        </span>
        
        {/* Tablet & Desktop: Original line break */}
        <span className="hidden md:inline">
          We'll learn about your priorities and show you the fastest path to obtain
          <br />
          measurable results.
        </span>
      </p>

      {/* Buttons Container */}
      <div
        className="flex flex-row justify-center items-center gap-3 md:gap-4 relative z-10"
      >
        {/* Book a demo Button */}
        <button
          className="w-[182px] h-12 px-6 py-4 rounded-full border-none cursor-pointer flex items-center justify-center whitespace-nowrap"
          style={{
            background: 'linear-gradient(90deg, #0140AE 0%, #457FCA 100%)'
          }}
        >
          <span
            className="text-lg leading-[100%] font-semibold text-[#E6EAF2]"
            style={{
              fontFamily: 'Lato',
              letterSpacing: '-3%'
            }}
          >
            Book a demo
          </span>
          <img 
            src="/arrow-right.png" 
            alt="arrow"
            className="w-4 h-4 ml-2"
          />
        </button>

        {/* Contact us Button */}
        <button
          className="w-[129px] h-12 px-6 py-4 rounded-full border border-[rgba(69,75,88,0.5)] bg-transparent cursor-pointer flex items-center justify-center whitespace-nowrap"
        >
          <span
            className="text-lg leading-[100%] font-semibold text-[#E6EAF2]"
            style={{
              fontFamily: 'Lato',
              letterSpacing: '-3%'
            }}
          >
            Contact us
          </span>
        </button>
      </div>

      {/* First Shiny Box Frame - Hidden on mobile */}
      <div
        className="hidden lg:block absolute rounded-[10px] p-[1px]"
        style={{
          width: '244.97561645507812px',
          height: '256.5290832519531px',
          transform: 'rotate(-180deg)',
          top: '241.25px',
          left: '1195.02px',
          background: 'linear-gradient(316.48deg, rgba(1, 64, 174, 0.5) 0%, rgba(1, 64, 174, 0.1) 30%, rgba(247, 246, 247, 0) 50%)',
          boxShadow: '0 0 20px rgba(1, 64, 174, 0.15)'
        }}
      >
        <div
          className="w-full h-full rounded-[9px]"
          style={{
            background: '#0A0E1A'
          }}
        />
      </div>

      {/* Second Shiny Box Frame - Left - Hidden on mobile */}
      <div
        className="hidden lg:block absolute rounded-[10px] p-[1px]"
        style={{
          width: '248.48780822753906px',
          height: '256.5290832519531px',
          transform: 'rotate(0deg)',
          top: '241.25px',
          left: '0px',
          background: 'linear-gradient(216.98deg, rgba(123, 173, 255, 0.25) 0%, rgba(123, 173, 255, 0.05) 30%, rgba(243, 239, 236, 0) 50%)',
          boxShadow: '0 0 15px rgba(123, 173, 255, 0.08)'
        }}
      >
        <div
          className="w-full h-full rounded-[9px]"
          style={{
            background: '#0A0E1A'
          }}
        />
      </div>

      {/* Third Shiny Box Frame - Top - Hidden on mobile */}
      <div
        className="hidden lg:block absolute rounded-[10px] p-[1px]"
        style={{
          width: '334.5365905761719px',
          height: '240.3951873779297px',
          transform: 'rotate(0deg)',
          top: '-0.22px',
          left: '858.73px',
          background: 'linear-gradient(315.28deg, rgba(123, 173, 255, 0.2) 0%, rgba(123, 173, 255, 0.03) 25%, rgba(243, 239, 236, 0) 50%)',
          boxShadow: '0 0 10px rgba(123, 173, 255, 0.05)'
        }}
      >
        <div
          className="w-full h-full rounded-[9px]"
          style={{
            background: '#0A0E1A'
          }}
        />
      </div>

      {/* Fourth Shiny Box Frame - Top Left - Hidden on mobile */}
      <div
        className="hidden lg:block absolute rounded-[10px] p-[1px]"
        style={{
          width: '327.51220703125px',
          height: '240.3951873779297px',
          transform: 'rotate(-180deg)',
          top: '-0.22px',
          left: '250.24px',
          background: 'linear-gradient(216.42deg, rgba(1, 64, 174, 0.45) 0%, rgba(1, 64, 174, 0.1) 30%, rgba(243, 239, 236, 0) 50%)',
          boxShadow: '0 0 18px rgba(1, 64, 174, 0.12)'
        }}
      >
        <div
          className="w-full h-full rounded-[9px]"
          style={{
            background: '#0A0E1A'
          }}
        />
      </div>
    </section>
  );
}