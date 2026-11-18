import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { workData } from "../assets/assets.js";

const colorMap = {
  purple: {
    dot: "bg-purple shadow-purple/50",
    badge: "bg-purple/10 text-purple border-purple/20",
    hoverBorder: "hover:border-purple/50",
    text: "text-purple",
  },
  pink: {
    dot: "bg-pink shadow-pink/50",
    badge: "bg-pink/10 text-pink border-pink/20",
    hoverBorder: "hover:border-pink/50",
    text: "text-pink",
  },
  blue: {
    dot: "bg-blue shadow-blue/50",
    badge: "bg-blue/10 text-blue border-blue/20",
    hoverBorder: "hover:border-blue/50",
    text: "text-blue",
  },
};

const Experience = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.15 }}
      id="experience"
      className="relative py-24 bg-dark-100 text-white overflow-hidden"
    >
      {/* Subtle Ambient Background Glow */}
      <div className="pointer-events-none absolute top-1/4 right-10 w-80 h-80 bg-purple/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 left-10 w-80 h-80 bg-blue/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-3.5 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-purple/10 border border-purple/20 text-purple">
            Career Path
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Work <span className="text-purple">Experience</span>
          </h2>
          <p className="text-gray-400 font-medium max-w-2xl mx-auto text-base sm:text-lg">
            My professional journey and key roles in building modern software
            solutions
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Gradient Line (Left on mobile, center on desktop) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple via-pink to-blue transform md:-translate-x-1/2 opacity-40" />

          <div className="space-y-12">
            {workData.map((item, index) => {
              const theme = colorMap[item.color] || colorMap.purple;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node Dot */}
                  <div
                    className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-dark-100 transform -translate-x-1/2 mt-6 md:mt-0 z-10 shadow-lg ${theme.dot}`}
                  />

                  {/* Empty Spacer for Alternating Desktop Layout */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                      isEven ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                      className={`p-6 sm:p-7 rounded-2xl bg-dark-300/60 border border-white/10 ${theme.hoverBorder} transition-all duration-300 shadow-xl shadow-black/20`}
                    >
                      {/* Duration Pill */}
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${theme.badge}`}
                      >
                        <FaCalendarAlt className="text-[11px]" />
                        <span>{item.duration}</span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-4">
                        <FaBriefcase className={`text-xs ${theme.text}`} />
                        <span>{item.company}</span>
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
