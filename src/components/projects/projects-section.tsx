"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button-link";
import { InteractivePanel } from "@/components/ui/interactive-panel";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";

const projects = [
  {
    title: "Pulse Analytics",
    description:
      "Uma plataforma executiva para consolidar indicadores, operacao comercial e previsao de crescimento em tempo real.",
    tags: ["Dashboard", "BI Layer", "Integracoes"],
  },
  {
    title: "Atlas Ops",
    description:
      "Sistema interno para coordenar times, fluxos e processos com automacoes que reduzem retrabalho e aumentam visibilidade.",
    tags: ["Backoffice", "Workflows", "Automacao"],
  },
  {
    title: "Aurora Commerce",
    description:
      "Experiencia digital premium conectando catalogo, CRM e operacao logistica em uma unica camada de produto.",
    tags: ["Commerce", "APIs", "Performance"],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-28 py-28 md:py-36">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <span className="section-label">Projetos</span>
            <h2 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.04em] text-[#fff7ef] md:text-5xl">
              Interfaces e plataformas com presenca de produto, nao de
              template.
            </h2>
          </div>
          <ButtonLink href="#cta" variant="secondary">
            Conversar sobre um projeto
          </ButtonLink>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
          className="mt-12 grid gap-6"
        >
          {projects.map((project, index) => (
            <motion.div key={project.title} variants={fadeUp}>
              <InteractivePanel className="rounded-[2rem] p-8 md:p-10">
                <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                  <div>
                    <div className="inline-flex rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs uppercase tracking-[0.26em] text-[var(--muted)]">
                      Case 0{index + 1}
                    </div>
                    <h3 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-[#fff8f0] md:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)]">
                      {project.description}
                    </p>
                  </div>

                  <div className="rounded-[1.6rem] border border-white/10 bg-black/10 p-6">
                    <p className="text-sm uppercase tracking-[0.28em] text-[var(--muted)]">
                      Componentes-chave
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-[#fff8f0]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </InteractivePanel>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
