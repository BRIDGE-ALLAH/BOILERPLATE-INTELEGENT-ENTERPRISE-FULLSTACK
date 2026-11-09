import type { NextConfig } from 'next'

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
]

const nextConfig: NextConfig = {
  basePath: process.env.BASEPATH,
  transpilePackages: [
    '@repo/config',
    '@repo/brand',
    '@repo/types',
    '@repo/utils',
    '@repo/theme',
    '@repo/constants',
    '@repo/validation',
    '@repo/auth',
    '@repo/api-client',
    '@repo/ui-system',
    '@repo/navigation',
    '@repo/fake-db',
  ],
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders
      }
    ]
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/en/dashboards/crm',
        permanent: true,
        locale: false
      },
      {
        source: '/:lang(en|fr|ar)',
        destination: '/:lang/dashboards/crm',
        permanent: true,
        locale: false
      },
      {
        source: '/:path((?!en|fr|ar|front-pages|images|api|favicon.ico).*)*',
        destination: '/en/:path*',
        permanent: true,
        locale: false
      }
    ]
  }
}

export default nextConfig
