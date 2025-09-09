

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import FloatingActions from '@/components/common/FloatingActions';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Calendar, User, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { allBlogPosts, getBlogPostBySlug } from '@/lib/blog-data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Function to calculate reading time
const getReadingTime = (content: string) => {
  const text = content.replace(/<[^>]+>/g, '');
  const words = text.split(/\s+/).filter(Boolean).length;
  const wpm = 200; // average words per minute
  return Math.ceil(words / wpm);
};

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  const readingTime = getReadingTime(post.content);

  const currentIndex = allBlogPosts.findIndex(p => p.slug === params.slug);
  const previousPost = currentIndex > 0 ? allBlogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allBlogPosts.length - 1 ? allBlogPosts[currentIndex + 1] : null;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-12 sm:py-20 bg-secondary/30">
        <div className="container max-w-4xl">
            <article>
                <header className="mb-8">
                    <h1 className="text-4xl font-headline font-bold text-primary mb-4">{post.title}</h1>
                    <div className="flex items-center text-sm text-muted-foreground flex-wrap">
                        <div className="flex items-center mr-6 mb-2">
                            <User className="h-4 w-4 mr-2" />
                            <span>{post.author}</span>
                        </div>
                        <div className="flex items-center mr-6 mb-2">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center mb-2">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>{readingTime} min read</span>
                        </div>
                    </div>
                </header>

                <Card className="overflow-hidden shadow-lg mb-8">
                    <div className="relative h-[400px] w-full">
                        <Image src={post.image} alt={post.title} data-ai-hint={post.aiHint} fill className="object-cover" />
                    </div>
                </Card>
                
                <div 
                    className="prose prose-lg max-w-none text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>

            <nav className="mt-12 flex justify-between items-center border-t pt-8">
                <div>
                    {previousPost && (
                        <Button variant="outline" asChild>
                            <Link href={`/blog/${previousPost.slug}`}>
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Previous Post
                            </Link>
                        </Button>
                    )}
                </div>
                <div>
                    {nextPost && (
                        <Button variant="outline" asChild>
                             <Link href={`/blog/${nextPost.slug}`}>
                                Next Post
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    )}
                </div>
            </nav>
        </div>
      </main>
      <FloatingActions />
      <Footer />
    </div>
  );
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return allBlogPosts.map(post => ({
    slug: post.slug,
  }));
}
