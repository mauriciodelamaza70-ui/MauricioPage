import type { GalleryImage, Video, Achievement, TimelineEvent, Collaborator } from '../types';

export const galleryImages: GalleryImage[] = [
  { id: 'gal-1', title: 'Río en cañón', category: 'Paisajes', imageId: 'gallery-new-1' },
  { id: 'gal-2', title: 'Hombre en la naturaleza', category: 'Behind the Scenes', imageId: 'gallery-new-2' },
  { id: 'gal-3', title: 'Paisaje montañoso', category: 'Paisajes', imageId: 'gallery-new-3' },
  { id: 'gal-4', title: 'Pez Xenotoca Eiseni', category: 'Naturaleza', imageId: 'gallery-new-4' },
  { id: 'gal-5', title: 'Filmando en la naturaleza', category: 'Behind the Scenes', imageId: 'gallery-new-5' },
  { id: 'gal-6', title: 'Pez en el agua', category: 'Naturaleza', imageId: 'gallery-new-6' },
  { id: 'gal-7', title: 'Cámara en la naturaleza', category: 'Behind the Scenes', imageId: 'gallery-new-7' },
  { id: 'gal-8', title: 'Conversación en evento', category: 'Eventos', imageId: 'gallery-new-8' },
  { id: 'gal-9', title: 'Equipo de filmación', category: 'Proyectos', imageId: 'gallery-new-9' },
  { id: 'gal-10', title: 'Hombre con cámara', category: 'Behind the Scenes', imageId: 'gallery-new-10' },
  { id: 'gal-11', title: 'Conferencia', category: 'Eventos', imageId: 'gallery-new-11' },
  { id: 'gal-12', title: 'Paisaje de Arramberri', category: 'Paisajes', imageId: 'gallery-new-12' },
  { id: 'gal-13', title: 'Paisaje de Cuatro Ciénegas', category: 'Paisajes', imageId: 'gallery-new-13' },
  { id: 'gal-14', title: 'Paisaje de Perú', category: 'Paisajes', imageId: 'gallery-new-14' },
];

export const videoGallery: Video[] = [
    { id: 'vid-1', title: 'En busca del águila elegante', type: 'Mediometraje', youtubeId: 'og-QOYsTTcE', thumbnailId: 'video-thumb-1'},
    { id: 'vid-2', title: 'La cotorra serrana oriental', type: 'Cortometraje', youtubeId: 'MqNwizA7wc0', thumbnailId: 'video-thumb-2'},
    { id: 'vid-3', title: 'Ecología del fuego', type: 'Cortometraje', youtubeId: 'M81DLdDI1HQ', thumbnailId: 'video-thumb-3'},
    { id: 'vid-4', title: 'Historias del septentrión', type: 'Mediometraje', youtubeId: 'HE7A1PyqPZo', thumbnailId: 'video-thumb-4'},
    { id: 'vid-5', title: 'Los murciélagos de la cueva de la boca', type: 'Cortometraje', youtubeId: 'suiOUN8zl18', thumbnailId: 'video-thumb-5'},
    { id: 'vid-6', title: 'Praderas del Tokio', type: 'Mediometraje', youtubeId: 'I7StbzrZAlU', thumbnailId: 'video-thumb-6'},
];

export const achievements: Achievement[] = [
  { year: 2021, title: 'Doctorado Honoris Causa', organization: 'Claustro Doctoral Iberoamericano' },
  { year: 2020, title: 'Premio a la Conservación', organization: 'Programa Internacional y Fronterizo del Departamento de Caza y Pesca de Arizona' },
  { year: 2015, title: 'Premio de Investigación UANL', organization: 'Universidad Autónoma de Nuevo León' },
  { year: 2014, title: 'Premio "Dr. José Álvarez del Villar"', organization: 'Sociedad Mexicana de Ictiología' },
  { year: 1994, title: 'Medalla "Mejores estudiantes de México"', organization: 'CONACYT e Instituto Mexicano de Cultura' },
];

export const timelineEvents: TimelineEvent[] = [
  { year: '1994', description: 'Reconocido como uno de los "Mejores Estudiantes de México".' },
  { year: '2005', description: 'Se une al Fondo Mundial para la Naturaleza (WWF).' },
  { year: '2011', description: 'Nombrado Director General de Pronatura Noreste, A.C.' },
  { year: '2014', description: 'Recibe el premio a la mejor tesis doctoral en ictiología.' },
  { year: '2015', description: 'Gana el Premio de Investigación UANL en Ciencias Naturales.' },
  { year: '2019', description: 'Lidera la defensa de El Llano de la Soledad.' },
  { year: '2020', description: 'Recibe el Premio a la Conservación de AZGFD.' },
  { year: '2021', description: 'Recibe el Doctorado Honoris Causa por su trayectoria.' },
  { year: '2022', description: 'Produce el documental "Ad memoriam rei perpetuam".' },
];

export const collaborators: Collaborator[] = [
  {
    name: 'José Pablo Acevedo',
    title: 'Cineasta y docente',
    bio: 'Ha publicado su trabajo de crítica en diversos medios como Doble Rodada, Vocanova, Correspondencias y el Festival de cine Transcinema.',
    image: '/images/jose.jpg'
  },
  {
    name: 'David Jaramillo',
    title: 'Realizador Audiovisual',
    bio: 'Realizó su ópera prima titulada: “Cuatro Ciénegas”, exhibida en la FIL de Guadalajara, en el FICG33 y ECOZINE, Zaragoza España, 2019.',
    image: '/images/david.jpeg'
  },
  {
    name: 'Claudia Luna Fuentes',
    title: 'Comunicóloga y escritora',
    bio: 'Comunicóloga, maestra en Historia de la Sociedad Contemporánea y directora de Divulgación Científica en el Museo del Desierto.',
    image: '/images/claudia.jpeg'
  },
  {
    name: 'Kenia Álvarez Rentería',
    title: 'Abogada y consultora',
    bio: 'Licenciada en Derecho con mención especial y Maestra en Derecho por la Universidad Autónoma de Chihuahua.',
    image: '/images/kenia.png'
  }
];
