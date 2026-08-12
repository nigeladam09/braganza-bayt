"use client";

import { Fragment, useEffect, useRef } from "react";
import type { ReactNode } from "react";
import styles from "./HoverMarquee.module.css";

const DEFAULT_SPEED = 0.5;

export default function HoverMarquee({ items }: { items: ReactNode[] }) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    let speed = DEFAULT_SPEED;
    let frameId: number;
    let cancelled = false;

    function handleMouseMove(e: MouseEvent) {
      const rect = wrap!.getBoundingClientRect();
      const ratio = (e.clientX - rect.left) / rect.width;
      if (ratio < 0.5) {
        const t = (0.5 - ratio) / 0.5;
        speed = DEFAULT_SPEED - t * (DEFAULT_SPEED + 1.3);
      } else {
        const t = (ratio - 0.5) / 0.5;
        speed = DEFAULT_SPEED + t * 2.6;
      }
    }

    function handleMouseLeave() {
      speed = DEFAULT_SPEED;
    }

    function step() {
      if (cancelled) return;
      const track = wrap!.firstElementChild as HTMLElement | null;
      if (track) {
        const half = track.scrollWidth / 2;
        wrap!.scrollLeft += speed;
        if (wrap!.scrollLeft >= half) wrap!.scrollLeft -= half;
        if (wrap!.scrollLeft < 0) wrap!.scrollLeft += half;
      }
      frameId = requestAnimationFrame(step);
    }

    wrap.addEventListener("mousemove", handleMouseMove);
    wrap.addEventListener("mouseleave", handleMouseLeave);
    frameId = requestAnimationFrame(step);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frameId);
      wrap.removeEventListener("mousemove", handleMouseMove);
      wrap.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className={styles.wrap} ref={wrapRef}>
      <div className={styles.track}>
        {items.map((item, i) => (
          <Fragment key={`a-${i}`}>{item}</Fragment>
        ))}
        {items.map((item, i) => (
          <Fragment key={`b-${i}`}>{item}</Fragment>
        ))}
      </div>
    </div>
  );
}
