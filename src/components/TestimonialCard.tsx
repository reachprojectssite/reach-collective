
import React from "react";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  image?: string;
  className?: string;
}

const TestimonialCard = ({ 
  quote, 
  name, 
  title, 
  image, 
  className 
}: TestimonialCardProps) => {
  return (
    <div className={cn("testimonial-card", className)}>
      <div className="flex justify-start mb-4">
        <Quote className="text-reach-purple/30 h-10 w-10" />
      </div>
      <p className="italic text-gray-700 mb-6">{quote}</p>
      <div className="flex items-center">
        {image && (
          <div className="mr-4">
            <img 
              src={image} 
              alt={name} 
              className="h-12 w-12 rounded-full object-cover"
            />
          </div>
        )}
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
