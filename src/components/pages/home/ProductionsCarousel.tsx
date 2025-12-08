"use client"

import React from "react"
import Image from "next/image"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay"

import { productionLogos } from "@/lib/data"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function ProductionsCarousel() {
  return (
    <Carousel
        opts={{
            align: "start",
            loop: true,
        }}
        plugins={[
            Autoplay({
                delay: 3000,
                stopOnInteraction: true,
            }),
        ]}
        className="w-full max-w-6xl mx-auto"
    >
      <CarouselContent>
        {productionLogos.map((logo, index) => (
          <CarouselItem key={index} className="basis-1/2 md:basis-1/3 flex justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <div className="p-1 cursor-pointer">
                    <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className="object-contain rounded-md shadow-lg hover:shadow-xl transition-shadow"
                    />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-2 bg-transparent border-0">
                 <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width * 2}
                    height={logo.height * 2}
                    className="object-contain rounded-lg w-full h-auto"
                />
              </DialogContent>
            </Dialog>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-white" />
      <CarouselNext className="text-white" />
    </Carousel>
  )
}
