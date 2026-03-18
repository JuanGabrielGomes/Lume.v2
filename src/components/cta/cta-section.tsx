"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button-link";
import { fadeUp, viewport } from "@/lib/animations";

export function CtaSection() {
  return (
    <section id="cta" className="pb-24 pt-14 md:pb-32">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="glass-panel relative overflow-hidden rounded-[1.6rem] px-5 py-12 text-center md:rounded-[2.25rem] md:px-10 md:py-24"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(232,174,107,0.18),_transparent_42%)]" />
          <div className="orb-float orb-pulse relative mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-[radial-gradient(circle,_rgba(255,247,234,0.94),_rgba(232,174,107,0.88)_28%,_rgba(232,174,107,0.16)_70%,_transparent_100%)] shadow-[0_0_56px_rgba(232,174,107,0.3)] md:mb-8 md:h-24 md:w-24 md:shadow-[0_0_70px_rgba(232,174,107,0.35)]">
            <div className="h-4 w-4 rounded-full bg-[#fff6ea]" />
          </div>

          <h2 className="mx-auto max-w-3xl text-balance text-3xl font-semibold tracking-[-0.04em] text-[#fff9f2] sm:text-4xl md:text-6xl">
            Vamos criar o site que sua empresa precisa.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[rgba(243,240,235,0.72)] md:mt-6 md:text-lg md:leading-8">
            Se sua empresa precisa de um site profissional para apresentar seus serviços ou vender online, podemos ajudar.
          </p>

          <div className="mt-10 flex justify-center">
            <ButtonLink href="mailto:contato@lume.dev">Começar projeto</ButtonLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
