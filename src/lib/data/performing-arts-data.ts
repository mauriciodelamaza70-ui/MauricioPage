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
    title: 'MAKTUB',
    subtitle: 'TEATRO, MÚSICA Y DANZA · Música original y partituras de movimiento',
    description:
      'Diecisiete piezas y casi una hora de música original, del Egipto de Isis, Osiris y Seth al camino de los pueblos rom. Texto de Jaime Palacios.',
    ctaLabel: 'Ver la obra',
    url: 'https://maktub.mauriciodelamazabenignos.com',
    image: {
      src: '/images/maktub-horus.png',
      alt: 'Estatuilla de bronce de Horus en forma de halcón con la doble corona, sobre fondo oscuro',
    },
  },
];
