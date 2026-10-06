import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('dark'); // 'dark' | 'light'

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

  return (
    <>
      {isLoading && (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      )}

      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-main)] flex flex-col font-sans bg-dot-grid transition-colors">

        {/* Sticky Top Navigation */}
        <Navbar
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>

        {/* Minimal Footer */}
        <footer className="py-8 px-4 border-t border-black/10 dark:border-white/10 text-center font-mono text-xs text-gray-500 dark:text-gray-400">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <span className="font-semibold text-black dark:text-white">jiya.dev</span> • Jiya Khan Pathan
            </div>
            <div>
              <span>Designed with minimal craft & high-performance architecture</span>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
