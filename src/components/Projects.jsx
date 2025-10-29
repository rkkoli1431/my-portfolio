import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mt-[-1rem] mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300"
            >
              {/* Image wrapped with link */}
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden group"
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                />
              </a>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-1" />
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
