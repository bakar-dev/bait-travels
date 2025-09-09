import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const packages = [
  {
    name: 'Economy Umrah Package',
    price: '$1,500',
    features: ['14 Days', '3 Star Hotel (650m from Haram)', 'Makkah & Madinah Stay', 'Group Transport', 'Guided Ziyarat'],
    image: 'https://picsum.photos/600/400',
    aiHint: 'pilgrims praying'
  },
  {
    name: '3-Star Umrah Package',
    price: '$1,950',
    features: ['12 Days', '3 Star Hotel (450m from Haram)', 'Breakfast Included', 'Private Transport', 'Dedicated Hajj Guide'],
    image: 'https://picsum.photos/600/401',
    aiHint: 'modern hotel Mecca'
  },
  {
    name: '4-Star Umrah Package',
    price: '$2,500',
    features: ['10 Days', '4 Star Hotel (250m from Haram)', 'Breakfast & Dinner', 'Private Luxury Transport', 'Exclusive Ziyarat'],
    image: 'https://picsum.photos/600/406',
    aiHint: 'hotel suite'
  },
  {
    name: '5-Star Umrah Package',
    price: '$3,200',
    features: ['10 Days', '5-Star Hotel with Kaaba View', 'Full Board', 'VIP Transport', 'Personal Guide'],
    image: 'https://picsum.photos/600/402',
    aiHint: 'luxury hotel Kaaba'
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
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
