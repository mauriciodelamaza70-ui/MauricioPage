import Link from 'next/link';
import { Film } from 'lucide-react';
import { navLinks, socialLinks } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 footer-dark">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Logo and description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Film className="h-8 w-8 text-accent" />
              <span className="font-headline text-2xl font-bold text-white">
                Terra Vision
              </span>
            </Link>
            <p className="text-muted-foreground">
              Producción audiovisual y consultoría ambiental desde 1994.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-headline text-xl font-semibold text-white">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="space-y-4">
            <h3 className="font-headline text-xl font-semibold text-white">Contacto</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="mailto:mauriciodelamaza@gmail.com" className="hover:text-accent transition-colors">mauriciodelamaza@gmail.com</a></li>
              <li><a href="https://wa.me/5218110165108" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">WhatsApp: +52 81 1016 5108</a></li>
              <li>Monterrey, México</li>
            </ul>
          </div>

          {/* Col 4: Social Media */}
          <div className="space-y-4">
            <h3 className="font-headline text-xl font-semibold text-white">Redes Sociales</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-800 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mauricio De la Maza-Benignos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
