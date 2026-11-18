import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "success"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate network submission (replace with EmailJS, Formspree, or your Node.js API)
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1000);
  };

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.15 }}
      id="contact"
      className="relative py-24 bg-dark-200 text-white overflow-hidden"
    >
      {/* Subtle Ambient Background Glow */}
      <div className="pointer-events-none absolute top-1/4 left-10 w-80 h-80 bg-purple/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-10 w-80 h-80 bg-pink/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-3.5 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-purple/10 border border-purple/20 text-purple">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Contact <span className="text-purple">Me</span>
          </h2>
          <p className="text-gray-400 font-medium max-w-2xl mx-auto text-base sm:text-lg">
            Have a project in mind, a backend architecture challenge, or an
            opportunity to discuss? Let&apos;s connect.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-7 rounded-2xl bg-dark-300/60 border border-white/10 space-y-6 shadow-xl shadow-black/20">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Let&apos;s build something{" "}
                  <span className="text-purple">great</span>
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  I&apos;m currently open to full-stack and backend engineering
                  roles, freelance projects, and technical collaborations.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-purple/10 border border-purple/20 flex items-center justify-center text-purple shrink-0">
                    <FaEnvelope className="text-lg" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">
                      Email
                    </p>
                    <a
                      href="mailto:hello@grimending.dev"
                      className="text-sm sm:text-base font-medium text-white hover:text-purple transition-colors"
                    >
                      grimending15@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-purple/10 border border-purple/20 flex items-center justify-center text-purple shrink-0">
                    <FaMapMarkerAlt className="text-lg" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-sm sm:text-base font-medium text-white">
                      Remote / Worldwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">
                  Connect With Me
                </p>
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
                        className="w-10 h-10 rounded-xl bg-dark-200 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-purple hover:bg-purple/20 transition-all duration-300"
                      >
                        <IconComponent className="text-lg" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-7 sm:p-8 rounded-2xl bg-dark-300/60 border border-white/10 space-y-5 shadow-xl shadow-black/20"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-dark-200 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-dark-200 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry / Collaboration"
                  className="w-full px-4 py-3 rounded-xl bg-dark-200 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, and goals..."
                  className="w-full px-4 py-3 rounded-xl bg-dark-200 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition-colors resize-none"
                />
              </div>

              {/* Submit Button & Feedback */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-purple hover:bg-purple/90 disabled:opacity-60 text-white font-semibold text-sm shadow-lg shadow-purple/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  {status === "submitting" ? (
                    <span>Sending Message...</span>
                  ) : status === "success" ? (
                    <>
                      <FaCheckCircle className="text-base" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaPaperPlane className="text-xs" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
