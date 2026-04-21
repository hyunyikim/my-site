export type SideProject = {
  name: string;
  description: string;
  tag: string;
  techStack?: string[];
  icon?: string;
  url?: string;
  inDevelopment?: boolean;
};

export const SIDE_PROJECTS: SideProject[] = [
  {
    name: 'Local Voice AI',
    description: 'A local, privacy-first voice AI dictation app for macOS (Apple Silicon).',
    tag: 'Desktop App',
    techStack: ['Python', 'Qwen3-ASR-1.7B Model', 'MLX'],
    icon: '/images/local-voice-ai.svg',
    url: 'https://github.com/hyunyikim/local-voice-ai',
  },
  {
    name: 'Hangul Daily',
    description:
      'A web app for people who have just started learning Korean. Since the Korean alphabet, Hangul, works very differently from the Roman alphabet, the app focuses on building that intuition from day one.',
    tag: 'Web App',
    techStack: ['Claude Code', 'React', 'Vercel'],
    icon: '/images/hangul-daily.ico',
    url: 'https://hangul-daily.vercel.app/',
  },
  {
    name: 'File Name Linter',
    description: 'Helps you follow consistent file naming rules for images, audio, fonts, and more.',
    tag: 'VSCode Ext',
    icon: '/images/file-name-linter-icon-128.png',
    url: 'https://marketplace.visualstudio.com/items?itemName=hyunyi-kim.file-name-linter',
  },
];
