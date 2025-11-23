// src/app/components/WhyAvenirSection.tsx
import Image from "next/image";

export default function WhyAvenirSection() {
  return (
    <section 
      className="w-full grid gap-10 pt-20 md:pt-[120px] pb-20 px-4 md:px-12 lg:px-[120px] opacity-100 translate-y-[200px]"
      style={{
        gridTemplateRows: 'auto auto auto',
        background: '#0F1219'
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
        Why Avenir
      </h2>

      {/* Content Container */}
      <div 
        className="flex flex-col md:flex-row items-center md:items-start justify-center mx-auto w-full gap-5 md:gap-[20px]"
        style={{
          maxWidth: '1199px'
        }}
      >
        {/* Mobile: Top Row - Two Boxes Side by Side */}
        <div className="flex md:flex-col gap-3 md:gap-5 w-full md:w-auto justify-center">
          {/* First Box - 2300 sources */}
          <div
            className="rounded-3xl flex flex-col items-center justify-center min-w-[146px] border"
            style={{
              width: '165.5px',
              height: '127px',
              gap: '16px',
              paddingTop: '32px',
              paddingBottom: '32px',
              background: '#0D1524',
              borderImageSource: 'linear-gradient(180deg, #0F141F 0%, rgba(12, 23, 45, 0) 100%)',
              borderImageSlice: 1
            }}
          >
            <span
              className="text-[40px] md:text-[48px] lg:text-[52px] leading-[100%] font-semibold text-[#F2F5FA]"
              style={{
                fontFamily: 'League Spartan, sans-serif',
                letterSpacing: '-0.03em'
              }}
            >
              2300
            </span>
            <span
              className="text-sm leading-[150%] text-center font-normal text-[#A3ACBF]"
              style={{
                fontFamily: 'Lato, sans-serif',
                letterSpacing: '0%'
              }}
            >
              sources
            </span>
          </div>

          {/* Second Box - 150 industry reports */}
          <div
            className="rounded-3xl flex flex-col items-center justify-center min-w-[146px] border"
            style={{
              width: '165.5px',
              height: '127px',
              gap: '16px',
              paddingTop: '32px',
              paddingBottom: '32px',
              background: '#0D1524',
              borderImageSource: 'linear-gradient(180deg, #0F141F 0%, rgba(12, 23, 45, 0) 100%)',
              borderImageSlice: 1
            }}
          >
            <span
              className="text-[40px] md:text-[48px] lg:text-[52px] leading-[100%] font-semibold text-[#F2F5FA]"
              style={{
                fontFamily: 'League Spartan, sans-serif',
                letterSpacing: '-0.03em'
              }}
            >
              150
            </span>
            <span
              className="text-sm leading-[150%] text-center font-normal text-[#A3ACBF]"
              style={{
                fontFamily: 'Lato, sans-serif',
                letterSpacing: '0%'
              }}
            >
              industry reports
            </span>
          </div>
        </div>

        {/* Center Image (with text already in it) */}
        <div className="w-full md:w-auto flex justify-center">
          <Image 
            src="/speedometer.png" 
            alt="Data-driven insights" 
            width={343} 
            height={520}
            className="md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-3xl"
          />
        </div>
        
        {/* Mobile: Bottom Row - Two Boxes Side by Side */}
        <div className="flex md:flex-col gap-3 md:gap-5 w-full md:w-auto justify-center">
          {/* First Box - 750 vendors */}
          <div
            className="rounded-3xl flex flex-col items-center justify-center min-w-[146px] border"
            style={{
              width: '165.5px',
              height: '127px',
              gap: '16px',
              paddingTop: '32px',
              paddingBottom: '32px',
              background: '#0D1524',
              borderImageSource: 'linear-gradient(180deg, #0F141F 0%, rgba(12, 23, 45, 0) 100%)',
              borderImageSlice: 1
            }}
          >
            <span
              className="text-[40px] md:text-[48px] lg:text-[52px] leading-[100%] font-semibold text-[#F2F5FA]"
              style={{
                fontFamily: 'League Spartan, sans-serif',
                letterSpacing: '-0.03em'
              }}
            >
              750
            </span>
            <span
              className="text-sm leading-[150%] text-center font-normal text-[#A3ACBF]"
              style={{
                fontFamily: 'Lato, sans-serif',
                letterSpacing: '0%'
              }}
            >
              vendors
            </span>
          </div>

          {/* Second Box - 30+ companies benchmarked */}
          <div
            className="rounded-3xl flex flex-col items-center justify-center min-w-[146px] border"
            style={{
              width: '165.5px',
              height: '127px',
              gap: '16px',
              paddingTop: '32px',
              paddingBottom: '32px',
              background: '#0D1524',
              borderImageSource: 'linear-gradient(180deg, #0F141F 0%, rgba(12, 23, 45, 0) 100%)',
              borderImageSlice: 1
            }}
          >
            <span
              className="text-[40px] md:text-[48px] lg:text-[52px] leading-[100%] font-semibold text-[#F2F5FA]"
              style={{
                fontFamily: 'League Spartan, sans-serif',
                letterSpacing: '-0.03em'
              }}
            >
              30+
            </span>
            <span
              className="text-sm leading-[150%] text-center font-normal text-[#A3ACBF]"
              style={{
                fontFamily: 'Lato, sans-serif',
                letterSpacing: '0%'
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