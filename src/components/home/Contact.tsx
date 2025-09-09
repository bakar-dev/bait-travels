"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 parallax-bg">
      <div className="absolute inset-0 bg-background/80 dark:bg-background/90" />
      <div className="container relative">
        <div className="text-center mb-12">
          <h2 className="font-arabic text-4xl md:text-5xl font-bold text-primary mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or need assistance? Fill out the form below, and our team will be happy to help you.
          </p>
        </div>
        <Card className="max-w-2xl mx-auto shadow-lg bg-card/80 backdrop-blur-sm">
          <CardContent className="p-6 md:p-8">
            <form
              action="https://formsubmit.co/your-email@example.com" // Replace with your email address
              method="POST"
              className="space-y-6"
            >
              {/* Optional: Redirect to a thank you page */}
              <input type="hidden" name="_next" value="https://your-domain.co/" /> 
              {/* Optional: Disable Captcha */}
              <input type="hidden" name="_captcha" value="false" />

              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" placeholder="Your Name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" name="email" placeholder="you@example.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="How can we help you?" rows={6} required />
              </div>

              <Button type="submit" className="w-full text-white bg-gradient-to-r from-green-700 to-green-500 hover:from-green-600 hover:to-green-400 dark:from-amber-500 dark:to-yellow-400 dark:hover:from-amber-400 dark:hover:to-yellow-300 dark:text-emerald-900">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
