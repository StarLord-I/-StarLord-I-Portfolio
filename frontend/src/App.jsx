import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import MusicPlayer from './components/MusicPlayer';
import MascotChatbot from './components/MascotChatbot';
import { Rocket, Heart } from 'lucide-react';

export default function App() {
  const [isMusicOpen, setIsMusicOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#060810] text-gray-100 flex flex-col font-sans">
      {/* Navigation */}
      <Navbar
        onToggleMusic={() => setIsMusicOpen(!isMusicOpen)}
        onToggleChatbot={() => setIsChatbotOpen(!isChatbotOpen)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenChatbot={() => setIsChatbotOpen(true)}
          onOpenMusic={() => setIsMusicOpen(true)}
        />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#04060b] border-t border-gray-800 text-center text-xs text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Rocket className="w-4 h-4 text-purple-400" />
            <span className="font-medium text-gray-300">Star-Lord_I Portfolio</span>
            <span>© {new Date().getFullYear()} Jiya Khan Pathan</span>
          </div>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> and space-opera energy
          </p>
        </div>
      </footer>

      {/* Floating Widgets */}
      <MusicPlayer isOpen={isMusicOpen} onClose={() => setIsMusicOpen(false)} />
      <MascotChatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
    </div>
  );
}
