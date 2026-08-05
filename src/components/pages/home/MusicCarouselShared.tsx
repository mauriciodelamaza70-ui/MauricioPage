import Image from "next/image"
import Link from "next/link"

import { musicCategories } from "@/lib/data"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

// Orden de las primeras tarjetas visibles al cargar; el resto sigue en el orden del catálogo.
const FEATURED_ORDER = ["lidia", "sigilo-locus", "post-punk"]

export const orderedMusicCategories = [
  ...FEATURED_ORDER.map((id) => musicCategories.find((c) => c.id === id)).filter(
    (c): c is (typeof musicCategories)[number] => Boolean(c),
  ),
  ...musicCategories.filter((c) => !FEATURED_ORDER.includes(c.id)),
]

// Tarjeta reutilizada por el carrusel interactivo y por el fallback estático.
export function MusicCard({ category }: { category: (typeof musicCategories)[number] }) {
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
