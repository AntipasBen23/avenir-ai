"use client";

import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";

interface Section2SceneProps {
  scrollProgress: number; // 0 to 1 for entire hero section
}

export default function Section2Scene({ scrollProgress }: Section2SceneProps) {
  const deskRef = useRef<THREE.Group>(null);
  const [model, setModel] = useState<THREE.Group | null>(null);

  // Calculate section-specific progress
  // Section 2 is 0.5-1.0 of total scroll, map to 0-1
  const sectionProgress = Math.max(0, Math.min(1, (scrollProgress - 0.5) * 2));

  // Also need to track Section 1 ending for the approach animation
  // Section 1 ends at 0.5, we want desk to start appearing at 85% of Section 1 (0.425)
  const section1Progress = Math.min(1, scrollProgress * 2);
  const approachProgress = Math.max(0, (section1Progress - 0.85) / 0.15);

  // Load workstation model
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "/models/workstation.glb",
      (gltf) => {
        console.log("Workstation model loaded successfully");
        setModel(gltf.scene);
      },
      (progress) => {
        console.log(`Loading workstation: ${(progress.loaded / progress.total) * 100}%`);
      },
      (error) => {
        console.error("Error loading workstation model:", error);
      }
    );
  }, []);

  // Animation loop
  useFrame(({ clock }) => {
    if (!deskRef.current) return;

    const time = clock.getElapsedTime();

    // Approach animation: Desk starts far away and moves closer
    // This happens at the END of Section 1 (85-100%)
    if (scrollProgress < 0.5) {
      // During Section 1's ending
      const startZ = -50; // Very far away
      const endZ = 0; // Final position
      deskRef.current.position.z = startZ + (approachProgress * (endZ - startZ));
      
      // Keep X position to the left
      deskRef.current.position.x = -2;

      // Also scale up slightly as it approaches
      const startScale = 0.5;
      const endScale = 1;
      const scale = startScale + (approachProgress * (endScale - startScale));
      deskRef.current.scale.set(scale, scale, scale);

      // Fade in
      deskRef.current.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          if (mesh.material) {
            const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
            materials.forEach((mat) => {
              mat.transparent = true;
              mat.opacity = approachProgress;
            });
          }
        }
      });
    } else {
      // During Section 2 proper - desk is fully visible and in position
      deskRef.current.position.x = -2; // Left of center
      deskRef.current.position.z = 0;
      deskRef.current.scale.set(1, 1, 1);

      // Ensure full opacity
      deskRef.current.traverse((child) => {
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

      // Subtle idle animation
      deskRef.current.rotation.y = Math.sin(time * 0.2) * 0.02;
    }
  });

  return (
    <group>
      {/* Workstation Desk Model */}
      {model && (
        <primitive
          ref={deskRef}
          object={model.clone()}
          position={[-2, -1, -50]} // Start far away, positioned to the left
          rotation={[0, Math.PI, 0]} // Rotate 180° - chair backs camera
          scale={[0.5, 0.5, 0.5]} // Start smaller
        />
      )}

      {/* Lighting for desk */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <pointLight position={[-5, 5, -5]} intensity={0.5} color="#FCD34D" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        castShadow
      />
    </group>
  );
}