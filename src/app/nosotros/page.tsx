import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { biography, featuredMovies } from '@/lib/data';
import { Music, Film, Leaf, Zap, Microscope, Award } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

export default function NosotrosPage() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'nosotros-hero');
  const bioIntroImage = PlaceHolderImages.find((p) => p.id === 'bio-intro');
  const scienceImage = PlaceHolderImages.find((p) => p.id === 'science-mauricio');
  const scienceImage2 = PlaceHolderImages.find((p) => p.id === 'blog-honoris-causa-cover');
  const mauricioPortrait = PlaceHolderImages.find((p) => p.id === 'mauricio-portrait-science');
  const fishImage = PlaceHolderImages.find((p) => p.id === 'gallery-new-6');
  const colibriImage = PlaceHolderImages.find((p) => p.id === 'service-digital');
  const filmingImage = PlaceHolderImages.find((p) => p.id === 'gallery-new-5');
  const architectureBg = PlaceHolderImages.find((p) => p.id === 'hero-dialogos-2');

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Mauricio De la Maza-Benignos"
            fill
            className="object-cover object-top"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center p-4">
          <p className="text-accent text-xl md:text-2xl tracking-[0.4em] uppercase mb-4 font-medium animate-in fade-in slide-in-from-bottom-4 duration-700">
            {biography.role}
          </p>
          <h1 className="font-headline text-5xl md:text-8xl font-bold animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Mauricio de la Maza
          </h1>
        </div>
      </section>

      {/* Biography Intro Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                {bioIntroImage && (
                    <div className="relative aspect-square">
                         <Image
                            src={bioIntroImage.imageUrl}
                            alt="Mauricio de la Maza"
                            fill
                            className="object-cover object-center rounded-lg shadow-2xl"
                            data-ai-hint={bioIntroImage.imageHint}
                         />
                         <div className="absolute -bottom-8 -right-8 bg-accent text-primary-foreground p-8 rounded-lg hidden lg:block shadow-xl">
                            <p className="font-headline text-2xl italic">"Las imágenes no solo narran: interrogan."</p>
                         </div>
                    </div>
                )}
                <div className="space-y-6">
                    <h2 className="font-headline text-4xl font-bold text-foreground">Inquietud Esencial</h2>
                    <p className="text-xl text-muted-foreground leading-relaxed italic">
                        {biography.intro}
                    </p>
                    <div className="space-y-4 text-muted-foreground text-lg">
                        {biography.content.map((p, i) => (
                            <p key={i} className="whitespace-pre-line">{p.text}</p>
                        ))}
                    </div>
                    <div className="pt-6">
                        <Image src="/images/FirmaNegro-1.png" alt="Firma de Mauricio De la Maza" width={220} height={100} />
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Fiction Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <Film className="h-10 w-10 text-accent" />
                    <h2 className="font-headline text-4xl font-bold">{biography.fiction.title}</h2>
                </div>
                
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-8 mb-16">
                    <p className="text-xl font-medium text-foreground">{biography.fiction.text}</p>
                    <p>{biography.fiction.details}</p>
                    <div className="bg-background p-8 rounded-xl shadow-sm border-l-4 border-accent">
                        <p className="mb-0 italic">{biography.fiction.awards}</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* Tarjetas de cine de ficción desde featuredMovies */}
                  {featuredMovies.map((movie) => (
                    <Card key={movie.id} className="bg-background border-none shadow-none group">
                      <CardContent className="p-0 space-y-4">
                        <Link href={`https://${movie.website}`} target="_blank" rel="noopener noreferrer" className="block">
                          <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                            <Image src={movie.poster} alt={movie.title} fill className="object-cover" />
                          </div>
                        </Link>
                        <h3 className="font-headline text-2xl font-bold text-foreground">{movie.title} ({movie.year})</h3>
                        <p className="text-sm text-accent uppercase font-bold tracking-widest">{movie.genre}</p>
                        <p className="text-muted-foreground text-sm line-clamp-3 italic">"{movie.synopsis}"</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
            </div>
        </div>
      </section>

      {/* Documentary Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <Leaf className="h-10 w-10 text-accent" />
                    <h2 className="font-headline text-4xl font-bold">{biography.documentary.title}</h2>
                </div>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p className="text-xl leading-relaxed">{biography.documentary.text}</p>
                </div>
            </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <Music className="h-10 w-10 text-accent" />
                    <h2 className="font-headline text-4xl font-bold">{biography.music.title}</h2>
                </div>
                <div className="space-y-8 text-gray-300">
                    <p className="text-2xl font-light italic text-accent">{biography.music.concept}</p>
                    <p className="text-xl">{biography.music.text}</p>
                    <p className="text-lg leading-relaxed">{biography.music.details}</p>
                    <p className="text-lg opacity-80">{biography.music.recognition}</p>
                    
                    <div className="pt-8 border-t border-gray-800">
                        <p className="text-sm uppercase tracking-widest text-accent mb-6">Disponible en plataformas</p>
                        <p className="text-lg">{biography.music.platforms}</p>
                        <div className="flex flex-wrap gap-6 mt-8">
                            <span className="px-6 py-2 border border-gray-700 rounded-full hover:border-accent transition-colors cursor-default">Spotify</span>
                            <span className="px-6 py-2 border border-gray-700 rounded-full hover:border-accent transition-colors cursor-default">Apple Music</span>
                            <span className="px-6 py-2 border border-gray-700 rounded-full hover:border-accent transition-colors cursor-default">Bandcamp</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Science Section - MOSAIC GALLERY */}
      <section className="py-24 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    {/* Text Column */}
                    <div className="lg:col-span-6 space-y-8">
                        <div className="flex items-center gap-4 mb-4">
                            <Microscope className="h-10 w-10 text-accent" />
                            <h2 className="font-headline text-4xl md:text-5xl font-bold">{biography.science.title}</h2>
                        </div>
                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                            <p className="text-xl font-medium text-foreground border-l-4 border-accent pl-6">
                                {biography.science.intro}
                            </p>
                            {biography.science.details.map((text, index) => (
                                <p key={index}>{text}</p>
                            ))}
                        </div>
                    </div>

                    {/* Image Mosaic Column */}
                    <div className="lg:col-span-6 relative">
                        <div className="grid grid-cols-2 gap-4">
                            {/* Left Column */}
                            <div className="col-span-1 space-y-4">
                                {scienceImage && (
                                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                                        <Image
                                            src={scienceImage.imageUrl}
                                            alt={scienceImage.description}
                                            fill
                                            className="object-cover object-center"
                                            data-ai-hint={scienceImage.imageHint}
                                        />
                                    </div>
                                )}
                                {mauricioPortrait && (
                                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
                                        <Image
                                            src={mauricioPortrait.imageUrl}
                                            alt={mauricioPortrait.description}
                                            fill
                                            className="object-cover"
                                            data-ai-hint={mauricioPortrait.imageHint}
                                        />
                                    </div>
                                )}
                                {filmingImage && (
                                    <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-500">
                                        <Image
                                            src={filmingImage.imageUrl}
                                            alt={filmingImage.description}
                                            fill
                                            className="object-cover"
                                            data-ai-hint={filmingImage.imageHint}
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Right Column */}
                            <div className="col-span-1 space-y-4 pt-12">
                                {colibriImage && (
                                    <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
                                        <Image
                                            src={colibriImage.imageUrl}
                                            alt={colibriImage.description}
                                            fill
                                            className="object-cover"
                                            data-ai-hint={colibriImage.imageHint}
                                        />
                                    </div>
                                )}
                                {fishImage && (
                                    <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
                                        <Image
                                            src={fishImage.imageUrl}
                                            alt={fishImage.description}
                                            fill
                                            className="object-cover"
                                            data-ai-hint={fishImage.imageHint}
                                        />
                                    </div>
                                )}
                                {scienceImage2 && (
                                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                                        <Image
                                            src={scienceImage2.imageUrl}
                                            alt={scienceImage2.description}
                                            fill
                                            className="object-cover"
                                            data-ai-hint={scienceImage2.imageHint}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Architecture Section - Redesigned for Aesthetics */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        {architectureBg && (
          <div className="absolute inset-0 opacity-40">
            <Image
              src={architectureBg.imageUrl}
              alt="Arquitectura unificada"
              fill
              className="object-cover"
              data-ai-hint={architectureBg.imageHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
          </div>
        )}
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-12 items-center min-h-[400px]">
            {/* Minimalist Vertical-inspired Title */}
            <div className="md:col-span-4 border-l border-accent/40 pl-8 py-4">
              <span className="text-accent text-xs tracking-[0.5em] uppercase block mb-4 font-medium">Concepto</span>
              <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                {biography.architecture.title.split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h2>
            </div>
            
            {/* Descriptive Text & Conclusion with high spacing */}
            <div className="md:col-start-6 md:col-span-6 space-y-16">
              <p className="text-sm md:text-lg font-light leading-[1.8] text-gray-300 max-w-lg border-b border-gray-800 pb-16 tracking-wide">
                {biography.architecture.text}
              </p>
              <div className="animate-in fade-in slide-in-from-right-8 duration-1000">
                <p className="font-headline text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-wide leading-snug">
                  {biography.architecture.conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
