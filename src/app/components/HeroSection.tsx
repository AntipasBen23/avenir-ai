import Image from "next/image";

export default function HeroSection() {
  return (
    <section 
      className="w-full max-w-[1440px] mx-auto px-[120px] grid"
      style={{
        height: '310px',
        gap: '24px',
        opacity: 1,
        gridTemplateRows: 'auto auto auto auto 1fr',
        paddingTop: '70px'
      }}
    >
      {/* AI-Powered Precision Button */}
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
        {/* Icon */}
        <Image 
          src="/ai-icon.png" 
          alt="AI Icon" 
          width={24} 
          height={24}
        />
        
        {/* Text */}
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
        className="text-[60px] leading-[100%] text-center"
        style={{
          fontFamily: 'League Spartan, sans-serif',
          fontWeight: 600,
          letterSpacing: '-0.03em',
          color: '#E4E8F0'
        }}
      >
        Optimize Employee Benefits with AI-Powered Precision
      </h1>

      {/* Subheading */}
      <p
        className="text-[18px] leading-[150%] text-center"
        style={{
          fontFamily: 'Lato, sans-serif',
          fontWeight: 400,
          letterSpacing: '0%',
          color: '#A3ACBF'
        }}
      >
        Interactive AI workers analyze claims, HRIS, and benchmarks to uncover cost drivers, forecast trends, and streamline decisions — in real time.
      </p>

      {/* CTA Buttons */}
      <div className="flex items-center justify-center gap-4">
        {/* Book a demo button */}
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
          {/* Arrow icon */}
          <Image 
            src="/arrow-right.png" 
            alt="Arrow" 
            width={16} 
            height={16}
          />
        </button>

        {/* See how it works button */}
        <button
          className="flex items-center justify-center rounded-full whitespace-nowrap"
          style={{
            width: '176px',
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
            See how it works
          </span>
        </button>
      </div>
    </section>
  );
}