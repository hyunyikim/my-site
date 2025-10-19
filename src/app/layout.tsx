import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';
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
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TDVJXZBN');
            `,
          }}
        />
        <ThemeScript />
      </head>
      <body className={`${pretendard.variable} font-pretendard antialiased font-medium`}>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TDVJXZBN"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
