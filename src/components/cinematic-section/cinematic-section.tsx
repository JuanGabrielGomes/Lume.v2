"use client";

import {
  motion,
  useMotionTemplate,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const storyMoments = [
  {
    text: "Empresas não precisam apenas existir online.",
    range: [0.02, 0.16, 0.28, 0.4] as const,
  },
  {
    text: "Precisam de presença digital profissional.",
    range: [0.3, 0.44, 0.58, 0.72] as const,
  },
  {
    text: "Um bom site faz diferença.",
    range: [0.62, 0.76, 0.9, 1] as const,
  },
];

function StorySlide({
  progress,
  text,
  range,
  highlighted = false,
}: {
  progress: ReturnType<typeof useSpring>;
  text: string;
  range: readonly [number, number, number, number];
  highlighted?: boolean;
}) {
  const opacity = useTransform(progress, [...range], [0, 1, 1, 0]);
  const y = useTransform(progress, [...range], [64, 0, -8, -92]);
  const scale = useTransform(progress, [...range], [0.94, 1, 1.03, 1.08]);
  const blur = useTransform(progress, [...range], [18, 0, 0, 22]);
  const filter = useMotionTemplate`blur(${blur}px)`;

  return (
    <motion.div
      style={{ opacity, y, scale, filter }}
      className={`absolute left-1/2 top-1/2 w-full max-w-6xl -translate-x-1/2 -translate-y-1/2 px-6 ${
        highlighted ? "text-gradient" : "text-[#fff8f0]"
      }`}
    >
      <h2 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-7xl">
        {text}
      </h2>
    </motion.div>
  );
}

export function CinematicSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.32,
  });

  const ambientScale = useTransform(smoothProgress, [0, 0.5, 1], [0.84, 1.08, 1.22]);
  const ambientOpacity = useTransform(smoothProgress, [0, 0.45, 1], [0.24, 0.95, 0.2]);
  const trackScale = useTransform(smoothProgress, [0, 0.5, 1], [0.72, 1, 0.76]);
  const trackOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.12, 0.92, 0.12]);
  const stageY = useTransform(smoothProgress, [0, 1], ["-5%", "5%"]);
  const ringOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.08, 0.34, 0.08]);
  const ringScale = useTransform(smoothProgress, [0, 0.5, 1], [0.88, 1.06, 1.12]);
  const vignetteBlur = useTransform(smoothProgress, [0, 0.5, 1], [60, 84, 64]);
  const vignetteFilter = useMotionTemplate`blur(${vignetteBlur}px)`;

  return (
    <section ref={ref} className="relative h-[260vh] scroll-mt-28 md:h-[320vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <motion.div className="section-shell relative text-center" style={{ y: stageY }}>
          <motion.div
            aria-hidden
            style={{ scale: ambientScale, opacity: ambientOpacity, filter: vignetteFilter }}
            className="cinematic-vignette absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full md:h-[42rem] md:w-[42rem]"
          />
          <motion.div
            aria-hidden
            style={{ scaleX: trackScale, opacity: trackOpacity }}
            className="absolute left-1/2 top-1/2 h-px w-[min(70vw,42rem)] -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(232,174,107,0.75),transparent)]"
          />
          <motion.div
            aria-hidden
            style={{ opacity: ringOpacity, scale: ringScale }}
            className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08] md:h-[30rem] md:w-[30rem]"
          />
          {storyMoments.map((moment, index) => (
            <StorySlide
              key={moment.text}
              progress={smoothProgress}
              text={moment.text}
              range={moment.range}
              highlighted={index === 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}