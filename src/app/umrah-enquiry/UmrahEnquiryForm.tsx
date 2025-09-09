"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Loader2 } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const UmrahEnquiryForm = () => {
    const { toast } = useToast();
    const [departureDate, setDepartureDate] = useState<Date | undefined>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
       event.preventDefault();
       setIsSubmitting(true);

       const formData = new FormData(event.currentTarget);
       
       // Manually append date as FormData doesn't pick it up from the hidden input with client-side state
       if (departureDate) {
           formData.set("departureDate", format(departureDate, "PPP"));
       } else {
           formData.set("departureDate", "Not specified");
       }
       
       try {
         const response = await fetch("https://formsubmit.co/your-email@example.com", {
           method: "POST",
           body: formData,
           headers: {
             'Accept': 'application/json'
           },
         });

         if (response.ok) {
           toast({
             title: "Enquiry Sent!",
             description: "Thank you for your interest. We will get back to you with a quote shortly.",
           });
           (event.target as HTMLFormElement).reset();
           setDepartureDate(undefined);
         } else {
           throw new Error("Form submission failed");
         }
       } catch (error) {
         console.error(error);
         toast({
           variant: "destructive",
           title: "Uh oh! Something went wrong.",
           description: "There was a problem with your request. Please try again.",
         });
       } finally {
         setIsSubmitting(false);
       }
    };


  return (
    <Card className="max-w-4xl mx-auto shadow-lg">
      <CardContent className="p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
             {/* Optional: Disable Captcha */}
             <input type="hidden" name="_captcha" value="false" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" name="fullName" placeholder="Your Full Name" required />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" name="email" placeholder="you@example.com" required />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" placeholder="Your Phone Number" required />
                </div>
                <div className="flex flex-col space-y-2">
                    <Label>Preferred Departure Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !departureDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {departureDate ? format(departureDate, "PPP") : <span>Pick a date</span>}
                          </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={departureDate}
                          onSelect={setDepartureDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                </div>
            </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <div className="space-y-2">
                    <Label htmlFor="adults">Adults (12+)</Label>
                    <Input id="adults" name="adults" type="number" min="1" defaultValue="1" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="children">Children (2-11)</Label>
                    <Input id="children" name="children" type="number" min="0" defaultValue="0" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="infants">Infants (Under 2)</Label>
                    <Input id="infants" name="infants" type="number" min="0" defaultValue="0" />
                </div>
            </div>

            <div className="space-y-2">
                <Label>Package Type</Label>
                <Select name="packageType" defaultValue="4-Star">
                    <SelectTrigger>
                        <SelectValue placeholder="Select a package type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Economy">Economy</SelectItem>
                      <SelectItem value="3-Star">3-Star</SelectItem>
                      <SelectItem value="4-Star">4-Star</SelectItem>
                      <SelectItem value="5-Star">5-Star</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-2">
                <Label htmlFor="message">Additional Information</Label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder="Let us know about any special requirements or questions."
                    className="resize-none"
                />
            </div>

            <Button type="submit" className="w-full text-white bg-gradient-to-r from-green-700 to-green-500 hover:from-green-600 hover:to-green-400 dark:from-amber-500 dark:to-yellow-400 dark:hover:from-amber-400 dark:hover:to-yellow-300 dark:text-emerald-900" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending Enquiry...
                </>
              ) : (
                "Get a Quote"
              )}
            </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default UmrahEnquiryForm;
