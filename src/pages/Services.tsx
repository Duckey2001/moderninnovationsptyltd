import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code,
  Palette,
  Shield,
  Cloud,
  Cpu,
  Headphones,
  CheckCircle2,
  Sparkles,
  Zap,
  Settings,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import CreativeImage from "../components/CreativeImage";
import SEO from "../components/SEO";

const serviceImages = [
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
];
const serviceDetails = [
  {
    icon: Code,
    title: "Software Development",
    subtitle: "Custom software that drives business growth",
    description:
      "We build fast, secure, and reliable software applications using modern frameworks and best practices. From enterprise platforms to mobile apps, our team delivers production-ready solutions tailored to your business needs.",
    technologies: [
      "React, Next.js, Vue.js",
      "React Native, Flutter",
      "Node.js, Python, Go",
      "PostgreSQL, MongoDB",
      "AWS, Docker, Kubernetes",
      "REST & GraphQL APIs",
    ],
  },
  {
    icon: Palette,
    title: "Web & App Design",
    subtitle: "Beautiful interfaces, seamless experiences",
    description:
      "Our design team creates stunning, user-centric interfaces that combine aesthetics with functionality. We focus on delivering intuitive experiences that engage users and drive conversions.",
    technologies: [
      "UI/UX Strategy & Research",
      "Wireframing & Prototyping",
      "Responsive Web Design",
      "Mobile App Design (iOS/Android)",
      "Design Systems & Guidelines",
      "Usability Testing",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    subtitle: "Protect your digital assets",
    description:
      "We provide comprehensive cybersecurity services to protect your business from evolving threats. Our assessments and implementations ensure your systems, data, and operations remain secure and compliant.",
    technologies: [
      "Security Audits & Assessments",
      "Penetration Testing",
      "Compliance (ISO 27001, SOC 2)",
      "Threat Monitoring & Response",
      "Incident Response Planning",
      "Security Architecture Review",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    subtitle: "Scalable infrastructure, seamless operations",
    description:
      "We design and manage cloud infrastructure that is scalable, secure, and cost-effective. Our cloud solutions streamline your operations, enabling faster deployments and more reliable services.",
    technologies: [
      "AWS, Azure, Google Cloud",
      "Kubernetes & Docker",
      "Cloud Migration",
      "Infrastructure as Code",
      "Monitoring & Observability",
      "Serverless Architecture",
    ],
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    subtitle: "Intelligent solutions for smarter decisions",
    description:
      "We help businesses harness the power of artificial intelligence and machine learning. From predictive analytics to natural language processing, we build custom models that automate processes and uncover valuable insights.",
    technologies: [
      "TensorFlow, PyTorch",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "Data Pipelines & ETL",
      "LLM Integration",
    ],
  },
  {
    icon: Headphones,
    title: "IT Consulting",
    subtitle: "Strategic guidance for digital success",
    description:
      "Our experienced consultants provide strategic technology advisory services to help you make informed decisions. From digital transformation planning to IT roadmap development, we guide your technology journey.",
    technologies: [
      "Digital Transformation Strategy",
      "Technology Roadmap Planning",
      "IT Infrastructure Assessment",
      "Software Selection & Evaluation",
      "Change Management",
      "Project Management",
    ],
  },
];
export default function Services() {
  return (
    <>
      <SEO
        title="Our Services"
        description="Modern Innovations offers end-to-end technology services including software development, web design, cybersecurity, cloud solutions, AI & automation, and IT consulting."
      />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden text-white py-20 lg:py-28">
        <div className="absolute inset-0">
          <CreativeImage
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1500&q=80"
            alt="Modern workspace"
            aspectRatio=""
            rounded=""
            className="absolute inset-0 w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
        </div>

        {/* Decorative */}
        <div className="absolute inset-0 bg-dots opacity-20" />
        <div className="absolute top-10 left-10 w-56 h-56 border border-white/10 rounded-full animate-float opacity-15 hidden lg:block" />
        <div className="absolute bottom-20 right-20 w-40 h-40 border border-white/10 rounded-full animate-float opacity-10 hidden lg:block" style={{ animationDelay: "-2.5s" }} />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-white/10 rotate-45 animate-float-fast opacity-15 hidden lg:block" />
        <div className="absolute bottom-40 left-20 w-96 h-96 border border-white/[0.04] rounded-full animate-spin-slow hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4 border border-white/10">
              <Settings size={14} />
              What We Offer
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Our{" "}
              <span className="text-white/80">Services</span>
            </h1>
            <p className="mt-6 text-lg text-white/90 max-w-xl leading-relaxed">
              End-to-end technology solutions tailored to your business needs. From strategy to execution, we deliver results.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SERVICE DETAILS ===== */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 lg:space-y-32">
          {serviceDetails.map((service, index) => (
            <ScrollReveal
              key={service.title}
              variant={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 bg-gradient-brand/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-brand/20 transition-all duration-300">
                    <service.icon size={28} className="text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-primary font-medium">
                    {service.subtitle}
                  </p>
                  <p className="mt-4 text-secondary leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 bg-gradient-brand text-white px-5 py-2.5 rounded-lg font-semibold no-underline hover:opacity-90 hover:scale-105 transition-all duration-200 cursor-pointer"
                  >
                    Get a Consultation
                    <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Image Side */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative group">
                    <CreativeImage
                      src={serviceImages[index]}
                      alt={service.title}
                      aspectRatio="aspect-[4/3]"
                      rounded="rounded-2xl"
                      zoomOnHover
                      overlay
                      overlayColor="from-primary/30 to-transparent"
                    />
                    {/* Tech list overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6 lg:p-8 rounded-2xl">
                      <div className="w-full">
                        <h3 className="text-white font-semibold mb-3 text-sm">What We Offer</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {service.technologies.slice(0, 4).map((tech) => (
                            <div key={tech} className="flex items-start gap-2 text-white/80">
                              <CheckCircle2 size={14} className="text-white shrink-0 mt-0.5" />
                              <span className="text-xs">{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0">
          <CreativeImage
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1500&q=80"
            alt="Team collaboration"
            aspectRatio=""
            rounded=""
            className="absolute inset-0 w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/70" />
        </div>
        <div className="absolute inset-0 bg-dots opacity-10" />
        <div className="absolute top-10 left-10 w-48 h-48 border border-white/10 rounded-full animate-float-slow opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variant="fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium mb-6 border border-white/10">
              <Sparkles size={14} />
              Need Help Deciding?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Not Sure Which Service You Need?
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
              Contact us for a free consultation. We'll help you identify the best approach for your project.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold no-underline hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}