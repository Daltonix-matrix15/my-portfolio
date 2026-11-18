import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets.js";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      id="home"
      className="min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#121212] text-white relative overflow-hidden"
    >
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-pink/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between relative z-10 gap-12">
        {/* Left side content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple/10 border border-purple/20 text-purple text-xs font-semibold tracking-wider uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-purple animate-pulse" />
            Available for Opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Hi, I&apos;m <span className="text-purple">Grim Ending</span>
          </h1>

          <h2 className="typewriter text-center text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-gray-300">
            Full Stack Developer
          </h2>

          <p className="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
            I architect and build scalable, high-performance web applications
            from the database up to the user interface. Specializing in modern
            JavaScript frameworks, robust back-end APIs, and seamless digital
            experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl bg-purple text-white font-medium shadow-lg shadow-purple/25 hover:bg-purple/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl border-2 border-purple/50 text-white font-medium hover:bg-purple/10 hover:border-purple hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right side content --- profile image --- */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
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
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
