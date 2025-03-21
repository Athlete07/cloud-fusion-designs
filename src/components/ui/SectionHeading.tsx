
import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  align?: "left" | "center" | "right";
  className?: string;
  subtitleClassName?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = "center",
  className,
  subtitleClassName,
}) => {
  return (
    <div
      className={cn(
        "mb-10",
        {
          "text-left": align === "left",
          "text-center": align === "center",
          "text-right": align === "right",
        },
        className
      )}
    >
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      <p
        className={cn(
          "text-lg text-muted-foreground max-w-2xl mx-auto",
          {
            "mx-0": align === "left" || align === "right",
          },
          subtitleClassName
        )}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeading;
