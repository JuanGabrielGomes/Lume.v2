"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/animations";

const steps = [
  {
    title: "Estrategia",
    description:
      "Mapeamos objetivos, contexto operacional e metas de crescimento para definir a plataforma certa.",
  },
  {
    title: "Arquitetura",
    description:
      "Estruturamos fluxos, componentes e integracoes para garantir clareza tecnica desde o inicio.",
  },
  {
    title: "Desenvolvimento",
    description:
      "Construimos uma experiencia premium com codigo modular, rapido e preparado para iteracao.",
  },
  {
    title: "Evolucao",
    description:
      "Acompanhamos a plataforma com melhorias continuas, novas automacoes e refinamento constante.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-28 py-28 md:py-36">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="lg:sticky lg:top-24 lg:self-start"
        >
          <span className="section-label">Processo</span>
          <h2 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.04em] text-[#fff7ef] md:text-5xl">
            Um fluxo narrativo para tirar a complexidade do caminho.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-8 text-[var(--muted)]">
            A LUME trabalha em ciclos claros para transformar ambicao digital
            em um produto que cresce com consistencia.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute bottom-3 left-[1.1rem] top-3 w-px bg-white/10" />
          <div className="grid gap-8">
            {steps.map((step, index) => (
              <motion.article
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={fadeUp}
                className="relative rounded-[1.75rem] border border-white/10 bg-white/5 p-6 pl-14 backdrop-blur-xl"
              >
                <div className="absolute left-3 top-7 flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(232,174,107,0.45)] bg-[rgba(232,174,107,0.18)] text-xs font-semibold text-[#fff3e1]">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#fff8f0]">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--muted)]">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
