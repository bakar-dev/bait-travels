import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] w-full flex items-center justify-center text-primary-foreground">
      <Image
        src="https://picsum.photos/1920/1080"
        alt="Kaaba in Mecca"
        data-ai-hint="kaaba mecca"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-primary/60" />
      <div className="relative z-10 text-center container px-4">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight mb-4 drop-shadow-md">
          Embark on a Sacred Journey
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 drop-shadow-sm">
          Experience the spiritual journey of a lifetime with our tailored Umrah and Hajj packages.
        </p>
        <Link href="#packages">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Explore Packages
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
