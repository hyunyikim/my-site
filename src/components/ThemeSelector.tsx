import { useTheme } from '@/contexts/theme';
import { useEffect } from 'react';

export default function ThemeSelector() {
  const { selectedTheme, onChangeTheme } = useTheme();

  useEffect(() => {
    console.log('selectedTheme', selectedTheme);
  }, [selectedTheme]);

  return (
    <div className="flex flex-row gap-3">
      <div
        id="system"
        onClick={() => {
          console.log('click system');
          onChangeTheme('system');
        }}>
        System
      </div>
      <div
        id="light"
        onClick={() => {
          console.log('click light');
          onChangeTheme('light');
        }}>
        Light
      </div>
      <div
        id="dark"
        onClick={() => {
          console.log('click dark');
          onChangeTheme('dark');
        }}>
        dark
      </div>
    </div>
  );
}
