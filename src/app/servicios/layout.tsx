const SITE = 'https://www.mauriciodelamazabenignos.com';

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
