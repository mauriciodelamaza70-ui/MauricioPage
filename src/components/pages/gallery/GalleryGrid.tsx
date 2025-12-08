"use client";

import Image from 'next/image';
import { GalleryImage } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

type GalleryGridProps = {
  images: GalleryImage[];
};

export default function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {images.map((image) => {
        const placeholder = PlaceHolderImages.find((p) => p.id === image.imageId);
        if (!placeholder) return null;
        return (
          <Dialog key={image.id}>
            <DialogTrigger asChild>
              <div className="overflow-hidden cursor-pointer group rounded-lg shadow-lg">
                <div className="overflow-hidden aspect-[2/3] relative">
                  <Image
                    src={placeholder.imageUrl}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={placeholder.imageHint}
                  />
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-2">
              <DialogTitle className="sr-only">{image.title}</DialogTitle>
              <Image
                src={placeholder.imageUrl.replace(/\d+\/\d+$/, '800/1200')}
                alt={image.title}
                width={800}
                height={1200}
                className="w-full h-auto rounded-md"
                data-ai-hint={placeholder.imageHint}
              />
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
}
