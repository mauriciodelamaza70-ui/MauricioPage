import type { SocialLink } from '../types';
import { Facebook, Instagram, Linkedin, Youtube, Globe, Film } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons';

export const socialLinks: SocialLink[] = [
    { name: 'Facebook', href: 'https://www.facebook.com/MauricioDelaMazaBenignos', icon: Facebook },
    { name: 'Instagram', href: 'https://www.instagram.com/mauriciodelamazabenignos/', icon: Instagram },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mauricio-de-la-maza-benignos-224a2a9/', icon: Linkedin },
    { name: 'YouTube', href: 'https://www.youtube.com/@mauriciodelamaza7834', icon: Youtube },
    { name: 'WhatsApp', href: 'https://wa.me/528110165108', icon: WhatsAppIcon },
];

export const professionalLinks: SocialLink[] = [
    { name: 'IMDb', href: 'https://www.imdb.com/es/name/nm14485536/', icon: Globe },
    { name: 'FilmFreeway', href: 'https://filmfreeway.com/MauriciodelaMazaBenignos', icon: Film },
    { name: 'Wikipedia', href: 'https://en.wikipedia.org/wiki/Mauricio_De_la_Maza-Benignos', icon: Globe },
    { name: 'WCFF', href: 'https://wcff.org', icon: Globe },
    { name: 'Google Scholar', href: 'https://scholar.google.com.mx/citations?user=55cWcTAAAAAJ&hl=es&oi=ao', icon: Globe },
    { name: 'Academia.edu', href: 'https://independentscholar.academia.edu/MauricioDelaMazaBenignos', icon: Globe },
    { name: 'ResearchGate', href: 'https://www.researchgate.net/profile/Mauricio-De-La-Maza-Benignos', icon: Globe },
];

export const productionLinks = [
    { name: 'Cora', href: 'https://corafilm.com' },
    { name: 'Diálogos de la muerte', href: 'https://dialogosdelamuerte.com' },
    { name: 'El Zapato', href: 'https://theshoe.info' },
    { name: 'El Gran Makhaira', href: 'https://makhaira.mauriciodelamazabenignos.com' },
];

export const musicLinks: SocialLink[] = [
    { name: 'Spotify', href: 'https://open.spotify.com/intl-es/artist/2qHtMVEyh6uAXl5HiBT9GZ', icon: Globe },
    { name: 'Apple Music', href: 'https://music.apple.com/us/artist/mauricio-de-la-maza/1728959590', icon: Globe },
    { name: 'Bandcamp', href: 'https://mauriciodelamaza.bandcamp.com', icon: Globe },
];
