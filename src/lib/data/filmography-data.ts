import type { Film } from '../types';
import { featuredMovies } from './about-data';

const featureSlugs: Record<string, { slug: string; footerName: string }> = {
  'cora-2024': { slug: 'cora', footerName: 'Cora' },
  'dialogos-2023': { slug: 'dialogos-de-la-muerte', footerName: 'Diálogos de la muerte' },
  'zapato-2025': { slug: 'el-zapato', footerName: 'El Zapato' },
  'makhaira-2026': { slug: 'el-gran-makhaira', footerName: 'El Gran Makhaira' },
  'bonito-2024': { slug: 'el-bonito', footerName: 'El Bonito' },
};

const features: Film[] = featuredMovies.map((movie) => ({
  ...movie,
  ...featureSlugs[movie.id],
}));

const documentaries: Film[] = [
  {
    id: 'ad-memoriam-2020',
    slug: 'ad-memoriam-rei-perpetuam',
    footerName: 'Ad memoriam rei perpetuam',
    title: 'Ad memoriam rei perpetuam: pastizales mexicanos en vía de extinción',
    year: '2020',
    genre: 'Documental',
    genreEn: 'Documentary',
    format: '',
    synopsis:
      'La pérdida del agua, los ecosistemas y la biodiversidad en los pastizales del Desierto Chihuahuense, y la compleja relación histórica entre este bioma y el desarrollo humano que lo empuja a su extinción.',
    synopsisEn:
      'The loss of water, ecosystems and biodiversity in the grasslands of the Chihuahuan Desert, and the complex historical relationship between this biome and the human development pushing it toward extinction.',
    credits: [
      { roleEs: 'Producción y dirección', roleEn: 'Produced and directed by', value: 'Mauricio De la Maza-Benignos' },
      { roleEs: 'Voz', roleEn: 'Voice', value: 'Claudia Luna Fuentes' },
    ],
    awards: '',
    festivalsHeadingEs: 'Festivales',
    festivalsHeadingEn: 'Festivals',
    festivalsEs: [
      'Wildlife Conservation Film Festival, Nueva York, EE. UU. (selección oficial, edición 2020)',
      'SUNCINE Environmental Film Festival, Barcelona, España (3 de noviembre de 2021)',
    ],
    festivalsEn: [
      'Wildlife Conservation Film Festival, New York, USA (Official Selection, 2020 edition)',
      'SUNCINE Environmental Film Festival, Barcelona, Spain (November 3, 2021)',
    ],
    noteEs:
      'La relación del autor con el WCFF comenzó a raíz de esta selección; se incorporó después a su consejo asesor y, más tarde, a la dirección del festival.',
    noteEn:
      "The author's relationship with WCFF began as a result of this selection; he later joined its Board of Advisors and, subsequently, the festival's leadership.",
    streaming: '',
    website: '',
    imdb: '',
    poster: '',
    youtubeId: 'djeW8vmA_L4',
  },
  {
    id: 'cuatro-cienegas-2021',
    slug: 'cuatro-cienegas-tragedia-de-los-comunes',
    footerName: 'Cuatro Ciénegas y la "Tragedia de los comunes"',
    title: 'Cuatro Ciénegas y la "Tragedia de los comunes"',
    year: '2021',
    genre: 'Cortometraje documental',
    genreEn: 'Short documentary',
    format: '14 min',
    formatEn: '14 min',
    synopsis: '',
    credits: [
      { roleEs: 'Dirección', roleEn: 'Directed by', value: 'Mauricio De la Maza-Benignos' },
      { roleEs: 'Guion', roleEn: 'Screenplay', value: 'Alejandra Salinas y Mauricio De la Maza' },
      { roleEs: 'Producción', roleEn: 'Production', value: 'De la Maza Consulting and Films' },
      { roleEs: 'Narración', roleEn: 'Narration', value: 'Maraly Franco' },
      { roleEs: 'Videografía', roleEn: 'Videography', value: 'Mauricio De la Maza y David Jaramillo' },
      { roleEs: 'Música', roleEn: 'Music', value: 'Daniel Rodríguez Muñoz' },
    ],
    awards: '',
    festivalsHeadingEs: 'Premios y selecciones',
    festivalsHeadingEn: 'Awards and selections',
    festivalsEs: [
      'Ganador, Wildlife Conservation Film Festival, Nueva York, EE. UU. (2021)',
      'Ganador, Docs Without Borders Film Festival, Rehoboth Beach, EE. UU. (2022)',
      'Selección oficial, FIIN, Vila Real, Portugal (2021)',
      'Cuartofinalista, Neum Underwater Film Festival, Bosnia y Herzegovina (2021)',
    ],
    festivalsEn: [
      'Winner, Wildlife Conservation Film Festival, New York, USA (2021)',
      'Winner, Docs Without Borders Film Festival, Rehoboth Beach, USA (2022)',
      'Official Selection, FIIN, Vila Real, Portugal (2021)',
      'Quarterfinalist, Neum Underwater Film Festival, Bosnia and Herzegovina (2021)',
    ],
    streaming: '',
    website: '',
    imdb: '',
    poster: '',
    youtubeId: 'xgODMrbSUjs',
    review: {
      href: '/revista/critica-cuatro-cienegas',
      labelEs: 'Leer la reseña en la revista',
      labelEn: 'Read the review in the magazine',
    },
  },
  {
    id: 'voz-del-silencio-2021',
    slug: 'la-voz-del-silencio',
    footerName: 'La voz del silencio',
    title: 'La voz del silencio',
    year: '2021',
    yearNoteEs: 'Rodada en 2017.',
    yearNoteEn: 'Filmed in 2017.',
    genre: 'Cortometraje documental',
    genreEn: 'Short documentary',
    format: '13 min',
    formatEn: '13 min',
    synopsis:
      'Documental de naturaleza inspirado en el spaghetti western, sobre la Zona del Silencio, en el Bolsón de Mapimí: sus paisajes, su riqueza faunística y sociocultural, sus leyendas de visitantes de otros mundos y la caída, en julio de 1970, del cohete de prueba Athena con contenedores de cobalto 57.',
    synopsisEn:
      'A nature documentary inspired by the spaghetti western, set in the Zone of Silence in the Bolsón de Mapimí: its landscapes, its faunal and sociocultural richness, its legends of visitors from other worlds, and the July 1970 crash of the Athena test rocket carrying cobalt-57 containers.',
    credits: [
      { roleEs: 'Producción y dirección', roleEn: 'Produced and directed by', value: 'Mauricio De la Maza-Benignos' },
    ],
    awards: '',
    festivalsHeadingEs: 'Festivales',
    festivalsHeadingEn: 'Festivals',
    festivalsEs: [
      'Selección oficial, Wildlife Conservation Film Festival 2024 (Naples, Florida, EE. UU.). Exhibida fuera de competencia a petición del autor, por formar parte del consejo del festival.',
    ],
    festivalsEn: [
      "Official Selection, Wildlife Conservation Film Festival 2024 (Naples, Florida, USA). Screened out of competition at the author's request, as a member of the festival's board.",
    ],
    streaming: '',
    website: '',
    imdb: '',
    poster: '',
    youtubeId: 'fdrx88MxsTA',
  },
];

export const filmography: Film[] = [...features, ...documentaries];
