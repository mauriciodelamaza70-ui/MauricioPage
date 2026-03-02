'use client';

import PageHero from "@/components/common/PageHero";
import GalleryGrid from "@/components/pages/gallery/GalleryGrid";
import VideoGrid from "@/components/pages/gallery/VideoGrid";
import { galleryImages, videoGallery, featuredMovies } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Film, Image as ImageIcon, Award, Globe, ExternalLink, Clapperboard } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GaleriasPage() {
  return (
    <>
      <PageHero title="Galerías" imageId="gallery-prologo-3" objectPosition="object-[center_40%]" />
      
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Explora Nuestro Mundo Visual</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Una selección de momentos capturados a través de nuestro lente, desde la majestuosidad de la vida silvestre hasta la emoción detrás de cámaras.
            </p>
        </div>

        <Tabs defaultValue="peliculas" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto h-12">
            <TabsTrigger value="peliculas" className="h-10 text-base">
              <Clapperboard className="mr-2 h-5 w-5" />
              Películas
            </TabsTrigger>
            <TabsTrigger value="videos" className="h-10 text-base">
              <Film className="mr-2 h-5 w-5" />
              Videos
            </TabsTrigger>
            <TabsTrigger value="images" className="h-10 text-base">
              <ImageIcon className="mr-2 h-5 w-5" />
              Imágenes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="peliculas" className="mt-16">
             <div className="space-y-32">
                {featuredMovies.map((movie, index) => (
                  <div 
                    key={movie.id} 
                    className={`grid lg:grid-cols-12 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                  >
                    {/* Poster Image */}
                    <div className={`lg:col-span-5 relative aspect-[2/3] max-w-md mx-auto lg:mx-0 w-full rounded-xl overflow-hidden shadow-2xl group ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                      <Link href={`https://${movie.website}`} target="_blank" rel="noopener noreferrer">
                        <Image 
                          src={movie.poster} 
                          alt={movie.title} 
                          fill 
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                          <p className="text-white text-lg font-bold">{movie.title} ({movie.year})</p>
                        </div>
                      </Link>
                    </div>

                    {/* Movie Details */}
                    <div className="lg:col-span-7 space-y-8">
                      <div>
                        <h3 className="font-headline text-4xl font-bold text-foreground leading-tight mb-2">
                          {movie.title} ({movie.year})
                        </h3>
                        <p className="text-accent font-bold uppercase tracking-widest text-sm mb-2">
                          {movie.genre} • {movie.format}
                        </p>
                        {movie.subtitle && (
                          <p className="text-muted-foreground italic text-lg">{movie.subtitle}</p>
                        )}
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-bold text-xl border-l-4 border-accent pl-4">Sinopsis</h4>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {movie.synopsis}
                        </p>
                      </div>

                      <div className="bg-secondary p-6 rounded-xl border border-border">
                        <div className="flex items-center gap-3 mb-4">
                          <Award className="h-6 w-6 text-accent" />
                          <h4 className="font-bold text-lg">Reconocimientos y Premios</h4>
                        </div>
                        <p className="text-muted-foreground leading-relaxed italic">
                          {movie.awards}
                        </p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-bold mb-3 flex items-center gap-2">
                            <Globe className="h-5 w-5 text-accent" />
                            Dónde verla
                          </h4>
                          <p className="text-muted-foreground">{movie.streaming}</p>
                        </div>
                        <div>
                          <h4 className="font-bold mb-3 flex items-center gap-2">
                            <ExternalLink className="h-5 w-5 text-accent" />
                            Enlaces oficiales
                          </h4>
                          <div className="flex flex-wrap gap-4">
                            <Button asChild variant="link" className="p-0 h-auto text-accent">
                              <Link href={`https://${movie.website}`} target="_blank" rel="noopener noreferrer">Sitio Web</Link>
                            </Button>
                            <Button asChild variant="link" className="p-0 h-auto text-accent">
                              <Link href={movie.imdb} target="_blank" rel="noopener noreferrer">IMDb</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          </TabsContent>

          <TabsContent value="videos" className="mt-12">
            <VideoGrid videos={videoGallery} />
          </TabsContent>
          <TabsContent value="images" className="mt-12">
            <GalleryGrid images={galleryImages} />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
