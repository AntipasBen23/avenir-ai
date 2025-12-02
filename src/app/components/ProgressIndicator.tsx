"use client";

interface ProgressIndicatorProps {
  currentSection: number;
  progressLine1Ref: React.RefObject<HTMLDivElement | null>;
  progressLine2Ref: React.RefObject<HTMLDivElement | null>;
  progressLine3Ref: React.RefObject<HTMLDivElement | null>;
}

export default function ProgressIndicator({ 
  currentSection, 
  progressLine1Ref, 
  progressLine2Ref,
  progressLine3Ref 
}: ProgressIndicatorProps) {
  return (
    <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20">
      <div className="relative flex flex-col items-center">
        {[1, 2, 3, 4].map((num, index) => (
          <div key={num} className="relative flex flex-col items-center">
            <div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                index === currentSection
                  ? "border-white bg-white scale-125"
                  : "border-gray-500 bg-transparent"
              }`}
            />

            <span
              className={`mt-2 text-xs font-medium transition-colors duration-300 ${
                index === currentSection ? "text-white" : "text-gray-500"
              }`}
            >
              0{num}
            </span>

            {index < 3 && (
              <div className="relative w-0.5 h-16 my-2 bg-gray-700">
                {index === 0 && (
                  <div
                    ref={progressLine1Ref}
                    className="absolute top-0 left-0 w-full bg-white origin-top"
                    style={{ height: "0%" }}
                  />
                )}
                {index === 1 && (
                  <div
                    ref={progressLine2Ref}
                    className="absolute top-0 left-0 w-full bg-white origin-top"
                    style={{ height: "0%" }}
                  />
                )}
                {index === 2 && (
                  <div
                    ref={progressLine3Ref}
                    className="absolute top-0 left-0 w-full bg-white origin-top"
                    style={{ height: "0%" }}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}