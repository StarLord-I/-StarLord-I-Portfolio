import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import MusicPlayer from './components/MusicPlayer';
import MascotChatbot from './components/MascotChatbot';

export default function App() {
  const [theme, setTheme] = useState('dark'); // 'dark' | 'light'
  const [isMusicOpen, setIsMusicOpen] = useState(false);

  // Initialize theme
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleMusic = () => {
    setIsMusicOpen((prev) => !prev);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-main)] flex flex-col font-sans bg-dot-grid transition-colors selection:bg-[#4A7FF7] selection:text-white"
    >
      {/* Sticky Top Navigation */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        isMusicOpen={isMusicOpen}
        onToggleMusic={toggleMusic}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenMusic={() => setIsMusicOpen(true)} />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Floating Interactive Companion Mascot (Sprout) */}
      <MascotChatbot />

      {/* Retro Cassette Mixtape Audio Widget */}
      <MusicPlayer
        isOpen={isMusicOpen}
        onClose={() => setIsMusicOpen(false)}
      />

      {/* Minimal Console Footer */}
      <footer className="py-8 px-4 border-t border-hairline text-center font-mono text-xs text-gray-500 dark:text-gray-400">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <span className="font-semibold text-black dark:text-white">jiya.dev</span> • Jiya Khan Pathan
            <span className="text-[#1B5DEF] dark:text-[#4A7FF7] ml-2">// Star-Lord_I</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
            <span>Telemetry Online • Built with precision & high-performance craft</span>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
