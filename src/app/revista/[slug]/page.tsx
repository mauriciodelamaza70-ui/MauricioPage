import { notFound } from 'next/navigation';
import Image from 'next/image';
import { posts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const postImage = PlaceHolderImages.find((p) => p.id === post.imageId);

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
            <p className="mt-4 text-lg text-gray-300">{post.date}</p>
        </div>
      </section>

      <article className="py-24">
        <div className="container mx-auto px-4">
            <div 
                className="prose prose-lg lg:prose-xl max-w-4xl mx-auto text-foreground/80"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </div>
      </article>
    </>
  );
}
