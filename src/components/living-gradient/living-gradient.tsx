"use client";

import { motion, useReducedMotion } from "framer-motion";

const blobs = [
  {
    className:
      "left-[-12rem] top-[-8rem] h-[28rem] w-[28rem] bg-[radial-gradient(circle,_rgba(232,174,107,0.28),_rgba(232,174,107,0)_70%)] md:h-[40rem] md:w-[40rem]",
    animate: {
      x: [0, 110, 40, -20, 0],
      y: [0, 70, 130, 40, 0],
      scale: [1, 1.14, 0.94, 1.08, 1],
      opacity: [0.58, 0.76, 0.48, 0.7, 0.58],
      rotate: [0, 12, -10, 6, 0],
    },
    transition: { duration: 34, delay: 0 },
  },
  {
    className:
      "right-[-16rem] top-[8rem] h-[24rem] w-[24rem] bg-[radial-gradient(circle,_rgba(243,240,235,0.18),_rgba(243,240,235,0)_72%)] md:h-[36rem] md:w-[36rem]",
    animate: {
      x: [0, -90, -25, -120, 0],
      y: [0, 110, -35, 30, 0],
      scale: [1, 0.92, 1.1, 0.98, 1],
      opacity: [0.36, 0.48, 0.28, 0.44, 0.36],
      rotate: [0, -8, 14, -6, 0],
    },
    transition: { duration: 42, delay: -8 },
  },
  {
    className:
      "bottom-[-14rem] left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 bg-[radial-gradient(circle,_rgba(232,174,107,0.18),_rgba(232,174,107,0)_70%)] md:h-[38rem] md:w-[38rem]",
    animate: {
      x: [0, -70, 85, 20, 0],
      y: [0, -100, -20, -75, 0],
      scale: [1, 1.12, 0.88, 1.04, 1],
      opacity: [0.44, 0.66, 0.4, 0.58, 0.44],
      rotate: [0, 6, -12, 10, 0],
    },
    transition: { duration: 38, delay: -16 },
  },
];

export function LivingGradient() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-40 overflow-hidden"
    >
      {blobs.map((blob) => (
        <motion.div
          key={blob.className}
          className={`absolute rounded-full blur-[130px] md:blur-[190px] ${blob.className}`}
          animate={shouldReduceMotion ? undefined : blob.animate}
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  ...blob.transition,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "mirror",
                  ease: [0.44, 0.05, 0.18, 0.98],
                }
          }
        />
      ))}
      <div className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,_rgba(255,241,220,0.08),_transparent_55%)] blur-[120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0),_rgba(14,10,8,0.12)_72%,_rgba(14,10,8,0.32)_100%)]" />
    </div>
  );
}
