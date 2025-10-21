import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.niceyup.com',
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: '/assets/:path*',
        destination: 'https://assets.niceyup.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
