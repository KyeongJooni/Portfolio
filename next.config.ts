import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';

const withBA = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  experimental: {
    scrollRestoration: true,
  },
};

export default withBA(nextConfig);
