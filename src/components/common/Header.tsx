"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Landmark, Menu, X, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#packages', label: 'Packages' },
  { href: '/#about', label: 'About' },
  { href: '/#blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
  { href: '/seo-tool', label: 'SEO Tool' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;
    const isHomeHashLink = href.startsWith('/#') && pathname === '/';
    
    // Special case for root home link
    const isCurrent = isHomeHashLink ? (href === '/#') : isActive;

    return (
      <Link href={href} passHref>
        <span
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            isCurrent ? "text-primary" : "text-foreground/80"
          )}
          onClick={() => setOpen(false)}
        >
          {label}
        </span>
      </Link>
    );
  };

  return (
    <header className={cn(
      "sticky top-0 z-40 w-full transition-all duration-300",
      isScrolled ? "bg-background/95 backdrop-blur-sm border-b" : "bg-transparent text-primary-foreground",
      pathname !== '/' && "bg-background/95 backdrop-blur-sm border-b text-foreground"
    )}>
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Landmark className={cn("h-6 w-6", (isScrolled || pathname !== '/') ? 'text-primary' : 'text-white' )}/>
          <span className={cn("font-bold text-lg", (isScrolled || pathname !== '/') ? 'text-foreground' : 'text-white')}>Baitullah Travels</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium flex-1">
          {navLinks.map((link) => <NavLink key={link.href} {...link} />)}
        </nav>
        <div className="hidden md:flex items-center justify-end space-x-2">
            <Link href="/umrah-enquiry">
                <Button>
                    <HelpCircle className="mr-2 h-4 w-4"/>
                    Umrah Enquiry
                </Button>
            </Link>
        </div>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 p-4">
                <Link href="/" className="mb-4 flex items-center space-x-2" onClick={() => setOpen(false)}>
                  <Landmark className="h-6 w-6 text-primary" />
                  <span className="font-bold">Baitullah Travels</span>
                </Link>
                {navLinks.map((link) => <NavLink key={link.href} {...link} />)}
                <Button asChild>
                    <Link href="/umrah-enquiry">Umrah Enquiry</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
