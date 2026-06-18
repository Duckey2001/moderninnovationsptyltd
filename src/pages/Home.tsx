import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code,
  Palette,
  Shield,
  Cloud,
  Cpu,
  Headphones,
  Search,
  PenTool,
  Rocket,
  Settings,
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  Sparkles,
  Zap,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedCounter from "../components/AnimatedCounter";
import CreativeImage from "../components/CreativeImage";
import ParticleBackground from "../components/ParticleBackground";
import SectionDivider from "../components/SectionDivider";
import SEO from "../components/SEO";

/* ===== DATA ===== */

const slides = [
  {
    title: "Modern Tech Solutions",
    subtitle: "Modern Tech Solutions for Modern Businesses",
    description:
      "We partner with businesses in Lesotho and beyond to design, build, and scale innovative technology solutions.",
  },
  {
    title: "Cybersecurity Solutions",
    subtitle: "Secure Your Digital Future",
    description:
      "Protect your business from evolving cyber threats with our comprehensive security audits, penetration testing, and threat monitoring services.",
  },
  {
    title: "AI & Automation",
    subtitle: "Intelligent Automation for Smarter Results",
    description:
      "Harness the power of artificial intelligence and machine learning to automate processes and uncover valuable insights.",
  },
];

const heroImage =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1500&q=80";

const storyImages = [
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    caption: "Our team collaborating on innovative solutions",
  },
  {
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
    caption: "Strategic consulting and planning sessions",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
    caption: "Modern development environment",
  },
];

const services = [
  {
    icon: Code,
    title: "Software Development",
    description:
      "Custom software solutions built with modern frameworks — from enterprise applications to mobile apps that scale.",
  },
  {
    icon: Palette,
    title: "Web & App Design",
    description:
      "Beautiful, user-centric designs that combine aesthetics with functionality for an exceptional user experience.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Comprehensive security audits, penetration testing, compliance management, and 24/7 threat monitoring.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure, seamless migration, and managed services on AWS, Azure, and Google Cloud.",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description:
      "Custom ML models, data pipelines, NLP, computer vision, and intelligent process automation.",
  },
  {
    icon: Headphones,
    title: "IT Consulting",
    description:
      "Strategic technology advisory, digital transformation planning, and tailored IT roadmap development.",
  },
];

const stats = [
  { end: 50, suffix: "+", label: "Projects Delivered", icon: Rocket },
  { end: 4, suffix: "+", label: "Years Experience", icon: Zap },
  { end: 30, suffix: "+", label: "Happy Clients", icon: Star },
  { end: 15, suffix: "+", label: "Team Members", icon: Sparkles },
];

const processSteps = [
  {
    step: 1,
    icon: Search,
    title: "Discover",
    description: "We dive deep into your business, goals, and challenges to understand exactly what you need.",
    color: "from-sky-400 to-blue-500",
  },
  {
    step: 2,
    icon: PenTool,
    title: "Design",
    description: "Our team crafts a tailored strategy and design that aligns with your vision and objectives.",
    color: "from-blue-500 to-sky-300",
  },
  {
    step: 3,
    icon: Code,
    title: "Develop",
    description: "We build your solution using modern frameworks, agile practices, and rigorous testing.",
    color: "from-sky-300 to-blue-400",
  },
  {
    step: 4,
    icon: Rocket,
    title: "Deploy",
    description: "We launch, monitor, and optimize — providing ongoing support to ensure lasting success.",
    color: "from-blue-400 to-sky-500",
  },
];

const testimonials = [
  {
    quote: "Modern Innovations transformed our digital infrastructure. Their team's expertise in cloud solutions and cybersecurity gave us the confidence to scale rapidly.",
    name: "Thabo Mokoena",
    role: "CEO, TechVentures Africa",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
  },
  {
    quote: "The AI automation solutions they built for our supply chain reduced operational costs by 40%. Their attention to detail and delivery was outstanding.",
    name: "Lerato Seboka",
    role: "COO, LogiCo SA",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 5,
  },
  {
    quote: "From concept to launch, Modern Innovations was with us every step of the way. Our mobile app has over 50k downloads and rave reviews.",
    name: "Kabelo Ramphali",
    role: "Founder, HealthSync",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 5,
  },
];

const partners = [
  "TechVentures Africa", "LogiCo SA", "HealthSync", "AeroGuard Systems",
  "CryptoVault", "SkyTrans Logistics", "MediFly", "EcoTrack",
  "TechVentures Africa", "LogiCo SA", "HealthSync", "AeroGuard Systems",
  "CryptoVault", "SkyTrans Logistics", "MediFly", "EcoTrack",
];

/* ===== COMPONENT ===== */

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Testimonial auto-scroll
  useEffect(() => {
    if (!autoScroll) return;
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoScroll]);

  return (
    <>
      <SEO
        title="Home"
        description="Modern Innovations Pty Ltd - Empowering businesses in Lesotho and beyond with cutting-edge technology solutions. Software development, web design, cybersecurity, cloud, AI, and IT consulting."
      />

      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <CreativeImage
            src={heroImage}
            alt="Modern technology solutions"
            aspectRatio=""
            rounded=""
            className="absolute inset-0 w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
        </div>

        {/* Dot grid overlay */}
        <div className="absolute inset-0 bg-dots opacity-30" />

        {/* Particle overlay */}
        <ParticleBackground
          color="rgba(255, 255, 255, 0.15)"
          particleCount={60}
          speed={0.3}
        />

        {/* Decorative floating shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 border border-white/10 rounded-full animate-float-slow opacity-20 hidden lg:block" />
        <div className="absolute bottom-20 left-10 w-56 h-56 border border-white/10 rounded-full animate-float opacity-10 hidden lg:block" style={{ animationDelay: "-2s" }} />
        <div className="absolute top-1/3 left-1/4 w-16 h-16 border border-white/10 rotate-45 animate-float-fast opacity-15 hidden lg:block" style={{ animationDelay: "-1s" }} />
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-white/5 rounded-lg animate-float-slow opacity-10 hidden lg:block" style={{ animationDelay: "-3s" }} />

        {/* Rotating decorative ring */}
        <div className="absolute top-40 right-20 w-96 h-96 border border-white/[0.04] rounded-full animate-spin-slow hidden lg:block" />
        <div className="absolute top-40 right-20 w-80 h-80 border border-white/[0.03] rounded-full animate-spin-slow hidden lg:block" style={{ animationDirection: "reverse", animationDuration: "12s" }} />

        {/* Est. badge */}
        <div className="absolute top-28 right-8 hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white/70 text-xs font-medium animate-float-slow">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-ping-soft" />
          Est. 2022
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            {/* Slideshow */}
            <div className="relative min-h-[280px] sm:min-h-[240px]">
              {slides.map((slide, index) => (
                <div
                  key={slide.title}
                  className={`transition-all duration-700 ease-in-out ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
                  }`}
                >
                  {index === currentSlide && (
                    <ScrollReveal variant="fade-up" key={currentSlide}>
                      <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4 border border-white/10">
                        <Sparkles size={14} />
                        {slide.title}
                      </span>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-sm">
                        {slide.subtitle}
                      </h1>
                      <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-xl leading-relaxed drop-shadow-sm">
                        {slide.description}
                      </p>
                    </ScrollReveal>
                  )}
                </div>
              ))}
            </div>

            {/* Slide indicators */}
            <div className="flex gap-2 mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentSlide
                      ? "w-10 bg-white"
                      : "w-2 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold no-underline hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer animate-glow"
              >
                Get in Touch
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-6 py-3 rounded-lg font-semibold no-underline hover:bg-white/10 backdrop-blur-sm cursor-pointer transition-all duration-200"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUSTED BY / PARTNERS ===== */}
      <section className="py-12 bg-muted/50 overflow-hidden border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-secondary/60 mb-6">
              Trusted by Industry Leaders
            </p>
          </ScrollReveal>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee gap-16 items-center">
              {partners.map((name, i) => (
                <div
                  key={`${name}-${i}`}
                  className="flex items-center gap-3 text-secondary/40 hover:text-primary/60 transition-colors duration-300 shrink-0"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-brand/5 border border-border flex items-center justify-center text-xs font-bold">
                    {name.slice(0, 2).toUpperCase()}
                  </div>
                  <span className="text-sm font-semibold whitespace-nowrap">{name}</span>
                </div>
              ))}
            </div>
            {/* Gradient fade edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-muted/50 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-muted/50 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ===== HOW WE INNOVATE (Process) ===== */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-brand/10 rounded-full text-primary text-sm font-medium mb-4">
              <Settings size={14} />
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              How We <span className="gradient-text">Innovate</span>
            </h2>
            <p className="mt-4 text-secondary text-lg">
              A proven methodology that takes your project from concept to launch with precision and care.
            </p>
          </ScrollReveal>

          {/* Process steps */}
          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-24 left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-30" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {processSteps.map((step, index) => (
                <ScrollReveal
                  key={step.title}
                  variant="fade-up"
                  delay={index * 150}
                >
                  <div className="relative group text-center">
                    {/* Step number - absolute positioned */}
                    <div className="relative mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-white to-muted border border-border shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                      {/* Animated gradient ring on hover */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      <step.icon size={28} className="text-primary group-hover:rotate-6 transition-transform duration-300" />
                      {/* Step badge */}
                      <div className={`absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br ${step.color} text-white text-xs font-bold flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-secondary leading-relaxed max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== IMAGE SHOWCASE ===== */}
      <section className="py-20 lg:py-28 bg-muted overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-gradient-brand/10 rounded-full text-primary text-sm font-medium mb-4">Behind the Scenes</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              A Glimpse Into <span className="gradient-text">Our World</span>
            </h2>
            <p className="mt-4 text-secondary text-lg">
              Where innovation meets execution — see the environment and people behind the solutions.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {storyImages.map((img, index) => (
              <ScrollReveal key={img.caption} variant={index === 1 ? "fade-up" : index === 0 ? "fade-right" : "fade-left"} delay={index * 150}>
                <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                  <CreativeImage
                    src={img.src}
                    alt={img.caption}
                    aspectRatio="aspect-[4/5]"
                    rounded="rounded-2xl"
                    zoomOnHover
                    overlay
                    overlayColor="from-black/60 via-black/10 to-transparent"
                    caption={img.caption}
                  />
                  {/* Hover info panel */}
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/70 via-black/20 to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-sm font-medium">{img.caption}</p>
                    <span className="text-white/60 text-xs mt-1 inline-flex items-center gap-1">
                      <ArrowRight size={12} /> Explore
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-40 right-0 w-80 h-80 bg-primary/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-0 w-80 h-80 bg-accent/[0.03] rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-brand/10 rounded-full text-primary text-sm font-medium mb-4">
              <Zap size={14} />
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              End-to-End <span className="gradient-text">Technology Services</span>
            </h2>
            <p className="mt-4 text-secondary text-lg">
              From strategy to execution, we deliver results that drive your business forward.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ScrollReveal
                key={service.title}
                variant="fade-up"
                delay={index * 100}
              >
                <div className="card-interactive group gradient-border-card bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-xl h-full">
                  <div className="w-12 h-12 bg-gradient-brand/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gradient-brand/20 group-hover:scale-110 transition-all duration-300">
                    <service.icon size={24} className="text-primary group-hover:rotate-6 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-secondary leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary no-underline group-hover:gap-2 transition-all duration-200 cursor-pointer"
                  >
                    Learn More <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="relative overflow-hidden py-20 lg:py-24">
        <div className="absolute inset-0">
          <CreativeImage
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1500&q=80"
            alt="Modern workspace"
            aspectRatio=""
            rounded=""
            className="absolute inset-0 w-full h-full"
          />
          <div className="absolute inset-0 bg-primary/90" />
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full animate-float-slow opacity-20" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/10 rounded-lg rotate-45 animate-float opacity-15" style={{ animationDelay: "-2s" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              By the <span className="text-white/70">Numbers</span>
            </h2>
            <p className="mt-3 text-white/70 max-w-lg mx-auto">
              Our impact measured in projects, partnerships, and people.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <ScrollReveal key={stat.label} variant="fade-up" delay={0}>
                <div className="glass rounded-2xl p-6 lg:p-8 text-center group hover:bg-white/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                    <stat.icon size={22} className="text-white" />
                  </div>
                  <p className="text-3xl sm:text-4xl font-bold text-white">
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} duration={2000} />
                  </p>
                  <p className="mt-2 text-sm text-white/70 font-medium">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-muted/30" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-brand/10 rounded-full text-primary text-sm font-medium mb-4">
              <Quote size={14} />
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="mt-4 text-secondary text-lg">
              Don't take our word for it — hear from the businesses we've partnered with.
            </p>
          </ScrollReveal>

          <div
            className="relative max-w-3xl mx-auto"
            onMouseEnter={() => setAutoScroll(false)}
            onMouseLeave={() => setAutoScroll(true)}
          >
            {/* Cards */}
            <div className="relative min-h-[280px]">
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className={`transition-all duration-500 ease-in-out ${
                    i === currentTestimonial
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8 absolute inset-0 pointer-events-none"
                  }`}
                >
                  {i === currentTestimonial && (
                    <ScrollReveal key={currentTestimonial} variant="fade-up">
                      <div className="glass rounded-2xl p-8 lg:p-10 border border-border shadow-lg text-center">
                        {/* Quote icon */}
                        <Quote size={36} className="text-primary/30 mx-auto mb-6" />
                        <p className="text-lg text-secondary italic leading-relaxed">
                          "{t.quote}"
                        </p>
                        {/* Stars */}
                        <div className="flex justify-center gap-1 my-5">
                          {[...Array(t.rating)].map((_, j) => (
                            <Star key={j} size={16} className="text-amber-400 fill-amber-400" />
                          ))}
                        </div>
                        {/* Avatar + Name */}
                        <div className="flex items-center justify-center gap-3">
                          <img
                            src={t.avatar}
                            alt={t.name}
                            className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                          />
                          <div className="text-left">
                            <p className="font-semibold text-primary text-sm">{t.name}</p>
                            <p className="text-xs text-secondary">{t.role}</p>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  )}
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === currentTestimonial
                      ? "w-8 bg-gradient-brand"
                      : "w-2 bg-border hover:bg-primary/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Prev/Next buttons */}
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-white border border-border shadow-md hover:shadow-lg hover:scale-105 text-primary transition-all duration-200 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-white border border-border shadow-md hover:shadow-lg hover:scale-105 text-primary transition-all duration-200 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        {/* Background */}
        <div className="absolute inset-0">
          <CreativeImage
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1500&q=80"
            alt="Team collaboration"
            aspectRatio=""
            rounded=""
            className="absolute inset-0 w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/70" />
        </div>

        {/* Decorative */}
        <div className="absolute inset-0 bg-dots opacity-10" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 border border-white/10 rounded-full animate-float-slow opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 border border-white/10 rounded-full animate-float opacity-15" style={{ animationDelay: "-3s" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variant="fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium mb-6 border border-white/10">
              <Sparkles size={14} />
              Let's Build Something Great
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ready to Start Your{" "}
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                Project?
              </span>
            </h2>
            <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto">
              Let's discuss how we can help bring your vision to life with the right technology stack and a dedicated team.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3.5 rounded-lg font-semibold no-underline hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                Get in Touch
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-8 py-3.5 rounded-lg font-semibold no-underline hover:bg-white/10 backdrop-blur-sm cursor-pointer transition-all duration-200"
              >
                View Our Work
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}