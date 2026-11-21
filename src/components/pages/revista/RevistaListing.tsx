
'use client';

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/common/PageHero";
import { postsMeta } from "@/lib/data/posts-meta";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { postsAcademic } from "@/lib/data/posts-academic";
import type { PostMeta } from "@/lib/types";
import { CONFINIUM_HOME } from "@/lib/revista-seo";

const normalize = (text: string) =>
    text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

const searchIndex = new Map(
    postsMeta.map(post => {
        const academic = postsAcademic[post.slug];
        const fields = [
            post.title,
            post.excerpt,
            post.author,
            academic?.abstractEs,
            academic?.abstractEn,
            ...(academic?.keywordsEs ?? []),
            ...(academic?.keywordsEn ?? []),
        ];
        return [post.slug, normalize(fields.filter(Boolean).join(" "))];
    }),
);

function PostCard({ post }: { post: PostMeta }) {
                                    const postImage = PlaceHolderImages.find(p => p.id === post.imageId);
                                    return (
                                    <Card className="overflow-hidden group flex flex-col h-full bg-card">
                                        {postImage && (
                                        <div className={`aspect-video overflow-hidden ${post.imageFit === 'contain' ? 'bg-secondary' : ''}`}>
                                            <Image
                                                src={postImage.imageUrl}
                                                alt={postImage.description || post.title}
                                                width={600}
                                                height={400}
                                                className={`w-full h-full ${post.imageFit === 'contain' ? 'object-contain' : 'object-cover'} group-hover:scale-105 transition-transform duration-300`}
                                                data-ai-hint={postImage.imageHint}
                                            />
                                        </div>
                                        )}
                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-xs uppercase tracking-widest text-accent font-bold">{post.category}</span>
                                                <p className="text-xs text-muted-foreground">
                                                    {post.date}
                                                    {post.volume && post.number && (
                                                        <span> · Vol. {post.volume}, núm. {post.number}</span>
                                                    )}
                                                </p>
                                            </div>
                                            {post.author && (
                                                <p className="text-xs tracking-widest text-accent font-bold">Por: {post.author}</p>
                                            )}
                                            <CardTitle className="font-headline text-xl mt-1 leading-snug">{post.title}</CardTitle>
                                            <p className="text-muted-foreground mt-4 text-sm line-clamp-3 flex-grow">{post.excerpt}</p>
                                            <Button asChild variant="link" className="text-accent p-0 h-auto mt-6 self-start text-sm font-bold uppercase tracking-wider">
                                                <Link href={`/revista/${post.slug}`}>Leer artículo completo <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                            </Button>
                                        </div>
                                    </Card>
                                    );
}

export default function RevistaListing() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const categories = ['Noticias', 'Artículos', 'Entrevistas'];

    const filteredPosts = useMemo(() => {
        const query = normalize(searchQuery.trim());
        return postsMeta.filter(post => {
            const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
            const matchesSearch = query === '' || searchIndex.get(post.slug)?.includes(query);
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    const numberedPosts = filteredPosts.filter((post) => post.number);
    const archivePosts = filteredPosts.filter((post) => !post.number);

    const handleCategoryClick = (category: string) => {
        if (selectedCategory === category) {
            setSelectedCategory(null); // Deseleccionar si se hace clic de nuevo
        } else {
            setSelectedCategory(category);
        }
    };

    return (
        <>
            <PageHero kicker="Revista" title="Confinium" imageId="magazine-hero" objectPosition="object-top">
                <p className="font-headline text-xl md:text-2xl text-balance">
                    Ensayos en la frontera
                    <span lang="en" className="block mt-1 text-base md:text-lg italic opacity-80">Essays at the Borders</span>
                </p>
                <div className="mt-6 max-w-2xl text-xs md:text-sm leading-relaxed opacity-70 text-pretty">
                    <p>
                        <em>Confinium</em>: en latín, el lugar donde dos territorios se tocan; en el derecho romano, la franja de tierra entre dos predios.
                    </p>
                    <p lang="en" className="mt-1 italic">
                        <em>Confinium</em>: in Latin, the place where two territories meet; in Roman law, the strip of land between two estates.
                    </p>
                </div>
                <a
                    href={CONFINIUM_HOME}
                    className="mt-4 text-xs md:text-sm tracking-wider opacity-80 underline-offset-4 hover:underline hover:opacity-100"
                >
                    Portada de la revista →{' '}
                    <span lang="en" className="italic">/ Magazine home →</span>
                </a>
            </PageHero>

            <div className="container mx-auto px-4 py-24">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Main content - posts */}
                    <div className="lg:col-span-8">
                        <div className="relative mb-8">
                            <label htmlFor="revista-search" className="sr-only">Buscar en Confinium</label>
                            <Input
                                id="revista-search"
                                type="search"
                                placeholder="Buscar en Confinium…"
                                className="h-12 pr-10 bg-background text-base"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                suppressHydrationWarning
                            />
                            <Search aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                            <h2 className="font-headline text-3xl font-bold">
                                {selectedCategory ? `Categoría: ${selectedCategory}` : 'Todas las publicaciones'}
                                <span className="text-muted-foreground text-lg ml-2 font-normal">({filteredPosts.length})</span>
                            </h2>
                            {selectedCategory && (
                                <Button 
                                    variant="ghost" 
                                    size="sm" 
                                    onClick={() => setSelectedCategory(null)}
                                    className="text-accent hover:text-accent/80"
                                >
                                    <X className="mr-2 h-4 w-4" /> Limpiar filtro
                                </Button>
                            )}
                        </div>

                        {filteredPosts.length > 0 ? (
                            <>
                                {numberedPosts.length > 0 && (
                                    <div className="grid sm:grid-cols-2 gap-8">
                                        {numberedPosts.map((post) => <PostCard key={post.id} post={post} />)}
                                    </div>
                                )}
                                {archivePosts.length > 0 && (
                                    <section aria-labelledby="revista-archivo" className={numberedPosts.length > 0 ? "mt-20" : undefined}>
                                        <h2 id="revista-archivo" className="font-headline text-2xl font-bold mb-8 pb-4 border-b">
                                            Archivo (2021–2022){' '}
                                            <span lang="en" className="text-muted-foreground text-lg font-normal italic">/ Archive (2021–2022)</span>
                                        </h2>
                                        <div className="grid sm:grid-cols-2 gap-8">
                                            {archivePosts.map((post) => <PostCard key={post.id} post={post} />)}
                                        </div>
                                    </section>
                                )}
                            </>
                        ) : (
                            <div className="text-center py-20 bg-secondary rounded-xl">
                                <p className="text-xl text-muted-foreground">No se encontraron publicaciones</p>
                                <Button 
                                    variant="outline" 
                                    className="mt-4 border-accent text-accent"
                                    onClick={() => {
                                        setSelectedCategory(null);
                                        setSearchQuery("");
                                    }}
                                >
                                    Ver todas las publicaciones
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 space-y-12">
                         {/* Collaborators Link */}
                        <div className="p-8 bg-secondary rounded-xl border border-border/50">
                            <h3 className="font-headline text-2xl font-bold mb-6">Colaboradores</h3>
                            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">Conoce a los expertos y autores que dan vida a nuestra revista con sus conocimientos.</p>
                            <Button asChild className="w-full bg-accent hover:bg-accent/90 text-primary-foreground font-bold">
                                <Link href="/revista/colaboradores">
                                    <Users className="mr-2 h-4 w-4" /> Ver Perfiles
                                </Link>
                            </Button>
                        </div>

                        {/* Recent Posts Sidebar */}
                        <div className="p-8 bg-secondary rounded-xl border border-border/50">
                            <h3 className="font-headline text-2xl font-bold mb-6">Lo más reciente</h3>
                            <ul className="space-y-6">
                                {postsMeta.slice(0, 4).map(post => (
                                    <li key={post.id} className="group">
                                        <Link href={`/revista/${post.slug}`} className="block">
                                            <h4 className="font-bold text-sm group-hover:text-accent transition-colors leading-tight mb-1">{post.title}</h4>
                                            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{post.date}</p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Categories */}
                        <div className="p-8 bg-secondary rounded-xl border border-border/50">
                            <h3 className="font-headline text-2xl font-bold mb-6">Categorías</h3>
                            <ul className="space-y-3">
                                {categories.map(category => (
                                     <li key={category}>
                                        <button 
                                            onClick={() => handleCategoryClick(category)}
                                            className={cn(
                                                "flex items-center text-sm transition-colors font-medium w-full text-left",
                                                selectedCategory === category ? "text-accent" : "text-muted-foreground hover:text-accent"
                                            )}
                                        >
                                           <ArrowRight className={cn("h-4 w-4 mr-2", selectedCategory === category ? "text-accent" : "text-accent/40")}/> {category}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}
