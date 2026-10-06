import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Disc, Radio, X, Music, ExternalLink } from 'lucide-react';

export default function MusicPlayer({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const audioContextRef = useRef(null);
  const oscillatorRef = useRef(null);

  const playlist = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", duration: "2:52", vibe: "Cosmic Anthem" },
    { title: "Come and Get Your Love", artist: "Redbone", duration: "3:27", vibe: "Space Swagger" },
    { title: "Moonage Daydream", artist: "David Bowie", duration: "4:40", vibe: "Glam Odyssey" },
    { title: "O-o-h Child", artist: "Five Stairsteps", duration: "3:14", vibe: "Feel Good Orbit" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye", duration: "2:28", vibe: "Soul Finale" },
  ];

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  // Keyboard shortcut: close with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        className="fixed bottom-5 left-5 z-40 font-mono text-xs max-w-sm w-[calc(100vw-2.5rem)] sm:w-80 shadow-2xl"
      >
        <div className="rounded-2xl bg-white dark:bg-[#161618] border border-black/10 dark:border-white/15 overflow-hidden transition-colors shadow-2xl">
          {/* Cassette Top Header Bar */}
          <div className="px-3.5 py-2.5 bg-gray-100 dark:bg-[#1F1F22] border-b border-black/10 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E25327] dark:bg-[#E8734B]" />
              <span className="font-bold text-[11px] text-black dark:text-white uppercase tracking-wider">
                Awesome Mix Vol. 1
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              {/* Equalizer animation when playing */}
              {isPlaying && (
                <div className="flex items-end gap-0.5 h-3.5 mr-2">
                  <div className="w-0.5 bg-[#4A7FF7] animate-eq-1" />
                  <div className="w-0.5 bg-[#E8734B] animate-eq-2" />
                  <div className="w-0.5 bg-emerald-400 animate-eq-3" />
                  <div className="w-0.5 bg-[#4A7FF7] animate-eq-4" />
                </div>
              )}

              <button
                onClick={onClose}
                aria-label="Close music widget"
                className="p-1 rounded text-gray-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Retro Cassette Shell Interface */}
          <div className="p-4 space-y-3.5 bg-gray-50/50 dark:bg-[#121214]/80">
            {/* Cassette Tape Face */}
            <div className="rounded-xl border border-black/10 dark:border-white/10 bg-[#EFEFEF] dark:bg-[#1A1A1D] p-3 relative overflow-hidden">
              {/* Retro Mixtape Stripe */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#E25327] via-[#4A7FF7] to-cyan-400 rounded-full mb-2.5 opacity-90" />

              {/* Tape Window with Rotating Spools */}
              <div className="rounded-lg bg-gray-200 dark:bg-[#0E0E10] border border-black/10 dark:border-white/10 p-2.5 flex items-center justify-between relative">
                {/* Left Spool */}
                <motion.div
                  animate={{ rotate: isPlaying ? 360 : 0 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="w-8 h-8 rounded-full border-2 border-dashed border-[#E8734B]/70 dark:border-[#4A7FF7]/70 flex items-center justify-center bg-white/40 dark:bg-black/40"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-600 dark:bg-gray-400" />
                </motion.div>

                {/* Tape Bridge / Track Meta */}
                <div className="text-center px-2 flex-1">
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 font-sans line-clamp-1">
                    {playlist[currentTrackIndex].artist}
                  </p>
                  <p className="text-[11px] font-bold text-black dark:text-white line-clamp-1 font-sans">
                    {playlist[currentTrackIndex].title}
                  </p>
                </div>

                {/* Right Spool */}
                <motion.div
                  animate={{ rotate: isPlaying ? 360 : 0 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="w-8 h-8 rounded-full border-2 border-dashed border-[#E8734B]/70 dark:border-[#4A7FF7]/70 flex items-center justify-center bg-white/40 dark:bg-black/40"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-600 dark:bg-gray-400" />
                </motion.div>
              </div>

              {/* Tape Stamp Footer */}
              <div className="mt-2 flex items-center justify-between text-[10px] text-gray-500 dark:text-gray-400 px-0.5">
                <span>SIDE A • C-60 CHROME</span>
                <span className="text-[#1B5DEF] dark:text-[#4A7FF7] font-semibold">
                  {playlist[currentTrackIndex].vibe}
                </span>
              </div>
            </div>

            {/* Hardware-Style Tape Deck Buttons */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrev}
                  aria-label="Previous track"
                  className="p-2 rounded-lg bg-white dark:bg-[#1E1E22] border border-black/10 dark:border-white/10 hover:border-[#4A7FF7] text-gray-700 dark:text-gray-300 transition-colors cursor-pointer"
                >
                  <SkipBack className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause playback" : "Start playback"}
                  className="p-2.5 rounded-lg bg-[#1B5DEF] dark:bg-[#4A7FF7] text-white hover:opacity-90 transition-opacity shadow-md cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                </button>

                <button
                  onClick={handleNext}
                  aria-label="Next track"
                  className="p-2 rounded-lg bg-white dark:bg-[#1E1E22] border border-black/10 dark:border-white/10 hover:border-[#4A7FF7] text-gray-700 dark:text-gray-300 transition-colors cursor-pointer"
                >
                  <SkipForward className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Curated Spotify Link */}
              <a
                href="https://open.spotify.com/playlist/37i9dQZF1DXb3m91Bh6QvP"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#1DB954]/10 border border-[#1DB954]/30 text-[#1DB954] hover:bg-[#1DB954]/20 transition-colors text-[10px]"
                title="Listen to full curated playlist on Spotify"
              >
                <span>Spotify</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
