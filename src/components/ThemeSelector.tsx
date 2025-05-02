'use client';

import { useTheme } from '@/contexts/theme';
import { Theme } from '@/types/theme';
import { useEffect } from 'react';

import { IoSunny, IoMoon, IoSettings } from 'react-icons/io5';

const THEME_LIST: Theme[] = ['system', 'light', 'dark'];

const THEME_ICON = [<IoSettings key="system" className="text-3xl" />, <IoSunny key="light" className="text-3xl" />, <IoMoon key="dark" className="text-3xl" />];

const THEME_LENGTH = THEME_LIST.length;

export default function ThemeSelector() {
  const { selectedTheme, onChangeTheme } = useTheme();

  const selectedIndex = THEME_LIST.findIndex((item) => item === selectedTheme);
  const previousIndex = (selectedIndex + 1 + THEME_LENGTH) % THEME_LENGTH;

  useEffect(() => {
    console.log('selectedTheme', selectedTheme);
  }, [selectedTheme]);

  return (
    <div className="flex flex-row justify-center items-center relative w-20 h-8 overflow-hidden">
      {THEME_LIST.map((item, index) => {
        return (
          <button
            key={item}
            aria-label={`Switch to ${item} theme`}
            className={`absolute translate-y-full ${selectedIndex === index && 'animate-[sun-rise_0.3s_ease-in-out_forwards]'} ${
              previousIndex === index && 'animate-[sun-set_0.3s_ease-in-out_forwards]'
            }`}
            onClick={() => {
              const nextItem = THEME_LIST[(index - 1 + THEME_LENGTH) % THEME_LENGTH];
              onChangeTheme(nextItem);
            }}>
            {THEME_ICON[index]}
          </button>
        );
      })}
    </div>
  );
}
