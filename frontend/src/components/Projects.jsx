import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, Film, Music, Building2 } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 border-t border-hairline">
      
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
          className="font-mono text-xs text-[#1B5DEF] dark:text-[#4A7FF7] hover:underline flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-accent)] rounded px-1.5 py-0.5 w-fit"
        >
          <span>all repositories on github</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Projects Asymmetric Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Project 1: CineFinder (Flagship Web App - Col 7) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-7 card-interactive bg-white dark:bg-[#1C1C1E] border border-hairline rounded-xl p-6 sm:p-7 flex flex-col justify-between shadow-sm relative overflow-hidden group"
        >
          {/* Subtle gradient accent tint */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#E25327]/10 dark:from-[#E8734B]/10 to-transparent pointer-events-none rounded-tr-xl" />
          
          <div>
            {/* Header Telemetry */}
            <div className="flex items-center justify-between mb-4 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#E25327] dark:text-[#E8734B] flex items-center gap-1.5">
                  <Film className="w-3.5 h-3.5" />
                  01. WEB APP // FLAGSHIP
                </span>
              </div>
              <span className="text-gray-400 dark:text-gray-500 tabular-nums">2024</span>
            </div>

            {/* Title & Description */}
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-2 tracking-tight group-hover:text-[#E25327] dark:group-hover:text-[#E8734B] transition-colors">
                CineFinder
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-[65ch]">
                A responsive movie discovery platform built with React and the MERN stack. Features physics-based interactions powered by Framer Motion, dynamic catalog filtering, and live TMDB streaming telemetry.
              </p>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {['React.js', 'Framer Motion', 'REST APIs', 'Node.js', 'Tailwind CSS'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded border border-hairline bg-gray-100 dark:bg-[#242426] text-gray-700 dark:text-gray-300 text-[11px] font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-hairline flex items-center justify-between font-mono text-xs">
            <a
              href="https://github.com/StarLord-I"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-accent)] rounded px-1.5 py-0.5"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>source repository</span>
            </a>

            <a
              href="https://cine-finder-mern.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#E25327]/10 dark:bg-[#E8734B]/15 text-[#E25327] dark:text-[#E8734B] font-semibold hover:bg-[#E25327]/20 dark:hover:bg-[#E8734B]/25 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E25327] active:scale-95"
            >
              <span>live demo</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>

        {/* Project 2: Fab Five DHH (Interactive Tribute - Col 5) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:col-span-5 card-interactive bg-white dark:bg-[#1C1C1E] border border-hairline rounded-xl p-6 sm:p-7 flex flex-col justify-between shadow-sm relative overflow-hidden group"
        >
          {/* Subtle gradient accent tint */}
          <div className="absolute top-0 right-0 w-52 h-52 bg-gradient-to-bl from-[#1B5DEF]/10 dark:from-[#4A7FF7]/10 to-transparent pointer-events-none rounded-tr-xl" />

          <div>
            {/* Header Telemetry */}
            <div className="flex items-center justify-between mb-4 font-mono text-xs">
              <span className="font-semibold text-[#1B5DEF] dark:text-[#4A7FF7] flex items-center gap-1.5">
                <Music className="w-3.5 h-3.5" />
                02. TRIBUTE & MOTION
              </span>
              <span className="text-gray-400 dark:text-gray-500 tabular-nums">2024</span>
            </div>

            {/* Title & Description */}
            <div className="mb-4">
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-2xl font-bold text-black dark:text-white tracking-tight group-hover:text-[#1B5DEF] dark:group-hover:text-[#4A7FF7] transition-colors">
                  Fab Five DHH
                </h3>
                {/* Mini audio equalizer wave indicator */}
                <div className="flex items-end gap-0.5 h-4 px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50">
                  <span className="w-0.5 h-3 bg-[#1B5DEF] dark:bg-[#4A7FF7] rounded-full animate-pulse" />
                  <span className="w-0.5 h-2 bg-[#1B5DEF] dark:bg-[#4A7FF7] rounded-full animate-pulse delay-75" />
                  <span className="w-0.5 h-3.5 bg-[#1B5DEF] dark:bg-[#4A7FF7] rounded-full animate-pulse delay-150" />
                  <span className="w-0.5 h-1.5 bg-[#1B5DEF] dark:bg-[#4A7FF7] rounded-full animate-pulse delay-100" />
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                An interactive frontend platform celebrating pioneers of Desi Hip-Hop. Built with high-performance animations, fluid motion graphics, and audio sync waves.
              </p>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {['React', 'Framer Motion', 'Audio Sync', 'Tailwind'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded border border-hairline bg-gray-100 dark:bg-[#242426] text-gray-700 dark:text-gray-300 text-[11px] font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-hairline flex items-center justify-between font-mono text-xs">
            <a
              href="https://github.com/StarLord-I"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-accent)] rounded px-1.5 py-0.5"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>source</span>
            </a>

            <a
              href="https://fab-five-of-dhh.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1B5DEF]/10 dark:bg-[#4A7FF7]/15 text-[#1B5DEF] dark:text-[#4A7FF7] font-semibold hover:bg-[#1B5DEF]/20 dark:hover:bg-[#4A7FF7]/25 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-accent)] active:scale-95"
            >
              <span>live demo</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>

        {/* Project 3: Zilla Parishad Management System (Enterprise Civic - Col 12 Full Banner) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="lg:col-span-12 card-interactive bg-white dark:bg-[#1C1C1E] border border-hairline rounded-xl p-6 sm:p-7 shadow-sm relative overflow-hidden group"
        >
          {/* Subtle gradient accent tint */}
          <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-emerald-500/10 dark:from-emerald-500/5 to-transparent pointer-events-none rounded-r-xl" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="lg:max-w-2xl">
              {/* Header Telemetry */}
              <div className="flex items-center gap-3 mb-3 font-mono text-xs">
                <span className="font-semibold text-emerald-500 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  03. CIVIC ENTERPRISE INFRASTRUCTURE
                </span>
                <span className="text-gray-300 dark:text-gray-700">•</span>
                <span className="text-gray-400 dark:text-gray-500 tabular-nums">2025</span>
                <span className="text-gray-300 dark:text-gray-700">•</span>
                <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Client Deployed
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-black dark:text-white mb-2 tracking-tight group-hover:text-emerald-500 transition-colors">
                Zilla Parishad Management System
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-[65ch]">
                A civic administrative records management web application built for Zilla Parishad, Chandrapur. Streamlines public records dispatch, departmental routing, and multi-tier relational data auditing.
              </p>
            </div>

            {/* Right side: Tech tags & Action */}
            <div className="flex flex-col sm:flex-row lg:flex-col lg:items-end justify-between gap-4 lg:shrink-0 font-mono text-xs">
              <div className="flex flex-wrap lg:justify-end gap-1.5">
                {['Node.js', 'Express', 'Relational DB', 'RBAC Security', 'Civic Verified'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded border border-hairline bg-gray-100 dark:bg-[#242426] text-gray-700 dark:text-gray-300 text-[11px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://github.com/StarLord-I"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-accent)] rounded px-2 py-1 border border-hairline bg-gray-50 dark:bg-[#242426]"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>source audit</span>
                </a>
                <span className="text-gray-400 dark:text-gray-500 text-[11px] px-2 py-1 rounded bg-gray-100 dark:bg-[#242426]">
                  Internal Gov Deployment
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
