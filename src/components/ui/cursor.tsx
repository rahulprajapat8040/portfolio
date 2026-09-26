"use client";
import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR = "a, button, [data-cursor]";

export function AnimatedCursor() {
  const dotRef = useRef<HTMLSpanElement>(null);
  const ringRef = useRef<HTMLSpanElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    document.documentElement.classList.add("has-custom-cursor");
    let frame = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let ringX = targetX;
    let ringY = targetY;

    const render = () => {
      ringX += (targetX - ringX) * 0.16;
      ringY += (targetY - ringY) * 0.16;
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frame = window.requestAnimationFrame(render);
    };

    const onPointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      ring.classList.add("is-visible");
      dot.classList.add("is-visible");
    };
    const onPointerOver = (event: PointerEvent) => {
      const target =
        event.target instanceof Element
          ? event.target.closest<HTMLElement>(INTERACTIVE_SELECTOR)
          : null;
      if (!target) return;
      const text =
        target.dataset["cursor"] ?? (target.matches("a") ? "OPEN" : "SELECT");
      label.textContent = text;
      ring.classList.add("is-active");
    };
    const onPointerOut = (event: PointerEvent) => {
      const next =
        event.relatedTarget instanceof Element
          ? event.relatedTarget.closest(INTERACTIVE_SELECTOR)
          : null;
      if (next) return;
      ring.classList.remove("is-active");
      label.textContent = "";
    };
    const onPointerDown = () => ring.classList.add("is-pressed");
    const onPointerUp = () => ring.classList.remove("is-pressed");
    const onWindowOut = (event: MouseEvent) => {
      if (event.relatedTarget) return;
      ring.classList.remove("is-visible", "is-active");
      dot.classList.remove("is-visible");
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerover", onPointerOver, { passive: true });
    window.addEventListener("pointerout", onPointerOut, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    window.addEventListener("mouseout", onWindowOut);
    frame = window.requestAnimationFrame(render);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerover", onPointerOver);
      window.removeEventListener("pointerout", onPointerOut);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("mouseout", onWindowOut);
    };
  }, []);

  return (
    <div className="cursor-layer" aria-hidden="true">
      <span ref={ringRef} className="cursor-ring">
        <span ref={labelRef} className="cursor-label" />
      </span>
      <span ref={dotRef} className="cursor-dot" />
    </div>
  );
}
