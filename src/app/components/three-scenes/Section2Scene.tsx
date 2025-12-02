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
  const logoRef = useRef<THREE.Mesh>(null);
  const portalRef = useRef<THREE.Mesh>(null);
  const [model, setModel] = useState<THREE.Group | null>(null);

  // Calculate section-specific progress
  // Section 2 is 33-67% of total scroll (0.33-0.67), map to 0-1
  const sectionProgress = Math.max(0, Math.min(1, (scrollProgress - 0.33) / 0.34));

  // Also need to track Section 1 ending for the approach animation
  // Section 1 is 0-33%, approach at 85-100% of Section 1
  const section1Progress = Math.min(1, scrollProgress / 0.33);
  const approachProgress = Math.max(0, (section1Progress - 0.85) / 0.15);

  // Load workstation model
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "/models/workstation.glb",
      (gltf) => {
        console.log("Workstation model loaded successfully");
        // Rotate the model 180 degrees on load (starting position)
        gltf.scene.rotation.y = Math.PI;
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

    // During Section 2
    if (scrollProgress >= 0.33) {
      deskRef.current.position.x = 0;

      // Phase 1 (0-30% of Section 2): APPROACH from distance
      if (sectionProgress < 0.3) {
        const approachPhase = sectionProgress / 0.3; // 0 to 1 for first 30%
        
        // No rotation yet, stays at 180° (back facing)
        deskRef.current.rotation.y = Math.PI;
        
        // Approach from far away (z: -30 → 0)
        deskRef.current.position.z = -30 + (approachPhase * 30);
        
        // Scale from small to normal (0.8 → 1.5)
        const scale = 0.8 + (approachPhase * 0.7);
        deskRef.current.scale.set(scale, scale, scale);
        
        // Full opacity during approach
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
      }
      // Phase 2 (30-50% of Section 2): ROTATION + SCALE
      else if (sectionProgress < 0.5) {
        const rotationPhaseProgress = (sectionProgress - 0.3) / 0.2; // 0 to 1 for 30-50%
        
        // 180° rotation during this phase
        deskRef.current.rotation.y = Math.PI + (rotationPhaseProgress * Math.PI);
        
        // Stay at z = 0
        deskRef.current.position.z = 0;
        
        // Scale from 1.5 to 3
        const scale = 1.5 + (rotationPhaseProgress * 1.5);
        deskRef.current.scale.set(scale, scale, scale);
        
        // Full opacity during rotation
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
      } 
      // Phase 3 (50-100% of Section 2): SHIFT FORWARD + FADE while logo grows
      else {
        const shiftPhaseProgress = (sectionProgress - 0.5) / 0.5; // 0 to 1 for second half
        
        // STOP rotation at 360° (0°)
        deskRef.current.rotation.y = Math.PI * 2;
        
        // Keep scale at max (3)
        deskRef.current.scale.set(3, 3, 3);
        
        // SHIFT FORWARD toward camera (z increases from 0 to 5)
        deskRef.current.position.z = shiftPhaseProgress * 5;
        
        // GRADUALLY FADE OUT as it shifts forward
        const fadeAmount = 1 - shiftPhaseProgress; // 1 → 0
        deskRef.current.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            if (mesh.material) {
              const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
              materials.forEach((mat) => {
                mat.transparent = true;
                mat.opacity = fadeAmount;
              });
            }
          }
        });
      }
    }
    // Before Section 2 starts (still in Section 1)
    else {
      // Keep desk hidden far away
      deskRef.current.position.x = 0;
      deskRef.current.position.z = -50;
      deskRef.current.scale.set(0.5, 0.5, 0.5);
      deskRef.current.rotation.y = Math.PI;
      
      deskRef.current.traverse((child) => {
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

    // Logo animation - appears at 50% of Section 2 scroll
    if (logoRef.current && sectionProgress >= 0.5) {
      const logoProgress = (sectionProgress - 0.5) / 0.5; // 0 to 1 for second half

      // Position logo on the RIGHT side of desk (was left)
      // Adjust these values based on your actual desk model dimensions
      logoRef.current.position.x = 2.5; // RIGHT side (positive X)
      logoRef.current.position.y = 0.5; // On top of desk
      logoRef.current.position.z = 0;

      // Logo grows continuously from 0.5 to 6 (becomes HUGE portal)
      const logoScale = 0.5 + (logoProgress * 5.5);
      logoRef.current.scale.set(logoScale, logoScale, logoScale);

      // Fade in logo quickly
      const logoMaterial = logoRef.current.material as THREE.MeshBasicMaterial;
      logoMaterial.opacity = Math.min(1, logoProgress * 3); // Fades in fast

      // Rotate logo slightly for visual interest
      logoRef.current.rotation.z = time * 0.5;
    }

    // Portal effect (glowing ring around logo as it gets bigger)
    if (portalRef.current && sectionProgress >= 0.75) {
      const portalProgress = (sectionProgress - 0.75) / 0.25;
      
      portalRef.current.position.copy(logoRef.current?.position || new THREE.Vector3(2.5, 0.5, 0));
      portalRef.current.rotation.z = time * 2;
      
      const portalScale = 0.5 + (portalProgress * 6);
      portalRef.current.scale.set(portalScale, portalScale, 1);
      
      const portalMaterial = portalRef.current.material as THREE.MeshBasicMaterial;
      portalMaterial.opacity = portalProgress * 0.6;
    }
  });

  return (
    <group>
      {/* Workstation Desk Model */}
      {model && (
        <primitive
          ref={deskRef}
          object={model.clone()}
          position={[0, -1, -50]}
          scale={[1, 1, 1]}
        />
      )}

      {/* Avenir AI Logo "A" - appears at 50% of Section 2 on RIGHT side */}
      {sectionProgress >= 0.5 && (
        <mesh ref={logoRef} position={[2.5, 0.5, 0]}>
          {/* Simple "A" shape using a cone geometry - replace with actual logo texture */}
          <coneGeometry args={[0.5, 1, 3]} />
          <meshBasicMaterial
            color="#60A5FA"
            transparent
            opacity={0}
          />
        </mesh>
      )}

      {/* Portal ring effect around logo */}
      {sectionProgress >= 0.75 && (
        <mesh ref={portalRef} position={[2.5, 0.5, 0]}>
          <ringGeometry args={[0.8, 1.2, 32]} />
          <meshBasicMaterial
            color="#00d9ff"
            transparent
            opacity={0}
            blending={THREE.AdditiveBlending}
            side={THREE.DoubleSide}
          />
        </mesh>
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