
import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

const FeatureCard = ({ title, description, icon: Icon, className }: FeatureCardProps) => {
  return (
    <div className={cn("feature-card", className)}>
      <div className="h-14 w-14 bg-reach-blue/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-7 w-7 text-reach-blue" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
