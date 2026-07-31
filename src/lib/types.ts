export type NavLink = {
  href: string;
  label: string;
};

export type SocialLink = {
  name: string;
  href: string;
  icon: React.ElementType;
};

export type Service = {
  title: string;
  imageId: string;
  summary: string;
  details: {
    title: string;
    description: string;
    items: string[];
  }[];
};

export type ProductionLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  url?: string;
};

export type Project = {
  id: string;
  title: string;
  imageId: string;
  category: string;
};

export type Post = {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  imageId: string;
  /** Imagen del hero del artículo; si no se define, se usa imageId. */
  heroImageId?: string;
  /** Autor mostrado en el byline; si no se define, se usa "De la Maza Team". */
  author?: string;
  category: 'Artículos' | 'Colaboradores' | 'Entrevistas' | 'Noticias';
};

export type GalleryImage = {
  id: string;
  title: string;
  category: 'Naturaleza' | 'Proyectos' | 'Eventos' | 'Behind the Scenes' | 'Paisajes';
  imageId: string;
};

export type Video = {
  id: string;
  title: string;
  type: 'Mediometraje' | 'Cortometraje';
  youtubeId: string;
  thumbnailId: string;
};

export type Achievement = {
  year: number;
  title: string;
  organization: string;
};

export type TimelineEvent = {
  year: string;
  description: string;
};

export type Collaborator = {
  name: string;
  title: string;
  bio: string;
  image: string | null;
};

export type MusicCategory = {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  objectPosition?: string;
};

export type Movie = {
  id: string;
  title: string;
  year: string;
  genre: string;
  format: string;
  synopsis: string;
  awards: string;
  streaming: string;
  website: string;
  imdb: string;
  poster: string;
  subtitle?: string;
};

export type PressCategory = 'Cine' | 'Conservación' | 'Trayectoria';

export type PressArticle = {
  fuente: string;
  titulo: string;
  tipo: string;
  categoria: PressCategory;
  anio: number | null;
  url: string;
  /** Marca las 3 piezas destacadas fijas que se muestran en la parte superior. */
  destacado?: boolean;
  /** Imagen/thumbnail para las piezas destacadas. */
  imagen?: string;
  /** La imagen es una portada de revista vertical: se muestra completa sin recortar. */
  esPortada?: boolean;
  /** Galería de páginas (portada + interiores) que se despliega al hacer clic en la tarjeta destacada. */
  galeria?: string[];
  /** Pertenece a la cronología de Cuatro Ciénegas (2018-2023). */
  cuatroCienegas?: boolean;
};
