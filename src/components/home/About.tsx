import Image from 'next/image';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-arabic text-4xl md:text-5xl font-bold text-primary mb-4">About Baitullah Travels</h2>
        </div>
        <Card className="overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h3 className="font-headline text-2xl font-semibold text-primary mb-4">Your Trusted Partner in Sacred Journeys</h3>
              <p className="text-muted-foreground mb-4">
                At Baitullah Travels, we are dedicated to providing pilgrims with an unparalleled experience for their Umrah and Hajj journeys. Our mission is to handle all the worldly logistics so you can focus entirely on the spiritual significance of your pilgrimage.
              </p>
              <p className="text-muted-foreground">
                With years of experience, a deep understanding of the holy sites, and a commitment to exceptional service, we ensure your journey is smooth, comfortable, and deeply meaningful. We believe that every pilgrim deserves a journey of a lifetime.
              </p>
            </div>
            <div className="relative h-64 md:h-full min-h-[300px]">
              <Image 
                src="https://picsum.photos/800/600"
                alt="Interior of a grand mosque"
                data-ai-hint="mosque interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
