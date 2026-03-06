"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button-link";
import { InteractivePanel } from "@/components/ui/interactive-panel";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";

const highlights = [
  "Arquitetura pensada para escalar com clareza.",
  "UX premium para produtos que precisam vender confianca.",
  "Operacao conectada com integracoes e automacao.",
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center pb-24 pt-36">
      <div className="section-shell grid items-center gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(340px,0.8fr)]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp} className="section-label mb-6">
            <span className="h-2 w-2 rounded-full bg-[#E8AE6B] shadow-[0_0_20px_rgba(232,174,107,0.75)]" />
            LUME Studio
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-balance font-sans text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#FFF8F0] sm:text-6xl lg:text-7xl"
          >
            Plataformas web que iluminam o crescimento da sua empresa
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl"
          >
            Desenvolvemos sistemas e plataformas sob medida para empresas que
            querem evoluir digitalmente.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <ButtonLink href="#cta">Solicitar projeto</ButtonLink>
            <ButtonLink href="#projects" variant="secondary">
              Ver projetos
            </ButtonLink>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap gap-3 text-sm text-[var(--muted)]"
          >
            {["UX premium", "Arquitetura sob medida", "APIs e automacao"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/[0.08] bg-white/[0.05] px-4 py-2"
                >
                  {item}
                </span>
              ),
            )}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
          className="relative"
        >
          <div className="absolute -left-8 top-8 hidden h-24 w-24 rounded-full bg-[radial-gradient(circle,_rgba(232,174,107,0.65),_transparent_68%)] blur-2xl lg:block" />

          <motion.div
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-sm text-[var(--muted)] backdrop-blur-xl"
          >
            <span className="font-display text-2xl font-semibold leading-none text-[#fff5e7]">
              Lu
            </span>
            <span className="h-3 w-3 rounded-full bg-[#E8AE6B] shadow-[0_0_18px_rgba(232,174,107,0.9)]" />
            <span className="font-display text-2xl font-semibold leading-none text-[#fff5e7]">
              me
            </span>
          </motion.div>

          <InteractivePanel className="rounded-[2rem] p-7 md:p-8">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-[var(--muted)]">
                  Digital Product Layer
                </p>
                <h2 className="mt-3 max-w-sm text-3xl font-semibold tracking-[-0.03em] text-[#fff7ee]">
                  Sistemas com presenca premium e operacao real.
                </h2>
              </div>
              <div className="hidden rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)] md:block">
                Since 2026
              </div>
            </div>

            <div className="mt-10 grid gap-4">
              {highlights.map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  className="flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-black/10 px-5 py-4"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#E8AE6B]" />
                  <p className="text-sm leading-7 text-[var(--muted)]">{item}</p>
                </motion.div>
              ))}
            </div>
          </InteractivePanel>
        </motion.div>
      </div>
    </section>
  );
}
