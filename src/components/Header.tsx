'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useTheme } from './ThemeProvider';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { themeClasses } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', name: 'Home', href: '/' },
    { id: 'services', name: 'Services', href: '/services' },
    { id: 'portfolio', name: 'Portfolio', href: '/portfolio' },
    { id: 'pricing', name: 'Pricing', href: '/pricing' },
    { id: 'about', name: 'About Us', href: '/about' },
    { id: 'faq', name: 'FAQ', href: '/faq' },
  ];

  // Determine active tab based on current pathname
  const isActiveTab = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? `${themeClasses.headerScrolled} ${themeClasses.shadow}` 
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
              ? `${themeClasses.glassEffectDark} ${themeClasses.borderLight}`
              : `${themeClasses.glassEffect} ${themeClasses.border}`
          } rounded-full px-2 py-2 border`}>
            {navItems.map((item) => {
              const isActive = isActiveTab(item.href);
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`relative px-5 py-2.5 rounded-full transition-all duration-500 ease-out ${
                    isActive
                      ? themeClasses.textWhite
                      : `${themeClasses.headerTextSecondary} hover:${themeClasses.textPrimary}`
                  }`}
                >
                  {/* Active Tab Background */}
                  {isActive && (
                    <div className={`absolute inset-0 rounded-full ${themeClasses.gradient} ${themeClasses.shadowPurple} animate-slide-in`}></div>
                  )}
                  
                  {/* Content */}
                  <span className="text-sm font-semibold whitespace-nowrap relative z-10">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* CTA Button & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/contact"
              className={`group relative px-6 py-3 rounded-full font-semibold text-sm overflow-hidden transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? `${themeClasses.buttonPrimary} ${themeClasses.shadowPurple}`
                  : themeClasses.buttonSecondary
              }`}
            >
              <div className="relative flex items-center space-x-2">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                <span>Start Your Project</span>
              </div>
            </Link>
          </div>

          {/* Mobile Menu - Theme Toggle & Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer ${
                isScrolled
                  ? `${themeClasses.cardBg} ${themeClasses.cardHoverBg}`
                  : `${themeClasses.glassEffect} ${themeClasses.border} border`
              }`}
            >
            <div className="relative w-5 h-4 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                  isScrolled ? 'bg-purple-600' : themeClasses.textPrimary
                } ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
              ></span>
              <span
                className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                  isScrolled ? 'bg-purple-600' : themeClasses.textPrimary
                } ${isMenuOpen ? 'opacity-0' : ''}`}
              ></span>
              <span
                className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                  isScrolled ? 'bg-purple-600' : themeClasses.textPrimary
                } ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
              ></span>
            </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Creative Design */}
        {isMenuOpen && (
          <div className={`lg:hidden mt-4 pb-4 space-y-2 animate-fade-in rounded-2xl ${themeClasses.glassEffectDark} ${themeClasses.shadow}`}>
            {navItems.map((item) => {
              const isActive = isActiveTab(item.href);
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`relative px-4 py-3 rounded-xl transition-all duration-500 ease-out overflow-hidden ${
                    isActive
                      ? themeClasses.textWhite
                      : `${themeClasses.headerTextSecondary} hover:${themeClasses.textPrimary}`
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {isActive && (
                    <div className={`absolute inset-0 ${themeClasses.gradient} rounded-xl animate-slide-in`}></div>
                  )}
                  <span className="text-sm font-semibold relative z-10">{item.name}</span>
                </Link>
              );
            })}
            <Link
              href="/contact"
              className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-xl ${themeClasses.gradient} ${themeClasses.textWhite} ${themeClasses.shadow} hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              <span>Start Your Project</span>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

