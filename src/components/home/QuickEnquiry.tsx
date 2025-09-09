"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormField, FormItem, FormControl, FormMessage, FormLabel } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Users, Phone, Send, Loader2 } from "lucide-react";

const formSchema = z.object({
  passengers: z.coerce.number().min(1, { message: "Min 1" }),
  phone: z.string().min(10, { message: "Valid number required" }),
  packageType: z.enum(["Economy", "3-Star", "4-Star", "5-Star"]),
});

type FormData = z.infer<typeof formSchema>;

const QuickEnquiry = () => {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      passengers: 1,
      phone: "",
      packageType: "4-Star",
    },
  });

  const { isSubmitting, isDirty, isValid } = form.formState;

  const onSubmit = async (data: FormData) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value.toString());
      });
      formData.append("_captcha", "false");


      const response = await fetch("https://formsubmit.co/baker.pucit@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        },
      });

      if (response.ok) {
        toast({
          title: "Quick Enquiry Sent!",
          description: "We've received your details and will call you back shortly.",
        });
        form.reset();
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
    }
  };

  return (
    <section id="quick-enquiry" className="relative -mt-20 z-20">
      <div className="container">
        <Card className="shadow-2xl">
          <CardContent className="p-4 md:p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-4 items-end gap-4">
                 <input type="hidden" name="_captcha" value="false" />
                <FormField
                  control={form.control}
                  name="passengers"
                  render={({ field }) => (
                    <FormItem>
                       <FormLabel className="md:sr-only">Passengers</FormLabel>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input type="number" placeholder="No. of Passengers" className="pl-10" {...field} />
                      </div>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                       <FormLabel className="md:sr-only">Phone Number</FormLabel>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input placeholder="Your Phone Number" className="pl-10" {...field} />
                      </div>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="packageType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="md:sr-only">Package Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Package" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Economy">Economy</SelectItem>
                          <SelectItem value="3-Star">3-Star</SelectItem>
                          <SelectItem value="4-Star">4-Star</SelectItem>
                          <SelectItem value="5-Star">5-Star</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isSubmitting || !isDirty || !isValid}>
                   {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4"/>}
                  {isSubmitting ? "Sending..." : "Request a Callback"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuickEnquiry;
