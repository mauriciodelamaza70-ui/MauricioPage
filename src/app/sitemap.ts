import type { MetadataRoute } from 'next';
import { posts, siteConfig } from '@/lib/data';
import { toIsoDate } from '@/lib/revista-seo';

const staticRoutes = [
  '',
  '/nosotros',
  '/servicios',
  '/contacto',
  '/galerias',
  '/filmografia',
  '/cortos-documentales',
  '/artes-escenicas/teatro-araiza',
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
  '/revista/colaboradores',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const postEntries = posts.map((post) => ({
    url: `${siteConfig.url}/revista/${post.slug}`,
    lastModified: toIsoDate(post.date),
  }));
  const latestPostDate = postEntries.map((entry) => entry.lastModified).sort().at(-1);

  return [
    ...staticRoutes.map((route) => ({ url: `${siteConfig.url}${route}` })),
    { url: `${siteConfig.url}/revista`, ...(latestPostDate ? { lastModified: latestPostDate } : {}) },
    ...postEntries,
  ];
}
