import React, { useState } from 'react';
import { Rocket, Music, MessageSquare, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar({ onToggleMusic, onToggleChatbot }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#060810]/80 backdrop-blur-md border-b border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-lg text-white tracking-wide">Star-Lord_I</span>
              <span className="block text-xs text-purple-400 font-mono">Jiya Khan Pathan</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onToggleMusic}
              title="Toggle Retro Mixtape"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500/50 text-xs font-medium text-gray-300 hover:text-white transition-all shadow-sm"
            >
              <Music className="w-4 h-4 text-purple-400" />
              <span>Mixtape</span>
            </button>
            <button
              onClick={onToggleChatbot}
              title="Chat with Sprout"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-xs font-medium text-white transition-all shadow-lg shadow-purple-600/20"
            >
              <Sparkles className="w-4 h-4 text-yellow-300 animate-spin" style={{ animationDuration: '4s' }} />
              <span>Ask Sprout</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onToggleChatbot}
              className="p-2 rounded-lg bg-purple-900/40 border border-purple-500/40 text-purple-300"
            >
              <MessageSquare className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#060810]/95 border-b border-gray-800 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-cyan-400 hover:bg-gray-900/50"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex gap-2">
            <button
              onClick={() => { onToggleMusic(); setIsOpen(false); }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-900 border border-gray-800 text-sm font-medium text-gray-300"
            >
              <Music className="w-4 h-4 text-purple-400" />
              <span>Mixtape</span>
            </button>
            <button
              onClick={() => { onToggleChatbot(); setIsOpen(false); }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 text-sm font-medium text-white"
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span>Ask Sprout</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
