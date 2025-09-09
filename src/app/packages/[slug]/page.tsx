import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import FloatingActions from '@/components/common/FloatingActions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Hotel, Plane, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const packagesData = {
  '5-star': [
    {
      name: '7-Day Platinum Umrah',
      slug: '7-day-platinum-umrah',
      price: '$2,800',
      rating: 5,
      duration: '7 Days, 6 Nights',
      makkahHotel: 'Raffles Makkah Palace',
      madinaHotel: 'The Oberoi Madina',
      features: ['Full Board (Breakfast, Lunch, Dinner)', 'VIP Transport in a private car', 'Personal multilingual guide', 'Exclusive Ziyarat of historical sites', 'Umrah visa processing included', 'Special Umrah kit with essentials', 'Business Class Flights available on request'],
      image: 'https://picsum.photos/1200/801',
      aiHint: 'luxury hotel Kaaba',
      itinerary: [
          'Day 1: Arrival in Jeddah, VIP transfer to Makkah hotel.',
          'Day 2: Perform Umrah with your personal guide.',
          'Day 3: Exclusive Ziyarat in Makkah.',
          'Day 4: Travel to Madinah in a luxury vehicle.',
          'Day 5: Prayers in Masjid an-Nabawi, guided tour.',
          'Day 6: Ziyarat in Madinah.',
          'Day 7: Departure from Madinah airport.'
      ]
    },
    {
      name: '10-Day Luxury Umrah',
      slug: '10-day-luxury-umrah',
      price: '$3,200',
      rating: 5,
      duration: '10 Days, 9 Nights',
      makkahHotel: '5-Star Hotel with Kaaba View',
      madinaHotel: '5-Star Hotel near Prophet\'s Mosque',
      features: ['Full Board (Breakfast, Lunch, Dinner)', 'VIP Transport in a private car', 'Personal multilingual guide', 'Exclusive Ziyarat of historical sites', 'Umrah visa processing included', 'Special Umrah kit with essentials'],
      image: 'https://picsum.photos/1200/800',
      aiHint: 'hotel suite luxury',
      itinerary: [
          'Day 1: Arrival in Jeddah, transfer to Makkah hotel.',
          'Day 2: Perform Umrah, rest and prayers.',
          'Day 3: Ziyarat in Makkah.',
          'Day 4: Free day for personal worship.',
          'Day 5: Travel to Madinah.',
          'Day 6: Prayers in Masjid an-Nabawi.',
          'Day 7: Ziyarat in Madinah.',
          'Day 8: Free day for personal worship.',
          'Day 9: Prepare for departure.',
          'Day 10: Departure from Madinah airport.'
      ]
    },
    {
      name: '12-Day Premium Umrah',
      slug: '12-day-premium-umrah',
      price: '$3,800',
      rating: 5,
      duration: '12 Days, 11 Nights',
      makkahHotel: 'Clock Tower Complex Hotel',
      madinaHotel: 'Anwar Al Madinah Mövenpick',
      features: ['Full Board', 'Private Airport Transfer', 'Dedicated Concierge', 'Historical Tours', 'Visa Processing', 'Haram-view rooms'],
      image: 'https://picsum.photos/1200/807',
      aiHint: 'hotel lobby luxury',
      itinerary: [
          'Day 1-2: Arrival, check-in to Makkah Hotel, perform Umrah.',
          'Day 3-5: Personal worship and optional guided tours in Makkah.',
          'Day 6: Travel to Madinah via private car.',
          'Day 7-10: Prayers in Masjid an-Nabawi, Ziyarat and exploration.',
          'Day 11: Free day in Madinah.',
          'Day 12: Departure from Madinah.'
      ]
    },
     {
      name: '15-Day Royal Umrah',
      slug: '15-day-royal-umrah',
      price: '$4,500',
      rating: 5,
      duration: '15 Days, 14 Nights',
      makkahHotel: 'Jabal Omar Hyatt Regency',
      madinaHotel: 'Pullman Zamzam Madina',
      features: ['All Inclusive', 'Business Class Flights', 'Helicopter Tour of Makkah', '24/7 Butler Service', 'Private Ziyarat', 'Fast-Track Immigration'],
      image: 'https://picsum.photos/1200/808',
      aiHint: 'luxury suite balcony',
      itinerary: [
          'Day 1-3: Arrival, Umrah, and rest in Makkah.',
          'Day 4-7: Extended worship, historical site tours.',
          'Day 8: Travel to Madinah.',
          'Day 9-13: Deep spiritual immersion in Madinah, visiting key sites.',
          'Day 14: Final prayers and shopping.',
          'Day 15: Departure.'
      ]
    },
  ],
  '4-star': [
    {
       name: '7-Day Gold Umrah',
      slug: '7-day-gold-umrah',
      price: '$2,100',
      rating: 4,
      duration: '7 Days, 6 Nights',
      makkahHotel: 'Makkah Hotel & Towers',
      madinaHotel: 'Madinah Hilton',
      features: ['Breakfast & Dinner', 'Private Transport', 'Guided Ziyarat', 'Visa Processing', 'Umrah Kit'],
      image: 'https://picsum.photos/1200/809',
      aiHint: 'modern hotel room',
       itinerary: [
          'Day 1: Arrival and transfer to Makkah.',
          'Day 2: Perform Umrah, guided.',
          'Day 3: Ziyarat in Makkah.',
          'Day 4: Travel to Madinah.',
          'Day 5-6: Prayers and Ziyarat in Madinah.',
          'Day 7: Departure.'
      ]
    },
    {
      name: '10-Day Deluxe Umrah',
      slug: '10-day-deluxe-umrah',
      price: '$2,500',
      rating: 4,
      duration: '10 Days, 9 Nights',
      makkahHotel: '4-Star Hotel (250m from Haram)',
      madinaHotel: '4-Star Hotel (200m from Masjid Nabawi)',
      features: ['Breakfast & Dinner', 'Private Luxury Transport', 'Exclusive Ziyarat', 'Umrah Kit', 'Visa Processing'],
      image: 'https://picsum.photos/1200/806',
      aiHint: 'hotel suite',
       itinerary: [
          'Day 1-2: Arrival in Makkah, Umrah performance.',
          'Day 3-4: Personal worship and exploration.',
          'Day 5: Ziyarat of Makkah holy sites.',
          'Day 6: Travel to Madinah.',
          'Day 7-9: Prayers and Ziyarat in Madinah.',
          'Day 10: Departure.'
      ]
    },
     {
      name: '12-Day Comfort Umrah',
      slug: '12-day-comfort-umrah',
      price: '$2,900',
      rating: 4,
      duration: '12 Days, 11 Nights',
      makkahHotel: 'Swissôtel Al Maqam Makkah',
      madinaHotel: 'Shaza Al Madina',
      features: ['Daily Breakfast Buffet', 'Private Transport', 'Guided Ziyarat', 'Visa Processing'],
      image: 'https://picsum.photos/1200/810',
      aiHint: 'comfortable hotel room',
       itinerary: [
          'Day 1-5: Makkah stay, including Umrah and Ziyarat.',
          'Day 6: Journey to Madinah.',
          'Day 7-11: Madinah stay, prayers and local Ziyarat.',
          'Day 12: Departure.'
      ]
    },
    {
      name: '14-Day Executive Umrah',
      slug: '14-day-executive-umrah',
      price: '$3,100',
      rating: 4,
      duration: '14 Days, 13 Nights',
      makkahHotel: 'Mövenpick Hotel & Residences Hajar Tower Makkah',
      madinaHotel: 'Dar Al Hijra InterContinental',
      features: ['Breakfast & Dinner', 'Upgraded Transport', 'Personalized Ziyarat', 'Fast-Track Visa', 'Lounge Access'],
      image: 'https://picsum.photos/1200/811',
      aiHint: 'executive hotel lounge',
       itinerary: [
          'Day 1-6: Makkah stay with Umrah and comprehensive Ziyarat.',
          'Day 7: Travel day to Madinah.',
          'Day 8-13: Madinah stay with prayers and in-depth Ziyarat.',
          'Day 14: Departure.'
      ]
    },
  ],
   '3-star': [
    {
      name: '7-Day Value Umrah',
      slug: '7-day-value-umrah',
      price: '$1,600',
      rating: 3,
      duration: '7 Days, 6 Nights',
      makkahHotel: '3-Star Hotel (400m from Haram)',
      madinaHotel: '3-Star Hotel (250m from Masjid Nabawi)',
      features: ['Breakfast Included', 'Group Transport', 'Guided Ziyarat', 'Visa Assistance'],
      image: 'https://picsum.photos/1200/812',
      aiHint: 'clean hotel room',
       itinerary: [
          'Day 1: Arrival, transfer to Makkah.',
          'Day 2: Perform Umrah.',
          'Day 3: Ziyarat in Makkah.',
          'Day 4: Travel to Madinah.',
          'Day 5-6: Prayers in Madinah.',
          'Day 7: Departure.'
      ]
    },
    {
      name: '10-Day Standard Umrah',
      slug: '10-day-standard-umrah',
      price: '$1,950',
      rating: 3,
      duration: '10 Days, 9 Nights',
      makkahHotel: '3-Star Hotel (450m from Haram)',
      madinaHotel: '3-Star Hotel (300m from Masjid Nabawi)',
      features: ['Breakfast Included', 'Private Transport', 'Dedicated Guide', 'Group Ziyarat', 'Visa Processing'],
      image: 'https://picsum.photos/1200/801',
      aiHint: 'modern hotel Mecca',
       itinerary: [
          'Day 1-4: Makkah stay, Umrah and personal worship.',
          'Day 5: Ziyarat in Makkah.',
          'Day 6: Travel to Madinah.',
          'Day 7-9: Madinah stay, prayers and Ziyarat.',
          'Day 10: Departure.'
      ]
    },
    {
      name: '12-Day Classic Umrah',
      slug: '12-day-classic-umrah',
      price: '$2,200',
      rating: 3,
      duration: '12 Days, 11 Nights',
      makkahHotel: 'Al Ebaa Hotel',
      madinaHotel: 'Elaf Al Bustan Hotel',
      features: ['Breakfast Included', 'Group Transport', 'Guided Ziyarat', 'Umrah Seminars'],
      image: 'https://picsum.photos/1200/813',
      aiHint: 'simple hotel room',
       itinerary: [
          'Day 1-5: Makkah stay.',
          'Day 6: Ziyarat.',
          'Day 7: Travel to Madinah.',
          'Day 8-11: Madinah prayers and Ziyarat.',
          'Day 12: Departure.'
      ]
    },
    {
      name: '15-Day Extended Umrah',
      slug: '15-day-extended-umrah',
      price: '$2,500',
      rating: 3,
      duration: '15 Days, 14 Nights',
      makkahHotel: 'Nawazi Watheer Hotel',
      madinaHotel: 'Al Nokhba Royal Inn',
      features: ['Breakfast Included', 'Shared Transport', 'Full Ziyarat Program', 'Spiritual Guidance'],
      image: 'https://picsum.photos/1200/814',
      aiHint: 'pilgrims walking',
       itinerary: [
          'Day 1-7: Makkah stay.',
          'Day 8: Travel to Madinah.',
          'Day 9-14: Madinah stay.',
          'Day 15: Departure.'
      ]
    },
  ],
  'economy': [
    {
      name: '10-Day Budget Umrah',
      slug: '10-day-budget-umrah',
      price: '$1,350',
      rating: 2,
      duration: '10 Days, 9 Nights',
      makkahHotel: 'Hotel (700m from Haram)',
      madinaHotel: 'Hotel (550m from Masjid Nabawi)',
      features: ['Room Only', 'Group Transport', 'Guided Ziyarat', 'Affordable Accommodation'],
      image: 'https://picsum.photos/1200/815',
      aiHint: 'group pilgrims',
       itinerary: [
          'Day 1-5: Makkah stay & Umrah.',
          'Day 6: Travel to Madinah.',
          'Day 7-9: Madinah stay & Ziyarat.',
          'Day 10: Departure.'
      ]
    },
    {
      name: '14-Day Economy Umrah',
      slug: '14-day-economy-umrah',
      price: '$1,500',
      rating: 2,
      duration: '14 Days, 13 Nights',
      makkahHotel: 'Hotel (650m from Haram)',
      madinaHotel: 'Hotel (500m from Masjid Nabawi)',
      features: ['Makkah & Madinah Stay', 'Group Transport', 'Guided Ziyarat', 'Affordable Accommodation'],
      image: 'https://picsum.photos/1200/800',
      aiHint: 'pilgrims praying',
       itinerary: [
          'Day 1-6: Makkah stay.',
          'Day 7: Travel to Madinah.',
          'Day 8-13: Madinah stay.',
          'Day 14: Departure.'
      ]
    },
    {
      name: '20-Day Saver Umrah',
      slug: '20-day-saver-umrah',
      price: '$1,800',
      rating: 2,
      duration: '20 Days, 19 Nights',
      makkahHotel: 'Hotel (800m from Haram)',
      madinaHotel: 'Hotel (600m from Masjid Nabawi)',
      features: ['Shared Rooms', 'Basic Transport', 'Guided Ziyarat', 'Visa Support'],
      image: 'https://picsum.photos/1200/816',
      aiHint: 'crowd praying',
       itinerary: [
          'Day 1-10: Makkah stay.',
          'Day 11: Travel to Madinah.',
          'Day 12-19: Madinah stay.',
          'Day 20: Departure.'
      ]
    },
    {
      name: '28-Day Ramadan Umrah (Economy)',
      slug: '28-day-ramadan-umrah-economy',
      price: '$2,200',
      rating: 3,
      duration: '28 Days, 27 Nights',
      makkahHotel: 'Hotel (900m from Haram)',
      madinaHotel: 'Hotel (700m from Masjid Nabawi)',
      features: ['Full Ramadan Stay', 'Group Transport', 'Iftar & Suhoor Arrangement', 'Spiritual Lectures'],
      image: 'https://picsum.photos/1200/817',
      aiHint: 'iftar meal',
       itinerary: [
          'Day 1-14: Makkah first half of Ramadan.',
          'Day 15: Travel to Madinah.',
          'Day 16-28: Madinah second half of Ramadan, including Laylat al-Qadr.',
          'Day 29: Departure.'
      ]
    },
  ]
};

// Flatten the packages for easy lookup
const allPackages = Object.values(packagesData).flat();

export default function PackageDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  const pkg = allPackages.find(p => p.slug === slug) || {
    name: 'Package Not Found',
    slug: slug,
    price: 'N/A',
    duration: 'N/A',
    rating: 0,
    makkahHotel: 'Not available',
    madinaHotel: 'Not available',
    features: ['Please select a valid package from our packages page.'],
    image: 'https://picsum.photos/1200/801',
    aiHint: 'desert empty',
    itinerary: [
        'No itinerary available for this package.'
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-12 sm:py-20 bg-secondary/30">
        <div className="container">
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column - Image and Booking */}
                <div className="lg:col-span-2 space-y-8">
                     <Card className="overflow-hidden shadow-lg">
                        <div className="relative h-[450px] w-full">
                            <Image src={pkg.image} alt={pkg.name} data-ai-hint={pkg.aiHint} fill className="object-cover" />
                        </div>
                        <CardHeader>
                            <CardTitle className="text-3xl font-headline text-primary">{pkg.name}</CardTitle>
                            <div className="flex items-center gap-1">
                                {Array.from({ length: pkg.rating }).map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                                ))}
                                {Array.from({ length: 5-pkg.rating }).map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-muted-foreground/30" />
                                ))}
                            </div>
                        </CardHeader>
                     </Card>
                     <Card className="shadow-lg">
                        <CardHeader><CardTitle>Detailed Itinerary</CardTitle></CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {pkg.itinerary.map((item: string, index: number) => (
                                    <div key={index} className="flex items-start">
                                        <div className="bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">{index + 1}</div>
                                        <p className="pt-1 text-muted-foreground">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                     </Card>
                </div>
                {/* Right Column - Details */}
                <div className="space-y-8">
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl">Package Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                             <div>
                                <h3 className="font-semibold mb-2">Price per person</h3>
                                <p className="text-3xl font-bold text-primary">{pkg.price}</p>
                             </div>
                              <div>
                                <h3 className="font-semibold mb-2">Duration</h3>
                                <p className="text-muted-foreground">{pkg.duration}</p>
                             </div>
                             <div className="space-y-3">
                                <h3 className="font-semibold">Accommodation</h3>
                                <div className="flex items-center text-muted-foreground">
                                    <Hotel className="h-5 w-5 mr-3 text-primary" />
                                    <span>{pkg.makkahHotel}</span>
                                </div>
                                 <div className="flex items-center text-muted-foreground">
                                    <Hotel className="h-5 w-5 mr-3 text-primary" />
                                    <span>{pkg.madinaHotel}</span>
                                </div>
                             </div>
                        </CardContent>
                    </Card>
                     <Card className="shadow-lg">
                        <CardHeader><CardTitle>What's Included</CardTitle></CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {pkg.features.map((feature: string) => (
                                    <li key={feature} className="flex items-start text-muted-foreground">
                                        <Check className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    <Button asChild className="w-full text-lg py-6">
                        <Link href="/umrah-enquiry">Enquire Now</Link>
                    </Button>
                </div>
            </div>
        </div>
      </main>
      <FloatingActions />
      <Footer />
    </div>
  );
}
