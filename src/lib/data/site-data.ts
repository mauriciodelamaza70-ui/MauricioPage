import type { NavLink } from '../types';

export const siteConfig = {
  name: 'Mauricio de la Maza Benignos',
  url: 'https://www.mauriciodelamazabenignos.com',
  ogImage: 'https://www.mauriciodelamazabenignos.com/images/Mauricio.png',
  description: 'Producción audiovisual y consultoría ambiental por Mauricio De la Maza-Benignos.',
  links: {
    twitter: 'https://twitter.com/example',
    github: 'https://github.com/example/terravision',
  },
};

export const navLinks: NavLink[] = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/musica', label: 'Música' },
  { href: '/libros', label: 'Libros' },
  { href: '/revista', label: 'Revista' },
  { href: '/prensa', label: 'Prensa' },
  { href: '/galerias', label: 'Galerías' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/contacto', label: 'Contacto' },
];
