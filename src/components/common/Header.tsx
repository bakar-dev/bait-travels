"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Landmark, Menu, X, HelpCircle, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';

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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;
    return (
      <Link href={href} passHref>
        <span
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            isActive ? "text-primary" : "text-foreground/80",
          )}
          onClick={() => setOpen(false)}
        >
          {label}
        </span>
      </Link>
    );
  };
  
  const TopBar = () => (
    <div className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500 text-background shadow-md">
        <div className="container flex h-10 items-center justify-between text-xs">
            <div className="font-semibold text-emerald-900/80">Your Trusted Umrah & Hajj Partner</div>
            <div className="flex items-center gap-4 text-emerald-900">
                <a href="tel:+1-234-567-890" className="flex items-center gap-1 hover:underline">
                    <Phone size={14}/>
                    <span>+1 (234) 567-890</span>
                </a>
                 <a href="mailto:info@baitullahtravels.com" className="flex items-center gap-1 hover:underline">
                    <Mail size={14}/>
                    <span>info@baitullahtravels.com</span>
                </a>
            </div>
        </div>
    </div>
  )

  return (
    <header className={cn(
      "sticky top-0 z-40 w-full transition-all duration-300",
       "bg-background/95 backdrop-blur-sm border-b"
    )}>
       <TopBar />
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Landmark className={cn("h-6 w-6", 'text-primary' )}/>
          <span className={cn("font-bold text-lg", 'text-foreground')}>Baitullah Travels</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium flex-1">
          {navLinks.map((link) => <NavLink key={link.href} {...link} />)}
        </nav>
        <div className="hidden md:flex items-center justify-end space-x-4">
            <ThemeToggle />
            <div className="relative animated-border">
              <Link href="/umrah-enquiry">
                  <Button className="relative bg-emerald-100 dark:bg-emerald-900/80 hover:bg-emerald-200 dark:hover:bg-emerald-900 text-primary dark:text-primary-foreground">
                      <HelpCircle className="mr-2 h-4 w-4"/>
                      Umrah Enquiry
                  </Button>
              </Link>
            </div>
        </div>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" >
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
                <ThemeToggle />
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
