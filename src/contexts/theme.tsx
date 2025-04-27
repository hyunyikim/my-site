'use client';

import { DEFAULT_THEME } from '@/data';
import { Theme } from '@/types/theme';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext<ThemeProviderProps | null>(null);

type ThemeProviderProps = {
  selectedTheme: Theme;
  onChangeTheme: (theme: Theme) => void;
};

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(global.window?.__theme || DEFAULT_THEME);

  // set up global theme change function
  useEffect(() => {
    if (global.window?.__onThemeChange) {
      global.window.__onThemeChange = (newTheme: Theme) => {
        setTheme(newTheme);
      };
    }
  }, []);

  const onChangeTheme = (newTheme: Theme) => {
    global.window?.__setPreferredTheme(newTheme);
  };

  return (
    <>
      <ThemeContext.Provider value={{ selectedTheme: theme, onChangeTheme }}>
        <>{children}</>
      </ThemeContext.Provider>
    </>
  );
};

export const useTheme = () => {
  const context = ThemeContext;
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return useContext(ThemeContext) as ThemeProviderProps;
};

export default ThemeProvider;
