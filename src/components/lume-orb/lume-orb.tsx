"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function LumeOrb() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const floatX = useMotionValue(0);
  const floatY = useMotionValue(0);
  const coreX = useSpring(x, { stiffness: 95, damping: 16, mass: 0.9 });
  const coreY = useSpring(y, { stiffness: 95, damping: 16, mass: 0.9 });
  const haloX = useSpring(x, { stiffness: 52, damping: 20, mass: 1.25 });
  const haloY = useSpring(y, { stiffness: 52, damping: 20, mass: 1.25 });
  const [active, setActive] = useState(false);
  const activeElement = useRef<Element | null>(null);

  const orbX = useTransform(() => coreX.get() + floatX.get());
  const orbY = useTransform(() => coreY.get() + floatY.get());
  const haloOffsetX = useTransform(() => haloX.get() + floatX.get() * 1.3);
  const haloOffsetY = useTransform(() => haloY.get() + floatY.get() * 1.3);
  const haloScale = useTransform(() => (active ? 1.18 : 1));
  const coreScale = useTransform(() => (active ? 1.12 : 0.98));
  const haloOpacity = useTransform(() => (active ? 0.95 : 0.72));

  useAnimationFrame((time) => {
    floatX.set(Math.sin(time / 2200) * 10);
    floatY.set(Math.cos(time / 1700) * 12);
  });

  useEffect(() => {
    const setInitialPosition = () => {
      x.set(window.innerWidth * 0.64);
      y.set(window.innerHeight * 0.3);
    };

    setInitialPosition();

    const handleMouseMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const handlePointerState = (event: Event) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const illuminated = target.closest("[data-illuminate]");
      activeElement.current = illuminated;
      setActive(Boolean(illuminated));
    };

    window.addEventListener("resize", setInitialPosition);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handlePointerState);
    document.addEventListener("focusin", handlePointerState);
    document.addEventListener("mouseout", handlePointerState);
    document.addEventListener("focusout", handlePointerState);

    return () => {
      window.removeEventListener("resize", setInitialPosition);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handlePointerState);
      document.removeEventListener("focusin", handlePointerState);
      document.removeEventListener("mouseout", handlePointerState);
      document.removeEventListener("focusout", handlePointerState);
    };
  }, [x, y]);

  useEffect(() => {
    const trackFocusedElement = () => {
      const element = activeElement.current;

      if (!element) {
        return;
      }

      const bounds = element.getBoundingClientRect();
      x.set(bounds.left + bounds.width * 0.65);
      y.set(bounds.top + bounds.height * 0.35);
    };

    if (!active) {
      return;
    }

    trackFocusedElement();
    window.addEventListener("scroll", trackFocusedElement, { passive: true });
    window.addEventListener("resize", trackFocusedElement);

    return () => {
      window.removeEventListener("scroll", trackFocusedElement);
      window.removeEventListener("resize", trackFocusedElement);
    };
  }, [active, x, y]);

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-30 hidden -translate-x-1/2 -translate-y-1/2 mix-blend-screen md:block"
        style={{ x: haloOffsetX, y: haloOffsetY, opacity: haloOpacity }}
      >
        <motion.div
          className="relative h-48 w-48 rounded-full"
          style={{ scale: haloScale }}
        >
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(255,242,225,0.24)_0%,_rgba(232,174,107,0.2)_24%,_rgba(232,174,107,0.08)_44%,_transparent_74%)] blur-3xl" />
          <div className="absolute inset-5 rounded-full bg-[radial-gradient(circle,_rgba(232,174,107,0.42)_0%,_rgba(232,174,107,0.12)_42%,_transparent_72%)] blur-2xl" />
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-40 hidden -translate-x-1/2 -translate-y-1/2 md:block"
        style={{ x: orbX, y: orbY }}
      >
        <motion.div className="relative h-32 w-32 rounded-full" style={{ scale: coreScale }}>
          <div className="orb-float absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(232,174,107,0.35)_0%,_rgba(232,174,107,0.08)_42%,_transparent_72%)] blur-2xl" />
          <div className="orb-pulse lume-orb-core absolute inset-5 rounded-full bg-[radial-gradient(circle,_rgba(255,249,239,0.96)_0%,_rgba(232,174,107,0.78)_26%,_rgba(232,174,107,0.18)_58%,_transparent_100%)] blur-md" />
          <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fff8ef] shadow-[0_0_30px_rgba(255,245,231,0.92)]" />
        </motion.div>
      </motion.div>
    </>
  );
}
