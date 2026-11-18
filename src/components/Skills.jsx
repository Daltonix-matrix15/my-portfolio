import React from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/assets.js";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="skills"
      className="py-20 bg-dark-100 text-white"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-purple">Skills</span>
        </h2>
        <p className="text-center text-gray-400 font-medium max-w-2xl mx-auto mb-16">
          Technologies and tools I use to bring ideas to life
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl bg-dark-300/60 border border-white/10 hover:border-purple/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-purple/10 border border-purple/20 flex items-center justify-center shrink-0">
                      <IconComponent className="text-2xl text-purple" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {skill.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {skill.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                  {skill.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-dark-200 text-gray-300 border border-white/10 hover:border-purple/40 hover:text-purple transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
