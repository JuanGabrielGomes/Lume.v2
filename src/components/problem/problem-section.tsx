"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/animations";

export function ProblemSection() {
  return (
    <section id="problem" className="scroll-mt-28 py-24 md:py-32">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="grid gap-10 border-t border-white/[0.08] pt-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-16"
        >
          <div className="lg:sticky lg:top-24 lg:self-start">
            <span className="section-label">Problema</span>
            <h2 className="mt-5 max-w-xl text-balance text-3xl font-semibold tracking-[-0.04em] text-[#fff7ef] sm:text-4xl md:mt-6 md:text-5xl">
              Muitas empresas perdem oportunidades porque a presença digital não acompanha a qualidade do negócio.
            </h2>
          </div>

          <div className="grid gap-5 md:gap-6">
            <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl md:rounded-[1.7rem] md:p-7">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[rgba(243,240,235,0.48)]">
                O que acontece
              </p>
              <div className="mt-4 space-y-4 text-base leading-7 text-[var(--muted)] md:text-[1.08rem] md:leading-8">
                <p>
                  Quando alguém procura pelos seus serviços, o site costuma ser o primeiro lugar onde essa pessoa decide se sua empresa transmite confiança ou não.
                </p>
                <p>
                  Se esse contato passa uma imagem confusa, desatualizada ou amadora, a empresa perde atenção, credibilidade e espaço para concorrentes mais bem apresentados.
                </p>
              </div>
            </div>

            <div className="rounded-[1.35rem] border border-[rgba(232,174,107,0.16)] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5 backdrop-blur-xl md:rounded-[1.7rem] md:p-7">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[rgba(232,174,107,0.72)]">
                Como resolvemos
              </p>
              <div className="mt-4 space-y-4 text-base leading-7 text-[var(--muted)] md:text-[1.08rem] md:leading-8">
                <p>
                  Criamos sites que organizam melhor a comunicação da empresa, apresentam seus serviços com clareza e reforçam uma presença digital mais profissional.
                </p>
                <p>
                  O resultado é um site mais confiável, mais fácil de navegar e mais preparado para transformar visitas em oportunidades reais de negócio.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
