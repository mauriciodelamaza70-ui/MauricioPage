export type StageWork = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  url: string;
  image?: { src: string; alt: string };
};

export const stageWorks: StageWork[] = [
  {
    id: 'maktub',
    title: 'DROM',
    subtitle: 'TEATRO, MÚSICA Y DANZA · Música original y partituras de movimiento',
    description:
      'Diecisiete piezas y casi una hora de música original que siguen el camino de los pueblos rom, de Asia Central y Egipto hasta Andalucía.',
    ctaLabel: 'Ver la obra',
    url: 'https://drom.mauriciodelamazabenignos.com',
    image: {
      src: '/images/maktub-horus.png',
      alt: 'Estatuilla de bronce de Horus en forma de halcón con la doble corona, sobre fondo oscuro',
    },
  },
];
