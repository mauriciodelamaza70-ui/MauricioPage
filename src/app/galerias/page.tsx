
'use client';

import PageHero from "@/components/common/PageHero";
import GalleryGrid from "@/components/pages/gallery/GalleryGrid";
import { galleryImages } from "@/lib/data";

export default function GaleriasPage() {
  return (
    <>
      <PageHero title="Galerías" imageId="gallery-prologo-3" objectPosition="object-[center_30%]" />
      
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Explora Nuestro Mundo Visual</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Una selección de momentos capturados a través de nuestro lente, desde la majestuosidad de la vida silvestre hasta la emoción detrás de cámaras.
            </p>
        </div>

        <div className="mt-12">
          <GalleryGrid images={galleryImages} />
        </div>
      </div>
    </>
  );
}
