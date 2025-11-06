export const themes = {
  light: {
    name: 'light',
    colors: {
      // Backgrounds
      bgPrimary: 'bg-gray-50',
      bgSecondary: 'bg-white',
      bgTertiary: 'bg-gray-100',
      bgGradient: 'bg-gradient-to-br from-gray-100 via-purple-50 to-gray-100',
      
      // Text
      textPrimary: 'text-gray-900',
      textSecondary: 'text-gray-600',
      textTertiary: 'text-gray-500',
      textWhite: 'text-white',
      
      // Borders
      border: 'border-gray-200',
      borderHover: 'border-gray-300',
      borderLight: 'border-gray-100',
      
      // Cards
      cardBg: 'bg-white',
      cardBorder: 'border-gray-200',
      cardHoverBg: 'hover:bg-gray-50',
      cardShadow: 'shadow-lg shadow-gray-200/50',
      
      // Header
      headerBg: 'bg-white/80',
      headerScrolled: 'bg-white/95',
      headerBorder: 'border-gray-200',
      headerText: 'text-gray-900',
      headerTextSecondary: 'text-gray-600',
      headerGlass: 'bg-white/80 backdrop-blur-md',
      
      // Footer
      footerBg: 'bg-white',
      footerText: 'text-gray-600',
      footerHeading: 'text-gray-900',
      footerBorder: 'border-gray-200',
      footerLink: 'text-gray-600 hover:text-gray-900',
      
      // Hero
      heroBg: 'bg-gradient-to-br from-gray-50 via-purple-50/30 to-gray-50',
      heroText: 'text-gray-900',
      heroSubtext: 'text-gray-700',
      heroBadgeBg: 'bg-purple-100/50 border-purple-200',
      heroBadgeText: 'text-purple-700',
      
      // Buttons
      buttonPrimary: 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700',
      buttonSecondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 border-gray-300',
      buttonOutline: 'border-2 border-purple-500 text-purple-700 hover:bg-purple-50',
      
      // Gradients
      gradient: 'bg-gradient-to-r from-purple-600 to-blue-600',
      gradientText: 'bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent',
      gradientHover: 'hover:from-blue-600 hover:to-purple-600',
      
      // Glass effects
      glassEffect: 'bg-white/80 backdrop-blur-md border-gray-200',
      glassEffectDark: 'bg-gray-100/80 backdrop-blur-md border-gray-300',
      
      // Shadows
      shadow: 'shadow-lg shadow-gray-200',
      shadowHover: 'hover:shadow-xl hover:shadow-gray-300',
      shadowPurple: 'shadow-lg shadow-purple-200',
      
      // Inputs
      inputBg: 'bg-white',
      inputBorder: 'border-gray-300',
      inputFocus: 'focus:border-purple-500 focus:ring-purple-500',
      inputText: 'text-gray-900',
      inputPlaceholder: 'placeholder-gray-400',
      
      // Badges/Tags
      badgePurple: 'bg-purple-100 text-purple-700 border-purple-200',
      badgeBlue: 'bg-blue-100 text-blue-700 border-blue-200',
      badgePink: 'bg-pink-100 text-pink-700 border-pink-200',
      
      // Stats
      statBg: 'bg-gradient-to-br from-purple-50 to-blue-50',
      statBorder: 'border-purple-200',
      statText: 'text-purple-700',
      statNumber: 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600',
    }
  },
  dark: {
    name: 'dark',
    colors: {
      // Backgrounds
      bgPrimary: 'bg-[#0f1119]',
      bgSecondary: 'bg-[#151825]',
      bgTertiary: 'bg-[#1a1d2d]',
      bgGradient: 'bg-gradient-to-br from-[#0f1119] via-purple-900/20 to-[#0f1119]',
      
      // Text
      textPrimary: 'text-white',
      textSecondary: 'text-gray-300',
      textTertiary: 'text-gray-400',
      textWhite: 'text-white',
      
      // Borders
      border: 'border-white/10',
      borderHover: 'border-white/20',
      borderLight: 'border-white/5',
      
      // Cards
      cardBg: 'bg-[#151825]',
      cardBorder: 'border-white/10',
      cardHoverBg: 'hover:bg-[#1a1d2d]',
      cardShadow: 'shadow-lg shadow-purple-900/20',
      
      // Header
      headerBg: 'bg-[#0f1119]/80',
      headerScrolled: 'bg-[#0f1119]/95',
      headerBorder: 'border-white/10',
      headerText: 'text-white',
      headerTextSecondary: 'text-gray-300',
      headerGlass: 'bg-[#0f1119]/80 backdrop-blur-md',
      
      // Footer
      footerBg: 'bg-[#0f1119]',
      footerText: 'text-gray-400',
      footerHeading: 'text-white',
      footerBorder: 'border-white/10',
      footerLink: 'text-gray-400 hover:text-white',
      
      // Hero
      heroBg: 'bg-gradient-to-br from-[#0f1119] via-purple-900/20 to-[#0f1119]',
      heroText: 'text-white',
      heroSubtext: 'text-gray-300',
      heroBadgeBg: 'bg-purple-500/20 border-purple-500/30',
      heroBadgeText: 'text-white',
      
      // Buttons
      buttonPrimary: 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700',
      buttonSecondary: 'bg-white/10 text-white hover:bg-white/20 border-white/20',
      buttonOutline: 'border-2 border-purple-500 text-white hover:bg-purple-500/10',
      
      // Gradients
      gradient: 'bg-gradient-to-r from-purple-600 to-blue-600',
      gradientText: 'bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent',
      gradientHover: 'hover:from-blue-600 hover:to-purple-600',
      
      // Glass effects
      glassEffect: 'bg-[#0f1119]/80 backdrop-blur-md border-white/5',
      glassEffectDark: 'bg-[#151825]/80 backdrop-blur-md border-white/10',
      
      // Shadows
      shadow: 'shadow-lg shadow-purple-900/20',
      shadowHover: 'hover:shadow-xl hover:shadow-purple-900/30',
      shadowPurple: 'shadow-lg shadow-purple-500/50',
      
      // Inputs
      inputBg: 'bg-[#1a1d2d]',
      inputBorder: 'border-purple-900/20',
      inputFocus: 'focus:border-purple-600 focus:ring-purple-600/20',
      inputText: 'text-white',
      inputPlaceholder: 'placeholder-gray-500',
      
      // Badges/Tags
      badgePurple: 'bg-purple-500/10 text-gray-300 border-purple-500/20',
      badgeBlue: 'bg-blue-500/10 text-gray-300 border-blue-500/20',
      badgePink: 'bg-pink-500/10 text-gray-300 border-pink-500/20',
      
      // Stats
      statBg: 'bg-gradient-to-br from-purple-500/20 to-blue-500/20',
      statBorder: 'border-purple-500/30',
      statText: 'text-gray-300',
      statNumber: 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400',
    }
  }
};

export type Theme = typeof themes.light;
export type ThemeName = keyof typeof themes;

