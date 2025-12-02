"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Suspense, useRef, useEffect } from "react";
import * as THREE from "three";
import Section1Scene from "./Section1Scene";
import Section2Scene from "./Section2Scene";

interface ThreeSceneProps {
  scrollProgress: number; // 0 to 1
  currentSection: number; // 0 to 1
  binocularsVisible: boolean; // Controls slide-in animation
}

// Camera controller component
function CameraController({ scrollProgress }: { scrollProgress: number }) {
  const { camera } = useThree();
  
  useFrame(() => {
    // Section 1 progress (0-0.5 of total scroll = first section)
    const section1Progress = Math.min(1, scrollProgress * 2);
    
    // Camera zoom animation for Section 1
    // Phase 1 (0-75%): Camera stays at z=5
    // Phase 2 (75-100%): Camera zooms into lens (z=5 to z=-1)
    if (scrollProgress < 0.5) {
      if (section1Progress > 0.75) {
        const zoomProgress = (section1Progress - 0.75) / 0.25;
        camera.position.z = 5 - (zoomProgress * 6); // 5 to -1
      } else {
        camera.position.z = 5;
      }
    } else {
      // After Section 1, camera stays at final position
      camera.position.z = 5;
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
        {/* Section 1: Binoculars - Vision */}
        {(currentSection === 0 || (currentSection === 1 && scrollProgress < 0.55)) && (
          <Section1Scene 
            scrollProgress={scrollProgress} 
            binocularsVisible={binocularsVisible}
          />
        )}

        {/* Section 2: Workstation Desk - Planning */}
        {(currentSection === 1 || scrollProgress > 0.425) && (
          <Section2Scene scrollProgress={scrollProgress} />
        )}
      </Suspense>
    </Canvas>
  );
}