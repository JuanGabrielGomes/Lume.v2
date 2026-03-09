"use client";

import type {
  CSSProperties,
  HTMLAttributes,
  MouseEvent as ReactMouseEvent,
} from "react";
import { useUiCapabilities } from "@/lib/ui/use-ui-capabilities";

type InteractivePanelProps = HTMLAttributes<HTMLDivElement>;

type PointerStyle = CSSProperties & {
  "--pointer-x"?: string;
  "--pointer-y"?: string;
};

export function InteractivePanel({
  children,
  className = "",
  onMouseEnter,
  onMouseMove,
  onMouseLeave,
  style,
  ...props
}: InteractivePanelProps) {
  const { enablePanelTilt } = useUiCapabilities();

  const updatePointerState = (
    element: HTMLDivElement,
    clientX: number,
    clientY: number,
  ) => {
    const bounds = element.getBoundingClientRect();
    const x = clientX - bounds.left;
    const y = clientY - bounds.top;
    const xPercent = x / bounds.width;
    const yPercent = y / bounds.height;
    const rotateX = ((y / bounds.height) - 0.5) * -8;
    const rotateY = ((x / bounds.width) - 0.5) * 10;
    const distanceToCenter = Math.hypot(xPercent - 0.5, yPercent - 0.5);
    const intensity = Math.max(0.22, 1 - distanceToCenter * 1.45);

    element.style.setProperty("--pointer-x", `${x}px`);
    element.style.setProperty("--pointer-y", `${y}px`);
    element.style.setProperty("--rotate-x", `${rotateX.toFixed(2)}deg`);
    element.style.setProperty("--rotate-y", `${rotateY.toFixed(2)}deg`);
    element.style.setProperty("--pointer-intensity", intensity.toFixed(3));
  };

  const handleMouseEnter = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (!enablePanelTilt) {
      onMouseEnter?.(event);
      return;
    }

    event.currentTarget.style.setProperty("--panel-translate", "-10px");
    event.currentTarget.style.setProperty("--panel-scale", "1.01");
    event.currentTarget.style.setProperty("--panel-glow-opacity", "1");
    updatePointerState(
      event.currentTarget,
      event.clientX,
      event.clientY,
    );
    onMouseEnter?.(event);
  };

  const handleMouseMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (enablePanelTilt) {
      updatePointerState(
        event.currentTarget,
        event.clientX,
        event.clientY,
      );
    }
    onMouseMove?.(event);
  };

  const handleMouseLeave = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (enablePanelTilt) {
      event.currentTarget.style.setProperty("--pointer-x", "50%");
      event.currentTarget.style.setProperty("--pointer-y", "50%");
      event.currentTarget.style.setProperty("--rotate-x", "0deg");
      event.currentTarget.style.setProperty("--rotate-y", "0deg");
      event.currentTarget.style.setProperty("--panel-translate", "0px");
      event.currentTarget.style.setProperty("--panel-scale", "1");
      event.currentTarget.style.setProperty("--panel-glow-opacity", "0");
      event.currentTarget.style.setProperty("--pointer-intensity", "0.22");
    }
    onMouseLeave?.(event);
  };

  return (
    <div
      data-illuminate={enablePanelTilt ? true : undefined}
      className={`interactive-panel glass-panel group ${className}`.trim()}
      onMouseEnter={enablePanelTilt ? handleMouseEnter : onMouseEnter}
      onMouseMove={enablePanelTilt ? handleMouseMove : onMouseMove}
      onMouseLeave={enablePanelTilt ? handleMouseLeave : onMouseLeave}
      style={style as PointerStyle}
      {...props}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: enablePanelTilt ? "var(--panel-glow-opacity, 0)" : 0,
          background:
            "radial-gradient(440px circle at var(--pointer-x, 50%) var(--pointer-y, 50%), rgba(255, 244, 225, calc(var(--pointer-intensity, 0.22) * 0.22)), rgba(232, 174, 107, calc(var(--pointer-intensity, 0.22) * 0.22)) 24%, transparent 58%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 mix-blend-screen transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(180px circle at var(--pointer-x, 50%) var(--pointer-y, 50%), rgba(255, 249, 240, calc(var(--pointer-intensity, 0.22) * 0.32)), transparent 68%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_35%,transparent_65%,rgba(232,174,107,0.06))] opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(540px circle at 50% 120%, rgba(232, 174, 107, 0.14), transparent 52%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-px rounded-[inherit] border border-white/10"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}