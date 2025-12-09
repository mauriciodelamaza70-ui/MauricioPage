import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/common/PageHero";
import { posts } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RevistaPage() {
    const categories = [...new Set(posts.map(p => p.category))];

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
                                <Card key={post.id} className="overflow-hidden group flex flex-col">
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
                                        <p className="text-sm text-muted-foreground">{post.date}</p>
                                        <CardTitle className="font-headline text-xl mt-1">{post.title}</CardTitle>
                                        <p className="text-muted-foreground mt-2 flex-grow">{post.excerpt}</p>
                                        <Button asChild variant="link" className="text-accent p-0 h-auto mt-4 self-start">
                                            <Link href={`/revista/${post.slug}`}>Leer más <ArrowRight className="ml-2 h-5 w-5" /></Link>
                                        </Button>
                                    </div>
                                </Card>
                                );
                            })}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 space-y-8">
                        {/* Search */}
                        <div className="p-6 bg-secondary rounded-lg">
                            <h3 className="font-headline text-xl font-semibold mb-4">Buscar</h3>
                            <div className="relative">
                                <Input placeholder="Escribe aquí..." className="pr-10" />
                                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            </div>
                        </div>

                        {/* Recent Posts */}
                        <div className="p-6 bg-secondary rounded-lg">
                            <h3 className="font-headline text-xl font-semibold mb-4">Artículos Recientes</h3>
                            <ul className="space-y-4">
                                {posts.slice(0, 3).map(post => (
                                    <li key={post.id}>
                                        <Link href={`/revista/${post.slug}`} className="font-semibold hover:text-accent transition-colors">{post.title}</Link>
                                        <p className="text-sm text-muted-foreground">{post.date}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Categories */}
                        <div className="p-6 bg-secondary rounded-lg">
                            <h3 className="font-headline text-xl font-semibold mb-4">Categorías</h3>
                            <ul className="space-y-2">
                                {categories.map(category => (
                                     <li key={category}>
                                        <Link href="#" className="flex items-center text-muted-foreground hover:text-accent transition-colors">
                                           <ArrowRight className="h-4 w-4 mr-2"/> {category}
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
