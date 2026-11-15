import type { Metadata } from 'next';
import HomeContent from '@/components/pages/home/HomeContent';

const ogImage = {
  url: '/images/revista/ia-trampa-perro/1-nous.png',
  width: 1536,
  height: 1024,
  alt: 'Una figura de espaldas dialogando con una esfera luminosa rotulada NOUS',
};

export const metadata: Metadata = {
  openGraph: {
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    images: [ogImage.url],
  },
};

export default function Home() {
  return <HomeContent />;
}
