import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Filter, FolderOpen, Sparkles } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import CreativeImage from "../components/CreativeImage";
import SEO from "../components/SEO";

const categories = ["All", "Drone Technology", "Blockchain", "Websites", "Mobile Apps", "Finance", "E-commerce", "Healthcare", "Smart City", "AgriTech", "FinTech"];

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}
const projects: Project[] = [
  {
    id: 1,
    title: "AeroGuard",
    category: "Drone Technology",
    description:
      "Autonomous drone surveillance system for border security with real-time threat detection, thermal imaging, and AI-powered pattern recognition for perimeter monitoring.",
    image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=600&q=80",
    tags: ["AI", "Computer Vision", "IoT", "Edge Computing"],
  },
  {
    id: 2,
    title: "MediFly",
    category: "Drone Technology",
    description:
      "Medical supply delivery drone network delivering vaccines, blood samples, and emergency medications to remote and underserved communities.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    tags: ["Autonomous Flight", "GPS", "Real-time Tracking", "HealthTech"],
  },
  {
    id: 3,
    title: "SkyTrans",
    category: "Drone Technology",
    description:
      "Heavy-lift cargo drone solution for logistics companies enabling efficient last-mile delivery and inter-warehouse transport.",
    image: "https://images.unsplash.com/photo-1506947411480-88d5d9ff0fd6?w=600&q=80",
    tags: ["Logistics", "Fleet Management", "Route Optimization", "Automation"],
  },
  {
    id: 4,
    title: "CryptoVault",
    category: "Blockchain",
    description:
      "Secure multi-currency cryptocurrency wallet and trading platform with built-in exchange, staking, and DeFi integration for Bitcoin, Ethereum, and altcoins.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&q=80",
    tags: ["Blockchain", "Solidity", "Web3", "Cryptography"],
  },
  {
    id: 5,
    title: "ChainLedger",
    category: "Blockchain",
    description:
      "Enterprise blockchain solution for transparent supply chain tracking, smart contract automation, and immutable audit trails for manufacturing and retail.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80",
    tags: ["Hyperledger", "Smart Contracts", "Supply Chain", "DeFi"],
  },
  {
    id: 6,
    title: "WebCraft Pro",
    category: "Websites",
    description:
      "Full-featured corporate website with headless CMS, multi-language support, SEO optimization, and seamless third-party integrations for global businesses.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    tags: ["Next.js", "Headless CMS", "SEO", "Responsive"],
  },
  {
    id: 7,
    title: "Shopify Plus Store",
    category: "Websites",
    description:
      "High-conversion e-commerce website with custom theme development, payment gateway integration, inventory management, and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    tags: ["Shopify", "React", "Stripe", "Analytics"],
  },
  {
    id: 8,
    title: "AppFlow",
    category: "Mobile Apps",
    description:
      "Cross-platform service booking mobile app with real-time availability, in-app payments, push notifications, and user reviews for local service providers.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    tags: ["React Native", "Firebase", "Node.js", "Push Notifications"],
  },
  {
    id: 9,
    title: "HealthSync",
    category: "Mobile Apps",
    description:
      "Mobile health and telemedicine app with appointment scheduling, video consultations, medication reminders, and wearable device integration for patient monitoring.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    tags: ["Flutter", "WebRTC", "HealthKit", "HIPAA"],
  },
  {
    id: 10,
    title: "Letro",
    category: "Finance",
    description:
      "A comprehensive financial management platform that helps businesses track expenses, manage invoices, and generate real-time financial reports.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: 11,
    title: "E-Learning Platform",
    category: "E-commerce",
    description:
      "An interactive online learning platform with video courses, live sessions, assessments, and certification management for educational institutions.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
    tags: ["Next.js", "Python", "MongoDB", "Docker"],
  },
  {
    id: 12,
    title: "Smart City",
    category: "Smart City",
    description:
      "An IoT-enabled urban management dashboard for traffic monitoring, waste management, energy optimization, and public safety analytics.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&q=80",
    tags: ["React", "Python", "InfluxDB", "AWS IoT"],
  },
  {
    id: 13,
    title: "AgriSense",
    category: "AgriTech",
    description:
      "A precision agriculture solution using satellite imagery and IoT sensors to monitor crop health, optimize irrigation, and predict yields.",
    image: "https://images.unsplash.com/photo-1586771107445-b3b013690ad3?w=600&q=80",
    tags: ["React Native", "Python", "TensorFlow", "AWS"],
  },
  {
    id: 14,
    title: "EcoTrack",
    category: "Smart City",
    description:
      "An environmental monitoring system that tracks air quality, water levels, and carbon emissions with actionable sustainability insights.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
    tags: ["Vue.js", "Python", "TimescaleDB", "Azure"],
  },
  {
    id: 15,
    title: "CyberShield",
    category: "Finance",
    description:
      "An enterprise-grade cybersecurity platform providing real-time threat detection, vulnerability scanning, and automated incident response.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    tags: ["Go", "Elasticsearch", "Kafka", "Docker"],
  },
  {
    id: 16,
    title: "PayGo",
    category: "FinTech",
    description:
      "A mobile payment and digital wallet platform enabling seamless peer-to-peer transfers, bill payments, and merchant transactions across Africa.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
    tags: ["Flutter", "Node.js", "Firebase", "Stripe"],
  },
  {
    id: 17,
    title: "TravelPro",
    category: "E-commerce",
    description:
      "A travel booking platform offering flight and hotel reservations, itinerary planning, and real-time travel alerts with multi-currency support.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80",
    tags: ["Angular", "Java", "MySQL", "GCP"],
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <SEO
        title="Our Portfolio"
        description="Showcasing our best work across industries including finance, e-commerce, healthcare, smart city, and fintech solutions."
      />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden text-white py-20 lg:py-28">
        <div className="absolute inset-0">
          <CreativeImage
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1500&q=80"
            alt="Digital workspace"
            aspectRatio=""
            rounded=""
            className="absolute inset-0 w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
        </div>

        {/* Decorative */}
        <div className="absolute inset-0 bg-dots opacity-20" />
        <div className="absolute top-20 right-20 w-80 h-80 border border-white/10 rounded-full animate-float-slow opacity-20 hidden lg:block" />
        <div className="absolute bottom-10 right-40 w-32 h-32 border border-white/10 rounded-full animate-float opacity-15 hidden lg:block" style={{ animationDelay: "-1.5s" }} />
        <div className="absolute top-40 left-20 w-96 h-96 border border-white/[0.04] rounded-full animate-spin-slow hidden lg:block" />
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border border-white/10 rotate-45 animate-float-fast opacity-15 hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4 border border-white/10">
              <FolderOpen size={14} />
              Our Work
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Our{" "}
              <span className="text-white/80">Portfolio</span>
            </h1>
            <p className="mt-6 text-lg text-white/90 max-w-xl leading-relaxed">
              Showcasing our best work across industries. Each project represents a partnership built on innovation, quality, and results.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FILTER ===== */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Filter size={18} className="text-primary mr-1 shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-gradient-brand text-white shadow-md"
                    : "bg-muted text-secondary hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section className="pb-20 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <ScrollReveal
                key={project.id}
                variant="fade-up"
                delay={(index % 6) * 80}
              >
                <div className="group gradient-border-card bg-white rounded-xl border border-border shadow-sm overflow-hidden">
                  {/* Image Header */}
                  <div className="relative h-52 overflow-hidden bg-muted">
                    <CreativeImage
                      src={project.image}
                      alt={project.title}
                      aspectRatio=""
                      rounded=""
                      className="absolute inset-0 w-full h-full"
                      zoomOnHover
                    />
                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-block px-2.5 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-semibold rounded-full shadow-sm">
                        {project.category}
                      </span>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white text-sm font-medium flex items-center gap-1.5">
                        <ExternalLink size={14} />
                        View Case Study
                      </span>
                    </div>
                  </div>
                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-secondary leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-muted text-secondary text-xs font-medium rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-primary cursor-pointer transition-colors duration-200">
                      <ExternalLink size={14} />
                      Case Study
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0">
          <CreativeImage
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1500&q=80"
            alt="Strategic planning"
            aspectRatio=""
            rounded=""
            className="absolute inset-0 w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/70" />
        </div>
        <div className="absolute inset-0 bg-dots opacity-10" />
        <div className="absolute top-10 right-10 w-40 h-40 border border-white/10 rounded-full animate-float-slow opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal variant="fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium mb-6 border border-white/10">
              <Sparkles size={14} />
              Start Your Next Project
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Have a Project in Mind?
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
              Let's create something amazing together. Get in touch and we'll bring your ideas to life.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold no-underline hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                Start a Project
                <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}