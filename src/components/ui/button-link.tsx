"use client";

import { motion } from "framer-motion";

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
  const buttonClass =
    variant === "primary" ? "primary-button" : "secondary-button";

  return (
    <motion.a
      data-illuminate
      href={href}
      whileHover={{
        y: -3,
        scale: variant === "primary" ? 1.025 : 1.015,
      }}
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
          animate={{ x: variant === "primary" ? [0, 4, 0] : 0 }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 2.8,
          }}
        >
          ↗
        </motion.span>
      </span>
    </motion.a>
  );
}
