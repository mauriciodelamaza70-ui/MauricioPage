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
    subtitle: 'Obra escénica · Música original y partituras de movimiento',
    description:
      'Diecisiete piezas y casi una hora de música original, del Egipto de Isis, Osiris y Seth al camino de los pueblos rom. Texto de Jaime Palacios.',
    ctaLabel: 'Ver la obra',
    url: 'https://maktub.mauriciodelamazabenignos.com',
  },
];
