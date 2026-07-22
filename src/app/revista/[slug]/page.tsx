import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { posts, siteConfig } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FacebookIcon, LinkedinIcon } from '@/components/icons';
import { PostContent } from '@/components/common/PostContent';

type PageProps = {
  params: Promise<{ slug: string }>;
};

const AUTHOR_NAME = 'Mauricio de la Maza-Benignos';

const SPANISH_MONTHS: Record<string, string> = {
  enero: '01',
  febrero: '02',
  marzo: '03',
  abril: '04',
  mayo: '05',
  junio: '06',
  julio: '07',
  agosto: '08',
  septiembre: '09',
  octubre: '10',
  noviembre: '11',
  diciembre: '12',
};

/** Convierte una fecha en español ("16 de Julio, 2026") a formato ISO 8601 (2026-07-16). */
function toIsoDate(date: string): string {
  const match = date.match(/(\d{1,2})\s+de\s+([A-Za-zÁÉÍÓÚáéíóú]+),?\s+(\d{4})/);
  if (!match) return date;
  const [, day, monthName, year] = match;
  const month = SPANISH_MONTHS[monthName.toLowerCase()];
  if (!month) return date;
  return `${year}-${month}-${day.padStart(2, '0')}`;
}

/** Devuelve la URL absoluta de la imagen destacada del artículo. */
function getAbsoluteImageUrl(imageUrl?: string): string {
  if (!imageUrl) return siteConfig.ogImage;
  return imageUrl.startsWith('http') ? imageUrl : `${siteConfig.url}${imageUrl}`;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return { title: 'Artículo no encontrado' };
  }

  const postImage = PlaceHolderImages.find((p) => p.id === post.imageId);
  const imageUrl = getAbsoluteImageUrl(postImage?.imageUrl);
  const postUrl = `${siteConfig.url}/revista/${slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      type: 'article',
      url: postUrl,
      siteName: siteConfig.name,
      title: post.title,
      description: post.excerpt,
      publishedTime: toIsoDate(post.date),
      authors: [AUTHOR_NAME],
      images: [
        {
          url: imageUrl,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

/**
 * Página de artículo individual de la revista.
 * Se ha convertido a Server Component para evitar errores de hidratación y optimizar el rendimiento.
 */
export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const postImage = PlaceHolderImages.find((p) => p.id === post.imageId);
  const heroImage = PlaceHolderImages.find((p) => p.id === (post.heroImageId ?? post.imageId));
  const postUrl = `${siteConfig.url}/revista/${slug}`;
  const imageUrl = getAbsoluteImageUrl(postImage?.imageUrl);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.excerpt)}`,
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: [imageUrl],
    datePublished: toIsoDate(post.date),
    dateModified: toIsoDate(post.date),
    author: {
      '@type': 'Person',
      name: AUTHOR_NAME,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/icon-512.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative h-[50vh] min-h-[400px] w-full text-white">
        {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center p-4">
            <h1 className="font-headline text-4xl md:text-6xl font-bold max-w-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-gray-300">
                Por: {post.author ?? 'De la Maza Team'} / {post.date}
            </p>
        </div>
      </section>

      <article className="py-24">
        <div className="container mx-auto px-4">
            <PostContent html={post.content} />

            <div className="max-w-4xl mx-auto mt-16 border-t pt-8">
              <div className="flex items-center justify-between">
                <h3 className="font-headline text-2xl font-bold">Compartir</h3>
                <div className="flex gap-4">
                  <Link href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600">
                    <FacebookIcon className="h-8 w-8" />
                  </Link>
                  <Link href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700">
                    <LinkedinIcon className="h-8 w-8" />
                  </Link>
                </div>
              </div>
            </div>
        </div>
      </article>
    </>
  );
}
