"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useUiCapabilities } from "@/lib/ui/use-ui-capabilities";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const prefersReducedMotion = useReducedMotion();
  const { supportsHover, isMobileViewport } = useUiCapabilities();
  const buttonClass =
    variant === "primary" ? "primary-button" : "secondary-button";
  const enableHoverMotion = supportsHover && !prefersReducedMotion;
  const enableArrowLoop = variant === "primary" && !prefersReducedMotion && !isMobileViewport;

  return (
    <motion.a
      data-illuminate
      href={href}
      whileHover={
        enableHoverMotion
          ? {
              y: -3,
              scale: variant === "primary" ? 1.025 : 1.015,
            }
          : undefined
      }
      whileTap={{ scale: 0.985, y: -1 }}
      transition={{ type: "spring", stiffness: 340, damping: 24, mass: 0.7 }}
      className={`${buttonClass} group relative overflow-hidden ${className}`.trim()}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_15%,rgba(255,255,255,0.34)_50%,transparent_85%)] opacity-0 transition-all duration-700 group-hover:translate-x-[140%] group-hover:opacity-100"
        style={{ transform: "translateX(-140%)" }}
      />
      <span className="relative z-10 flex items-center gap-2">
        <span>{children}</span>
        <motion.span
          aria-hidden
          className="text-base leading-none"
          initial={false}
          animate={enableArrowLoop ? { x: [0, 4, 0] } : { x: 0 }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
            repeat: enableArrowLoop ? Number.POSITIVE_INFINITY : 0,
            repeatDelay: 2.8,
          }}
        >
          {"->"}
        </motion.span>
      </span>
    </motion.a>
  );
}
