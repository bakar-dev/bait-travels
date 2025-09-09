"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Clock, HeartHandshake, Headphones, Star, Users } from "lucide-react";
import { cn } from '@/lib/utils';

const features = [
  {
    icon: <Star className="h-8 w-8 text-accent" />,
    title: "Exceptional Service",
    description: "Our team is dedicated to providing you with a seamless and comfortable journey from start to finish.",
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-accent" />,
    title: "Spiritual Guidance",
    description: "Benefit from the knowledge of our experienced guides who provide spiritual support throughout your trip.",
  },
  {
    icon: <Headphones className="h-8 w-8 text-accent" />,
    title: "24/7 Support",
    description: "We are available around the clock to assist you with any needs or emergencies that may arise.",
  },
  {
    icon: <Award className="h-8 w-8 text-accent" />,
    title: "Years of Experience",
    description: "With over a decade in the industry, we have the expertise to craft your perfect pilgrimage.",
  },
   {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: "Community Trust",
    description: "Thousands of pilgrims have trusted us with their sacred journey, and their satisfaction is our priority.",
  },
   {
    icon: <Clock className="h-8 w-8 text-accent" />,
    title: "Efficient Planning",
    description: "We handle all the details, from visas to flights and hotels, so you can focus on what's important.",
  },
];

const FeatureCard = ({ feature }: { feature: (typeof features)[0] }) => (
    <Card className="text-center shadow-lg bg-card/80 h-full min-w-[300px] md:min-w-[350px] backdrop-blur-sm">
        <CardHeader>
            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                {feature.icon}
            </div>
        </CardHeader>
        <CardContent>
            <CardTitle className="text-xl font-headline text-primary mb-2">{feature.title}</CardTitle>
            <p className="text-muted-foreground">{feature.description}</p>
        </CardContent>
    </Card>
);


const WhyUs = () => {
  return (
    <section id="why-us" className="py-16 sm:py-24 parallax-bg">
      <div className="absolute inset-0 bg-background/80 dark:bg-background/90" />
      <div className="container relative">
        <div className="text-center mb-12">
          <h2 className="font-arabic text-4xl md:text-5xl font-bold text-primary mb-4">Why Choose Baitullah Travels?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are committed to making your sacred journey a memorable and spiritually fulfilling experience.
          </p>
        </div>
      </div>
       <div className="relative w-full overflow-hidden">
            <div className="flex animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
                {[...features, ...features].map((feature, index) => (
                    <div key={index} className="px-4">
                        <FeatureCard feature={feature} />
                    </div>
                ))}
            </div>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-background via-transparent to-background"></div>
        </div>
    </section>
  );
};

export default WhyUs;
