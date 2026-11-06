import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  productionBrowserSourceMaps: false,
  // Next quita la barra final con un 308 antes de evaluar redirects(); eso añadiría
  // un salto extra a las URLs viejas de WordPress. Se desactiva y se replica abajo,
  // después de las redirecciones 301 específicas.
  skipTrailingSlashRedirect: true,
  async redirects() {
    const legacy: [string, string][] = [
      ['/2021/09/17/la-etica-del-documental-de-naturaleza', '/revista/etica-documental-naturaleza'],
      ['/2021/11/02/valle-del-cocora', '/revista/valle-del-cocora'],
      ['/2022/05/26/prologo-de-la-loca-del-maniqui', '/revista/prologo-de-la-loca-del-maniqui'],
      ['/2021/10/25/otorga-el-claustro-doctoral-el-grado-de-doctor-honoris-causa-a-mauricio-de-la-maza-benignos', '/revista/doctor-honoris-causa'],
      ['/2021/06/23/cuatro-cienegas-y-la-tragedia-de-los-comunes', '/revista/critica-cuatro-cienegas'],
      ['/nosotros/', '/nosotros'],
      ['/colaboradores', '/revista/colaboradores'],
      ['/category/colaboradores', '/revista/colaboradores'],
      ['/category/noticias', '/revista'],
      ['/cultura', '/revista'],
    ];
    const legacyRedirects = legacy.flatMap(([source, destination]) =>
      (source.endsWith('/') ? [source] : [source, `${source}/`]).map((s) => ({
        source: s,
        destination,
        statusCode: 301 as const,
      })),
    );
    return [
      ...legacyRedirects,
      { source: '/:path+/', destination: '/:path+', permanent: true },
    ];
  },
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
