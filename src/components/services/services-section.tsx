"use client";

import { motion } from "framer-motion";
import { InteractivePanel } from "@/components/ui/interactive-panel";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";

const services = [
  {
    title: "Sites institucionais",
    description:
      "Sites profissionais que apresentam sua empresa, seus serviços e sua proposta de valor com clareza e credibilidade.",
  },
  {
    title: "Landing pages",
    description:
      "Páginas criadas para campanhas, produtos ou serviços, pensadas para transformar visitantes em oportunidades de negócio.",
  },
  {
    title: "E-commerce",
    description:
      "Lojas virtuais rápidas, intuitivas e preparadas para crescer junto com o seu negócio.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-28 py-28 md:py-36">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <span className="section-label">Serviços</span>
          <h2 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.04em] text-[#fff7ef] md:text-5xl">
            O que desenvolvemos
          </h2>
          <p className="mt-5 text-base leading-8 text-[var(--muted)] md:text-lg">
            Criamos sites modernos e bem estruturados para empresas que querem apresentar seus serviços ou vender online.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
          className="mt-12 grid gap-5 md:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={fadeUp}>
              <InteractivePanel className="h-full rounded-[1.75rem] p-6">
                <div className="flex items-center justify-between">
                  <span className="font-display text-4xl text-[#fff3e4]">
                    0{index + 1}
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-[var(--muted)]">
                    Premium
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-[#fff7ef]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {service.description}
                </p>
              </InteractivePanel>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}