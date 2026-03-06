"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/button-link";

const links = [
  { href: "#services", label: "Servicos" },
  { href: "#technology", label: "Tecnologia" },
  { href: "#process", label: "Processo" },
  { href: "#projects", label: "Projetos" },
];

export function SiteHeader() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    setScrolled(value > 18);
  });

  return (
    <div className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <motion.header
        initial={false}
        animate={{
          borderColor: scrolled ? "rgba(243, 240, 235, 0.14)" : "rgba(243, 240, 235, 0.08)",
          backgroundColor: scrolled ? "rgba(52, 46, 42, 0.76)" : "rgba(52, 46, 42, 0.36)",
          boxShadow: scrolled
            ? "0 24px 80px rgba(10, 8, 6, 0.24)"
            : "0 10px 32px rgba(10, 8, 6, 0.08)",
          backdropFilter: scrolled ? "blur(24px)" : "blur(16px)",
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border px-4 py-3 md:px-6"
      >
        <a
          href="#main-content"
          className="flex items-center gap-3 rounded-full pr-3 text-sm font-semibold tracking-[0.22em] text-[#fff8f0]"
        >
          <span className="font-display text-2xl tracking-[0.08em]">Lume</span>
          <span className="h-2.5 w-2.5 rounded-full bg-[#E8AE6B] shadow-[0_0_18px_rgba(232,174,107,0.9)]" />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--muted)] transition-colors duration-200 hover:text-[#fff8f0]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#projects"
            className="hidden text-sm text-[var(--muted)] transition-colors duration-200 hover:text-[#fff8f0] md:block"
          >
            Ver cases
          </a>
          <ButtonLink href="#cta" className="px-5 py-3 text-xs md:text-sm">
            Solicitar projeto
          </ButtonLink>
        </div>
      </motion.header>
    </div>
  );
}
