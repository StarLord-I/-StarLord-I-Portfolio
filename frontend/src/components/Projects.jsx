import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, Film, Music, Building2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'CineFinder',
      category: '01. WEB APP',
      year: '2024',
      badgeColor: 'text-[#E25327] dark:text-[#E8734B]',
      description: 'A responsive movie discovery platform built with React and the MERN stack. Features physics-based interactions powered by Framer Motion and live TMDB telemetry.',
      tags: ['React.js', 'Framer Motion', 'REST APIs', 'Tailwind CSS'],
      liveUrl: 'https://cine-finder-mern.vercel.app',
      githubUrl: 'https://github.com/StarLord-I',
      icon: <Film className="w-4 h-4 text-[#E25327] dark:text-[#E8734B]" />,
    },
    {
      title: 'Fab Five DHH',
      category: '02. TRIBUTE',
      year: '2024',
      badgeColor: 'text-[#1B5DEF] dark:text-[#4A7FF7]',
      description: 'An interactive frontend platform celebrating pioneers of Desi Hip-Hop. Built with high-performance animations, fluid motion graphics, and audio sync waves.',
      tags: ['React', 'Framer Motion', 'Audio Sync', 'Tailwind'],
      liveUrl: 'https://fab-five-of-dhh.vercel.app',
      githubUrl: 'https://github.com/StarLord-I',
      icon: <Music className="w-4 h-4 text-[#1B5DEF] dark:text-[#4A7FF7]" />,
    },
    {
      title: 'Zilla Parishad Management System',
      category: '03. ENTERPRISE',
      year: '2025',
      badgeColor: 'text-emerald-500',
      description: 'A civic administrative records management web application built for Zilla Parishad, Chandrapur. Streamlined public records dispatch and multi-tier databases.',
      tags: ['Node.js', 'Express', 'Relational DB', 'Stakeholder Verified'],
      liveUrl: null,
      githubUrl: 'https://github.com/StarLord-I',
      icon: <Building2 className="w-4 h-4 text-emerald-500" />,
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 border-t border-black/10 dark:border-white/10">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="font-mono text-xs text-[#1B5DEF] dark:text-[#4A7FF7] font-semibold tracking-wider uppercase mb-1">
            03 // FEATURED WORK
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black dark:text-white">
            Selected Projects
          </h2>
        </div>
        <a
          href="https://github.com/StarLord-I"
          target="_blank"
          rel="noreferrer"
          className="font-mono text-xs text-[#1B5DEF] dark:text-[#4A7FF7] hover:underline flex items-center gap-1"
        >
          <span>all repositories on github</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="card-interactive bg-white dark:bg-[#1C1C1E] border border-black/10 dark:border-white/10 rounded-xl p-6 flex flex-col justify-between shadow-sm"
          >
            <div>
              {/* Category & Year */}
              <div className="flex items-center justify-between mb-4 font-mono text-xs">
                <span className={`font-semibold ${project.badgeColor}`}>
                  {project.category}
                </span>
                <span className="text-gray-400 dark:text-gray-500">{project.year}</span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded border border-black/5 dark:border-white/5 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 text-[11px] font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Action Links */}
            <div className="pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between font-mono text-xs">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>source</span>
              </a>

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#1B5DEF] dark:text-[#4A7FF7] font-semibold hover:underline flex items-center gap-1"
                >
                  <span>live demo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <span className="text-gray-400 dark:text-gray-500 text-[11px]">Client Deployed</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
