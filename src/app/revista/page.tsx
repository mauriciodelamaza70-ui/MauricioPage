import type { Metadata } from 'next';
import RevistaListing from '@/components/pages/revista/RevistaListing';
import { siteConfig } from '@/lib/data';
import { academicProfessionalLinks, otherProfessionalLinks, filmProfessionalLinks, socialLinks } from '@/lib/data/links-data';
import {
  JOURNAL_BRAND,
  JOURNAL_NAME,
  PERIODICAL_ID,
  PERSON_ID,
  REVISTA_DESCRIPTION,
  REVISTA_TITLE,
  REVISTA_URL,
  SITE_NAME,
  breadcrumbNode,
  serializeJsonLd,
} from '@/lib/revista-seo';

export const metadata: Metadata = {
  title: { absolute: REVISTA_TITLE },
  description: REVISTA_DESCRIPTION,
  alternates: { canonical: '/revista' },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    siteName: SITE_NAME,
    title: REVISTA_TITLE,
    description: REVISTA_DESCRIPTION,
    url: '/revista',
    images: [{ url: `${siteConfig.url}/images/blog.jpg`, alt: JOURNAL_BRAND }],
  },
  twitter: {
    card: 'summary_large_image',
    title: REVISTA_TITLE,
    description: REVISTA_DESCRIPTION,
    images: [`${siteConfig.url}/images/blog.jpg`],
  },
};

const SAME_AS_NAMES = [
  'ORCID',
  'Google Scholar',
  'Wikipedia',
  'IMDb',
  'Zenodo',
  'ResearchGate',
  'Academia.edu',
  'LinkedIn',
  'Facebook',
  'Instagram',
  'YouTube',
];

const footerLinks = [...academicProfessionalLinks, ...otherProfessionalLinks, ...filmProfessionalLinks, ...socialLinks];
const sameAs = SAME_AS_NAMES.map((name) => footerLinks.find((link) => link.name === name)?.href).filter(
  (href): href is string => Boolean(href),
);

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Periodical',
      '@id': PERIODICAL_ID,
      name: JOURNAL_NAME,
      alternateName: [JOURNAL_BRAND, 'Confinium — Ensayos en la frontera', 'Confinium — Essays at the Borders'],
      url: REVISTA_URL,
      description: REVISTA_DESCRIPTION,
      inLanguage: ['es', 'en'],
      image: `${siteConfig.url}/images/blog.jpg`,
      editor: { '@id': PERSON_ID },
      founder: { '@id': PERSON_ID },
      publisher: { '@id': PERSON_ID },
    },
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: SITE_NAME,
      url: `${siteConfig.url}/`,
      sameAs,
    },
    breadcrumbNode(`${REVISTA_URL}#breadcrumb`, [
      { name: 'Inicio', url: `${siteConfig.url}/` },
      { name: JOURNAL_BRAND, url: REVISTA_URL },
    ]),
  ],
};

export default function RevistaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <RevistaListing />
    </>
  );
}
