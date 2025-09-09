import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, HelpCircle } from "lucide-react";

const FloatingActions = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center gap-3">
       {/* Online Chat - Placeholder */}
      <Button size="icon" className="rounded-full h-14 w-14 bg-blue-600 hover:bg-blue-700 shadow-lg">
        <MessageSquare className="h-7 w-7" />
        <span className="sr-only">Online Chat</span>
      </Button>

      {/* WhatsApp */}
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <Button size="icon" className="rounded-full h-14 w-14 bg-green-500 hover:bg-green-600 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
            <span className="sr-only">Chat on WhatsApp</span>
        </Button>
      </a>

      {/* Phone Call */}
      <a href="tel:+1234567890">
        <Button size="icon" className="rounded-full h-14 w-14 bg-red-500 hover:bg-red-600 shadow-lg">
          <Phone className="h-7 w-7" />
          <span className="sr-only">Call Us</span>
        </Button>
      </a>
      
       {/* Umrah Enquiry */}
       <Link href="/umrah-enquiry">
        <Button size="icon" className="rounded-full h-14 w-14 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
          <HelpCircle className="h-7 w-7" />
          <span className="sr-only">Umrah Enquiry</span>
        </Button>
       </Link>
    </div>
  );
};

export default FloatingActions;
