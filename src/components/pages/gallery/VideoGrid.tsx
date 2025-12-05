"use client";

import Image from 'next/image';
import type { Video } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { PlayCircle } from 'lucide-react';

type VideoGridProps = {
  videos: Video[];
};

export default function VideoGrid({ videos }: VideoGridProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {videos.map((video) => {
        const thumbnail = PlaceHolderImages.find((p) => p.id === video.thumbnailId);
        if (!thumbnail) return null;
        return (
          <Dialog key={video.id}>
            <DialogTrigger asChild>
              <Card className="overflow-hidden cursor-pointer group flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={thumbnail.imageUrl}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={thumbnail.imageHint}
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <PlayCircle className="h-16 w-16 text-white/80 transform transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="font-headline text-xl font-bold">{video.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{video.type}</p>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0 aspect-video">
              <DialogTitle className="sr-only">{video.title}</DialogTitle>
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-md"
              ></iframe>
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
}
