"use client";

interface ContentSectionProps {
  section: number;
  setRef: (el: HTMLDivElement | null) => void;
}

export default function ContentSection({ section, setRef }: ContentSectionProps) {
  if (section === 0) {
    return (
      <div ref={setRef} className="absolute bottom-0 left-0 w-full px-8 lg:px-16">
        <div className="space-y-4">
          <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight max-w-xl">
            Optimize Employee Benefits<br />with AI-Powered Precision
          </h1>
          
          <p className="text-sm lg:text-base text-gray-300 max-w-lg leading-relaxed">
            Interactive AI workers analyze claims, HRIS, and benchmarks to uncover<br className="hidden lg:block" /> 
            cost drivers, forecast trends, and streamline decisions — in real time.
          </p>
          
          <div className="flex gap-4 pt-2">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all flex items-center gap-2 group text-sm">
              Book a demo
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="px-6 py-3 border border-white/40 hover:border-white/60 text-white rounded-full font-medium transition-all text-sm">
              Contact us
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (section === 1) {
    return (
      <div ref={setRef} className="absolute bottom-0 left-0 w-full px-8 lg:px-16">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight max-w-xl">
            Strategic Planning Made Simple
          </h2>
          <p className="text-sm lg:text-base text-gray-300 max-w-lg leading-relaxed">
            Turn data-driven insights into actionable strategies with our<br className="hidden lg:block" />
            AI-powered analytics dashboard and forecasting tools.
          </p>
          
          <div className="pt-2">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all flex items-center gap-2 group text-sm">
              Explore Solutions
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (section === 2) {
    return (
      <div ref={setRef} className="absolute bottom-0 left-0 w-full px-8 lg:px-16">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight max-w-xl">
            Collaborate with Confidence
          </h2>
          <p className="text-sm lg:text-base text-gray-300 max-w-lg leading-relaxed">
            Bring your team together with real-time collaboration tools<br className="hidden lg:block" />
            and shared insights that drive better decision-making.
          </p>
          
          <div className="pt-2">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all flex items-center gap-2 group text-sm">
              Start Collaborating
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}