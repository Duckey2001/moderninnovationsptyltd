import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    id: 1,
    name: "Thabo Mokoena",
    role: "CEO, Basotho Enterprises",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    content:
      "Modern Innovations completely transformed our digital infrastructure. Their team delivered a robust e-commerce platform that increased our online sales by 200% within the first quarter. Exceptional professionalism and technical expertise.",
    rating: 5,
  },
  {
    id: 2,
    name: "Lerato Moshoeshoe",
    role: "CTO, FinTech Solutions Ltd",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    content:
      "Working with Modern Innovations was a game-changer for our fintech startup. They built a secure, scalable mobile banking solution that passed regulatory compliance with flying colors. Their cybersecurity expertise is world-class.",
    rating: 5,
  },
  {
    id: 3,
    name: "James Nkosi",
    role: "Director, EduTech Africa",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    content:
      "The team at Modern Innovations delivered our e-learning platform ahead of schedule and under budget. The AI-powered recommendation engine they built has dramatically improved student engagement by 180%.",
    rating: 5,
  },
  {
    id: 4,
    name: "Palesa Rantao",
    role: "Head of IT, Government Agency",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
    content:
      "We needed a secure cloud migration strategy, and Modern Innovations delivered flawlessly. Their team handled the entire transition with minimal downtime, and their 24/7 support has been invaluable.",
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goTo = (index: number) => setCurrent(index);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  const t = testimonials[current];

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 dark:from-primary/10 dark:via-transparent dark:to-primary/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up" className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-secondary text-lg">
            Don't take our word for it — hear from the businesses we've helped.
          </p>
        </ScrollReveal>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <div
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Card */}
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 lg:p-10 border border-border shadow-lg">
              {/* Large quote icon */}
              <Quote
                size={48}
                className="absolute top-6 right-8 text-primary/10 dark:text-primary/20"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-secondary leading-relaxed text-base lg:text-lg mb-8">
                &ldquo;{t.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-muted ring-2 ring-primary/20">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="font-semibold text-primary">{t.name}</p>
                  <p className="text-sm text-secondary">{t.role}</p>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prev}
              className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white dark:bg-gray-900 border border-border shadow-md flex items-center justify-center text-secondary hover:text-primary hover:shadow-lg transition-all duration-200 cursor-pointer z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white dark:bg-gray-900 border border-border shadow-md flex items-center justify-center text-secondary hover:text-primary hover:shadow-lg transition-all duration-200 cursor-pointer z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    index === current
                      ? "w-8 bg-primary"
                      : "w-2 bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}