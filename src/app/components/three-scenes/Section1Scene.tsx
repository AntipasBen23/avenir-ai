"use client";

import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";

interface Section1SceneProps {
  scrollProgress: number; // 0 to 1 for entire hero section
  binocularsVisible: boolean; // Controls slide-in animation
}

export default function Section1Scene({ scrollProgress, binocularsVisible }: Section1SceneProps) {
  const binocularsRef = useRef<THREE.Group>(null);
  const portalRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const [model, setModel] = useState<THREE.Group | null>(null);

  // Calculate section-specific progress (0 to 1 for just Section 1)
  const sectionProgress = Math.min(1, scrollProgress * 2); // First 50% of total scroll (2 sections)

  // Load binoculars model
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "/models/binoculars.glb",
      (gltf) => {
        console.log("Binoculars model loaded successfully");
        
        // Apply special materials to lenses for glassy effect
        gltf.scene.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            
            // Check if this is a lens (you might need to adjust the name)
            // Common lens names: "lens", "glass", "Lens", "Glass", "Eye"
            const isLens = mesh.name.toLowerCase().includes('lens') || 
                          mesh.name.toLowerCase().includes('glass') ||
                          mesh.name.toLowerCase().includes('eye');
            
            if (isLens) {
              // Create glassy, reflective material for lenses
              mesh.material = new THREE.MeshPhysicalMaterial({
                color: '#60A5FA', // Light blue tint
                metalness: 0.1,
                roughness: 0.05,
                transmission: 0.9, // Glass-like transparency
                thickness: 0.5,
                envMapIntensity: 1.5,
                clearcoat: 1,
                clearcoatRoughness: 0.1,
                ior: 1.5, // Index of refraction (glass)
              });
            }
          }
        });
        
        setModel(gltf.scene);
      },
      (progress) => {
        console.log(`Loading binoculars: ${(progress.loaded / progress.total) * 100}%`);
      },
      (error) => {
        console.error("Error loading binoculars model:", error);
      }
    );
  }, []);

  // Animation loop
  useFrame(({ clock }) => {
    if (!binocularsRef.current) return;

    const time = clock.getElapsedTime();

    // Slide-in animation (only happens once when binocularsVisible becomes true)
    if (binocularsVisible) {
      const slideProgress = Math.min(1, time * 3); // Quick slide-in (0.33 seconds)
      const slideOffset = (1 - slideProgress) * 3; // Starts at z = -3, ends at 0
      binocularsRef.current.position.z = -slideOffset;
    }

    // Phase 1: Rotation (0-50% of section)
    // Rotate binoculars to face lens toward camera
    const rotationProgress = Math.min(sectionProgress * 2, 1);
    binocularsRef.current.rotation.y = rotationProgress * Math.PI;

    // Add subtle floating animation (reduced movement)
    binocularsRef.current.rotation.z = Math.sin(time * 0.5) * 0.02; // Reduced from 0.05
    binocularsRef.current.position.y = Math.sin(time * 0.3) * 0.05; // Reduced from 0.1

    // Phase 2: Scale/Enlarge (0-100% of section)
    // Binoculars grow from scale 2.5 to 6.5
    const scaleValue = 2.5 + sectionProgress * 4; // Starts at 2.5, grows to 6.5
    binocularsRef.current.scale.set(scaleValue, scaleValue, scaleValue);

    // Phase 3: Fade out (85-100% of section)
    if (sectionProgress > 0.85) {
      const fadeProgress = (sectionProgress - 0.85) / 0.15;
      binocularsRef.current.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          if (mesh.material) {
            // Handle both single material and array of materials
            const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
            materials.forEach((mat) => {
              mat.transparent = true;
              mat.opacity = 1 - fadeProgress;
            });
          }
        }
      });
    }

    // Portal/Vortex effect (75-100% of section)
    if (portalRef.current && sectionProgress > 0.75) {
      const portalProgress = (sectionProgress - 0.75) / 0.25;
      portalRef.current.rotation.z = time * 2;
      portalRef.current.scale.setScalar(portalProgress * 3);

      const material = portalRef.current.material as THREE.MeshBasicMaterial;
      material.opacity = portalProgress * 0.5;
    }

    // Portal glow effect
    if (glowRef.current && sectionProgress > 0.75) {
      const glowProgress = (sectionProgress - 0.75) / 0.25;
      const material = glowRef.current.material as THREE.MeshBasicMaterial;
      material.opacity = glowProgress * 0.3;
    }
  });

  return (
    <group>
      {/* Binoculars Model - Centered and larger */}
      {model && (
        <primitive
          ref={binocularsRef}
          object={model.clone()}
          position={[0, 0, 0]} // Perfectly centered
          scale={[2.5, 2.5, 2.5]} // Start at 2.5x size (reduced from 3)
        />
      )}

      {/* Cyan Lens Glow Effect - Left lens */}
      <mesh position={[-0.3, 0, 0.5]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshBasicMaterial
          color="#00d9ff"
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Cyan Lens Glow Effect - Right lens */}
      <mesh position={[0.3, 0, 0.5]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshBasicMaterial
          color="#00d9ff"
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Outer glow rings for lenses */}
      <mesh position={[-0.3, 0, 0.5]}>
        <ringGeometry args={[0.15, 0.2, 32]} />
        <meshBasicMaterial
          color="#00d9ff"
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh position={[0.3, 0, 0.5]}>
        <ringGeometry args={[0.15, 0.2, 32]} />
        <meshBasicMaterial
          color="#00d9ff"
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Portal/Vortex Effect - torus ring spinning */}
      <mesh ref={portalRef} position={[0, 0, 0.5]}>
        <torusGeometry args={[1, 0.2, 16, 100]} />
        <meshBasicMaterial
          color="#60A5FA"
          transparent
          opacity={0}
          blending={THREE.AdditiveBlending}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Portal glow sphere */}
      <mesh ref={glowRef} position={[0, 0, 0.5]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshBasicMaterial
          color="#3B82F6"
          transparent
          opacity={0}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Enhanced lighting for binoculars visibility */}
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
      <directionalLight position={[-5, -5, -5]} intensity={0.8} />
      <pointLight position={[0, 5, 0]} intensity={1} color="#ffffff" />
      <pointLight position={[0, -5, 0]} intensity={0.6} color="#60A5FA" />
    </group>
  );
}