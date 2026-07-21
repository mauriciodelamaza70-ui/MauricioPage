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
