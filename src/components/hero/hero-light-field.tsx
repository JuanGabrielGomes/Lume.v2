"use client";

import {
  motion,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useUiCapabilities } from "@/lib/ui/use-ui-capabilities";

const FLOAT_LOOP = {
  duration: 8,
  ease: "easeInOut",
  repeat: Number.POSITIVE_INFINITY,
} as const;

export function HeroLightField({
  activation,
}: {
  activation: MotionValue<number>;
}) {
  const shouldReduceMotion = useReducedMotion();
  const { enablePointerEffects, isMobileViewport } = useUiCapabilities();
  const fieldOpacity = useTransform(activation, [0, 1], isMobileViewport ? [0.12, 0.34] : [0.18, 0.62]);
  const beamOpacity = useTransform(activation, [0, 1], [0.04, isMobileViewport ? 0.1 : 0.18]);
  const beamScale = useTransform(activation, [0, 1], [0.96, 1.04]);
  const haloOpacity = useTransform(activation, [0, 1], isMobileViewport ? [0.05, 0.16] : [0.08, 0.24]);
  const interactiveGlowOpacity = useTransform(activation, [0, 1], isMobileViewport ? [0.08, 0.22] : [0.18, 0.54]);
  const interactiveGlowScale = useTransform(activation, [0, 1], [0.94, 1.08]);
  const glowPosition = enablePointerEffects ? "var(--cursor-x) var(--cursor-y)" : "70% 28%";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(20,18,16,0.28),rgba(12,11,10,0.02)_34%,transparent_64%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,6,6,0.26)_0%,rgba(7,6,6,0)_38%,rgba(7,6,6,0.24)_100%)]" />

      <motion.div
        aria-hidden
        className="absolute inset-[-8%] blur-[90px] md:inset-[-12%] md:blur-[120px]"
        style={{
          opacity: interactiveGlowOpacity,
          scale: interactiveGlowScale,
          background: `
            radial-gradient(
              28rem circle at ${glowPosition},
              rgba(255, 248, 239, 0.2) 0%,
              rgba(232, 174, 107, 0.11) 18%,
              rgba(232, 174, 107, 0.05) 34%,
              transparent 62%
            )
          `,
        }}
      />

      <motion.div
        aria-hidden
        className="absolute inset-[-6%] blur-[110px] md:inset-[-8%] md:blur-[180px]"
        style={{
          opacity: haloOpacity,
          background: `
            radial-gradient(
              42rem circle at ${glowPosition},
              rgba(255, 250, 245, 0.08) 0%,
              rgba(232, 174, 107, 0.03) 24%,
              transparent 58%
            )
          `,
        }}
      />

      <motion.div
        aria-hidden
        className="absolute left-[72%] top-[-4%] hidden h-[64%] w-px -translate-x-1/2 bg-gradient-to-b from-[rgba(255,247,236,0.82)] via-[rgba(232,174,107,0.28)] to-transparent md:block"
        style={{ opacity: beamOpacity, scaleY: beamScale, transformOrigin: "top center" }}
      />

      <motion.div
        aria-hidden
        className="absolute left-[66%] top-[18%] h-[38%] w-[58%] -translate-x-1/2 rounded-[50%] blur-[88px] md:left-[68%] md:top-[14%] md:h-[46%] md:w-[34%] md:blur-[128px]"
        style={{
          opacity: fieldOpacity,
          background:
            `radial-gradient(circle at ${glowPosition}, rgba(255,247,236,0.14) 0%, rgba(232,174,107,0.08) 18%, rgba(232,174,107,0.03) 34%, transparent 62%)`,
        }}
      />

      <motion.div
        aria-hidden
        className="absolute left-[66%] top-[34%] h-[14%] w-[28%] -translate-x-1/2 rounded-[50%] blur-[54px] md:left-[68%] md:h-[18%] md:w-[20%] md:blur-[76px]"
        style={{
          opacity: haloOpacity,
          background:
            "radial-gradient(circle, rgba(255,244,228,0.12) 0%, rgba(232,174,107,0.05) 34%, transparent 74%)",
        }}
      />

      <motion.div
        aria-hidden
        className="absolute right-[8%] top-[16%] hidden h-[24rem] w-[15rem] rounded-[2rem] border border-white/[0.05] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.015))] opacity-80 shadow-[0_24px_120px_rgba(7,6,5,0.2)] backdrop-blur-[22px] lg:block"
        animate={
          shouldReduceMotion || !enablePointerEffects
            ? undefined
            : { y: [0, -10, 0], rotate: [1.8, -1, 1.8] }
        }
        transition={FLOAT_LOOP}
      />

      <motion.div
        aria-hidden
        className="absolute inset-x-[12%] bottom-[14%] h-12 rounded-full blur-[56px] md:inset-x-[20%] md:bottom-[16%] md:h-16 md:blur-[72px]"
        style={{
          opacity: haloOpacity,
          background:
            "radial-gradient(circle, rgba(232,174,107,0.14) 0%, rgba(232,174,107,0.04) 34%, transparent 74%)",
        }}
      />
    </div>
  );
}