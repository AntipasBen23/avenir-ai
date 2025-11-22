import Image from "next/image";

export default function HeroSection() {
  return (
    <section 
      className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[120px] grid pt-47 md:pt-48 lg:pt-[70px]"
      style={{
        gap: '24px',
        opacity: 1,
        gridTemplateRows: 'auto auto auto auto 1fr',
        background: '#04070F'
      }}
    >
      {/* AI-Powered Precision Badge */}
      <button
        className="flex items-center justify-center rounded-full whitespace-nowrap justify-self-center"
        style={{
          width: '200px',
          height: '40px',
          gap: '12px',
          paddingTop: '8px',
          paddingRight: '12px',
          paddingBottom: '8px',
          paddingLeft: '12px',
          background: '#367FFF1A',
          border: '1px solid #367FFF',
          opacity: 1
        }}
      >
        <Image 
          src="/ai-icon.png" 
          alt="AI Icon" 
          width={24} 
          height={24}
        />
        
        <span
          className="text-[16px] leading-[150%]"
          style={{
            fontFamily: 'Lato, sans-serif',
            fontWeight: 400,
            letterSpacing: '-0.01em',
            color: '#367FFF'
          }}
        >
          AI-Powered Precision
        </span>
      </button>

      {/* Main Heading */}
      <h1
        className="text-[40px] md:text-[50px] lg:text-[60px] leading-[100%] text-center"
        style={{
          fontFamily: 'League Spartan, sans-serif',
          fontWeight: 600,
          letterSpacing: '-0.03em',
          color: '#E4E8F0'
        }}
      >
        {/* Mobile: Line breaks after Employee, with, Precision */}
        <span className="md:hidden">
          Optimize Employee<br />
          Benefits with<br />
          AI-Powered Precision
        </span>
        
        {/* Tablet & Desktop: Original layout */}
        <span className="hidden md:inline">
          Optimize Employee Benefits with<br />AI-Powered Precision
        </span>
      </h1>

      {/* Description */}
      <p
        className="text-[18px] leading-[150%] text-center px-0 md:px-4 lg:px-0"
        style={{
          fontFamily: 'Lato, sans-serif',
          fontWeight: 400,
          letterSpacing: '0%',
          color: '#A3ACBF'
        }}
      >
        {/* Mobile: Exact line breaks matching screenshot - ending at HRIS, drivers, decisions */}
        <span className="md:hidden">
          Interactive AI workers analyze claims, HRIS,<br />
          and benchmarks to uncover cost drivers,<br />
          forecast trends, and streamline decisions —<br />
          in real time.
        </span>
        
        {/* Tablet & Desktop: Original layout */}
        <span className="hidden md:inline">
          Interactive AI workers analyze claims, HRIS, and benchmarks to uncover cost drivers, forecast trends,<br />and streamline decisions — in real time.
        </span>
      </p>

      {/* CTA Buttons - Side by Side on All Devices */}
      <div className="flex flex-row items-center justify-center gap-3 md:gap-4 pb-8 md:pb-0">
        <button
          className="flex items-center justify-center rounded-full whitespace-nowrap"
          style={{
            width: '182px',
            height: '48px',
            gap: '10px',
            paddingTop: '16px',
            paddingRight: '24px',
            paddingBottom: '16px',
            paddingLeft: '24px',
            background: 'linear-gradient(90deg, #0140AE 0%, #457FCA 100%)',
            opacity: 1
          }}
        >
          <span
            className="text-[18px] leading-[100%]"
            style={{
              fontFamily: 'Lato, sans-serif',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              color: '#E6EAF2'
            }}
          >
            Book a demo
          </span>
          <Image 
            src="/arrow-right.png" 
            alt="Arrow" 
            width={16} 
            height={16}
          />
        </button>

        <button
          className="flex items-center justify-center rounded-full whitespace-nowrap"
          style={{
            width: '129px',
            height: '48px',
            gap: '10px',
            paddingTop: '16px',
            paddingRight: '24px',
            paddingBottom: '16px',
            paddingLeft: '24px',
            border: '1px solid rgba(69, 75, 88, 0.3)',
            opacity: 1
          }}
        >
          <span
            className="text-[18px] leading-[100%]"
            style={{
              fontFamily: 'Lato, sans-serif',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              color: '#E6EAF2'
            }}
          >
            Contact us
          </span>
        </button>
      </div>
    </section>
  );
}