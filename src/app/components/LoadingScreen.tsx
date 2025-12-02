"use client";

import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show loading screen for 2 seconds, then fade out
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Wait for fade-out animation to complete, then notify parent
      setTimeout(() => {
        onLoadingComplete();
      }, 500); // Match transition duration
    }, 2000); // Loading screen duration

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{
        background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 30%, #0f3460 60%, #53a8b6 100%)'
      }}
    >
      {/* Centered Logo */}
      <div className="animate-pulse">
        <img 
          src="/avenirlogo.png" 
          alt="Avenir AI" 
          className="h-16 lg:h-20 w-auto"
        />
      </div>

      {/* Optional: Loading spinner/dots */}
      <div className="absolute bottom-20 flex gap-2">
        <div 
          className="w-2 h-2 bg-white rounded-full animate-bounce"
          style={{ animationDelay: '0ms' }}
        />
        <div 
          className="w-2 h-2 bg-white rounded-full animate-bounce"
          style={{ animationDelay: '150ms' }}
        />
        <div 
          className="w-2 h-2 bg-white rounded-full animate-bounce"
          style={{ animationDelay: '300ms' }}
        />
      </div>
    </div>
  );
}