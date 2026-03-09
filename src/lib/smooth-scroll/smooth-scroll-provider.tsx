"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { useUiCapabilities } from "@/lib/ui/use-ui-capabilities";

export function SmoothScrollProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { enableSmoothScroll } = useUiCapabilities();

  useEffect(() => {
    if (!enableSmoothScroll) {
      return;
    }

    const lenis = new Lenis({
      duration: 1,
      lerp: 0.085,
      smoothWheel: true,
      wheelMultiplier: 0.88,
      touchMultiplier: 1,
    });

    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = window.requestAnimationFrame(raf);
    };

    frame = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [enableSmoothScroll]);

  return children;
}