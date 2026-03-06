"use client";

import { motion } from "framer-motion";
import { InteractivePanel } from "@/components/ui/interactive-panel";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";

const services = [
  {
    title: "Plataformas Web",
    description:
      "Produtos digitais sob medida com UX refinada, arquitetura limpa e foco em conversao.",
  },
  {
    title: "Sistemas Internos",
    description:
      "Ferramentas operacionais para centralizar processos, dados e decisao dentro da empresa.",
  },
  {
    title: "Integracoes",
    description:
      "Conectamos CRM, ERP, gateways e APIs para que a operacao rode sem friccao.",
  },
  {
    title: "Automacao",
    description:
      "Fluxos automatizados que reduzem tarefas manuais e escalam a produtividade com seguranca.",
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
          className="max-w-2xl"
        >
          <span className="section-label">Servicos</span>
          <h2 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.04em] text-[#fff7ef] md:text-5xl">
            Estrutura digital pensada para crescer com sofisticacao.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--muted)]">
            Cada entrega combina design premium, clareza tecnica e uma camada
            operacional que sustenta o negocio no longo prazo.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
          className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
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
