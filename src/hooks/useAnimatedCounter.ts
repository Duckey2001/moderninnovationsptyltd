import { useEffect, useState, useRef } from "react";

interface AnimatedCounterOptions {
  start?: number;
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  enabled?: boolean;
}

export function useAnimatedCounter({
  start = 0,
  end,
  duration = 2000,
  decimals = 0,
  suffix = "",
  enabled = true,
}: AnimatedCounterOptions) {
  const [value, setValue] = useState(start);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) {
      setValue(end);
      return;
    }

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setValue(end);
      return;
    }

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentValue = start + (end - start) * eased;

      setValue(currentValue);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [start, end, duration, enabled]);

  const display = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();

  return { display: display + suffix, rawValue: value };
}
