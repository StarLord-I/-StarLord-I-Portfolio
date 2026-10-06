import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar({
  theme,
  onToggleTheme,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { num: '01', name: 'about', href: '#about' },
    { num: '02', name: 'skills', href: '#skills' },
    { num: '03', name: 'projects', href: '#projects' },
    { num: '04', name: 'experience', href: '#experience' },
    { num: '05', name: 'contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="sticky top-0 z-40 bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-black/10 dark:border-white/10 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">

          {/* Wordmark & Moniker */}
          <div className="flex items-center space-x-3">
            <a href="#hero" className="flex items-center space-x-2 text-sm font-bold tracking-tight text-black dark:text-white">
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
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <span className="opacity-60">{link.num}.</span> {link.name}
              </a>
            ))}
          </div>

          {/* Action Items: Theme Toggle & Resume */}
          <div className="flex items-center space-x-2 sm:space-x-3 font-mono text-xs">
            {/* Theme Switcher */}
            <button
              onClick={onToggleTheme}
              title="Toggle Theme"
              className="p-1.5 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-[#1C1C1E] text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            {/* Resume Link */}
            <a
              href="#contact"
              className="px-3 py-1.5 rounded-lg bg-[#1B5DEF] dark:bg-[#4A7FF7] text-white hover:opacity-90 font-medium transition-opacity"
            >
              resume ↗
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-lg md:hidden border border-black/10 dark:border-white/10 bg-white dark:bg-[#1C1C1E] text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-[#1C1C1E] border-b border-black/10 dark:border-white/10 px-4 py-4 space-y-3 font-mono text-xs text-black dark:text-white">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-1.5 text-gray-700 dark:text-gray-300 hover:text-[#1B5DEF] dark:hover:text-[#4A7FF7]"
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
