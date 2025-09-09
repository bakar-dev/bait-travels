
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Hero from '@/components/home/Hero';
import Packages from '@/components/home/Packages';
import About from '@/components/home/About';
import Blog from '@/components/home/Blog';
import Contact from '@/components/home/Contact';
import FloatingActions from '@/components/common/FloatingActions';
import QuickEnquiry from '@/components/home/QuickEnquiry';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pb-20">
        <Hero />
        <QuickEnquiry />
        <Packages />
        <About />
        <Blog />
        <Contact />
      </main>
      <FloatingActions />
      <Footer />
    </div>
  );
}
