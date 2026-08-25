import type { Movie } from '../types';

export const biography = {
  role: "Cineasta, compositor y biólogo evolutivo",
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
    recognition: "Parte de su obra ha sido reconocida en contextos vinculados al circuito audiovisual independiente, incluyendo disticones relacionadas con Best Original Score y menciones en festivales internacionales donde su música acompa��a proyectos seleccionados.",
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
  },
  {
  id: 'makhaira-2026',
  title: 'EL GRAN MAKHAIRA',
  year: '2026',
  genre: 'Drama / Thriller / Tragedia / Noir',
  format: 'largometraje',
  synopsis: 'En un circo underground donde la violencia y el morbo forman parte del espectáculo, Eitán, un célebre lanzador de cuchillos, parece dominar cada aspecto de su mundo...',
  awards: '',
  streaming: '',
  website: 'makhaira.mauriciodelamazabenignos.com',
  imdb: '',
    poster: '/images/El gran Makhaira.png'
  },
  {
    id: 'bonito-2024',
    title: 'EL BONITO',
    year: '2024',
    genre: 'Acción / Crimen / Musical',
    format: 'largometraje',
    synopsis: 'El infame prestamista y narcotraficante local, El Bonito, controla la ciudad. Pantera, su amor imposible, se convierte en su talón de Aquiles: ella desaprueba sus métodos y protege a sus víctimas. Mientras tanto, sus propios hombres empiezan a ver en esa debilidad una amenaza a su autoridad.',
    awards: '',
    streaming: '',
    website: 'elbonito.mauriciodelamazabenignos.com',
    imdb: '',
    poster: '/images/El Bonito.png'
  }
];
