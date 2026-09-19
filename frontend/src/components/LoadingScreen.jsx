import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Sparkles } from 'lucide-react';

export default function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 400);
          return 100;
        }
        return prev + 15;
      });
    }, 180);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 bg-[#060810] flex flex-col items-center justify-center p-4 text-white overflow-hidden"
    >
      {/* Background starfield glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-[#060810] to-[#04060b] -z-10" />

      <div className="relative z-10 flex flex-col items-center max-w-md w-full text-center space-y-6">
        {/* Animated Icon */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-500 p-0.5 shadow-2xl shadow-purple-500/30 flex items-center justify-center"
        >
          <div className="w-full h-full bg-[#060810] rounded-[14px] flex items-center justify-center">
            <Rocket className="w-10 h-10 text-cyan-400 animate-pulse" />
          </div>
        </motion.div>

        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/40 text-purple-300 text-xs font-mono mb-3 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-spin" style={{ animationDuration: '4s' }} />
            <span>Star-Lord_I OS v3.0</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-purple-200 to-cyan-300 bg-clip-text text-transparent">
            Initializing Transmission
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm mt-2 font-mono">
            Synchronizing Sprout AI & Space-Opera Mixtape...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-900/80 border border-gray-800 rounded-full h-3 p-0.5 overflow-hidden shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <div className="flex items-center justify-between w-full text-xs text-gray-500 font-mono px-1">
          <span>LOADING SYSTEM ASSETS</span>
          <span className="text-cyan-400 font-bold">{progress}%</span>
        </div>

        <button
          onClick={onLoadingComplete}
          className="text-xs text-gray-400 hover:text-white underline underline-offset-4 pt-2 transition-colors cursor-pointer"
        >
          Skip Loading Sequence
        </button>
      </div>
    </motion.div>
  );
}
