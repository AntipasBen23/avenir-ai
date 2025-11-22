'use client';

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  return (
    <>
      <nav 
        className="w-full fixed top-0 left-0 z-50 lg:relative"
        style={{ background: '#04070F' }}
      >
        <div className="w-full max-w-[1440px] mx-auto h-14 md:h-[80px] lg:h-[93px] flex justify-between items-center px-4 md:px-8 lg:px-[120px] py-4 md:py-5 lg:py-6">
          {/* Logo */}
          <div className="flex items-center">
            <Image 
              src="/avenir-logo.png" 
              alt="Avenir AI" 
              width={120} 
              height={40}
              className="w-[100px] md:w-[110px] lg:w-[120px] h-auto"
            />
          </div>
          
          {/* Desktop & Tablet Navigation Links */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <a 
              href="#" 
              className="text-[16px] lg:text-[18px] leading-[150%]"
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
                className="flex items-center gap-1 text-[16px] lg:text-[18px] leading-[150%]"
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
                    className="block text-[16px] lg:text-[18px] leading-[150%] hover:opacity-80"
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
                    className="block text-[16px] lg:text-[18px] leading-[150%] hover:opacity-80"
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
                    className="block text-[16px] lg:text-[18px] leading-[150%] hover:opacity-80"
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
              className="text-[16px] lg:text-[18px] leading-[150%] whitespace-nowrap"
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
              className="h-[40px] lg:h-[45px] rounded-full px-4 lg:px-6 flex items-center justify-center whitespace-nowrap"
              style={{
                background: 'linear-gradient(90deg, #0140AE 0%, #457FCA 100%)',
              }}
            >
              <span
                className="text-[16px] lg:text-[18px] leading-[100%]"
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

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 relative z-50"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-[#A3ACBF] transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#A3ACBF] transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#A3ACBF] transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden fixed top-14 right-0 w-full max-w-sm h-[calc(100vh-3.5rem)] bg-[#04070F] z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ 
          borderLeft: '1px solid #1a1f2e'
        }}
      >
        <div className="flex flex-col p-6 space-y-6">
          {/* Product Link */}
          <a 
            href="#" 
            className="text-[18px] leading-[150%] py-3 border-b border-[#1a1f2e]"
            style={{ 
              fontFamily: 'Lato, sans-serif',
              fontWeight: 400,
              letterSpacing: '-0.01em',
              color: '#A3ACBF'
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            Product
          </a>

          {/* Solutions Accordion */}
          <div className="border-b border-[#1a1f2e]">
            <button
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              className="w-full flex items-center justify-between text-[18px] leading-[150%] py-3"
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
                className={`transition-transform duration-300 ${
                  isSolutionsOpen ? 'rotate-180' : ''
                }`}
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
            
            {/* Solutions Submenu */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isSolutionsOpen ? 'max-h-96 mb-3' : 'max-h-0'
              }`}
            >
              <div className="pl-4 space-y-3">
                <a 
                  href="#" 
                  className="block text-[16px] leading-[150%] py-2"
                  style={{ 
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                    color: '#A3ACBF'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  For Employers
                </a>
                <a 
                  href="#" 
                  className="block text-[16px] leading-[150%] py-2"
                  style={{ 
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                    color: '#A3ACBF'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  For Brokers & Consultants
                </a>
                <a 
                  href="#" 
                  className="block text-[16px] leading-[150%] py-2"
                  style={{ 
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                    color: '#A3ACBF'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  For CFOs
                </a>
              </div>
            </div>
          </div>

          {/* About us Link */}
          <a 
            href="#" 
            className="text-[18px] leading-[150%] py-3 border-b border-[#1a1f2e]"
            style={{ 
              fontFamily: 'Lato, sans-serif',
              fontWeight: 400,
              letterSpacing: '-0.01em',
              color: '#A3ACBF'
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            About us
          </a>

          {/* Book a demo button */}
          <button
            className="h-[45px] rounded-full px-6 flex items-center justify-center whitespace-nowrap mt-4"
            style={{
              background: 'linear-gradient(90deg, #0140AE 0%, #457FCA 100%)',
            }}
            onClick={() => setIsMenuOpen(false)}
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
      </div>
    </>
  );
}