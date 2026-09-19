import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Disc, X, Play, Pause, SkipForward, SkipBack, Volume2, Music } from 'lucide-react';

const playlist = [
  {
    title: "Space-Opera Overture",
    artist: "Star-Lord_I Mixtape",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    title: "Cosmic Retro Groove",
    artist: "Star-Lord_I Mixtape",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    title: "Milky Way Synthwave",
    artist: "Star-Lord_I Mixtape",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
];

export default function MusicPlayer({ isOpen, onClose, onToggle }) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef(null);

  const currentTrack = playlist[currentTrackIndex];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.log("Audio play blocked/errored:", e);
      });
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleSeek = (e) => {
    const newTime = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setProgress(newTime);
    }
  };

  const changeTrack = (index) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
      }
    }, 100);
  };

  const nextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % playlist.length;
    changeTrack(nextIndex);
  };

  const prevTrack = () => {
    const prevIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    changeTrack(prevIndex);
  };

  const formatTime = (secs) => {
    if (isNaN(secs)) return "0:00";
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <>
      {/* HTML5 Audio Element (Always mounted for continuous playback) */}
      <audio
        ref={audioRef}
        src={currentTrack.src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={nextTrack}
        preload="auto"
      />

      {/* Floating Mixtape Pill (Always visible across site for continuous playback access) */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onToggle}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-gray-900/90 border border-purple-500/40 shadow-xl shadow-purple-950/40 backdrop-blur-xl text-white group cursor-pointer"
          title="Open Star-Lord_I Mixtape"
        >
          <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white shadow-md">
            <Disc className={`w-4 h-4 text-yellow-300 ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
          </div>
          <div className="text-left hidden sm:block">
            <span className="block text-[10px] font-mono text-purple-400 uppercase tracking-wider">
              {isPlaying ? 'Playing MP3' : 'Mixtape Paused'}
            </span>
            <span className="block text-xs font-bold text-gray-200 group-hover:text-cyan-300 transition-colors truncate max-w-[120px]">
              {currentTrack.title}
            </span>
          </div>
          <div className="flex items-center gap-1 pl-1">
            <span className={`w-1 h-3 bg-purple-400 rounded-full ${isPlaying ? 'animate-bounce' : ''}`} />
            <span className={`w-1 h-4 bg-cyan-400 rounded-full ${isPlaying ? 'animate-bounce' : ''}`} style={{ animationDelay: '0.2s' }} />
            <span className={`w-1 h-2 bg-yellow-400 rounded-full ${isPlaying ? 'animate-bounce' : ''}`} style={{ animationDelay: '0.4s' }} />
          </div>
        </motion.button>
      </div>

      {/* Persistent Cassette Modal (Full Player) */}
      <div className={isOpen ? "fixed bottom-24 left-6 z-50 w-80 sm:w-96" : "fixed -top-[9999px] -left-[9999px] w-1 h-1 overflow-hidden opacity-0 pointer-events-none"}>
        <div className="cassette-tape rounded-2xl p-4 shadow-2xl border border-purple-500/40 text-white backdrop-blur-xl bg-gray-950/95">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-gray-800 mb-3">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-purple-600/20 text-purple-400 border border-purple-500/30">
                <Music className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs font-mono text-purple-400">STAR-LORD_I MP3 MIXTAPE</span>
                <span className="text-sm font-bold text-white">Custom Audio Deck</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-gray-800 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Cassette Visual Window with Spinning Reels */}
          <div className="bg-black/50 rounded-xl p-4 border border-gray-800 mb-4 flex items-center justify-between relative overflow-hidden">
            <div className={`w-12 h-12 rounded-full border-2 border-dashed border-gray-500 flex items-center justify-center ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '3s' }}>
              <div className="w-4 h-4 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50" />
            </div>

            <div className="text-center px-2 flex-1">
              <span className="block text-[10px] text-gray-400 font-mono uppercase tracking-widest truncate">Now Playing</span>
              <span className="block text-xs font-bold text-cyan-300 truncate">{currentTrack.title}</span>
              <span className="block text-[10px] text-gray-400 truncate">{currentTrack.artist}</span>
            </div>

            <div className={`w-12 h-12 rounded-full border-2 border-dashed border-gray-500 flex items-center justify-center ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '3s' }}>
              <div className="w-4 h-4 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50" />
            </div>
          </div>

          {/* Progress Bar & Time */}
          <div className="space-y-1 mb-4">
            <input
              type="range"
              min="0"
              max={duration || 100}
              value={progress}
              onChange={handleSeek}
              className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
            <div className="flex justify-between text-[10px] text-gray-400 font-mono">
              <span>{formatTime(progress)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Playback Controls */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <button
              onClick={prevTrack}
              className="p-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-purple-500/50 transition-colors cursor-pointer"
              title="Previous Track"
            >
              <SkipBack className="w-4 h-4" />
            </button>
            <button
              onClick={togglePlay}
              className="p-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:scale-105 transition-transform shadow-lg shadow-purple-600/40 cursor-pointer"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white ml-0.5" />}
            </button>
            <button
              onClick={nextTrack}
              className="p-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-purple-500/50 transition-colors cursor-pointer"
              title="Next Track"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>

          {/* Volume Control */}
          <div className="flex items-center gap-2 px-1 mb-4 bg-gray-900/60 p-2 rounded-xl border border-gray-800">
            <Volume2 className="w-4 h-4 text-gray-400 shrink-0" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-full h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>

          {/* Playlist Track Selection */}
          <div className="space-y-1.5 max-h-32 overflow-y-auto pr-1">
            <span className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-1">Playlist Queue</span>
            {playlist.map((track, idx) => (
              <button
                key={idx}
                onClick={() => changeTrack(idx)}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors cursor-pointer ${
                  currentTrackIndex === idx
                    ? 'bg-purple-950/60 border border-purple-500/40 text-cyan-300 font-medium'
                    : 'bg-gray-900/50 hover:bg-gray-900 text-gray-300 border border-gray-800/80'
                }`}
              >
                <span className="truncate pr-2">{idx + 1}. {track.title}</span>
                {currentTrackIndex === idx && isPlaying && (
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping shrink-0" />
                )}
              </button>
            ))}
          </div>

          <p className="text-[10px] text-gray-500 text-center mt-3 font-mono">
            Drop MP3 files in <code className="text-purple-400">public/audio/</code> to replace tracks.
          </p>
        </div>
      </div>
    </>
  );
}
