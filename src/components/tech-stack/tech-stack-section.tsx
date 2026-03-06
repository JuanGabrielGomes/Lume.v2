"use client";

import { motion } from "framer-motion";
import { InteractivePanel } from "@/components/ui/interactive-panel";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";

const technologies = [
  "Next.js",
  "React",
  "Node.js",
  "APIs",
  "Automacao",
  "Cloud Infrastructure",
];

export function TechStackSection() {
  return (
    <section id="technology" className="scroll-mt-28 py-20 md:py-28">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <span className="section-label">Tecnologia</span>
            <h2 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.04em] text-[#fff7ef] md:text-5xl">
              Engenharia moderna para produtos com desempenho, escala e
              controle.
            </h2>
          </div>
          <p className="max-w-lg text-base leading-8 text-[var(--muted)]">
            Escolhemos ferramentas que aceleram o produto sem comprometer
            legibilidade, manutencao ou evolucao futura.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {technologies.map((tech) => (
            <motion.div key={tech} variants={fadeUp}>
              <InteractivePanel className="rounded-[1.5rem] px-5 py-6">
                <div className="flex items-center justify-between gap-5">
                  <span className="text-xl font-semibold tracking-[-0.03em] text-[#fff8f0]">
                    {tech}
                  </span>
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E8AE6B] shadow-[0_0_18px_rgba(232,174,107,0.9)]" />
                </div>
              </InteractivePanel>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
