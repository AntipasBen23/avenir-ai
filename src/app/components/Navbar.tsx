import Image from "next/image";

export default function Navbar() {
  return (
    <nav 
      className="w-full max-w-[1440px] mx-auto h-[93px] flex justify-between items-center px-[120px] py-6"
      style={{ background: '#04070F' }}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Image 
          src="/avenir-logo.png" 
          alt="Avenir AI" 
          width={120} 
          height={40}
        />
      </div>
      
      {/* Navigation Links */}
      <div className="flex items-center gap-8">
        <a 
          href="#" 
          className="text-[18px] leading-[150%]"
          style={{ 
            fontFamily: 'Lato, sans-serif',
            fontWeight: 400,
            letterSpacing: '-0.01em',
            color: '#A3ACBF'
          }}
        >
          Product
        </a>
        
        <div className="relative group">
          <button 
            className="flex items-center gap-1 text-[18px] leading-[150%]"
            style={{ 
              fontFamily: 'Lato, sans-serif',
              fontWeight: 400,
              letterSpacing: '-0.01em',
              color: '#A3ACBF'
            }}
          >
            Solutions
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none"
              className="transition-transform group-hover:rotate-180"
            >
              <path 
                d="M4 6L8 10L12 6" 
                stroke="#A3ACBF" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
          
          {/* Dropdown */}
          <div className="absolute top-full left-0 mt-2 hidden group-hover:block">
            <div className="bg-[#0A0F1A] rounded-lg py-4 px-6 min-w-[250px] space-y-4">
              <a 
                href="#" 
                className="block text-[18px] leading-[150%] hover:opacity-80"
                style={{ 
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                  color: '#A3ACBF'
                }}
              >
                For Employers
              </a>
              <a 
                href="#" 
                className="block text-[18px] leading-[150%] hover:opacity-80"
                style={{ 
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                  color: '#A3ACBF'
                }}
              >
                For Brokers & Consultants
              </a>
              <a 
                href="#" 
                className="block text-[18px] leading-[150%] hover:opacity-80"
                style={{ 
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                  color: '#A3ACBF'
                }}
              >
                For CFOs
              </a>
            </div>
          </div>
        </div>
        
        <a 
          href="#" 
          className="text-[18px] leading-[150%]"
          style={{ 
            fontFamily: 'Lato, sans-serif',
            fontWeight: 400,
            letterSpacing: '-0.01em',
            color: '#A3ACBF'
          }}
        >
          About us
        </a>

        {/* Book a demo button */}
        <button
          className="h-[45px] rounded-full px-6 flex items-center justify-center whitespace-nowrap"
          style={{
            background: 'linear-gradient(90deg, #0140AE 0%, #457FCA 100%)',
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
        </button>
      </div>
    </nav>
  );
}