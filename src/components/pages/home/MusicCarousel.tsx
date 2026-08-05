"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"

import { musicCategories } from "@/lib/data"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Orden de las primeras tarjetas visibles al cargar; el resto sigue en el orden del catálogo.
const FEATURED_ORDER = ["lidia", "sigilo-locus", "post-punk"]

const orderedCategories = [
  ...FEATURED_ORDER.map((id) => musicCategories.find((c) => c.id === id)).filter(
    (c): c is (typeof musicCategories)[number] => Boolean(c),
  ),
  ...musicCategories.filter((c) => !FEATURED_ORDER.includes(c.id)),
]

// Tarjeta reutilizada por el carrusel y por el estado estático previo al montaje.
function MusicCard({ category }: { category: (typeof musicCategories)[number] }) {
  return (
    <Link href={category.href} className="group block h-full" aria-label={`Ver ${category.title}`}>
      <Card className="overflow-hidden h-full">
        <div className="aspect-video overflow-hidden">
          <Image
            src={category.image || "/placeholder.svg"}
            alt={category.imageAlt ?? category.title}
            width={600}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            style={category.objectPosition ? { objectPosition: category.objectPosition } : undefined}
          />
        </div>
        <CardHeader>
          <CardTitle className="font-headline text-xl group-hover:text-accent transition-colors">
            {category.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{category.description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}

export default function MusicCarousel() {
  // El carrusel de embla muta el DOM al inicializarse; renderizamos un fallback
  // estático idéntico hasta el montaje para evitar desajustes de hidratación.
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <div className="w-full max-w-6xl mx-auto overflow-hidden">
        <div className="flex gap-4">
          {orderedCategories.map((category) => (
            <div key={category.id} className="min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3">
              <MusicCard category={category} />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: true,
          stopOnMouseEnter: true,
        }),
      ]}
      className="w-full max-w-6xl mx-auto"
    >
      <CarouselContent>
        {orderedCategories.map((category) => (
          <CarouselItem key={category.id} className="sm:basis-1/2 lg:basis-1/3">
            <MusicCard category={category} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-accent border-accent hover:bg-accent hover:text-white" />
      <CarouselNext className="text-accent border-accent hover:bg-accent hover:text-white" />
    </Carousel>
  )
}
