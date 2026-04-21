export type WorkExperience = {
  role: string;
  company: string;
  period: string;
  description?: string;
};

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    role: 'Frontend Developer',
    company: 'MassAdoption',
    period: 'Jul 2025 – Apr 2026',
    description: 'Built and maintained a large-scale B2C web application used by 200K+ monthly active users',
  },
  {
    role: 'Frontend Developer',
    company: 'mypaperwork',
    period: 'Aug 2022 – Apr 2024',
    description: 'Developed a responsive webpage.',
  },
  {
    role: 'Frontend Developer',
    company: 'MassAdoption',
    period: 'Aug 2022 – Apr 2024',
    description: 'Built and maintained a B2B SaaS service, successfully migrating legacy features to a new environment.',
  },
  {
    role: 'Full Stack Developer',
    company: 'OasisBusiness',
    period: 'Feb 2021 – Aug 2022',
    description: 'Developed and managed both frontend and backend systems for small business owners.',
  },
  {
    role: 'Full Stack Developer',
    company: 'HanteoGlobal',
    period: 'Jun 2019 – Dec 2020',
    description: 'Created and supported frontend and backend functionality for a global K-pop fan community.',
  },
];
