import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaXTwitter, FaFacebook } from "react-icons/fa6";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

const services = [
  { to: "/services", label: "Software Development" },
  { to: "/services", label: "Web & App Design" },
  { to: "/services", label: "Cybersecurity" },
  { to: "/services", label: "Cloud Solutions" },
  { to: "/services", label: "AI & Automation" },
  { to: "/services", label: "IT Consulting" },
];

const socialLinks = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/company/modern-innovations-lesotho", label: "LinkedIn" },
  { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61577627173586", label: "Facebook" },
  { icon: FaGithub, href: "#", label: "GitHub" },
  { icon: FaXTwitter, href: "#", label: "X (Twitter)" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-brand text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="flex items-center gap-2 text-white font-bold text-xl no-underline group cursor-pointer"
            >
              <span className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                MI
              </span>
              Modern Innovations
            </Link>
            <p className="mt-4 text-sm text-white/80 leading-relaxed max-w-xs">
              Empowering businesses in Lesotho and beyond with cutting-edge technology solutions. We deliver software, web, cloud, AI, and cybersecurity services that drive growth.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white/80 hover:bg-white hover:text-primary hover:scale-110 transition-all duration-200 cursor-pointer"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.to + link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 hover:text-white hover:translate-x-1 no-underline transition-all duration-200 cursor-pointer inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.to}
                    className="text-sm text-white/70 hover:text-white hover:translate-x-1 no-underline transition-all duration-200 cursor-pointer inline-block"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@moderninnovations.co.ls"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white hover:translate-x-1 no-underline transition-all duration-200 cursor-pointer"
                >
                  <Mail size={14} className="shrink-0" />
                  info@moderninnovations.co.ls
                </a>
              </li>
              <li>
                <a
                  href="tel:+26657620256"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white hover:translate-x-1 no-underline transition-all duration-200 cursor-pointer"
                >
                  <Phone size={14} className="shrink-0" />
                  +266 5762 0256
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin size={14} className="shrink-0 mt-0.5" />
                <span>Maseru, Lesotho</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>
            &copy; {new Date().getFullYear()} Modern Innovations Pty Ltd. All
            rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white no-underline cursor-pointer transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white no-underline cursor-pointer transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}