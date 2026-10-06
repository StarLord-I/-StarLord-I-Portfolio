import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Music } from 'lucide-react';

export default function Navbar({
  theme,
  onToggleTheme,
  isMusicOpen,
  onToggleMusic,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { num: '01', name: 'about', href: '#about' },
    { num: '02', name: 'skills', href: '#skills' },
    { num: '03', name: 'projects', href: '#projects' },
    { num: '04', name: 'experience', href: '#experience' },
    { num: '05', name: 'contact', href: '#contact' },
  ];

  // Dismiss mobile drawer on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <nav className="sticky top-0 z-40 bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-hairline transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">

          {/* Wordmark & Moniker */}
          <div className="flex items-center space-x-3">
            <a
              href="#hero"
              className="flex items-center space-x-2 text-sm font-bold tracking-tight text-black dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-accent)] rounded px-1"
            >
              <span className="w-2 h-2 rounded-full bg-[#1B5DEF] dark:bg-[#4A7FF7]" />
              <span>jiya.dev</span>
              <span className="font-mono text-[11px] text-gray-500 dark:text-gray-400 font-normal">
                // starlord_i
              </span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6 text-xs font-mono">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-accent)] rounded px-1.5 py-0.5"
              >
                <span className="opacity-60">{link.num}.</span> {link.name}
              </a>
            ))}
          </div>

          {/* Action Items: Mixtape, Theme Toggle & Resume */}
          <div className="flex items-center space-x-2 sm:space-x-3 font-mono text-xs">
            {/* Retro Mixtape Toggle */}
            <button
              onClick={onToggleMusic}
              title="Toggle Retro Mixtape"
              aria-label="Toggle Retro Mixtape Player"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border text-xs min-h-[38px] transition-all cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--orange-accent)] ${
                isMusicOpen
                  ? 'border-[#E25327] dark:border-[#E8734B] bg-[#E25327]/10 text-[#E25327] dark:text-[#E8734B]'
                  : 'border-hairline bg-white dark:bg-[#1C1C1E] text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white'
              }`}
            >
              <Music className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">mixtape</span>
            </button>

            {/* Theme Switcher */}
            <button
              onClick={onToggleTheme}
              title="Toggle Theme"
              aria-label="Toggle between dark and light theme"
              className="p-2 min-w-[38px] min-h-[38px] flex items-center justify-center rounded-lg border border-hairline bg-white dark:bg-[#1C1C1E] text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-accent)]"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Resume Link */}
            <a
              href="#contact"
              className="group relative overflow-hidden px-3.5 py-2 min-h-[38px] flex items-center rounded-lg bg-[#1B5DEF] dark:bg-[#4A7FF7] text-white hover:opacity-95 hover:-translate-y-0.5 active:translate-y-0 font-medium transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-accent)]"
            >
              <span aria-hidden="true" className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
              <span className="relative z-10">resume ↗</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile menu"
              className="p-2 min-w-[38px] min-h-[38px] flex items-center justify-center rounded-lg md:hidden border border-hairline bg-white dark:bg-[#1C1C1E] text-gray-700 dark:text-gray-300 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-accent)]"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-[#1C1C1E] border-b border-hairline px-4 py-4 space-y-3 font-mono text-xs text-black dark:text-white animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-1.5 text-gray-700 dark:text-gray-300 hover:text-[#1B5DEF] dark:hover:text-[#4A7FF7] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--blue-accent)] rounded"
              >
                <span className="opacity-60">{link.num}.</span> {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
