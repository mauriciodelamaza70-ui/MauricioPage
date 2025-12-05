"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check scroll position on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = cn(
    'fixed top-0 z-50 w-full transition-all duration-300',
    isHome && !isScrolled ? 'bg-transparent' : 'bg-white shadow-md'
  );

  const linkClasses = cn(
      'font-medium transition-colors hover:text-accent',
      isHome && !isScrolled ? 'text-white' : 'text-foreground'
  );
  
  const mobileLinkClasses = cn(
    'text-lg font-medium transition-colors hover:text-accent',
    'text-foreground'
  );

  const logoSrc = isHome && !isScrolled ? "/images/logo-white.png" : "/images/Logo_color.png";
  const mobileLogoSrc = "/images/Logo_color.png";

  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logoSrc} alt="Terra Vision Logo" width={150} height={35} priority className={cn("h-auto transition-all duration-300 w-36")} />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                linkClasses,
                pathname === link.href ? 'text-accent' : ''
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn(isHome && !isScrolled ? 'text-white hover:bg-white/10' : 'text-foreground')}>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background">
              <div className="flex flex-col space-y-6 p-6">
                <Link href="/" className="flex items-center gap-2 self-start">
                   <Image src={mobileLogoSrc} alt="Terra Vision Logo" width={150} height={35} className="h-9 w-auto" />
                </Link>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <SheetClose key={link.href} asChild>
                      <Link
                        href={link.href}
                        className={cn(
                          mobileLinkClasses,
                           pathname === link.href ? 'text-accent' : 'text-foreground'
                        )}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
