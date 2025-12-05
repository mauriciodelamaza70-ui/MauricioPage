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
  summary: string;
  details: {
    title: string;
    description: string;
    items: string[];
  }[];
};

export type Project = {
  id: string;
  title: string;
  imageId: string;
  category: string;
};

export type Post = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  imageId: string;
  category: string;
};

export type GalleryImage = {
  id: string;
  title: string;
  category: 'Naturaleza' | 'Proyectos' | 'Eventos' | 'Behind the Scenes' | 'Paisajes';
  imageId: string;
};

export type Achievement = {
  year: number;
  title: string;
  organization: string;
};
