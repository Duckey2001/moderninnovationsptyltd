import { useEffect, useState } from "react";

interface Shape {
  id: number;
  type: "circle" | "square" | "triangle" | "diamond";
  size: number;
  x: number;
  y: number;
  rotation: number;
  duration: number;
  delay: number;
  opacity: number;
  borderOpacity: number;
}

interface FloatingShapesProps {
  count?: number;
  className?: string;
  color?: string;
  darkColor?: string;
}

function generateShapes(count: number, seed?: number): Shape[] {
  const shapes: Shape[] = [];
  const types: Shape["type"][] = ["circle", "square", "triangle", "diamond"];
  for (let i = 0; i < count; i++) {
    shapes.push({
      id: seed ? seed + i : i,
      type: types[Math.floor(Math.random() * types.length)],
      size: 20 + Math.random() * 40,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
      duration: 4 + Math.random() * 6,
      delay: Math.random() * 4,
      opacity: 0.03 + Math.random() * 0.08,
      borderOpacity: 0.06 + Math.random() * 0.12,
    });
  }
  return shapes;
}

export default function FloatingShapes({
  count = 8,
  className = "",
  color = "#38BDF8",
}: FloatingShapesProps) {
  const [shapes] = useState<Shape[]>(() => generateShapes(count, Date.now()));

  const renderShape = (shape: Shape) => {
    const baseStyle = {
      left: `${shape.x}%`,
      top: `${shape.y}%`,
      width: `${shape.size}px`,
      height: `${shape.size}px`,
      opacity: shape.opacity,
      animationDuration: `${shape.duration}s`,
      animationDelay: `${shape.delay}s`,
      borderColor: color,
    };

    switch (shape.type) {
      case "circle":
        return (
          <div
            key={shape.id}
            className="absolute animate-float-slow rounded-full border pointer-events-none"
            style={{
              ...baseStyle,
              borderWidth: "1px",
            }}
            aria-hidden="true"
          />
        );
      case "square":
        return (
          <div
            key={shape.id}
            className="absolute animate-float-slow pointer-events-none"
            style={{
              ...baseStyle,
              transform: `rotate(${shape.rotation}deg)`,
              borderWidth: "1px",
              opacity: shape.borderOpacity,
              backgroundColor: `${color}08`,
            }}
            aria-hidden="true"
          />
        );
      case "triangle":
        return (
          <div
            key={shape.id}
            className="absolute animate-float-slow pointer-events-none"
            style={{
              ...baseStyle,
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              opacity: shape.borderOpacity,
            }}
            aria-hidden="true"
          >
            <svg width={shape.size} height={shape.size} viewBox="0 0 100 100">
              <polygon
                points="50,5 95,95 5,95"
                fill="none"
                stroke={color}
                strokeWidth="1"
                opacity={shape.borderOpacity}
              />
            </svg>
          </div>
        );
      case "diamond":
        const s = shape.size * 0.7;
        return (
          <div
            key={shape.id}
            className="absolute animate-float-slow pointer-events-none"
            style={{
              ...baseStyle,
              width: `${s}px`,
              height: `${s}px`,
              transform: `rotate(45deg)`,
              borderWidth: "1px",
              opacity: shape.borderOpacity,
              backgroundColor: `${color}06`,
            }}
            aria-hidden="true"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {shapes.map(renderShape)}
    </div>
  );
}