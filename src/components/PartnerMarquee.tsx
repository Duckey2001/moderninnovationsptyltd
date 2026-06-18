import { useEffect, useRef, useState } from "react";

const partners = [
  { name: "TechVault", style: { width: 140 } },
  { name: "DataStream", style: { width: 150 } },
  { name: "CloudNine", style: { width: 145 } },
  { name: "AxiomSoft", style: { width: 135 } },
  { name: "PulseNet", style: { width: 130 } },
  { name: "VertexSys", style: { width: 140 } },
  { name: "NovaTech", style: { width: 145 } },
  { name: "BrightCore", style: { width: 150 } },
];

export default function PartnerMarquee() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [duplicated, setDuplicated] = useState(false);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Duplicate content for seamless scroll
    const children = Array.from(scroller.children);
    children.forEach((child) => {
      const clone = child.cloneNode(true);
      scroller.appendChild(clone);
    });
    setDuplicated(true);
  }, []);

  return (
    <section className="py-16 lg:py-20 bg-muted/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-secondary/60">
          Trusted By Industry Leaders
        </p>
      </div>

      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex overflow-hidden mask-edges">
          <div
            ref={scrollerRef}
            className="flex items-center gap-16 lg:gap-24 animate-marquee"
          >
            {partners.map((partner, i) => (
              <div
                key={partner.name}
                className="flex items-center justify-center shrink-0"
                style={partner.style}
              >
                <div className="flex items-center gap-3 group cursor-default">
                  {/* Placeholder logo shape */}
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-primary/40 text-xs font-bold">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-secondary/40 group-hover:text-secondary/60 transition-colors duration-300 whitespace-nowrap">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}