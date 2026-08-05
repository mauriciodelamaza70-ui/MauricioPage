import type { Metadata } from 'next';
import Script from 'next/script';
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

const GA_MEASUREMENT_ID = 'G-RHPFKGZDVK';
const FB_PIXEL_ID = '1506864467415170';

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
    images: [
      {
        url: siteConfig.ogImage,
        alt: 'Mauricio de la Maza-Benignos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mauricio de la Maza Benignos',
    description: 'Producción audiovisual y consultoría ambiental por Mauricio De la Maza-Benignos',
    images: [siteConfig.ogImage],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "WebSite",
      "@id": "https://www.mauriciodelamazabenignos.com/#website",
      "url": "https://www.mauriciodelamazabenignos.com/",
      "name": "Mauricio De la Maza-Benignos",
      "description": "Cine, música y pensamiento científico de Mauricio De la Maza-Benignos.",
      "inLanguage": "es-MX",
      "publisher": { "@id": "https://www.mauriciodelamazabenignos.com/#person" }
    },

    {
      "@type": "Person",
      "@id": "https://www.mauriciodelamazabenignos.com/#person",
      "name": "Mauricio De la Maza-Benignos",
      "alternateName": ["Mauricio de la Maza", "Mauricio De la Maza Benignos"],
      "url": "https://www.mauriciodelamazabenignos.com/",
      "image": "https://www.mauriciodelamazabenignos.com/images/Mauricio.jpg",
      "description": "Cineasta, compositor y biólogo evolutivo mexicano. Su cine transita entre el documental ambiental de tono poético y la ficción introspectiva.",
      "jobTitle": ["Cineasta", "Compositor", "Biólogo evolutivo", "Consultor ambiental"],
      "knowsAbout": [
        "Cine documental",
        "Cine de ficción",
        "Composición musical",
        "Ictiología",
        "Conservación ambiental",
        "Consultoría ambiental estratégica"
      ],
      "nationality": { "@type": "Country", "name": "México" },
      "worksFor": [
        { "@id": "https://www.mauriciodelamazabenignos.com/#organization-dlmcf" },
        { "@id": "https://www.mauriciodelamazabenignos.com/#organization-wcff" }
      ],
      "subjectOf": { "@id": "https://youtu.be/MtvDLkDufCg#video" },
      "sameAs": [
        "https://en.wikipedia.org/wiki/Mauricio_De_la_Maza-Benignos",
        "https://www.imdb.com/es/name/nm14485536/",
        "https://filmfreeway.com/MauriciodelaMazaBenignos",
        "https://scholar.google.com.mx/citations?user=55cWcTAAAAAJ&hl=es&oi=ao",
        "https://independentscholar.academia.edu/MauricioDelaMazaBenignos",
        "https://www.researchgate.net/profile/Mauricio-De-La-Maza-Benignos",
        "https://open.spotify.com/intl-es/artist/2qHtMVEyh6uAXl5HiBT9GZ",
        "https://music.apple.com/us/artist/mauricio-de-la-maza/1728959590",
        "https://mauriciodelamaza.bandcamp.com",
        "https://wcff.org/meet-the-team/",
        "https://www.linkedin.com/in/mauricio-de-la-maza-benignos-224a2a9/",
        "https://www.instagram.com/mauriciodelamazabenignos/",
        "https://www.facebook.com/MauricioDelaMazaBenignos",
        "https://www.youtube.com/@mauriciodelamaza7834"
      ]
    },

    {
      "@type": "Organization",
      "@id": "https://www.mauriciodelamazabenignos.com/#organization-dlmcf",
      "name": "De la Maza Consulting and Films",
      "url": "https://www.mauriciodelamazabenignos.com/",
      "founder": { "@id": "https://www.mauriciodelamazabenignos.com/#person" },
      "areaServed": "MX",
      "knowsAbout": ["Producción audiovisual", "Consultoría ambiental estratégica"]
    },

    {
      "@type": "Person",
      "@id": "https://www.mauriciodelamazabenignos.com/#person-christopher-gervais",
      "name": "Christopher Gervais",
      "description": "Fundador del Wildlife Conservation Film Festival (WCFF)."
    },

    {
      "@type": "Person",
      "@id": "https://www.mauriciodelamazabenignos.com/#person-lillian-gervais",
      "name": "Lillian Gervais",
      "description": "Presidenta del Wildlife Conservation Film Festival (WCFF)."
    },

    {
      "@type": "Person",
      "@id": "https://www.mauriciodelamazabenignos.com/#person-robert-hannold",
      "name": "Robert L. Hannold",
      "description": "Chairman del Wildlife Conservation Film Festival (WCFF)."
    },

    {
      "@type": "Organization",
      "@id": "https://www.mauriciodelamazabenignos.com/#organization-wcff",
      "name": "Wildlife Conservation Film Festival",
      "alternateName": "WCFF",
      "url": "https://wcff.org",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "601 W 26th St Ste 325-108",
        "addressLocality": "New York",
        "addressRegion": "NY",
        "postalCode": "10001",
        "addressCountry": "US"
      },
      "founder": { "@id": "https://www.mauriciodelamazabenignos.com/#person-christopher-gervais" },
      "employee": [
        {
          "@type": "Role",
          "roleName": "President",
          "employee": { "@id": "https://www.mauriciodelamazabenignos.com/#person-lillian-gervais" }
        },
        {
          "@type": "Role",
          "roleName": "Chairman",
          "employee": { "@id": "https://www.mauriciodelamazabenignos.com/#person-robert-hannold" }
        },
        {
          "@type": "Role",
          "roleName": "CEO",
          "employee": { "@id": "https://www.mauriciodelamazabenignos.com/#person" }
        }
      ],
      "member": { "@id": "https://www.mauriciodelamazabenignos.com/#person" }
    },

    {
      "@type": "Organization",
      "@id": "https://www.mauriciodelamazabenignos.com/#organization-panterra",
      "name": "Panterra",
      "alternateName": "Panterra Cine Fest",
      "description": "Marca socia del Wildlife Conservation Film Festival (WCFF), creada para llevar el festival a México. Actualmente latente, en espera de activación futura para otros mercados.",
      "url": "https://panterracinefest.org",
      "founder": { "@id": "https://www.mauriciodelamazabenignos.com/#person" }
    },

    {
      "@type": "Movie",
      "@id": "https://corafilm.com/#movie",
      "name": "Cora",
      "url": "https://corafilm.com",
      "director": { "@id": "https://www.mauriciodelamazabenignos.com/#person" },
      "musicBy": { "@id": "https://www.mauriciodelamazabenignos.com/#person" },
      "productionCompany": { "@id": "https://www.mauriciodelamazabenignos.com/#organization-dlmcf" },
      "sameAs": ["https://www.imdb.com/es/name/nm14485536/"]
    },

    {
      "@type": "Movie",
      "@id": "https://dialogosdelamuerte.com/#movie",
      "name": "Diálogos de la muerte",
      "url": "https://dialogosdelamuerte.com",
      "director": { "@id": "https://www.mauriciodelamazabenignos.com/#person" },
      "musicBy": { "@id": "https://www.mauriciodelamazabenignos.com/#person" },
      "productionCompany": { "@id": "https://www.mauriciodelamazabenignos.com/#organization-dlmcf" }
    },

    {
      "@type": "Movie",
      "@id": "https://theshoe.info/#movie",
      "name": "El Zapato",
      "url": "https://theshoe.info",
      "director": { "@id": "https://www.mauriciodelamazabenignos.com/#person" },
      "productionCompany": { "@id": "https://www.mauriciodelamazabenignos.com/#organization-dlmcf" }
    },

    {
      "@type": "Movie",
      "@id": "https://makhaira.mauriciodelamazabenignos.com/#movie",
      "name": "El Gran Makhaira",
      "url": "https://makhaira.mauriciodelamazabenignos.com",
      "director": { "@id": "https://www.mauriciodelamazabenignos.com/#person" },
      "productionCompany": { "@id": "https://www.mauriciodelamazabenignos.com/#organization-dlmcf" }
    },

    {
      "@type": "MusicRecording",
      "@id": "https://www.mauriciodelamazabenignos.com/musica/lidia#recording",
      "name": "Lidia",
      "description": "Una respetuosa distancia.",
      "url": "https://www.mauriciodelamazabenignos.com/musica/lidia",
      "byArtist": { "@id": "https://www.mauriciodelamazabenignos.com/#person" }
    },

    {
      "@type": "MusicAlbum",
      "@id": "https://www.mauriciodelamazabenignos.com/musica/sigilo-locus#album",
      "name": "Sigilo / Locus",
      "description": "Dos piezas, un mismo pulso.",
      "url": "https://www.mauriciodelamazabenignos.com/musica/sigilo-locus",
      "byArtist": { "@id": "https://www.mauriciodelamazabenignos.com/#person" },
      "track": [
        { "@id": "https://www.mauriciodelamazabenignos.com/musica/sigilo-locus#track-sigilo" },
        { "@id": "https://www.mauriciodelamazabenignos.com/musica/sigilo-locus#track-locus" }
      ]
    },
    {
      "@type": "MusicRecording",
      "@id": "https://www.mauriciodelamazabenignos.com/musica/sigilo-locus#track-sigilo",
      "name": "Sigilo",
      "byArtist": { "@id": "https://www.mauriciodelamazabenignos.com/#person" },
      "inAlbum": { "@id": "https://www.mauriciodelamazabenignos.com/musica/sigilo-locus#album" }
    },
    {
      "@type": "MusicRecording",
      "@id": "https://www.mauriciodelamazabenignos.com/musica/sigilo-locus#track-locus",
      "name": "Locus",
      "byArtist": { "@id": "https://www.mauriciodelamazabenignos.com/#person" },
      "inAlbum": { "@id": "https://www.mauriciodelamazabenignos.com/musica/sigilo-locus#album" }
    },

    {
      "@type": "MusicRecording",
      "@id": "https://www.mauriciodelamazabenignos.com/musica/post-punk#recording",
      "name": "Post-Punk",
      "description": "Pinche Punk y Dulce Sensación.",
      "url": "https://www.mauriciodelamazabenignos.com/musica/post-punk",
      "byArtist": { "@id": "https://www.mauriciodelamazabenignos.com/#person" }
    },

    {
      "@type": "MusicRecording",
      "@id": "https://www.mauriciodelamazabenignos.com/musica/quantum#recording",
      "name": "Quantum",
      "description": "Composición electrónica y diseño sonoro.",
      "url": "https://www.mauriciodelamazabenignos.com/musica/quantum",
      "byArtist": { "@id": "https://www.mauriciodelamazabenignos.com/#person" }
    },

    {
      "@type": "MusicRecording",
      "@id": "https://www.mauriciodelamazabenignos.com/musica/sonogramas#recording",
      "name": "Sonogramas",
      "description": "El método detrás de Erótica y Guerra.",
      "url": "https://www.mauriciodelamazabenignos.com/musica/sonogramas",
      "byArtist": { "@id": "https://www.mauriciodelamazabenignos.com/#person" }
    },

    {
      "@type": "MusicRecording",
      "@id": "https://www.mauriciodelamazabenignos.com/musica/pinceladas-mexicanas#recording",
      "name": "Pinceladas Mexicanas",
      "description": "Algunas obras nacen del lugar donde uno nació.",
      "url": "https://www.mauriciodelamazabenignos.com/musica/pinceladas-mexicanas",
      "byArtist": { "@id": "https://www.mauriciodelamazabenignos.com/#person" }
    },

    {
      "@type": "MusicRecording",
      "@id": "https://www.mauriciodelamazabenignos.com/musica/asia#recording",
      "name": "Asia",
      "description": "El mundo que un macedonio descubrió con Alejandro Magno.",
      "url": "https://www.mauriciodelamazabenignos.com/musica/asia",
      "byArtist": { "@id": "https://www.mauriciodelamazabenignos.com/#person" }
    },

    {
      "@type": "MusicRecording",
      "@id": "https://www.mauriciodelamazabenignos.com/musica/nacieron-los-perritos#recording",
      "name": "Nacieron los perritos",
      "description": "Una alegría que no necesitó ser fabricada.",
      "url": "https://www.mauriciodelamazabenignos.com/musica/nacieron-los-perritos",
      "byArtist": { "@id": "https://www.mauriciodelamazabenignos.com/#person" }
    },

    {
      "@type": "Article",
      "@id": "https://www.mauriciodelamazabenignos.com/revista/el-mundo-de-los-entes-eco#article",
      "headline": "El mundo de los entes-eco",
      "url": "https://www.mauriciodelamazabenignos.com/revista/el-mundo-de-los-entes-eco",
      "datePublished": "2026-08-03",
      "inLanguage": "es-MX",
      "author": { "@id": "https://www.mauriciodelamazabenignos.com/#person" },
      "publisher": { "@id": "https://www.mauriciodelamazabenignos.com/#organization-dlmcf" },
      "isPartOf": { "@id": "https://www.mauriciodelamazabenignos.com/#website" }
    },

    {
      "@type": "Article",
      "@id": "https://www.mauriciodelamazabenignos.com/revista/barreras-de-entrada#article",
      "headline": "Barreras de entrada",
      "url": "https://www.mauriciodelamazabenignos.com/revista/barreras-de-entrada",
      "datePublished": "2026-07-31",
      "inLanguage": "es-MX",
      "author": { "@id": "https://www.mauriciodelamazabenignos.com/#person" },
      "publisher": { "@id": "https://www.mauriciodelamazabenignos.com/#organization-dlmcf" },
      "isPartOf": { "@id": "https://www.mauriciodelamazabenignos.com/#website" }
    },

    {
      "@type": "Article",
      "@id": "https://www.mauriciodelamazabenignos.com/revista/del-enjambre-y-la-sed#article",
      "headline": "Del enjambre y la sed",
      "url": "https://www.mauriciodelamazabenignos.com/revista/del-enjambre-y-la-sed",
      "datePublished": "2026-07-21",
      "inLanguage": "es-MX",
      "author": { "@id": "https://www.mauriciodelamazabenignos.com/#person" },
      "publisher": { "@id": "https://www.mauriciodelamazabenignos.com/#organization-dlmcf" },
      "isPartOf": { "@id": "https://www.mauriciodelamazabenignos.com/#website" }
    },

    {
      "@type": "Event",
      "@id": "https://wcff.org/#event-2026",
      "name": "Wildlife Conservation Film Festival 2026",
      "url": "https://wcff.org",
      "organizer": { "@id": "https://www.mauriciodelamazabenignos.com/#organization-wcff" },
      "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
      "startDate": "2026-09-18",
      "endDate": "2026-09-20",
      "location": {
        "@type": "Place",
        "name": "Elite Cinemas",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Monterrey",
          "addressRegion": "Nuevo León",
          "addressCountry": "MX"
        }
      }
    },

    {
      "@type": "Organization",
      "@id": "https://www.youtube.com/@AventurTitasRR#organization",
      "name": "AventurTitasRR",
      "description": "Canal de YouTube enfocado en naturaleza y exploración familiar."
    },

    {
      "@type": "VideoObject",
      "@id": "https://youtu.be/MtvDLkDufCg#video",
      "name": "¿Puede una película ayudar a la naturaleza? | Entrevista con Mauricio de la Maza-Benignos",
      "description": "Entrevista con Mauricio de la Maza-Benignos, director del Wildlife Conservation Film Festival (WCFF) en México, sobre el poder del cine como herramienta para inspirar la conservación de la naturaleza.",
      "uploadDate": "2026-08-05",
      "duration": "PT26M40S",
      "url": "https://youtu.be/MtvDLkDufCg",
      "embedUrl": "https://www.youtube.com/embed/MtvDLkDufCg",
      "inLanguage": "es-MX",
      "publisher": { "@id": "https://www.youtube.com/@AventurTitasRR#organization" },
      "creator": { "@id": "https://www.youtube.com/@AventurTitasRR#organization" },
      "about": [
        { "@id": "https://www.mauriciodelamazabenignos.com/#person" },
        { "@id": "https://www.mauriciodelamazabenignos.com/#organization-wcff" }
      ]
    },

    {
      "@type": "WebPage",
      "@id": "https://www.mauriciodelamazabenignos.com/#webpage-home",
      "url": "https://www.mauriciodelamazabenignos.com/",
      "name": "Mauricio de la Maza Benignos",
      "isPartOf": { "@id": "https://www.mauriciodelamazabenignos.com/#website" },
      "about": { "@id": "https://www.mauriciodelamazabenignos.com/#person" },
      "inLanguage": "es-MX"
    }

  ]
}`,
          }}
        />
      </head>
      <body className={cn('antialiased', montserrat.variable, playfair.variable)}>
        {/* Google Analytics (GA4) */}
        <Script
          id="ga4-src"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {/* End Google Analytics */}
        {/* Meta Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height={1}
            width={1}
            style={{ display: 'none' }}
            alt=""
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
        {/* End Meta Pixel */}
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
