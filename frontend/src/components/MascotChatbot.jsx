import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, Bot, User, ChevronRight } from 'lucide-react';

export default function MascotChatbot({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Greetings, traveler! I'm Sprout, Jiya Khan Pathan's (Star-Lord_I) loyal botanical companion. Ask me anything about his projects (like CineFinder or Fab Five DHH), skills (React, Node.js), or experience!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const quickQuestions = [
    "What are Jiya's top projects?",
    "What technologies does he use?",
    "Tell me about his internship",
  ];

  const handleSend = async (textToSend) => {
    const question = textToSend || input;
    if (!question.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: question }];
    setMessages(newMessages);
    if (!textToSend) setInput('');
    setIsTyping(true);

    try {
      const res = await fetch('http://localhost:5000/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: question }),
      });
      if (res.ok) {
        const data = await res.json();
        setMessages([...newMessages, { sender: 'bot', text: data.reply }]);
        setIsTyping(false);
        return;
      }
    } catch (err) {
      // Fallback to local reply if backend is offline
    }

    setTimeout(() => {
      let botReply = "I'm Sprout! Jiya is a skilled frontend developer and Computer Science graduate specializing in React, Tailwind CSS, and modern web applications. Check out his CineFinder and Fab Five DHH projects in the showcase!";

      const lowerQ = question.toLowerCase();
      if (lowerQ.includes('project') || lowerQ.includes('cinefinder') || lowerQ.includes('fab five') || lowerQ.includes('zilla')) {
        botReply = "Jiya has built some stellar projects:\n1. **CineFinder**: A MERN/React movie discovery tribute platform with Framer Motion animations.\n2. **Fab Five DHH**: An interactive React frontend app.\n3. **Zilla Parishad Management System**: His final-year team project built with Zilla Parishad, Chandrapur for real stakeholder management.";
      } else if (lowerQ.includes('skill') || lowerQ.includes('tech') || lowerQ.includes('stack')) {
        botReply = "Jiya's core stack includes React.js, JavaScript, Tailwind CSS, HTML5, CSS3, Git, GitHub, Python, Vite, and REST APIs, alongside Node.js and Express.js!";
      } else if (lowerQ.includes('intern') || lowerQ.includes('experience') || lowerQ.includes('futurepoint')) {
        botReply = "Jiya worked as a Frontend Development Intern at FuturePoint Technologies (May–Jun 2023), where he built responsive HTML5/CSS3 pages, added JavaScript interactivity, and collaborated on UI components.";
      } else if (lowerQ.includes('contact') || lowerQ.includes('hire') || lowerQ.includes('email')) {
        botReply = "You can reach out to Jiya via the contact form on this site, or directly through his LinkedIn (jiya-khan-pathan) and GitHub (StarLord-I)!";
      }

      setMessages([...newMessages, { sender: 'bot', text: botReply }]);
      setIsTyping(false);
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.95 }}
        className="fixed bottom-6 right-6 sm:right-24 z-50 w-80 sm:w-96 bg-gray-900 border border-purple-500/40 rounded-2xl shadow-2xl flex flex-col h-[480px] backdrop-blur-xl overflow-hidden"
      >
        {/* Chat Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#060810] border-b border-gray-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white shadow-md">
              <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
            </div>
            <div>
              <span className="block text-xs font-bold text-white">Sprout</span>
              <span className="block text-[10px] text-green-400 font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping" /> Online Companion
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-gray-800 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#090d16]">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${msg.sender === 'user'
                  ? 'bg-cyan-600 text-white'
                  : 'bg-purple-600/30 border border-purple-500/40 text-purple-300'
                  }`}
              >
                {msg.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
              </div>
              <div
                className={`max-w-[75%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed whitespace-pre-line ${msg.sender === 'user'
                  ? 'bg-cyan-600 text-white rounded-tr-none'
                  : 'bg-gray-800/80 border border-gray-700/60 text-gray-200 rounded-tl-none'
                  }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-gray-400 font-mono pl-9">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-bounce" style={{ animationDelay: '0.4s' }} />
              <span>Sprout is thinking...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestions */}
        <div className="px-3 py-2 bg-[#060810]/60 border-t border-gray-800 flex gap-1.5 overflow-x-auto no-scrollbar">
          {quickQuestions.map((q) => (
            <button
              key={q}
              onClick={() => handleSend(q)}
              className="px-2.5 py-1 rounded-lg bg-gray-800/80 border border-gray-700/60 text-[11px] text-gray-300 hover:text-white hover:border-purple-500/50 whitespace-nowrap transition-all flex items-center gap-1"
            >
              <span>{q}</span>
              <ChevronRight className="w-3 h-3 text-purple-400" />
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-[#060810] border-t border-gray-800">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Sprout about Jiya..."
              className="flex-1 bg-gray-800/60 border border-gray-700 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:scale-105 transition-transform"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
