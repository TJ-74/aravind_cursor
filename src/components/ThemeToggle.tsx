'use client';

import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="w-16 h-8" /> // Placeholder to maintain layout
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative group flex items-center justify-center w-16 h-8 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 dark:from-indigo-600 dark:via-purple-700 dark:to-blue-800 transition-all duration-500 hover:scale-110 shadow-2xl hover:shadow-purple-500/50 dark:hover:shadow-blue-500/50 border-2 border-white/20 dark:border-white/10"
      aria-label="Toggle theme"
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {/* Animated Background Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 dark:from-indigo-500 dark:via-purple-600 dark:to-blue-700 opacity-40 blur-md animate-pulse"></div>

      {/* Toggle Knob with Enhanced Design */}
      <div
        className={`relative w-7 h-7 rounded-full transform transition-all duration-500 flex items-center justify-center shadow-xl ${
          theme === 'dark'
            ? 'translate-x-4 bg-gradient-to-br from-slate-800 via-slate-900 to-black ring-2 ring-blue-400/50'
            : '-translate-x-4 bg-gradient-to-br from-sky-100 via-blue-50 to-white ring-2 ring-yellow-400/60'
        }`}
      >
        {/* Inner Glow Effect */}
        <div className={`absolute inset-0 rounded-full ${
          theme === 'dark'
            ? 'bg-blue-400/20 blur-sm'
            : 'bg-yellow-300/40 blur-sm'
        } animate-pulse`}></div>

        {/* Sun Icon with Enhanced Styling */}
        <div className={`absolute transition-all duration-500 ${
          theme === 'dark'
            ? 'opacity-0 scale-0 rotate-180'
            : 'opacity-100 scale-100 rotate-0'
        }`}>
          <svg
            className="w-5 h-5 text-orange-500 drop-shadow-lg filter"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="4" fill="currentColor" />
            <path strokeLinecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
          </svg>
        </div>

        {/* Moon Icon with Enhanced Styling */}
        <div className={`absolute transition-all duration-500 ${
          theme === 'dark'
            ? 'opacity-100 scale-100 rotate-0'
            : 'opacity-0 scale-0 rotate-180'
        }`}>
          <svg
            className="w-5 h-5 text-blue-300 drop-shadow-lg filter"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
          {/* Stars around moon */}
          <div className="absolute -top-1 -right-1 w-1 h-1 bg-yellow-200 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-1 -left-1 w-0.5 h-0.5 bg-yellow-200 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>

      {/* Outer Ring Animation */}
      <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
        theme === 'dark'
          ? 'shadow-[0_0_15px_rgba(99,102,241,0.5)]'
          : 'shadow-[0_0_15px_rgba(168,85,247,0.5)]'
      }`}></div>
    </button>
  );
}

