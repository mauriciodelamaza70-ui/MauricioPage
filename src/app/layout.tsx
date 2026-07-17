import type { Metadata } from 'next';
import { Montserrat, Playfair_Display } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/lib/data';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Mauricio de la Maza Benignos',
    template: `%s | ${siteConfig.name}`,
  },
  description: 'Producción audiovisual y consultoría ambiental por Mauricio De la Maza-Benignos',
  icons: {
    icon: [
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/icon-180.png',
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'Mauricio de la Maza Benignos',
    description: 'Producción audiovisual y consultoría ambiental por Mauricio De la Maza-Benignos',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mauricio de la Maza Benignos',
    description: 'Producción audiovisual y consultoría ambiental por Mauricio De la Maza-Benignos',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('antialiased', montserrat.variable, playfair.variable)}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
