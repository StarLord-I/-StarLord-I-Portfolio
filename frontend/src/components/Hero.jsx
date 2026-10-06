import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, ExternalLink } from 'lucide-react';
import TerminalBox from './TerminalBox';

export default function Hero({ onOpenMusic }) {
  return (
    <section id="hero" className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-16 flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

        {/* Left Column: Professional Profile & Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Status Pill */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-[#1C1C1E] text-xs font-mono text-gray-600 dark:text-gray-400 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for full-stack opportunities</span>
            <span className="text-gray-300 dark:text-gray-700">|</span>
            <span className="text-black dark:text-white font-semibold">CSE '26</span>
          </div>

          {/* Main Name & Title */}
          <div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] text-black dark:text-white">
              Hi, I'm <span className="text-[#1B5DEF] dark:text-[#4A7FF7]">Jiya Khan</span>.
            </h1>
            <div className="mt-2 flex items-center space-x-3 text-lg sm:text-xl font-semibold text-gray-600 dark:text-gray-400">
              <span>Full-Stack Software Engineer</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded border border-black/10 dark:border-white/10 bg-gray-100 dark:bg-zinc-800 text-[#E25327] dark:text-[#E8734B] font-medium">
                aka Star-Lord_I
              </span>
            </div>
          </div>

          {/* Bio */}
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
            I engineer resilient web applications with <strong className="text-black dark:text-white font-semibold">React, Vite, Node.js</strong>, and thoughtful interactive UX. Focused on clean codebases, performance, and memorable user experiences.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
            <a
              href="#projects"
              className="px-5 py-3 rounded-lg bg-black dark:bg-white text-white dark:text-black font-semibold hover:opacity-90 transition-all flex items-center space-x-1 shadow-sm"
            >
              <span>view projects</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-[#1C1C1E] text-black dark:text-white font-semibold hover:border-[#1B5DEF] dark:hover:border-[#4A7FF7] transition-all flex items-center space-x-1"
            >
              <span>get in touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Connect Links */}
          <div className="flex items-center space-x-4 pt-4 text-xs font-mono text-gray-500 dark:text-gray-400">
            <span className="text-[10px] tracking-wider uppercase text-gray-400">CONNECT:</span>
            <a
              href="https://github.com/StarLord-I"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#1B5DEF] dark:hover:text-[#4A7FF7] transition-colors flex items-center gap-1"
            >
              <span>github</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://linkedin.com/in/jiya-khan-pathan-799827423"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#1B5DEF] dark:hover:text-[#4A7FF7] transition-colors flex items-center gap-1"
            >
              <span>linkedin</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="mailto:contact@jiya.dev"
              className="hover:text-[#1B5DEF] dark:hover:text-[#4A7FF7] transition-colors"
            >
              email ↗
            </a>
          </div>
        </motion.div>

        {/* Right Column: Mac-Style Terminal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-5"
        >
          <TerminalBox />
        </motion.div>

      </div>
    </section>
  );
}
