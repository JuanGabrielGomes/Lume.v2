"use client";

import { useEffect, useState } from "react";

type UiCapabilities = {
  isMobileViewport: boolean;
  prefersReducedMotion: boolean;
  supportsHover: boolean;
  finePointer: boolean;
  saveData: boolean;
  enableSmoothScroll: boolean;
  enablePointerEffects: boolean;
  enableAmbientCanvas: boolean;
  enablePanelTilt: boolean;
};

const defaultCapabilities: UiCapabilities = {
  isMobileViewport: false,
  prefersReducedMotion: false,
  supportsHover: false,
  finePointer: false,
  saveData: false,
  enableSmoothScroll: false,
  enablePointerEffects: false,
  enableAmbientCanvas: false,
  enablePanelTilt: false,
};

type ConnectionLike = {
  saveData?: boolean;
  addEventListener?: (type: "change", listener: () => void) => void;
  removeEventListener?: (type: "change", listener: () => void) => void;
};

function getConnection() {
  return (navigator as Navigator & { connection?: ConnectionLike }).connection;
}

function readCapabilities(): UiCapabilities {
  if (typeof window === "undefined") {
    return defaultCapabilities;
  }

  const isMobileViewport = window.matchMedia("(max-width: 767px)").matches;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const supportsHover = window.matchMedia("(hover: hover)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const connection = getConnection();
  const saveData = Boolean(connection?.saveData);
  const enablePointerEffects =
    !isMobileViewport && !prefersReducedMotion && supportsHover && finePointer;

  return {
    isMobileViewport,
    prefersReducedMotion,
    supportsHover,
    finePointer,
    saveData,
    enableSmoothScroll: !isMobileViewport && !prefersReducedMotion,
    enablePointerEffects,
    enableAmbientCanvas: !isMobileViewport && !prefersReducedMotion && !saveData,
    enablePanelTilt: !prefersReducedMotion && supportsHover && finePointer,
  };
}

export function useUiCapabilities() {
  const [capabilities, setCapabilities] = useState<UiCapabilities>(defaultCapabilities);

  useEffect(() => {
    const mediaQueries = [
      window.matchMedia("(max-width: 767px)"),
      window.matchMedia("(prefers-reduced-motion: reduce)"),
      window.matchMedia("(hover: hover)"),
      window.matchMedia("(pointer: fine)"),
    ];
    const connection = getConnection();
    const updateCapabilities = () => {
      setCapabilities(readCapabilities());
    };

    updateCapabilities();
    window.addEventListener("resize", updateCapabilities, { passive: true });
    mediaQueries.forEach((query) => query.addEventListener("change", updateCapabilities));
    connection?.addEventListener?.("change", updateCapabilities);

    return () => {
      window.removeEventListener("resize", updateCapabilities);
      mediaQueries.forEach((query) => query.removeEventListener("change", updateCapabilities));
      connection?.removeEventListener?.("change", updateCapabilities);
    };
  }, []);

  return capabilities;
}