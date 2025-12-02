"use client";

import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";

interface Section3SceneProps {
  scrollProgress: number; // 0 to 1 for entire hero section
}

export default function Section3Scene({ scrollProgress }: Section3SceneProps) {
  const conferenceRef = useRef<THREE.Group>(null);
  const [model, setModel] = useState<THREE.Group | null>(null);

  // Calculate section-specific progress
  // Section 3 would be after Section 2 (adjust based on total sections)
  // For now, placeholder progress calculation
  const sectionProgress = Math.max(0, Math.min(1, (scrollProgress - 0.67) * 3));

  // Load conference room model
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "/models/conferenceroom.glb",
      (gltf) => {
        console.log("Conference room model loaded successfully");
        setModel(gltf.scene);
      },
      (progress) => {
        console.log(`Loading conference room: ${(progress.loaded / progress.total) * 100}%`);
      },
      (error) => {
        console.error("Error loading conference room model:", error);
      }
    );
  }, []);

  // Animation loop
  useFrame(({ clock }) => {
    if (!conferenceRef.current) return;

    const time = clock.getElapsedTime();

    // Entrance animation - room materializes from portal
    if (sectionProgress < 1) {
      // Fade in effect
      conferenceRef.current.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          if (mesh.material) {
            const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
            materials.forEach((mat) => {
              mat.transparent = true;
              mat.opacity = sectionProgress;
            });
          }
        }
      });

      // Slight scale animation (growing effect)
      const scale = 0.8 + (sectionProgress * 0.2);
      conferenceRef.current.scale.set(scale, scale, scale);
    } else {
      // Fully visible
      conferenceRef.current.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          if (mesh.material) {
            const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
            materials.forEach((mat) => {
              mat.transparent = false;
              mat.opacity = 1;
            });
          }
        }
      });

      conferenceRef.current.scale.set(1, 1, 1);

      // Subtle breathing animation
      const breathe = Math.sin(time * 0.3) * 0.01;
      conferenceRef.current.scale.set(1 + breathe, 1 + breathe, 1 + breathe);
    }
  });

  return (
    <group>
      {/* Conference Room Model - Audience Perspective */}
      {model && (
        <primitive
          ref={conferenceRef}
          object={model.clone()}
          position={[0, -2, 0]} // Positioned to view from audience
          rotation={[0, 0, 0]} // Facing the stage
          scale={[0.8, 0.8, 0.8]}
        />
      )}

      {/* Lighting for conference room */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} castShadow />
      <directionalLight position={[-10, 5, -5]} intensity={0.6} />
      
      {/* Stage spotlight effect */}
      <spotLight
        position={[0, 15, 10]}
        angle={0.4}
        penumbra={0.5}
        intensity={1.5}
        castShadow
        target-position={[0, 0, -5]}
      />
      
      {/* Ambient room lighting */}
      <pointLight position={[5, 8, 5]} intensity={0.8} color="#FFFFFF" />
      <pointLight position={[-5, 8, 5]} intensity={0.8} color="#FFFFFF" />
    </group>
  );
}