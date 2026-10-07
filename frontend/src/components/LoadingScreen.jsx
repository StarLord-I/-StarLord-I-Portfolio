import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Disc, Sparkles, Volume2 } from 'lucide-react';

export default function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smoother progressive loading sequence
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 400);
          return 100;
        }
        return prev + 4;
      });
    }, 90);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 bg-[#0A0A0C] flex flex-col items-center justify-center p-6 text-white overflow-hidden font-sans select-none"
    >
      {/* Background radial gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1B5DEF]/20 via-[#0A0A0C] to-[#060608] -z-10" />

      <div className="relative z-10 flex flex-col items-center max-w-sm w-full text-center space-y-5">
        {/* Animated Walkman / Disc Icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#1B5DEF] to-cyan-400 p-0.5 shadow-2xl shadow-[#1B5DEF]/50 flex items-center justify-center"
        >
          <div className="w-full h-full bg-[#121214] rounded-[14px] flex items-center justify-center relative">
            <Disc className="w-10 h-10 text-[#4A7FF7] animate-pulse" />
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 absolute" />
          </div>
        </motion.div>

        {/* Header & Moniker */}
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1B5DEF]/10 border border-[#1B5DEF]/30 text-[#4A7FF7] text-xs font-mono mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>jiya.dev // Star-Lord_I OS</span>
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight text-white">
            Initializing Portfolio
          </h1>
          <p className="text-gray-400 text-xs mt-1 font-mono">
            Awesome Mix Vol. 1 &amp; telemetry online...
          </p>
        </div>

        {/* Track 03 Audio Indicator at 65% Volume */}
        <div className="w-full py-2 px-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between text-left font-mono text-[11px]">
          <div className="flex items-center gap-2">
            <Volume2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <div className="truncate">
              <span className="text-gray-400">Track 03:</span>{' '}
              <span className="text-white font-semibold">Spirit in the Sky</span>
            </div>
          </div>
          <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400 font-bold shrink-0 ml-2">
            65% VOL
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-zinc-900 border border-white/10 rounded-full h-2 p-0.5 overflow-hidden shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-[#1B5DEF] via-cyan-400 to-[#E8734B] rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <div className="flex items-center justify-between w-full text-xs text-gray-400 font-mono px-1">
          <span>SYSTEM READY</span>
          <span className="text-cyan-400 font-bold">{progress}%</span>
        </div>

        {/* Skip / Enter Action Button */}
        <button
          type="button"
          onClick={onLoadingComplete}
          className="w-full py-2.5 px-4 rounded-xl bg-[#1B5DEF]/20 hover:bg-[#1B5DEF]/30 active:scale-[0.98] border border-[#1B5DEF]/40 text-xs font-mono text-cyan-300 hover:text-white transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
        >
          <span>Enter Portfolio Experience ➔</span>
        </button>
      </div>
    </motion.div>
  );
}
