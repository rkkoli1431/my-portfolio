import React from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import rk from "../assets/rk.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        {/* ===== LEFT: Profile Image with Animated Glow ===== */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl p-[3px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_40px_rgba(139,92,246,0.25)] hover:shadow-[0_0_60px_rgba(139,92,246,0.45)] transition-all duration-700"
          >
            <div className="w-full h-full rounded-3xl overflow-hidden bg-gray-900">
              <img
                src={rk}
                alt={personalInfo.name}
                className="w-full h-full object-cover rounded-3xl hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* ===== RIGHT: Text + Cards + CV ===== */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Heading */}
          <div className="relative inline-block mb-8">
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent relative z-10">
              About Me
            </h2>
            <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 blur-md"></div>
          </div>

          {/* Description */}
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="hover:text-gray-100 transition-colors"
            >
              👋 Hi! I'm{" "}
              <span className="text-blue-400 font-semibold">
                {personalInfo.name}
              </span>
              , a <span className="text-purple-400 font-semibold">Full Stack Developer</span> who
              loves creating elegant digital experiences with clean UI and
              efficient backend logic.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="hover:text-gray-100 transition-colors"
            >
              🌱 I’ve gained{" "}
              <span className="text-pink-400 font-semibold">6 Month </span> of
              practical experience working on modern web apps — building, optimizing,
              and deploying responsive, interactive, and user-focused products.
            </motion.p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <motion.div
              whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
              className="group bg-gray-800/50 hover:bg-gray-800/70 rounded-2xl p-6 border border-gray-700/40 hover:border-blue-400/50 transition-all duration-500 shadow-lg backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-400 group-hover:text-blue-300 transition-colors">
                🎓 Education
              </h3>
              <p className="text-gray-300 group-hover:text-gray-100 transition-colors">
                {personalInfo.education}
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
              className="group bg-gray-800/50 hover:bg-gray-800/70 rounded-2xl p-6 border border-gray-700/40 hover:border-purple-400/50 transition-all duration-500 shadow-lg backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-3 text-purple-400 group-hover:text-purple-300 transition-colors">
                💼 Experience
              </h3>
              <p className="text-gray-300 group-hover:text-gray-100 transition-colors">
                {personalInfo.experience}
              </p>
            </motion.div>
          </div>

          {/* Download CV */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="pt-6 flex md:justify-start justify-center"
          >
            <a
              href={personalInfo.cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 rounded-xl font-semibold text-white shadow-md hover:shadow-blue-500/40 transition-all duration-500 transform hover:-translate-y-1"
            >
              Download CV
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
