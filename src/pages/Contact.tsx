import { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle, Clock, Sparkles } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import CreativeImage from "../components/CreativeImage";
import SEO from "../components/SEO";

const serviceOptions = [
  { value: "", label: "Select a service..." },
  { value: "Software Development", label: "Software Development" },
  { value: "Web & App Design", label: "Web & App Design" },
  { value: "Cybersecurity", label: "Cybersecurity" },
  { value: "Cloud Solutions", label: "Cloud Solutions" },
  { value: "AI & Automation", label: "AI & Automation" },
  { value: "IT Consulting", label: "IT Consulting" },
  { value: "Other", label: "Other" },
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  service_interest: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

type ToastState = {
  type: "success" | "error";
  message: string;
} | null;

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service_interest: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const { submitContactForm } = await import("../lib/supabase");
      await submitContactForm(formData);

      setToast({
        type: "success",
        message: "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", service_interest: "", message: "" });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setToast({ type: "error", message });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setToast(null), 6000);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Modern Innovations Pty Ltd. Contact us for a free consultation about your technology needs. Based in Maseru, Lesotho."
      />
      {toast && (
        <div
          className={`fixed top-24 right-4 sm:right-6 z-50 flex items-start gap-3 p-4 rounded-lg shadow-lg border animate-slide-up max-w-md ${
            toast.type === "success"
              ? "bg-green-50 border-green-200 text-green-800"
              : "bg-red-50 border-red-200 text-red-800"
          }`}
        >
          {toast.type === "success" ? (
            <CheckCircle2 size={20} className="shrink-0 text-green-600" />
          ) : (
            <AlertCircle size={20} className="shrink-0 text-red-600" />
          )}
          <p className="text-sm font-medium flex-1">{toast.message}</p>
          <button
            onClick={() => setToast(null)}
            className="shrink-0 text-current opacity-60 hover:opacity-100 cursor-pointer"
            aria-label="Dismiss"
          >
            &times;
          </button>
        </div>
      )}

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden text-white py-20 lg:py-28">
        <div className="absolute inset-0">
          <CreativeImage
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1500&q=80"
            alt="Office workspace"
            aspectRatio=""
            rounded=""
            className="absolute inset-0 w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
        </div>

        {/* Decorative */}
        <div className="absolute inset-0 bg-dots opacity-20" />
        <div className="absolute top-10 right-10 w-64 h-64 border border-white/10 rounded-full animate-float-slow opacity-20 hidden lg:block" />
        <div className="absolute bottom-10 left-10 w-32 h-32 border border-white/10 rounded-full animate-float opacity-10 hidden lg:block" style={{ animationDelay: "-2s" }} />
        <div className="absolute bottom-1/3 right-1/3 w-16 h-16 border border-white/10 rotate-45 animate-float-fast opacity-15 hidden lg:block" />
        <div className="absolute top-40 left-40 w-80 h-80 border border-white/[0.04] rounded-full animate-spin-slow hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-up" className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4 border border-white/10">
              <Sparkles size={14} />
              Let's Connect
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Get in{" "}
              <span className="text-white/80">Touch</span>
            </h1>
            <p className="mt-6 text-lg text-white/90 max-w-xl leading-relaxed">
              Have a project in mind? We'd love to hear from you. Fill out the form and we'll get back to you within 24 hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CONTACT FORM & INFO ===== */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Form */}
            <ScrollReveal variant="fade-right" className="lg:col-span-3">
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-1.5">
                    Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text" id="name" name="name" value={formData.name}
                    onChange={handleChange} placeholder="Your full name"
                    className={`w-full px-4 py-3 rounded-lg border text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary hover:border-primary/50 ${
                      errors.name ? "border-destructive" : "border-border"
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-1.5">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email" id="email" name="email" value={formData.email}
                    onChange={handleChange} placeholder="you@company.com"
                    className={`w-full px-4 py-3 rounded-lg border text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary hover:border-primary/50 ${
                      errors.email ? "border-destructive" : "border-border"
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1.5">
                    Phone <span className="text-secondary font-normal">(optional)</span>
                  </label>
                  <input
                    type="tel" id="phone" name="phone" value={formData.phone}
                    onChange={handleChange} placeholder="+266 5762 0256"
                    className="w-full px-4 py-3 rounded-lg border border-border text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary hover:border-primary/50"
                  />
                </div>

                <div>
                  <label htmlFor="service_interest" className="block text-sm font-medium text-primary mb-1.5">
                    Service Interest <span className="text-secondary font-normal">(optional)</span>
                  </label>
                  <select
                    id="service_interest" name="service_interest" value={formData.service_interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border text-sm bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary hover:border-primary/50"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-1.5">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message" name="message" rows={5} value={formData.message}
                    onChange={handleChange} placeholder="Tell us about your project..."
                    className={`w-full px-4 py-3 rounded-lg border text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary hover:border-primary/50 resize-vertical ${
                      errors.message ? "border-destructive" : "border-border"
                    }`}
                  />
                  {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message}</p>}
                </div>

                <button
                  type="submit" disabled={isSubmitting}
                  className="inline-flex items-center gap-2 bg-gradient-brand text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer transition-all duration-200"
                >
                  {isSubmitting ? (
                    <><Loader2 size={18} className="animate-spin" /> Sending...</>
                  ) : (
                    <><Send size={18} /> Send Message</>
                  )}
                </button>
              </form>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal variant="fade-left" className="lg:col-span-2">
              <div className="relative overflow-hidden glass rounded-2xl p-8 lg:p-10">
                <div className="absolute inset-0 opacity-5">
                  <CreativeImage
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80"
                    alt="" aspectRatio="" rounded=""
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="relative">
                  <h3 className="text-xl font-bold text-primary mb-6">Contact Information</h3>
                  <div className="space-y-5">
                    <ScrollReveal variant="fade-up" delay={0}>
                      <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 bg-gradient-brand/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-gradient-brand/20 group-hover:scale-110 transition-all duration-300">
                          <Mail size={18} className="text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-primary">Email</p>
                          <a href="mailto:info@moderninnovations.co.ls" className="text-sm text-secondary hover:text-primary no-underline transition-colors duration-200 cursor-pointer">
                            info@moderninnovations.co.ls
                          </a>
                        </div>
                      </div>
                    </ScrollReveal>

                    <ScrollReveal variant="fade-up" delay={100}>
                      <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 bg-gradient-brand/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-gradient-brand/20 group-hover:scale-110 transition-all duration-300">
                          <Phone size={18} className="text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-primary">Phone</p>
                          <a href="tel:+26657620256" className="text-sm text-secondary hover:text-primary no-underline transition-colors duration-200 cursor-pointer">
                            +266 5762 0256
                          </a>
                        </div>
                      </div>
                    </ScrollReveal>

                    <ScrollReveal variant="fade-up" delay={200}>
                      <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 bg-gradient-brand/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-gradient-brand/20 group-hover:scale-110 transition-all duration-300">
                          <MapPin size={18} className="text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-primary">Office</p>
                          <p className="text-sm text-secondary">Maseru, Lesotho</p>
                        </div>
                      </div>
                    </ScrollReveal>

                    <ScrollReveal variant="fade-up" delay={250}>
                      <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 bg-gradient-brand/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-gradient-brand/20 group-hover:scale-110 transition-all duration-300">
                          <Clock size={18} className="text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-primary">Business Hours</p>
                          <p className="text-sm text-secondary">Mon – Fri: 8:00 AM – 5:00 PM CAT</p>
                          <p className="text-sm text-secondary">Sat: 9:00 AM – 1:00 PM CAT</p>
                          <p className="text-sm text-secondary">Sun: Closed</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>

                  <hr className="my-8 border-border" />

                  <ScrollReveal variant="fade-up" delay={300}>
                    <h4 className="text-sm font-semibold text-primary mb-3">Get In Touch</h4>
                    <p className="text-sm text-secondary leading-relaxed">
                      We're based in Maseru and serve clients across Lesotho and Africa.
                      Reach out and let's discuss how we can help your business grow.
                    </p>
                  </ScrollReveal>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}