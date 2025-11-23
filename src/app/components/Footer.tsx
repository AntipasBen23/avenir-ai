"use client";

export default function Footer() {
  return (
    <footer
      className="w-full max-w-[375px] md:max-w-[1440px] mx-auto min-h-[348px] pt-20 pb-5 px-4 md:px-[120px] opacity-100"
      style={{
        background: '#030C17'
      }}
    >
      {/* Mobile Only: Stacked Layout */}
      <div className="md:hidden flex flex-col gap-12">
        {/* Logo and Social Icons */}
        <div className="flex flex-col">
          <img 
            src="/avenir-logo.png" 
            alt="Avenir AI"
            className="w-[100px] h-auto mb-3"
          />
          
          <p className="font-medium text-base leading-[150%] text-left text-[#A3ACBF] mb-8"
            style={{ fontFamily: 'Lato' }}
          >
            AI that turns benefits data into action.
          </p>

          <div className="flex items-center gap-3 w-[156px] h-11">
            <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
              <img 
                src="/email-icon.png" 
                alt="Email"
                className="w-6 h-6"
              />
            </div>
            
            <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
              <img 
                src="/github-icon.png" 
                alt="GitHub"
                className="w-6 h-6"
              />
            </div>
            
            <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
              <img 
                src="/linkedin-icon.png" 
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>

        {/* Company Section */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-base leading-[150%] text-left text-[#E4E8F0] m-0"
            style={{ fontFamily: 'League Spartan' }}
          >
            Company
          </h3>

          <a href="#" className="font-medium text-base leading-[150%] text-left text-[#A3ACBF] no-underline cursor-pointer hover:text-[#E4E8F0] transition-colors"
            style={{ fontFamily: 'Lato' }}
          >
            Book Demo
          </a>

          <a href="#" className="font-medium text-base leading-[150%] text-left text-[#A3ACBF] no-underline cursor-pointer hover:text-[#E4E8F0] transition-colors"
            style={{ fontFamily: 'Lato' }}
          >
            About Us
          </a>
        </div>

        {/* Solutions Section */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-base leading-[150%] text-left text-[#E4E8F0] m-0"
            style={{ fontFamily: 'League Spartan' }}
          >
            Solutions
          </h3>

          <a href="#" className="font-medium text-base leading-[150%] text-left text-[#A3ACBF] no-underline cursor-pointer hover:text-[#E4E8F0] transition-colors"
            style={{ fontFamily: 'Lato' }}
          >
            Product
          </a>

          <a href="#" className="font-medium text-base leading-[150%] text-left text-[#A3ACBF] no-underline cursor-pointer hover:text-[#E4E8F0] transition-colors"
            style={{ fontFamily: 'Lato' }}
          >
            For Employers
          </a>

          <a href="#" className="font-medium text-base leading-[150%] text-left text-[#A3ACBF] no-underline cursor-pointer hover:text-[#E4E8F0] transition-colors"
            style={{ fontFamily: 'Lato' }}
          >
            For Brokers
          </a>
        </div>

        {/* Legal Section */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-base leading-[150%] text-left text-[#E4E8F0] m-0"
            style={{ fontFamily: 'League Spartan' }}
          >
            Legal
          </h3>

          <a href="#" className="font-medium text-base leading-[150%] text-left text-[#A3ACBF] no-underline cursor-pointer hover:text-[#E4E8F0] transition-colors"
            style={{ fontFamily: 'Lato' }}
          >
            Privacy
          </a>

          <a href="#" className="font-medium text-base leading-[150%] text-left text-[#A3ACBF] no-underline cursor-pointer hover:text-[#E4E8F0] transition-colors"
            style={{ fontFamily: 'Lato' }}
          >
            Terms
          </a>
        </div>

        {/* Horizontal Line */}
        <div 
          className="w-full h-px mt-8 mb-6"
          style={{
            background: 'rgba(163, 172, 191, 0.2)'
          }}
        />

        {/* Copyright Text */}
        <p 
          className="font-medium text-base leading-[150%] text-left text-[#A3ACBF] m-0"
          style={{ fontFamily: 'Lato' }}
        >
          © Avenir AI. All rights reserved.
        </p>
      </div>

      {/* Tablet & Desktop Layout: Original Grid */}
      <div className="hidden md:block">
        <div
          className="grid grid-cols-5 grid-rows-1 gap-x-6 gap-y-6"
          style={{
            width: '1200px',
            height: '144px'
          }}
        >
          <div className="flex flex-col">
            <img 
              src="/avenir-logo.png" 
              alt="Avenir AI"
              className="w-auto h-auto mb-3"
            />
            
            <p className="font-medium text-base leading-[150%] text-left text-[#A3ACBF] mb-8 whitespace-nowrap"
              style={{ fontFamily: 'Lato' }}
            >
              AI that turns benefits data into action.
            </p>

            <div className="flex items-center justify-between w-[156px] h-11 gap-3">
              <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
                <img 
                  src="/email-icon.png" 
                  alt="Email"
                  className="w-6 h-6"
                />
              </div>
              
              <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
                <img 
                  src="/github-icon.png" 
                  alt="GitHub"
                  className="w-6 h-6"
                />
              </div>
              
              <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
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
            <h3 className="font-bold text-base leading-[150%] text-left text-[#E4E8F0] m-0"
              style={{ fontFamily: 'League Spartan' }}
            >
              Company
            </h3>

            <a href="#" className="font-medium text-base leading-[150%] text-left text-[#A3ACBF] no-underline cursor-pointer hover:text-[#E4E8F0] transition-colors"
              style={{ fontFamily: 'Lato' }}
            >
              Book Demo
            </a>

            <a href="#" className="font-medium text-base leading-[150%] text-left text-[#A3ACBF] no-underline cursor-pointer hover:text-[#E4E8F0] transition-colors"
              style={{ fontFamily: 'Lato' }}
            >
              About Us
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-base leading-[150%] text-left text-[#E4E8F0] m-0"
              style={{ fontFamily: 'League Spartan' }}
            >
              Solutions
            </h3>

            <a href="#" className="font-medium text-base leading-[150%] text-left text-[#A3ACBF] no-underline cursor-pointer hover:text-[#E4E8F0] transition-colors"
              style={{ fontFamily: 'Lato' }}
            >
              Product
            </a>

            <a href="#" className="font-medium text-base leading-[150%] text-left text-[#A3ACBF] no-underline cursor-pointer hover:text-[#E4E8F0] transition-colors"
              style={{ fontFamily: 'Lato' }}
            >
              For Employers
            </a>

            <a href="#" className="font-medium text-base leading-[150%] text-left text-[#A3ACBF] no-underline cursor-pointer hover:text-[#E4E8F0] transition-colors"
              style={{ fontFamily: 'Lato' }}
            >
              For Brokers
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-base leading-[150%] text-left text-[#E4E8F0] m-0"
              style={{ fontFamily: 'League Spartan' }}
            >
              Legal
            </h3>

            <a href="#" className="font-medium text-base leading-[150%] text-left text-[#A3ACBF] no-underline cursor-pointer hover:text-[#E4E8F0] transition-colors"
              style={{ fontFamily: 'Lato' }}
            >
              Privacy
            </a>

            <a href="#" className="font-medium text-base leading-[150%] text-left text-[#A3ACBF] no-underline cursor-pointer hover:text-[#E4E8F0] transition-colors"
              style={{ fontFamily: 'Lato' }}
            >
              Terms
            </a>
          </div>
        </div>

        {/* Horizontal Line */}
        <div 
          className="w-[1200px] h-px mt-[60px] mb-6"
          style={{
            background: 'rgba(163, 172, 191, 0.2)'
          }}
        />

        {/* Copyright Text */}
        <p 
          className="font-medium text-base leading-[150%] text-left text-[#A3ACBF] m-0"
          style={{ fontFamily: 'Lato' }}
        >
          © Avenir AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}