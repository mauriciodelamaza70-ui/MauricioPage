import type { Film } from '../types';
import { featuredMovies } from './about-data';

const featureSlugs: Record<string, { slug: string; footerName: string }> = {
  'cora-2024': { slug: 'cora', footerName: 'Cora' },
  'dialogos-2023': { slug: 'dialogos-de-la-muerte', footerName: 'Diálogos de la muerte' },
  'zapato-2025': { slug: 'el-zapato', footerName: 'El Zapato' },
  'makhaira-2026': { slug: 'el-gran-makhaira', footerName: 'El Gran Makhaira' },
  'bonito-2024': { slug: 'el-bonito', footerName: 'El Bonito' },
};

const featureOverrides: Record<string, Partial<Film>> = {
  'zapato-2025': {
    synopsis:
      'Un grupo de amigos, con marcadas diferencias entre sí, se reúne para convivir durante varios días. Sus planes se frustran cuando un elemento externo desata el rechazo a lo diferente, llevado al extremo.',
    synopsisEn:
      'A group of friends, sharply different from one another, gather to spend a few days together. Their plans fall apart when an outside element unleashes a rejection of difference, taken to the extreme.',
    reviewsIntroEs: 'Una propuesta original e ingeniosa que desafía las convenciones del género.',
    reviewsIntroEn: 'An original, clever film that defies genre conventions.',
    reviews: [
      {
        quote: 'Every once in a while, a film comes along that sort of knocks me on my ass…',
        source: 'Brian Lutes',
      },
      {
        quote: 'Original, clever, and a true celebration of diversity',
        source: 'Dr. Daniel Widdowson, Salt House Creative',
      },
    ],
  },
};

const features: Film[] = featuredMovies.map((movie) => ({
  ...movie,
  ...featureSlugs[movie.id],
  ...featureOverrides[movie.id],
}));

const documentaries: Film[] = [
  {
    id: 'ad-memoriam-2020',
    slug: 'ad-memoriam-rei-perpetuam',
    footerName: 'Ad memoriam rei perpetuam',
    title: 'Ad memoriam rei perpetuam: pastizales mexicanos en vía de extinción',
    year: '2020',
    genre: 'Largometraje documental',
    genreEn: 'Feature documentary',
    format: '93 min',
    synopsis:
      'La pérdida del agua, los ecosistemas y la biodiversidad en los pastizales del Desierto Chihuahuense, y la compleja relación histórica entre este bioma y el desarrollo humano que lo empuja a su extinción.',
    synopsisEn:
      'The loss of water, ecosystems and biodiversity in the grasslands of the Chihuahuan Desert, and the complex historical relationship between this biome and the human development pushing it toward extinction.',
    credits: [
      { roleEs: 'Dirección', roleEn: 'Directed by', value: 'Mauricio De la Maza-Benignos' },
      { roleEs: 'Guion', roleEn: 'Screenplay', value: 'Claudia Luna Fuentes y Mauricio De la Maza-Benignos' },
      { roleEs: 'Producción', roleEn: 'Production', value: 'De la Maza Films' },
      { roleEs: 'Voz', roleEn: 'Voice', value: 'Claudia Luna Fuentes' },
      { roleEs: 'Entrevistas', roleEn: 'Interviews', value: 'Andrea Ayala Luna' },
    ],
    awards: '',
    festivalsHeadingEs: 'Festivales',
    festivalsHeadingEn: 'Festivals',
    festivalsEs: [
      'Selección oficial, Wildlife Conservation Film Festival 2020; proyectada en el Cinema Village, Nueva York, EE. UU., el 16 de octubre de 2021 (estreno en EE. UU.).',
      'Selección oficial, SUNCINE Festival Internacional de Cine del Medio Ambiente 2021, Sección Especial México-España (Barcelona, España).',
    ],
    festivalsEn: [
      'Official Selection, Wildlife Conservation Film Festival 2020; screened at Cinema Village, New York, USA, on October 16, 2021 (US premiere).',
      'Official Selection, SUNCINE International Environmental Film Festival 2021, Special Section Mexico-Spain (Barcelona, Spain).',
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
    id: 'el-ciudadano-2021',
    slug: 'el-ciudadano',
    footerName: 'El ciudadano',
    title: 'Apocalipsis de Esdras (o para fines prácticos), El ciudadano',
    titleEn: 'Apocalypse of Ezra (or, for All Practical Purposes), the Citizen',
    year: '2021',
    genre: 'Cortometraje de ficción • Noir urbano',
    genreEn: 'Short fiction film • Urban noir',
    format: '30 min',
    formatEn: '30 min',
    synopsis:
      'Un ciudadano desprevenido y no muy escrupuloso acepta verse con su joven amante por la noche. De camino a la cita, después de asistir a un espectáculo de danza contemporánea en el centro de la ciudad, se da cuenta de que olvidó dónde estacionó su auto. Mientras lo busca, se aleja de la zona segura de la ciudad. Muy pronto, la oscuridad de la noche lo envuelve y la ciudad empieza a transformarse, a medida que el distraído ciudadano se adentra en la zona de tolerancia. Pronto descubre que le robaron el auto y queda frente a frente con el ladrón.',
    synopsisEn:
      'An unsuspecting and not-very-scrupulous citizen agrees to meet his young lover in the evening. On his way to the date, after attending a contemporary dance performance in the city center, he realizes that he forgot where he had parked his car. As he searches for it, he begins to move away from the safe area of the city. Very soon, the darkness of the night envelops him, and the city begins to transform, as the absent-minded citizen enters the zone of tolerance. Soon, he realizes that his car was stolen and comes face-to-face with the thief.',
    credits: [
      {
        roleEs: 'Dirección, guion, producción, fotografía y edición',
        roleEn: 'Directed, written, produced, photographed and edited by',
        value: 'Mauricio De la Maza-Benignos',
      },
      { roleEs: 'Producción', roleEn: 'Production', value: 'De la Maza Consulting and Films' },
      {
        roleEs: 'Reparto',
        roleEn: 'Cast',
        value: 'Mauricio De la Maza-Benignos (El ciudadano), Jennifer López (Jefa del narco)',
      },
    ],
    awards: '',
    festivalsHeadingEs: 'Reconocimientos y premios',
    festivalsHeadingEn: 'Awards and Recognition',
    festivalsEs: [
      'Award of Merit, categorías Experimental y Art-house Film, Depth of Field International Film Festival Competition, EE. UU. (2023)',
      'Ganador, Best Shorts Competition, La Jolla, California, EE. UU. (2021)',
    ],
    festivalsEn: [
      'Award of Merit, Experimental and Art-house Film categories, Depth of Field International Film Festival Competition, USA (2023)',
      'Winner, Best Shorts Competition, La Jolla, California, USA (2021)',
    ],
    streaming: '',
    website: '',
    imdb: '',
    poster: '',
    youtubeId: 'UQS_1eDJoPE',
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

const displayOrder = [
  'el-gran-makhaira',
  'el-zapato',
  'cora',
  'el-bonito',
  'dialogos-de-la-muerte',
  'el-ciudadano',
  'cuatro-cienegas-tragedia-de-los-comunes',
  'la-voz-del-silencio',
  'ad-memoriam-rei-perpetuam',
];

export const filmography: Film[] = [...features, ...documentaries].sort(
  (a, b) => displayOrder.indexOf(a.slug) - displayOrder.indexOf(b.slug),
);
