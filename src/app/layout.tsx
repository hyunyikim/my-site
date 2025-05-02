import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

import ThemeProvider from '@/contexts/theme';
import ThemeScript from '@/lib/ThemeScript';

const pretendard = localFont({
  src: [
    {
      path: './fonts/Pretendard-Light.subset.woff2',
      weight: '300',
    },
    {
      path: './fonts/Pretendard-Regular.subset.woff2',
      weight: '400',
    },
    {
      path: './fonts/Pretendard-Medium.subset.woff2',
      weight: '500',
    },
    {
      path: './fonts/Pretendard-SemiBold.subset.woff2',
      weight: '600',
    },
    {
      path: './fonts/Pretendard-Bold.subset.woff2',
      weight: '700',
    },
  ],
  variable: '--font-pretendard',
  weight: '300 700',
});

export const metadata: Metadata = {
  title: 'Hyunyi Kim',
  description: "Hyunyi Kim's space",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${pretendard.variable} font-pretendard antialiased font-medium`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
