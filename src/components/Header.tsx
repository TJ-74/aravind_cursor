'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('services');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'services', name: 'Services', href: '#services', icon: '⚡' },
    { id: 'solutions', name: 'Solutions', href: '#how-it-works', icon: '🎯' },
    { id: 'pricing', name: 'Pricing', href: '#pricing', icon: '💎' },
    { id: 'portfolio', name: 'Portfolio', href: '#portfolio', icon: '🎬' },
    { id: 'resources', name: 'Resources', href: '#faq', icon: '📚' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect-dark shadow-lg shadow-purple-900/20' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo with Creative Design */}
          <Link href="/" className="group flex items-center space-x-2">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 via-purple-500 to-blue-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-purple-500/30">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                ArvindLuxEdit
              </span>
              <span className="text-[10px] text-gray-500 -mt-1 tracking-wider">CREATIVE STUDIO</span>
            </div>
          </Link>

          {/* Desktop Navigation - Creative Tab Style */}
          <div className={`hidden lg:flex items-center transition-all duration-300 ${
            isScrolled 
              ? 'glass-effect-dark border-purple-900/20'
              : 'bg-[#151825]/50 backdrop-blur-sm border-white/10'
          } rounded-full px-2 py-2 border`}>
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setActiveTab(item.id)}
                className={`relative px-5 py-2.5 rounded-full transition-all duration-300 ${
                  activeTab === item.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {/* Active Tab Background */}
                {activeTab === item.id && (
                  <div className="absolute inset-0 rounded-full shadow-lg animate-fade-in theme-gradient shadow-purple-900/40"></div>
                )}
                
                {/* Content */}
                <div className="relative flex items-center space-x-2">
                  <span className={`text-lg transition-transform duration-300 ${
                    activeTab === item.id ? 'scale-110' : ''
                  }`}>
                    {item.icon}
                  </span>
                  <span className="text-sm font-semibold whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Button - Watch Demo */}
          <div className="hidden lg:flex items-center">
            <Link
              href="#demo"
              className={`group relative px-6 py-3 rounded-full font-semibold text-sm overflow-hidden transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/40 hover:shadow-xl hover:shadow-purple-500/50'
                  : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20'
              }`}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                isScrolled
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                  : 'bg-white/10'
              }`}></div>
              <div className="relative flex items-center space-x-2">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
                <span>Watch Demo</span>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button - Creative Design */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer ${
              isScrolled
                ? 'bg-gradient-to-br from-purple-100 to-blue-100 hover:from-purple-200 hover:to-blue-200'
                : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20'
            }`}
          >
            <div className="relative w-5 h-4 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                  isScrolled ? 'bg-purple-600' : 'bg-white'
                } ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
              ></span>
              <span
                className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                  isScrolled ? 'bg-purple-600' : 'bg-white'
                } ${isMenuOpen ? 'opacity-0' : ''}`}
              ></span>
              <span
                className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                  isScrolled ? 'bg-purple-600' : 'bg-white'
                } ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu - Creative Design */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2 animate-fade-in rounded-2xl glass-effect-dark shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-[#1a1d2d] text-gray-400 hover:text-white"
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMenuOpen(false);
                }}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className={`text-sm font-semibold ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}>{item.name}</span>
              </Link>
            ))}
            <Link
              href="#demo"
              className="flex items-center justify-center space-x-2 px-4 py-3 rounded-xl theme-gradient text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
              </svg>
              <span>Watch Demo</span>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

