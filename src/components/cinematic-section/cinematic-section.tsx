"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export function CinematicSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const firstOpacity = useTransform(
    scrollYProgress,
    [0.08, 0.3, 0.52],
    [0, 1, 0.2],
  );
  const firstY = useTransform(scrollYProgress, [0.08, 0.32, 0.52], [90, 0, -60]);
  const secondOpacity = useTransform(
    scrollYProgress,
    [0.45, 0.7, 0.92],
    [0, 1, 0.2],
  );
  const secondY = useTransform(
    scrollYProgress,
    [0.45, 0.72, 0.92],
    [90, 0, -60],
  );
  const ambientScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.08, 1.2]);
  const ambientOpacity = useTransform(scrollYProgress, [0.08, 0.45, 0.9], [0, 0.9, 0.2]);
  const firstScale = useTransform(scrollYProgress, [0.08, 0.32, 0.52], [0.94, 1, 1.04]);
  const secondScale = useTransform(scrollYProgress, [0.45, 0.72, 0.92], [0.92, 1, 1.05]);
  const firstBlur = useTransform(scrollYProgress, [0.08, 0.28, 0.55], [12, 0, 18]);
  const secondBlur = useTransform(scrollYProgress, [0.42, 0.72, 0.96], [18, 0, 14]);
  const trackScale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.7, 1, 0.84]);
  const trackOpacity = useTransform(scrollYProgress, [0.12, 0.5, 0.9], [0.28, 1, 0.24]);
  const labelOpacity = useTransform(scrollYProgress, [0.04, 0.14, 0.24], [0, 1, 0]);
  const labelY = useTransform(scrollYProgress, [0.04, 0.18, 0.26], [20, 0, -30]);
  const firstFilter = useMotionTemplate`blur(${firstBlur}px)`;
  const secondFilter = useMotionTemplate`blur(${secondBlur}px)`;

  return (
    <section ref={ref} className="relative h-[220vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <div className="section-shell relative text-center">
          <motion.div
            aria-hidden
            style={{ scale: ambientScale, opacity: ambientOpacity }}
            className="cinematic-vignette absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full md:h-[42rem] md:w-[42rem]"
          />
          <motion.div
            aria-hidden
            style={{ scaleX: trackScale, opacity: trackOpacity }}
            className="absolute left-1/2 top-1/2 h-px w-[min(70vw,42rem)] -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(232,174,107,0.75),transparent)]"
          />
          <motion.p
            style={{ opacity: labelOpacity, y: labelY }}
            className="absolute left-1/2 top-[22%] -translate-x-1/2 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[var(--muted)]"
          >
            Narrative Scroll
          </motion.p>
          <motion.p
            style={{
              opacity: firstOpacity,
              y: firstY,
              scale: firstScale,
              filter: firstFilter,
            }}
            className="mx-auto max-w-5xl text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#fff8f0] sm:text-5xl lg:text-7xl"
          >
            Empresas nao precisam apenas de sites.
          </motion.p>

          <motion.p
            style={{
              opacity: secondOpacity,
              y: secondY,
              scale: secondScale,
              filter: secondFilter,
            }}
            className="text-gradient absolute left-1/2 top-1/2 mx-auto w-full max-w-5xl -translate-x-1/2 px-6 text-balance text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-7xl"
          >
            Precisam de plataformas.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
