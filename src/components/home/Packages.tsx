import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Hotel, Check } from 'lucide-react';
import Link from 'next/link';

const packagesData = {
  '5-star': [
    {
      name: '7-Day Platinum Umrah',
      slug: '7-day-platinum-umrah',
      price: '$2,800',
      makkahHotel: 'Raffles Makkah Palace',
      madinaHotel: 'The Oberoi Madina',
      features: ['Full Board', 'VIP Transport', 'Personal Guide', 'Exclusive Ziyarat'],
      image: 'https://picsum.photos/600/401',
      aiHint: 'luxury hotel Kaaba',
    },
    {
      name: '10-Day Luxury Umrah',
      slug: '10-day-luxury-umrah',
      price: '$3,200',
      makkahHotel: '5-Star Hotel with Kaaba View',
      madinaHotel: '5-Star Hotel near Prophet\'s Mosque',
      features: ['Full Board', 'VIP Transport', 'Personal Guide', 'Exclusive Ziyarat'],
      image: 'https://picsum.photos/600/402',
      aiHint: 'hotel suite luxury',
    },
    {
      name: '12-Day Premium Umrah',
      slug: '12-day-premium-umrah',
      price: '$3,800',
      makkahHotel: 'Clock Tower Complex Hotel',
      madinaHotel: 'Anwar Al Madinah Mövenpick',
      features: ['Full Board', 'Private Airport Transfer', 'Dedicated Concierge', 'Historical Tours'],
      image: 'https://picsum.photos/600/407',
      aiHint: 'hotel lobby luxury',
    },
     {
      name: '15-Day Royal Umrah',
      slug: '15-day-royal-umrah',
      price: '$4,500',
      makkahHotel: 'Jabal Omar Hyatt Regency',
      madinaHotel: 'Pullman Zamzam Madina',
      features: ['All Inclusive', 'Business Class Flights', 'Helicopter Tour', '24/7 Butler Service'],
      image: 'https://picsum.photos/600/408',
      aiHint: 'luxury suite balcony'
    },
  ],
  '4-star': [
    {
       name: '7-Day Gold Umrah',
      slug: '7-day-gold-umrah',
      price: '$2,100',
      makkahHotel: 'Makkah Hotel & Towers',
      madinaHotel: 'Madinah Hilton',
      features: ['Breakfast & Dinner', 'Private Transport', 'Guided Ziyarat', 'Visa Processing'],
      image: 'https://picsum.photos/600/409',
      aiHint: 'modern hotel room'
    },
    {
      name: '10-Day Deluxe Umrah',
      slug: '10-day-deluxe-umrah',
      price: '$2,500',
      makkahHotel: '4-Star Hotel (250m from Haram)',
      madinaHotel: '4-Star Hotel (200m from Masjid Nabawi)',
      features: ['Breakfast & Dinner', 'Private Luxury Transport', 'Exclusive Ziyarat', 'Umrah Kit'],
      image: 'https://picsum.photos/600/406',
      aiHint: 'hotel suite',
    },
     {
      name: '12-Day Comfort Umrah',
      slug: '12-day-comfort-umrah',
      price: '$2,900',
      makkahHotel: 'Swissôtel Al Maqam Makkah',
      madinaHotel: 'Shaza Al Madina',
      features: ['Daily Breakfast Buffet', 'Private Transport', 'Guided Ziyarat', 'Visa Processing'],
      image: 'https://picsum.photos/600/410',
      aiHint: 'comfortable hotel room'
    },
    {
      name: '14-Day Executive Umrah',
      slug: '14-day-executive-umrah',
      price: '$3,100',
      makkahHotel: 'Mövenpick Hotel & Residences Hajar Tower Makkah',
      madinaHotel: 'Dar Al Hijra InterContinental',
      features: ['Breakfast & Dinner', 'Upgraded Transport', 'Personalized Ziyarat', 'Fast-Track Visa'],
      image: 'https://picsum.photos/600/411',
      aiHint: 'executive hotel lounge'
    },
  ],
   '3-star': [
    {
      name: '7-Day Value Umrah',
      slug: '7-day-value-umrah',
      price: '$1,600',
      makkahHotel: '3-Star Hotel (400m from Haram)',
      madinaHotel: '3-Star Hotel (250m from Masjid Nabawi)',
      features: ['Breakfast Included', 'Group Transport', 'Guided Ziyarat', 'Visa Assistance'],
      image: 'https://picsum.photos/600/412',
      aiHint: 'clean hotel room'
    },
    {
      name: '10-Day Standard Umrah',
      slug: '10-day-standard-umrah',
      price: '$1,950',
      makkahHotel: '3-Star Hotel (450m from Haram)',
      madinaHotel: '3-Star Hotel (300m from Masjid Nabawi)',
      features: ['Breakfast Included', 'Private Transport', 'Dedicated Guide', 'Group Ziyarat'],
      image: 'https://picsum.photos/600/401',
      aiHint: 'modern hotel Mecca',
    },
    {
      name: '12-Day Classic Umrah',
      slug: '12-day-classic-umrah',
      price: '$2,200',
      makkahHotel: 'Al Ebaa Hotel',
      madinaHotel: 'Elaf Al Bustan Hotel',
      features: ['Breakfast Included', 'Group Transport', 'Guided Ziyarat', 'Umrah Seminars'],
      image: 'https://picsum.photos/600/413',
      aiHint: 'simple hotel room'
    },
    {
      name: '15-Day Extended Umrah',
      slug: '15-day-extended-umrah',
      price: '$2,500',
      makkahHotel: 'Nawazi Watheer Hotel',
      madinaHotel: 'Al Nokhba Royal Inn',
      features: ['Breakfast Included', 'Shared Transport', 'Full Ziyarat Program', 'Spiritual Guidance'],
      image: 'https://picsum.photos/600/414',
      aiHint: 'pilgrims walking'
    },
  ],
  'economy': [
    {
      name: '10-Day Budget Umrah',
      slug: '10-day-budget-umrah',
      price: '$1,350',
      makkahHotel: 'Hotel (700m from Haram)',
      madinaHotel: 'Hotel (550m from Masjid Nabawi)',
      features: ['Room Only', 'Group Transport', 'Guided Ziyarat', 'Affordable Accommodation'],
      image: 'https://picsum.photos/600/415',
      aiHint: 'group pilgrims'
    },
    {
      name: '14-Day Economy Umrah',
      slug: '14-day-economy-umrah',
      price: '$1,500',
      makkahHotel: 'Hotel (650m from Haram)',
      madinaHotel: 'Hotel (500m from Masjid Nabawi)',
      features: ['Makkah & Madinah Stay', 'Group Transport', 'Guided Ziyarat', 'Affordable Accommodation'],
      image: 'https://picsum.photos/600/400',
      aiHint: 'pilgrims praying',
    },
    {
      name: '20-Day Saver Umrah',
      slug: '20-day-saver-umrah',
      price: '$1,800',
      makkahHotel: 'Hotel (800m from Haram)',
      madinaHotel: 'Hotel (600m from Masjid Nabawi)',
      features: ['Shared Rooms', 'Basic Transport', 'Guided Ziyarat', 'Visa Support'],
      image: 'https://picsum.photos/600/416',
      aiHint: 'crowd praying'
    },
    {
      name: '28-Day Ramadan Umrah (Economy)',
      slug: '28-day-ramadan-umrah-economy',
      price: '$2,200',
      makkahHotel: 'Hotel (900m from Haram)',
      madinaHotel: 'Hotel (700m from Masjid Nabawi)',
      features: ['Full Ramadan Stay', 'Group Transport', 'Iftar & Suhoor Arrangement', 'Spiritual Lectures'],
      image: 'https://picsum.photos/600/417',
      aiHint: 'iftar meal'
    },
  ]
};

const PackageCard = ({ pkg }: { pkg: any }) => (
  <Card key={pkg.name} className="flex flex-col overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-lg">
    <CardHeader className="p-0">
      <div className="relative h-56 w-full">
        <Image src={pkg.image} alt={pkg.name} data-ai-hint={pkg.aiHint} fill className="object-cover" />
      </div>
    </CardHeader>
    <CardContent className="flex-grow p-6">
      <CardTitle className="mb-4 text-lg font-headline text-primary">{pkg.name}</CardTitle>
      <div className="space-y-3 text-muted-foreground mb-4">
        <div className="flex items-start">
          <Hotel className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
          <div>
            <p className="font-semibold text-sm">Makkah: {pkg.makkahHotel}</p>
          </div>
        </div>
        <div className="flex items-start">
          <Hotel className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
          <div>
            <p className="font-semibold text-sm">Madina: {pkg.madinaHotel}</p>
          </div>
        </div>
      </div>
      <ul className="space-y-2 text-muted-foreground text-sm">
        {pkg.features.slice(0, 2).map((feature: string) => (
          <li key={feature} className="flex items-center">
            <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter className="p-6 bg-secondary/50 flex justify-between items-center">
      <p className="text-2xl font-bold text-primary">{pkg.price}</p>
      <Link href={`/packages/${pkg.slug}`}>
        <Button className="text-white bg-gradient-to-r from-green-700 to-green-500 hover:from-green-600 hover:to-green-400 dark:from-amber-500 dark:to-yellow-400 dark:hover:from-amber-400 dark:hover:to-yellow-300 dark:text-emerald-900">View Details</Button>
      </Link>
    </CardFooter>
  </Card>
);

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

        <Tabs defaultValue="5-star" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="5-star">5-Star</TabsTrigger>
            <TabsTrigger value="4-star">4-Star</TabsTrigger>
            <TabsTrigger value="3-star">3-Star</TabsTrigger>
            <TabsTrigger value="economy">Economy</TabsTrigger>
          </TabsList>

          {Object.keys(packagesData).map(category => (
            <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {(packagesData as any)[category].map((pkg: any) => <PackageCard key={pkg.slug} pkg={pkg} />)}
                </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Packages;
