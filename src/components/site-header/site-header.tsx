"use client";

import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
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
  const wasScrolled = useRef(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    const nextScrolled = value > 18;

    if (nextScrolled !== wasScrolled.current) {
      wasScrolled.current = nextScrolled;
      setScrolled(nextScrolled);
    }
  });

  return (
    <div className="fixed inset-x-0 top-0 z-50 px-2.5 pt-2.5 sm:px-3 sm:pt-3 md:px-4 md:pt-4">
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
        className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 rounded-[1.6rem] border px-3 py-2 sm:rounded-full sm:px-4 sm:py-2.5 md:px-5 md:py-3"
      >
        <a
          href="#main-content"
          aria-label="Lume Web"
          className="flex shrink-0 items-center rounded-full pr-2 sm:pr-3 md:pr-4"
        >
          <Image
            src="/lume-logo-v2-1-header.png"
            alt="Lume Web"
            width={1200}
            height={424}
            priority
            sizes="(max-width: 640px) 148px, (max-width: 1024px) 164px, 180px"
            className="h-8 w-auto max-w-none sm:h-9 md:h-10"
          />
        </a>

        <nav className="hidden items-center gap-3 lg:flex xl:gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-2.5 py-1.5 text-[0.84rem] leading-none text-[var(--muted)] transition-all duration-250 hover:bg-white/[0.06] hover:text-[#fff8f0] xl:text-[0.88rem]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 md:gap-2.5">
          <ButtonLink href="#cta" className="site-header-cta px-3.25 py-2 text-[0.72rem] whitespace-nowrap sm:px-3.5 sm:text-[0.76rem] md:px-4.5 md:py-2.5 md:text-[0.82rem]">
            Criar meu site
          </ButtonLink>
        </div>
      </motion.header>
    </div>
  );
}
