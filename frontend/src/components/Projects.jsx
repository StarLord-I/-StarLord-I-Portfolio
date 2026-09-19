import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Film, Music, Building2, Code2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'CineFinder',
      subtitle: 'MERN / React Tribute Platform',
      description: 'A frontend tribute platform built with React.js featuring physics-based interactions powered by Framer Motion, sleek movie discovery interface, and responsive design.',
      tags: ['React.js', 'Framer Motion', 'REST APIs', 'Tailwind CSS'],
      liveUrl: 'https://cine-finder-mern.vercel.app',
      githubUrl: 'https://github.com/StarLord-I',
      icon: <Film className="w-5 h-5 text-cyan-400" />,
      gradient: 'from-cyan-500/20 to-blue-500/20',
      border: 'hover:border-cyan-500/50',
    },
    {
      title: 'Fab Five DHH',
      subtitle: 'React & Framer Motion Experience',
      description: 'An interactive frontend platform showcasing design performance and smooth animations with Framer Motion, delivering engaging visual transitions and responsive layouts.',
      tags: ['React', 'Framer Motion', 'Tailwind CSS', 'UI Animation'],
      liveUrl: 'https://fab-five-of-dhh.vercel.app',
      githubUrl: 'https://github.com/StarLord-I',
      icon: <Music className="w-5 h-5 text-purple-400" />,
      gradient: 'from-purple-500/20 to-pink-500/20',
      border: 'hover:border-purple-500/50',
    },
    {
      title: 'Zilla Parishad Management System',
      subtitle: 'Final-Year Team Web Solution',
      description: 'A comprehensive web-based management solution built in collaboration with Zilla Parishad, Chandrapur. Focused on backend development, database management, and real stakeholder needs.',
      tags: ['Node.js', 'Express', 'Database Management', 'Full Stack'],
      liveUrl: '#',
      githubUrl: 'https://github.com/StarLord-I',
      icon: <Building2 className="w-5 h-5 text-yellow-400" />,
      gradient: 'from-yellow-500/25 to-amber-500/20',
      border: 'hover:border-yellow-500/50',
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-[#060810] relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Galactic Projects
          </h2>
          <p className="text-gray-400 mt-2 max-w-xl mx-auto">
            Explore web applications and platforms crafted with precision and creativity.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`bg-gray-900/60 border border-gray-800 rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between transition-all duration-300 ${project.border} group`}
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gray-800/80 border border-gray-700 group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                  <span className="text-xs font-mono text-purple-400 px-2.5 py-1 rounded-md bg-purple-950/50 border border-purple-500/30">
                    {project.subtitle}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-300 text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
                >
                  <Code2 className="w-4 h-4 text-purple-400" /> Source Code
                </a>
                {project.liveUrl !== '#' && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
