'use client';

import { useTheme } from './ThemeProvider';

/**
 * Example component showing how to use theme classes from themes.ts
 * Replace hardcoded Tailwind classes with theme variables
 */
export default function ThemedExample() {
  const { themeClasses } = useTheme();

  return (
    <div className={`p-6 rounded-lg ${themeClasses.cardBg} ${themeClasses.cardBorder} border`}>
      <h2 className={`text-2xl font-bold mb-4 ${themeClasses.textPrimary}`}>
        Themed Component Example
      </h2>
      <p className={`${themeClasses.textSecondary}`}>
        This component uses theme classes from themes.ts
      </p>
      
      {/* Example: Card with hover effect */}
      <div className={`mt-4 p-4 rounded-md ${themeClasses.cardBg} ${themeClasses.cardHoverBg} ${themeClasses.border} border transition-colors`}>
        <p className={themeClasses.textPrimary}>Hover me!</p>
      </div>
      
      {/* Example: Gradient button */}
      <button className={`mt-4 px-6 py-3 rounded-full ${themeClasses.gradient} text-white font-semibold`}>
        Themed Button
      </button>
    </div>
  );
}

/**
 * How to use themes in your components:
 * 
 * 1. Import useTheme hook:
 *    import { useTheme } from './ThemeProvider';
 * 
 * 2. Get themeClasses:
 *    const { themeClasses } = useTheme();
 * 
 * 3. Use theme classes in JSX:
 *    <div className={themeClasses.bgPrimary}>
 * 
 * 4. Combine with other classes:
 *    <div className={`p-4 ${themeClasses.textPrimary}`}>
 * 
 * Available theme classes (see src/lib/themes.ts):
 * - bgPrimary, bgSecondary, bgTertiary
 * - textPrimary, textSecondary, textTertiary
 * - border, borderHover
 * - cardBg, cardBorder, cardHoverBg
 * - headerBg, headerBorder, headerText
 * - footerBg, footerText, footerBorder
 * - gradient, gradientText
 * - glassEffect
 * - shadow
 */

