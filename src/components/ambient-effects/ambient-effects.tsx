"use client";

import dynamic from "next/dynamic";
import { GlobalLightEffect } from "@/components/global-light/global-light-effect";
import { LivingGradient } from "@/components/living-gradient/living-gradient";
import { LumeOrb } from "@/components/lume-orb/lume-orb";

const EtherealBackground = dynamic(
  () => import("@/components/ethereal-background/ethereal-background").then((mod) => mod.EtherealBackground),
  { ssr: false, loading: () => null },
);

export function AmbientEffects() {
  return (
    <>
      <LivingGradient />
      <EtherealBackground />
      <GlobalLightEffect />
      <LumeOrb />
    </>
  );
}