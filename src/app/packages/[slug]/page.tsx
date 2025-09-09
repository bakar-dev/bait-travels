import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import FloatingActions from '@/components/common/FloatingActions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Hotel, Plane, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// This is mock data. In a real application, you would fetch this based on the slug.
const allPackages: { [key: string]: any } = {
  '10-day-luxury-umrah': {
    name: '10-Day Luxury Umrah',
    price: '$3,200',
    duration: '10 Days, 9 Nights',
    rating: 5,
    makkahHotel: '5-Star Hotel with Kaaba View',
    madinaHotel: '5-Star Hotel near Prophet\'s Mosque',
    features: ['Full Board (Breakfast, Lunch, Dinner)', 'VIP Transport in a private car', 'Personal multilingual guide', 'Exclusive Ziyarat of historical sites', 'Umrah visa processing included', 'Special Umrah kit with essentials'],
    image: 'https://picsum.photos/1200/800',
    aiHint: 'luxury hotel Kaaba',
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
  // Add other packages here if you want to test them directly
};


export default function PackageDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  // A real app would fetch the package details based on the slug
  // For this demo, we'll create a dummy package if it doesn't exist
  const pkg = allPackages[slug] || {
    name: 'Umrah Package',
    slug: slug,
    price: '$1,999',
    duration: '12 Days, 11 Nights',
    rating: 4,
    makkahHotel: '4-Star Hotel near Haram',
    madinaHotel: '4-Star Hotel in Madinah',
    features: ['Breakfast Included', 'Shared Transport', 'Guided Ziyarat', 'Visa Processing'],
    image: 'https://picsum.photos/1200/801',
    aiHint: 'pilgrims praying',
    itinerary: [
        'Day 1: Arrival and transfer to Makkah.',
        'Day 2-6: Makkah - Umrah and personal worship.',
        'Day 7: Travel to Madinah.',
        'Day 8-11: Madinah - Prayers and Ziyarat.',
        'Day 12: Departure.'
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
                            </div>
                        </CardHeader>
                     </Card>
                     <Card className="shadow-lg">
                        <CardHeader><CardTitle>Detailed Itinerary</CardTitle></CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {pkg.itinerary.map((item: string, index: number) => (
                                    <div key={index} className="flex items-start">
                                        <div className="bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4">{index + 1}</div>
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
                                    <li key={feature} className="flex items-center text-muted-foreground">
                                        <Check className="h-5 w-5 text-green-500 mr-3" />
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
