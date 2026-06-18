import { useState, useRef, useEffect } from "react";

interface CreativeImageProps {
  src: string;
  alt: string;
  className?: string;
  overlay?: boolean;
  overlayColor?: string;
  zoomOnHover?: boolean;
  rounded?: string;
  aspectRatio?: string;
  caption?: string;
  priority?: boolean;
  parallax?: boolean;
}

export default function CreativeImage({
  src,
  alt,
  className = "",
  overlay = false,
  overlayColor = "from-black/40 to-black/10",
  zoomOnHover = false,
  rounded = "rounded-xl",
  aspectRatio = "aspect-[16/10]",
  caption,
  priority = false,
  parallax = false,
}: CreativeImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(priority);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [priority]);

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${rounded} ${aspectRatio} bg-muted ${className}`}
    >
      {/* Skeleton placeholder */}
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-muted via-white/20 to-muted bg-[length:200%_100%] animate-pulse" />
      )}

      {/* Actual image */}
      {inView && (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          } ${zoomOnHover ? "group-hover:scale-110" : ""} ${
            parallax ? "md:object-fixed" : ""
          }`}
          style={parallax ? { objectPosition: "center top" } : undefined}
        />
      )}

      {/* Overlay gradient */}
      {overlay && (
        <div
          className={`absolute inset-0 bg-gradient-to-t ${overlayColor} transition-opacity duration-300`}
        />
      )}

      {/* Caption */}
      {caption && (
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-white text-sm font-medium drop-shadow-sm">
            {caption}
          </p>
        </div>
      )}
    </div>
  );
}
