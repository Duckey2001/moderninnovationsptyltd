import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, ShieldCheck, Star, Users, Target, Eye, MapPin, Sparkles, Zap, Quote, ChevronRight, Layers, Award } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedCounter from "../components/AnimatedCounter";
import CreativeImage from "../components/CreativeImage";
import SEO from "../components/SEO";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay ahead of the curve, continuously exploring emerging technologies to deliver forward-thinking solutions.",
  },
  {
    icon: Star,
    title: "Quality",
    description:
      "Every project we deliver is built with rigorous testing, clean architecture, and attention to detail.",
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    description:
      "We build lasting relationships through transparency, reliability, and a commitment to our clients' success.",
  },
  {
    icon: Users,
    title: "Support",
    description:
      "Our partnership doesn't end at launch. We provide ongoing support, maintenance, and continuous improvement.",
  },
];

const team = [
  {
    name: "Mpho Lekunye",
    role: "CEO & Founder / Lead Developer",
    bio: "Visionary leader with over 4 years of experience in technology and business strategy.",
    photo: "https://raw.githubusercontent.com/Duckey2001/moderninnovationsptyltd/main/ee%20maphosa.jpg",
  },
  {
    name: "Letsapo Bokang",
    role: "Cybersecurity Specialist",
    bio: "Certified security expert dedicated to protecting businesses from digital threats.",
    photo: "https://raw.githubusercontent.com/Duckey2001/moderninnovationsptyltd/main/me.jpg",
  },
  {
    name: "Sarah Lee",
    role: "UI/UX Designer",
    bio: "Creative designer focused on crafting intuitive and engaging user experiences.",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
  },
];

const timeline = [
  { year: "2022", event: "Modern Innovations founded in Maseru, Lesotho", icon: Sparkles },
  { year: "2023", event: "First major enterprise client onboarded; team grows to 8", icon: Layers },
  { year: "2024", event: "Launched AI & Cybersecurity divisions; 30+ projects delivered", icon: Zap },
  { year: "2025", event: "Expanded to 15+ team members serving clients across Africa", icon: Award },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Modern Innovations Pty Ltd - our story, mission, vision, values, and the team behind our success. Based in Maseru, Lesotho."
      />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden text-white py-20 lg:py-28">
        <div className="absolute inset-0">
          <CreativeImage
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1500&q=80"
            alt="Team collaborating"
            aspectRatio=""
            rounded=""
            className="absolute inset-0 w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
        </div>

        {/* Decorative */}
        <div className="absolute inset-0 bg-dots opacity-20" />
        <div className="absolute top-10 right-10 w-72 h-72 border border-white/10 rounded-full animate-float-slow opacity-20 hidden lg:block" />
        <div className="absolute bottom-10 left-10 w-40 h-40 border border-white/10 rounded-full animate-float opacity-10 hidden lg:block" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/3 left-1/4 w-20 h-20 border border-white/10 rotate-45 animate-float-fast opacity-15 hidden lg:block" />
        <div className="absolute top-40 right-40 w-96 h-96 border border-white/[0.04] rounded-full animate-spin-slow hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4 border border-white/10">
              <Sparkles size={14} />
              Our Story
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              About{" "}
              <span className="text-white/80">Modern Innovations</span>
            </h1>
            <p className="mt-6 text-lg text-white/90 max-w-xl leading-relaxed">
              We are a team of passionate technologists based in Maseru, Lesotho, dedicated to helping businesses thrive in the digital age through innovative technology solutions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal variant="fade-right">
              <span className="inline-block px-3 py-1 bg-gradient-brand/10 rounded-full text-primary text-sm font-medium mb-4">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                From Vision to <span className="gradient-text">Impact</span>
              </h2>
              <div className="mt-6 space-y-4 text-secondary leading-relaxed">
                <p>
                  Founded in 2022, Modern Innovations Pty Ltd was born from a simple belief: that technology, when applied thoughtfully, can transform businesses and create extraordinary value.
                </p>
                <p>
                  Starting from Maseru, Lesotho, we've grown from a small consultancy into a full-service technology partner, delivering everything from software and mobile applications to cloud infrastructure, AI/ML solutions, and cybersecurity services.
                </p>
                <p>
                  Our team of 15+ experienced engineers, designers, and strategists work closely with clients across Africa and beyond to understand their unique challenges and deliver solutions that drive real business outcomes.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-brand text-white px-5 py-2.5 rounded-lg font-semibold no-underline hover:opacity-90 hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                  Join Our Journey
                  <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-left" className="relative">
              <div className="relative">
                <CreativeImage
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                  alt="Modern Innovations office"
                  aspectRatio="aspect-[4/3]"
                  rounded="rounded-2xl"
                  zoomOnHover
                  overlay
                  overlayColor="from-primary/20 to-transparent"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-4 animate-float hidden sm:block" style={{ animationDelay: "-1s" }}>
                  <MapPin size={24} className="text-primary" />
                  <p className="text-xs font-semibold text-primary mt-1">Maseru, Lesotho</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="py-16 lg:py-20 bg-muted relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-brand/10 rounded-full text-primary text-sm font-medium mb-4">
              <Zap size={14} />
              Our Journey
            </span>
            <h2 className="text-3xl font-bold text-primary">Company <span className="gradient-text">Timeline</span></h2>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30 -translate-x-1/2" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <ScrollReveal key={item.year} variant={i % 2 === 0 ? "fade-right" : "fade-left"} delay={i * 100}>
                  <div className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                      <div className="bg-white rounded-xl p-5 border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                        <span className="text-primary font-bold text-lg gradient-text">{item.year}</span>
                        <p className="text-secondary text-sm mt-1 leading-relaxed">{item.event}</p>
                      </div>
                    </div>
                    {/* Icon on the line */}
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-primary/20 shadow-md shrink-0 -ml-6 md:ml-0 md:absolute md:left-1/2 md:-translate-x-1/2 group hover:scale-110 transition-transform duration-300">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    {/* Spacer for alternate layout */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="relative overflow-hidden py-16 lg:py-20">
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
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { end: 50, suffix: "+", label: "Projects Delivered" },
              { end: 4, suffix: "+", label: "Years Experience" },
              { end: 30, suffix: "+", label: "Happy Clients" },
              { end: 15, suffix: "+", label: "Team Members" },
            ].map((stat) => (
              <ScrollReveal key={stat.label} variant="fade-up" className="text-center">
                <div className="glass rounded-2xl p-6 group hover:bg-white/20 transition-all duration-300">
                  <p className="text-4xl sm:text-5xl font-bold text-white">
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

      {/* ===== MISSION & VISION ===== */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal variant="fade-up" delay={0}>
              <div className="group gradient-border-card relative overflow-hidden bg-white rounded-2xl p-8 lg:p-10 border border-border shadow-sm">
                <div className="absolute inset-0 opacity-5">
                  <CreativeImage
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80"
                    alt=""
                    aspectRatio=""
                    rounded=""
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-brand/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target size={28} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                  <p className="text-secondary leading-relaxed">
                    To empower businesses with innovative and reliable technology solutions that drive growth, efficiency, and competitive advantage in the digital era.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={150}>
              <div className="group gradient-border-card relative overflow-hidden bg-white rounded-2xl p-8 lg:p-10 border border-border shadow-sm">
                <div className="absolute inset-0 opacity-5">
                  <CreativeImage
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80"
                    alt=""
                    aspectRatio=""
                    rounded=""
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-brand/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Eye size={28} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                  <p className="text-secondary leading-relaxed">
                    To be the leading technology partner in Africa, known for delivering cutting-edge solutions that transform businesses and communities.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="py-20 lg:py-28 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-brand/10 rounded-full text-primary text-sm font-medium mb-4">
              <Star size={14} />
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              The Principles That <span className="gradient-text">Guide Us</span>
            </h2>
            <p className="mt-4 text-secondary text-lg">
              The principles that guide everything we do.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <ScrollReveal
                key={value.title}
                variant="fade-up"
                delay={index * 100}
              >
                <div className="card-interactive group gradient-border-card bg-white rounded-xl p-6 border border-border shadow-sm">
                  <div className="w-12 h-12 bg-gradient-brand/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gradient-brand/20 group-hover:scale-110 transition-all duration-300">
                    <value.icon size={24} className="text-primary group-hover:rotate-6 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-secondary leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-brand/10 rounded-full text-primary text-sm font-medium mb-4">
              <Users size={14} />
              Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="mt-4 text-secondary text-lg">
              The passionate people behind Modern Innovations.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {team.map((member, index) => (
              <ScrollReveal
                key={member.name}
                variant="fade-up"
                delay={index * 100}
              >
                <div className="group gradient-border-card bg-white rounded-xl border border-border shadow-sm overflow-hidden">
                  {/* Photo */}
                  <div className="relative overflow-hidden h-56 bg-muted">
                    <CreativeImage
                      src={member.photo}
                      alt={member.name}
                      aspectRatio=""
                      rounded=""
                      className="absolute inset-0 w-full h-full"
                      zoomOnHover
                    />
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white text-sm font-medium bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                        View Profile
                      </span>
                    </div>
                  </div>
                  {/* Info */}
                  <div className="p-5 text-center">
                    <h3 className="text-lg font-semibold text-primary">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary font-medium mt-1">
                      {member.role}
                    </p>
                    <p className="mt-2 text-sm text-secondary leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-muted relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variant="fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-brand/10 rounded-full text-primary text-sm font-medium mb-4 border border-primary/20">
              <Sparkles size={14} />
              Let's Partner
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Ready to Work <span className="gradient-text">Together?</span>
            </h2>
            <p className="mt-4 text-lg text-secondary max-w-xl mx-auto">
              Let's discuss how Modern Innovations can help your business achieve its technology goals.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-brand text-white px-6 py-3 rounded-lg font-semibold no-underline hover:opacity-90 hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                Get in Touch
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold no-underline hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer"
              >
                Explore Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}