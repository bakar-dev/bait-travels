'use server';
/**
 * @fileOverview SEO content generation flow.
 *
 * - generateSeoOptimizedContent - A function that generates SEO optimized content.
 * - GenerateSeoOptimizedContentInput - The input type for the generateSeoOptimizedContent function.
 * - GenerateSeoOptimizedContentOutput - The return type for the generateSeoOptimizedContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSeoOptimizedContentInputSchema = z.object({
  topic: z.string().describe('The topic of the content.'),
  keywords: z.string().describe('A comma-separated list of keywords to optimize for.'),
  approximateWordCount: z.number().describe('The approximate word count of the content.'),
});
export type GenerateSeoOptimizedContentInput = z.infer<
  typeof GenerateSeoOptimizedContentInputSchema
>;

const GenerateSeoOptimizedContentOutputSchema = z.object({
  title: z.string().describe('The SEO optimized title of the content.'),
  content: z.string().describe('The SEO optimized content.'),
});
export type GenerateSeoOptimizedContentOutput = z.infer<
  typeof GenerateSeoOptimizedContentOutputSchema
>;

export async function generateSeoOptimizedContent(
  input: GenerateSeoOptimizedContentInput
): Promise<GenerateSeoOptimizedContentOutput> {
  return generateSeoOptimizedContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSeoOptimizedContentPrompt',
  input: {schema: GenerateSeoOptimizedContentInputSchema},
  output: {schema: GenerateSeoOptimizedContentOutputSchema},
  prompt: `You are an SEO expert specializing in generating content for Umrah and Hajj.

  Your task is to generate an SEO-optimized title and content based on the given topic and keywords.
  The content should be engaging, informative, and optimized for search engines.

  Topic: {{{topic}}}
  Keywords: {{{keywords}}}
  Approximate Word Count: {{{approximateWordCount}}}

  Instructions:
  1.  Analyze the given topic and keywords to understand the user intent.
  2.  Create a title that is both click-worthy and SEO-friendly, incorporating relevant keywords.
  3.  Write content that is well-structured, easy to read, and provides valuable information to the reader.
  4.  Strategically incorporate the provided keywords throughout the content, ensuring a natural flow and avoiding keyword stuffing.
  5.  Consider the approximate word count as a guideline, but prioritize quality and relevance over strict adherence to the number.
  6.  Ensure that the content is unique and original, avoiding plagiarism or duplication.

  Output:
  {
  "title": "[SEO Optimized Title]",
  "content": "[SEO Optimized Content]"
  }
`,
});

const generateSeoOptimizedContentFlow = ai.defineFlow(
  {
    name: 'generateSeoOptimizedContentFlow',
    inputSchema: GenerateSeoOptimizedContentInputSchema,
    outputSchema: GenerateSeoOptimizedContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
