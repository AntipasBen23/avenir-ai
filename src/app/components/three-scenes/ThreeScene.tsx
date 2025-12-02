"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import Section1Scene from "./Section1Scene";
import Section2Scene from "./Section2Scene";
import Section3Scene from "./Section3scene";
import Section4Scene from "./Section4scene";

interface ThreeSceneProps {
  scrollProgress: number; // 0 to 1
  currentSection: number; // 0 to 3 (4 sections now)
  binocularsVisible: boolean; // Controls slide-in animation
}

// Camera controller component
function CameraController({ scrollProgress }: { scrollProgress: number }) {
  const { camera } = useThree();
  
  useFrame(() => {
    // Section 1: Binoculars zoom (0-33% of total scroll)
    if (scrollProgress < 0.33) {
      const section1Progress = scrollProgress / 0.33; // 0 to 1
      
      // Camera zoom into binoculars lens at 75-100%
      if (section1Progress > 0.75) {
        const zoomProgress = (section1Progress - 0.75) / 0.25;
        camera.position.z = 5 - (zoomProgress * 6); // 5 to -1
      } else {
        camera.position.z = 5;
      }
    }
    // Section 2: Desk rotation and logo portal (33-67% of total scroll)
    else if (scrollProgress < 0.67) {
      const section2Progress = (scrollProgress - 0.33) / 0.34; // 0 to 1
      
      // Camera zooms into logo portal at 90-100% of Section 2
      if (section2Progress > 0.9) {
        const portalZoomProgress = (section2Progress - 0.9) / 0.1;
        // Zoom toward logo position (x=2.5, y=0.5, z=0)
        camera.position.x = portalZoomProgress * 2.5;
        camera.position.y = portalZoomProgress * 0.5;
        camera.position.z = 5 - (portalZoomProgress * 6); // Zoom forward
      } else {
        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 5;
      }
    }
    // Section 3 & 4: Conference room and Executive office (67-100% of total scroll)
    // Camera control is handled within Section3Scene directly
    else {
      // Let Section3Scene control the camera during its phases
      // Camera will be at audience view, then sweep to podium
    }
  });
  
  return null;
}

export default function ThreeScene({ scrollProgress, currentSection, binocularsVisible }: ThreeSceneProps) {
  return (
    <Canvas
      className="w-full h-full"
      gl={{
        antialias: true,
        alpha: true, // Transparent so gradient shows through
        powerPreference: "high-performance",
      }}
      dpr={[1, 2]} // Device pixel ratio for sharp rendering
    >
      {/* No background - let HeroSection gradient show through */}
      
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
      
      {/* Camera animation controller */}
      <CameraController scrollProgress={scrollProgress} />
      
      {/* Suspense for lazy loading 3D objects */}
      <Suspense fallback={null}>
        {/* Section 1: Binoculars - Vision (0-33% of total scroll) */}
        {scrollProgress < 0.4 && (
          <Section1Scene 
            scrollProgress={scrollProgress} 
            binocularsVisible={binocularsVisible}
          />
        )}

        {/* Section 2: Workstation Desk - Planning (28-67% of total scroll) */}
        {scrollProgress >= 0.28 && scrollProgress < 0.68 && (
          <Section2Scene scrollProgress={scrollProgress} />
        )}

        {/* Section 3: Conference Room (65-100% of total scroll) */}
        {scrollProgress >= 0.65 && (
          <Section3Scene scrollProgress={scrollProgress} />
        )}

        {/* Section 4: Executive Office (85%+ of total scroll - overlaps with Section 3 fadeout) */}
        {scrollProgress >= 0.85 && (
          <Section4Scene scrollProgress={scrollProgress} />
        )}
      </Suspense>
    </Canvas>
  );
}