"use client";

export default function Footer() {
  return (
    <footer
      className="mx-auto"
      style={{
        width: '1440px',
        minHeight: '348px',
        paddingTop: '80px',
        paddingRight: '120px',
        paddingBottom: '20px',
        paddingLeft: '120px',
        gap: '60px',
        opacity: 1,
        background: '#030C17'
      }}
    >
      <div
        className="grid grid-cols-5 grid-rows-1"
        style={{
          width: '1200px',
          height: '144px',
          opacity: 1,
          rowGap: '24px',
          columnGap: '24px'
        }}
      >
        <div className="flex flex-col">
          <img 
            src="/avenir-logo.png" 
            alt="Avenir AI"
            className="w-auto h-auto mb-3"
          />
          
          <p className="font-lato font-medium text-base leading-[150%] text-left text-[#A3ACBF] mb-8 whitespace-nowrap">
            AI that turns benefits data into action.
          </p>

          <div className="flex items-center justify-between w-[156px] h-11 gap-3">
            <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center cursor-pointer">
              <img 
                src="/email-icon.png" 
                alt="Email"
                className="w-6 h-6"
              />
            </div>
            
            <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center cursor-pointer">
              <img 
                src="/github-icon.png" 
                alt="GitHub"
                className="w-6 h-6"
              />
            </div>
            
            <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center cursor-pointer">
              <img 
                src="/linkedin-icon.png" 
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>

        <div></div>

        <div className="flex flex-col gap-4">
          <h3 className="font-league-spartan font-bold text-base leading-[150%] text-left text-[#E4E8F0] m-0">
            Company
          </h3>

          <a href="#" className="font-lato font-medium text-base leading-[150%] text-left text-[#A3ACBF] no-underline cursor-pointer">
            Book Demo
          </a>

          <a href="#" className="font-lato font-medium text-base leading-[150%] text-left text-[#A3ACBF] no-underline cursor-pointer">
            About Us
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-league-spartan font-bold text-base leading-[150%] text-left text-[#E4E8F0] m-0">
            Solutions
          </h3>

          <a href="#" className="font-lato font-medium text-base leading-[150%] text-left text-[#A3ACBF] no-underline cursor-pointer">
            Product
          </a>

          <a href="#" className="font-lato font-medium text-base leading-[150%] text-left text-[#A3ACBF] no-underline cursor-pointer">
            For Employers
          </a>

          <a href="#" className="font-lato font-medium text-base leading-[150%] text-left text-[#A3ACBF] no-underline cursor-pointer">
            For Brokers
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-league-spartan font-bold text-base leading-[150%] text-left text-[#E4E8F0] m-0">
            Legal
          </h3>

          <a href="#" className="font-lato font-medium text-base leading-[150%] text-left text-[#A3ACBF] no-underline cursor-pointer">
            Privacy
          </a>

          <a href="#" className="font-lato font-medium text-base leading-[150%] text-left text-[#A3ACBF] no-underline cursor-pointer">
            Terms
          </a>
        </div>
      </div>

      {/* Horizontal Line */}
      <div 
        style={{
          width: '1200px',
          height: '1px',
          background: 'rgba(163, 172, 191, 0.2)',
          marginTop: '60px',
          marginBottom: '24px'
        }}
      />

      {/* Copyright Text */}
      <p 
        className="font-lato font-medium text-base leading-[150%] text-left text-[#A3ACBF]"
        style={{
          margin: 0
        }}
      >
        © Avenir AI. All rights reserved.
      </p>
    </footer>
  );
}