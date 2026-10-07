import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, X, ExternalLink } from 'lucide-react';

const playlist = [
  {
    title: "Hooked on a Feeling",
    artist: "Blue Swede",
    src: "/audio/01-hooked-on-a-feeling.mp3",
    vibe: "Cosmic Anthem",
  },
  {
    title: "Go All the Way",
    artist: "Raspberries",
    src: "/audio/02-go-all-the-way.mp3",
    vibe: "Power Pop Orbit",
  },
  {
    title: "Spirit in the Sky",
    artist: "Norman Greenbaum",
    src: "/audio/03-spirit-in-the-sky.mp3",
    vibe: "Intergalactic Boogie",
  },
  {
    title: "Moonage Daydream",
    artist: "David Bowie",
    src: "/audio/04-moonage-daydream.mp3",
    vibe: "Glam Odyssey",
  },
  {
    title: "Fooled Around and Fell in Love",
    artist: "Elvin Bishop",
    src: "/audio/05-fooled-around-and-fell-in-love.mp3",
    vibe: "Space Romance",
  },
  {
    title: "I'm Not in Love",
    artist: "10cc",
    src: "/audio/06-im-not-in-love.mp3",
    vibe: "Ethereal Drift",
  },
  {
    title: "I Want You Back",
    artist: "The Jackson 5",
    src: "/audio/07-i-want-you-back.mp3",
    vibe: "Baby Groot Groove",
  },
  {
    title: "Come and Get Your Love",
    artist: "Redbone",
    src: "/audio/08-come-and-get-your-love.mp3",
    vibe: "Space Swagger",
  },
  {
    title: "Cherry Bomb",
    artist: "The Runaways",
    src: "/audio/09-cherry-bomb.mp3",
    vibe: "Punk Velocity",
  },
  {
    title: "Escape (The Piña Colada Song)",
    artist: "Rupert Holmes",
    src: "/audio/10-escape-pina-colada-song.mp3",
    vibe: "Milano Radio",
  },
  {
    title: "O-o-h Child",
    artist: "Five Stairsteps",
    src: "/audio/11-o-o-h-child.mp3",
    vibe: "Feel Good Orbit",
  },
  {
    title: "Ain't No Mountain High Enough",
    artist: "Marvin Gaye & Tammi Terrell",
    src: "/audio/12-aint-no-mountain-high-enough.mp3",
    vibe: "Soul Finale",
  },
];

export default function MusicPlayer({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(false);
  // Default to Track 03: "Spirit in the Sky" by Norman Greenbaum (0-indexed index 2)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(2);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  // Default volume fixed at 65% (0.65)
  const [volume, setVolume] = useState(0.65);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  // Initialize audio volume at 65% and attempt autoplay during loading screen
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.65;

    const startPlayback = () => {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          // Autoplay blocked by browser policy without user gesture; fallback will catch first tap/click
          console.log('Autoplay pending user gesture:', err.message);
        });
    };

    // Try direct autoplay immediately on mount
    startPlayback();

    // Browser autoplay policy fallback: start on very first user interaction anywhere
    const onFirstInteraction = () => {
      if (audio.paused) {
        startPlayback();
      }
      window.removeEventListener('click', onFirstInteraction);
      window.removeEventListener('keydown', onFirstInteraction);
      window.removeEventListener('touchstart', onFirstInteraction);
    };

    window.addEventListener('click', onFirstInteraction, { passive: true });
    window.addEventListener('keydown', onFirstInteraction, { passive: true });
    window.addEventListener('touchstart', onFirstInteraction, { passive: true });

    return () => {
      window.removeEventListener('click', onFirstInteraction);
      window.removeEventListener('keydown', onFirstInteraction);
      window.removeEventListener('touchstart', onFirstInteraction);
    };
  }, []);

  // Handle track switching
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.src = playlist[currentTrackIndex].src;
      audio.load();
      if (isPlaying) {
        audio
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }
  }, [currentTrackIndex, isPlaying]);

  // Handle Volume changes
  const handleVolumeChange = (e) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
      if (newVol === 0) {
        setIsMuted(true);
      } else if (isMuted) {
        setIsMuted(false);
      }
    }
  };

  // Toggle Mute
  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.muted = false;
        audioRef.current.volume = volume || 0.65;
        setIsMuted(false);
      } else {
        audioRef.current.muted = true;
        setIsMuted(true);
      }
    }
  };

  // Toggle Play / Pause
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn('Audio playback error:', err);
          setIsPlaying(false);
        });
    }
  };

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  const handleEnded = () => {
    // Autoplay next track on finish
    handleNext();
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime || 0);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleSeek = (e) => {
    const targetTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = targetTime;
      setCurrentTime(targetTime);
    }
  };

  const formatTime = (secs) => {
    if (!secs || isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
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

  const currentTrack = playlist[currentTrackIndex];
  const activeVolumePercent = isMuted ? 0 : Math.round(volume * 100);

  return (
    <>
      {/* Invisible HTML5 Audio Engine (persists playback throughout site even when modal is closed) */}
      <audio
        ref={audioRef}
        src={currentTrack.src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onEnded={handleEnded}
        preload="auto"
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-5 left-5 z-40 font-mono text-xs max-w-sm w-[calc(100vw-2.5rem)] sm:w-88 shadow-2xl"
          >
            <div className="rounded-2xl bg-white dark:bg-[#161618] border border-black/10 dark:border-white/15 overflow-hidden transition-colors shadow-2xl">
              {/* Cassette Top Header Bar */}
              <div className="px-3.5 py-2.5 bg-gray-100 dark:bg-[#1F1F22] border-b border-black/10 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E25327] dark:bg-[#E8734B]" />
                  <span className="font-bold text-[11px] text-black dark:text-white uppercase tracking-wider">
                    Awesome Mix Vol. 1
                  </span>
                  <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-semibold">
                    [TRACK {String(currentTrackIndex + 1).padStart(2, '0')}/{playlist.length}]
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  {/* Equalizer animation when playing */}
                  {isPlaying && (
                    <div className="flex items-end gap-0.5 h-3.5 mr-2" title="Audio Playing">
                      <div className="w-0.5 bg-[#4A7FF7] animate-pulse h-3" />
                      <div className="w-0.5 bg-[#E8734B] animate-pulse h-2" />
                      <div className="w-0.5 bg-emerald-400 animate-pulse h-3.5" />
                      <div className="w-0.5 bg-[#4A7FF7] animate-pulse h-2.5" />
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
              <div className="p-4 space-y-3 bg-gray-50/50 dark:bg-[#121214]/80">
                {/* Cassette Tape Face */}
                <div className="rounded-xl border border-black/10 dark:border-white/10 bg-[#EFEFEF] dark:bg-[#1A1A1D] p-3 relative overflow-hidden">
                  {/* Retro Mixtape Stripe */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-[#E25327] via-[#4A7FF7] to-cyan-400 rounded-full mb-2.5 opacity-90" />

                  {/* Tape Window with Rotating Spools */}
                  <div className="rounded-lg bg-gray-200 dark:bg-[#0E0E10] border border-black/10 dark:border-white/10 p-2.5 flex items-center justify-between relative">
                    {/* Left Spool */}
                    <motion.div
                      animate={{ rotate: isPlaying ? 360 : 0 }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
                      className="w-8 h-8 rounded-full border-2 border-dashed border-[#E8734B]/70 dark:border-[#4A7FF7]/70 flex items-center justify-center bg-white/40 dark:bg-black/40 shrink-0"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-600 dark:bg-gray-400" />
                    </motion.div>

                    {/* Tape Bridge / Track Meta */}
                    <div className="text-center px-2 flex-1 min-w-0">
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 font-sans truncate">
                        {currentTrack.artist}
                      </p>
                      <p className="text-[11px] font-bold text-black dark:text-white truncate font-sans">
                        {currentTrack.title}
                      </p>
                    </div>

                    {/* Right Spool */}
                    <motion.div
                      animate={{ rotate: isPlaying ? 360 : 0 }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
                      className="w-8 h-8 rounded-full border-2 border-dashed border-[#E8734B]/70 dark:border-[#4A7FF7]/70 flex items-center justify-center bg-white/40 dark:bg-black/40 shrink-0"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-600 dark:bg-gray-400" />
                    </motion.div>
                  </div>

                  {/* Tape Progress Scrubber */}
                  <div className="mt-2.5 space-y-1">
                    <input
                      type="range"
                      min={0}
                      max={duration || 100}
                      value={currentTime}
                      onChange={handleSeek}
                      aria-label="Seek track position"
                      className="w-full h-1 bg-gray-300 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#1B5DEF] dark:accent-[#4A7FF7]"
                    />
                    <div className="flex items-center justify-between text-[9px] text-gray-500 dark:text-gray-400">
                      <span>{formatTime(currentTime)}</span>
                      <span className="text-[#1B5DEF] dark:text-[#4A7FF7] font-semibold">{currentTrack.vibe}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>
                </div>

                {/* Tape Deck Hardware Controls */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={handlePrev}
                      aria-label="Previous track"
                      title="Previous track"
                      className="p-2 rounded-lg bg-white dark:bg-[#1E1E22] border border-black/10 dark:border-white/10 hover:border-[#4A7FF7] text-gray-700 dark:text-gray-300 transition-colors cursor-pointer"
                    >
                      <SkipBack className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={togglePlay}
                      aria-label={isPlaying ? "Pause playback" : "Start playback"}
                      title={isPlaying ? "Pause" : "Play"}
                      className="p-2.5 rounded-lg bg-[#1B5DEF] dark:bg-[#4A7FF7] text-white hover:opacity-90 transition-opacity shadow-md cursor-pointer flex items-center justify-center"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                    </button>

                    <button
                      onClick={handleNext}
                      aria-label="Next track"
                      title="Next track"
                      className="p-2 rounded-lg bg-white dark:bg-[#1E1E22] border border-black/10 dark:border-white/10 hover:border-[#4A7FF7] text-gray-700 dark:text-gray-300 transition-colors cursor-pointer"
                    >
                      <SkipForward className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Volume Slider & Adjustment */}
                  <div className="flex items-center gap-1.5 bg-gray-200/60 dark:bg-[#1E1E22] px-2.5 py-1.5 rounded-lg border border-black/5 dark:border-white/5">
                    <button
                      onClick={toggleMute}
                      aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                      title={isMuted ? "Unmute" : "Mute"}
                      className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                    >
                      {isMuted || volume === 0 ? (
                        <VolumeX className="w-3.5 h-3.5 text-red-400" />
                      ) : (
                        <Volume2 className="w-3.5 h-3.5 text-[#1B5DEF] dark:text-[#4A7FF7]" />
                      )}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      aria-label="Adjust volume"
                      title={`Volume: ${activeVolumePercent}%`}
                      className="w-16 h-1 bg-gray-300 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#1B5DEF] dark:accent-[#4A7FF7]"
                    />
                    <span className="text-[10px] font-bold text-gray-700 dark:text-gray-200 min-w-[28px] text-right">
                      {activeVolumePercent}%
                    </span>
                  </div>
                </div>

                {/* Spotify Link Footer */}
                <div className="pt-1 flex items-center justify-between text-[10px] text-gray-500 dark:text-gray-400 border-t border-black/5 dark:border-white/5">
                  <span>Guardians Soundtrack</span>
                  <a
                    href="https://open.spotify.com/playlist/37i9dQZF1DXb3m91Bh6QvP"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-[#1DB954] hover:underline"
                    title="Open on Spotify"
                  >
                    <span>Spotify ↗</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
