import React from "react";
import { motion } from "framer-motion";
import { assets, aboutInfo } from "../assets/assets.js";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.15 }}
      id="about"
      className="relative py-24 bg-dark-200 text-white overflow-hidden"
    >
      {/* Subtle Ambient Background Glow (Matched with Hero) */}
      <div className="pointer-events-none absolute top-1/4 left-10 w-72 h-72 bg-purple/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-10 w-72 h-72 bg-pink/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-3.5 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-purple/10 border border-purple/20 text-purple">
            Who I Am
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            About <span className="text-purple">Me</span>
          </h2>
          <p className="text-gray-400 font-medium max-w-2xl mx-auto text-base sm:text-lg">
            Get to know more about my background and passion for building modern
            web applications
          </p>
        </div>

        {/* Image and My Journey Layout (Matched with Hero Image Frame & Polish) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              {/* Outer glowing ring */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple via-pink to-purple opacity-40 blur-lg animate-pulse" />

              {/* Image Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-1.5 bg-gradient-to-tr from-purple to-pink">
                <div className="w-full h-full rounded-full overflow-hidden bg-dark-200">
                  <motion.img
                    animate={{ y: [0, -12, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                    src={assets.profileImg}
                    alt="Grim Ending Profile"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Journey & Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="md:w-1/2 space-y-6 text-center md:text-left"
          >
            <h3 className="text-2xl sm:text-3xl font-bold">
              My <span className="text-purple">Journey</span>
            </h3>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I&apos;m a passionate full-stack developer dedicated to building
              clean, scalable, and user-focused web applications. My journey
              started with a curiosity for how things work on the web and
              evolved into crafting complete digital products from intuitive
              frontends to reliable backend systems.
            </p>
            <p className="text-base text-gray-400 leading-relaxed">
              Whether working on modern React interfaces, RESTful APIs, or cloud
              deployments, I focus on writing maintainable code and delivering
              seamless user experiences.
            </p>
          </motion.div>
        </div>

        {/* Bottom Feature Cards Mapped from aboutInfo */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
          {aboutInfo.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-dark-300/60 border border-white/10 hover:border-purple/40 transition-colors"
              >
                <IconComponent className={`text-3xl mb-4 ${item.color}`} />
                <h4 className="font-semibold text-white text-lg mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
