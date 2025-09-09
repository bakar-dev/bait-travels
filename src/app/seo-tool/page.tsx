import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import SeoToolClient from './SeoToolClient';

export default function SeoToolPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-16 sm:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="font-arabic text-4xl md:text-5xl font-bold text-primary mb-4">SEO Content Generator</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Create unique, search-engine optimized content for Umrah and Hajj topics. Fill in the details below to generate a title and article.
            </p>
          </div>
          <SeoToolClient />
        </div>
      </main>
      <Footer />
    </div>
  );
}
