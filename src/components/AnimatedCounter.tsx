import { useScrollReveal } from "../hooks/useScrollReveal";
import { useAnimatedCounter } from "../hooks/useAnimatedCounter";

interface AnimatedCounterProps {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({
  end,
  start = 0,
  duration = 2000,
  decimals = 0,
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const { ref, isVisible } = useScrollReveal<HTMLSpanElement>({ threshold: 0.5 });
  const { display } = useAnimatedCounter({
    start,
    end,
    duration,
    decimals,
    suffix,
    enabled: isVisible,
  });

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
