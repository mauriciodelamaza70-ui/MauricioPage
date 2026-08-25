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

export type BookCategory = {
  slug: string;
  title: string;
  coverImage: string;
  href: string;
  /** Descripción corta opcional mostrada en la tarjeta. */
  description?: string;
  /** Icono opcional (componente lucide-react) mostrado en la tarjeta. */
  icon?: React.ElementType;
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

/** Metadata de un post sin el HTML pesado de `content`. Se usa en listados (revista, home). */
export type PostMeta = Omit<Post, 'content'>;

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
  imageAlt?: string;
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
  /** Descripción documental breve, se muestra bajo el título en las tarjetas destacadas (acotada a 3 líneas). */
  descripcion?: string;
  /** La imagen es una portada de revista vertical: se muestra completa sin recortar. */
  esPortada?: boolean;
  /** Galería de páginas (portada + interiores) que se despliega al hacer clic en la tarjeta destacada. */
  galeria?: string[];
  /** Pertenece a la cronología de Cuatro Ciénegas (2018-2023). */
  cuatroCienegas?: boolean;
  /** Si existe, la tarjeta navega a esta ruta interna en vez de al enlace externo. */
  rutaInterna?: string;
  /** Ruta local a un PDF alojado en el sitio. Si existe, la tarjeta muestra acciones "Leer en línea" y "Descargar PDF" en vez de un enlace externo. */
  pdfLocal?: string;
};
