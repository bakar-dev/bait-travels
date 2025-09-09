
"use client"

import * as React from "react"
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { PACKAGE_IMAGES } from "@/lib/packages-data";

const heroSlides = [
  {
    title: 'Embark on a Sacred Journey',
    description: 'Experience the spiritual journey of a lifetime with our tailored Umrah and Hajj packages.',
    image:  PACKAGE_IMAGES[3],
    aiHint: 'kaaba makkah',
    buttonLabel: 'Explore Packages',
    buttonLink: '#packages',
  },
  {
    title: 'Discover Our 5-Star Packages',
    description: 'Travel with comfort and peace of mind. Luxurious accommodations close to the Haram.',
    image:  PACKAGE_IMAGES[16],
    aiHint: 'madinah mosque',
    buttonLabel: 'View 5-Star Deals',
    buttonLink: '#packages',
  },
  {
    title: 'Your Trusted Umrah Partner',
    description: 'Years of experience in providing seamless and meaningful pilgrimage journeys.',
    image:  PACKAGE_IMAGES[12],
    aiHint: 'pilgrims praying',
    buttonLabel: 'About Us',
    buttonLink: '#about',
  },
]

const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: false })
  )

  return (
    <section id="home" className="relative w-full flex items-center justify-center text-primary-foreground -mt-26">
       <Carousel
        className="w-full"
        plugins={[plugin.current]}
        opts={{ loop: true }}
      >
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[80vh] min-h-[500px] w-full flex items-center justify-center">
                 <Image
                    src={slide.image}
                    alt={slide.title}
                    data-ai-hint={slide.aiHint}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-yellow-900/40" />
                <div className="relative z-10 text-center container px-4">
                  <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight mb-4 drop-shadow-md">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 drop-shadow-sm">
                    {slide.description}
                  </p>
                  <Link href={slide.buttonLink}>
                    <Button size="lg" className="text-white bg-gradient-to-r from-green-700 to-green-500 hover:from-green-600 hover:to-green-400 dark:from-amber-500 dark:to-yellow-400 dark:hover:from-amber-400 dark:hover:to-yellow-300 dark:text-emerald-900">
                      {slide.buttonLabel}
                    </Button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 z-20 text-white hidden sm:flex" />
        <CarouselNext className="absolute right-4 z-20 text-white hidden sm:flex" />
      </Carousel>
    </section>
  );
};

export default Hero;
