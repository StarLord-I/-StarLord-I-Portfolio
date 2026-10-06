import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, Bot, RefreshCw } from 'lucide-react';

export default function MascotChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'sprout',
      text: "I am Sprout! 🌱 Jiya's botanical companion. Ask me anything about his projects, skills, or engineering journey!",
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Keyboard shortcut: close with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const quickPrompts = [
    'Tell me about Jiya',
    'What projects has he built?',
    'What is his tech stack?',
    'Work experience',
  ];

  // Local fallback response engine in case backend /api/chatbot is offline
  const getLocalResponse = (query) => {
    const q = query.toLowerCase();
    if (q.includes('project') || q.includes('work') || q.includes('cinefinder') || q.includes('dhh') || q.includes('zilla')) {
      return "Jiya has built several high-impact verified projects:\n• CineFinder: A responsive movie discovery platform built with React, MERN stack, and Framer Motion physics.\n• Fab Five DHH: An interactive celebration of Desi Hip-Hop featuring fluid motion graphics and audio sync.\n• Zilla Parishad Management System: A full-stack civic records solution built with real stakeholders in Chandrapur.";
    }
    if (q.includes('skill') || q.includes('stack') || q.includes('technolog') || q.includes('language')) {
      return "Jiya specializes in creative frontend and full-stack development:\n• Frontend: React 18, Vite, Tailwind CSS, JavaScript (ES6+), Framer Motion, HTML5/CSS3\n• Backend: Node.js, Express, Python, FastAPI, RESTful APIs, MongoDB/SQL\n• Tools: Git, GitHub, VS Code, Postman, Vercel";
    }
    if (q.includes('intern') || q.includes('experience') || q.includes('company') || q.includes('futurepoint')) {
      return "Jiya served as a Frontend Development Intern at FuturePoint Technologies (May–Jun 2023), where he built modular responsive web interfaces, enhanced client-side interactivity, and optimized rendering performance.";
    }
    if (q.includes('who') || q.includes('jiya') || q.includes('starlord') || q.includes('star-lord') || q.includes('about')) {
      return "Jiya Khan Pathan (coding persona: Star-Lord_I, pronouns: he/him) is a final-year Computer Science Engineering student (2022–2026). He combines strong technical engineering with a passion for creative UI/UX, physics-based animations, and space-opera aesthetics!";
    }
    if (q.includes('contact') || q.includes('hire') || q.includes('reach') || q.includes('email')) {
      return "You can reach Jiya directly through the transmission form below, or connect with him on LinkedIn (linkedin.com/in/jiya-khan-pathan-799827423) and GitHub (github.com/StarLord-I)!";
    }
    if (q.includes('sprout') || q.includes('who are you') || q.includes('groot')) {
      return "I'm Sprout! An original botanical companion engineered to keep Star-Lord_I company on his coding missions across the digital cosmos. I'm loyal, friendly, and always ready to answer visitor questions!";
    }
    return "I am Sprout! Jiya (Star-Lord_I) is a talented engineer specializing in React, Tailwind, Framer Motion, and Node.js. Feel free to ask about his featured projects (CineFinder, Fab Five DHH) or career background!";
  };

  const handleSendMessage = async (textToSend) => {
    const text = textToSend || inputValue.trim();
    if (!text) return;

    const userMsg = { id: Date.now(), sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    const chatbotUrl = import.meta.env.VITE_API_URL || (window.location.hostname === 'localhost' ? 'http://localhost:5000/api/chatbot' : '/api/chatbot');
    try {
      // Try backend endpoint first
      const res = await fetch(chatbotUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });

      if (res.ok) {
        const data = await res.json();
        setMessages((prev) => [
          ...prev,
          { id: Date.now() + 1, sender: 'sprout', text: data.reply || getLocalResponse(text) },
        ]);
      } else {
        throw new Error('Backend offline');
      }
    } catch {
      // Graceful offline fallback
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { id: Date.now() + 1, sender: 'sprout', text: getLocalResponse(text) },
        ]);
      }, 400);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      {/* Floating Mascot Trigger Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="flex items-center gap-3"
          >
            {/* Tooltip Pill */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-[#1C1C1E] border border-black/10 dark:border-white/10 shadow-lg text-xs font-mono text-gray-700 dark:text-gray-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Ask Sprout 🌱</span>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open Sprout companion chatbot"
              className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#1B5DEF] to-[#4A7FF7] dark:from-[#1C1C1E] dark:to-[#242426] border-2 border-white/20 dark:border-[#4A7FF7]/40 shadow-xl flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-transform group cursor-pointer"
            >
              {/* Sprout Mascot SVG Icon */}
              <div className="sprout-hi-animation flex flex-col items-center">
                <svg viewBox="0 0 32 32" className="w-8 h-8 fill-current text-emerald-400">
                  {/* Stem & Leaves */}
                  <path d="M16 22 C16 16 14 12 10 10 C14 11 16 14 16 18 C16 14 18 11 22 10 C18 12 16 16 16 22 Z" fill="#22C55E" />
                  {/* Little Pot / Body */}
                  <path d="M11 20 L21 20 L19 28 L13 28 Z" fill="#A8734B" />
                  {/* Friendly Eyes */}
                  <circle cx="14" cy="23" r="1" fill="#141415" />
                  <circle cx="18" cy="23" r="1" fill="#141415" />
                </svg>
              </div>

              {/* Status indicator badge */}
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#141415]" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded Chatbot Modal / Console */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-[calc(100vw-2.5rem)] sm:w-96 rounded-2xl bg-white dark:bg-[#1C1C1E] border border-black/10 dark:border-white/10 shadow-2xl flex flex-col overflow-hidden max-h-[540px] h-[520px]"
          >
            {/* Header */}
            <div className="px-4 py-3.5 bg-gray-50 dark:bg-[#161618] border-b border-black/10 dark:border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 font-bold text-sm">
                  🌱
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-black dark:text-white">
                    <span>Sprout</span>
                    <span className="text-[10px] font-mono font-normal text-gray-500 dark:text-gray-400">// Companion Bot</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Telemetry Online</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setMessages([{ id: 'welcome', sender: 'sprout', text: "I am Sprout! 🌱 Ask me anything about Jiya's work, skills, or experience!" }])}
                  title="Clear conversation"
                  aria-label="Clear chat history"
                  className="p-1.5 rounded-lg text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close Sprout chatbot"
                  className="p-1.5 rounded-lg text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Message Stream */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed whitespace-pre-wrap ${
                      m.sender === 'user'
                        ? 'bg-[#1B5DEF] dark:bg-[#4A7FF7] text-white rounded-br-none shadow-sm'
                        : 'bg-gray-100 dark:bg-[#242426] text-gray-800 dark:text-gray-200 rounded-bl-none border border-black/5 dark:border-white/5'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-[#242426] text-gray-400 px-3 py-2 rounded-2xl rounded-bl-none flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Prompt Chips */}
            <div className="px-3 py-2 border-t border-black/5 dark:border-white/5 bg-gray-50/50 dark:bg-[#161618]/50 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSendMessage(prompt)}
                  className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white dark:bg-[#1C1C1E] border border-black/10 dark:border-white/10 hover:border-[#1B5DEF] dark:hover:border-[#4A7FF7] text-[10px] font-mono text-gray-600 dark:text-gray-300 transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-gray-50 dark:bg-[#161618] border-t border-black/10 dark:border-white/10 flex items-center gap-2"
            >
              <input
                type="text"
                maxLength={300}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask Sprout about Jiya..."
                aria-label="Message for Sprout"
                className="flex-1 bg-white dark:bg-[#242426] border border-black/10 dark:border-white/10 rounded-xl px-3 py-2 text-base sm:text-xs text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#1B5DEF] dark:focus:border-[#4A7FF7]"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                aria-label="Send message to Sprout"
                className="p-2 rounded-xl bg-[#1B5DEF] dark:bg-[#4A7FF7] text-white disabled:opacity-40 hover:opacity-90 transition-opacity cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
