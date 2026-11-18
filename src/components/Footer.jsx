import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <footer className="bg-[#0e0e0e] border-t border-white/10 text-gray-400 py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="inline-flex items-center gap-1.5 font-bold text-white text-2xl tracking-tight group mb-2"
            >
              <span>
                Grim<span className="text-purple">Ending</span>
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-purple group-hover:scale-125 group-hover:bg-pink transition-all duration-300" />
            </a>
            <p className="text-sm text-gray-400 max-w-sm">
              Full-Stack & Backend Engineer building robust, scalable web
              applications and intuitive digital experiences.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <a href="#home" className="hover:text-purple transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-purple transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-purple transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-purple transition-colors">
              Projects
            </a>
            <a
              href="#experience"
              className="hover:text-purple transition-colors"
            >
              Experience
            </a>
            <a href="#contact" className="hover:text-purple transition-colors">
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-dark-300/80 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-purple hover:bg-purple/20 transition-all duration-300"
                >
                  <IconComponent className="text-base" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Copyright & Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {currentYear} Grim Ending. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-purple">React</span>,{" "}
            <span className="text-pink">Tailwind CSS</span> &{" "}
            <span className="text-blue">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
