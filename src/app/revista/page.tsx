import type { Metadata } from 'next';
import RevistaListing from '@/components/pages/revista/RevistaListing';

const title = 'Confinium — Ensayos en la frontera | Mauricio de la Maza-Benignos';
const description =
  'Confinium, ensayos de Mauricio de la Maza-Benignos en la frontera entre disciplinas.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: '/revista' },
  openGraph: { title, description, url: '/revista' },
  twitter: { title, description },
};

export default function RevistaPage() {
  return <RevistaListing />;
}
