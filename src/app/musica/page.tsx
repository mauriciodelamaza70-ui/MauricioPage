import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/common/PageHero';
import { musicCategories } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Música',
  description:
    'Explora los proyectos musicales de Mauricio de la Maza-Benignos, desde la composición electrónica hasta el diseño sonoro.',
};

export default function MusicaPage() {
  return (
    <>
      <PageHero title="Música" imageId="musica-hero" objectPosition="object-center" />

      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-balance">
            Proyectos Musicales
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Una exploración sonora a través de distintos lenguajes y territorios musicales, donde la
            composición encuentra su propia voz sin pertenecer a un solo género.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {musicCategories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative aspect-[2/3] rounded-xl overflow-hidden shadow-2xl block"
              aria-label={`Ver categoría ${category.title}`}
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ objectPosition: category.objectPosition ?? 'center' }}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-headline text-3xl font-bold text-white leading-tight">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm text-white/80 leading-relaxed">
                  {category.description}
                </p>
                <span className="mt-4 inline-flex items-center text-accent font-bold uppercase tracking-wider text-xs opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Explorar <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
