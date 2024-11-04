import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    domains: ['hyunyikim.xyz'],
    unoptimized: true,
  },
};

export default nextConfig;
