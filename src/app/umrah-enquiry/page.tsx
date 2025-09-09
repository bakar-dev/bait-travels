import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import UmrahEnquiryForm from './UmrahEnquiryForm';
import FloatingActions from '@/components/common/FloatingActions';

export default function UmrahEnquiryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-16 sm:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="font-arabic text-4xl md:text-5xl font-bold text-primary mb-4">Umrah Enquiry</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Please provide us with your travel details, and one of our specialists will get back to you with a customized plan.
            </p>
          </div>
          <UmrahEnquiryForm />
        </div>
      </main>
      <FloatingActions />
      <Footer />
    </div>
  );
}
