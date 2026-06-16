import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/common/PageHero";
import { posts } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RevistaPage() {
    const categories = ['Noticias', 'Artículos', 'Entrevistas'];

    return (
        <>
            <PageHero title="Revista" imageId="magazine-hero" objectPosition="object-top" />

            <div className="container mx-auto px-4 py-24">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Main content - posts */}
                    <div className="lg:col-span-8">
                        <div className="grid sm:grid-cols-2 gap-8">
                            {posts.map((post) => {
                                const postImage = PlaceHolderImages.find(p => p.id === post.imageId);
                                return (
                                <Card key={post.id} className="overflow-hidden group flex flex-col h-full bg-card">
                                    {postImage && (
                                    <div className="aspect-video overflow-hidden">
                                        <Image
                                            src={postImage.imageUrl}
                                            alt={post.title}
                                            width={600}
                                            height={400}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            data-ai-hint={postImage.imageHint}
                                        />
                                    </div>
                                    )}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs uppercase tracking-widest text-accent font-bold">{post.category}</span>
                                            <p className="text-xs text-muted-foreground">{post.date}</p>
                                        </div>
                                        <CardTitle className="font-headline text-xl mt-1 leading-snug">{post.title}</CardTitle>
                                        <p className="text-muted-foreground mt-4 text-sm line-clamp-3 flex-grow">{post.excerpt}</p>
                                        <Button asChild variant="link" className="text-accent p-0 h-auto mt-6 self-start text-sm font-bold uppercase tracking-wider">
                                            <Link href={`/revista/${post.slug}`}>Leer artículo completo <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                        </Button>
                                    </div>
                                </Card>
                                );
                            })}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 space-y-12">
                        {/* Search */}
                        <div className="p-8 bg-secondary rounded-xl border border-border/50">
                            <h3 className="font-headline text-2xl font-bold mb-6">Explorar</h3>
                            <div className="relative">
                                <Input placeholder="Buscar artículos..." className="pr-10 bg-background" />
                                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            </div>
                        </div>

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
                                {posts.slice(0, 4).map(post => (
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
                                        <Link href="#" className="flex items-center text-sm text-muted-foreground hover:text-accent transition-colors font-medium">
                                           <ArrowRight className="h-4 w-4 mr-2 text-accent"/> {category}
                                        </Link>
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
