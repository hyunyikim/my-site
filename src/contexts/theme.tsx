'use client';

import { DEFAULT_THEME } from '@/data';
import { Theme } from '@/types/theme';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext<ThemeProviderProps | null>(null);

type ThemeProviderProps = {
  selectedTheme: Theme;
  onChangeTheme: (theme: Theme) => void;
  themeChanged: boolean;
  setThemeChanged: (changed: boolean) => void;
};

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(global.window?.__theme || DEFAULT_THEME);
  const [changed, setChanged] = useState<boolean>(false);

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
    setChanged(true);
  };

  return (
    <>
      <ThemeContext.Provider value={{ selectedTheme: theme, onChangeTheme, themeChanged: changed, setThemeChanged: setChanged }}>
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
