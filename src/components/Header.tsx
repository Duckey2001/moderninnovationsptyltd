import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 text-primary font-bold text-2xl lg:text-3xl no-underline hover:opacity-80 cursor-pointer group"
            onClick={closeMenu}
          >
            <img
              src="https://raw.githubusercontent.com/Duckey2001/moderninnovationsptyltd/main/Modern%20inno.png"
              alt="Modern Innovations Logo"
              className="h-12 sm:h-14 w-auto group-hover:scale-110 transition-transform duration-300"
            />
            <span className="hidden sm:inline gradient-text">Modern Innovations</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `relative px-5 py-2.5 text-sm font-medium no-underline cursor-pointer transition-colors duration-200 rounded-lg $
                    isActive
                      ? "text-white bg-gradient-brand"
                      : "text-secondary hover:text-primary hover:bg-muted"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <ThemeToggle />
            <Link
              to="/contact"
              className="ml-2 bg-gradient-brand text-white px-5 py-2.5 rounded-lg text-sm font-semibold no-underline hover:opacity-90 hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-primary cursor-pointer hover:bg-muted rounded-lg transition-colors duration-200"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <div className="transition-transform duration-300" style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0)" }}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border px-4 py-4">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm font-medium no-underline cursor-pointer transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-brand text-white"
                      : "text-secondary hover:bg-muted hover:text-primary"
                  }`
                }
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="flex items-center gap-2 mt-2">
              <ThemeToggle />
              <Link
                to="/contact"
                className="flex-1 bg-gradient-brand text-white text-center px-5 py-3 rounded-lg text-sm font-semibold no-underline hover:opacity-90 hover:scale-[1.02] transition-all duration-200 cursor-pointer"
                onClick={closeMenu}
              >
                Get in Touch
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}