import { Search, PenTool, Code, Rocket } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    subtitle: "Research & Strategy",
    description:
      "We dive deep into your business, goals, and challenges. Our team conducts market research, stakeholder interviews, and technical audits to build a solid foundation.",
    color: "from-sky-400 to-blue-500",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design",
    subtitle: "UI/UX & Prototyping",
    description:
      "Our designers craft intuitive interfaces and seamless experiences. We create wireframes, interactive prototypes, and visual designs that align with your brand.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Code,
    number: "03",
    title: "Develop",
    subtitle: "Build & Test",
    description:
      "Our engineers bring designs to life using modern frameworks and best practices. We follow agile methodology with continuous testing and iteration.",
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Deploy",
    subtitle: "Launch & Support",
    description:
      "We handle deployment, monitoring, and optimization. Post-launch, we provide ongoing support, maintenance, and continuous improvements.",
    color: "from-violet-500 to-purple-500",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up" className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            How We Work
          </h2>
          <p className="mt-4 text-secondary text-lg">
            From idea to launch, our proven methodology ensures success at every stage.
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-24 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-0.5 bg-gradient-to-r from-sky-300 via-indigo-300 to-purple-300 dark:from-sky-700 dark:via-indigo-700 dark:to-purple-700" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <ScrollReveal
                key={step.title}
                variant="fade-up"
                delay={index * 150}
              >
                <div className="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 lg:p-8 border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                  {/* Step number - top right */}
                  <span className="absolute top-4 right-5 text-4xl font-bold text-primary/5 dark:text-primary/10 select-none">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <step.icon
                      size={26}
                      className="text-primary group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Connecting dot on desktop */}
                  <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-gray-900 shadow-md z-10" />

                  {/* Content */}
                  <h3 className="text-xl font-bold text-primary">{step.title}</h3>
                  <p className="text-sm font-medium text-accent mt-0.5">
                    {step.subtitle}
                  </p>
                  <p className="mt-3 text-sm text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}