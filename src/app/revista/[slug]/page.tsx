'use client';

import { notFound, usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { posts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FacebookIcon, LinkedinIcon } from '@/components/icons';
import { siteConfig } from '@/lib/data';

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug);
  const pathname = usePathname();

  if (!post) {
    notFound();
  }

  const postImage = PlaceHolderImages.find((p) => p.id === post.imageId);
  const postUrl = `${siteConfig.url}${pathname}`;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.excerpt)}`,
  };

  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] w-full text-white">
        {postImage && (
            <Image
            src={postImage.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
            data-ai-hint={postImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center p-4">
            <h1 className="font-headline text-4xl md:text-6xl font-bold max-w-4xl">
            {post.title}
            </h1>
            <p className="mt-4 text-lg text-gray-300">
                Por: De la Maza Team / {post.date}
            </p>
        </div>
      </section>

      <article className="py-24">
        <div className="container mx-auto px-4">
            <div 
                className="prose prose-lg lg:prose-xl max-w-4xl mx-auto text-foreground/80"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="max-w-4xl mx-auto mt-16 border-t pt-8">
              <div className="flex items-center justify-between">
                <h3 className="font-headline text-2xl font-bold">Compartir</h3>
                <div className="flex gap-4">
                  <Link href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600">
                    <FacebookIcon className="h-8 w-8" />
                  </Link>
                  <Link href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700">
                    <LinkedinIcon className="h-8 w-8" />
                  </Link>
                </div>
              </div>
            </div>
        </div>
      </article>
    </>
  );
}