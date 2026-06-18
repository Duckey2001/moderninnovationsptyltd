export default function SectionDivider({
  position = "bottom",
  variant = "wave",
  className = "",
}: {
  position?: "top" | "bottom";
  variant?: "wave" | "angle" | "curve";
  className?: string;
}) {
  if (variant === "angle") {
    return (
      <div className={`absolute ${position === "bottom" ? "bottom-0" : "top-0"} left-0 right-0 h-16 lg:h-24 overflow-hidden pointer-events-none -z-1 ${className}`}>
        <svg
          viewBox="0 0 1440 96"
          className="absolute w-full h-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon
            points="0,0 1440,0 1440,96 0,0"
            fill="currentColor"
            className="text-muted"
          />
        </svg>
      </div>
    );
  }

  if (variant === "curve") {
    return (
      <div className={`absolute ${position === "bottom" ? "bottom-0" : "top-0"} left-0 right-0 h-16 lg:h-24 overflow-hidden pointer-events-none ${className}`}>
        <svg
          viewBox="0 0 1440 120"
          className="absolute w-full h-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,60 C360,120 1080,0 1440,60 L1440,0 L0,0 Z"
            fill="currentColor"
            className="text-muted"
          />
        </svg>
      </div>
    );
  }

  // Wave variant (default)
  return (
    <div className={`absolute ${position === "bottom" ? "-bottom-1" : "-top-1"} left-0 right-0 h-16 lg:h-24 overflow-hidden pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 1440 100"
        className="absolute w-full h-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,50 C320,100 520,0 720,50 C920,100 1120,0 1440,50 L1440,100 L0,100 Z"
          fill="currentColor"
          className="text-muted"
        />
      </svg>
    </div>
  );
}