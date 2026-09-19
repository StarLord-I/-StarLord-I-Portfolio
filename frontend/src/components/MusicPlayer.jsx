import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, X, Play, Disc, Volume2 } from 'lucide-react';

export default function MusicPlayer({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 cassette-tape rounded-2xl p-4 shadow-2xl border border-purple-500/30 text-white backdrop-blur-xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-gray-800 mb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-purple-600/20 text-purple-400 border border-purple-500/30">
              <Disc className="w-4 h-4 animate-spin" style={{ animationDuration: '6s' }} />
            </div>
            <div>
              <span className="block text-xs font-mono text-purple-400">STAR-LORD_I MIXTAPE</span>
              <span className="text-sm font-bold text-white">Cosismic Retro Beats</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-gray-800 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Cassette Visual Window */}
        <div className="bg-black/40 rounded-xl p-3 border border-gray-800/80 mb-3 flex items-center justify-center gap-6 relative overflow-hidden">
          <div className="w-12 h-12 rounded-full border-2 border-dashed border-gray-600 flex items-center justify-center animate-spin" style={{ animationDuration: '4s' }}>
            <div className="w-4 h-4 rounded-full bg-purple-500" />
          </div>
          <div className="flex-1 text-center">
            <span className="block text-xs text-gray-400 font-mono">CURATED PLAYLIST</span>
            <span className="text-xs font-semibold text-cyan-400">Space-Opera Vibes Vol. 1</span>
          </div>
          <div className="w-12 h-12 rounded-full border-2 border-dashed border-gray-600 flex items-center justify-center animate-spin" style={{ animationDuration: '4s' }}>
            <div className="w-4 h-4 rounded-full bg-cyan-500" />
          </div>
        </div>

        {/* Spotify Embed Player */}
        <div className="rounded-xl overflow-hidden bg-black/60 border border-gray-800">
          <iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Mixtape Player"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
