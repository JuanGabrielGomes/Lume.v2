"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HeroLightField } from "@/components/hero/hero-light-field";
import { ButtonLink } from "@/components/ui/button-link";
import { InteractivePanel } from "@/components/ui/interactive-panel";
import { easeOutExpo } from "@/lib/animations";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const lampActivation = useTransform(scrollYProgress, [0, 0.22], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden pb-24 pt-36"
    >
      <HeroLightField activation={lampActivation} />

      <div className="section-shell relative z-10 grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.72fr)]">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.4 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.4 }}
            className="mb-6 inline-flex items-center gap-3 text-[0.78rem] font-medium uppercase tracking-[0.26em] text-[rgba(243,240,235,0.58)]"
          >
            <span className="h-2 w-2 rounded-full bg-[#E8AE6B] shadow-[0_0_20px_rgba(232,174,107,0.75)]" />
            Desenvolvimento Web & Design Digital
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.4 }}
            className="max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#F6F2EC] sm:text-6xl lg:text-[5.4rem]"
          >
            Sites profissionais para empresas que querem crescer.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.6 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-[rgba(243,240,235,0.68)] md:text-[1.22rem]"
          >
            Desenvolvemos sites institucionais, landing pages e e-commerces modernos,
            rápidos e bem estruturados para pequenas e médias empresas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.8 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <ButtonLink href="#cta">Criar meu site</ButtonLink>
            <ButtonLink href="#projects" variant="secondary">
              Ver projetos
            </ButtonLink>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <InteractivePanel className="rounded-[2rem] p-6">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <span className="text-[0.72rem] uppercase tracking-[0.24em] text-[rgba(243,240,235,0.52)]">
                Lume Web
              </span>
              <span className="h-2.5 w-2.5 rounded-full bg-[#E8AE6B]/80 shadow-[0_0_18px_rgba(232,174,107,0.6)]" />
            </div>
            <div className="space-y-4 pt-5">
              {[
                "Sites institucionais",
                "Landing pages",
                "E-commerce",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-[1.4rem] border border-white/[0.07] bg-[rgba(255,255,255,0.035)] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                >
                  <div className="text-[0.68rem] uppercase tracking-[0.24em] text-[rgba(243,240,235,0.38)]">
                    0{index + 1}
                  </div>
                  <div className="mt-2 text-lg font-medium tracking-[-0.03em] text-[#F4EFE8]">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </InteractivePanel>
        </motion.div>
      </div>
    </section>
  );
}