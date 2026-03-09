"use client";

import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/button-link";

const links = [
  { href: "#services", label: "Serviços" },
  { href: "#why-lume", label: "Tecnologia" },
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
    <div className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-4 md:pt-4">
      <motion.header
        initial={false}
        animate={{
          borderColor: scrolled ? "rgba(243, 240, 235, 0.16)" : "rgba(243, 240, 235, 0.08)",
          backgroundColor: scrolled ? "rgba(56, 49, 45, 0.74)" : "rgba(56, 49, 45, 0.34)",
          boxShadow: scrolled
            ? "0 24px 80px rgba(10, 8, 6, 0.24), inset 0 1px 0 rgba(255,255,255,0.08)"
            : "0 10px 32px rgba(10, 8, 6, 0.08), inset 0 1px 0 rgba(255,255,255,0.04)",
          backdropFilter: scrolled ? "blur(24px) saturate(140%)" : "blur(16px) saturate(120%)",
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border px-3 py-2.5 md:px-6 md:py-3"
      >
        <a
          href="#main-content"
          aria-label="Lume Web"
          className="flex shrink-0 items-center rounded-full pr-2 md:pr-3"
        >
          <Image
            src="/lume-logo-v2-1-header.png"
            alt="Lume Web"
            width={1200}
            height={902}
            priority
            sizes="(max-width: 640px) 124px, (max-width: 768px) 138px, 164px"
            className="h-7 w-auto max-w-none sm:h-8 md:h-9"
          />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm text-[var(--muted)] transition-all duration-250 hover:bg-white/[0.06] hover:text-[#fff8f0]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="#projects"
            className="hidden rounded-full px-3 py-2 text-sm text-[var(--muted)] transition-all duration-250 hover:bg-white/[0.06] hover:text-[#fff8f0] md:block"
          >
            Ver projetos
          </a>
          <ButtonLink href="#cta" className="px-4 py-2.5 text-[0.72rem] md:px-5 md:py-3 md:text-sm">
            Criar meu site
          </ButtonLink>
        </div>
      </motion.header>
    </div>
  );
}