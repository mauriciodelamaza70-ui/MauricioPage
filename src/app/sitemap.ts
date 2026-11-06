import type { MetadataRoute } from 'next';
import { posts, siteConfig } from '@/lib/data';

const staticRoutes = [
  '',
  '/nosotros',
  '/servicios',
  '/contacto',
  '/galerias',
  '/filmografia',
  '/cortos-documentales',
  '/libros',
  '/libros/ciencia',
  '/libros/novela',
  '/musica',
  '/musica/android-anthem',
  '/musica/asia',
  '/musica/elegance',
  '/musica/krakatoa',
  '/musica/lidia',
  '/musica/locus',
  '/musica/nacieron-los-perritos',
  '/musica/pinceladas-mexicanas',
  '/musica/post-punk',
  '/musica/quantum',
  '/musica/sigilo-locus',
  '/musica/sonogramas',
  '/prensa',
  '/prensa/filmmakerlife',
  '/prensa/florence-film-awards',
  '/prensa/reforma',
  '/prensa/tec-sounds-radio',
  '/revista',
  '/revista/colaboradores',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((route) => ({ url: `${siteConfig.url}${route}` })),
    ...posts.map((post) => ({ url: `${siteConfig.url}/revista/${post.slug}` })),
  ];
}
