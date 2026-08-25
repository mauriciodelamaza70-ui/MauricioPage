import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // Reduce el uso máximo de memoria durante la compilación de webpack.
  // Evita el OOM del build en Vercel para este sitio con módulos de texto grandes.
  experimental: {
    webpackMemoryOptimizations: true,
  },
  // No generar source maps del bundle de cliente en producción (ahorra memoria y tiempo de build).
  productionBrowserSourceMaps: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
