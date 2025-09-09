"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { generateSeoOptimizedContent, GenerateSeoOptimizedContentOutput } from "@/ai/flows/generate-seo-optimized-content";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Wand2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  topic: z.string().min(5, { message: "Topic must be at least 5 characters." }),
  keywords: z.string().min(3, { message: "Please provide at least one keyword." }),
  approximateWordCount: z.coerce.number().min(50, { message: "Word count must be at least 50." }),
});

type FormData = z.infer<typeof formSchema>;

const SeoToolClient = () => {
  const { toast } = useToast();
  const [generatedContent, setGeneratedContent] = useState<GenerateSeoOptimizedContentOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "",
      keywords: "",
      approximateWordCount: 300,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setGeneratedContent(null);
    try {
      const result = await generateSeoOptimizedContent(data);
      setGeneratedContent(result);
    } catch (error) {
      console.error("Error generating content:", error);
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: "Could not generate content. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline">Content Parameters</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Topic</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., The benefits of performing Umrah in Ramadan" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="keywords"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Keywords (comma-separated)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Umrah, Ramadan, benefits, Makkah" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="approximateWordCount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Approximate Word Count</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Generate Content
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <div className="space-y-8">
        {isLoading && (
          <Card className="shadow-lg animate-pulse">
            <CardHeader>
              <div className="h-6 bg-muted rounded w-3/4"></div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-4 bg-muted rounded w-full"></div>
              <div className="h-4 bg-muted rounded w-full"></div>
              <div className="h-4 bg-muted rounded w-5/6"></div>
              <div className="h-4 bg-muted rounded w-3/4"></div>
            </CardContent>
          </Card>
        )}
        
        {generatedContent && (
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">{generatedContent.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none text-muted-foreground whitespace-pre-wrap">
                {generatedContent.content}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SeoToolClient;
