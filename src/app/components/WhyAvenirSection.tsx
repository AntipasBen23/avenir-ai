// src/app/components/WhyAvenirSection.tsx
import Image from "next/image";

export default function WhyAvenirSection() {
  return (
    <section 
      className="w-full grid"
      style={{
        minHeight: '912px',
        gap: '40px',
        padding: '120px',
        opacity: 1,
        gridTemplateRows: 'auto auto 1fr',
        transform: 'translateY(200px)',
        background: '#0F1219'
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
        Why Avenir
      </h2>

      {/* Content Container */}
      <div 
        className="flex items-start justify-center mx-auto"
        style={{
          maxWidth: '1199px',
          width: '100%',
          minHeight: '592px',
          gap: '20px',
          opacity: 1
        }}
      >
        {/* Left Side - Two Boxes */}
        <div className="flex flex-col gap-5">
          {/* First Box - 2300 sources */}
          <div
            className="rounded-[24px] flex flex-col items-center justify-center"
            style={{
              width: '240px',
              height: '170px',
              gap: '16px',
              background: '#0D1524',
              border: '1px solid',
              borderImageSource: 'linear-gradient(180deg, #0F141F 0%, rgba(12, 23, 45, 0) 100%)',
              borderImageSlice: 1,
              opacity: 1
            }}
          >
            <span
              className="text-[52px] leading-[100%]"
              style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 600,
                letterSpacing: '-0.03em',
                color: '#F2F5FA'
              }}
            >
              2300
            </span>
            <span
              className="text-[14px] leading-[150%] text-center"
              style={{
                fontFamily: 'Lato, sans-serif',
                fontWeight: 400,
                letterSpacing: '0%',
                color: '#A3ACBF'
              }}
            >
              sources
            </span>
          </div>

          {/* Second Box - 150 industry reports */}
          <div
            className="rounded-[24px] flex flex-col items-center justify-center"
            style={{
              width: '240px',
              height: '170px',
              gap: '16px',
              background: '#0D1524',
              border: '1px solid',
              borderImageSource: 'linear-gradient(180deg, #0F141F 0%, rgba(12, 23, 45, 0) 100%)',
              borderImageSlice: 1,
              opacity: 1
            }}
          >
            <span
              className="text-[52px] leading-[100%]"
              style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 600,
                letterSpacing: '-0.03em',
                color: '#F2F5FA'
              }}
            >
              150
            </span>
            <span
              className="text-[14px] leading-[150%] text-center"
              style={{
                fontFamily: 'Lato, sans-serif',
                fontWeight: 400,
                letterSpacing: '0%',
                color: '#A3ACBF'
              }}
            >
              industry reports
            </span>
          </div>
        </div>

        {/* Center Image (with text already in it) */}
        <div>
          <Image 
            src="/speedometer.png" 
            alt="Data-driven insights" 
            width={500} 
            height={500}
          />
        </div>
        
        {/* Right Side - Two Boxes */}
        <div className="flex flex-col gap-5">
          {/* First Box - 750 vendors */}
          <div
            className="rounded-[24px] flex flex-col items-center justify-center"
            style={{
              width: '240px',
              height: '170px',
              gap: '16px',
              background: '#0D1524',
              border: '1px solid',
              borderImageSource: 'linear-gradient(180deg, #0F141F 0%, rgba(12, 23, 45, 0) 100%)',
              borderImageSlice: 1,
              opacity: 1
            }}
          >
            <span
              className="text-[52px] leading-[100%]"
              style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 600,
                letterSpacing: '-0.03em',
                color: '#F2F5FA'
              }}
            >
              750
            </span>
            <span
              className="text-[14px] leading-[150%] text-center"
              style={{
                fontFamily: 'Lato, sans-serif',
                fontWeight: 400,
                letterSpacing: '0%',
                color: '#A3ACBF'
              }}
            >
              vendors
            </span>
          </div>

          {/* Second Box - 30+ companies benchmarked */}
          <div
            className="rounded-[24px] flex flex-col items-center justify-center"
            style={{
              width: '240px',
              height: '170px',
              gap: '16px',
              background: '#0D1524',
              border: '1px solid',
              borderImageSource: 'linear-gradient(180deg, #0F141F 0%, rgba(12, 23, 45, 0) 100%)',
              borderImageSlice: 1,
              opacity: 1
            }}
          >
            <span
              className="text-[52px] leading-[100%]"
              style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 600,
                letterSpacing: '-0.03em',
                color: '#F2F5FA'
              }}
            >
              30+
            </span>
            <span
              className="text-[14px] leading-[150%] text-center"
              style={{
                fontFamily: 'Lato, sans-serif',
                fontWeight: 400,
                letterSpacing: '0%',
                color: '#A3ACBF'
              }}
            >
              companies benchmarked
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}