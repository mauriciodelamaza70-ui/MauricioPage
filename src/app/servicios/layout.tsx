const SITE = 'https://www.mauriciodelamazabenignos.com';
const CHANNEL_ID = 'https://www.youtube.com/@AventurTitasRR#organization';

const wcffJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Event',
      '@id': 'https://wcff.org/#event-2026',
      name: 'Wildlife Conservation Film Festival 2026',
      description:
        'Edición 2026 del Wildlife Conservation Film Festival (WCFF), festival internacional de cine de naturaleza y conservación, con funciones presenciales en Monterrey, Nuevo León, México.',
      image: [`${SITE}/images/Wildligeconservation.png`],
      url: 'https://wcff.org',
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      organizer: { '@id': `${SITE}/#organization-wcff` },
      startDate: '2026-09-18',
      endDate: '2026-09-20',
      location: {
        '@type': 'Place',
        name: 'Elite Cinemas',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Monterrey',
          addressRegion: 'Nuevo León',
          addressCountry: 'MX',
        },
      },
    },
    {
      '@type': 'Organization',
      '@id': CHANNEL_ID,
      name: 'AventurTitasRR',
      description: 'Canal de YouTube enfocado en naturaleza y exploración familiar.',
    },
    {
      '@type': 'VideoObject',
      '@id': 'https://youtu.be/MtvDLkDufCg#video',
      name: '¿Puede una película ayudar a la naturaleza? | Entrevista con Mauricio de la Maza-Benignos',
      description:
        'Entrevista con Mauricio de la Maza-Benignos, director del Wildlife Conservation Film Festival (WCFF) en México, sobre el poder del cine como herramienta para inspirar la conservación de la naturaleza.',
      thumbnailUrl: ['https://i.ytimg.com/vi/MtvDLkDufCg/maxresdefault.jpg'],
      uploadDate: '2026-08-05T00:00:00-06:00',
      duration: 'PT26M40S',
      url: 'https://youtu.be/MtvDLkDufCg',
      contentUrl: 'https://youtu.be/MtvDLkDufCg',
      embedUrl: 'https://www.youtube.com/embed/MtvDLkDufCg',
      inLanguage: 'es-MX',
      publisher: { '@id': CHANNEL_ID },
      creator: { '@id': CHANNEL_ID },
      author: { '@id': CHANNEL_ID },
      about: [{ '@id': `${SITE}/#person` }, { '@id': `${SITE}/#organization-wcff` }],
    },
  ],
};

export default function ServiciosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(wcffJsonLd) }}
      />
      {children}
    </>
  );
}
