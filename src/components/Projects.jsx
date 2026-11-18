import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { projects } from "../assets/assets.js";

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filterTabs = [
    "All",
    "React",
    "Node.js",
    "Vue.js",
    "React Native",
    "Next.js",
  ];

  // Filter projects based on selected tech tab
  const filteredProjects =
    selectedTech === "All"
      ? projects
      : projects.filter((project) => project.tech.includes(selectedTech));

  // Limit to initial 3 projects unless "Show More" is clicked or a specific filter tab is active
  const displayedProjects =
    selectedTech === "All" && !showAll
      ? filteredProjects.slice(0, 3)
      : filteredProjects;

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      id="projects"
      className="relative py-24 bg-dark-200 text-white overflow-hidden"
    >
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute top-1/3 left-10 w-80 h-80 bg-purple/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-10 w-80 h-80 bg-pink/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block px-3.5 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-purple/10 border border-purple/20 text-purple">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Featured <span className="text-purple">Projects</span>
          </h2>
          <p className="text-gray-400 font-medium max-w-2xl mx-auto text-base sm:text-lg">
            A selection of real-world applications I&apos;ve designed,
            engineered, and deployed
          </p>
        </div>

        {/* Interactive Tech Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {filterTabs.map((tech) => (
            <button
              key={tech}
              type="button"
              onClick={() => {
                setSelectedTech(tech);
                setShowAll(false); // Reset show more when switching tabs
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                selectedTech === tech
                  ? "bg-purple text-white shadow-lg shadow-purple/25"
                  : "bg-dark-300/60 text-gray-400 border border-white/10 hover:border-purple/40 hover:text-white"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl overflow-hidden bg-dark-300/60 border border-white/10 hover:border-purple/50 transition-all duration-300 flex flex-col justify-between shadow-xl shadow-black/20"
              >
                <div>
                  {/* Project Thumbnail & Hover Action Overlay */}
                  <div className="relative h-52 overflow-hidden bg-dark-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Floating Stack Icons (Top Left) */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                      {project.icons.map((IconComponent, iconIdx) => (
                        <span
                          key={iconIdx}
                          className="w-8 h-8 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-purple text-sm"
                        >
                          <IconComponent />
                        </span>
                      ))}
                    </div>

                    {/* Hover Quick Action Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Live demo of ${project.title}`}
                        className="p-3 rounded-full bg-purple text-white hover:bg-purple/90 hover:scale-110 transition-all shadow-lg shadow-purple/30"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                      </a>
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Source code of ${project.title}`}
                        className="p-3 rounded-full bg-dark-200 text-white border border-white/20 hover:border-purple hover:text-purple hover:scale-110 transition-all shadow-lg"
                      >
                        <FaGithub className="text-base" />
                      </a>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 pb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Tech Badges & Links */}
                <div className="px-6 pb-6 pt-2 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((techItem, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-dark-200 text-gray-300 border border-white/10"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-purple hover:underline"
                    >
                      <span>Live Demo</span>
                      <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors"
                    >
                      <FaGithub className="text-sm" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More / Show Less Toggle Button (Visible when on "All" tab and projects exceed initial limit) */}
        {selectedTech === "All" && projects.length > 3 && (
          <div className="mt-14 text-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-dark-300/80 hover:bg-purple text-white font-medium text-sm border border-white/10 hover:border-purple transition-all duration-300 shadow-lg"
            >
              <span>
                {showAll
                  ? "Show Less Projects"
                  : `Explore All Projects (${projects.length})`}
              </span>
              {showAll ? (
                <FaChevronUp className="text-xs" />
              ) : (
                <FaChevronDown className="text-xs" />
              )}
            </button>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Projects;
