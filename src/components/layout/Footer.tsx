import Link from 'next/link';
import Image from 'next/image';
import { navLinks, socialLinks, professionalLinks, productionLinks, musicLinks } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 footer-dark">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Col 1: Logo and description */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/logo-white.png" alt="Terra Vision Logo" width={170} height={40} />
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

          {/* Col 2: Películas */}
          <div className="space-y-6">
            <h3 className="font-headline text-xl font-semibold text-white">Películas</h3>
            <ul className="space-y-3">
              {productionLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Profesional */}
          <div className="space-y-6">
            <h3 className="font-headline text-xl font-semibold text-white">Profesional</h3>
            <div className="flex flex-wrap gap-4">
              {professionalLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                  <span className="hidden xl:inline">{social.name}</span>
                </a>
              ))}
            </div>
            <div className="space-y-3 pt-4">
                <h4 className="text-xs uppercase tracking-[0.2em] text-accent font-bold">Música</h4>
                <div className="flex gap-4">
                    {musicLinks.map((music) => (
                    <a
                        key={music.name}
                        href={music.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-accent transition-all"
                        aria-label={music.name}
                    >
                        <music.icon className="h-5 w-5" />
                    </a>
                    ))}
                </div>
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
