import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

type PageHeroProps = {
  title: string;
  imageId: string;
  objectPosition?: string;
  kicker?: string;
  children?: React.ReactNode;
};

export default function PageHero({ title, imageId, objectPosition = "object-center", kicker, children }: PageHeroProps) {
  const heroImage = PlaceHolderImages.find((p) => p.id === imageId);
  
  return (
    <section className="relative h-[400px] w-full text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={title}
          fill
          className={cn("object-cover", objectPosition)}
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="font-headline text-5xl md:text-7xl font-bold text-center">
          {kicker && (
            <span className="block mb-2 font-sans text-sm md:text-base font-medium uppercase tracking-[0.3em] opacity-80">
              {kicker}{' '}
            </span>
          )}
          {title}
        </h1>
        {children && <div className="mt-4 flex flex-col items-center">{children}</div>}
      </div>
    </section>
  );
}
