import { CSSProperties, ReactNode } from "react";

type ScaledCanvasProps = {
  /** Width of the Figma frame the children are laid out for. */
  designWidth: number;
  /** Kept for call-site compatibility; the CSS breakpoint is fixed at 1024px. */
  minWidth?: number;
  children: ReactNode;
};

/**
 * Lays children out at a fixed design width and scales the result to the
 * viewport, so desktop screens always show the Figma frame proportionally.
 * Below 1024px children render unscaled (they own their responsive layout).
 *
 * Scaling is pure CSS (`zoom` driven by the `--cw` viewport-width variable set
 * by the inline script in the root layout), so the very first paint is already
 * at the final scale — no zoomed-in flash before hydration.
 */
export default function ScaledCanvas({
  designWidth,
  children,
}: ScaledCanvasProps) {
  return (
    <div
      className="scaled-canvas"
      style={{ "--dw": designWidth } as CSSProperties}
    >
      {children}
    </div>
  );
}
