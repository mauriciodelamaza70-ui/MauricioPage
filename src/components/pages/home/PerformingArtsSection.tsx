import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TheatreIcon } from "@/components/icons";
import { stageWorks } from "@/lib/data/performing-arts-data";

export default function PerformingArtsSection() {
  return (
    <section id="artes-escenicas" className="py-12 bg-black text-white scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">Obra escénica</p>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-white">Artes escénicas</h2>
        </div>
        <ul className="mx-auto flex max-w-6xl flex-wrap justify-center gap-8">
          {stageWorks.map((work) => (
            <li key={work.id} className="flex w-[300px] flex-col">
              <div className="relative aspect-[2/3] w-full overflow-hidden rounded-md shadow-lg">
                {work.image ? (
                  <Image
                    src={work.image.src}
                    alt={work.image.alt}
                    fill
                    sizes="300px"
                    className="object-contain"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center rounded-md border border-dashed border-white/20 bg-white/5">
                    <TheatreIcon className="h-12 w-12 text-gray-400" aria-hidden="true" />
                    <span className="sr-only">{`Imagen de ${work.title} próximamente`}</span>
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col pt-6">
                <h3 className="font-headline text-2xl font-bold text-white">{work.title}</h3>
                <p className="mt-1 text-sm uppercase tracking-widest text-gray-400 text-pretty">{work.subtitle}</p>
                <p className="mt-4 leading-relaxed text-gray-300 text-pretty">{work.description}</p>
                <div className="mt-6">
                  <Button asChild className="bg-accent hover:bg-accent/90">
                    <Link href={work.url}>
                      {work.ctaLabel} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
