import type { Film } from '@/lib/types';

export const TEATRO_ARAIZA_PLAYLIST_ID = 'PLnoMLJtKS2s43b5oliIzb4Rc9ZPCXJFZG';

const blank = { awards: '', streaming: '', website: '', imdb: '', poster: '', format: '' };

const cinematicDirection = {
  roleEs: 'Dirección cinematográfica y montaje',
  roleEn: 'Film direction and editing',
  value: 'Mauricio De la Maza-Benignos',
};

export const teatroAraiza: Film[] = [
  {
    ...blank,
    id: 'la-diva-y-el-ganster-2026',
    slug: 'la-diva-y-el-ganster',
    footerName: 'La diva y el gánster',
    title: 'LA DIVA Y EL GÁNSTER',
    year: '2026',
    genre: 'Teatro en formato de cine',
    genreEn: 'Theater in film format',
    synopsis:
      'Dos personajes extremos, contradictorios, actúan en la frontera peligrosa de la mafia y el mundo del teatro y del cine, atrapados en el tráfico y consumo de drogas y el fetichismo enloquecedor del dinero y las armas. En el sadomasoquismo de la trama teatral se manifiestan la violencia física, el inconsciente, los símbolos del poder criminal de un capo de la mafia y la inteligencia y emociones turbulentas de una actriz que ha soñado ser diva glamorosa y famosa del escenario teatral y la pantalla cinematográfica. El enfrentamiento está vinculado fatalmente con el tráfico y consumo de cocaína, la política y el lavado de dinero. *LA DIVA Y EL GÁNSTER* es una radiografía teatral de la patología social contemporánea, encarnada en el escenario por dos personajes en el límite de la existencia: instinto de muerte y pulsión erótica materializados en la ficción escénica y la realidad cotidiana, en el pasado y presente del conflicto individual y social. Escritura dramatúrgica y puesta en escena del clandestinaje, la venganza y la justicia: tragedia contemporánea que sucede ante un público que vive en el inquietante laberinto local, nacional e internacional, registrado constantemente para mostrarlo con la tecnología de internet y la información mediática crítica, o mediante la manipulación propagandística (*fake news*) y la inteligencia artificial.',
    synopsisEn:
      "Two extreme, contradictory characters act on the dangerous frontier between the mafia and the world of theater and film, trapped in drug trafficking and consumption and in the maddening fetishism of money and guns. In the sadomasochism of the theatrical plot, physical violence, the unconscious and the symbols of a mafia boss's criminal power come to light, along with the intelligence and turbulent emotions of an actress who has dreamed of becoming a glamorous, famous diva of the stage and the screen. The confrontation is fatally bound up with cocaine trafficking and consumption, politics and money laundering. *LA DIVA Y EL GÁNSTER* is a theatrical X-ray of contemporary social pathology, embodied on stage by two characters at the edge of existence: the death instinct and the erotic drive made material in stage fiction and everyday reality, in the past and present of individual and social conflict. A dramaturgy and staging of clandestinity, revenge and justice: a contemporary tragedy unfolding before an audience that lives in an unsettling local, national and international labyrinth, constantly recorded and displayed through internet technology and critical media, or through propaganda (*fake news*) and artificial intelligence.",
    synopsisSignature: 'Xavier Araiza',
    credits: [
      { roleEs: 'Dramaturgia y dirección escénica', roleEn: 'Playwright and stage direction', value: 'Xavier Araiza' },
      { roleEs: 'Reparto', roleEn: 'Cast', value: 'Roger Abanto, Jessica Jaramillo' },
      { roleEs: 'Presentada en', roleEn: 'Presented at', value: 'Punto y Coma, Monterrey' },
      cinematicDirection,
      { roleEs: 'Fotografía fija', roleEn: 'Still photography', value: 'Margen Magnético' },
    ],
    youtubeId: 'cX5y8UW0W28',
    review: {
      href: '/revista/la-diva-y-el-ganster',
      labelEs: 'Leer el ensayo en la revista',
      labelEn: 'Read the essay in the magazine',
    },
  },
  {
    ...blank,
    id: 'dialogo-sacerdote-moribundo-2023',
    slug: 'dialogo-sacerdote-moribundo',
    footerName: 'Diálogo entre un sacerdote y un moribundo',
    title: 'Diálogo entre un sacerdote y un moribundo',
    titleEn: 'Dialogue Between a Priest and a Dying Man',
    year: '2023',
    genre: 'Teatro en formato de cine',
    genreEn: 'Theater in film format',
    synopsis:
      'Adaptación cinematográfica de la puesta en escena de Xavier Araiza. Un sacerdote y un moribundo conversan; poco a poco, el moribundo relata su falta de arrepentimiento por lo que hizo mientras disfrutaba de la vida, y pone en cuestión la idea de Dios y su intervención en el mundo.',
    synopsisEn:
      "A film adaptation of Xavier Araiza's stage production. A priest and a dying man converse; little by little, the dying man recounts his lack of repentance for what he did while enjoying life, calling into question the idea of God and his intervention in the world.",
    credits: [
      { roleEs: 'Texto', roleEn: 'Text', value: 'Donatien Alphonse François, marqués de Sade (1782)' },
      { roleEs: 'Dirección escénica', roleEn: 'Stage direction', value: 'Xavier Araiza' },
      cinematicDirection,
    ],
    youtubeId: 'MFm74KuoubY',
    review: {
      href: '/filmografia#dialogos-de-la-muerte',
      labelEs: 'Ver también: Diálogos de la muerte (2023)',
      labelEn: 'See also: Dialogues of Death (2023)',
    },
  },
  {
    ...blank,
    id: 'a-puerta-cerrada-2023',
    slug: 'a-puerta-cerrada',
    footerName: 'A puerta cerrada',
    title: 'A puerta cerrada',
    titleEn: 'No Exit',
    year: '2023',
    genre: 'Teatro en formato de cine',
    genreEn: 'Theater in film format',
    synopsis:
      '“El infierno son los otros.” Una fusión entre la puesta en escena de Xavier Araiza y el juego cinematográfico de Mauricio De la Maza-Benignos sobre el clásico de Sartre: un cuestionamiento sobre la existencia humana que sigue vigente.',
    synopsisEn:
      "“Hell is other people.” A fusion of Xavier Araiza's stage production and Mauricio De la Maza-Benignos's cinematic play on Sartre's classic: a questioning of human existence that remains as relevant as ever.",
    credits: [
      { roleEs: 'Dramaturgia', roleEn: 'Playwright', value: 'Jean-Paul Sartre (Huis clos, 1944)' },
      { roleEs: 'Dirección escénica', roleEn: 'Stage direction', value: 'Xavier Araiza' },
      cinematicDirection,
    ],
    youtubeId: 'X9gUkJPZ9Vg',
  },
  {
    ...blank,
    id: 'la-loca-del-maniqui-2022',
    slug: 'la-loca-del-maniqui',
    footerName: 'La loca del maniquí',
    title: 'La loca del maniquí',
    year: '2022',
    genre: 'Película experimental',
    genreEn: 'Experimental film',
    synopsis:
      'A partir de segmentos filmados en vivo y del montaje ideológico, esta película experimental, derivada de la obra regiomontana de Xavier Araiza, reconstruye la psique de una mujer fragmentada y toca la violencia real y simbólica contra las mujeres.',
    synopsisEn:
      "Built from live-filmed segments and ideological montage, this experimental film, derived from Xavier Araiza's play from Monterrey, reconstructs the psyche of a fragmented woman and confronts real and symbolic violence against women.",
    credits: [
      { roleEs: 'Basada en', roleEn: 'Based on', value: 'la obra homónima de Xavier Araiza' },
      cinematicDirection,
    ],
    festivalsHeadingEs: 'Festivales',
    festivalsHeadingEn: 'Festivals',
    festivalsEs: [
      'Selección oficial: Sweet Democracy Film Awards, Cannes, Francia (2022); 8 & Halfilm Awards, Roma, Italia (2022); Frida Film Festival, París, Francia (2023).',
    ],
    festivalsEn: [
      'Official Selection: Sweet Democracy Film Awards, Cannes, France (2022); 8 & Halfilm Awards, Rome, Italy (2022); Frida Film Festival, Paris, France (2023).',
    ],
    youtubeId: 'b8D5fospn6U',
    review: {
      href: '/revista/prologo-de-la-loca-del-maniqui',
      labelEs: 'Leer el prólogo en la revista',
      labelEn: 'Read the prologue in the magazine',
    },
  },
];
