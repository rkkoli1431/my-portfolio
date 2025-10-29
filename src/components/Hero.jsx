import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import rk from "../assets/rk.jpg";


const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-24 bg-gradient-to-b from-gray-900 via-gray-800 to-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center"
      >
        {/* Profile Image with animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          viewport={{ once: true }}
          className="relative mb-10"
        >
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-[3px] shadow-lg shadow-blue-500/20 hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-full bg-gray-900 overflow-hidden">
              <img
                src={rk} 
                alt={personalInfo.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Hi, I'm {personalInfo.name}
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-gray-300 mb-6"
        >
          {personalInfo.title}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-8 mt-10"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110"
          >
            <Github className="w-7 h-7" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
          >
            <Linkedin className="w-7 h-7" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-gray-400 hover:text-pink-400 transition-colors transform hover:scale-110"
          >
            <Mail className="w-7 h-7" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
