"use client";

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { timelineEvents } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function HistoryTimeline() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-12">
        <Button variant="ghost" size="icon" onClick={scrollPrev} className="rounded-full h-10 w-10">
          <ArrowLeft className="h-6 w-6" />
        </Button>
      </div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-12">
        <Button variant="ghost" size="icon" onClick={scrollNext} className="rounded-full h-10 w-10">
          <ArrowRight className="h-6 w-6" />
        </Button>
      </div>
      
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex pb-8 -mb-8">
          {timelineEvents.map((event, index) => (
            <div key={index} className="flex-[0_0_33.33%] min-w-0 pl-8">
              <div className="relative">
                <div className="absolute top-0 left-0 w-full h-px bg-border -z-10"></div>
                <div className="absolute top-0 left-0 -translate-y-1/2 w-3 h-3 bg-accent rounded-full"></div>
                <p className="font-bold text-lg mb-2 pt-5">{event.year}</p>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
       <div className="w-full h-px bg-border mt-8"></div>
    </div>
  );
}
