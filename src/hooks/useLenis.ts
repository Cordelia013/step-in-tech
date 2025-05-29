// hooks/useLenis.ts
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

// Make Lenis available globally for other components
declare global {
  interface Window {
    lenis?: Lenis;
  }
}

export const useLenis = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      infinite: false,
    });

    // Make it globally available
    window.lenis = lenis;
    lenisRef.current = lenis;

    // Animation loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      window.lenis = undefined;
      lenis.destroy();
    };
  }, []);

  return lenisRef.current;
};
