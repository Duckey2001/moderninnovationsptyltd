import { ReactNode } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade-in"
  | "scale-in"
  | "slide-up"
  | "none";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number; // delay in ms
  threshold?: number;
  rootMargin?: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const variantClasses: Record<AnimationVariant, { hidden: string; visible: string }> = {
  "fade-up": {
    hidden: "opacity-0 translate-y-8",
    visible: "opacity-100 translate-y-0",
  },
  "fade-down": {
    hidden: "opacity-0 -translate-y-8",
    visible: "opacity-100 translate-y-0",
  },
  "fade-left": {
    hidden: "opacity-0 translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  "fade-right": {
    hidden: "opacity-0 -translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  "fade-in": {
    hidden: "opacity-0",
    visible: "opacity-100",
  },
  "scale-in": {
    hidden: "opacity-0 scale-90",
    visible: "opacity-100 scale-100",
  },
  "slide-up": {
    hidden: "opacity-0 translate-y-12",
    visible: "opacity-100 translate-y-0",
  },
  none: {
    hidden: "",
    visible: "",
  },
};

function getTransitionClass(delay: number) {
  return `transition-all duration-700 ease-out${delay > 0 ? ` delay-[${delay}ms]` : ""}`;
}

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  threshold,
  rootMargin,
  className = "",
  as: Tag = "div",
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold, rootMargin });
  const { hidden, visible } = variantClasses[variant];

  // For reduced motion, always show visible state
  const showState = isVisible ? visible : hidden;

  const style: React.CSSProperties = {
    transition: "all 700ms cubic-bezier(0.16, 1, 0.3, 1)",
    transitionDelay: `${delay}ms`,
  };

  const TagName = Tag as any;

  return (
    <TagName
      ref={ref}
      className={`${showState} ${className}${!isVisible ? " pointer-events-none" : ""}`}
      style={style}
    >
      {children}
    </TagName>
  );
}
