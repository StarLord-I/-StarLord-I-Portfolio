import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Disc, Sparkles, Terminal } from 'lucide-react';

export default function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Extended time & smoother progress for immersive loading
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        // Increment by smaller steps to make it take ~2-2.5 seconds
        return prev + 6;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 bg-[#0A0A0C] flex flex-col items-center justify-center p-6 text-white overflow-hidden font-sans"
    >
      {/* Background radial gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1B5DEF]/15 via-[#0A0A0C] to-[#060608] -z-10" />

      <div className="relative z-10 flex flex-col items-center max-w-sm w-full text-center space-y-6">
        {/* Animated Walkman / Disc Icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#1B5DEF] to-cyan-400 p-0.5 shadow-2xl shadow-[#1B5DEF]/40 flex items-center justify-center"
        >
          <div className="w-full h-full bg-[#121214] rounded-[14px] flex items-center justify-center">
            <Disc className="w-10 h-10 text-[#4A7FF7]" />
          </div>
        </motion.div>

        {/* Header & Moniker */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B5DEF]/10 border border-[#1B5DEF]/30 text-[#4A7FF7] text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>jiya.dev // v3.0 OS</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Loading Portfolio Experience
          </h1>
          <p className="text-gray-400 text-xs mt-2 font-mono">
            Synchronizing Awesome Mix Vol. 1 & Terminal System...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-zinc-900 border border-white/10 rounded-full h-2.5 p-0.5 overflow-hidden shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-[#1B5DEF] to-cyan-400 rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <div className="flex items-center justify-between w-full text-xs text-gray-400 font-mono px-1">
          <span>SYSTEM BOOT</span>
          <span className="text-[#4A7FF7] font-bold">{progress}%</span>
        </div>

        {/* Skip Button */}
        <button
          onClick={onLoadingComplete}
          className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-gray-300 hover:text-white transition-all cursor-pointer"
        >
          Skip Loading Sequence ➔
        </button>
      </div>
    </motion.div>
  );
}
