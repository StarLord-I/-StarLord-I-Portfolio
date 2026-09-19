import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Disc, X } from 'lucide-react';

export default function MusicPlayer({ isOpen, onClose, onToggle }) {
  return (
    <>
      {/* Floating Mixtape Pill (Always visible across site for continuous playback) */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onToggle}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-gray-900/90 border border-purple-500/40 shadow-xl shadow-purple-950/40 backdrop-blur-xl text-white group cursor-pointer"
          title="Open Star-Lord_I Mixtape"
        >
          <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white shadow-md">
            <Disc className="w-4 h-4 animate-spin text-yellow-300" style={{ animationDuration: '4s' }} />
          </div>
          <div className="text-left hidden sm:block">
            <span className="block text-[10px] font-mono text-purple-400 uppercase tracking-wider">Mixtape Active</span>
            <span className="block text-xs font-bold text-gray-200 group-hover:text-cyan-300 transition-colors">Space-Opera Vibes</span>
          </div>
          <div className="flex items-center gap-1 pl-1">
            <span className="w-1 h-3 bg-purple-400 rounded-full animate-bounce" />
            <span className="w-1 h-4 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            <span className="w-1 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
        </motion.button>
      </div>

      {/* Cassette Modal (Full Player) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-24 left-6 z-50 w-80 sm:w-96 cassette-tape rounded-2xl p-4 shadow-2xl border border-purple-500/40 text-white backdrop-blur-xl bg-gray-950/95"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-gray-800 mb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-purple-600/20 text-purple-400 border border-purple-500/30">
                  <Disc className="w-4 h-4 animate-spin" style={{ animationDuration: '6s' }} />
                </div>
                <div>
                  <span className="block text-xs font-mono text-purple-400">STAR-LORD_I MIXTAPE</span>
                  <span className="text-sm font-bold text-white">Cosmic Retro Beats</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-gray-800 text-gray-400 hover:text-white transition-colors cursor-pointer"
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
            <p className="text-[11px] text-gray-400 text-center mt-2 font-mono">
              Use player controls above to play, pause, or change tracks.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
