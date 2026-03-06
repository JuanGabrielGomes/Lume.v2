"use client";

import { motion } from "framer-motion";
import { InteractivePanel } from "@/components/ui/interactive-panel";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";

const proofItems = [
  {
    title: "Produto com clareza",
    description:
      "Interfaces que explicam valor rapidamente e sustentam decisoes de compra com confianca.",
  },
  {
    title: "Operacao conectada",
    description:
      "Fluxos internos, integracoes e automacoes organizados para reduzir atrito e retrabalho.",
  },
  {
    title: "Evolucao continua",
    description:
      "Base tecnica modular para iterar com velocidade sem refazer a plataforma a cada etapa.",
  },
];

const audience = ["SaaS", "Operacoes", "Vendas", "Servicos", "B2B"];

export function ProofStripSection() {
  return (
    <section className="pb-16 md:pb-24">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="mb-8 flex flex-col gap-5 rounded-[1.75rem] border border-white/[0.08] bg-black/10 px-6 py-6 backdrop-blur-xl md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--muted)]">
              Estrutura de crescimento
            </p>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-[#fff8f0]">
              LUME projeta a camada digital onde produto, operacao e crescimento
              passam a trabalhar no mesmo ritmo.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {audience.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/[0.08] bg-white/[0.05] px-4 py-2 text-sm text-[var(--muted)]"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
          className="grid gap-5 lg:grid-cols-3"
        >
          {proofItems.map((item) => (
            <motion.div key={item.title} variants={fadeUp}>
              <InteractivePanel className="h-full rounded-[1.75rem] p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-[var(--muted)]">
                  Best-practice layer
                </p>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-[#fff8f0]">
                  {item.title}
                </h3>
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
