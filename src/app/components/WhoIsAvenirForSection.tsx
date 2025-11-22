// src/app/components/WhoIsAvenirForSection.tsx
"use client";

import { useEffect, useState } from "react";

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
      className="w-full mx-auto"
      style={{
        maxWidth: '1440px',
        height: '642px',
        paddingTop: '80px',
        paddingRight: '120px',
        paddingBottom: '80px',
        paddingLeft: '120px',
        gap: '32px',
        opacity: 1
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontFamily: 'League Spartan, sans-serif',
          fontWeight: 600,
          fontSize: '40px',
          lineHeight: '100%',
          letterSpacing: '-3%',
          textAlign: 'center',
          color: '#E4E8F0',
          marginBottom: '64px'
        }}
      >
        Who is Avenir AI for?
      </h2>

      {/* Content Container */}
      <div className="flex items-start" style={{ gap: '80px' }}>
        {/* Left Side - Headers with individual bars and Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', maxWidth: '500px' }}>
          {sections.map((section, index) => (
            <div key={index} className="flex" style={{ gap: '24px' }}>
              {/* Individual Bar for each heading */}
              <div 
                style={{
                  width: '4px',
                  height: activeIndex === index ? '100px' : '32px',
                  backgroundColor: 'rgba(228, 232, 240, 0.1)',
                  borderRadius: '2px',
                  position: 'relative',
                  transition: 'height 0.5s ease-in-out'
                }}
              >
                {/* Indicator - only shows on active */}
                {activeIndex === index && (
                  <div
                    style={{
                      width: '4px',
                      height: '13px',
                      backgroundColor: '#0140AE',
                      borderTopLeftRadius: '99px',
                      borderTopRightRadius: '99px',
                      opacity: 1,
                      position: 'absolute',
                      top: 0
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div>
                <h3
                  style={{
                    fontFamily: 'League Spartan, sans-serif',
                    fontWeight: 600,
                    fontSize: '24px',
                    lineHeight: '100%',
                    letterSpacing: '-3%',
                    color: '#E4E8F0',
                    marginBottom: '12px',
                    opacity: activeIndex === index ? 1 : 0.4,
                    transition: 'opacity 0.5s ease-in-out'
                  }}
                >
                  {section.title}
                </h3>
                {activeIndex === index && (
                  <p
                    style={{
                      fontFamily: 'Lato, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '0%',
                      color: '#A3ACBF',
                      whiteSpace: 'pre-line'
                    }}
                  >
                    {section.content}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}