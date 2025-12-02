"use client";

import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";

interface Section4SceneProps {
  scrollProgress: number; // 0 to 1 for entire hero section
}

export default function Section4Scene({ scrollProgress }: Section4SceneProps) {
  const officeRef = useRef<THREE.Group>(null);
  const [model, setModel] = useState<THREE.Group | null>(null);

  // Calculate section-specific progress
  // Section 4 starts fading in when Section 3 is at 70% (scrollProgress ~0.88)
  const section3Progress = Math.max(0, Math.min(1, (scrollProgress - 0.67) / 0.33));
  const fadeInStart = 0.7; // Start fading in at 70% of Section 3
  const fadeInProgress = Math.max(0, Math.min(1, (section3Progress - fadeInStart) / (1 - fadeInStart)));

  // Load executive office model
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "/models/executiveoffice.glb",
      (gltf) => {
        console.log("Executive office model loaded successfully");
        setModel(gltf.scene);
      },
      (progress) => {
        console.log(`Loading executive office: ${(progress.loaded / progress.total) * 100}%`);
      },
      (error) => {
        console.error("Error loading executive office model:", error);
      }
    );
  }, []);

  // Animation loop
  useFrame(({ clock }) => {
    if (!officeRef.current) return;

    const time = clock.getElapsedTime();

    // Fade in and approach from far away during overlap with Section 3
    if (fadeInProgress > 0) {
      // Approach from far away (z: -20 → 0) - reduced distance for better visibility
      const zPosition = -20 + (fadeInProgress * 20);
      officeRef.current.position.z = zPosition;
      
      // Scale up as it approaches (0.8 → 1.2) - starts larger
      const scale = 0.8 + (fadeInProgress * 0.4);
      officeRef.current.scale.set(scale, scale, scale);
      
      // Fade in opacity
      officeRef.current.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          if (mesh.material) {
            const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
            materials.forEach((mat) => {
              mat.transparent = true;
              mat.opacity = fadeInProgress;
            });
          }
        }
      });
    } else {
      // Keep hidden far away before fade in
      officeRef.current.position.z = -20;
      officeRef.current.scale.set(0.8, 0.8, 0.8);
      
      officeRef.current.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          if (mesh.material) {
            const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
            materials.forEach((mat) => {
              mat.transparent = true;
              mat.opacity = 0;
            });
          }
        }
      });
    }

    // Subtle breathing animation when fully visible
    if (fadeInProgress >= 1) {
      const breathe = Math.sin(time * 0.3) * 0.01;
      const baseScale = 1.2;
      officeRef.current.scale.set(baseScale + breathe, baseScale + breathe, baseScale + breathe);
      officeRef.current.position.z = 0;
    }
  });

  return (
    <group>
      {/* Executive Office Model */}
      {model && (
        <primitive
          ref={officeRef}
          object={model.clone()}
          position={[0, 0, -20]} // Starts far away (reduced from -30)
          rotation={[0, 0, 0]}
          scale={[0.8, 0.8, 0.8]} // Starts larger (increased from 0.5)
        />
      )}

      {/* Lighting for executive office */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
      <directionalLight position={[-5, 5, -5]} intensity={0.7} />
      
      {/* Warm office lighting */}
      <pointLight position={[3, 5, 2]} intensity={1} color="#FCD34D" />
      <pointLight position={[-3, 5, 2]} intensity={0.8} color="#FFFFFF" />
      
      {/* Desk lamp effect */}
      <spotLight
        position={[2, 3, 1]}
        angle={0.6}
        penumbra={0.8}
        intensity={1.2}
        color="#FBBF24"
        castShadow
      />
    </group>
  );
}