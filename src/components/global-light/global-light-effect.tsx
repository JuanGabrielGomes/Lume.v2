"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useUiCapabilities } from "@/lib/ui/use-ui-capabilities";

export function GlobalLightEffect() {
  const shouldReduceMotion = useReducedMotion();
  const { enablePointerEffects } = useUiCapabilities();

  if (!enablePointerEffects) {
    return null;
  }

  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: shouldReduceMotion ? 0.45 : 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none fixed inset-0 z-20 hidden md:block"
      style={{
        background: `
          radial-gradient(
            34rem circle at var(--cursor-x, 50%) var(--cursor-y, 50%),
            rgba(255, 244, 225, calc(var(--cursor-glow, 0.16) * 0.26)),
            rgba(232, 174, 107, calc(var(--cursor-glow, 0.16) * 0.18)) 18%,
            rgba(232, 174, 107, calc(var(--cursor-glow, 0.16) * 0.08)) 30%,
            transparent 62%
          ),
          radial-gradient(
            58rem circle at var(--cursor-x, 50%) var(--cursor-y, 50%),
            rgba(255, 248, 238, calc(var(--cursor-glow, 0.16) * 0.08)),
            transparent 58%
          )
        `,
      }}
    />
  );
}