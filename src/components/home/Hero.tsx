import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const heroSlides = [
  {
    title: 'Embark on a Sacred Journey',
    description: 'Experience the spiritual journey of a lifetime with our tailored Umrah and Hajj packages.',
    image: 'https://picsum.photos/1920/1080',
    aiHint: 'kaaba mecca',
    buttonLabel: 'Explore Packages',
    buttonLink: '#packages',
  },
  {
    title: 'Discover Our 5-Star Packages',
    description: 'Travel with comfort and peace of mind. Luxurious accommodations close to the Haram.',
    image: 'https://picsum.photos/1920/1081',
    aiHint: 'luxury hotel Mecca',
    buttonLabel: 'View 5-Star Deals',
    buttonLink: '#packages',
  },
  {
    title: 'Your Trusted Umrah Partner',
    description: 'Years of experience in providing seamless and meaningful pilgrimage journeys.',
    image: 'https://picsum.photos/1920/1082',
    aiHint: 'happy pilgrims',
    buttonLabel: 'About Us',
    buttonLink: '#about',
  },
]

const Hero = () => {
  return (
    <section id="home" className="relative w-full flex items-center justify-center text-primary-foreground -mt-16">
      <Carousel className="w-full" opts={{ loop: true }} autoplay-delay="5000">
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
                <div className="absolute inset-0 bg-primary/60" />
                <div className="relative z-10 text-center container px-4">
                  <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight mb-4 drop-shadow-md">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 drop-shadow-sm">
                    {slide.description}
                  </p>
                  <Link href={slide.buttonLink}>
                    <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                      {slide.buttonLabel}
                    </Button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 z-20 text-white" />
        <CarouselNext className="absolute right-4 z-20 text-white" />
      </Carousel>
    </section>
  );
};

export default Hero;
