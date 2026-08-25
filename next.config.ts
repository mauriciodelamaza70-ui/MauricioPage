import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    webpackMemoryOptimizations: true,
    // Limita el número de workers que prerenderizan páginas estáticas en paralelo.
    // Con contenido pesado, 4 workers simultáneos disparan el pico de memoria del build.
    // Con 2 se reduce ese pico a costa de algo más de tiempo de generación estática.
    cpus: 2,
  },
  productionBrowserSourceMaps: false,
  // El contenido de los ensayos vive en `content/essays/*.json` y se lee con `fs`
  // en tiempo de ejecución del servidor. Next no puede rastrear esas rutas
  // estáticamente, así que se incluyen explícitamente en el output de las rutas
  // que las consumen para que existan en producción (serverless/standalone).
  outputFileTracingIncludes: {
    '/revista/[slug]': ['./content/essays/**/*'],
    '/prensa/florence-film-awards': ['./content/essays/**/*'],
    '/prensa/filmmakerlife': ['./content/essays/**/*'],
  },
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
