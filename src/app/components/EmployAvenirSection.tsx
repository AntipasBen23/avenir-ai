// src/app/components/EmployAvenirSection.tsx
"use client";

export default function EmployAvenirSection() {
  return (
    <section 
      className="w-full mx-auto"
      style={{
        maxWidth: '1440px',
        height: '578px',
        paddingTop: '160px',
        paddingBottom: '160px',
        gap: '80px',
        opacity: 1,
        position: 'relative'
      }}
    >
      {/* Main Heading */}
      <h2
        style={{
          fontFamily: 'League Spartan',
          fontWeight: 600,
          fontStyle: 'normal',
          fontSize: '60px',
          lineHeight: '100%',
          letterSpacing: '-3%',
          textAlign: 'center',
          color: '#E4E8F0',
          position: 'relative',
          zIndex: 10,
          marginBottom: '24px'
        }}
      >
        Employ Avenir AI to make
        <br />
        decisions faster
      </h2>

      {/* Subtitle */}
      <p
        style={{
          fontFamily: 'Lato',
          fontWeight: 400,
          fontStyle: 'normal',
          fontSize: '18px',
          lineHeight: '150%',
          letterSpacing: '0%',
          textAlign: 'center',
          color: '#A3ACBF',
          position: 'relative',
          zIndex: 10,
          marginBottom: '32px'
        }}
      >
        We'll learn about your priorities and show you the fastest path to obtain
        <br />
        measurable results.
      </p>

      {/* Buttons Container */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '16px',
          position: 'relative',
          zIndex: 10
        }}
      >
        {/* Book a demo Button */}
        <button
          style={{
            width: '182px',
            height: '48px',
            paddingTop: '16px',
            paddingRight: '24px',
            paddingBottom: '16px',
            paddingLeft: '24px',
            gap: '10px',
            opacity: 1,
            borderRadius: '999px',
            background: 'linear-gradient(90deg, #0140AE 0%, #457FCA 100%)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            whiteSpace: 'nowrap'
          }}
        >
          <span
            style={{
              fontFamily: 'Lato',
              fontWeight: 600,
              fontStyle: 'normal',
              fontSize: '18px',
              lineHeight: '100%',
              letterSpacing: '-3%',
              color: '#E6EAF2'
            }}
          >
            Book a demo
          </span>
          <img 
            src="/arrow-right.png" 
            alt="arrow"
            style={{
              width: '16px',
              height: '16px',
              marginLeft: '8px'
            }}
          />
        </button>

        {/* Contact us Button */}
        <button
          style={{
            width: '129px',
            height: '48px',
            paddingTop: '16px',
            paddingRight: '24px',
            paddingBottom: '16px',
            paddingLeft: '24px',
            gap: '10px',
            opacity: 1,
            borderRadius: '999px',
            borderWidth: '1px',
            border: '1px solid rgba(69, 75, 88, 0.5)',
            background: 'transparent',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            whiteSpace: 'nowrap'
          }}
        >
          <span
            style={{
              fontFamily: 'Lato',
              fontWeight: 600,
              fontStyle: 'normal',
              fontSize: '18px',
              lineHeight: '100%',
              letterSpacing: '-3%',
              color: '#E6EAF2'
            }}
          >
            Contact us
          </span>
        </button>
      </div>

      {/* First Shiny Box Frame */}
      <div
        style={{
          width: '244.97561645507812px',
          height: '256.5290832519531px',
          transform: 'rotate(-180deg)',
          opacity: 1,
          position: 'absolute',
          top: '241.25px',
          left: '1195.02px',
          borderRadius: '10px',
          padding: '1px',
          background: 'linear-gradient(316.48deg, rgba(1, 64, 174, 0.5) 0%, rgba(1, 64, 174, 0.1) 30%, rgba(247, 246, 247, 0) 50%)',
          boxShadow: '0 0 20px rgba(1, 64, 174, 0.15)'
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '9px',
            background: '#0A0E1A'
          }}
        />
      </div>

      {/* Second Shiny Box Frame - Left */}
      <div
        style={{
          width: '248.48780822753906px',
          height: '256.5290832519531px',
          transform: 'rotate(0deg)',
          opacity: 1,
          position: 'absolute',
          top: '241.25px',
          left: '0px',
          borderRadius: '10px',
          padding: '1px',
          background: 'linear-gradient(216.98deg, rgba(123, 173, 255, 0.25) 0%, rgba(123, 173, 255, 0.05) 30%, rgba(243, 239, 236, 0) 50%)',
          boxShadow: '0 0 15px rgba(123, 173, 255, 0.08)'
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '9px',
            background: '#0A0E1A'
          }}
        />
      </div>

      {/* Third Shiny Box Frame - Top */}
      <div
        style={{
          width: '334.5365905761719px',
          height: '240.3951873779297px',
          transform: 'rotate(0deg)',
          opacity: 1,
          position: 'absolute',
          top: '-0.22px',
          left: '858.73px',
          borderRadius: '10px',
          padding: '1px',
          background: 'linear-gradient(315.28deg, rgba(123, 173, 255, 0.2) 0%, rgba(123, 173, 255, 0.03) 25%, rgba(243, 239, 236, 0) 50%)',
          boxShadow: '0 0 10px rgba(123, 173, 255, 0.05)'
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '9px',
            background: '#0A0E1A'
          }}
        />
      </div>

      {/* Fourth Shiny Box Frame - Top Left */}
      <div
        style={{
          width: '327.51220703125px',
          height: '240.3951873779297px',
          transform: 'rotate(-180deg)',
          opacity: 1,
          position: 'absolute',
          top: '-0.22px',
          left: '250.24px',
          borderRadius: '10px',
          padding: '1px',
          background: 'linear-gradient(216.42deg, rgba(1, 64, 174, 0.45) 0%, rgba(1, 64, 174, 0.1) 30%, rgba(243, 239, 236, 0) 50%)',
          boxShadow: '0 0 18px rgba(1, 64, 174, 0.12)'
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '9px',
            background: '#0A0E1A'
          }}
        />
      </div>
    </section>
  );
}