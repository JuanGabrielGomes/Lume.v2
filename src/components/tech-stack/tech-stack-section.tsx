"use client";

import { motion } from "framer-motion";
import { InteractivePanel } from "@/components/ui/interactive-panel";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";

const differentiators = [
  {
    title: "Performance",
    description: "Cada projeto é desenvolvido com foco em performance, estabilidade e experiência do usuário.",
  },
  {
    title: "Estrutura",
    description: "Criamos sites rápidos, bem estruturados e preparados para evoluir junto com a sua empresa.",
  },
  {
    title: "Clareza",
    description: "Um bom site não é apenas visual. Ele precisa ser organizado e fácil de navegar.",
  },
  {
    title: "Experiência",
    description: "Cada projeto é pensado para apresentar sua empresa com clareza e oferecer uma experiência simples para quem visita.",
  },
];

export function TechStackSection() {
  return (
    <section id="why-lume" className="scroll-mt-28 py-20 md:py-28">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-3xl">
            <span className="section-label">Tecnologia</span>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.04em] text-[#fff7ef] sm:text-4xl md:mt-6 md:text-5xl">
              Tecnologia moderna e bem aplicada.
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)] md:mt-5 md:text-lg md:leading-8">
              Cada projeto é desenvolvido com foco em performance, estabilidade e experiência do usuário. Criamos sites rápidos, bem estruturados e preparados para evoluir junto com a sua empresa.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
          className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 xl:grid-cols-4"
        >
          {differentiators.map((item) => (
            <motion.div key={item.title} variants={fadeUp}>
              <InteractivePanel className="h-full rounded-[1.3rem] px-4 py-5 md:rounded-[1.5rem] md:px-5 md:py-6">
                <div className="flex items-center justify-between gap-5">
                  <span className="text-xl font-semibold tracking-[-0.03em] text-[#fff8f0]">
                    {item.title}
                  </span>
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E8AE6B] shadow-[0_0_18px_rgba(232,174,107,0.9)]" />
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {item.description}
                </p>
              </InteractivePanel>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
