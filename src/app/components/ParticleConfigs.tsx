// Alternative Particle Configurations
// Copy these into your HeroSection.tsx to try different effects

// ============================================
// OPTION 1: Subtle Network Effect (Recommended)
// ============================================
export const subtleNetworkConfig = {
  background: {
    color: { value: "transparent" },
  },
  fpsLimit: 60,
  particles: {
    color: { value: "#367FFF" },
    links: {
      color: "#367FFF",
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    move: {
      direction: "none" as const,
      enable: true,
      outModes: { default: "bounce" as const },
      random: true,
      speed: 1,
      straight: false,
    },
    number: {
      density: { enable: true, area: 800 },
      value: 80,
    },
    opacity: { value: 0.3 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: true,
};

// ============================================
// OPTION 2: Dense Constellation Effect
// ============================================
export const denseConstellationConfig = {
  background: {
    color: { value: "transparent" },
  },
  fpsLimit: 60,
  particles: {
    color: { value: ["#367FFF", "#0140AE", "#457FCA"] },
    links: {
      color: "#367FFF",
      distance: 120,
      enable: true,
      opacity: 0.3,
      width: 1,
    },
    move: {
      direction: "none" as const,
      enable: true,
      outModes: { default: "out" as const },
      random: false,
      speed: 0.5,
      straight: false,
    },
    number: {
      density: { enable: true, area: 600 },
      value: 120,
    },
    opacity: {
      value: { min: 0.2, max: 0.5 },
      animation: {
        enable: true,
        speed: 0.5,
        sync: false,
      },
    },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 4 } },
  },
  detectRetina: true,
};

// ============================================
// OPTION 3: Floating Particles (No Lines)
// ============================================
export const floatingParticlesConfig = {
  background: {
    color: { value: "transparent" },
  },
  fpsLimit: 60,
  particles: {
    color: { value: "#367FFF" },
    links: {
      enable: false, // No connecting lines
    },
    move: {
      direction: "none" as const,
      enable: true,
      outModes: { default: "bounce" as const },
      random: true,
      speed: 0.8,
      straight: false,
    },
    number: {
      density: { enable: true, area: 800 },
      value: 100,
    },
    opacity: {
      value: { min: 0.1, max: 0.5 },
      animation: {
        enable: true,
        speed: 0.3,
        sync: false,
      },
    },
    shape: { type: "circle" },
    size: { 
      value: { min: 2, max: 6 },
      animation: {
        enable: true,
        speed: 2,
        sync: false,
      },
    },
  },
  detectRetina: true,
};

// ============================================
// OPTION 4: Slow Drift with Glow
// ============================================
export const slowDriftGlowConfig = {
  background: {
    color: { value: "transparent" },
  },
  fpsLimit: 60,
  particles: {
    color: { value: "#367FFF" },
    links: {
      color: "#367FFF",
      distance: 180,
      enable: true,
      opacity: 0.15,
      width: 0.5,
    },
    move: {
      direction: "top" as const,
      enable: true,
      outModes: { default: "out" as const },
      random: false,
      speed: 0.3,
      straight: false,
    },
    number: {
      density: { enable: true, area: 1000 },
      value: 60,
    },
    opacity: {
      value: { min: 0.2, max: 0.6 },
      animation: {
        enable: true,
        speed: 0.5,
        sync: false,
      },
    },
    shape: { type: "circle" },
    size: { 
      value: { min: 1, max: 5 },
      animation: {
        enable: true,
        speed: 1,
        sync: false,
      },
    },
    shadow: {
      blur: 10,
      color: { value: "#367FFF" },
      enable: true,
    },
  },
  detectRetina: true,
};

// ============================================
// OPTION 5: Matrix Rain Effect
// ============================================
export const matrixRainConfig = {
  background: {
    color: { value: "transparent" },
  },
  fpsLimit: 60,
  particles: {
    color: { value: "#367FFF" },
    links: {
      enable: false,
    },
    move: {
      direction: "bottom" as const,
      enable: true,
      outModes: { default: "out" as const },
      random: false,
      speed: 2,
      straight: true,
    },
    number: {
      density: { enable: true, area: 800 },
      value: 150,
    },
    opacity: {
      value: { min: 0.1, max: 0.7 },
    },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: true,
};

// ============================================
// OPTION 6: Responsive Configuration
// (Adjusts based on screen size)
// ============================================
export const getResponsiveConfig = (isMobile: boolean) => ({
  background: {
    color: { value: "transparent" },
  },
  fpsLimit: isMobile ? 30 : 60, // Lower FPS on mobile for performance
  particles: {
    color: { value: "#367FFF" },
    links: {
      color: "#367FFF",
      distance: isMobile ? 100 : 150,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    move: {
      direction: "none" as const,
      enable: true,
      outModes: { default: "bounce" as const },
      random: true,
      speed: isMobile ? 0.5 : 1,
      straight: false,
    },
    number: {
      density: { enable: true, area: 800 },
      value: isMobile ? 40 : 80, // Fewer particles on mobile
    },
    opacity: { value: 0.3 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: true,
});

// ============================================
// USAGE EXAMPLE:
// ============================================
/*
In your HeroSection.tsx, replace the particlesConfig with any of these:

const particlesConfig = subtleNetworkConfig;
// or
const particlesConfig = denseConstellationConfig;
// or
const particlesConfig = floatingParticlesConfig;
// etc.

For responsive config:
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkMobile = () => setIsMobile(window.innerWidth < 768);
  checkMobile();
  window.addEventListener('resize', checkMobile);
  return () => window.removeEventListener('resize', checkMobile);
}, []);

const particlesConfig = getResponsiveConfig(isMobile);
*/