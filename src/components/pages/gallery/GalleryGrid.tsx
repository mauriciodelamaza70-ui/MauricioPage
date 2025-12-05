"use client";

import Image from 'next/image';
import { GalleryImage } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';

type GalleryGridProps = {
  images: GalleryImage[];
};

export default function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((image) => {
          const placeholder = PlaceHolderImages.find((p) => p.id === image.imageId);
          if (!placeholder) return null;
          return (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden cursor-pointer group break-inside-avoid">
                    <div className="overflow-hidden">
                        <Image
                            src={placeholder.imageUrl}
                            alt={image.title}
                            width={500}
                            height={500}
                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={placeholder.imageHint}
                        />
                    </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-2">
                <DialogTitle className="sr-only">{image.title}</DialogTitle>
                <Image
                  src={placeholder.imageUrl.replace(/\d+\/\d+$/, '1200/800')}
                  alt={image.title}
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-md"
                   data-ai-hint={placeholder.imageHint}
                />
              </DialogContent>
            </Dialog>
          );
        })}
      </div>
    </div>
  );
}
