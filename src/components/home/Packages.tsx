import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const packages = [
  {
    name: 'Economy Umrah Package',
    price: '$1,500',
    features: ['14 Days', 'Makkah & Madinah Stay', 'Economy Hotels', 'Group Transport'],
    image: 'https://picsum.photos/600/400',
    aiHint: 'pilgrims praying'
  },
  {
    name: 'Premium Umrah Package',
    price: '$2,800',
    features: ['10 Days', '5-Star Hotels near Haram', 'Private Transport', 'Guided Ziyarat'],
    image: 'https://picsum.photos/600/401',
    aiHint: 'luxury hotel Mecca'
  },
  {
    name: 'Hajj Deluxe Package',
    price: '$8,500',
    features: ['21 Days', 'Proximity to Jamarat', 'All Meals Included', 'Dedicated Hajj Guide'],
    image: 'https://picsum.photos/600/402',
    aiHint: 'crowd Hajj'
  },
];

const Packages = () => {
  return (
    <section id="packages" className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-arabic text-4xl md:text-5xl font-bold text-primary mb-4">Our Exclusive Packages</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from a range of packages designed to cater to your needs, ensuring a comfortable and spiritually fulfilling journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.name} className="flex flex-col overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-lg">
              <CardHeader className="p-0">
                <div className="relative h-56 w-full">
                  <Image src={pkg.image} alt={pkg.name} data-ai-hint={pkg.aiHint} fill className="object-cover" />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="mb-4 text-xl font-headline text-primary">{pkg.name}</CardTitle>
                <ul className="space-y-3 text-muted-foreground">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 bg-secondary/50 flex justify-between items-center">
                <p className="text-2xl font-bold text-primary">{pkg.price}</p>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Book Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
