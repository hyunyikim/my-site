import { Theme } from '@/types/theme';
import initTheme from './initTheme';

declare global {
  interface Window {
    __theme: Theme;
    // for the React
    __onThemeChange: (theme: Theme) => void;
    // for the whoel theme control
    __setPreferredTheme: (theme: Theme) => void;
  }
}

export default function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: `(${initTheme})();` }} />;
}
