import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
