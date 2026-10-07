import React, { useState } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';

export default function TerminalBox() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText("npx jiya-dev");
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = "npx jiya-dev";
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Gracefully silent fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full rounded-2xl border border-hairline bg-white dark:bg-[#161618] shadow-xl overflow-hidden font-mono text-xs transition-colors">
      {/* macOS Window Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-[#1E1E20] border-b border-hairline select-none">
        <div className="flex items-center space-x-2">
          <div title="Close" aria-label="Close" className="w-3 h-3 rounded-full bg-red-500 hover:opacity-85 transition-opacity cursor-pointer" />
          <div title="Minimize" aria-label="Minimize" className="w-3 h-3 rounded-full bg-yellow-500 hover:opacity-85 transition-opacity cursor-pointer" />
          <div title="Expand" aria-label="Expand" className="w-3 h-3 rounded-full bg-green-500 hover:opacity-85 transition-opacity cursor-pointer" />
        </div>
        <div className="text-[11px] text-gray-500 dark:text-gray-400 font-medium flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5 text-[#1B5DEF] dark:text-[#4A7FF7]" />
          <span>jiya@starlord-mbp:~ (zsh)</span>
        </div>
        <div className="flex items-center space-x-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
          <span className="text-[10px] text-gray-400">active</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-4 sm:p-5 space-y-4 text-gray-800 dark:text-gray-200 bg-white/50 dark:bg-[#121214]/80">

        {/* Command 1 */}
        <div>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <span className="text-[#1B5DEF] dark:text-[#4A7FF7] font-bold">➜</span>
            <span className="text-purple-600 dark:text-purple-400">~</span>
            <span className="text-black dark:text-white font-semibold">whoami</span>
          </div>
          <div className="mt-1 pl-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            Jiya Khan Pathan <span className="text-[#1B5DEF] dark:text-[#4A7FF7] font-medium">// Star-Lord_I</span> — Frontend Engineer & Software Developer building immersive web experiences.
          </div>
        </div>

        {/* Command 2 */}
        <div>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <span className="text-[#1B5DEF] dark:text-[#4A7FF7] font-bold">➜</span>
            <span className="text-purple-600 dark:text-purple-400">~</span>
            <span className="text-black dark:text-white font-semibold">cat skills.json</span>
          </div>
          <div className="mt-1.5 pl-4 grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
            <div className="p-2 rounded-lg bg-gray-100 dark:bg-[#1C1C1E] border border-hairline">
              <span className="text-[#1B5DEF] dark:text-[#4A7FF7] font-semibold">Frontend:</span> React, Vite, Tailwind
            </div>
            <div className="p-2 rounded-lg bg-gray-100 dark:bg-[#1C1C1E] border border-hairline">
              <span className="text-[#1B5DEF] dark:text-[#4A7FF7] font-semibold">Languages:</span> JS, Python, HTML/CSS
            </div>
            <div className="p-2 rounded-lg bg-gray-100 dark:bg-[#1C1C1E] border border-hairline">
              <span className="text-[#1B5DEF] dark:text-[#4A7FF7] font-semibold">Tools:</span> Git, GitHub, Node.js
            </div>
          </div>
        </div>

        {/* Command 3 / Interactive Action */}
        <div className="pt-2 border-t border-hairline flex items-center justify-between">
          <div className="flex items-center gap-2 text-[11px] text-gray-500 dark:text-gray-400">
            <span className="text-emerald-500 font-bold">✓</span>
            <span>System operational • Ready for collaboration</span>
          </div>
          <button
            onClick={handleCopy}
            aria-label="Copy npx command to clipboard"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-700 dark:text-gray-200 transition-all active:scale-95 cursor-pointer text-[11px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-accent)]"
            title="Copy command"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied!' : 'npx jiya-dev'}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
