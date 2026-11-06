import Link from 'next/link';
import Image from 'next/image';
import {
  navLinks,
  socialLinks,
  filmProfessionalLinks,
  academicProfessionalLinks,
  otherProfessionalLinks,
  filmography,
  musicLinks,
} from '@/lib/data';
import type { SocialLink } from '@/lib/types';

const professionalGroups = [
  { title: 'Cine', links: filmProfessionalLinks },
  { title: 'Académico', links: academicProfessionalLinks },
];

function FooterLinkList({ links }: { links: SocialLink[] }) {
  return (
    <ul className="space-y-3">
      {links.map((link) => {
        const isOrcid = link.name === 'ORCID';
        return (
          <li key={link.name}>
            <a
              href={link.href}
              target="_blank"
              rel={isOrcid ? 'me noopener noreferrer' : 'noopener noreferrer'}
              className="text-sm hover:text-accent transition-colors"
            >
              {isOrcid && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src="https://orcid.org/sites/default/files/images/orcid_16x16.png"
                  alt="ORCID iD icon"
                  width={16}
                  height={16}
                  className="inline-block mr-1 align-[-0.125em]"
                  style={{ width: '1em', height: '1em' }}
                />
              )}
              {link.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 footer-dark">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Col 1: Logo and description */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/logo-delamaza-blanco-transparente.png" alt="De la Maza Consulting and Films" width={170} height={40} />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Explorando aquello que no siempre es visible: la culpa, la memoria, el miedo, el deseo y la conciencia moral a través del cine y la ciencia.
            </p>
            <div className="space-y-4 pt-4">
              <h4 className="text-xs uppercase tracking-[0.2em] text-accent font-bold">Redes Sociales</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent transition-all hover:scale-110"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Filmografía */}
          <div className="space-y-6">
            <h3 className="font-headline text-xl font-semibold text-white">
              <Link href="/filmografia" className="hover:text-accent transition-colors">Filmografía</Link>
            </h3>
            <ul className="space-y-3">
              {filmography.map((film) => (
                <li key={film.slug}>
                  <Link href={`/filmografia#${film.slug}`} className="text-sm hover:text-accent transition-colors">
                    {film.footerName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Profesional & Música */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="font-headline text-xl font-semibold text-white">Profesional</h3>
              {professionalGroups.map((group) => (
                <div key={group.title} className="space-y-4">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-accent font-bold">{group.title}</h4>
                  <FooterLinkList links={group.links} />
                </div>
              ))}
              <FooterLinkList links={otherProfessionalLinks} />
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-[0.2em] text-accent font-bold">Música</h4>
              <ul className="space-y-3">
                {musicLinks.map((music) => (
                  <li key={music.name}>
                    <a
                      href={music.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-accent transition-colors"
                      aria-label={music.name}
                    >
                      {music.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 4: Contacto */}
          <div className="space-y-6">
            <h3 className="font-headline text-xl font-semibold text-white">Contacto</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <a href="mailto:mauriciodelamaza70@gmail.com" className="hover:text-accent transition-colors block">mauriciodelamaza70@gmail.com</a>
              </li>
              <li>
                <a href="https://wa.me/528110165108" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors block">
                  WhatsApp: +52 81 1016 5108
                </a>
              </li>
              <li className="pt-2 italic text-xs">Monterrey, México</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mauricio De la Maza-Benignos. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-accent transition-colors">
                    {link.label}
                </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
