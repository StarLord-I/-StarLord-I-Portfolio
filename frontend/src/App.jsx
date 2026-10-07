import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import MusicPlayer from './components/MusicPlayer';
import MascotChatbot from './components/MascotChatbot';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
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
    <>
      {/* Startup Loading Sequence with Track 03 Audio at 65% Volume */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

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
        <FAQ />
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
      <footer className="py-8 px-4 border-t border-hairline font-mono text-xs text-gray-500 dark:text-gray-400">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-black dark:text-white">jiya.dev</span> • Jiya Khan Pathan
            <span className="text-[#1B5DEF] dark:text-[#4A7FF7]">// Star-Lord_I</span>
          </div>

          {/* Descriptive Internal Navigation Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <a href="#hero" className="hover:text-black dark:hover:text-white transition-colors">Mission Control</a>
            <span className="text-gray-400 dark:text-gray-600">•</span>
            <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</a>
            <span className="text-gray-400 dark:text-gray-600">•</span>
            <a href="#experience" className="hover:text-black dark:hover:text-white transition-colors">Experience</a>
            <span className="text-gray-400 dark:text-gray-600">•</span>
            <a href="#faq" className="hover:text-black dark:hover:text-white transition-colors">FAQ</a>
            <span className="text-gray-400 dark:text-gray-600">•</span>
            <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</a>
            <span className="text-gray-400 dark:text-gray-600">•</span>
            <a href="/privacy" className="text-[#1B5DEF] dark:text-[#4A7FF7] hover:underline transition-colors font-medium">Privacy Policy</a>
          </nav>

          <div className="flex items-center gap-2 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
            <span>Telemetry Online</span>
          </div>
        </div>
      </footer>
    </motion.div>
    </>
  );
}

