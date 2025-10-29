import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.15,
      ease: "easeOut",
    },
  }),
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg"
        >
          Skills & Technologies
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true, amount: 0.2 }}
                className="group bg-gray-800/40 backdrop-blur-md rounded-xl p-6 border border-gray-700/40 hover:border-blue-500/40 shadow-lg hover:shadow-blue-500/10 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`bg-gradient-to-br ${skill.color} rounded-lg p-4 mb-4 inline-block shadow-md`}
                >
                  <Icon className="w-8 h-8 text-white drop-shadow-sm" />
                </div>
                <h3 className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
