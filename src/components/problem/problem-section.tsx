"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/animations";

export function ProblemSection() {
  return (
    <section className="scroll-mt-28 py-24 md:py-32">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="grid gap-10 border-t border-white/[0.08] pt-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16"
        >
          <div className="lg:sticky lg:top-24 lg:self-start">
            <span className="section-label">Explicação</span>
            <h2 className="mt-6 max-w-xl text-balance text-4xl font-semibold tracking-[-0.04em] text-[#fff7ef] md:text-5xl">
              O site da sua empresa é muitas vezes o primeiro contato com um cliente.
            </h2>
          </div>

          <div className="max-w-3xl space-y-6 text-lg leading-8 text-[var(--muted)] md:text-[1.22rem]">
            <p>
              Quando alguém procura pelos seus serviços, o site costuma ser o primeiro lugar onde essa pessoa decide se sua empresa transmite confiança ou não.
            </p>
            <p>
              Um site bem desenvolvido apresenta sua empresa com clareza, transmite credibilidade e facilita que novos clientes encontrem você.
            </p>
            <p className="text-[#f4eee6]">É isso que construímos.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}