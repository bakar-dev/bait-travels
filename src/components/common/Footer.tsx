import { Facebook, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Baitullah Travels. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Instagram size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
