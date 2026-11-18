import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section smoothly
      const sections = navLinks.map((link) => link.href.substring(1));
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#121212]/90 backdrop-blur-md py-3.5 border-b border-white/10 shadow-xl shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-1.5 font-bold text-white text-2xl tracking-tight group"
        >
          <span>
            Grim<span className="text-purple">Ending</span>
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-purple group-hover:scale-125 group-hover:bg-pink transition-all duration-300" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-300 group ${
                  isActive ? "text-purple" : "text-gray-300 hover:text-white"
                }`}
              >
                <span>{link.name}</span>
                <span
                  className={`absolute left-0 -bottom-1.5 h-0.5 bg-gradient-to-r from-purple to-pink transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}

          {/* Desktop CTA Button */}
          <a
            href="#contact"
            className="ml-2 px-4 py-2 text-sm font-semibold rounded-xl bg-purple/15 text-purple border border-purple/30 hover:bg-purple hover:text-white transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger / Close Button */}
        <button
          type="button"
          aria-label="Toggle Menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors text-xl"
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Animated Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#161616]/95 backdrop-blur-lg border-b border-white/10"
          >
            <div className="container mx-auto px-6 py-5 flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`py-2 px-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "bg-purple/15 text-purple"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 py-2.5 text-center rounded-xl bg-purple text-white font-semibold shadow-lg shadow-purple/25"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
