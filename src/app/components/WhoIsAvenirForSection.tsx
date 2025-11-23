// src/app/components/WhoIsAvenirForSection.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function WhoIsAvenirForSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = [
    {
      title: "Benefit Managers",
      content: "Make confident decisions that improve satisfaction\nand retention. Benchmark against industry leaders\nto stay competitive."
    },
    {
      title: "Consultants & Brokers",
      content: "Deliver data-backed recommendations that win\nclients and grow your business. Access real-time\ninsights that set you apart from competitors."
    },
    {
      title: "HR Leaders",
      content: "Align benefits strategy with business goals while\ncontrolling costs. Empower your team with tools\nthat simplify complex decisions."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="w-full max-w-[375px] md:max-w-[900px] lg:max-w-[1440px] mx-auto pt-20 md:pt-[120px] pb-20 md:pb-20 px-4 md:px-12 lg:px-[120px] opacity-100"
    >
      {/* Heading */}
      <h2
        className="text-[28px] md:text-[36px] lg:text-[40px] leading-[100%] text-center mb-12 md:mb-16 lg:mb-8 font-semibold text-[#E4E8F0]"
        style={{
          fontFamily: 'League Spartan, sans-serif',
          letterSpacing: '-3%'
        }}
      >
        Who is Avenir AI for?
      </h2>

      {/* Mobile & Tablet Layout: Content then Image */}
      <div className="lg:hidden flex flex-col gap-8 items-start md:items-center">
        {/* Content - All three sections stacked */}
        <div className="flex flex-col gap-8 w-full max-w-[500px] md:ml-20">
          {sections.map((section, index) => (
            <div key={index} className="flex gap-6 items-start">
              {/* Individual Bar */}
              <div 
                className="w-1 self-stretch bg-[rgba(228,232,240,0.1)] rounded-sm relative min-h-8"
              >
                {/* Indicator - only shows on active */}
                {activeIndex === index && (
                  <div
                    className="w-1 h-[13px] bg-[#0140AE] absolute transition-all duration-500"
                    style={{
                      borderTopLeftRadius: '99px',
                      borderTopRightRadius: '99px',
                      top: index === 0 ? '0' : index === 1 ? '50%' : 'auto',
                      bottom: index === 2 ? '0' : 'auto',
                      transform: index === 1 ? 'translateY(-50%)' : 'none'
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className="text-xl md:text-2xl leading-[100%] mb-3 font-semibold text-[#E4E8F0] transition-opacity duration-500"
                  style={{
                    fontFamily: 'League Spartan, sans-serif',
                    letterSpacing: '-3%',
                    opacity: activeIndex === index ? 1 : 0.4
                  }}
                >
                  {section.title}
                </h3>
                {activeIndex === index && (
                  <p
                    className="text-sm md:text-base leading-[150%] font-normal text-[#A3ACBF] whitespace-pre-line"
                    style={{
                      fontFamily: 'Lato, sans-serif',
                      letterSpacing: '0%'
                    }}
                  >
                    {section.content}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Image - Below content on mobile & tablet, centered */}
        <div className="relative w-full max-w-[500px] h-[206px] md:h-[300px] opacity-100 mx-auto">
          <Image 
            src="/avenir-people.png" 
            alt="Avenir AI professionals" 
            fill
            className="object-contain object-bottom"
          />
          {/* Gradient overlay */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-[100px] md:h-[150px] pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(10, 14, 26, 0) 0%, #0A0E1A 100%)'
            }}
          />
        </div>
      </div>

      {/* Desktop Layout: Original Grid */}
      <div 
        className="hidden lg:grid gap-[60px]"
        style={{ 
          gridTemplateColumns: '1.8fr 0.5fr',
          gridTemplateRows: '10px auto 1fr'
        }}
      >
        {/* Left Side - Headers with individual bars and Content */}
        <div 
          className="flex flex-col gap-8 opacity-100"
          style={{ 
            width: '383px', 
            height: '220px', 
            gridRowStart: 3, 
            gridColumnStart: 1, 
            justifySelf: 'start'
          }}
        >
          {sections.map((section, index) => (
            <div key={index} className="flex gap-6 items-stretch">
              {/* Individual Bar for each heading */}
              <div 
                className="w-1 self-stretch bg-[rgba(228,232,240,0.1)] rounded-sm relative min-h-8"
              >
                {/* Indicator - only shows on active */}
                {activeIndex === index && (
                  <div
                    className="w-1 h-[13px] bg-[#0140AE] absolute"
                    style={{
                      borderTopLeftRadius: '99px',
                      borderTopRightRadius: '99px',
                      top: index === 0 ? '0' : index === 1 ? '50%' : 'auto',
                      bottom: index === 2 ? '0' : 'auto',
                      transform: index === 1 ? 'translateY(-50%)' : 'none'
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div>
                <h3
                  className="text-2xl leading-[100%] mb-3 font-semibold text-[#E4E8F0] transition-opacity duration-500"
                  style={{
                    fontFamily: 'League Spartan, sans-serif',
                    letterSpacing: '-3%',
                    opacity: activeIndex === index ? 1 : 0.4
                  }}
                >
                  {section.title}
                </h3>
                {activeIndex === index && (
                  <p
                    className="text-base leading-[150%] font-normal text-[#A3ACBF] whitespace-pre-line"
                    style={{
                      fontFamily: 'Lato, sans-serif',
                      letterSpacing: '0%'
                    }}
                  >
                    {section.content}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Image */}
        <div 
          className="relative w-[777px] h-[410px] opacity-100"
          style={{ 
            gridRowStart: 2, 
            gridColumnStart: 2,
            gridRowEnd: 4,
            top: '-40px'
          }}
        >
          <div className="relative w-full h-full">
            <Image 
              src="/avenir-people.png" 
              alt="Avenir AI professionals" 
              fill
              className="object-contain object-bottom"
            />
            {/* Gradient overlay to blend bottom with background */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-[200px] pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, rgba(10, 14, 26, 0) 0%, #0A0E1A 100%)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}