
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const blogPosts = [
  {
    slug: '10-essential-items-to-pack-for-your-umrah-trip',
    title: '10 Essential Items to Pack for Your Umrah Trip',
    excerpt: 'Make sure you have everything you need for a comfortable and stress-free pilgrimage with our essential packing list.',
    image: 'https://picsum.photos/600/403',
    aiHint: 'travel luggage'
  },
  {
    slug: 'a-step-by-step-guide-to-performing-hajj',
    title: 'A Step-by-Step Guide to Performing Hajj',
    excerpt: 'Understand the rituals and steps of Hajj with our comprehensive guide, designed for first-time pilgrims.',
    image: 'https://picsum.photos/600/404',
    aiHint: 'compass qibla'
  },
  {
    slug: 'the-spiritual-significance-of-zamzam-water',
    title: 'The Spiritual Significance of Zamzam Water',
    excerpt: 'Learn about the history and virtues of the blessed water of Zamzam and its importance to pilgrims.',
    image: 'https://picsum.photos/600/405',
    aiHint: 'water spring'
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-arabic text-4xl md:text-5xl font-bold text-primary mb-4">Insights & Guides</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed and prepared for your journey with our collection of articles, tips, and spiritual reminders.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.title} className="flex flex-col overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-lg">
               <CardHeader className="p-0">
                 <div className="relative h-56 w-full">
                    <Image src={post.image} alt={post.title} data-ai-hint={post.aiHint} fill className="object-cover"/>
                  </div>
                </CardHeader>
              <CardContent className="p-6 flex flex-col flex-grow">
                <CardTitle className="mb-2 text-xl font-headline text-primary">{post.title}</CardTitle>
                <p className="text-muted-foreground flex-grow mb-4">{post.excerpt}</p>
                <Button variant="link" asChild className="p-0 self-start text-primary">
                  <Link href={`/blog/${post.slug}`}>Read More &rarr;</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
