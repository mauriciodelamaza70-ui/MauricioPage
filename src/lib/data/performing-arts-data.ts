export type StageWork = {
  id: string;
  title: string;
  subtitle: string;
  subtitleEn?: string;
  description: string;
  descriptionEn?: string;
  ctaLabel: string;
  ctaLabelEn?: string;
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
  {
    id: 'teatro-araiza',
    title: 'Teatro de Xavier Araiza',
    subtitle: 'CINE Y TEATRO · Registros cinematográficos',
    subtitleEn: 'FILM AND THEATER · Cinematic recordings',
    description:
      'Tres obras de Xavier Araiza —Sade, Sartre y La loca del maniquí— llevadas al cine por Mauricio De la Maza-Benignos.',
    descriptionEn:
      'Three plays by Xavier Araiza —Sade, Sartre and La loca del maniquí— brought to film by Mauricio De la Maza-Benignos.',
    ctaLabel: 'Ver las obras',
    ctaLabelEn: 'View the works',
    url: '/artes-escenicas/teatro-araiza',
    image: {
      src: '/images/teatro-araiza/la-loca-del-maniqui.jpg',
      alt: 'Póster de La loca del maniquí',
    },
  },
];
