"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useSpring,
  useVelocity,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useUiCapabilities } from "@/lib/ui/use-ui-capabilities";

export function LumeOrb() {
  const shouldReduceMotion = useReducedMotion();
  const { enablePointerEffects } = useUiCapabilities();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const floatX = useMotionValue(0);
  const floatY = useMotionValue(0);
  const coreX = useSpring(x, {
    stiffness: shouldReduceMotion ? 220 : 82,
    damping: shouldReduceMotion ? 34 : 17,
    mass: shouldReduceMotion ? 0.5 : 1,
  });
  const coreY = useSpring(y, {
    stiffness: shouldReduceMotion ? 220 : 82,
    damping: shouldReduceMotion ? 34 : 17,
    mass: shouldReduceMotion ? 0.5 : 1,
  });
  const haloX = useSpring(x, {
    stiffness: shouldReduceMotion ? 180 : 46,
    damping: shouldReduceMotion ? 30 : 18,
    mass: shouldReduceMotion ? 0.7 : 1.45,
  });
  const haloY = useSpring(y, {
    stiffness: shouldReduceMotion ? 180 : 46,
    damping: shouldReduceMotion ? 30 : 18,
    mass: shouldReduceMotion ? 0.7 : 1.45,
  });
  const [active, setActive] = useState(false);
  const activeRef = useRef(false);
  const activeElement = useRef<Element | null>(null);
  const velocityX = useVelocity(coreX);
  const velocityY = useVelocity(coreY);
  const moveFrame = useRef<number | null>(null);
  const pendingPoint = useRef<{ x: number; y: number } | null>(null);

  const orbX = useTransform(() => coreX.get() + (shouldReduceMotion ? 0 : floatX.get()));
  const orbY = useTransform(() => coreY.get() + (shouldReduceMotion ? 0 : floatY.get()));
  const haloOffsetX = useTransform(
    () => haloX.get() + (shouldReduceMotion ? 0 : floatX.get() * 1.3),
  );
  const haloOffsetY = useTransform(
    () => haloY.get() + (shouldReduceMotion ? 0 : floatY.get() * 1.3),
  );
  const haloScale = useTransform(() => (active ? 1.22 : 1));
  const coreScale = useTransform(() => {
    const velocity = Math.min(
      1,
      (Math.abs(velocityX.get()) + Math.abs(velocityY.get())) / 2200,
    );

    return (active ? 1.12 : 0.98) + velocity * 0.04;
  });
  const coreRotate = useTransform(
    () => Math.max(-10, Math.min(10, velocityX.get() / 180)),
  );
  const haloOpacity = useTransform(() => (active ? 0.98 : 0.68));
  const glowStrength = useTransform(() => (active ? 0.26 : 0.16));

  useAnimationFrame((time) => {
    if (shouldReduceMotion || !enablePointerEffects) {
      return;
    }

    floatX.set(Math.sin(time / 2200) * 10);
    floatY.set(Math.cos(time / 1700) * 12);
  });

  useMotionValueEvent(orbX, "change", (value) => {
    document.documentElement.style.setProperty("--cursor-x", `${value}px`);
  });

  useMotionValueEvent(orbY, "change", (value) => {
    document.documentElement.style.setProperty("--cursor-y", `${value}px`);
  });

  useMotionValueEvent(glowStrength, "change", (value) => {
    document.documentElement.style.setProperty("--cursor-glow", value.toFixed(3));
  });

  useEffect(() => {
    if (!enablePointerEffects) {
      document.documentElement.style.setProperty("--cursor-x", "50%");
      document.documentElement.style.setProperty("--cursor-y", "30%");
      document.documentElement.style.setProperty("--cursor-glow", "0.12");
      return;
    }

    const setInitialPosition = () => {
      const initialX = window.innerWidth * 0.64;
      const initialY = window.innerHeight * 0.3;

      x.set(initialX);
      y.set(initialY);
      document.documentElement.style.setProperty("--cursor-x", `${initialX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${initialY}px`);
      document.documentElement.style.setProperty("--cursor-glow", activeRef.current ? "0.26" : "0.16");
    };

    const flushPoint = () => {
      if (!pendingPoint.current) {
        moveFrame.current = null;
        return;
      }

      x.set(pendingPoint.current.x);
      y.set(pendingPoint.current.y);
      pendingPoint.current = null;
      moveFrame.current = null;
    };

    const handleMouseMove = (event: MouseEvent) => {
      pendingPoint.current = { x: event.clientX, y: event.clientY };

      if (moveFrame.current === null) {
        moveFrame.current = window.requestAnimationFrame(flushPoint);
      }
    };

    const syncActive = (illuminated: Element | null) => {
      activeElement.current = illuminated;
      activeRef.current = Boolean(illuminated);
      setActive(Boolean(illuminated));
    };

    const handlePointerState = (event: Event) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        syncActive(null);
        return;
      }

      syncActive(target.closest("[data-illuminate]"));
    };

    setInitialPosition();
    window.addEventListener("resize", setInitialPosition);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handlePointerState);
    document.addEventListener("focusin", handlePointerState);
    document.addEventListener("mouseout", handlePointerState);
    document.addEventListener("focusout", handlePointerState);

    return () => {
      if (moveFrame.current !== null) {
        window.cancelAnimationFrame(moveFrame.current);
      }
      window.removeEventListener("resize", setInitialPosition);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handlePointerState);
      document.removeEventListener("focusin", handlePointerState);
      document.removeEventListener("mouseout", handlePointerState);
      document.removeEventListener("focusout", handlePointerState);
      document.documentElement.style.removeProperty("--cursor-x");
      document.documentElement.style.removeProperty("--cursor-y");
      document.documentElement.style.removeProperty("--cursor-glow");
    };
  }, [enablePointerEffects, x, y]);

  useEffect(() => {
    if (!enablePointerEffects) {
      return;
    }

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
  }, [active, enablePointerEffects, x, y]);

  if (!enablePointerEffects) {
    return null;
  }

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
        <motion.div
          className="relative h-32 w-32 rounded-full"
          style={{ rotate: coreRotate, scale: coreScale }}
        >
          <div className="orb-float absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(232,174,107,0.35)_0%,_rgba(232,174,107,0.08)_42%,_transparent_72%)] blur-2xl" />
          <div className="orb-pulse lume-orb-core absolute inset-5 rounded-full bg-[radial-gradient(circle,_rgba(255,249,239,0.96)_0%,_rgba(232,174,107,0.78)_26%,_rgba(232,174,107,0.18)_58%,_transparent_100%)] blur-md" />
          <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fff8ef] shadow-[0_0_30px_rgba(255,245,231,0.92)]" />
        </motion.div>
      </motion.div>
    </>
  );
}