
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">
      {/* WhatsApp */}
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <Button size="icon" className="rounded-full h-16 w-16 bg-green-500 hover:bg-green-600 shadow-lg animate-bounce" style={{ animationDelay: '0.1s' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
            <span className="sr-only">Chat on WhatsApp</span>
        </Button>
      </a>

      {/* Phone Call */}
      <a href="tel:+1234567890">
        <Button size="icon" className="rounded-full h-16 w-16 bg-primary hover:bg-primary/90 shadow-lg animate-bounce" style={{ animationDelay: '0.2s' }}>
          <Phone className="h-8 w-8" />
          <span className="sr-only">Call Us</span>
        </Button>
      </a>
    </div>
  );
};

export default FloatingActions;
