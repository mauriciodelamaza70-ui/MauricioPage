import type { NavLink, SocialLink, Service, Project, Post, GalleryImage, Achievement, TimelineEvent, Video } from './types';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { TheatreIcon, VimeoIcon, WhatsAppIcon } from '@/components/icons';

export const siteConfig = {
  name: 'Terra Vision',
  url: 'https://terravision.example.com',
  ogImage: 'https://terravision.example.com/og.jpg',
  description: 'Producción audiovisual y consultoría ambiental por Mauricio De la Maza-Benignos.',
  links: {
    twitter: 'https://twitter.com/example',
    github: 'https://github.com/example/terravision',
  },
};

export const navLinks: NavLink[] = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/galerias', label: 'Galerías' },
  { href: '/revista', label: 'Revista' },
  { href: '/contacto', label: 'Contacto' },
];

export const socialLinks: SocialLink[] = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Vimeo', href: '#', icon: VimeoIcon },
    { name: 'WhatsApp', href: 'https://wa.me/5218110165108', icon: WhatsAppIcon },
];

export const biography = {
  short: "Productor audiovisual, consultor ambiental y cineasta.",
  full: "Mauricio de la Maza se graduó summa cum laude con un Doctorado en Biología y Desarrollo Sustentable en la UANL; cuenta con una Maestría en administración de Empresas de la Universidad de Lancaster, Reino Unido, con programa de intercambio con ESC, Lyon, Francia, donde se especializó en Planificación Estratégica; es Ingeniero Agrónomo Zootecnista en Ingeniería Agrícola y Zootecnia del Tecnológico de Monterrey; además posee una licenciatura en Derecho con Mención Honorífica de Excelencia del TecMilenio y estudios de Maestría en Arte Cinematográfico y Multimedia en la Escuela Superior de Cine y Multimedia Ilumina."
};

export const services: Service[] = [
  {
    title: 'Producción Audiovisual',
    imageId: 'service-audiovisual',
    summary: 'Documentales, videos institucionales y contenido digital con enfoque en naturaleza y conservación.',
    details: [
        {
            title: "Producción de Contenido",
            description: "Creamos contenido audiovisual de alto impacto para diversas plataformas.",
            items: [
                "Documentales de naturaleza y conservación",
                "Videos institucionales y corporativos",
                "Proyectos especiales en colaboración con productoras como BBC Nature",
                "Largometrajes y cortometrajes documentales"
            ]
        }
    ]
  },
  {
    title: 'Fotografía',
    imageId: 'service-photography',
    summary: 'Capturamos la esencia de la naturaleza, eventos y proyectos con una visión artística y profesional.',
     details: [
        {
            title: "Servicios Fotográficos",
            description: "Cobertura fotográfica profesional para una variedad de necesidades.",
            items: [
                "Fotografía de naturaleza y vida silvestre",
                "Fotografía de eventos corporativos y conferencias",
                "Fotografía institucional y de producto",
                "Retratos profesionales y de equipo",
                "Cobertura de expediciones científicas y de aventura"
            ]
        }
    ]
  },
    {
    title: 'Cultura',
    imageId: 'service-culture',
    summary: 'Fomentamos la cultura ambiental a través de festivales, talleres y eventos educativos.',
    details: [
        {
            title: "Gestión y Educación Cultural",
            description: "Diseñamos y ejecutamos proyectos que fusionan cultura y medio ambiente.",
            items: [
                "Curaduría y organización de festivales de cine ambiental",
                "Talleres de cine de naturaleza y conservación para jóvenes y adultos",
                "Conferencias y charlas motivacionales sobre medio ambiente y cine",
                "Desarrollo de eventos culturales con enfoque ambiental para empresas e instituciones",
                "Proyectos educativos y de divulgación científica a través del arte"
            ]
        }
    ]
  },
  {
    title: 'Consultoría',
    imageId: 'service-consulting',
    summary: 'Asesoría experta en conservación, desarrollo sustentable y gestión de proyectos ambientales.',
    details: [
        {
            title: "Asesoría Ambiental Estratégica",
            description: "Ofrecemos soluciones expertas para los desafíos ambientales contemporáneos.",
            items: [
                "Consultoría en desarrollo sustentable y políticas públicas",
                "Asesoría en conservación de ecosistemas y biodiversidad",
                "Análisis legal y normativo en materia ambiental",
                "Planificación estratégica para organizaciones de la sociedad civil (ONGs)",
                "Evaluación de impacto ambiental y social de proyectos",
                "Gestión de proyectos de conservación y recaudación de fondos"
            ]
        }
    ]
  },
  {
    title: 'Contenido Digital',
    imageId: 'service-digital',
    summary: 'Creación y estrategia de contenido para plataformas digitales, maximizando el alcance y la interacción.',
    details: [
        {
            title: "Estrategias Digitales",
            description: "Desarrollamos y ejecutamos estrategias de contenido para el mundo digital.",
            items: [
                "Creación de contenido para redes sociales (cápsulas, reels, etc.)",
                "Gestión de campañas de comunicación digital",
                "Estrategia de posicionamiento de marca en línea",
                "Producción de podcasts y series web",
                "Marketing de contenidos con enfoque ambiental y social"
            ]
        }
    ]
  },
  {
    title: 'Video Editing',
    imageId: 'service-editing',
    summary: 'Post-producción profesional para dar vida a tus proyectos audiovisuales con las últimas tecnologías y un enfoque creativo.',
    details: [
        {
            title: "Post-Producción de Video",
            description: "Servicios completos de edición y post-producción para cine, TV y web.",
            items: [
                "Edición de video y montaje narrativo",
                "Corrección de color y etalonaje cinematográfico",
                "Diseño y mezcla de sonido profesional",
                "Creación de gráficos en movimiento (motion graphics) y efectos visuales (VFX) básicos",
                "Masterización y entrega para diversas plataformas (cine, broadcast, web)"
            ]
        }
    ]
  },
];

export const projects: Project[] = [
    { id: 'proj-1', title: 'Conservación del Lobo Mexicano', imageId: 'project-1', category: 'Proyectos' },
    { id: 'proj-2', title: 'Desierto Chihuahuense: Un Universo Oculto', imageId: 'project-2', category: 'Proyectos' },
    { id: 'proj-3', title: 'Festival de Cine PanterFest', imageId: 'project-3', category: 'Eventos' },
    { id: 'proj-4', title: 'Estrategia de Conservación Hídrica', imageId: 'project-4', category: 'Consultoría' },
];

export const posts: Post[] = [
    { id: 'post-1', title: 'El Arte de Filmar en el Silencio del Desierto', date: '15 de Julio, 2024', excerpt: 'Narra la experiencia y los desafíos de la producción de nuestro último documental en el Desierto de Samalayuca.', content: 'Contenido completo...', imageId: 'blog-1', category: 'Cine Ambiental' },
    { id: 'post-2', title: 'La Importancia de los Corredores Biológicos', date: '02 de Julio, 2024', excerpt: 'Un análisis sobre cómo la conectividad de los ecosistemas es vital para la supervivencia de especies como el jaguar.', content: 'Contenido completo...', imageId: 'blog-2', category: 'Conservación' },
    { id: 'post-3', title: 'Anuncio: Nuevo Proyecto Sobre Arrecifes Mexicanos', date: '20 de Junio, 2024', excerpt: 'Estamos emocionados de anunciar nuestra próxima gran producción, que nos llevará a las profundidades del Caribe Mexicano.', content: 'Contenido completo...', imageId: 'blog-3', category: 'Proyectos' },
    { id: 'post-4', title: 'Ganadores del PanterFest 2023', date: '10 de Junio, 2024', excerpt: 'Un resumen de las obras y cineastas galardonados en la última edición de nuestro festival de cine.', content: 'Contenido completo...', imageId: 'blog-4', category: 'Noticias' },
    { id: 'post-5', title: 'Guía Técnica: Cámaras y Lentes para Fotografía de Aves', date: '25 de Mayo, 2024', excerpt: 'Recomendaciones de equipo y técnicas para capturar la belleza de las aves en su hábitat natural.', content: 'Contenido completo...', imageId: 'blog-5', category: 'Artículos Técnicos' },
    { id: 'post-6', title: 'Reflexiones sobre 10 años en Pronatura Noreste', date: '15 de Mayo, 2024', excerpt: 'Una mirada retrospectiva a los logros, aprendizajes y desafíos durante una década de liderazgo en la conservación.', content: 'Contenido completo...', imageId: 'blog-6', category: 'Conservación' },
];

export const galleryImages: GalleryImage[] = [
  { id: 'gal-1', title: 'Río en el cañón', category: 'Naturaleza', imageId: 'gallery-new-1' },
  { id: 'gal-2', title: 'Hombre en la naturaleza', category: 'Naturaleza', imageId: 'gallery-new-2' },
  { id: 'gal-3', title: 'Paisaje montañoso', category: 'Paisajes', imageId: 'gallery-new-3' },
  { id: 'gal-4', title: 'Pez bajo el agua', category: 'Naturaleza', imageId: 'gallery-new-4' },
  { id: 'gal-5', title: 'Filmando en la naturaleza', category: 'Proyectos', imageId: 'gallery-new-5' },
  { id: 'gal-6', title: 'Pez en el agua', category: 'Naturaleza', imageId: 'gallery-new-6' },
  { id: 'gal-7', title: 'Cámara en la naturaleza', category: 'Proyectos', imageId: 'gallery-new-7' },
  { id: 'gal-8', title: 'Conversación en evento', category: 'Eventos', imageId: 'gallery-new-8' },
  { id: 'gal-9', title: 'Equipo filmando', category: 'Behind the Scenes', imageId: 'gallery-new-9' },
  { id: 'gal-10', title: 'Hombre con cámara', category: 'Behind the Scenes', imageId: 'gallery-new-10' },
  { id: 'gal-11', title: 'Conferencia', category: 'Eventos', imageId: 'gallery-new-11' },
  { id: 'gal-12', title: 'Paisaje de Arramberri', category: 'Paisajes', imageId: 'gallery-new-12' },
  { id: 'gal-13', title: 'Cuatro Ciénegas', category: 'Paisajes', imageId: 'gallery-new-13' },
  { id: 'gal-14', title: 'Paisaje de Perú', category: 'Paisajes', imageId: 'gallery-new-14' },
];

export const videoGallery: Video[] = [
  {
    id: 'vid-1',
    title: 'En busca del águila elegante',
    type: 'Mediometraje',
    youtubeId: 'og-QOYsTTcE',
    thumbnailId: 'video-thumb-1'
  },
  {
    id: 'vid-2',
    title: 'La cotorra serrana oriental',
    type: 'Cortometraje',
    youtubeId: 'MqNwizA7wc0',
    thumbnailId: 'video-thumb-2'
  },
  {
    id: 'vid-3',
    title: 'Ecología del fuego',
    type: 'Cortometraje',
    youtubeId: 'M81DLdDI1HQ',
    thumbnailId: 'video-thumb-3'
  },
  {
    id: 'vid-4',
    title: 'Historias del septentrión, la batalla del carrizal y el cachorrito carbonero',
    type: 'Cortometraje',
    youtubeId: 'HE7A1PyqPZo',
    thumbnailId: 'video-thumb-4'
  },
  {
    id: 'vid-5',
    title: 'Los murciélagos de la cueva de la boca',
    type: 'Cortometraje',
    youtubeId: 'suiOUN8zl18',
    thumbnailId: 'video-thumb-5'
  },
  {
    id: 'vid-6',
    title: 'Praderas del Tokio',
    type: 'Cortometraje',
    youtubeId: 'I7StbzrZAlU',
    thumbnailId: 'video-thumb-6'
  },
];

export const achievements: Achievement[] = [
    { year: 2020, title: 'Doctor Honoris Causa', organization: 'Universidad Autónoma de Nuevo León' },
    { year: 2020, title: 'International Conservation Award', organization: 'Arizona Game & Fish Commission' },
    { year: 2011, title: 'CEO / Director General', organization: 'Pronatura Noreste, A.C. (2011-2021)' },
    { year: 2005, title: 'Director del Programa Desierto Chihuahuense', organization: 'World Wildlife Fund (WWF)' },
];

export const history = {
    mission: "Destacar la importancia de la conservación ambiental a través del arte cinematográfico y la consultoría especializada, inspirando a la sociedad a reconectar con la naturaleza y a tomar acciones para su protección.",
    vision: "Ser un referente en la producción audiovisual con contenido ambiental y social en México y Latinoamérica, creando obras que trasciendan fronteras e impulsen un cambio positivo y duradero en nuestra relación con el planeta.",
    values: [
        { title: 'Conservación', description: 'Nuestro motor principal es la protección y el respeto por el mundo natural.' },
        { title: 'Creatividad', description: 'Buscamos formas innovadoras y artísticas para contar historias que importan.' },
        { title: 'Excelencia', description: 'Comprometidos con la más alta calidad técnica y narrativa en cada proyecto.' },
        { title: 'Compromiso Social', description: 'Creemos en el poder de nuestras historias para educar, inspirar y movilizar a la comunidad.' }
    ]
};

export const timelineEvents: TimelineEvent[] = [
  {
      year: '1994',
      description: 'Le otorgan el "Premio a los mejores estudiantes de México" por el Comité Nacional Permanente de los Mejores Estudiantes de México'
  },
  {
      year: '2014',
      description: 'Obtiene el primer lugar en el "Premio Dr. José Álvarez Del Villar" por su tesis doctoral, otorgado por la Sociedad Mexicana de Ictiología'
  },
  {
      year: '2015',
      description: 'Logra el Premio de Investigación UANL al mejor artículo académico en Ciencias Naturales'
  },
  {
      year: '2006 - 2011',
      description: 'Se desempeñó como Director del Fondo Mundial para la Naturaleza.'
  },
  {
      year: '2011 - 2021',
      description: 'Se desempeñó como Director de Ciencias de la Conservación y Director General de la ONG mexicana Pronatura Noreste.'
  },
  {
      year: '2021 - Actualidad',
      description: 'Funge como miembro del consejo asesor de AESPAC, A.C., y director de "De la Maza Consulting and Films"'
  }
];
    
    
