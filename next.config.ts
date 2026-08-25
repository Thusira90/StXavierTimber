import type { NextConfig } from "next";

// On Vercel, preview and development deployments build with
// NODE_ENV === 'production' just like the real site, so they would otherwise be
// crawlable and could enter the index. VERCEL_ENV is 'production' only for the
// production deployment; every other build (preview/development) gets a blanket
// noindex header so preview URLs never rank or attract crawler traffic.
const isProductionDeploy = process.env.VERCEL_ENV === 'production';

const nextConfig: NextConfig = {
  async headers() {
    const cacheHeaders = [
      {
        source: '/:file(.+\\.(?:webp|png|jpg|jpeg|svg|ico|woff2|woff|ttf))',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/_next/static/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
    if (isProductionDeploy) return cacheHeaders;
    return [
      ...cacheHeaders,
      {
        source: '/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ];
  },
  async redirects() {
    return [
      // Old VPI service page (removed) — VPI now lives on the homepage.
      {
        source: '/services/chemical-impregnation',
        destination: '/#services',
        permanent: true,
      },
      // Pallets are CeyPall's business (separate company/domain), not St Xavier's.
      {
        source: '/services/wooden-pallets',
        destination: 'https://www.ceypall.com/wooden-pallets-sri-lanka',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
