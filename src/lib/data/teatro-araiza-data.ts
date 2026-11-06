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
