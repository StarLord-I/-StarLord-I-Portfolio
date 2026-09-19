import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, Terminal, ArrowRight, Mail } from 'lucide-react';

export default function Hero({ onOpenChatbot, onOpenMusic }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-950/30 via-[#060810] to-[#060810]">
      {/* Background Starfield effect simulation */}
      <div className="absolute inset-0 bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-xs font-mono mb-6 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
          <span>Ready for launch • Frontend Developer & Creator</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6"
        >
          Navigating the <span className="text-gradient">Digital Cosmos</span> as Star-Lord_I
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Hi, I'm <strong className="text-white font-medium">Jiya Khan Pathan</strong>. I craft immersive, high-performance web experiences with React, Tailwind CSS, and Framer Motion. Powered by curiosity and a retro mixtape state of mind.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-medium shadow-lg shadow-purple-600/30 transition-all hover:scale-105"
          >
            <Rocket className="w-4 h-4" />
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>

          <button
            onClick={onOpenChatbot}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 border border-gray-800 hover:border-purple-500/50 text-gray-200 hover:text-white font-medium transition-all shadow-lg hover:scale-105"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>Ask Mascot AI</span>
          </button>
        </motion.div>

        {/* Quick Social / Stats Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-8 border-t border-gray-800/80 flex flex-wrap justify-center gap-6 sm:gap-12 text-sm text-gray-400"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
            <span>Open for Opportunities</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/StarLord-I" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/jiya-khan-pathan-799827423" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <span>LinkedIn</span>
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <span>Contact</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
