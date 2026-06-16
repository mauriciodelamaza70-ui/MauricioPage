import type { NavLink, SocialLink, Service, Project, Post, GalleryImage, Achievement, TimelineEvent, Video, ProductionLogo, Collaborator, Movie } from './types';
import { Facebook, Instagram, Linkedin, Youtube, Globe, Film } from 'lucide-react';
import { WhatsAppIcon, IMDbIcon, WikipediaIcon, SpotifyIcon, AppleMusicIcon, BandcampIcon } from '@/components/icons';

export const siteConfig = {
  name: 'Mauricio de la Maza Benignos',
  url: 'https://mauriciodelamaza.com',
  ogImage: 'https://mauriciodelamaza.com/og.jpg',
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
    { name: 'Facebook', href: 'https://www.facebook.com/MauricioDelaMazaBenignos', icon: Facebook },
    { name: 'Instagram', href: 'https://www.instagram.com/mauriciodelamazabenignos/', icon: Instagram },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mauricio-de-la-maza-benignos-224a2a9/', icon: Linkedin },
    { name: 'YouTube', href: 'https://www.youtube.com/@mauriciodelamaza7834', icon: Youtube },
    { name: 'WhatsApp', href: 'https://wa.me/528110165108', icon: WhatsAppIcon },
];

export const professionalLinks: SocialLink[] = [
    { name: 'IMDb', href: 'https://www.imdb.com/es/name/nm14485536/', icon: IMDbIcon },
    { name: 'FilmFreeway', href: 'https://filmfreeway.com/MauriciodelaMazaBenignos', icon: Film },
    { name: 'Wikipedia', href: 'https://en.wikipedia.org/wiki/Mauricio_De_la_Maza-Benignos', icon: WikipediaIcon },
    { name: 'WCFF', href: 'https://wcff.org', icon: Globe },
];

export const productionLinks = [
    { name: 'Cora', href: 'https://corafilm.com' },
    { name: 'Diálogos de la muerte', href: 'https://dialogosdelamuerte.com' },
    { name: 'El Zapato', href: 'https://theshoe.info' },
];

export const musicLinks: SocialLink[] = [
    { name: 'Spotify', href: 'https://open.spotify.com/intl-es/artist/2qHtMVEyh6uAXl5HiBT9GZ', icon: SpotifyIcon },
    { name: 'Apple Music', href: 'https://music.apple.com/us/artist/mauricio-de-la-maza/1728959590', icon: AppleMusicIcon },
    { name: 'Bandcamp', href: 'https://mauriciodelamaza.bandcamp.com', icon: BandcampIcon },
];

export const biography = {
  role: "Cineasta y compositor",
  short: "Explorando aquello que no siempre es visible: la culpa, la memoria, el miedo, el deseo y la conciencia moral.",
  intro: "El trabajo de Mauricio de la Maza-Benignos nace de una inquietud esencial: explorar aquello que no siempre es visible, pero que determina nuestras decisiones — la culpa, la memoria, el miedo, el deseo y la conciencia moral.",
  content: [
    {
      text: "Su cine transita entre el documental ambiental de tono poético y educativo y la ficción de carácter introspectivo. En ambos territorios hay una constante: la búsqueda de aquello que late bajo la superficie. Naturaleza, sostenibilidad, diversidad humana y conflicto interior no aparecen como temas aislados, sino como fuerzas que dialogan entre sí."
    },
    {
      text: "Las imágenes no solo narran: interrogan.\nLos silencios no solo contienen: revelan."
    },
    {
      text: "Su obra combina arte, pensamiento crítico y una dimensión ética que evita el panfleto y privilegia la reflexión. Desde ecosistemas vulnerables hasta dilemas morales íntimos, su mirada propone una relación consciente entre el ser humano y su entorno."
    }
  ],
  fiction: {
    title: "Cine de ficción",
    text: "En la ficción, Mauricio construye relatos donde el conflicto no se resuelve únicamente en la acción externa, sino en la tensión interna de los personajes. El drama psicológico y el misterio funcionan como vehículos para explorar preguntas existenciales y filosóficas.",
    details: "Cora, El zapato y Diálogos de la muerte conforman un cuerpo de obra que se mueve en el terreno del cine de autor contemporáneo, con una puesta en escena contenida y una dirección centrada en el trabajo actoral. La atmósfera y el ritmo deliberado sostienen narrativas donde cada gesto tiene peso moral.",
    awards: "Estas películas han circulado en festivales internacionales de cine independiente en Europa, América y Asia, recibiendo disticones como Best Indie Feature Film, Best Avant-Garde Best Director, Best Mystery Film y Best Acting Ensemble. Más allá de los reconocimientos, consolidan una identidad estética definida y coherente."
  },
  documentary: {
    title: "Documental y naturaleza",
    text: "En su vertiente documental, el enfoque ambiental no es únicamente informativo: es contemplativo. La naturaleza aparece como presencia viva, frágil y profundamente interconectada. El cine se convierte en una forma de pedagogía sensible, donde ciencia y poesía comparten el mismo espacio visual."
  },
  music: {
    title: "Música",
    text: "Su trabajo musical se desarrolla en paralelo, pero nunca separado del universo cinematográfico. Parte de una premisa narrativa: la música no acompaña la imagen, la completa.",
    details: "La composición surge desde la atmósfera y la tensión emocional. Ambient, escritura orquestal minimalista, exploración experimental y texturas contemporáneas convergen en estructuras que dialogan con el conflicto interior de los personajes. Se privilegian procesos graduales, respiraciones largas y decisiones que, en ciertos momentos, pueden incluso contradecir la imagen para profundizarla.",
    concept: "La música respira con la historia.",
    recognition: "Parte de su obra ha sido reconocida en contextos vinculados al circuito audiovisual independiente, incluyendo disticones relacionadas con Best Original Score y menciones en festivales internacionales donde su música acompaña proyectos seleccionados.",
    platforms: "Su catálogo está disponible en plataformas digitales como Spotify, Apple Music y Bandcamp, extendiendo su circulación a públicos y profesionales del ámbito audiovisual en distintas partes del mundo.",
    platformsLinks: "Disponible en Spotify, Apple Music y Bandcamp"
  },
  science: {
    title: "La ciencia como mirada",
    intro: "La dimensión artística de Mauricio de la Maza-Benignos no surgió en el vacío: está profundamente enraizada en décadas de trabajo científico y conservacionista de primer nivel internacional.",
    details: [
      "Doctor en Biología y Desarrollo Sustentable summa cum laude por la UANL, miembro del Sistema Nacional de Investigadores de México, e ictiólogo con publicaciones en revistas científicas internacionales —incluyendo la descripción de nuevas especies de cíclidos del noreste de México—, su formación científica atraviesa toda su obra visual. La naturaleza en su cine no es decorado: es argumento.",
      "Entre 2006 y 2011 dirigió el Programa del Desierto Chihuahuense para el WWF, trabajando con los gobiernos de México y Estados Unidos en la conservación del Río Conchos y el Río Bravo. De 2011 a 2021 fue Director General de Pronatura Noreste, una de las ONG ambientales más influyentes del norte de México. En 2020 recibió el Premio a la Conservación del Arizona Game and Fish Department por su labor en la región transfronteriza.",
      "Desde 2023, es Director General (CEO) del Wildlife Conservation Film Festival (WCFF) —uno de los festivales de cine de naturaleza y conservación más importantes del mundo—, lo que consolida su labor como puente entre el cine, la ciencia y la conservación.",
      "Esta trayectoria no es paralela a su cine: lo informa, lo profundiza y le otorga una perspectiva que muy pocos cineastas en el mundo pueden ofrecer."
    ]
  },
  architecture: {
    title: "Una arquitectura unificada",
    text: "El doble rol como director y compositor permite construir una arquitectura dramática unificada, donde cada decisión sonora responde a una intención cinematográfica precisa. Imagen y sonido no funcionan como capas superpuestas, sino como una sola estructura emocional y conceptual.",
    conclusion: "En su obra, cine y música no se ilustran: se revelan mutuamente."
  }
};

export const featuredMovies: Movie[] = [
  {
    id: 'cora-2024',
    title: 'CORA',
    year: '2024',
    genre: 'Thriller psicológico',
    format: 'largometraje',
    synopsis: 'Cora es una socialité que enfrenta las consecuencias de sus propias decisiones con métodos poco convencionales. Infidelidad, amor prohibido, violencia y elecciones del pasado forman el torbellino que deberá atravesar para recuperar su vida. Inspirada en el Fénix, es un viaje de redención donde la culpa, la memoria y el deseo se entrelazan en una atmósfera de tensión psicológica.',
    awards: 'Best Indie Narrative Feature, Best Original Screenplay, Best Casting Director, Best Arthouse Filmmaker, Best Mystery, Best Actor, Best Actress, Best Supporting Actor, Best Supporting Actress, Best Editing, entre otros en festivales en Europa, América y Asia.',
    streaming: 'Amazon Prime Video, Tubi, Plex, Opprime.tv, Wocoo.tv',
    website: 'corafilm.com',
    imdb: 'https://www.imdb.com/title/tt31151642/',
    poster: '/images/Cora.png'
  },
  {
    id: 'dialogos-2023',
    title: 'DIALOGOS DE LA MUERTE',
    year: '2023',
    subtitle: 'Basada en obra del Marqués de Sade',
    genre: 'Drama filosófico',
    format: 'largometraje',
    synopsis: 'Andrés, un sacerdote rural, visita a Alfonso, su amigo libertino en su lecho de muerte, para convencerlo de arrepentirse. Mientras los dos debaten, Malena, la próxima viuda, trama su venganza. Un homenaje al expresionismo alemán que explora conceptos morales, religiosos y filosóficos de quienes cuestionan sus creencias.',
    awards: '10 premios ganados, 2 nominaciones. Rome International Movie Awards: Best Actor (Diego Abelardo), Best Supporting Actor (Christian Luigi), Best Acting Duo, entre otros.',
    streaming: 'Tubi, Apple TV, Fawesome.tv, Opprime.tv',
    website: 'dialogosdelamuerte.com',
    imdb: 'https://www.imdb.com/title/tt26421317/',
    poster: '/images/Dialogos de la muerte.png'
  },
  {
    id: 'zapato-2025',
    title: 'EL ZAPATO',
    year: '2025',
    subtitle: 'Codirección con Sofía Alejandra Díaz Garza',
    genre: 'Comedia / Horror / Thriller',
    format: 'largometraje',
    synopsis: 'Una propuesta original e ingeniosa que desafía las convenciones del género. “Every once in a while, a film comes along that sort of knocks me on my ass…” — Brian Lutes. “Original, clever, and a true celebration of diversity” — Dr. Daniel Widdowson, Salt House Creative.',
    awards: '12 wins & 7 nominations. IMDb rating: 7.1',
    streaming: 'Tubi',
    website: 'theshoe.info',
    imdb: 'https://www.imdb.com/title/tt36605107/',
    poster: '/images/El zapato.png'
  }
];

export const services: Service[] = [
  {
    title: 'Cine de Ficción y Documental',
    imageId: 'service-audiovisual',
    summary: 'Narrativas que transitan entre el documental ambiental de tono poético y la ficción de carácter introspectivo. Una búsqueda constante de aquello que late bajo la superficie a través del lenguaje cinematográfico.',
    details: [
        {
            title: "Producción Cinematográfica",
            description: "Exploramos aquello que no siempre es visible: la culpa, la memoria, el miedo y el deseo.",
            items: [
                "Documentales ambientales de tono poético",
                "Largometrajes de ficción introspectiva",
                "Cine de autor y drama psicológico",
                "Narrativas de naturaleza y diversidad humana"
            ]
        }
    ]
  },
  {
    title: 'Composición y Diseño Sonoro',
    imageId: 'service-editing',
    summary: 'La música no acompaña la imagen: la completa. Mauricio compone desde la tensión emocional y la atmósfera narrativa, combinando escritura orquestal minimalista, ambient y exploración experimental.',
    details: []
  },
  {
    title: 'Fotografía Contemplativa',
    imageId: 'service-photography',
    summary: 'Una mirada que se detiene donde otras pasan de largo. La fotografía comparte el mismo temple del cine: la búsqueda de lo que late bajo la superficie.',
    details: []
  },
  {
    title: 'Gestión Cultural y Ética',
    imageId: 'service-culture',
    summary: 'Más de tres décadas vinculando el arte, la ciencia y la sociedad. Como Director General del Wildlife Conservation Film Festival (WCFF).',
    details: []
  },
  {
    title: 'Consultoría Ambiental Estratégica',
    imageId: 'service-consulting',
    summary: 'Sustentada en una trayectoria científica y de gestión de primer nivel —WWF, Pronatura Noreste, Sistema Nacional de Investigadores.',
    details: []
  },
  {
    title: 'Dirección Creativa Narrativa',
    imageId: 'service-digital',
    summary: 'Para proyectos que necesitan encontrar su voz. Acompañamiento a equipos creativos, productoras y organizaciones.',
    details: []
  },
];

export const productionLogos: ProductionLogo[] = [
    { src: '/images/Cora.png', alt: 'Cora Poster', width: 500, height: 750, url: 'https://corafilm.com/' },
    { src: '/images/Dialogos de la muerte.png', alt: 'Diálogos de la Muerte Poster', width: 500, height: 750, url: 'https://dialogosdelamuerte.com/' },
    { src: '/images/El zapato.png', alt: 'El Zapato Poster', width: 500, height: 750, url: 'https://theshoe.info/' },
    { src: '/images/Wildligeconservation.png', alt: 'Wildlife Conservation Film Festival Poster', width: 500, height: 750, url: 'https://wcff.org/' },
    { src: '/images/PPPanterra-1.png', alt: 'Pantera Cine Fest Poster', width: 500, height: 750, url: 'https://panterracinefest.org/' },
];

export const projects: Project[] = [
    { id: 'proj-1', title: 'Conservación del Lobo Mexicano', imageId: 'project-1', category: 'Proyectos' },
    { id: 'proj-2', title: 'Desierto Chihuahuense: Un Universo Oculto', imageId: 'project-2', category: 'Proyectos' },
    { id: 'proj-3', title: 'Festival de Cine PanterFest', imageId: 'project-3', category: 'Eventos' },
    { id: 'proj-4', title: 'Estrategia de Conservación Hídrica', imageId: 'project-4', category: 'Consultoría' },
];

export const posts: Post[] = [
  { 
    id: 'post-1', 
    slug: 'prologo-de-la-loca-del-maniqui',
    title: 'Prólogo de “La loca del maniquí”', 
    date: '26 de Mayo, 2022', 
    excerpt: 'Un vistazo al prólogo del libro, explorando sus temas centrales y el estilo narrativo.', 
    content: `<p>Por: Aarón Coré</p><p>En el año 2000 se publicó la dramaturgia La loca del maniquí, del autor Xavier Araiza. Al año siguiente, se estrenó en la Sala Experimental del Teatro de la Ciudad ubicada en Monterrey, Nuevo León México y fue interpretada por la actriz Alma Morales...</p>`, 
    imageId: 'blog-prologo-cover-new', 
    category: 'Artículos' 
  },
  { 
    id: 'post-2', 
    slug: 'consejo-tecnico-picachos', 
    title: 'Establecen consejo técnico para la conservación de Picachos', 
    date: '07 de Noviembre, 2021', 
    excerpt: 'Conoce los detalles sobre la formación del nuevo consejo y sus objetivos para proteger la Sierra de Picachos.', 
    content: `<p>Después de que el Gobierno del Estado decretara al Ecosistema Sierra de Picachos como Área Natural Protegida, se estableció un Consejo Técnico...</p>`, 
    imageId: 'blog-consejo-tecnico-cover-new', 
    category: 'Noticias' 
  },
  { 
    id: 'post-3', 
    slug: 'valle-del-cocora', 
    title: 'Valle del Cocora', 
    date: '02 de Noviembre, 2021', 
    excerpt: 'Un viaje visual y reflexivo por uno de los paisajes más emblemáticos de Colombia.', 
    content: `<p>El fotoperiodista David Jaramillo nos comparte una visión del Valle de Cocora, paisaje natural en Quindío, Colombia...</p>`, 
    imageId: 'blog-valle-cocora-cover', 
    category: 'Artículos' 
  },
  { 
    id: 'post-4', 
    slug: 'aviturismo-noreste-mexico', 
    title: 'Aviturismo: El potencial del noreste de México', 
    date: '15 de Octubre, 2021', 
    excerpt: 'Explorando las rutas migratorias y la riqueza ornitológica de la región.', 
    content: `<p>El aviturismo se consolida como una de las actividades de mayor crecimiento y potencial para la conservación en el noreste de México...</p>`, 
    imageId: 'blog-aviturismo-cover', 
    category: 'Noticias' 
  },
  { 
    id: 'post-5', 
    slug: 'doctorado-honoris-causa-reconocimiento', 
    title: 'Doctorado Honoris Causa a Mauricio De la Maza', 
    date: '20 de Septiembre, 2021', 
    excerpt: 'Reconocimiento a una trayectoria dedicada a la ciencia y la conservación.', 
    content: `<p>En una ceremonia solemne, el Claustro Doctoral Iberoamericano otorgó el Doctorado Honoris Causa por su incansable labor en el desarrollo sustentable...</p>`, 
    imageId: 'blog-honoris-causa-cover', 
    category: 'Noticias' 
  },
  { 
    id: 'post-6', 
    slug: 'cuatro-cienegas-laboratorio-evolucion', 
    title: 'Cuatro Ciénegas: Laboratorio de la Evolución', 
    date: '10 de Agosto, 2021', 
    excerpt: 'Análisis sobre la importancia crítica de este ecosistema único en el mundo.', 
    content: `<p>Cuatro Ciénegas no es solo un oasis en el desierto; es un portal a los orígenes de la vida en la Tierra que requiere protección inmediata...</p>`, 
    imageId: 'blog-cuatro-cienegas-cover', 
    category: 'Artículos' 
  },
  { 
    id: 'post-7', 
    slug: 'discriminacion-ongs-retos-actuales', 
    title: 'Discriminación a ONGs: Retos del tercer sector', 
    date: '05 de Julio, 2021', 
    excerpt: 'Reflexión sobre los obstáculos políticos y sociales que enfrentan las organizaciones ambientales.', 
    content: `<p>Las organizaciones de la sociedad civil enfrentan un panorama complejo donde la discriminación y la falta de apoyos limitan su impacto real...</p>`, 
    imageId: 'blog-discriminacion-ongs-cover-new', 
    category: 'Artículos' 
  },
  { 
    id: 'post-8', 
    slug: 'decreto-sierra-picachos-victoria', 
    title: 'El decreto de Sierra Picachos: Una victoria ambiental', 
    date: '28 de Junio, 2021', 
    excerpt: 'Análisis del impacto legal y ecológico del nuevo decreto de protección.', 
    content: `<p>La ampliación de la protección de Sierra Picachos representa un hito histórico para la política ambiental de Nuevo León...</p>`, 
    imageId: 'blog-decreto-picachos-cover', 
    category: 'Noticias' 
  },
  { 
    id: 'post-9', 
    slug: 'tenencia-tierra-conservacion', 
    title: 'Tenencia de la Tierra y Conservación', 
    date: '12 de Mayo, 2021', 
    excerpt: 'La seguridad jurídica como base para proyectos de conservación a largo plazo.', 
    content: `<p>Sin una tenencia de la tierra clara y legal, los esfuerzos de conservación enfrentan una vulnerabilidad constante ante intereses externos...</p>`, 
    imageId: 'blog-tenencia-tierra', 
    category: 'Artículos' 
  },
  { 
    id: 'post-10', 
    slug: 'etica-cine-naturaleza', 
    title: 'Ética en el cine de naturaleza', 
    date: '01 de Abril, 2021', 
    excerpt: '¿Hasta dónde debe llegar un cineasta para capturar la imagen perfecta?', 
    content: `<p>La producción de documentales de naturaleza exige un compromiso ético que priorice el bienestar de los ecosistemas sobre el impacto visual...</p>`, 
    imageId: 'blog-etica-documental-cover-new', 
    category: 'Artículos' 
  },
];


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
