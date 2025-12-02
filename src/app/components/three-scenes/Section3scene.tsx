"use client";

import { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";

interface Section3SceneProps {
  scrollProgress: number; // 0 to 1 for entire hero section
}

// Logo image paths
const logos = [
  "/logos/harvard.png",
  "/logos/harvard-medical.png",
  "/logos/martin-trust.png",
  "/logos/mec.png",
  "/logos/mit-100k.png",
  "/logos/mit-delta.png",
];

export default function Section3Scene({ scrollProgress }: Section3SceneProps) {
  const conferenceRef = useRef<THREE.Group>(null);
  const screenRef = useRef<THREE.Mesh>(null);
  const [model, setModel] = useState<THREE.Group | null>(null);
  const [logoTextures, setLogoTextures] = useState<THREE.Texture[]>([]);
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const { camera } = useThree();
  const lastLogoChangeTime = useRef(0);

  // Calculate section-specific progress (67-100% of total scroll -> 0-1)
  const sectionProgress = Math.max(0, Math.min(1, (scrollProgress - 0.67) / 0.33));

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

  // Load logo textures
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const loadedTextures: THREE.Texture[] = [];

    logos.forEach((logoPath, index) => {
      textureLoader.load(
        logoPath,
        (texture) => {
          loadedTextures[index] = texture;
          if (loadedTextures.filter(Boolean).length === logos.length) {
            setLogoTextures(loadedTextures);
          }
        },
        undefined,
        (error) => {
          console.error(`Error loading logo ${logoPath}:`, error);
        }
      );
    });
  }, []);

  // Animation loop
  useFrame(({ clock }) => {
    if (!conferenceRef.current) return;

    const time = clock.getElapsedTime();

    // Logo carousel rotation (every 4 seconds) - only during phase 2
    if (sectionProgress >= 0.3 && sectionProgress < 0.7 && logoTextures.length > 0) {
      if (time - lastLogoChangeTime.current > 4) {
        setCurrentLogoIndex((prev) => (prev + 1) % logos.length);
        lastLogoChangeTime.current = time;
      }
    }

    // Update screen material with current logo
    if (screenRef.current && logoTextures[currentLogoIndex]) {
      const material = screenRef.current.material as THREE.MeshStandardMaterial;
      material.map = logoTextures[currentLogoIndex];
      material.needsUpdate = true;
    }

    // Phase 1 (0-30%): Model shifts up to center and starts scaling
    if (sectionProgress < 0.3) {
      const phase1Progress = sectionProgress / 0.3;
      
      // Shift up from -2 to 0 (center)
      const yPosition = -2 + (phase1Progress * 2);
      conferenceRef.current.position.y = yPosition;
      
      // Start scaling up slightly (0.8 → 1.2)
      const scale = 0.8 + (phase1Progress * 0.4);
      conferenceRef.current.scale.set(scale, scale, scale);
      
      // Camera starts at back of audience
      camera.position.set(0, 3, 15); // Back row view
      camera.lookAt(0, 0, -5); // Looking toward stage
      
      // Full opacity
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
    }
    // Phase 2 (30-70%): Model scales bigger, camera sweeps forward and down
    else if (sectionProgress < 0.7) {
      const phase2Progress = (sectionProgress - 0.3) / 0.4;
      
      // Keep model centered
      conferenceRef.current.position.y = 0;
      
      // Scale up significantly (1.2 → 2.5) - getting much closer
      const scale = 1.2 + (phase2Progress * 1.3);
      conferenceRef.current.scale.set(scale, scale, scale);
      
      // Camera sweep: moves forward (z: 15 → 2) and down (y: 3 → 1)
      const cameraZ = 15 - (phase2Progress * 13); // 15 → 2
      const cameraY = 3 - (phase2Progress * 2); // 3 → 1
      camera.position.set(0, cameraY, cameraZ);
      
      // Camera gradually looks more down at podium
      const lookAtY = 0 - (phase2Progress * 1); // 0 → -1
      camera.lookAt(0, lookAtY, -5);
      
      // Full opacity
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
    }
    // Phase 3 (70-100%): Camera at podium, scene fades out
    else {
      const phase3Progress = (sectionProgress - 0.7) / 0.3;
      
      // Keep model at max scale
      conferenceRef.current.scale.set(2.5, 2.5, 2.5);
      conferenceRef.current.position.y = 0;
      
      // Camera stays at podium
      camera.position.set(0, 1, 2);
      camera.lookAt(0, 0, -5);
      
      // Fade out scene (for transition to Section 4)
      conferenceRef.current.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          if (mesh.material) {
            const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
            materials.forEach((mat) => {
              mat.transparent = true;
              mat.opacity = 1 - phase3Progress;
            });
          }
        }
      });
    }
  });

  return (
    <group>
      {/* Conference Room Model */}
      {model && (
        <primitive
          ref={conferenceRef}
          object={model.clone()}
          position={[0, -2, 0]} // Starts lower, will shift up
          rotation={[0, 0, 0]}
          scale={[0.8, 0.8, 0.8]} // Starts smaller
        />
      )}

      {/* Podium Screen - shows logos as texture */}
      {sectionProgress >= 0.3 && sectionProgress < 0.7 && (
        <mesh ref={screenRef} position={[0, 0.75, 2]} rotation={[0, 0, 0]}>
          <planeGeometry args={[1.8, 0.7]} />
          <meshStandardMaterial 
            map={logoTextures[currentLogoIndex]}
            emissive="#1a1a1a"
            emissiveIntensity={0.3}
            side={2}
          />
        </mesh>
      )}

      {/* Lighting for conference room */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.0} castShadow />
      <directionalLight position={[-10, 5, -5]} intensity={0.5} />
      
      {/* Podium spotlight - illuminates the stage area */}
      <spotLight
        position={[0, 8, -4]}
        angle={0.5}
        penumbra={0.5}
        intensity={1.8}
        castShadow
        target-position={[0, 0, -4]}
        color="#ffffff"
      />
      
      {/* Audience area lighting */}
      <pointLight position={[5, 5, 5]} intensity={0.6} color="#FFFFFF" />
      <pointLight position={[-5, 5, 5]} intensity={0.6} color="#FFFFFF" />
      
      {/* Screen glow effect */}
      <pointLight position={[0, 0.5, -3.5]} intensity={0.8} color="#60A5FA" />
    </group>
  );
}