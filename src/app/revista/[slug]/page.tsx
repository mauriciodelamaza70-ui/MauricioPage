import type { Metadata } from 'next';
import { Fragment, type ComponentType } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { posts, siteConfig } from '@/lib/data';
import type { AcademicFields, Post } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FacebookIcon, LinkedinIcon } from '@/components/icons';
import { PostContent } from '@/components/common/PostContent';
import BarrerasEssay from '@/components/pages/revista/BarrerasEssay';
import EntesEcoEssay from '@/components/pages/revista/EntesEcoEssay';
import NarrativaRazonEssay from '@/components/pages/revista/NarrativaRazonEssay';
import RiesgoArriesgarEssay from '@/components/pages/revista/RiesgoArriesgarEssay';
import IaTrampaPerroEssay from '@/components/pages/revista/IaTrampaPerroEssay';
import TeleologiaEssay from '@/components/pages/revista/TeleologiaEssay';
import NiTantoSantoEssay from '@/components/pages/revista/NiTantoSantoEssay';
import PlataformasDigitalesEssay from '@/components/pages/revista/PlataformasDigitalesEssay';
import DivaGansterEssay from '@/components/pages/revista/DivaGansterEssay';
import { AcademicBlock } from '@/components/pages/revista/AcademicBlock';
import { IssueLine, MoreEssaysLink } from '@/components/pages/revista/IssueLine';
import {
  JOURNAL_BRAND,
  JOURNAL_NAME,
  PERIODICAL_ID,
  PERSON_ID,
  REVISTA_URL,
  SITE_NAME,
  breadcrumbNode,
  serializeJsonLd,
  toIsoDate,
} from '@/lib/revista-seo';

/** Ensayos bilingües que también traducen la portada (H1 y byline), así que la renderizan ellos mismos. */
const SELF_HERO_ESSAYS: Record<string, ComponentType> = {
  'la-diva-y-el-ganster': DivaGansterEssay,
};

/** En ensayos HTML, marca dónde va el bloque académico: el primero en español, el segundo en inglés. */
const ACADEMIC_MARKER = '<!--academic-->';

/** Ensayos bilingües con selector de idioma que se renderizan con un componente propio. */
const BILINGUAL_ESSAYS: Record<string, ComponentType<{ academic?: AcademicFields }>> = {
  'barreras-de-entrada': BarrerasEssay,
  'el-mundo-de-los-entes-eco': EntesEcoEssay,
  'narrativa-como-sustituto-de-la-razon': NarrativaRazonEssay,
  'el-riesgo-de-no-arriesgar': RiesgoArriesgarEssay,
  'la-ia-y-la-trampa-del-perro': IaTrampaPerroEssay,
  'teleologia-conciencia-y-sentido': TeleologiaEssay,
  'ni-tanto-que-queme-al-santo': NiTantoSantoEssay,
  'plataformas-digitales': PlataformasDigitalesEssay,
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

const AUTHOR_NAME = SITE_NAME;

function getArticleTitle(post: Post): string {
  return `${post.title} | ${JOURNAL_BRAND}`;
}

function isBilingual(post: Post): boolean {
  return (
    post.slug in BILINGUAL_ESSAYS ||
    post.slug in SELF_HERO_ESSAYS ||
    /English below|lang="en"/i.test(post.content ?? '')
  );
}

/** Devuelve la URL absoluta de la imagen destacada del artículo. */
function getAbsoluteImageUrl(imageUrl?: string): string {
  if (!imageUrl) return siteConfig.ogImage;
  return imageUrl.startsWith('http') ? imageUrl : `${siteConfig.url}${imageUrl}`;
}

/** Metaetiquetas Highwire/Dublin Core para Google Scholar. Solo si el artículo tiene DOI. */
function getScholarMeta(post: Post, postUrl: string): Record<string, string> | undefined {
  const issueMeta: Record<string, string> =
    post.volume && post.number
      ? {
          citation_journal_title: JOURNAL_NAME,
          citation_publisher: SITE_NAME,
          citation_volume: String(post.volume),
          citation_issue: String(post.number),
        }
      : {};
  if (!post.doi) return Object.keys(issueMeta).length ? issueMeta : undefined;
  const meta: Record<string, string> = {
    citation_title: post.citationTitle ?? post.title,
    citation_author: 'De la Maza-Benignos, Mauricio',
    citation_publication_date: toIsoDate(post.date).replaceAll('-', '/'),
    citation_doi: post.doi,
    citation_abstract_html_url: postUrl,
    citation_language: 'es',
    citation_journal_title: JOURNAL_NAME,
    citation_publisher: SITE_NAME,
    'DC.identifier': `doi:${post.doi}`,
    ...issueMeta,
  };
  if (post.localPdfUrl) meta.citation_pdf_url = `${siteConfig.url}${post.localPdfUrl}`;
  else if (post.pdfUrl) meta.citation_pdf_url = post.pdfUrl.split('?')[0];
  if (post.keywordsEs?.length) meta.citation_keywords = post.keywordsEs.join('; ');
  if (post.license) meta['DC.rights'] = post.license.name;
  return meta;
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
  const imageType = imageUrl.endsWith('.png')
    ? 'image/png'
    : imageUrl.endsWith('.jpg') || imageUrl.endsWith('.jpeg')
      ? 'image/jpeg'
      : undefined;

  const ogImage = {
    url: imageUrl,
    secureUrl: imageUrl,
    alt: post.title,
    ...(postImage?.width ? { width: postImage.width } : {}),
    ...(postImage?.height ? { height: postImage.height } : {}),
    ...(imageType ? { type: imageType } : {}),
  };

  const scholarMeta = getScholarMeta(post, postUrl);
  const title = getArticleTitle(post);

  return {
    title: { absolute: title },
    description: post.excerpt,
    ...(scholarMeta ? { other: scholarMeta } : {}),
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      type: 'article',
      url: postUrl,
      siteName: SITE_NAME,
      title,
      description: post.excerpt,
      publishedTime: toIsoDate(post.date),
      authors: [AUTHOR_NAME],
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
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
  const BilingualEssay = BILINGUAL_ESSAYS[slug];
  const SelfHeroEssay = SELF_HERO_ESSAYS[slug];
  const postUrl = `${siteConfig.url}/revista/${slug}`;
  const imageUrl = getAbsoluteImageUrl(postImage?.imageUrl);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.excerpt)}`,
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${postUrl}#article`,
        headline: post.title,
        description: post.excerpt,
        image: [imageUrl],
        datePublished: toIsoDate(post.date),
        inLanguage: isBilingual(post) ? ['es', 'en'] : 'es',
        author: { '@id': PERSON_ID },
        publisher: { '@id': PERSON_ID },
        isPartOf: { '@id': PERIODICAL_ID },
        ...(post.number ? { position: post.number } : {}),
        mainEntityOfPage: postUrl,
        url: postUrl,
        ...(post.doi ? { identifier: `https://doi.org/${post.doi}` } : {}),
        ...(post.license ? { license: post.license.url } : {}),
      },
      breadcrumbNode(`${postUrl}#breadcrumb`, [
        { name: 'Inicio', url: `${siteConfig.url}/` },
        { name: JOURNAL_BRAND, url: REVISTA_URL },
        { name: post.title, url: postUrl },
      ]),
    ],
  };

  const shareBlock = (
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
  );

  const jsonLdScript = (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
    />
  );

  if (SelfHeroEssay) {
    return (
      <>
        {jsonLdScript}
        <article className="pb-24">
          <SelfHeroEssay />
          <div className="container mx-auto px-4">{shareBlock}</div>
        </article>
      </>
    );
  }

  return (
    <>
      {jsonLdScript}
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
            {post.volume && post.number && <IssueLine volume={post.volume} number={post.number} />}
        </div>
      </section>

      <article className="py-24">
        <div className="container mx-auto px-4">
            {BilingualEssay ? (
              <BilingualEssay academic={post.doi ? post : undefined} />
            ) : post.doi && post.content.includes(ACADEMIC_MARKER) ? (
              post.content.split(ACADEMIC_MARKER).map((html, i) => (
                <Fragment key={i}>
                  {i > 0 && (
                    <div className="max-w-4xl mx-auto">
                      <AcademicBlock data={post} lang={i === 1 ? 'es' : 'en'} />
                    </div>
                  )}
                  <PostContent html={html} />
                </Fragment>
              ))
            ) : (
              <PostContent html={post.content} />
            )}

            <MoreEssaysLink />
            {shareBlock}
        </div>
      </article>
    </>
  );
}
