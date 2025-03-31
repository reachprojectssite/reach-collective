import React from "react";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
}

const TestimonialCard = ({ quote, name, title }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="mb-6">
        <p className="text-gray-700 italic">"{quote}"</p>
      </div>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-gray-600 text-sm">{title}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
