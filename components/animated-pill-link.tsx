"use client";

import { animate, useReducedMotion } from "motion/react";
import type { AnchorHTMLAttributes, PointerEvent, ReactNode } from "react";
import { useRef, useState } from "react";

type AnimatedPillLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

const fillEase = [0.3, 1, 0.3, 1] as [number, number, number, number];

export function AnimatedPillLink({ children, className = "", ...props }: AnimatedPillLinkProps) {
  const fillRef = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(false);

  const enter = () => {
    setActive(true);

    if (!fillRef.current) return;
    if (reduceMotion) {
      fillRef.current.style.transform = "translate3d(0, 0, 0)";
      return;
    }

    animate(fillRef.current, { y: ["76%", "0%"] }, { duration: 0.6, ease: fillEase });
  };

  const leave = () => {
    setActive(false);

    if (!fillRef.current) return;
    if (reduceMotion) {
      fillRef.current.style.transform = "translate3d(0, 76%, 0)";
      return;
    }

    animate(fillRef.current, { y: "-76%" }, { duration: 0.6, ease: fillEase });
  };

  const handlePointerEnter = (event: PointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType !== "touch") enter();
  };

  const handlePointerLeave = (event: PointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType !== "touch") leave();
  };

  return (
    <a
      {...props}
      className={`animatedPill ${className}`.trim()}
      data-active={active}
      onBlur={leave}
      onFocus={enter}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <span className="animatedPillFill" ref={fillRef} aria-hidden="true" />
      <span className="animatedPillContent">{children}</span>
    </a>
  );
}
